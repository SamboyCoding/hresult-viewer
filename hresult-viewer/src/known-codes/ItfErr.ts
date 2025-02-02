﻿import {FacilityCodeMap} from "./KnownCodes.ts";

const ItfErr: FacilityCodeMap = {
    0x0: 'OLE_E_OLEVERB - Invalid OLEVERB structure',
    0x1: 'OLE_E_ADVF - Invalid advise flags',
    0x2: 'OLE_E_ENUM_NOMORE - End of enumeration',
    0x3: 'OLE_E_ADVISENOTSUPPORTED - This implementation does not take advises',
    0x4: 'OLE_E_NOCONNECTION - No connection for this connection ID',
    0x5: 'OLE_E_NOTRUNNING - Need to run the object to perform this operation',
    0x6: 'OLE_E_NOCACHE - There is no cache to operate on',
    0x7: 'OLE_E_BLANK - Uninitialized object',
    0x8: 'OLE_E_CLASSDIFF - Linked object\'s source class has changed',
    0x9: 'OLE_E_CANT_GETMONIKER - Not able to get the moniker of the object',
    0xA: 'OLE_E_CANT_BINDTOSOURCE - Not able to bind to the source',
    0xB: 'OLE_E_STATIC - Object is static; operation not allowed',
    0xC: 'OLE_E_PROMPTSAVECANCELLED - User canceled out of save dialog',
    0xD: 'OLE_E_INVALIDRECT - Invalid rectangle',
    0xE: 'OLE_E_WRONGCOMPOBJ - compobj.dll is too old for the ole2.dll initialized',
    0xF: 'OLE_E_INVALIDHWND - Invalid window handle',
    0x10: 'OLE_E_NOT_INPLACEACTIVE - Object is not in any of the inplace active states',
    0x11: 'OLE_E_CANTCONVERT - Not able to convert object',
    0x12: 'OLE_E_NOSTORAGE - Not able to perform the operation because object is not given storage yet',

    0x64: 'DV_E_FORMATETC - Invalid FORMATETC structure',
    0x65: 'DV_E_DVTARGETDEVICE - Invalid DVTARGETDEVICE structure',
    0x66: 'DV_E_STGMEDIUM - Invalid STDGMEDIUM structure',
    0x67: 'DV_E_STATDATA - Invalid STATDATA structure',
    0x68: 'DV_E_LINDEX - Invalid lindex',
    0x69: 'DV_E_TYMED - Invalid tymed',
    0x6A: 'DV_E_CLIPFORMAT - Invalid clipboard format',
    0x6B: 'DV_E_DVASPECT - Invalid aspect(s)',
    0x6C: 'DV_E_DVTARGETDEVICE_SIZE - tdSize parameter of the DVTARGETDEVICE structure is invalid',
    0x6D: 'DV_E_NOIVIEWOBJECT - Object does not support IViewObject interface',

    0x100: 'DRAGDROP_E_NOTREGISTERED - Trying to revoke a drop target that has not been registered',
    0x101: 'DRAGDROP_E_ALREADYREGISTERED - This window has already been registered as a drop target',
    0x102: 'DRAGDROP_E_INVALIDHWND - Invalid window handle',
    0x103: 'DRAGDROP_E_CONCURRENT_DRAG_ATTEMPTED - Another drag-and-drop operation is already in progress',

    0x110: 'CLASS_E_NOAGGREGATION - Class does not support aggregation (or class object is remote)',
    0x111: 'CLASS_E_CLASSNOTAVAILABLE - ClassFactory cannot supply requested class',
    0x112: 'CLASS_E_NOTLICENSED - Class is not licensed for use',

    0x140: 'VIEW_E_DRAW - Error drawing view',

    0x150: 'REGDB_E_READREGDB - Could not read key from registry',
    0x151: 'REGDB_E_WRITEREGDB - Could not write key to registry',
    0x152: 'REGDB_E_KEYMISSING - Could not find the key in the registry',
    0x153: 'REGDB_E_INVALIDVALUE - Invalid value for registry',
    0x154: 'REGDB_E_CLASSNOTREG - Class not registered',
    0x155: 'REGDB_E_IIDNOTREG - Interface not registered',
    0x156: 'REGDB_E_BADTHREADINGMODEL - Threading model entry is not valid',
    0x157: 'REGDB_E_PACKAGEPOLICYVIOLATION - A registration in a package violates package-specific policies',

    0x160: 'CAT_E_CATIDNOEXIST - CATID does not exist',
    0x161: 'CAT_E_NODESCRIPTION - Description not found',

    0x164: 'CS_E_PACKAGE_NOTFOUND - No package in the software installation data in the Active Directory meets this criteria.',
    0x165: 'CS_E_NOT_DELETABLE - Deleting this will break the referential integrity of the software installation data in the Active Directory.',
    0x166: 'CS_E_CLASS_NOTFOUND - The CLSID was not found in the software installation data in the Active Directory.',
    0x167: 'CS_E_INVALID_VERSION - The software installation data in the Active Directory is corrupt.',
    0x168: 'CS_E_NO_CLASSSTORE - There is no software installation data in the Active Directory.',
    0x169: 'CS_E_OBJECT_NOTFOUND - There is no software installation data object in the Active Directory.',
    0x16A: 'CS_E_OBJECT_ALREADY_EXISTS - The software installation data object in the Active Directory already exists.',
    0x16B: 'CS_E_INVALID_PATH - The path to the software installation data in the Active Directory is not correct.',
    0x16C: 'CS_E_NETWORK_ERROR - A network error interrupted the operation.',
    0x16D: 'CS_E_ADMIN_LIMIT_EXCEEDED - The size of this object exceeds the maximum size set by the Administrator.',
    0x16E: 'CS_E_SCHEMA_MISMATCH - The schema for the software installation data in the Active Directory does not match the required schema.',
    0x16F: 'CS_E_INTERNAL_ERROR - An error occurred in the software installation data in the Active Directory.',

    0x170: 'CACHE_E_NOCACHE_UPDATED - Cache not updated',

    0x180: 'OLEOBJ_E_NOVERBS - No verbs for OLE object',
    0x181: 'OLEOBJ_E_INVALIDVERB - Invalid verb for OLE object',

    0x1A0: 'INPLACE_E_NOTUNDOABLE - Undo is not available',
    0x1A1: 'INPLACE_E_NOTOOLSPACE - Space for tools is not available',

    0x1C0: 'CONVERT10_E_OLESTREAM_GET - OLESTREAM Get method failed',
    0x1C1: 'CONVERT10_E_OLESTREAM_PUT - OLESTREAM Put method failed',
    0x1C2: 'CONVERT10_E_OLESTREAM_FMT - Contents of the OLESTREAM not in correct format',
    0x1C3: 'CONVERT10_E_OLESTREAM_BITMAP_TO_DIB - There was an error in a Windows GDI call while converting the bitmap to a DIB',
    0x1C4: 'CONVERT10_E_STG_FMT - Contents of the IStorage not in correct format',
    0x1C5: 'CONVERT10_E_STG_NO_STD_STREAM - Contents of IStorage is missing one of the standard streams',
    0x1C6: 'CONVERT10_E_STG_DIB_TO_BITMAP - There was an error in a Windows GDI call while converting the DIB to a bitmap',
    0x1C7: 'CONVERT10_E_OLELINK_DISABLED - OLE Links in OLESTREAM are disabled while converting the OLESTREAM to IStorage',

    0x1D0: 'CLIPBRD_E_CANT_OPEN - OpenClipboard Failed',
    0x1D1: 'CLIPBRD_E_CANT_EMPTY - EmptyClipboard Failed',
    0x1D2: 'CLIPBRD_E_CANT_SET - SetClipboard Failed',
    0x1D3: 'CLIPBRD_E_BAD_DATA - Data on clipboard is invalid',
    0x1D4: 'CLIPBRD_E_CANT_CLOSE - CloseClipboard Failed',

    0x1E0: 'MK_E_CONNECTMANUALLY - Moniker needs to be connected manually',
    0x1E1: 'MK_E_EXCEEDEDDEADLINE - Operation exceeded deadline',
    0x1E2: 'MK_E_NEEDGENERIC - Moniker needs to be generic',
    0x1E3: 'MK_E_UNAVAILABLE - Operation unavailable',
    0x1E4: 'MK_E_SYNTAX - Invalid syntax',
    0x1E5: 'MK_E_NOOBJECT - No object for moniker',
    0x1E6: 'MK_E_INVALIDEXTENSION - Bad extension for file',
    0x1E7: 'MK_E_INTERMEDIATEINTERFACENOTSUPPORTED - Intermediate operation failed',
    0x1E8: 'MK_E_NOTBINDABLE - Moniker is not bindable',
    0x1E9: 'MK_E_NOTBOUND - Moniker is not bound',
    0x1EA: 'MK_E_CANTOPENFILE - Moniker cannot open file',
    0x1EB: 'MK_E_MUSTBOTHERUSER - User input required for operation to succeed',
    0x1EC: 'MK_E_NOINVERSE - Moniker class has no inverse',
    0x1ED: 'MK_E_NOSTORAGE - Moniker does not refer to storage',
    0x1EE: 'MK_E_NOPREFIX - No common prefix',
    0x1EF: 'MK_E_ENUMERATION_FAILED - Moniker could not be enumerated',

    0x1F0: 'CO_E_NOTINITIALIZED - CoInitialize has not been called',
    0x1F1: 'CO_E_ALREADYINITIALIZED - CoInitialize has already been called',
    0x1F2: 'CO_E_CANTDETERMINECLASS - Class of object cannot be determined',
    0x1F3: 'CO_E_CLASSSTRING - Invalid class string',
    0x1F4: 'CO_E_IIDSTRING - Invalid interface string',
    0x1F5: 'CO_E_APPNOTFOUND - Application not found',
    0x1F6: 'CO_E_APPSINGLEUSE - Application cannot be run more than once',
    0x1F7: 'CO_E_ERRORINAPP - Some error in application program',
    0x1F8: 'CO_E_DLLNOTFOUND - DLL for class not found',
    0x1F9: 'CO_E_ERRORINDLL - Error in the DLL',
    0x1FA: 'CO_E_WRONGOSFORAPP - Wrong OS or OS version for application',
    0x1FB: 'CO_E_OBJNOTREG - Object is not registered',
    0x1FC: 'CO_E_OBJISREG - Object is already registered',
    0x1FD: 'CO_E_OBJNOTCONNECTED - Object is not connected to server',
    0x1FE: 'CO_E_APPDIDNTREG - Application was launched but it didn\'t register a class factory',
    0x1FF: 'CO_E_RELEASED - Object has been released',

    0x200: 'EVENT_S_SOME_SUBSCRIBERS_FAILED - An event was able to invoke some but not all of the subscribers',
    0x201: 'EVENT_E_ALL_SUBSCRIBERS_FAILED - An event was unable to invoke any of the subscribers',
    0x202: 'EVENT_S_NOSUBSCRIBERS - An event was delivered but there were no subscribers',
    0x203: 'EVENT_E_QUERYSYNTAX - A syntax error occurred trying to evaluate a query string',
    0x204: 'EVENT_E_QUERYFIELD - An invalid field name was used in a query string',
    0x205: 'EVENT_E_INTERNALEXCEPTION - An unexpected exception was raised',
    0x206: 'EVENT_E_INTERNALERROR - An unexpected internal error was detected',
    0x207: 'EVENT_E_INVALID_PER_USER_SID - The owner SID on a per-user subscription doesn\'t exist',
    0x208: 'EVENT_E_USER_EXCEPTION - A user-supplied component or subscriber raised an exception',
    0x209: 'EVENT_E_TOO_MANY_METHODS - An interface has too many methods to fire events from',
    0x20A: 'EVENT_E_MISSING_EVENTCLASS - A subscription cannot be stored unless its event class already exists',
    0x20B: 'EVENT_E_NOT_ALL_REMOVED - Not all the objects requested could be removed',
    0x20C: 'EVENT_E_COMPLUS_NOT_INSTALLED - COM+ is required for this operation, but is not installed',
    0x20D: 'EVENT_E_CANT_MODIFY_OR_DELETE_UNCONFIGURED_OBJECT - Cannot modify or delete an object that was not added using the COM+ Admin SDK',
    0x20E: 'EVENT_E_CANT_MODIFY_OR_DELETE_CONFIGURED_OBJECT - Cannot modify or delete an object that was added using the COM+ Admin SDK',
    0x20F: 'EVENT_E_INVALID_EVENT_CLASS_PARTITION - The event class for this subscription is in an invalid partition',
    0x210: 'EVENT_E_PER_USER_SID_NOT_LOGGED_ON - The owner of the PerUser subscription is not logged on to the system specified',

    0x212: 'TPC_E_NO_DEFAULT_TABLET - TabletPC inking error code. No default tablet found',

    0x219: 'TPC_E_INVALID_INPUT_RECT - TabletPC inking error code. An invalid input rectangle was specified',

    0x21B: 'TPC_E_UNKNOWN_PROPERTY - TabletPC inking error code. Unknown property specified',

    0x222: 'TPC_E_INVALID_STROKE - TabletPC inking error code. The stroke object was deleted',
    0x223: 'TPC_E_INITIALIZE_FAIL - TabletPC inking error code. Initialization failure',

    0x232: 'TPC_E_NOT_RELEVANT - TabletPC inking error code. The data required for the operation was not supplied',
    0x233: 'TPC_E_INVALID_PACKET_DESCRIPTION - TabletPC inking error code. Invalid packet description',

    0x235: 'TPC_E_RECOGNIZER_NOT_REGISTERED - TabletPC inking error code. There are no handwriting recognizers registered',
    0x236: 'TPC_E_INVALID_RIGHTS - TabletPC inking error code. User does not have the necessary rights to read recognizer information',
    0x237: 'TPC_E_OUT_OF_ORDER_CALL - TabletPC inking error code. API calls were made in an incorrect order',
    0x238: 'TPC_E_QUEUE_FULL - TabletPC inking error code. The queue is full',
    0x239: 'TPC_E_INVALID_CONFIGURATION - TabletPC inking error code. RtpEnabled called multiple times',
    0x23A: 'TPC_E_INVALID_DATA_FROM_RECOGNIZER - TabletPC inking error code. A recognizer returned invalid data',

    0x241: 'TPC_E_INVALID_PROPERTY - TabletPC inking error code. The property was not found, or supported by the recognizer',

    0x252: 'TPC_S_TRUNCATED - TabletPC inking error code. String was truncated',
    0x253: 'TPC_S_INTERRUPTED - TabletPC inking error code. Recognition or training was interrupted',
    0x254: 'TPC_S_NO_DATA_TO_PROCESS - TabletPC inking error code. No personalization update to the recognizer because no training data found',

    0x1309: 'SCHED_E_TRIGGER_NOT_FOUND - Trigger not found',
    0x130A: 'SCHED_E_TASK_NOT_READY - One or more of the properties that are needed to run this task have not been set.',
    0x130B: 'SCHED_E_TASK_NOT_RUNNING - There is no running instance of the task.',
    0x130C: 'SCHED_E_SERVICE_NOT_INSTALLED - The Task Scheduler Service is not installed on this computer.',
    0x130D: 'SCHED_E_CANNOT_OPEN_TASK - The task object could not be opened.',
    0x130E: 'SCHED_E_INVALID_TASK - The object is either an invalid task object or is not a task object.',
    0x130F: 'SCHED_E_ACCOUNT_INFORMATION_NOT_SET - No account information could be found in the Task Scheduler security database for the task indicated.',
    0x1310: 'SCHED_E_ACCOUNT_NAME_NOT_FOUND - Unable to establish existence of the account specified.',
    0x1311: 'SCHED_E_ACCOUNT_DBASE_CORRUPT - Corruption was detected in the Task Scheduler security database; the database has been reset.',
    0x1312: 'SCHED_E_NO_SECURITY_SERVICES - Task Scheduler security services are available only on Windows NT.',
    0x1313: 'SCHED_E_UNKNOWN_OBJECT_VERSION - The task object version is either unsupported or invalid.',
    0x1314: 'SCHED_E_UNSUPPORTED_ACCOUNT_OPTION - The task has been configured with an unsupported combination of account settings and run time options.',
    0x1315: 'SCHED_E_SERVICE_NOT_RUNNING - The Task Scheduler Service is not running.',
    0x1316: 'SCHED_E_UNEXPECTEDNODE - The task XML contains an unexpected node.',
    0x1317: 'SCHED_E_NAMESPACE - The task XML contains an element or attribute from an unexpected namespace.',
    0x1318: 'SCHED_E_INVALIDVALUE - The task XML contains a value which is incorrectly formatted or out of range.',
    0x1319: 'SCHED_E_MISSINGNODE - The task XML is missing a required element or attribute.',
    0x131A: 'SCHED_E_MALFORMEDXML - The task XML is malformed.',
    0x131B: 'SCHED_S_SOME_TRIGGERS_FAILED - The task is registered, but not all specified triggers will start the task, check task scheduler event log for detailed information.',
    0x131C: 'SCHED_S_BATCH_LOGON_PROBLEM - The task is registered, but may fail to start. Batch logon privilege needs to be enabled for the task principal.',
    0x131D: 'SCHED_E_TOO_MANY_NODES - The task XML contains too many nodes of the same type.',
    0x131E: 'SCHED_E_PAST_END_BOUNDARY - The task cannot be started after the trigger end boundary.',
    0x131F: 'SCHED_E_ALREADY_RUNNING - An instance of this task is already running.',
    0x1320: 'SCHED_E_USER_NOT_LOGGED_ON - The task will not run because the user is not logged on.',
    0x1321: 'SCHED_E_INVALID_TASK_HASH - The task image is corrupt or has been tampered with.',
    0x1322: 'SCHED_E_SERVICE_NOT_AVAILABLE - The Task Scheduler service is not available.',
    0x1323: 'SCHED_E_SERVICE_TOO_BUSY - The Task Scheduler service is too busy to handle your request. Please try again later.',
    0x1324: 'SCHED_E_TASK_ATTEMPTED - The Task Scheduler service attempted to run the task, but the task did not run due to one of the constraints in the task definition.',
    0x1325: 'SCHED_S_TASK_QUEUED - The Task Scheduler service has asked the task to run.',
    0x1326: 'SCHED_E_TASK_DISABLED - The task is disabled.',
    0x1327: 'SCHED_E_TASK_NOT_V1_COMPAT - The task has properties that are not compatible with previous versions of Windows.',
    0x1328: 'SCHED_E_START_ON_DEMAND - The task settings do not allow the task to start on demand.',
    0x1329: 'SCHED_E_TASK_NOT_UBPM_COMPAT - The combination of properties that task is using is not compatible with the scheduling engine.',
    0x132A: 'SCHED_E_DEPRECATED_FEATURE_USED - The task definition uses a deprecated feature.',

    0xD000: 'XACT_E_ALREADYOTHERSINGLEPHASE - Another single phase resource manager has already been enlisted in this transaction',
    0xD001: 'XACT_E_CANTRETAIN - A retaining commit or abort is not supported',
    0xD002: 'XACT_E_COMMITFAILED - The transaction failed to commit for an unknown reason',
    0xD003: 'XACT_E_COMMITPREVENTED - Cannot call commit on this transaction object because the calling application did not initiate the transaction.',
    0xD004: 'XACT_E_HEURISTICABORT - Instead of committing, the resource heuristically aborted.',
    0xD005: 'XACT_E_HEURISTICCOMMIT - Instead of aborting, the resource heuristically committed.',
    0xD006: 'XACT_E_HEURISTICDAMAGE - Some of the states of the resource were committed while others were aborted, likely because of heuristic decisions.',
    0xD007: 'XACT_E_HEURISTICDANGER - Some of the states of the resource may have been committed while others were aborted, likely because of heuristic decisions.',
    0xD008: 'XACT_E_ISOLATIONLEVEL - The requested isolation level is not valid or supported.',
    0xD009: 'XACT_E_NOASYNC - The transaction manager does not support an asynchronous operation for this method.',
    0xD00A: 'XACT_E_NOENLIST - Unable to enlist in the transaction.',
    0xD00B: 'XACT_E_NOISORETAIN - The requested semantics of retention of isolation across retaining commit and abort boundaries cannot be supported by this transaction implementation, or isoFlags was not equal to zero.',
    0xD00C: 'XACT_E_NORESOURCE - There is no resource presently associated with this enlistment.',
    0xD00D: 'XACT_E_NOTCURRENT - The transaction failed to commit due to the failure of optimistic concurrency control in at least one of the resource managers.',
    0xD00E: 'XACT_E_NOTRANSACTION - The transaction has already been implicitly or explicitly committed or aborted.',
    0xD00F: 'XACT_E_NOTSUPPORTED - An invalid combination of flags was specified.',
    0xD010: 'XACT_E_UNKNOWNRMGRID - The resource manager ID is not associated with this transaction or the transaction manager.',
    0xD011: 'XACT_E_WRONGSTATE - This method was called in the wrong state',
    0xD012: 'XACT_E_WRONGUOW - The indicated unit of work does not match the unit of work expected by the resource manager.',
    0xD013: 'XACT_E_XTIONEXISTS - An enlistment in a transaction already exists.',
    0xD014: 'XACT_E_NOIMPORTOBJECT - An import object for the transaction could not be found.',
    0xD015: 'XACT_E_INVALIDCOOKIE - The transaction cookie is invalid.',
    0xD016: 'XACT_E_INDOUBT - The transaction status is in doubt. A communication failure occurred, or a transaction manager or resource manager has failed',
    0xD017: 'XACT_E_NOTIMEOUT - A time-out was specified, but time-outs are not supported.',
    0xD018: 'XACT_E_ALREADYINPROGRESS - The requested operation is already in progress for the transaction.',
    0xD019: 'XACT_E_ABORTED - The transaction has already been aborted.',
    0xD01A: 'XACT_E_LOGFULL - The Transaction Manager returned a log full error.',
    0xD01B: 'XACT_E_TMNOTAVAILABLE - The Transaction Manager is not available.',
    0xD01C: 'XACT_E_CONNECTION_DOWN - A connection with the transaction manager was lost.',
    0xD01D: 'XACT_E_CONNECTION_DENIED - A request to establish a connection with the transaction manager was denied.',
    0xD01E: 'XACT_E_REENLISTTIMEOUT - Resource manager reenlistment to determine transaction status timed out.',
    0xD01F: 'XACT_E_TIP_CONNECT_FAILED - This transaction manager failed to establish a connection with another TIP transaction manager.',
    0xD020: 'XACT_E_TIP_PROTOCOL_ERROR - This transaction manager encountered a protocol error with another TIP transaction manager.',
    0xD021: 'XACT_E_TIP_PULL_FAILED - This transaction manager could not propagate a transaction from another TIP transaction manager.',
    0xD022: 'XACT_E_DEST_TMNOTAVAILABLE - The Transaction Manager on the destination machine is not available.',
    0xD023: 'XACT_E_TIP_DISABLED - The transaction manager has disabled its support for TIP.',
    0xD024: 'XACT_E_NETWORK_TX_DISABLED - The transaction manager has disabled its support for remote/network transactions.',
    0xD025: 'XACT_E_PARTNER_NETWORK_TX_DISABLED - The partner transaction manager has disabled its support for remote/network transactions.',
    0xD026: 'XACT_E_XA_TX_DISABLED - The transaction manager has disabled its support for XA transactions.',
    0xD027: 'XACT_E_UNABLE_TO_READ_DTC_CONFIG - MSDTC was unable to read its configuration information.',
    0xD028: 'XACT_E_UNABLE_TO_LOAD_DTC_PROXY - MSDTC was unable to load the dtc proxy dll.',
    0xD029: 'XACT_E_ABORTING - The transaction has aborted.',
    0xD02A: 'XACT_E_PUSH_COMM_FAILURE - The MSDTC transaction manager was unable to push the transaction to the destination transaction manager due to communication problems. Possible causes are: a firewall is present and it doesn\'t have an exception for the MSDTC process, the two machines cannot find each other by their NetBIOS names, or the support for network transactions is not enabled for one of the two transaction managers.',
    0xD02B: 'XACT_E_PULL_COMM_FAILURE - The MSDTC transaction manager was unable to pull the transaction from the source transaction manager due to communication problems. Possible causes are: a firewall is present and it doesn\'t have an exception for the MSDTC process, the two machines cannot find each other by their NetBIOS names, or the support for network transactions is not enabled for one of the two transaction managers.',
    0xD02C: 'XACT_E_LU_TX_DISABLED - The MSDTC transaction manager has disabled its support for SNA LU 6.2 transactions.',

    0xD080: 'XACT_E_CLERKNOTFOUND - The specified CRM clerk was not found.',
    0xD081: 'XACT_E_CLERKEXISTS - The specified CRM clerk already exists.',
    0xD082: 'XACT_E_RECOVERYINPROGRESS - Recovery of the CRM log file is still in progress.',
    0xD083: 'XACT_E_TRANSACTIONCLOSED - The transaction has already been closed.',
    0xD084: 'XACT_E_INVALIDLSN - The log sequence number (LSN) passed to CRM is invalid.',
    0xD085: 'XACT_E_REPLAYREQUEST - The requested operation cannot be performed because the transaction has already been committed or aborted.',

    0xE002: 'CONTEXT_E_ABORTED - The root transaction wanted to commit, but the transaction aborted',
    0xE003: 'CONTEXT_E_ABORTING - You made a method call on a COM+ component that has a transaction that has already aborted or in the process of aborting.',
    0xE004: 'CONTEXT_E_NOCONTEXT - There is no MTS object context',
    0xE005: 'CONTEXT_E_WOULD_DEADLOCK - The component is configured to use synchronization and this method call would cause a deadlock to occur.',
    0xE006: 'CONTEXT_E_SYNCH_TIMEOUT - The component is configured to use synchronization and a thread has timed out waiting to enter the context.',
    0xE007: 'CONTEXT_E_OLDREF - You made a method call on a COM+ component that has a transaction that has already committed or aborted.',

    0xE00C: 'CONTEXT_E_ROLENOTFOUND - The specified role was not configured for the application',

    0xE00F: 'CONTEXT_E_TMNOTAVAILABLE - COM+ was unable to talk to the Microsoft Distributed Transaction Coordinator',

    0xE021: 'CO_E_ACTIVATIONFAILED - An unexpected error occurred during COM+ activation',
    0xE022: 'CO_E_ACTIVATIONFAILED_EVENTLOGGED - COM+ activation failed. Check the event log for more information',
    0xE023: 'CO_E_ACTIVATIONFAILED_CATALOGERROR - COM+ activation failed due to a catalog or configuration error',
    0xE024: 'CO_E_ACTIVATIONFAILED_TIMEOUT - COM+ activation failed because the activation could not be completed in the specified amount of time',
    0xE025: 'CO_E_INITIALIZATIONFAILED - COM+ Activation failed because an initialization function failed. Check the event log for more information.',
    0xE026: 'CONTEXT_E_NOJIT - The requested operation requires that JIT be in the current context and it is not',
    0xE027: 'CONTEXT_E_NOTRANSACTION - The requested operation requires that the current context have a Transaction, and it does not',
    0xE028: 'CO_E_THREADINGMODEL_CHANGED - The components threading model has changed after install into a COM+ Application. Please re-install component.',
    0xE029: 'CO_E_NOIISINTRINSICS - IIS intrinsics not available. Start your work with IIS.',
    0xE02A: 'CO_E_NOCOOKIES - An attempt to write a cookie failed.',
    0xE02B: 'CO_E_DBERROR - An attempt to use a database generated a database-specific error.',
    0xE02C: 'CO_E_NOTPOOLED - The COM+ component you created must use object pooling to work.',
    0xE02D: 'CO_E_NOTCONSTRUCTED - The COM+ component you created must use object construction to work correctly.',
    0xE02E: 'CO_E_NOSYNCHRONIZATION - The COM+ component requires synchronization, and it is not configured for it.',
    0xE02F: 'CO_E_ISOLEVELMISMATCH - The TxIsolation Level property for a COM+ component is not supported.',
    0xE030: 'CO_E_CALL_OUT_OF_TX_SCOPE_NOT_ALLOWED - The component attempted to make a cross-context call between invocations of EnterTransactionScope and ExitTransactionScope. This is not allowed. Cross-context calls cannot be made while inside of a transaction scope.',
    0xE031: 'CO_E_EXIT_TRANSACTION_SCOPE_NOT_CALLED - The component made a call to EnterTransactionScope, but did not make a corresponding call to ExitTransactionScope before returning.',
};

export default ItfErr;