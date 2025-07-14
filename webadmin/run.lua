package.path = package.path..";"..c_GetAppPath().."/lua/?.lua"
_COOKIE = {}
_SESSION = {}
_POST = {}
_GET = {}
_SERVER = {}
_SETCOOKIE = ""
_CONTENTTYPE = "text/html"
_SESSION_ID = nil


local function runpage()
	require("SessionModuleAdmin")
	require("cgiadmin")
	require("ServerInterface")
	json = require("json")

	init_all()
	incfiles = {}
	include(filetorun)
	incfiles = nil

	package.loaded["SessionModuleAdmin"] = nil
	package.loaded["cgiadmin"] = nil
	package.loaded["ServerInterface"] = nil
	package.loaded["json"] = nil
	setmetatable(_COOKIE,nil)
	setmetatable(_SESSION,nil)
end

local status,err = pcall(runpage)
if not status then
	if string.sub(err,-14) ~= "exit function!" then
		print(string.format("<b>some internal error in %s!</b>",err))
	end

	package.loaded["SessionModuleAdmin"] = nil
	package.loaded["cgiadmin"] = nil
	package.loaded["ServerInterface"] = nil
	package.loaded["json"] = nil
	setmetatable(_COOKIE,nil)
	setmetatable(_SESSION,nil)
end