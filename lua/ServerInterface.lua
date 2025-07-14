_STARTCLOCK = os.clock()

-- Macro Definitions
DOPTION_DOMAIN_MAX_SESSION_INT = 0
DOPTION_DOMAIN_PER_IP_MAX_SESSION_INT = 1
DOPTION_PER_SESSION_MAX_DOWN_SPEED_INT = 2
DOPTION_PER_SESSION_MAX_UP_SPEED_INT = 3
DOPTION_DOMAIN_MAX_DOWN_SPEED_INT = 4
DOPTION_DOMAIN_MAX_UP_SPEED_INT = 5
DOPTION_PER_USER_MAX_DOWN_SPEED_INT = 6
DOPTION_PER_USER_MAX_UP_SPEED_INT = 7
DOPTION_PASSTYPE_INT = 8
DOPTION_PASV_IP_REFRESH_INTERVAL_INT = 9
DOPTION_FIXEDIP_STR = 10
DOPTION_WEB_IP_STR = 11
DOPTION_DNS_IP_STR = 12
DOPTION_ENABLE_UPNP = 13
DOPTION_PASSPORTMIN_INT = 14
DOPTION_PASSPORTMAX_INT = 15
DOPTION_BUFFERSIZE_INT = 16
DOPTION_DATA_ACCESS_INTERFACE_INT = 17
DOPTION_MYSQL_ADDRESS_STR = 18
DOPTION_MYSQL_PORT_INT = 19
DOPTION_MYSQL_USERNAME_STR = 20
DOPTION_MYSQL_PASSWORD_STR = 21
DOPTION_MYSQL_DBNAME_STR = 22
DOPTION_MYSQL_UNIXSOCKET_STR = 23
DOPTION_DSN_ADDRESS_STR = 24
DOPTION_DSN_USERNAME_STR = 25
DOPTION_DSN_PASSWORD_STR = 26
DOPTION_ENABLE_MODEZ_INT = 27
DOPTION_DEFAULT_ZLEVEL_INT = 28
DOPTION_MIN_ZLEVEL_INT = 29
DOPTION_MAX_ZLEVEL_INT = 30
DOPTION_ENABLE_SFVCHECK_INT = 31
DOPTION_SFVCHECK_CREATMISSING_INT = 32
DOPTION_SFVCHECK_BADFILE_INT = 33
DOPTION_SFVCHECK_PROGRESS_INT = 34
DOPTION_SFVCHECK_SENDRESULT_INT = 35
DOPTION_ANTI_HAMMER_ENABLE_INT = 36
DOPTION_ANTI_HAMMER_BLOCK_TIME_INT = 37
DOPTION_ANTI_HAMMER_LOGIN_FAILED_COUNTS_INT = 38
DOPTION_ANTI_HAMMER_INTERVAL_INT = 39
DOPTION_ANTI_HAMMER_SEND_MESSAGE_INT = 40
DOPTION_SSL_NAME_STR = 41
DOPTION_SSH_NAME_STR = 42
DOPTION_SSH_USE_UTF8 = 43
DOPTION_SMTP_NAME_STR = 44
DOPTION_ENABLE_FXP_INT = 45
DOPTION_ENABLE_WEBLINK_INT = 46
DOPTION_LOGFILE_ENABLE_INT = 47
DOPTION_LOGFILE_NAME_STR = 48
DOPTION_LOGFILE_MAXSIZE_INT = 49
DOPTION_LOGFILE_MESSAGE_INT = 50
DOPTION_LOGSCREEN_MESSAGE_INT = 51
DOPTION_LOGFILE_SECURITY_INT = 52
DOPTION_LOGSCREEN_SECURITY_INT = 53
DOPTION_LOGFILE_FTP_COMMAND_INT = 54
DOPTION_LOGSCREEN_FTP_COMMAND_INT = 55
DOPTION_LOGFILE_FTP_RESPONSE_INT = 56
DOPTION_LOGSCREEN_FTP_RESPONSE_INT = 57
DOPTION_LOGFILE_WEB_COMMAND_INT = 58
DOPTION_LOGSCREEN_WEB_COMMAND_INT = 59
DOPTION_LOGFILE_WEB_RESPONSE_INT = 60
DOPTION_LOGSCREEN_WEB_RESPONSE_INT = 61
DOPTION_LOGFILE_SSH_COMMAND_INT = 62
DOPTION_LOGSCREEN_SSH_COMMAND_INT = 63
DOPTION_LOGFILE_SSH_RESPONSE_INT = 64
DOPTION_LOGSCREEN_SSH_RESPONSE_INT = 65
DOPTION_LOGFILE_ODBC_ERROR_INT = 66
DOPTION_LOGSCREEN_ODBC_ERROR_INT = 67
DOPTION_LOGFILE_MYSQL_ERROR_INT = 68
DOPTION_LOGSCREEN_MYSQL_ERROR_INT = 69
DOPTION_LOGFILE_LUA_ERROR_INT = 70
DOPTION_LOGSCREEN_LUA_ERROR_INT = 71
DOPTION_LOGFILE_MAIL_ERROR_INT = 72
DOPTION_LOGSCREEN_MAIL_ERROR_INT = 73
DOPTION_LOGFILE_FILE_ERROR_INT = 74
DOPTION_LOGSCREEN_FILE_ERROR_INT = 75
DOPTION_LOGFILE_NORMAL_ERROR_INT = 76
DOPTION_LOGSCREEN_NORMAL_ERROR_INT = 77
DOPTION_MESSAGE_WELCOME_STR = 78
DOPTION_MESSAGE_LOGIN_STR = 79
DOPTION_MESSAGE_CHANGE_DIR_STR = 80
DOPTION_MESSAGE_DIR_LIST_STR = 81
DOPTION_MESSAGE_FILE_UPLOAD_STR = 82
DOPTION_MESSAGE_FILE_DOWNLOAD_STR = 83
DOPTION_MESSAGE_SYSTEM_COMMAND_STR = 84
DOPTION_MESSAGE_QUIT_COMMAND_STR = 85
DOPTION_LISTENER_ENABLE_UPNP_INT = 86
DOPTION_PER_ACCOUNT_MAX_SESSIONS_INT = 87
DOPTION_PER_ACCOUNT_PER_IP_MAX_SESSIONS_INT = 88
DOPTION_COMMAND_TIMEOUT_INT = 89
DOPTION_ENABLE_DOMAINLOGO_INT = 90
DOPTION_TRANSFER_TIMEOUT_INT = 91
DOPTION_ENABLE_ADUSER_INT = 92
DOPTION_ADUSER_DOMAIN_STR = 93
DOPTION_ADUSER_DIRPATH_STR = 94
DOPTION_ADUSER_OWNDIR_INT = 95
DOPTION_ADUSER_FILEREAD_INT = 96
DOPTION_ADUSER_FILEWRITE_INT = 97
DOPTION_ADUSER_FILEAPPEND_INT = 98
DOPTION_ADUSER_FILEDELETE_INT = 99
DOPTION_ADUSER_DIRRENAME_INT = 100
DOPTION_ADUSER_DIRLIST_INT = 101
DOPTION_ADUSER_DIRCREATE_INT = 102
DOPTION_ADUSER_DIRDELETE_INT = 103
DOPTION_ADUSER_FILERENAME_INT = 104
DOPTION_ADUSER_ZIPFILE_INT = 105
DOPTION_ADUSER_UNZIPFILE_INT = 106
DOPTION_ADUSER_MAPPING_STR = 107
DOPTION_ENABLE_LDAP_INT = 108
DOPTION_LDAP_HOST_STR = 109
DOPTION_LDAP_PORT_INT = 110
DOPTION_LDAP_USESSL_INT = 111
DOPTION_LDAP_BINDDN_STR = 112
DOPTION_LDAP_BINDPASS_STR = 113
DOPTION_LDAP_BASEDN_STR = 114
DOPTION_LDAP_FILTER_STR = 115
DOPTION_LDAP_DIRPATH_STR = 116
DOPTION_LDAP_OWNDIR_INT = 117
DOPTION_LDAP_FILEREAD_INT = 118
DOPTION_LDAP_FILEWRITE_INT = 119
DOPTION_LDAP_FILEAPPEND_INT = 120
DOPTION_LDAP_FILEDELETE_INT = 121
DOPTION_LDAP_DIRRENAME_INT = 122
DOPTION_LDAP_DIRLIST_INT = 123
DOPTION_LDAP_DIRCREATE_INT = 124
DOPTION_LDAP_DIRDELETE_INT = 125
DOPTION_LDAP_FILERENAME_INT = 126
DOPTION_LDAP_ZIPFILE_INT = 127
DOPTION_LDAP_UNZIPFILE_INT = 128
DOPTION_LDAP_MAPPING_STR = 129
DOPTION_LDAP_GROUP_MAPPING_STR = 130
DOPTION_LDAP_VERSION_INT = 131
DOPTION_LDAP_DIR_LOWERCASE_INT = 132
DOPTION_WEBLINK_SPEED_INT = 133
DOPTION_LIST_TIME_GMT = 134
DOPTION_LOGFILE_COMPRESS_INT = 135
DOPTION_ENABLE_UTF8ON = 136
DOPTION_ENABLE_AUTH = 137
DOPTION_USE_LOCAL_IP_PASSIVE_INT = 138
DOPTION_PASSWORD_LEN_INT = 139
DOPTION_INC_NUMBER_INT = 140
DOPTION_INC_LOWERCASE_INT = 141
DOPTION_INC_UPPERCASE_INT = 142
DOPTION_INC_NONALPHANUMERIC_INT = 143
DOPTION_ENABLE_NTFS_PERMISSION = 144
DOPTION_ENABLE_SHA256 = 145
DOPTION_ENABLE_HTTPS_REDIRECT = 146
DOPTION_HTTPS_REDIRECT_PORT = 147
DOPTION_CHANGEPASS_FIRSTLOGON = 148
DOPTION_ENABLE_UPLOADLINK_INT = 149
DOPTION_UPLOADLINK_SPEED_INT = 150
DOPTION_HTTP_HEADER_STR = 151
DOPTION_ALLOW_PASSIVE_ACTIVE = 152
DOPTION_PASSIVE_LISTENER_TIMEOUT = 153
DOPTION_AUTO_PASSIVE_FORWARD = 154
DOPTION_MYSQL_SET_UTF8 = 155
DOPTION_ENABLE_DOMAIN = 156
DOPTION_AUTO_ACTIVE_FORWARD = 157
DOPTION_WEBLINK_URL = 158
DOPTION_ENABLE_SYMBOLIC_LINK = 159
DOPTION_ENABLE_WELCOME_MSG = 160
DOPTION_WELCOME_MESSAGE = 161
DOPTION_KEEP_OLD_WEBLINK = 162
DOPTION_UPLINK_OVERWRITE = 163
DOPTION_SSH_BANNER = 164
DOPTION_HTTP_KEEP_ALIVE = 165
DOPTION_ENABLE_WEBLINK_SUBFOLDER = 166
DOPTION_TLS_SESSION_TIMEOUT = 167
DOPTION_ENABLE_PASS_SALTING = 168
DOPTION_SALTING_STRING = 169
DOPTION_ENABLE_LOG_MILLISECOND = 170
DOPTION_LDAPMAP_CASE_INSENSITIVE = 171
DOPTION_LDAP_TIMEOUT_INT = 172
DOPTION_ANONYMOUS_WEBLINK = 173

GOPTION_SYSTEM_LOGFILE_ENABLE_INT = 0
GOPTION_SYSTEM_LOGFILE_FILENAME_STR = 1
GOPTION_SYSTEM_LOGFILE_MAXSIZE_INT = 2
GOPTION_SYSTEM_LOGFILE_SYSTEM_ENABLE_INT = 3
GOPTION_SYSTEM_LOGSCREEN_SYSTEM_ENABLE_INT = 4
GOPTION_SYSTEM_LOGFILE_TASK_ENABLE_INT = 5
GOPTION_SYSTEM_LOGSCREEN_TASK_ENABLE_INT = 6
GOPTION_ENABLE_LIST_CACHE_INT = 7
GOPTION_ENABLE_THUMBNAIL_INT = 8
GOPTION_ENABLE_ED2K_LINK_INT = 9
GOPTION_MAX_DOWNLOAD_SPEED_INT = 10
GOPTION_MAX_UPLOAD_SPEED_INT = 11
GOPTION_ENABLE_ONLINE_EDIT_INT = 12
GOPTION_MAX_THREADPOOL_INT = 13
GOPTION_START_TIME_STR = 14
GOPTION_DISABLE_OPENSSLV3 = 15
GOPTION_ENABLE_FIPS = 16
GOPTION_ENABLE_CHMOD = 17
GOPTION_ALLOW_PROT_C = 18
GOPTION_DEFAULT_FILE_PERM = 19
GOPTION_DEFAULT_FOLDER_PERM = 20
GOPTION_AUDITDB_FILENAME_STR = 21
GOPTION_AUDIT_ENABLE_INT = 22
GOPTION_ENABLE_SHA256 = 23
GOPTION_ENABLE_MFMT = 24
GOPTION_DISABLE_TLSV1 = 25
GOPTION_OPENSSL_CIPHERS = 26
GOPTION_SFTP_KEX_ALGOS = 27
GOPTION_SFTP_ENC_ALGOS = 28
GOPTION_SFTP_MAC_ALGOS = 29
GOPTION_SSHLOG_PATH = 30
GOPTION_SSHLOG_LEVEL = 31
GOPTION_DISABLE_TLSV11 = 32
GOPTION_DISABLE_ECDSA_KEY = 33
GOPTION_WEBLINK_PATH = 34
GOPTION_UPLOADLINK_PATH = 35
GOPTION_AUTO_RECOVERY = 36
GOPTION_SFTP_HOST_KEY = 37
GOPTION_RESTRICT_SESSION_IP = 38
GOPTION_SQLITE_DB_FOLDER = 39
GOPTION_OPENSSL_NO_CACHE = 40
GOPTION_OPENSSL_NO_RESUMPTION = 41
GOPTION_LIST_WITH_REAL_USERGROUP = 42
GOPTION_OPENSSL_NO_RENEGOTIATION = 43

ADMIN_OPTION_LISTEN_PORT_INT = 0
ADMIN_OPTION_SECURE_ENABLE_INT = 1
ADMIN_OPTION_SSL_NAME_STR = 2
ADMIN_OPTION_LOGFILE_ENABLE_INT = 3
ADMIN_OPTION_LOGFILE_FILENAME_STR = 4
ADMIN_OPTION_LOGFILE_MAXSIZE_INT = 5
ADMIN_OPTION_ENABLE_UPNP_INT = 6
ADMIN_OPTION_LISTEN_IP_STR = 7
ADMIN_OPTION_ENABLE_SHA256 = 8

PORT_LISTENERS_ERR_SUCCESS = 0
PORT_LISTENERS_ERR_INVALID_IP = 1
PORT_LISTENERS_ERR_INVALID_PORT = 2
PORT_LISTENERS_ERR_INVALID_INDEX = 3
PORT_LISTENERS_ERR_LISTENER_EXIST = 4
PORT_LISTENERS_ERR_UNKNOWN = 99

FTP_USER_LOGIN_EVENT = 0
FTP_USER_DISCONNECT_EVENT = 1
FTP_USER_CONNECT_TIMEOUT_EVENT = 2
FTP_DIR_CREATE_EVENT = 3
FTP_DIR_DELETE_EVENT = 4
FTP_EXCEED_USERPASS_EVENT = 5
FTP_FILE_BANNED_EVENT = 6
FTP_FILE_DELETE_EVENT = 7
FTP_FILE_DOWNLOAD_EVENT = 8
FTP_FILE_RENAME_EVENT = 9
FTP_FILE_UPLOAD_EVENT = 10
FTP_QUOTA_EXCEED_EVENT = 11
FTP_TOOMANY_CONNECTION_PERIP_EVENT = 12
FTP_TOOMANY_CONNECTION_PERACCOUT_EVENT = 13
FTP_IP_BANNED_EVENT = 14
FTP_SITE_COMMAND_MESSAGE = 15
FTP_SITE_COMMAND_CHANGE_PASSWORD = 16
FTP_EXCEED_LIMIT = 17
FTP_EXCEED_MAX_SESSION_ON_GROUP = 18
FTP_EXCEED_MAX_SESSION_PER_IP_ON_GROUP = 19
FTP_EXCEED_MAX_SESSION_ON_DOMAIN = 20
FTP_EXCEED_MAX_SESSION_PER_IP_ON_DOMAIN = 21
FTP_BEFORE_LOGIN_EVENT = 22
FTP_BEFORE_DOWNLOAD_EVENT = 23
FTP_BEFORE_UPLOAD_EVENT = 24
FTP_BEFORE_DELETE_EVENT = 25
FTP_BEFORE_DIR_DELETE_EVENT = 26

SSH_USER_LOGIN_EVENT = 0
SSH_USER_DISCONNECT_EVENT = 1
SSH_USER_CONNECT_TIMEOUT_EVENT = 2
SSH_DIR_CREATE_EVENT = 3
SSH_DIR_DELETE_EVENT = 4
SSH_EXCEED_USERPASS_EVENT = 5
SSH_FILE_BANNED_EVENT = 6
SSH_FILE_DELETE_EVENT = 7
SSH_FILE_DOWNLOAD_EVENT = 8
SSH_FILE_RENAME_EVENT = 9
SSH_FILE_UPLOAD_EVENT = 10
SSH_QUOTA_EXCEED_EVENT = 11
SSH_TOOMANY_CONNECTION_PERIP_EVENT = 12
SSH_TOOMANY_CONNECTION_PERACCOUT_EVENT = 13
SSH_IP_BANNED_EVENT = 14
SSH_EXCEED_LIMIT = 15
SSH_EXCEED_MAX_SESSION_ON_GROUP = 16
SSH_EXCEED_MAX_SESSION_PER_IP_ON_GROUP = 17
SSH_EXCEED_MAX_SESSION_ON_DOMAIN = 18
SSH_EXCEED_MAX_SESSION_PER_IP_ON_DOMAIN = 19
SSH_BEFORE_LOGIN_EVENT = 20
SSH_BEFORE_DOWNLOAD_EVENT = 21
SSH_BEFORE_UPLOAD_EVENT = 22
SSH_BEFORE_DELETE_EVENT = 23
SSH_BEFORE_DIR_DELETE_EVENT = 24

WEB_USER_LOGIN_EVENT = 0
WEB_DIR_CREATE_EVENT = 1
WEB_DIR_DELETE_EVENT = 2
WEB_EXCEED_USERPASS_EVENT = 3
WEB_FILE_BANNED_EVENT = 4
WEB_FILE_DELETE_EVENT = 5
WEB_FILE_DOWNLOAD_EVENT = 6
WEB_FILE_RENAME_EVENT = 7
WEB_FILE_UPLOAD_EVENT = 8
WEB_QUOTA_EXCEED_EVENT = 9
WEB_TOOMANY_CONNECTION_PERIP_EVENT = 10
WEB_TOOMANY_CONNECTION_PERACCOUT_EVENT = 11
WEB_IP_BANNED_EVENT = 12
WEB_CHANGE_PASSWORD = 13
WEB_EXCEED_LIMIT = 14
WEB_EXCEED_MAX_SESSION_ON_GROUP = 15
WEB_EXCEED_MAX_SESSION_PER_IP_ON_GROUP = 16
WEB_EXCEED_MAX_SESSION_ON_DOMAIN = 17
WEB_EXCEED_MAX_SESSION_PER_IP_ON_DOMAIN = 18
WEB_USER_DISCONNECT_EVENT = 19
WEB_BEFORE_LOGIN_EVENT = 20
WEB_BEFORE_DOWNLOAD_EVENT = 21
WEB_BEFORE_UPLOAD_EVENT = 22
WEB_BEFORE_DELETE_EVENT = 23
WEB_BEFORE_DIR_DELETE_EVENT = 24

ADMIN_LOG_OK = 1
ADMIN_LOG_ERROR = 2
SYS_LOG_OK = 1
SYS_LOG_ERROR = 2
DOMAIN_LOG_WEB_COMMAND = 5
DOMAIN_LOG_WEB_RESPOND = 6

LICENSE_STANDARD = 1
LICENSE_SECURE = 2
LICENSE_CORPORATE = 3
LICENSE_FREE = 4
LICENSE_TRIAL = 5
LICENSE_EXPIRE = 6
LICENSE_FAILED = 7


function echo(str)
	if type(str) =="string" then
		echo_out = echo_out..str
	elseif type(str) =="number" then
		echo_out = echo_out..tostring(str)
	else
		echo_out = echo_out.."["..type(str).." value]"
	end
end
print=echo

--All Functions
function AddUser(domain,user)
	if type(user.username) ~="string" then
		error("no user name")
		return
	end

	local user_directory = {}
	if type(user.directories) == "table" then
		for _,directory in pairs(user.directories) do
			local temp = {}
			table.insert(temp,directory.dir)
			table.insert(temp,directory.alias or "")
			table.insert(temp,directory.is_home_dir)
			table.insert(temp,directory.fileread)
			table.insert(temp,directory.filewrite)
			table.insert(temp,directory.fileappend)
			table.insert(temp,directory.filedelete)
			table.insert(temp,directory.dirlist)
			table.insert(temp,directory.dirmake)
			table.insert(temp,directory.dirdelete)
			table.insert(temp,directory.dirrename)
			table.insert(temp,directory.filerename)
			table.insert(temp,directory.zipfile)
			table.insert(temp,directory.unzipfile)
			table.insert(user_directory,temp)
		end
	end

	local subdir_perm = {}
	if type(user.subdir_perm) == "table" then
		for _,directory in pairs(user.subdir_perm) do
			local temp = {}
			table.insert(temp,directory.dir)
			table.insert(temp,directory.alias or "")
			table.insert(temp,directory.is_home_dir)
			table.insert(temp,directory.fileread)
			table.insert(temp,directory.filewrite)
			table.insert(temp,directory.fileappend)
			table.insert(temp,directory.filedelete)
			table.insert(temp,directory.dirlist)
			table.insert(temp,directory.dirmake)
			table.insert(temp,directory.dirdelete)
			table.insert(temp,directory.dirrename)
			table.insert(temp,directory.filerename)
			table.insert(temp,directory.zipfile)
			table.insert(temp,directory.unzipfile)
			table.insert(subdir_perm,temp)
		end
	end
	
	local user_ipmasks = {}
	if type(user.ipmasks) == "table" then
		for _,ipmask in pairs(user.ipmasks) do
			local temp = {}
			table.insert(temp,ipmask.ip)
			table.insert(temp,ipmask.refuse)
			table.insert(user_ipmasks,temp)
		end
	end

	local user_filemasks = {}
	if type(user.filemasks) == "table" then
		for _,filemask in pairs(user.filemasks) do
			local temp = {}
			table.insert(temp,filemask.filename)
			table.insert(temp,filemask.refuse)
			table.insert(user_filemasks,temp)
		end
	end

	local user_schedules = {}
	if type(user.schedules) == "table" then
		for _,schedule in pairs(user.schedules) do
			local temp = {}
			table.insert(temp,schedule.weekday)
			table.insert(temp,schedule.timefrom)
			table.insert(temp,schedule.timeto)
			table.insert(user_schedules,temp)
		end
	end

	local user_usergroups = {}
	if type(user.usergroups) == "table" then
		for _,usergroup in pairs(user.usergroups) do
			local temp = {}
			table.insert(temp,usergroup.groupname)
			table.insert(user_usergroups,temp)
		end
	end

	local password_md5 = ""
	if user.oldpassword ~= nil and user.oldpassword ~= "" and user.oldpassword == user.password then
		password_md5 = user.password
	else
		local temppass = user.password
		if c_GetOptionInt(domain, DOPTION_ENABLE_PASS_SALTING) == 1 then
			local salt_string = c_GetOptionStr(domain, DOPTION_SALTING_STRING)
			if salt_string == "%Name" then
				salt_string = user.username
			end
			temppass = user.password..salt_string
		end

		if c_GetOptionInt(domain, DOPTION_ENABLE_SHA256) == 1 then
			password_md5 = sha2(temppass)
		else
			password_md5 = md5(temppass)
		end
	end

	c_AddUser(domain,user.username,password_md5,user.protocol_type or 0,user.enable_password or 0,user.enable_account or 0,
	user.max_download or 0,user.max_upload or 0,user.max_connection or 0,user.connect_timeout or 0,user.idle_timeout or 0,
	user.connect_per_ip or 0,user.pass_length or 0,user.show_hidden_file or 0,user.change_pass or 0,user.send_message or 0,
	user.ratio_credit or 0,user.ratio_download or 0,user.ratio_upload or 0,user.ratio_count_method or 0,user.enable_ratio or 0,
	user.current_quota or 0,user.max_quota or 0,user.enable_quota or 0,user.note_name or "",user.note_address or "",user.note_zip or "",
	user.note_phone or "",user.note_fax or "",user.note_email or "",user.note_memo or "", user_directory, user_ipmasks, user_filemasks, 
	user_usergroups,user.enable_schedule or 0, user_schedules, user.limit_reset_type or 0, user.limit_enable_upload or 0, 
	user.cur_upload_size or 0,user.max_upload_size or 0, user.limit_enable_download or 0, user.cur_download_size or 0, 
	user.max_download_size or 0,user.enable_expire or 0,user.expiretime or "",user.max_download_account or 0,
	user.max_upload_account or 0,user.ssh_pubkey_path or "",subdir_perm,user.enable_ssh_pubkey_auth or 0,
	user.ssh_auth_method or 0,user.enable_weblink or 0,user.enable_uplink or 0,user.enable_two_factor or 0,user.two_factor_code or "")

end


function AddGroup(domain,group)
	if type(group.groupname) ~="string" then
		error("no group name")
		return
	end

	local group_directory = {}
	if type(group.directories) == "table" then
		for _,directory in pairs(group.directories) do
			local temp = {}
			table.insert(temp,directory.dir)
			table.insert(temp,directory.alias or "")
			table.insert(temp,directory.is_home_dir)
			table.insert(temp,directory.fileread)
			table.insert(temp,directory.filewrite)
			table.insert(temp,directory.fileappend)
			table.insert(temp,directory.filedelete)
			table.insert(temp,directory.dirlist)
			table.insert(temp,directory.dirmake)
			table.insert(temp,directory.dirdelete)
			table.insert(temp,directory.dirrename)
			table.insert(temp,directory.filerename)
			table.insert(temp,directory.zipfile)
			table.insert(temp,directory.unzipfile)
			table.insert(group_directory,temp)
		end
	end

	local subdir_perm = {}
	if type(group.subdir_perm) == "table" then
		for _,directory in pairs(group.subdir_perm) do
			local temp = {}
			table.insert(temp,directory.dir)
			table.insert(temp,directory.alias or "")
			table.insert(temp,directory.is_home_dir)
			table.insert(temp,directory.fileread)
			table.insert(temp,directory.filewrite)
			table.insert(temp,directory.fileappend)
			table.insert(temp,directory.filedelete)
			table.insert(temp,directory.dirlist)
			table.insert(temp,directory.dirmake)
			table.insert(temp,directory.dirdelete)
			table.insert(temp,directory.dirrename)
			table.insert(temp,directory.filerename)
			table.insert(temp,directory.zipfile)
			table.insert(temp,directory.unzipfile)
			table.insert(subdir_perm,temp)
		end
	end
	
	local group_ipmasks = {}
	if type(group.ipmasks) == "table" then
		for _,ipmask in pairs(group.ipmasks) do
			local temp = {}
			table.insert(temp,ipmask.ip)
			table.insert(temp,ipmask.refuse)
			table.insert(group_ipmasks,temp)
		end
	end

	local group_filemasks = {}
	if type(group.filemasks) == "table" then
		for _,filemask in pairs(group.filemasks) do
			local temp = {}
			table.insert(temp,filemask.filename)
			table.insert(temp,filemask.refuse)
			table.insert(group_filemasks,temp)
		end
	end

	local group_userlist = {}
	if type(group.userlist) == "table" then
		for _,tempuser in pairs(group.userlist) do
			local temp = {}
			table.insert(temp,tempuser.username)
			table.insert(group_userlist,temp)
		end
	end

	c_AddGroup(domain,group.groupname, group.max_download or 0,group.max_upload or 0,group.max_connection or 0,
	group.connect_timeout or 0,group.idle_timeout or 0,group.connect_per_ip or 0,group.max_session_per_user or 0,group.max_ipsession_for_user or 0,
	group.show_hidden_file or 0,group.send_message or 0, 
	group_directory, group_ipmasks, group_filemasks, group.max_download_account or 0,group.max_upload_account or 0, 
	group.max_download_group or 0,group.max_upload_group or 0, group_userlist, subdir_perm)
end


function GetUserList(domain)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	return c_GetUserList(domain)
end

function cmdUserList(domain)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	return c_GetUserList(domain)
end

function GetUserListPage(domain,page,column,sortflag,username)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	return c_GetUserListPage(domain,page,column,sortflag,username)
end

function cmdUserListPage(domain,page)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	return c_GetUserListPage(domain,page)
end

function GetGroupList(domain)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	return c_GetGroupList(domain)
end

function cmdGroupList(domain)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	return c_GetGroupList(domain)
end

function GetGroupListPage(domain,page)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	return c_GetGroupListPage(domain,page)
end

function cmdGroupListPage(domain,page)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	return c_GetGroupListPage(domain,page)
end

function GetConnectionList(domain)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	local connlist = c_GetConnectionsList(domain)
	if connlist == nil or connlist == "" then
		return
	end
	local xml = ""
	local temp = {}
	local count = 0
	xml = xml.."<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n"
	xml = xml.."<alldata>\r\n"
	xml = xml.."<sessionnum>"
	xml = xml..c_GetSessionCount(domain)
	xml = xml.."</sessionnum>\r\n"
	for _,conn in pairs(connlist) do
		if count < 50000 and type(conn) == "table" then
			temp[#temp+1] = "<connection>\r\n".."<id>"..conn["id"].."</id>".."<username><![CDATA["..conn["username"].."]]></username>".."<protocol>"..conn["protocol"].."</protocol>".."<ip>"..conn["ip"].."</ip>".."<lastcommand>"..conn["lastcommand"].."</lastcommand>".."<directory><![CDATA["..conn["directory"].."]]></directory>\r\n".."<lastfile><![CDATA["..conn["lastfile"].."]]></lastfile>".."</connection>\r\n"
		else
			break
		end
		count = count + 1
	end
	xml = xml..table.concat(temp)
	xml = xml.."</alldata>\r\n"
	return xml
end

function cmdConnectionList(domain)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	local connlist = c_GetConnectionsList(domain)
	if connlist == nil or connlist == "" then
		return
	end
	local temp = {}
	local outstr = "Session ID\t\t\tUser name\t\t\tProtocol\t\t\tLast command\t\t\tLast directory\t\t\tLast file\r\n"
	for _,conn in pairs(connlist) do
		if type(conn) == "table" then
			temp[#temp+1] = conn["id"].."\t\t\t\t\t"..conn["username"].."\t\t\t\t\t"..conn["protocol"].."\t\t\t\t\t"..conn["lastcommand"].."\t\t\t\t\t"..conn["directory"].."\t\t\t\t\t"..conn["lastfile"].."\r\n"
		end
	end
	outstr = outstr..table.concat(temp)
	return outstr
end


function GetDomainList()
	local xml = ""
	xml = xml.."<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n"
	xml = xml.."<alldata>\r\n"
	local id = 1
	for _,domain in pairs(c_GetDomainList()) do
		xml = xml.."<domainlist>\r\n"
		xml = xml.."<id>"
		xml = xml..id
		xml = xml.."</id>"
		xml = xml.."<domain><![CDATA["
		xml = xml..urldecode(domain)
		xml = xml.."]]></domain>"
		xml = xml.."<connections>"
		xml = xml..c_GetSessionCount(domain)
		xml = xml.."</connections>"
		xml = xml.."<status>"
		xml = xml..tostring(c_IsDomainOnline(domain))
		xml = xml.."</status>\r\n"
		xml = xml.."</domainlist>\r\n"
		id = id+1
	end
	xml = xml.."</alldata>\r\n"
	return xml
end

function cmdDomainList()
	local outstr = ""
	for _,domain in pairs(c_GetDomainList()) do
		outstr = outstr..domain.."\r\n"
	end
	return outstr
end

function GetListenerList(domain)
	if domain == nil or domain == "" then
		return "domain name error!"
	end
	local listenerlist = c_GetListenerList(domain)
	if listenerlist == nil or listenerlist == "" then
		return
	end
	local xml = ""
	xml = xml.."<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n"
	xml = xml.."<alldata>\r\n"
	for _,listener in pairs(listenerlist) do
		if type(listener) == "table" then
			xml = xml.."<listenerlist>\r\n"
			xml = xml.."<ID>"
			xml = xml..listener["ID"]
			xml = xml.."</ID>"
			xml = xml.."<Type>"
			xml = xml..listener["Type"]
			xml = xml.."</Type>"
			xml = xml.."<Ip_Address>"
			xml = xml..listener["Ip_Address"]
			xml = xml.."</Ip_Address>"
			xml = xml.."<Port>"
			xml = xml..listener["Port"]
			xml = xml.."</Port>"
			xml = xml.."<Gateway_Host>"
			xml = xml..listener["Gateway_Host"]
			xml = xml.."</Gateway_Host>"
			xml = xml.."<Gateway_Port>"
			xml = xml..listener["Gateway_Port"]
			xml = xml.."</Gateway_Port>"
			xml = xml.."<Enable_FastUDP>"
			xml = xml..tostring(listener["Enable_FastUDP"])
			xml = xml.."</Enable_FastUDP>"
			xml = xml.."<Is_Listening>"
			xml = xml..tostring(listener["Is_Listening"])
			xml = xml.."</Is_Listening>\r\n"
			xml = xml.."</listenerlist>\r\n"
		end
	end
	xml = xml.."</alldata>\r\n"
	return xml
end

function cmdAddListener(domain, nType, strIpaddress, nPort)
	local nRetCode = c_AddListener(domain, nType, strIpaddress, nPort)
	local strReturn = "";
	if nRetCode == PORT_LISTENERS_ERR_SUCCESS then
		strReturn = "Add Listener Successfully"
	elseif nRetCode == PORT_LISTENERS_ERR_INVALID_IP then
		strReturn = "Failed, Invalid IP Address"
	elseif nRetCode == PORT_LISTENERS_ERR_INVALID_PORT then
		strReturn = "Failed, Invalid Port"
	elseif nRetCode == PORT_LISTENERS_ERR_LISTENER_EXIST then
		strReturn = "Failed, Listener Already Exist"
	else
		strReturn = "Failed, Unknown Error"
	end
	return strReturn
end

function cmdDeleteListener(domain, nIndex)
	local nRetCode = c_DeleteListener(domain, nIndex)
	local strReturn = "";
	if nRetCode == PORT_LISTENERS_ERR_SUCCESS then
		strReturn = "Delete Listener Successfully"
	elseif nRetCode == PORT_LISTENERS_ERR_INVALID_INDEX then
		strReturn = "Failed, Invalid Index"
	else
		strReturn = "Failed, Unknown Error"
	end
	return strReturn
end

function cmdUpdateListener(domain, nIndex, nType, strIpaddress, nPort)
	local nRetCode = c_UpdateListener(domain, nIndex, nType, strIpaddress, nPort)
	local strReturn = "";
	if nRetCode == PORT_LISTENERS_ERR_SUCCESS then
		strReturn = "Update Listener Successfully"
	elseif nRetCode == PORT_LISTENERS_ERR_INVALID_INDEX then
		strReturn = "Failed, Invalid Index"
	elseif nRetCode == PORT_LISTENERS_ERR_INVALID_IP then
		strReturn = "Failed, Invalid IP Address"
	elseif nRetCode == PORT_LISTENERS_ERR_INVALID_PORT then
		strReturn = "Failed, Invalid Port"
	elseif nRetCode == PORT_LISTENERS_ERR_LISTENER_EXIST then
		strReturn = "Failed, Listener Already Exist"
	else
		strReturn = "Failed, Unknown Error"
	end

	return strReturn
end

function cmdListenerList(domain)
	local listenerlist = c_GetListenerList(domain)
	if listenerlist == nil or listenerlist == "" then
		return
	end
	local outstr = "Listener Type\t\tListener Address\t\tListener Port\t\tIs Listening\r\n"
	local listener_type = {}
	listener_type[1] = "FTP   "
	listener_type[2] = "FTPS  "
	listener_type[3] = "HTTP  "
	listener_type[4] = "HTTPS "
	listener_type[5] = "SFTP  "
	for _,listener in pairs(listenerlist) do
		if type(listener) == "table" then
			local temp = listener_type[tonumber(listener["Type"])].."\t\t\t\t\t"..listener["Ip_Address"].."\t\t\t\t\t"..listener["Port"].."\t\t\t\t\t"..tostring(listener["Is_Listening"]).."\r\n"
			outstr = outstr..temp
		end
	end
	return outstr
end


function AddAdmin(admin)
	if type(admin.username) ~="string" then
		error("no username")
		return
	end

	if type(admin.password) ~="string" or string.len(admin.password) < 8 then
		error("password length must >= 8!")
		return
	end

	local password_md5 = ""
	if admin.oldpassword ~= nil and admin.oldpassword ~= "" and admin.oldpassword == admin.password then
		password_md5 = admin.password
	else
		local temppass = admin.password.."WingFTP"

		if c_GetAdminOptionInt(ADMIN_OPTION_ENABLE_SHA256) == 1 then
			password_md5 = sha2(temppass)
		else
			password_md5 = md5(temppass)
		end
	end
	
	local admin_ipmasks = {}
	if type(admin.ipmasks) == "table" then
		for _,ipmask in pairs(admin.ipmasks) do
			local temp = {}
			table.insert(temp,ipmask.ip)
			table.insert(temp,ipmask.refuse)
			table.insert(admin_ipmasks,temp)
		end
	end

	c_AddAdmin(admin.username, password_md5, admin.readonly, admin_ipmasks, admin.domainadmin, admin.domainlist, admin.mydirectory, admin.enable_two_factor, admin.two_factor_code)
end


function GetAdminList()
	local xml = ""
	xml = xml.."<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n"
	xml = xml.."<alldata>\r\n"
	for _,user in pairs(c_GetAdminList()) do
		if type(user) == "table" then
			xml = xml.."<adminlist>\r\n"
			xml = xml.."<username><![CDATA["
			xml = xml..user["username"]
			xml = xml.."]]></username>"
			xml = xml.."<lastlogin>"
			if c_IsReadonlyAdmin() == false then
				xml = xml..user["lastlogin"]
			end
			xml = xml.."</lastlogin>"
			xml = xml.."<lastip>"
			if c_IsReadonlyAdmin() == false then
				xml = xml..user["lastip"]
			end
			xml = xml.."</lastip>"
			xml = xml.."<loginlist>"
			if c_IsReadonlyAdmin() == false then
				xml = xml..user["loginlist"]
			end
			xml = xml.."</loginlist>\r\n"
			xml = xml.."</adminlist>\r\n"
		end
	end
	xml = xml.."</alldata>\r\n"
	return xml
end


function cmdAdminList()
	local outstr = "ID\t\t\tUsername\r\n"
	local id = 1
	for _,user in pairs(c_GetAdminList()) do
		if type(user) == "table" then
			outstr = outstr..tostring(id).."\t\t\t"..user["username"].."\r\n"
			id = id+1
		end
	end
	return outstr
end


function GetTaskList()
	local xml = ""
	xml = xml.."<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n"
	xml = xml.."<alldata>\r\n"
	for _,task in pairs(c_GetTaskList()) do
		if type(task) == "table" then
			xml = xml.."<tasklist>\r\n"
			xml = xml.."<taskname><![CDATA["
			xml = xml..task["taskname"]
			xml = xml.."]]></taskname>"
			xml = xml.."<type>"
			xml = xml..task["type"]
			xml = xml.."</type>"
			xml = xml.."<day>"
			xml = xml..task["day"]
			xml = xml.."</day>"
			xml = xml.."<executed>"
			xml = xml..tostring(task["executed"])
			xml = xml.."</executed>"
			xml = xml.."<datefrom>"
			xml = xml..task["datefrom"]
			xml = xml.."</datefrom>"
			xml = xml.."<timefrom>"
			xml = xml..task["timefrom"]
			xml = xml.."</timefrom>\r\n"
			xml = xml.."</tasklist>\r\n"
		end
	end
	xml = xml.."</alldata>\r\n"
	return xml
end

function cmdTaskList()
	local outstr = "ID\t\t\tTaskname\r\n"
	local id = 1
	for _,task in pairs(c_GetTaskList()) do
		if type(task) == "table" then
			outstr = outstr..tostring(id).."\t\t\t"..task["taskname"].."\r\n"
			id = id+1
		end
	end
	return outstr
end


function GetSSLCertList()
	local xml = ""
	xml = xml.."<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n"
	xml = xml.."<alldata>\r\n"
	for _,cert in pairs(c_GetSSLCertList()) do
		if type(cert) == "table" then
			xml = xml.."<certlist>\r\n"
			xml = xml.."<name><![CDATA["
			xml = xml..cert["name"]
			xml = xml.."]]></name>"
			xml = xml.."<state>"
			xml = xml..tostring(cert["state"])
			xml = xml.."</state>\r\n"
			xml = xml.."</certlist>\r\n"
		end
	end
	xml = xml.."</alldata>\r\n"
	return xml
end

function cmdSSLCertList()
	local outstr = "ID\t\t\tName\t\t\tValid\r\n"
	local id = 1
	for _,cert in pairs(c_GetSSLCertList()) do
		if type(cert) == "table" then
			outstr = outstr..tostring(id).."\t\t\t"..cert["name"].."\t\t\t"..tostring(cert["state"]).."\r\n"
			id = id+1
		end
	end
	return outstr
end


function GetSSHKeyList()
	local xml = ""
	xml = xml.."<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n"
	xml = xml.."<alldata>\r\n"
	for _,cert in pairs(c_GetSSHKeyList()) do
		if type(cert) == "table" then
			xml = xml.."<keylist>\r\n"
			xml = xml.."<name><![CDATA["
			xml = xml..cert["name"]
			xml = xml.."]]></name>"
			xml = xml.."<state>"
			xml = xml..tostring(cert["state"])
			xml = xml.."</state>\r\n"
			xml = xml.."</keylist>\r\n"
		end
	end
	xml = xml.."</alldata>\r\n"
	return xml
end

function cmdSSHKeyList()
	local outstr = "ID\t\t\tName\t\t\tValid\r\n"
	local id = 1
	for _,cert in pairs(c_GetSSHKeyList()) do
		if type(cert) == "table" then
			outstr = outstr..tostring(id).."\t\t\t"..cert["name"].."\t\t\t"..tostring(cert["state"]).."\r\n"
			id = id+1
		end
	end
	return outstr
end


function cmdServerStatistic()
	local statistic = c_GetServerStatistic()
	local outstr = "Statistics\t\t\tValue\r\n"
	outstr = outstr.."Server Running Time\t\t\t"..formatTime(statistic["running_time"]).."\r\n"
	outstr = outstr.."Current Sessions\t\t\t"..statistic["current_session"].."\r\n"
	outstr = outstr.."Highest Num. Sessions\t\t\t"..statistic["max_session"].."\r\n"
	outstr = outstr.."24 Hours Sessions\t\t\t"..statistic["last24hour_session"].."\r\n"
	outstr = outstr.."Avg. Session Length\t\t\t"..formatTime(statistic["session_averagesec"]).."\r\n"
	outstr = outstr.."Longest Session\t\t\t"..formatTime(statistic["session_maxsec"]).."\r\n"
	outstr = outstr.."Total Sessions\t\t\t"..statistic["total_session"].."\r\n"

	outstr = outstr.."Download Speed\t\t\t"..formatSpeed(statistic["down_speed"]).."\r\n"
	outstr = outstr.."Avg. Download Speed\t\t\t"..formatSpeed(statistic["down_averagespeed"]).."\r\n"
	outstr = outstr.."Total Download Bytes\t\t\t"..formatSize(statistic["down_bytes"]).."\r\n"
	outstr = outstr.."Total Download Files\t\t\t"..statistic["down_files"].." files\r\n"

	outstr = outstr.."Upload Speed\t\t\t"..formatSpeed(statistic["up_speed"]).."\r\n"
	outstr = outstr.."Avg. Upload Speed\t\t\t"..formatSpeed(statistic["up_averagespeed"]).."\r\n"
	outstr = outstr.."Total Upload Bytes\t\t\t"..formatSize(statistic["up_bytes"]).."\r\n"
	outstr = outstr.."Total Upload Files\t\t\t"..statistic["up_files"].." files\r\n"
	return outstr
end

function cmdDomainStatistic(domain)
	local statistic = c_GetDomainStatistic(domain)
	local outstr = "Statistics\t\t\tValue\r\n"
	if c_IsDomainOnline(domain) == true then
		outstr = outstr.."Domain Status\t\t\t online\r\n"
	else
		outstr = outstr.."Domain Status\t\t\t offline\r\n"
	end
	if statistic ~= nil then
		outstr = outstr.."Domain Running Time\t\t\t"..formatTime(statistic["running_time"]).."\r\n"
		outstr = outstr.."Current Sessions\t\t\t"..statistic["current_session"].."\r\n"
		outstr = outstr.."Highest Num. Sessions\t\t\t"..statistic["max_session"].."\r\n"
		outstr = outstr.."24 Hours Sessions\t\t\t"..statistic["last24hour_session"].."\r\n"
		outstr = outstr.."Avg. Session Length\t\t\t"..formatTime(statistic["session_averagesec"]).."\r\n"
		outstr = outstr.."Longest Session\t\t\t"..formatTime(statistic["session_maxsec"]).."\r\n"
		outstr = outstr.."Total Sessions\t\t\t"..statistic["total_session"].."\r\n"

		outstr = outstr.."Download Speed\t\t\t"..formatSpeed(statistic["down_speed"]).."\r\n"
		outstr = outstr.."Avg. Download Speed\t\t\t"..formatSpeed(statistic["down_averagespeed"]).."\r\n"
		outstr = outstr.."Total Download Bytes\t\t\t"..formatSize(statistic["down_bytes"]).."\r\n"
		outstr = outstr.."Total Download Files\t\t\t"..statistic["down_files"].." files\r\n"

		outstr = outstr.."Upload Speed\t\t\t"..formatSpeed(statistic["up_speed"]).."\r\n"
		outstr = outstr.."Avg. Upload Speed\t\t\t"..formatSpeed(statistic["up_averagespeed"]).."\r\n"
		outstr = outstr.."Total Upload Bytes\t\t\t"..formatSize(statistic["up_bytes"]).."\r\n"
		outstr = outstr.."Total Upload Files\t\t\t"..statistic["up_files"].." files\r\n"
	else
		outstr = outstr.."invalid domain!\r\n"
	end
	return outstr
end

function cmdSessionStatistic(domain,sessionID)
	local statistic = c_GetSessionStatistic(domain,sessionID)
	local outstr = "Statistics\t\t\tValue\r\n"
	if statistic ~= nil then
		outstr = outstr.."Download Speed\t\t\t"..formatSpeed(statistic["down_speed"]).."\r\n"
		outstr = outstr.."Avg. Download Speed\t\t\t"..formatSpeed(statistic["down_averagespeed"]).."\r\n"
		outstr = outstr.."Total Download Bytes\t\t\t"..formatSize(statistic["down_bytes"]).."\r\n"
		outstr = outstr.."Total Download Files\t\t\t"..statistic["down_files"].." files\r\n"
		outstr = outstr.."Upload Speed\t\t\t"..formatSpeed(statistic["up_speed"]).."\r\n"
		outstr = outstr.."Avg. Upload Speed\t\t\t"..formatSpeed(statistic["up_averagespeed"]).."\r\n"
		outstr = outstr.."Total Upload Bytes\t\t\t"..formatSize(statistic["up_bytes"]).."\r\n"
		outstr = outstr.."Total Upload Files\t\t\t"..statistic["up_files"].." files\r\n"
	else
		if c_GetSessionLiveTime(domain,sessionID) == 0 then
			outstr = outstr.."invalid session!\r\n"
		else
			outstr = outstr.."Download Speed\t\t\t0 KB/s\r\n"
			outstr = outstr.."Avg. Download Speed\t\t\t0 KB/s\r\n"
			outstr = outstr.."Total Download Bytes\t\t\t0 KB\r\n"
			outstr = outstr.."Total Download Files\t\t\t0 files\r\n"
			outstr = outstr.."Upload Speed\t\t\t0 KB/s\r\n"
			outstr = outstr.."Avg. Upload Speed\t\t\t0 KB/s\r\n"
			outstr = outstr.."Total Upload Bytes\t\t\t0\r\n"
			outstr = outstr.."Total Upload Files\t\t\t0 files\r\n"
		end
	end
	return outstr
end



function Split(fullstring, separator)
	local findstartindex = 1
	local splitindex = 1
	local splitarray = {}
	while true do
	   local findlastindex = string.find(fullstring, separator, findstartindex)
	   if not findlastindex then
		splitarray[splitindex] = string.sub(fullstring, findstartindex, string.len(fullstring))
		break
	   end
	   splitarray[splitindex] = string.sub(fullstring, findstartindex, findlastindex-1)
	   findstartindex = findlastindex+string.len(separator)
	   splitindex = splitindex+1
	end
	return splitarray
end

function specialhtml_encode(src)
	src=src.gsub(src,">", "&gt;")
	src=src.gsub(src,"<", "&lt;")
	src=src.gsub(src,"\"", "&quot;")
	src=src.gsub(src,"\'", "&#39;")
	src=src.gsub(src,"\\", "&#92;")
	return src
end

function specialhtml_encode_enhance(src)
	src=src.gsub(src,">", "&gt;")
	src=src.gsub(src,"<", "&lt;")
	src=src.gsub(src,"\"", "&quot;")
	src=src.gsub(src,"\'", "&#39;")
	src=src.gsub(src,"\\", "&#92;")
	src=src.gsub(src,"\r\n", "<BR>")
	src=src.gsub(src,"\n", "<BR>")
	return src
end

function specialhtml_decode(src)
	src=src.gsub(src,"&gt;", ">") 
 	src=src.gsub(src,"&lt;", "<") 
	src=src.gsub(src,"&quot;", "\"")
	src=src.gsub(src,"&#39;", "\'")
	src=src.gsub(src,"&#92;", "\\")
	return src
end

function page_loadtime()
	local nowtime = os.clock()
	local timeval = string.format("%0.2f",nowtime-_STARTCLOCK)
	return timeval
end

function formatTime(timesec)
	local hours = math.floor(timesec / 3600)
	if hours < 10 then
		hours = string.sub("0"..hours,-2)
	end
	local seconds = timesec % 3600
	local minutes = math.floor(seconds / 60)
	seconds = seconds % 60
	return hours..":"..string.sub("0"..minutes,-2)..":"..string.sub("0"..seconds,-2)
end

function formatDay(timesec, strDay)
	local days = math.floor(timesec / (3600*24) )
	local labelDays = ""
	local hours = math.floor(timesec / 3600)
	if days > 0 then
		hours = math.floor( (timesec-3600*24*days) / 3600)
		labelDays = days.." "..strDay..", "
	end
	if hours < 10 then
		hours = string.sub("0"..hours,-2)
	end
	local seconds = timesec % 3600
	local minutes = math.floor(seconds / 60)
	seconds = seconds % 60
	return labelDays..hours..":"..string.sub("0"..minutes,-2)..":"..string.sub("0"..seconds,-2)
end

function formatSize(bytes)
	if math.floor(bytes/1024) < 1 then
		return bytes.." Bytes"
	elseif math.floor(bytes/(1024*1024)) < 1 then
		return string.format("%0.2f KB",bytes/1024 )
	elseif math.floor(bytes/(1024*1024*1024)) < 1 then
		return string.format("%0.2f MB",bytes/(1024*1024) )
	else
		return string.format("%0.2f GB",bytes/(1024*1024*1024) )
	end
end

function formatSpeed(bytes)
	return formatSize(bytes).."/s"
end

function GuessGame(code)
	if _SESSION['guessgame_code'] == nil or code == "start" then
		print("Welcome to the NumberGuess(v1.0) game!\r\nPlease input 4 different number,such as 'guess 0538',then system will give some tip.\r\nIf the tip is '2A1B',this means you got two number right,but only one of those is in right position.\r\nKeep guessing until all numbers are right.\r\nYou can restart game by command 'guess start'.")
		local codeString = ""
		local charArray = {"0","1","2","3","4","5","6","7","8","9"}
		math.randomseed(os.time())
		math.random()
		for i=1,4 do
			local nowindex = math.random(1,table.maxn(charArray))
			codeString = codeString..charArray[nowindex]
			table.remove(charArray,nowindex)
		end
		rawset(_SESSION,"guessgame_code",codeString)
		SessionModule.save(_SESSION_ID)
	else
		local codeString = _SESSION['guessgame_code']
		local strlen = string.len(code)
		if strlen ~= 4 then
			print("Please input 4 different number!\r\n")
			return
		else
			for i=1,4 do
				local temp = string.gsub(code,string.sub(code,i,i),"")
				if string.len(temp) ~= 3 then
					print("Please input 4 different number!\r\n")
					return
				end
			end

			local rightnum = 0
			local rightpos = 0
			for i=1,4 do
				if string.find(codeString,string.sub(code,i,i)) then
					rightnum = rightnum+1
				end
				if string.sub(codeString,i,i) == string.sub(code,i,i) then
					rightpos = rightpos+1
				end
			end
			local result = string.format("%dA%dB",rightnum,rightpos);
			if result == "4A4B" then
				local count = _SESSION['guessgame_count'] or "1"
				if count <= 3 then
					print("You are god!!! just "..tostring(count).." tries!!!")
				elseif count <= 7 then
					print("Good guess! You got it after just "..tostring(count).." tries!")
				else
					print("Congratulations! You got it after "..tostring(count).." tries.")
				end
				_SESSION['guessgame_code'] = nil
				_SESSION['guessgame_count'] = nil
				SessionModule.save(_SESSION_ID)
			else
				print(result)
				if _SESSION['guessgame_count'] == nil then
					_SESSION['guessgame_count'] = 1
				else
					_SESSION['guessgame_count'] = _SESSION['guessgame_count']+1
				end
				SessionModule.save(_SESSION_ID)
			end
		end
	end
end