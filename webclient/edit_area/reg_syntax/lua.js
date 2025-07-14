editAreaLoader.load_syntax["lua"] = {
	'QUOTEMARKS' : {1 : "'", 2 : '"'}
	,'KEYWORD_CASE_SENSITIVE' : true
	,'KEYWORDS' : {
		'constants' : [ 'nil', 'false', 'true'],
		'types' : [ 'math', 'string', 'sys', 'io', 'table', 'os', 'debug',
				'assert', 'collectgarbage', 'dofile', 'error', '_G',
				'getmetatable', 'ipairs', 'pairs', 'load', 'loadfile',
				'loadstring', 'next', 'pcall', 'print', 'rawget', 'rawset',
				'rawequal', 'rawset', 'select', 'setenv', 'setmetatable',
				'tonumber', 'tostring', 'type', 'unpack', 'xpcall', 'coroutine' ],
		'statements' : [ 'do', 'else', 'if', 'for', 'if', 'type', 'function',
				'end', 'while', 'elseif', 'for', 'repeat', 'do', 'then',
				'until', 'break', 'return', 'local' ],
		'keywords' : [ 'and', 'or', 'not', 'in' ],
		'functions' : [
				"md5", "sha2", "Split", "c_GetAppPath", "c_IsDir", "c_IsValidDir", "c_MkDir", "c_Chmod", "c_RemoveFileDir", "c_FileExist", "c_GetFileTime", "c_GetTimeMS", "c_GetTimeUS", "c_GetRandom", "c_GetServerID", "c_GetDir", 
				"c_GetFileDir", "c_GetRootDir", "c_GetDomainList", "c_AddDomain", "c_DeleteDomain", "c_AddUser", "c_UserExist", "c_GetUser", "c_DeleteUser", "c_CopyUser", "c_ResetUserStatistic", "c_AddUserDirectory", "c_GetUserList", 
				"c_GetUserListPage", "c_GetUserPageCount", "c_GetUserListByNames", "c_AddGroup", "c_GroupExist", "c_GetGroup", "c_DeleteGroup", "c_CopyGroup", "c_ResetGroupStatistic", "c_AddGroupDirectory", "c_GetGroupList", 
				"c_GetGroupListPage", "c_GetGroupPageCount", "c_AccessDataWay", "c_ResetUserData", "c_ResetUserLoginTime", "c_ResetUserLoginIP", "c_ReconnectDB", "c_TestMysql", "c_TestODBC", "c_SetOptionInt", "c_SetOptionStr", 
				"c_GetOptionInt", "c_GetOptionStr", "c_SetGlobalOptionInt", "c_SetGlobalOptionStr", "c_GetGlobalOptionInt", "c_GetGlobalOptionStr", "c_SetAdminOptionInt", "c_SetAdminOptionStr", "c_GetAdminOptionInt", 
				"c_GetAdminOptionStr", "c_SetDomainPasvOption", "c_KickSession", "c_KickSessionByName", "c_KickAllSessions", "c_GetConnectionsList", "c_AddSystemLog", "c_AddAdminLog", "c_ClearDomainLog", "c_GetDomainLog", 
				"c_GetSystemLog", "c_GetAdminLog", "c_SetFTPEvent", "c_GetFTPEvent", "c_SetSSHEvent", "c_GetSSHEvent", "c_SetHTTPEvent", "c_GetHTTPEvent", "c_GetListenerList", "c_AddListener", "c_DeleteListener", 
				"c_UpdateListener", "c_CheckAdmin", "c_CheckAdminIp", "c_AdminLogout", "c_AddAdmin", "c_AdminExist", "c_GetAdmin", "c_DeleteAdmin", "c_GetAdminList", "c_AddAdminFailedIp", "c_RemoveAdminFailedIp", 
				"c_ClearAdminSession", "c_ChangeAdminListener", "c_GetSfvDirList", "c_GetIPMaskList", "c_GetAdminIPMaskList", "c_GetFileMaskList", "c_SetSfvDirList", "c_SetIPMaskList", "c_SetAdminIPMaskList", "c_SetFileMaskList", 
				"c_GetTransferLimit", "c_SetTransferLimit", "c_CreateSSLCertificate", "c_GetSSLCertList", "c_GetSSLCertificate", "c_CheckSSLCertificate", "c_AddSSLCertificate", "c_DeleteSSLCertificate", "c_CreateSSHKey", 
				"c_GetSSHKeyList", "c_GetSSHKey", "c_CheckSSHKey", "c_AddSSHKey", "c_DeleteSSHKey", "c_GetGatewayList", "c_GetGateway", "c_CheckGateway", "c_AddGateway", "c_DeleteGateway", "c_GatewayRegister", 
				"c_GatewayInfo", "c_GetSMTPList", "c_GetSMTP", "c_AddSMTP", "c_DeleteSMTP", "c_AddTask", "c_TaskExist", "c_GetTask", "c_DeleteTask", "c_GetTaskList", "c_StartDomain", "c_StopDomain", "c_IsDomainOnline", 
				"c_GetSessionCount", "c_StartServer", "c_StopServer", "c_GetSessionLiveTime", "c_GetSessionStatistic", "c_GetDomainStatistic", "c_GetServerStatistic", "c_SendSiteMsg", "c_BroadcastSiteMsg", "c_GetSiteMsg", 
				"c_GetLocalIpList", "c_RepaceGlobalVar", "c_ReplaceGlobalVar", "c_SendMail", "c_SendMailComplete", "c_TranslateTime", "c_GetGlobalIPMaskList", "c_SetGlobalIPMaskList", "c_GetGlobalFileMaskList", 
				"c_SetGlobalFileMaskList", "c_GetLicenseInfo", "c_InputLicense", "c_ExitServer", "c_GetVersion", "c_GetLastVersion", "c_GetOsType", "c_ResetDefaultLogo", "c_CreateCustomLogo", "c_ClearThumbCache", 
				"c_GetAdminType", "c_GetDomainAdminType", "c_CreateDomainLogo", "c_GetTempBlockIpList", "c_AddTempBlockIp", "c_DelTempBlockIp", "c_GetUserAbsolutePath", "c_GetChartData", "c_TestSMTP", "c_StringFind", 
				"c_StringLength", "c_GuestAccountEnabled", "c_TestLDAP", "c_DoSQL", "c_ExecuteSQL", "c_DeleteWeblink", "c_DisconnectSQLITE", "c_DisconnectSQLITE2", "c_DoHTTPRequest", "c_SetIPWhitelist", "c_GetIPWhiteList", 
				"c_RestrictAdminSessionIP", "c_TotpCode", "c_MoveFileDir", "c_CopyFileDir", "c_GetTimeUTC", "c_ClearSystemLog", "c_ClearAdminLog"

		]
	}
	,'OPERATORS' : [ '+', '-', '/', '*', '=', '<', '>', '~=', '%', '^' ]
	,'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ]
	,'REGEXPS' : {

		'COMMENTS1' : {
			'search' : '()(--.*)()',
			'class' : 'comments',
			'modifiers' : 'g',
			'execute' : 'before'

		},
		'COMMENTS2' : {
			'search' : '()(--\\[\\[(?:.|[\\r\\n])*?--\\]\\])()',
			'class' : 'comments',
			'modifiers' : 'g',
			'execute' : 'before'

		}
	}
	,'STYLES' : {
		'COMMENTS': 'color: #008000;'
		,'QUOTESMARKS': 'color: #A31515;'
		,'KEYWORDS' : {
			'types' : 'color: #EE0000;'
			,'constants' : 'color: #0000FF;'
			,'statements' : 'color: #0000FF;'
			,'keywords' : 'color: #006EFF;'
			,'functions' : 'color: #CC00CC;'
		}
		,'OPERATORS' : 'color: #008080;'
		,'DELIMITERS' : 'color: #008080;'
	}
};