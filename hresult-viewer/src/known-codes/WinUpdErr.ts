﻿import {FacilityCodeMap} from "./KnownCodes.ts";

const winUpdErr: FacilityCodeMap = {
    0x1: 'WU_E_NO_SERVICE - Windows Update Agent was unable to provide the service.',
    0x2: 'WU_E_MAX_CAPACITY_REACHED - The maximum capacity of the service was exceeded.',
    0x3: 'WU_E_UNKNOWN_ID - WUA cannot find an ID.',
    0x4: 'WU_E_NOT_INITIALIZED - The object could not be initialized.',
    0x5: 'WU_E_RANGEOVERLAP - The update handler requested a byte range overlapping a previously requested range.',
    0x6: 'WU_E_TOOMANYRANGES - The requested number of byte ranges exceeds the maximum number (2^31 - 1).',
    0x7: 'WU_E_INVALIDINDEX - The index to a collection was invalid.',
    0x8: 'WU_E_ITEMNOTFOUND - The key for the item queried could not be found.',
    0x9: 'WU_E_OPERATIONINPROGRESS - Another conflicting operation was in progress. Some operations such as installation cannot be performed twice simultaneously.',
    0xA: 'WU_E_COULDNOTCANCEL - Cancellation of the operation was not allowed.',
    0xB: 'WU_E_CALL_CANCELLED - Operation was cancelled.',
    0xC: 'WU_E_NOOP - No operation was required.',
    0xD: 'WU_E_XML_MISSINGDATA - WUA could not find required information in the update\'s XML data.',
    0xE: 'WU_E_XML_INVALID - WUA found invalid information in the update\'s XML data.',
    0xF: 'WU_E_CYCLE_DETECTED - Circular update relationships were detected in the metadata.',
    0x10: 'WU_E_TOO_DEEP_RELATION - Update relationships too deep to evaluate were evaluated.',
    0x11: 'WU_E_INVALID_RELATIONSHIP - An invalid update relationship was detected.',
    0x12: 'WU_E_REG_VALUE_INVALID - An invalid registry value was read.',
    0x13: 'WU_E_DUPLICATE_ITEM - Operation tried to add a duplicate item to a list.',
    0x14: 'WU_E_INVALID_INSTALL_REQUEST - Updates that are requested for install are not installable by the caller.',

    0x16: 'WU_E_INSTALL_NOT_ALLOWED - Operation tried to install while another installation was in progress or the system was pending a mandatory restart.',
    0x17: 'WU_E_NOT_APPLICABLE - Operation was not performed because there are no applicable updates.',
    0x18: 'WU_E_NO_USERTOKEN - Operation failed because a required user token is missing.',
    0x19: 'WU_E_EXCLUSIVE_INSTALL_CONFLICT - An exclusive update cannot be installed with other updates at the same time.',
    0x1A: 'WU_E_POLICY_NOT_SET - A policy value was not set.',
    0x1B: 'WU_E_SELFUPDATE_IN_PROGRESS - The operation could not be performed because the Windows Update Agent is self-updating.',

    0x1D: 'WU_E_INVALID_UPDATE - An update contains invalid metadata.',
    0x1E: 'WU_E_SERVICE_STOP - Operation did not complete because the service or system was being shut down.',
    0x1F: 'WU_E_NO_CONNECTION - Operation did not complete because the network connection was unavailable.',
    0x20: 'WU_E_NO_INTERACTIVE_USER - Operation did not complete because there is no logged-on interactive user.',
    0x21: 'WU_E_TIME_OUT - Operation did not complete because it timed out.',
    0x22: 'WU_E_ALL_UPDATES_FAILED - Operation failed for all the updates.',
    0x23: 'WU_E_EULAS_DECLINED - The license terms for all updates were declined.',
    0x24: 'WU_E_NO_UPDATE - There are no updates.',
    0x25: 'WU_E_USER_ACCESS_DISABLED - Group Policy settings prevented access to Windows Update.',
    0x26: 'WU_E_INVALID_UPDATE_TYPE - The type of update is invalid.',
    0x27: 'WU_E_URL_TOO_LONG - The URL exceeded the maximum length.',
    0x28: 'WU_E_UNINSTALL_NOT_ALLOWED - The update could not be uninstalled because the request did not originate from a Windows Server Update Services (WSUS) server.',
    0x29: 'WU_E_INVALID_PRODUCT_LICENSE - Search may have missed some updates before there is an unlicensed application on the system.',
    0x2A: 'WU_E_MISSING_HANDLER - A component required to detect applicable updates was missing.',
    0x2B: 'WU_E_LEGACYSERVER - An operation did not complete because it requires a newer version of server.',
    0x2C: 'WU_E_BIN_SOURCE_ABSENT - A delta-compressed update could not be installed because it required the source.',
    0x2D: 'WU_E_SOURCE_ABSENT - A full-file update could not be installed because it required the source.',
    0x2E: 'WU_E_WU_DISABLED - Access to an unmanaged server is not allowed.',
    0x2F: 'WU_E_CALL_CANCELLED_BY_POLICY - Operation did not complete because the DisableWindowsUpdateAccess policy was set in the registry.',
    0x30: 'WU_E_INVALID_PROXY_SERVER - The format of the proxy list was invalid.',
    0x31: 'WU_E_INVALID_FILE - The file is in the wrong format.',
    0x32: 'WU_E_INVALID_CRITERIA - The search criteria string was invalid.',
    0x33: 'WU_E_EULA_UNAVAILABLE - License terms could not be downloaded.',
    0x34: 'WU_E_DOWNLOAD_FAILED - Update failed to download.',
    0x35: 'WU_E_UPDATE_NOT_PROCESSED - Update was not processed.',
    0x36: 'WU_E_INVALID_OPERATION - The object\'s current state did not allow the operation.',
    0x37: 'WU_E_NOT_SUPPORTED - The functionality for the operation is not supported.',

    0x39: 'WU_E_TOO_MANY_RESYNC - Agent is asked by server to resync too many times.',

    0x40: 'WU_E_NO_SERVER_CORE_SUPPORT - The WUA API method does not run on the server core installation.',
    0x41: 'WU_E_SYSPREP_IN_PROGRESS - Service is not available while sysprep is running.',
    0x42: 'WU_E_UNKNOWN_SERVICE - The update service is no longer registered with automatic updates.',
    0x43: 'WU_E_NO_UI_SUPPORT - No support for the WUA user interface.',
    0x44: 'WU_E_PER_MACHINE_UPDATE_ACCESS_DENIED - Only administrators can perform this operation on per-computer updates.',
    0x45: 'WU_E_UNSUPPORTED_SEARCHSCOPE - A search was attempted with a scope that is not currently supported for this type of search.',
    0x46: 'WU_E_BAD_FILE_URL - The URL does not point to a file.',
    0x47: 'WU_E_NOTSUPPORTED - The operation requested is not supported.',
    0x48: 'WU_E_INVALID_NOTIFICATION_INFO - The featured update notification info returned by the server is invalid.',
    0x49: 'WU_E_OUTOFRANGE - The data is out of range.',
    0x4A: 'WU_E_SETUP_IN_PROGRESS - WUA operations are not available while operating system setup is running.',

    0xFFF: 'WU_E_UNEXPECTED - An operation failed due to reasons not covered by another error code.',
};

export default winUpdErr;