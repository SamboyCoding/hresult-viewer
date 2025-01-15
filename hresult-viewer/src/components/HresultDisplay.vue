<script setup lang="ts">
import {ref, watch} from "vue";
import {FacilityErrCodes} from "../known-codes/KnownCodes.ts";
import {facilityIds} from "../FacilityIds.ts";

interface BitCategory {
    name: string;
    description: string;
    start: number;
    end: number;
    nameGetter?: (value: number) => string;
}

//These used to be different. There were 5 bits before the facility, with 2 reserved, and an N bit.
//But as of winerror.h from 10.0.22621.0, it's 2 bits for severity, 1 bit for customer, 1 bit reserved, 12 bits for facility, 16 bits for code
//Technically that file claims that COM APIs still use the old format, but in practice it's probably not worth supporting that
//(especially as the output is likely the same for what matters)
const bitCategories: BitCategory[] = [
    {
        name: 'SEV',
        description: 'Severity (OK/INFO/WARN/ERROR)',
        start: 31,
        end: 30,
        nameGetter: (value: number) => {
          switch(value) {
            case 0b00:
              return 'OK';
            case 0b01:
              return 'INFO';
            case 0b10:
              return 'WARN';
            case 0b11:
              return 'ERROR';
            default:
              return 'UNK';
          }
        }
    },
    {
        name: 'C',
        description: 'Customer (1) or Microsoft (0)',
        start: 29,
        end: 29,
        nameGetter: (value: number) => value == 0 ? 'M' : 'C'
    },
    {
        name: 'R',
        description: 'Reserved - should be 0',
        start: 28,
        end: 28,
        nameGetter: (value: number) => value == 0 ? '-' : 'X'
    },
    {
        name: 'Facility',
        description: 'Facility (area of the system the error originated from)',
        start: 27,
        end: 16,
        nameGetter: (value: number) => getFacilityName(value)
    },
    {
        name: 'Code',
        description: 'Code (specific error code)',
        start: 15,
        end: 0,
        nameGetter: getErrorCodeString
    }
];

const props = defineProps<{ hresult: string }>();
const hresultParsed = ref<number>(0);
const hresultBits = ref<number[]>([]);

watch(props, (_) => {
    updateBits();
});

function reverse(arr: any[]): any[] {
    return arr.slice().reverse();
}

function updateBits() {
    const newHresult = props.hresult;

    //Could be in hex or decimal, so we need to check
    let hresultNumber: number;
    if (newHresult.startsWith('0x')) {
        hresultNumber = parseInt(newHresult, 16);
    } else {
        hresultNumber = parseInt(newHresult);

        //Check for hex without leading 0x
        if(isNaN(hresultNumber) || hresultNumber.toString() !== newHresult) {
            hresultNumber = parseInt(newHresult, 16);
        }
    }
    
    if (hresultNumber < 0)
        hresultNumber = hresultNumber >>> 0; //Convert to unsigned
    
    hresultParsed.value = hresultNumber;

    //Convert to bits
    const bits = [];
    for (let i = 0; i < 32; i++) {
        bits.push((hresultNumber & (1 << i)) >>> i);
    }
    bits.reverse();
    hresultBits.value = bits;
}

function getErrorCodeString(code: number): string {
    const currentFacility = parseInt(reverse(reverse(hresultBits.value).slice(16, 28)).join(''), 2);

    if(FacilityErrCodes.hasOwnProperty(currentFacility)) {
        const errCodesForThisFacility = FacilityErrCodes[currentFacility];

        let errorText = errCodesForThisFacility.hasOwnProperty(code) ? errCodesForThisFacility[code] : 'Unknown';

        if(errorText.includes('-')) {
            //Remove the description and just show the code
            errorText = errorText.split(' - ')[0];
        }

        return `0x${code.toString(16)} - ${errorText}`;
    }

    //We don't have a list of error codes for this facility
    return `${code} (0x${code.toString(16)})`;
}

function getErrorCodeIncludingDescription(): string {
    const currentFacility = parseInt(reverse(reverse(hresultBits.value).slice(16, 28)).join(''), 2);
    const code = parseInt(reverse(reverse(hresultBits.value).slice(0, 15)).join(''), 2);

    if(FacilityErrCodes.hasOwnProperty(currentFacility)) {
        const errCodesForThisFacility = FacilityErrCodes[currentFacility];

        let errorText = errCodesForThisFacility.hasOwnProperty(code) ? errCodesForThisFacility[code] : 'Unknown';

        return `0x${code.toString(16)} - ${errorText}`;
    }

    return `Error ${code} (0x${code.toString(16)}) - there are no known documented codes for this facility`;
}

function getFacilityName(facilityId: number): string {
    let facilityName = facilityIds.hasOwnProperty(facilityId) ? facilityIds[facilityId] : 'Unknown';
    
    if(facilityName.includes('-')) {
        //Remove the description and just show the code
        facilityName = facilityName.split(' - ')[0];
    }
    
    return facilityId + ' - ' + facilityName;
}

function getFacilityNameAndDescription(): string {
    const facilityId = parseInt(reverse(reverse(hresultBits.value).slice(16, 28)).join(''), 2);

    return facilityIds.hasOwnProperty(facilityId) ? facilityIds[facilityId] : 'Unknown';
}

function getCategoryValue(category: BitCategory): string {
    const categoryValueInt = parseInt(reverse(reverse(hresultBits.value).slice(category.end, category.start + 1)).join(''), 2);
    
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
            <span>Entered HRESULT: 0x{{hresultParsed.toString(16)}}</span>
            <br/>
            <span>Facility (System Component Name): {{getFacilityNameAndDescription()}}</span>
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