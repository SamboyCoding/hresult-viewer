import ClrErr from "./ClrErr.ts";
import SysErr from "./SysErr.ts";
import Win32Err from "./Win32Err.ts";
import D3dDdiErr from "./D3dDdiErr.ts";
import ItfErr from "./ItfErr.ts";
import SetupApiErr from "./SetupApiErr.ts";
import WinUpdErr from "./WinUpdErr.ts";

export interface FacilityCodeMap {
    [errCode: number]: string;
}

export const FacilityErrCodes: { [key: number]: FacilityCodeMap} = {
    0: SysErr,
    4: ItfErr,
    7: Win32Err,
    15: SetupApiErr,
    19: ClrErr,
    36: WinUpdErr,
    2166: D3dDdiErr,
};