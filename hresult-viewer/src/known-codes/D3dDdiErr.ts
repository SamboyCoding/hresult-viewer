import {FacilityCodeMap} from "./KnownCodes.ts";

const d3dDdiErr: FacilityCodeMap = {
    //Sourced from WDK 10.0.26100.2454, Include\10.0.26100.0\um\d3dumddi.h
    380: 'D3DDDIERR_OUTOFVIDEOMEMORY - Out of video memory',
    540: 'D3DDDIERR_WASSTILLDRAWING - Was still drawing',
    2154: 'D3DDDIERR_NOTAVAILABLE - Not available',
    2156: 'D3DDDIERR_INVALIDCALL - Invalid call',
    2160: 'D3DDDIERR_DEVICEREMOVED - Device removed',
    2161: 'D3DDDIERR_PRIVILEGEDINSTRUCTION - Privileged instruction',
    2162: 'D3DDDIERR_INVALIDINSTRUCTION - Invalid instruction',
    2163: 'D3DDDIERR_INVALIDHANDLE - Invalid handle',
    2169: 'D3DDDIERR_INVALIDUSERBUFFER - Invalid user buffer',
    2170: 'D3DDDIERR_INCOMPATIBLEPRIVATEFORMAT - Incompatible private format',
    2171: 'D3DDDIERR_UNSUPPORTEDOVERLAY - Unsupported overlay',
    2172: 'D3DDDIERR_UNSUPPORTEDOVERLAYFORMAT - Unsupported overlay format',
    2174: 'D3DDDIERR_UNSUPPORTEDCRYPTO - Unsupported crypto',
    2181: 'D3DDDIERR_APPLICATIONERROR - Application error',
    2183: 'D3DDDIERR_OUTOFHWPROTECTEDMEMORY - Out of hardware protected memory',

    8457: 'D3DDDIERR_CANTEVICTPINNEDALLOCATION - Can\'t evict pinned allocation',
    8465: 'D3DDDIERR_CANTRENDERLOCKEDALLOCATION - Can\'t render locked allocation',
};

export default d3dDdiErr;