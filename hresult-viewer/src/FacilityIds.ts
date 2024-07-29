export const facilityIds: { [key: number]: string } = {
    0: 'FACILITY_NULL - General Purpose Errors',
    1: 'FACILITY_RPC - Remote Procedure Call Errors',
    2: 'FACILITY_DISPATCH - COM Dispatch Errors',
    3: 'FACILITY_STORAGE - Object Linking and Embedding (OLE) Storage Errors',
    4: 'FACILITY_ITF - COM/OLE Interface Errors',
    7: 'FACILITY_WIN32 - Undecorated/Old Win32 Error Codes',
    8: 'FACILITY_WINDOWS - Windows Internal Error Codes',
    9: 'FACILITY_SECURITY - Security API Layer Errors',
    10: 'FACILITY_CONTROL - Control Mechanism Errors',
    11: 'FACILITY_CERT - Certificate Client/Server Errors',
    12: 'FACILITY_INTERNET - Wininet-related Errors',
    13: 'FACILITY_MEDIASERVER - Windows Media Server Errors',
    14: 'FACILITY_MSMQ - Microsoft Message Queue Errors',
    15: 'FACILITY_SETUPAPI - Windows Setup API (Installation) Errors',
    16: 'FACILITY_SCARD - Smart Card Errors',
    17: 'FACILITY_COMPLUS - COM+ Errors',
    18: 'FACILITY_AAF - Microsoft Agent Errors',
    19: 'FACILITY_URT - .NET Runtime Errors', //.NET CLR
    20: 'FACILITY_ACS - Audit Collection Services Errors',
    21: 'FACILITY_DPLAY - DirectPlay Errors',
    22: 'FACILITY_UMI - Ubiquitous MemoryIntrospection Errors',
    23: 'FACILITY_SXS - Side-by-Side Servicing Errors',
    24: 'FACILITY_WINDOWS_CE - Windows CE Errors',
    25: 'FACILITY_HTTP - HTTP Errors',
    26: 'FACILITY_USERMODE_COMMONLOG - Usermode Common Logging Errors',
    27: 'FACILITY_WER - Windows Error Reporting Errors',
    
    
    31: 'FACILITY_USERMODE_FILTER_MANAGER - Usermode Filter Manager Errors',
    32: 'FACILITY_BACKGROUNDCOPY - Background Copy Control Errors',
    33: 'FACILITY_CONFIGURATION - Configuration Services Errors',
    34: 'FACILITY_STATE_MANAGEMENT - State Management Services Errors',
    35: 'FACILITY_METADIRECTORY - Microsoft Identity Server Errors',
    36: 'FACILITY_WINDOWSUPDATE - Windows Update Errors',
    37: 'FACILITY_DIRECTORYSERVICE - Active Directory Errors',
    38: 'FACILITY_GRAPHICS - Graphics (GPU) Driver Errors',
    39: 'FACILITY_SHELL - User Shell Errors',
    40: 'FACILITY_TPM_SERVICES - Trusted Platform Module Service Errors',
    41: 'FACILITY_TPM_SOFTWARE - Trusted Platform Module Application Errors',
    42: 'FACILITY_UI - User Interface Errors',
    43: 'FACILITY_XAML - XAML Errors',
    44: 'FACILITY_ACTION_QUEUE - Action Queue Errors',
    
    
    48: 'FACILITY_PLA - Performance Logs and Alerts Errors',
    49: 'FACILITY_FVE - Full Volume Encryption Errors',
    50: 'FACILITY_FWP - Firewall Platform Errors',
    51: 'FACILITY_WINRM - Windows Resource Management Errors',
    52: 'FACILITY_NDIS - Network Driver Interface Specification Errors',
    53: 'FACILITY_USERMODE_HYPERVISOR - Usermode Hypervisor Errors',
    54: 'FACILITY_CMI - Configuration Management Infrastructure Errors',
    55: 'FACILITY_USERMODE_VIRTUALIZATION - Usermode Virtualization Subsystem Errors',
    56: 'FACILITY_USERMODE_VOLMGR - Usermode Volume Manager Errors',
    57: 'FACILITY_BCD - Boot Configuration Database Errors',
    58: 'FACILITY_USERMODE_VHD - Usermode Virtual Hard Disk Errors',
    60: 'FACILITY_SDIAG - System Diagnostic Errors',
    61: 'FACILITY_WEBSERVICES - Web Services Errors',
    62: 'FACILITY_WPN - Windows Push Notifications Errors',
    63: 'FACILITY_WINDOWS_STORE - Windows Store Errors',
    64: 'FACILITY_INPUT - Input Method Editor Errors',
    
    66: 'FACILITY_EAP - Extensible Authentication Protocol Errors',
    
    
    80: 'FACILITY_WINDOWS_DEFENDER - Windows Defender Errors',
    81: 'FACILITY_OPC - Open Connectivity Services Errors',
    82: 'FACILITY_XPS - XML Paper Specification Errors',
    83: 'FACILITY_RAS - Believed to be Remote Access Service Errors',
    84: 'FACILITY_POWERSHELL - Windows PowerShell Errors. Also known as FACILITY_MBN which appears to be a codename for PowerShell',
    85: 'FACILITY_EAS - Exchange ActiveSync Errors',
    
    98: 'FACILITY_P2P_INT - Peer-to-Peer Internal(?) Errors',
    99: 'FACILITY_P2P - Peer-to-Peer Errors',
    100: 'FACILITY_DAF - Believed to be Device Association Framework Errors',
    101: 'FACILITY_BLUETOOTH_ATT - Bluetooth Attribute Protocol Errors',
    102: 'FACILITY_AUDIO - Audio Errors',
    
    
    109: 'FACILITY_VISUALCPP - Visual C++ Errors',
    
    112: 'FACILITY_SCRIPT - Scripting Errors of some kind?',
    113: 'FACILITY_PARSE - Unknown',
    
    120: 'FACILITY_BLB - Possibly related to Windows Server Backup',
    121: 'FACILITY_BLB_CLI - Possibly related to Windows Server Backup CLI',
    122: 'FACILITY_WSBAPP - Windows Server Backup Application Errors',
    
    128: 'FACILITY_BLBUI - Possibly related to Windows Server Backup UI',
    129: 'FACILITY_USN - Unknown',
    130: 'FACILITY_USERMODE_VOLSNAP - Usermode Volume Shadow Copy Service Errors',
    131: 'FACILITY_TIERING - Windows Server Storage Tiers Errors',
    
    133: 'FACILITY_WSB_ONLINE - Windows Server Backup Online Errors',
    134: 'FACILITY_ONLINE_ID - Online ID (Microsoft Account?) Errors',
    
    153: 'FACILITY_DLS - Possibly Windows Server Deployment Services?',
    
    160: 'FACILITY_SOS - Possibly SOS Debugger for .NET Framework?',
    
    176: 'FACILITY_DEBUGGERS - Debugging Errors',
    
    208: 'FACILITY_DELIVERY_OPTIMIZATION - Windows Update Delivery Optimization Errors',
    
    231: 'FACILITY_USERMODE_SPACES - Storage Spaces Errors',
    232: 'FACILITY_USER_MODE_SECURITY_CORE - User Mode Security Core Errors',
    234: 'FACILITY_USERMODE_LICENSING - User Mode Licensing (CLiP Licensing?) Errors',
    
    256: 'FACILITY_DMSERVER - Belived to be Logical Disk Manager Errors',
    257: 'FACILITY_DEPLOYMENT_SERVICES_SERVER - Windows Deployment Services Server Errors',
    258: 'FACILITY_DEPLOYMENT_SERVICES_IMAGING - Windows Deployment Services Imaging Errors',
    259: 'FACILITY_DEPLOYMENT_SERVICES_MANAGEMENT - Windows Deployment Services Management Errors',
    260: 'FACILITY_DEPLOYMENT_SERVICES_UTIL - Windows Deployment Services Utility Errors',
    261: 'FACILITY_DEPLOYMENT_SERVICES_BINLSVC - Windows Deployment Services BINLSVC(?) Errors',
    
    263: 'FACILITY_DEPLOYMENT_SERVICES_PXE - Windows Deployment Services Preboot Execution Environment Errors',
    264: 'FACILITY_DEPLOYMENT_SERVICES_TFTP - Windows Deployment Services Trivial File Transfer Protocol Errors',
    
    272: 'FACILITY_DEPLOYMENT_SERVICES_TRANSPORT_MANAGEMENT - Windows Deployment Services Transport Management Errors',
    
    278: 'FACILITY_DEPLOYMENT_SERVICES_DRIVER_PROVISIONING - Windows Deployment Services Driver Provisioning Errors',
    
    289: 'FACILITY_DEPLOYMENT_SERVICES_MULTICAST_SERVER - Windows Deployment Services Multicast Server Errors',
    290: 'FACILITY_DEPLOYMENT_SERVICES_MULTICAST_CLIENT - Windows Deployment Services Multicast Client Errors',
    
    293: 'FACILITY_DEPLOYMENT_SERVICES_CONTENT_PROVIDER - Windows Deployment Services Content Provider Errors',
    
    305: 'FACILITY_LINGUISTIC_SERVICES - Linguistic Services Errors',
    
    885: 'FACILITY_WEB - Web Request Errors',
    886: 'FACILITY_WEB_SOCKET - Websocket Errors',
    
    1094: 'FACILITY_AUDIOSTREAMING - Audio Streaming Errors',
    
    1536: 'FACILITY_ACCELERATOR - Accelerator(?) Errors',
    
    1793: 'FACILITY_MOBILE - Mobile Errors',
    
    1967: 'FACILITY_SQLITE - SQLite Errors',
    
    1989: 'FACILITY_UTC - Connected User Experiences and Telemetry (DiagTrack) Errors',
    
    1996: 'FACILITY_WMAAECMA - Windows Mic Array Acoustic Echo Cancellation Errors',
    
    2049: 'FACILITY_WEP - Windows Encryption Provider Errors',
    2050: 'FACILITY_SYNCENGINE - Windows Sync Engine (OneDrive etc) Errors',
    
    2168: 'FACILITY_DIRECTMUSIC - DirectMusic Errors',
    2169: 'FACILITY_DIRECT3D10 - Direct3D 10.0 Errors',
    2170: 'FACILITY_DXGI - DirectX Graphics Infrastructure Errors',
    2171: 'FACILITY_DXGI_DDI - DirectX Graphics Infrastructure Driver Device Interface Errors',
    2172: 'FACILITY_DIRECT3D11 - Direct3D 11.0 Errors',
    2173: 'FACILITY_DIRECT3D11_DEBUG - Direct3D 11.0 Debug Errors',
    2174: 'FACILITY_DIRECT3D12 - Direct3D 12.0 Errors',
    2175: 'FACILITY_DIRECT3D12_DEBUG - Direct3D 12.0 Debug Errors',
    
    2184: 'FACILITY_LEAP - XAudio2 Internal Errors',
    2185: 'FACILITY_AUDCLNT - Audio Client Errors',
    
    2200: 'FACILITY_WINCODEC_DWRITE_DWM - Windows DirectWrite Desktop Window Manager Errors',
    2201: 'FACILITY_DIRECT2D - Direct2D Errors',
    
    2304: 'FACILITY_DEFRAG - Windows Defrag Errors',
    2305: 'FACILITY_USERMODE_SDBUS - Usermode Secure Digital (SD Card) Bus Errors',
    2306: 'FACILITY_JSCRIPT - Javascript Errors',
    
    2339: 'FACILITY_XBOX - Xbox Errors',
    
    2561: 'FACILITY_PIDGENX - Windows Product Activation Errors',
};