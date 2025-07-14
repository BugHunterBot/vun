local outfunc = "echo"

local function out (s, i, f)
	if s == nil or s == "" then
		return ""
	end
	s = string.sub(s, i, f or -1)
	if s == "" then return s end
	s = string.gsub(s, "([\\\n\'])", "\\%1")
	s = string.gsub(s, "\r", "\\r")
	return string.format(" %s('%s'); ", outfunc, s)
end

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


function gotoURL(url)
  print("<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>")
  print("<meta http-equiv='Developer' content='www.wftpserver.com'>")
  print("<script>top.location='"..url.."';</script>")
end


local function translate (s)
	if s == nil or s == "" then
		return ""
	end
	s = string.gsub(s, "<LuaCode([^\>\r\n]*)>(.-)</LuaCode>", "<??lua %2 ??>")
	s = string.gsub(s, "<%%(.-)%%>", "<??lua %1 ??>")
	local res = {}
	local start = 1
	while true do
		local ip, fp, target, exp, code = string.find(s, "<%?%?(%w*)[ \t]*(=?)(.-)%?%?>", start)
		if not ip then break end
		table.insert(res, out(s, start, ip-1))
		if target ~= "" and target ~= "lua" then
			table.insert(res, out(s, ip, fp))
		else
			if exp == "=" then
				table.insert(res, string.format(" %s(%s);", outfunc, code))
			else
				table.insert(res, string.format(" %s ", code))
			end
		end
		start = fp + 1
	end
	table.insert(res, out(s, start))
	return table.concat(res)
end


local function compile (src, chunkname)
	local cacheid = md5(src)
	local cid, err = _CACHE_ID[chunkname]
	if cid and cid == cacheid then 
		return _CACHE_CONTENT[chunkname]
	end
	_CACHE_CONTENT[chunkname] = loadstring(translate(src),chunkname)
	_CACHE_ID[chunkname] = cacheid
	return _CACHE_CONTENT[chunkname]
end


function include (filename, env)
	if incfiles[filename] == nil then
		incfiles[filename] = true;
		path = c_GetAppPath()
		path = path .. "/webclient/"..filename
		local errstr = string.format("<b>The page '%s' does not exist!</b>",filename)
		local fh,_ = io.open (path)
		if not fh then 
			echo_out = echo_out..errstr
			return
		end
		local src = fh:read("*a")
		fh:close()
		local prog = compile(src, path)

		local _env
		if env then
			_env = getfenv (prog)
			setfenv (prog, env)
		end

		local status,err = pcall(prog)
		if not status then
			if type(err) == "string" and not string.find(err,"exit function!")  then
				local strError = string.gsub(err, "%[(.*)%]", "'/webclient"..filename.."'")
				print(string.format("Error occurs: %s", strError))
			end
			return
		end
	end
end


function specialhtml_encode(src)
	src=src.gsub(src,">", "&gt;")
	src=src.gsub(src,"<", "&lt;")
	src=src.gsub(src,"\"", "&quot;")
	src=src.gsub(src,"\'", "&#39;")
	src=src.gsub(src,"\\", "&#92;")
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



function init_get()
	local MatchedReferer = true
	
	if _SESSION_ID ~= nil then
		local Referer = string.match(strHead,"[rR]eferer:%s?%s([^\r\n]*)")
		if Referer ~= nil and Referer ~= "" then
			local Host = string.match(strHead,"[hH]ost:%s?%s([^\r\n]*)")
			if Host ~= nil and Host ~= "" then
				Host = "//"..Host.."/"
				if string.sub(Referer,6,string.len(Host)+5) == Host or string.sub(Referer,7,string.len(Host)+6) == Host then
					MatchedReferer = true
				else
					local filename = string.gsub(filetorun, "/", "")
					if filename ~= "downloadfolder.html" and filename ~= "uploadlink.html" and filename ~= "downloadpass.html" then
						MatchedReferer = false
						exit()
					end
				end
			end
		else
			local filename = string.gsub(filetorun, "/", "")
			local strCookie = string.match(strHead,"[cC]ookie:%s?(%s[^\r\n]*)")
			if filename ~= "index.html" and filename ~= "main.html" and filename ~= "main_m.html" and filename ~= "login.html" and filename ~= "login_m.html" and filename ~= "loginok.html" and filename ~= "loginok_m.html" and filename ~= "uploadlink.html" and filename ~= "downloadpass.html" and filename ~= "downloadfolder.html" then
				if string.len(strCookie) ~= 69 then
					MatchedReferer = false
					exit()
				end
			end
		end
	end

	string.gsub (urlparam, "([^&=]+)=([^&=]*)&?",
	function (key, val)
		if MatchedReferer == true then
			rawset(_GET,unescape(key),unescape(val))
		end
	end
	)
end

function init_post()
	local MatchedReferer = true
	
	if _SESSION_ID ~= nil then
		local Referer = string.match(strHead,"[rR]eferer:%s?%s([^\r\n]*)")
		if Referer ~= nil and Referer ~= "" then
			local Host = string.match(strHead,"[hH]ost:%s?%s([^\r\n]*)")
			if Host ~= nil and Host ~= "" then
				Host = "//"..Host.."/"
				if string.sub(Referer,6,string.len(Host)+5) == Host or string.sub(Referer,7,string.len(Host)+6) == Host then
					MatchedReferer = true
				else
					local filename = string.gsub(filetorun, "/", "")
					if filename ~= "downloadfolder.html" and filename ~= "uploadlink.html" and filename ~= "downloadpass.html" then
						MatchedReferer = false
						exit()
					end
				end
			end
		else
			local filename = string.gsub(filetorun, "/", "")
			local strCookie = string.match(strHead,"[cC]ookie:%s?(%s[^\r\n]*)")
			if filename ~= "index.html" and filename ~= "main.html" and filename ~= "main_m.html" and filename ~= "login.html" and filename ~= "loginok.html" and filename ~= "uploadlink.html" and filename ~= "downloadpass.html" and filename ~= "downloadfolder.html" then
				if string.len(strCookie) ~= 69 then
					MatchedReferer = false
					exit()
				end
			end
		end
	end

	if string.find(strHead,"[cC]ontent%-[tT]ype:%s?multipart/form%-data;%s?boundary=") then
		string.gsub (strContent, "[cC]ontent%-[dD]isposition:%s?form%-data;%s?name=\"([^\"\r\n]*)\"\r\n\r\n([^\r\n]*)\r\n",
		function (key, val)
			if MatchedReferer == true then
				rawset(_POST,unescape(key),unescape(val))
			end
		end
		)
	else
		string.gsub (strContent, "([^&=\r\n]+)=([^&=\r\n]*)&?",
		function (key, val)
			if MatchedReferer == true then
				rawset(_POST,unescape(key),unescape(val))
			end
		end
		)
	end
end

function init_session()
	if _COOKIE["UID"] ~= nil then
		_SESSION_ID = _COOKIE["UID"]
		SessionModule.load(_SESSION_ID)
	end
end


function init_cookie()
	local cookiestr = string.match(strHead,"[cC]ookie:%s?(%s[^\r\n]*)")
	if cookiestr == nil or cookiestr == "" then return end
	string.gsub (cookiestr, "([^%s;=]+)=([^;=]*)[;%s]?",
	function (key, val)
		rawset(_COOKIE,unescape(key),unescape(val))
	end
	)
end

function setcookie(name,value,expire_secs)
	if name == "UID" then return end
	local expiretime = os.date("!%A, %d-%b-%Y %H:%M:%S GMT", expire_secs)
	_SETCOOKIE = _SETCOOKIE.."Set-Cookie: "..name.."="..value.."; expires="..expiretime.."\r\n"
	rawset(_COOKIE,name,value)
end

function getcookie(name)
	if name == "UID" then return end
	return _COOKIE[name]
end

function deletecookie(name)
	setcookie(name,"",os.time()-10000000)
end

function deleteallcookies()
	for name,_ in pairs(_COOKIE) do
		deletecookie(name)
	end
end

local cookie_metatable = 
{
	__newindex = function(t,k,v)
		setcookie(k,v,os.time()+3600000)
	end
}
setmetatable(_COOKIE,cookie_metatable)


session_metatable = 
{
	__newindex = function(t,k,v)
		if type(v) ~= "table" then
			if k ~= nil then
				k = string.gsub(k,"'","")
				k = string.gsub(k,"\"","")
			end
			if v ~= nil then
				--v = string.gsub(v,"%[","")
				--v = string.gsub(v,"%]","")
			end
			rawset(_SESSION,k,v)
			SessionModule.save(_SESSION_ID)
		end
	end
}
--setmetatable(_SESSION,session_metatable)


function init_all()
	init_cookie()
	init_session()
	init_get()
	init_post()
end

function page_loadtime()
	local nowtime = os.clock()
	local timeval = string.format("%0.2f",nowtime-_STARTCLOCK)
	return timeval
end

function setContentType(typestr)
	_CONTENTTYPE = typestr
end

function exit()
	error("exit function!")
end

function register_plugin(tab)

	if tab.plugin_enabled ~= nil and tab.plugin_enabled == false then
		return false
	end

	local bExist = false

	for _,val in pairs(_SERVER) do
		if val.extbutton_name ~= nil and val.extbutton_name == tab.extbutton_name then
			bExist = true
			break
		end
	end

	if bExist == false then
		table.insert(_SERVER,tab)
		return true
	end

	return false
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
