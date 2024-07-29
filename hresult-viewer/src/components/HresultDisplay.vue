<script setup lang="ts">
import {ref, watch} from "vue";
import win32errors from "../Win32Err";
import sysErr from "../SysErr.ts";
import clrErr from "../ClrErr.ts";

interface BitCategory {
    name: string;
    description: string;
    start: number;
    end: number;
    nameGetter?: (value: number) => string;
}

const bitCategories: BitCategory[] = [
    {
        name: 'S',
        description: 'Severity (OK or ER for Error)',
        start: 31,
        end: 31,
        nameGetter: (value: number) => value == 0 ? 'OK' : 'ER'
    },
    {
        name: 'R',
        description: 'Reserved - should be 0',
        start: 30,
        end: 30,
        nameGetter: (value: number) => value == 0 ? '-' : 'Reserved'
    },
    {
        name: 'C',
        description: 'Customer (Microsoft, M, or Custom, C)',
        start: 29,
        end: 29,
        nameGetter: (value: number) => value == 0 ? 'M' : 'C'
    },
    {
        name: 'N',
        description: 'Does this HRESULT represent an entry in the NTSTATUS enum?',
        start: 28,
        end: 28,
        nameGetter: (value: number) => value == 0 ? 'NO' : 'YES'
    },
    {
        name: 'X',
        description: 'Reserved - should be 0',
        start: 27,
        end: 27,
        nameGetter: (value: number) => value == 0 ? '-' : 'Reserved'
    },
    {
        name: 'Facility',
        description: 'Facility (area of the system the error originated from)',
        start: 26,
        end: 16,
        nameGetter: (value: number) => value + ' - ' + (facilityIds.hasOwnProperty(value) ? facilityIds[value] : 'Unknown')
    },
    {
        name: 'Code',
        description: 'Code (specific error code)',
        start: 15,
        end: 0,
        nameGetter: getErrorCodeString
    }
];

const facilityIds: {[key: number]: string} = {
    0: 'FACILITY_NULL',
    1: 'FACILITY_RPC',
    2: 'FACILITY_DISPATCH',
    3: 'FACILITY_STORAGE',
    4: 'FACILITY_ITF',
    7: 'FACILITY_WIN32',
    8: 'FACILITY_WINDOWS',
    9: 'FACILITY_SECURITY',
    10: 'FACILITY_CONTROL',
    11: 'FACILITY_CERT',
    12: 'FACILITY_INTERNET',
    13: 'FACILITY_MEDIASERVER',
    14: 'FACILITY_MSMQ',
    15: 'FACILITY_SETUPAPI',
    16: 'FACILITY_SCARD',
    17: 'FACILITY_COMPLUS',
    18: 'FACILITY_AAF ("Microsoft Agent")',
    19: 'FACILITY_URT (.NET Runtime)', //.NET CLR
    20: 'FACILITY_ACS',
    21: 'FACILITY_DPLAY',
    22: 'FACILITY_UMI',
    23: 'FACILITY_SXS',
    24: 'FACILITY_WINDOWS_CE',
    25: 'FACILITY_HTTP',
    26: 'FACILITY_USERMODE_COMMONLOG',
    31: 'FACILITY_USERMODE_FILTER_MANAGER',
    32: 'FACILITY_BACKGROUNDCOPY',
    33: 'FACILITY_CONFIGURATION',
    34: 'FACILITY_STATE_MANAGEMENT',
    35: 'FACILITY_METADIRECTORY',
    36: 'FACILITY_WINDOWSUPDATE',
    37: 'FACILITY_DIRECTORYSERVICE',
    38: 'FACILITY_GRAPHICS',
    39: 'FACILITY_SHELL',
    40: 'FACILITY_TPM_SERVICES',
    41: 'FACILITY_TPM_SOFTWARE',
    48: 'FACILITY_PLA',
    49: 'FACILITY_FVE',
    50: 'FACILITY_FWP',
    51: 'FACILITY_WINRM',
    52: 'FACILITY_NDIS',
    53: 'FACILITY_USERMODE_HYPERVISOR',
    54: 'FACILITY_CMI',
    55: 'FACILITY_USERMODE_VIRTUALIZATION',
    56: 'FACILITY_USERMODE_VOLMGR',
    57: 'FACILITY_BCD',
    58: 'FACILITY_USERMODE_VHD',
    60: 'FACILITY_SDIAG',
    61: 'FACILITY_WEBSERVICES',
    80: 'FACILITY_WINDOWS_DEFENDER',
    81: 'FACILITY_OPC',
    
    //And some unconfirmed ones that appear online
    29: 'FACILITY_XPS (Unconfirmed)',
    30: 'FACILITY_MBN (Unconfirmed)',
    42: 'FACILITY_RAS (Unconfirmed)',
    43: 'FACILITY_METAPROGRAMMING (Unconfirmed)',
    44: 'FACILITY_BLUETOOTH_ATT (Unconfirmed)',
    45: 'FACILITY_AUDIO (Unconfirmed)',
    46: 'FACILITY_STATISTICS (Unconfirmed)',
    47: 'FACILITY_BTH_ATT (Unconfirmed)',
    59: 'FACILITY_USERMODE_VSMB (Unconfirmed)',
    62: 'FACILITY_WSBAPP (Unconfirmed)',
    63: 'FACILITY_URS (Unconfirmed)',
    64: 'FACILITY_DLS (Unconfirmed)',
    65: 'FACILITY_BITLOCKER (Unconfirmed)',
    66: 'FACILITY_USB (Unconfirmed)',
    67: 'FACILITY_VISUALCPP (Unconfirmed)',
    68: 'FACILITY_USN (Unconfirmed)',
    69: 'FACILITY_USERMODE_VOLSNAP (Unconfirmed)',
    70: 'FACILITY_TIERING (Unconfirmed)',
    71: 'FACILITY_WSB_ONLINE (Unconfirmed)',
    72: 'FACILITY_ONLINE_ID (Unconfirmed)',
    73: 'FACILITY_DEVICE_UPDATE_AGENT (Unconfirmed)',
    74: 'FACILITY_DLSR (Unconfirmed)',
    75: 'FACILITY_CLUSTERING (Unconfirmed)',
    76: 'FACILITY_SIS (Unconfirmed)',
    77: 'FACILITY_HSM (Unconfirmed)',
    78: 'FACILITY_SRP (Unconfirmed)',
    79: 'FACILITY_KTM (Unconfirmed)',
    82: 'FACILITY_XBOX (Unconfirmed)',
    83: 'FACILITY_XPS_DOCUMENT (Unconfirmed)',
    84: 'FACILITY_GAMING (Unconfirmed)',
    85: 'FACILITY_WMAAECMA (Unconfirmed)',
    86: 'FACILITY_SPEECH (Unconfirmed)',
    87: 'FACILITY_WEBAUTHN (Unconfirmed)',
};

const props = defineProps<{ hresult: string }>();
const hresultBits = ref<number[]>([]);

watch(props, (_) => {
    updateBits();
});

function updateBits() {
    const newHresult = props.hresult;

    //Could be in hex or binary, so we need to check
    let hresultNumber: number;
    if (newHresult.startsWith('0x')) {
        hresultNumber = parseInt(newHresult, 16);
    } else {
        hresultNumber = parseInt(newHresult, 2);
    }

    //Convert to bits
    const bits = [];
    for (let i = 0; i < 32; i++) {
        bits.push((hresultNumber & (1 << i)) >>> i);
    }
    bits.reverse();
    hresultBits.value = bits;
}

function getErrorCodeString(code: number): string {
    const currentFacility = parseInt(hresultBits.value.toReversed().slice(16, 26).toReversed().join(''), 2);

    if (currentFacility == 0) { //FACILITY_NULL
        let sysErrorCode = sysErr.hasOwnProperty(code) ? sysErr[code] : 'Unknown';
        
        if(sysErrorCode.includes('-')) {
            //Remove the description and just show the code
            sysErrorCode = sysErrorCode.split(' - ')[0];
        }
        
        return `0x${code.toString(16)} - ${sysErrorCode}`;
    }

    if (currentFacility == 7) { //FACILITY_WIN32
        let win32ErrorCode = win32errors.hasOwnProperty(code) ? win32errors[code] : 'Unknown';
        
        if (win32ErrorCode.includes('-')) {
            //Remove the description and just show the code
            win32ErrorCode = win32ErrorCode.split(' - ')[0];
        }
        
        return `0x${code.toString(16)} - ${win32ErrorCode}`;
    }
    
    if(currentFacility == 19) { //FACILITY_URT (.NET Runtime)
        let netErrorCode = clrErr.hasOwnProperty(code) ? clrErr[code] : 'Unknown';
        
        if (netErrorCode.includes('-')) {
            //Remove the description and just show the code
            netErrorCode = netErrorCode.split(' - ')[0];
        }
        
        return `0x${code.toString(16)} - ${netErrorCode}`;
    }

    return `${code} (0x${code.toString(16)})`;
}

function getErrorCodeIncludingDescription(): string {
    const currentFacility = parseInt(hresultBits.value.toReversed().slice(16, 26).toReversed().join(''), 2);
    const code = parseInt(hresultBits.value.toReversed().slice(0, 16).toReversed().join(''), 2);

    if (currentFacility == 0) { //FACILITY_NULL
        return sysErr.hasOwnProperty(code) ? sysErr[code] : 'Unknown';
    }

    if (currentFacility == 7) { //FACILITY_WIN32
        return win32errors.hasOwnProperty(code) ? win32errors[code] : 'Unknown';
    }
    
    if(currentFacility == 19) { //FACILITY_URT (.NET Runtime)
        return clrErr.hasOwnProperty(code) ? clrErr[code] : 'Unknown';
    }

    return `Unknown error code ${code} (0x${code.toString(16)})`;
}

function getFacilityName(): string {
    const facilityId = parseInt(hresultBits.value.toReversed().slice(16, 26).toReversed().join(''), 2);

    return facilityIds.hasOwnProperty(facilityId) ? facilityIds[facilityId] : 'Unknown';
}

function getCategoryValue(category: BitCategory): string {
    //@ts-ignore - Typescript isn't picking up types for toReversed even though I declare ES2023.Array
    const categoryValueInt = parseInt(hresultBits.value.toReversed().slice(category.end, category.start + 1).toReversed().join(''), 2);
    
    if (category.nameGetter) {
        return category.nameGetter(categoryValueInt);
    } else {
        return categoryValueInt.toString();
    }
}

updateBits();
</script>

<template>
    <div id="hresult-display">
        <div id="hresult-table">
            <!-- Bit number -->
            <div class="row">
                <div class="cell" v-for="i in 32" :key="i" :style="{flexBasis: (100 / 32) + '%'}">
                    <span>{{32-i}}</span>
                </div>
            </div>
            
            <!-- Bit meanings -->
            <div class="row">
                <div class="cell" v-for="bitCategory in bitCategories" :key="bitCategory.name" :style="{flexBasis: 100 * ((bitCategory.start + 1 - bitCategory.end) / 32) + '%'}">
                    <span :title="bitCategory.description">{{bitCategory.name}}</span>
                </div>
            </div>
            
            <!-- Bit values -->
            <div class="row">
                <div class="cell" v-for="(bit, i) in hresultBits" :key="i" :style="{flexBasis: (100 / 32) + '%'}">
                    <span>{{bit}}</span>
                </div>
            </div>
            
            <!-- Category integer value -->
            <div class="row">
                <div class="cell" v-for="bitCategory in bitCategories" :key="bitCategory.name" :style="{flexBasis: 100 * ((bitCategory.start + 1 - bitCategory.end) / 32) + '%'}">
                    <span>{{getCategoryValue(bitCategory)}}</span>
                </div>
            </div>
        </div>
        
        <div id="hresult-description">
            <span>Entered HRESULT: {{props.hresult}}</span>
            <br/>
            <span>Facility (System Component Name): {{getFacilityName()}}</span>
            <br/>
            <span>Error Description (if known): {{getErrorCodeIncludingDescription()}}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    #hresult-table {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 1em 1em;
        margin: 0 auto;
    }
    
    .row {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        
        &:not(:last-child) {
            border-bottom: none;
        }
        
        .cell {
            border: 1px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 0;
            border-bottom: 0;
            
            &:not(:last-child) {
                border-right: none;
            }
        }
    }
    
    #hresult-description {
        padding: 1em;
        width: 100%;
        text-align: left;
    }
</style>