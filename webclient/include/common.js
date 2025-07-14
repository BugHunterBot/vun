var isIE,isOpera,isFirefox,isChrome,isNetscape,isSafari;
isIE = navigator.userAgent.indexOf('MSIE')==-1? 0:1;
isOpera = navigator.userAgent.indexOf('Opera')==-1? 0:1;
isFirefox = navigator.userAgent.indexOf('Firefox')==-1? 0:1;
isChrome = navigator.userAgent.indexOf('Chrome')==-1? 0:1;
isNetscape = navigator.userAgent.indexOf('Netscape')==-1? 0:1;
isSafari = navigator.userAgent.indexOf('Safari')==-1? 0:1;
isMacOS = navigator.userAgent.indexOf('Macintosh')==-1? 0:1;
isIphone = navigator.userAgent.toLowerCase().indexOf('iphone')==-1? 0:1;
if(isIphone == 0)
	isIphone = navigator.userAgent.toLowerCase().indexOf('ipod')==-1? 0:1;
if(isIphone == 0)
	isIphone = navigator.userAgent.toLowerCase().indexOf('ipad')==-1? 0:1;
isAndroid = navigator.userAgent.toLowerCase().indexOf('android')==-1? 0:1;
isAndroid1 = navigator.userAgent.toLowerCase().indexOf('android 1')==-1? 0:1;
isAndroid2 = navigator.userAgent.toLowerCase().indexOf('android 2')==-1? 0:1;
isWindowsPhone = navigator.userAgent.toLowerCase().indexOf('windows phone')==-1? 0:1;
isARM = navigator.userAgent.indexOf('ARM;')==-1? 0:1;
isPad = navigator.userAgent.toLowerCase().indexOf('ipad')==-1? 0:1;

var extIcons = new Object();
extIcons = {"avi":"video","mkv":"video","bmp":"image","wps":"word","doc":"word","docx":"word","dot":"word","dotx":"word","doct":"word","exe":"exe","gif":"image","htm":"html","html":"html","jpg":"image","jpeg":"image","png":"image",
	"tiff":"image","raw":"image","log":"txt","mov":"video","mp3":"music","m4a":"video","ogg":"music","pdf":"pdf","ppt":"ppt","pptx":"ppt","rar":"zip","7z":"zip","txt":"txt","wma":"music","wmv":"video","xls":"excel","xlsx":"excel",
	"xlt":"excel","xltx":"excel","csv":"excel","rtf":"word","ai":"ai","zip":"zip","bat":"exe","cab":"exe","dll":"exe","mpg":"video","mpeg":"video","mp4":"video","wav":"music","psd":"psd","iso":"iso","bt":"bt","flv":"flash","cad":"cad",
	"cpp":"code","c":"code","h":"code","hpp":"code","lua":"code","sh":"code","java":"code","xml":"code","js":"code","css":"code","php":"code","jsp":"code","asp":"code","pl":"code","py":"code","sql":"code","vb":"code","rb":"code",
	"go":"code","pas":"code","json":"code","cs":"code","resx":"code","cxx":"code","pm":"code","vbs":"code"};

var lastsortcol = -1;
var sortArrow = false;
var lastArrow = null;
var lastdragobj = null;
var selectTimer = null;
var cancelTimerCallback = null;
var __drag = false;
var __zIndex = 100;
var __zOwnIndex = 1000;

var thumbimage_req = 0;
var thumbimage_rsp = 0;
var imageThumb = new Array();
var imageThumbID = new Array();
var thumbimage_id = 0;
var thumberror = false;

var hitcount = 0;
var old_hitkey = "";
var existed = false; 
var lasthint = 0;
var zoomval = 0;
var nRotateAngle = 0;


var objevent = new Function('e','if (!e) e = top.window.event;return e');

function $(obj)
{
	return document.getElementById(obj);
}

function ltrim(s){ 
	return s.replace( /^(\s*|　*)/, ""); 
} 

function rtrim(s){ 
	return s.replace( /(\s*|　*)$/, ""); 
} 

function trim(s){ 
	return ltrim(rtrim(s));
}

function getEvent()
{
  if(isIE || isOpera || isSafari)
  {
    return window.event;
  }

  func = getEvent.caller;
  while(func != null)
  {
    var arg0 = func.arguments[0];
    if(arg0)
    {
      if((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation))
      {
         return arg0;
      }
    }
    func = func.caller;
  }
  return null;
}

function write(obj, text)
{
  $(obj).innerHTML += text;
}

function clear(obj)
{
  $(obj).innerHTML = "";
}

function RemoveRow(table)
{
    var iRows = $(table).rows.length;
	for(var i=0;i<iRows;i++) 
    {
        $(table).deleteRow(i);
        iRows = iRows - 1;
        i = i - 1;
    } 
}

function formatTime(time) {
    seconds = parseInt(time % 60);
    minutes = parseInt(time / 60);

	if(minutes <= 0)
		return seconds+"s";
	else
		return minutes+"m"+seconds+"s";
}

function round(number, places) 
{
	if (!places) {
		var shift = 1;
	} else {
		var shift = Math.pow(10, places);
	}
	return Math.round(number * shift) / shift;
}

function fileSize(bytes)
{
	if(Math.round(bytes/1024) < 1)
		return bytes+" Bytes";
	else if(Math.round(bytes/(1024*1024)) < 1)
		return round(bytes/1024, 1)+" KB";
	else if(Math.round(bytes/(1024*1024*1024)) < 1)
		return round(bytes/(1024*1024), 1)+" MB";
	else
		return round(bytes/(1024*1024*1024), 1)+" GB";
}

function getExtention(filename)
{
	var tmpname = filename;
	if(tmpname.lastIndexOf(".") != -1)
		return htmlencode(tmpname.substr(tmpname.lastIndexOf(".")+1).toLowerCase());
	else
		return "default";
}

function urlEncode(src)
{
	return encodeURIComponent(src).replace(/\'/g,"%27");
}

function urlEncodeSpecial(src)
{
	return encodeURIComponent(src).replace(/\'/g,"%27").replace(/\%/g,"\$");
}

function htmldecode(strSrc)
{
	strSrc=strSrc.replace(/&gt;/ig, ">"); 
 	strSrc=strSrc.replace(/&lt;/ig, "<"); 
	strSrc=strSrc.replace(/&quot;/ig, "\"");
	strSrc=strSrc.replace(/&#39;/ig, "\'");
	strSrc=strSrc.replace(/&#92;/ig, "\\");
	strSrc=strSrc.replace(/&amp;/ig, "&");
	return strSrc;
}

function htmlencode(strSrc)
{
	strSrc=strSrc.replace(/&/ig, "&amp;"); 
	strSrc=strSrc.replace(/>/ig, "&gt;"); 
 	strSrc=strSrc.replace(/</ig, "&lt;"); 
	strSrc=strSrc.replace(/\"/ig, "&quot;");
	strSrc=strSrc.replace(/\'/ig, "&#39;");
	strSrc=strSrc.replace(/\\/ig, "&#92;");
	return strSrc;
}

function setCookie(name,value,date) 
{
	if(date == null || date == "")
		date = new Date((new Date()).getTime() + 3600*24*1000);
	document.cookie = name + "=" + escape(value) + "; expires=" + date.toGMTString() + "; path=/;";
}

function getCookie(name) 
{
	var search; 
	search = name + "=" 
	offset = document.cookie.indexOf(search) 
	if (offset != -1) 
	{ 
		offset += search.length ; 
		end = document.cookie.indexOf(";", offset) ; 
		if (end == -1) 
		end = document.cookie.length; 
		return unescape(document.cookie.substring(offset, end)); 
	} 
	else 
	{
		return ""; 
	}
} 

function deleteCookie(name) 
{ 
	var expdate = new Date(); 
	expdate.setTime(expdate.getTime() - (86400*1000)); 
	setCookie(name, "", expdate); 
}


function convert(sValue, sDataType) 
{   
	switch(sDataType) 
	{   
		 case "int":   
			 return parseInt(sValue);   
		 case "float":   
			 return parseFloat(sValue);   
		 case "date":   
			 return new Date(Date.parse(sValue));   
		 default:   
			 return sValue;   
	}   
}   

function generateCompareTRs(iCol, sDataType) 
{   
 return   function compareTRs(oTR1, oTR2) 
		  {   
			 if(sDataType == "size")
			 {
				 var vValue1 = oTR1.cells[iCol].innerHTML;
				 var vValue2 = oTR2.cells[iCol].innerHTML;
				 if(vValue1 == "-") vValue1 = "0";
				 if(vValue2 == "-") vValue2 = "0";
				 vValue1 = vValue1.split(" ");
				 vValue2 = vValue2.split(" ");
				 vValue1d = parseFloat(vValue1[0]);
				 vValue2d = parseFloat(vValue2[0]);
				 vValue1u = vValue1[1];
				 vValue2u = vValue2[1];
				 ratio1 = 1;
				 ratio2 = 1;
				 if(vValue1u == "KB")
					ratio1 = 1000;
				 else if(vValue1u == "MB")
					ratio1 = 1000*1000;
				 else if(vValue1u == "GB")
					ratio1 = 1000*1000*1000;	

				 if(vValue2u == "KB")
					ratio2 = 1000;
				 else if(vValue2u == "MB")
					ratio2 = 1000*1000;
				 else if(vValue2u == "GB")
					ratio2 = 1000*1000*1000;					
				
				 if (vValue1d*ratio1 > vValue2d*ratio2)
					 return -1;   
				 else if (vValue1d*ratio1 < vValue2d*ratio2) 
					 return 1;   
				 else
					 return 0; 
			 }
			 else
			 {
				 vValue1 = oTR1.cells[iCol].innerHTML;
				 vValue2 = oTR2.cells[iCol].innerHTML; 

				 if(sDataType == "filename")
				 {
					vValue1 = vValue1.substr(vValue1.lastIndexOf("> ")+2);
					vValue2 = vValue2.substr(vValue2.lastIndexOf("> ")+2);
				 }
				 else if(sDataType == "listname")
				 {
					vValue1 = oTR1.cells[iCol].getAttribute("name");
					vValue2 = oTR2.cells[iCol].getAttribute("name");
				 }
				 else
				 {
					vValue1 = convert(vValue1, sDataType);   
					vValue2 = convert(vValue2, sDataType); 
				 }
				 if (vValue1 > vValue2)
					 return -1;   
				 else if (vValue1 < vValue2)
					 return 1;   
				 else
					 return 0;  
			 }
		 };   
}   


function sortTable(obj, sTableID, iCol, sDataType) 
{
	try
	{
		var evt = getEvent();
		var element = evt.srcElement || evt.target;
		if(element.tagName == "DIV" || element.tagName == "INPUT")
			return;
	}
	catch(e){}

	var oTable = $(sTableID);   
	var oTBody = oTable.tBodies[0];   
	var colDataRows = oTBody.rows;
	var aTRs = new Array();   
	for (var i=0; i < colDataRows.length; i++)
	{
		aTRs[i] = colDataRows[i];
	}

	if (lastsortcol == iCol)
	{
		sortArrow = !sortArrow;
		aTRs.reverse();
	}
	else
	{
		sortArrow = false;
		aTRs.sort(generateCompareTRs(iCol, sDataType));
	}

	if(obj != null)
	{
		if(lastArrow != null)
			lastArrow.style.backgroundImage="";
		if(sortArrow == false)
			obj.style.backgroundImage="url('images/sortdown.gif')";
		else
			obj.style.backgroundImage="url('images/sortup.gif')";

		if(iCol == 0)
			obj.style.backgroundPosition="30px";
		else
			obj.style.backgroundPosition="10px";

		obj.style.backgroundRepeat="no-repeat";
		lastArrow = obj;
	}

	for(var j=0; j<aTRs.length; j++)
	{
		oTBody.appendChild(aTRs[j]);
		aTRs[j].cells[0].setAttribute('id',"tr_"+j);
		try{
			aTRs[j].cells[0].getElementsByTagName("input")[0].setAttribute("id", "cid_"+j);
			aTRs[j].cells[0].getElementsByTagName("input")[0].setAttribute("cid", j);
		}
		catch(e){}
	}

	lastsortcol = iCol;   
	aTRs = null;
}   


function dragStart(obj, listview_div, listhead, listtable)
{
	try
	{
		var evt = getEvent();
		obj.lastMouseX = evt.clientX; 
		obj.TDoffset = obj.parentNode.offsetWidth;
		lastdragobj = obj;

		try{
			$("blanktd").style.width = "50%";
		}catch(e){}

		if(window.addEventListener)
		{
			evt.preventDefault();
			window.addEventListener("mousemove",function(){
									try
									{
										var evt = getEvent();
										if(lastdragobj == null) return false;
										var nowwidth = lastdragobj.TDoffset + (evt.clientX - lastdragobj.lastMouseX);
										if(nowwidth > 80)
										{
											lastdragobj.parentNode.width = nowwidth;
											$(listtable).style.width = $(listhead).style.width;
											var cellindex = lastdragobj.parentNode.cellIndex;
											if(isFirefox)
											{
												for(var i=0;i<$(listtable).rows.length;i++)
													$(listtable).rows[i].cells[cellindex].width = nowwidth;
											}
											else
											{
												$(listtable).rows[0].cells[cellindex].width = nowwidth;
											}
										}
									}
									catch(e){}
								},true);
			window.addEventListener("mouseup",dragEnd,true);
		} 
		else 
		{
			lastdragobj.setCapture();
			window.event.cancelBubble = true;
			lastdragobj.attachEvent("onmousemove",function(){
									try
									{
										var evt = getEvent();
										if(lastdragobj == null) return false;
										var nowwidth = lastdragobj.TDoffset + (evt.clientX - lastdragobj.lastMouseX);
										if(nowwidth > 80)
										{
											lastdragobj.parentNode.width = nowwidth;
											$(listtable).style.width = $(listhead).style.width;
											var cellindex = lastdragobj.parentNode.cellIndex;
											if(isFirefox)
											{
												for(var i=0;i<$(listtable).rows.length;i++)
													$(listtable).rows[i].cells[cellindex].width = nowwidth;
											}
											else
											{
												$(listtable).rows[0].cells[cellindex].width = nowwidth;
											}
										}
									}
									catch(e){}
								});
			lastdragobj.attachEvent("onmouseup",dragEnd);
		}
	}
	catch(e){}
}

function dragMove()
{
	try
	{
		var evt = getEvent();
		if(lastdragobj == null) return false;
		var nowwidth = lastdragobj.TDoffset + (evt.clientX - lastdragobj.lastMouseX);
		if(nowwidth > 80)
		{
			lastdragobj.parentNode.width = nowwidth;
			$("listview_div").style.width = $("listhead").style.width;
			var cellindex = lastdragobj.parentNode.cellIndex;
			if(isFirefox)
			{
				for(var i=0;i<$("listtable").rows.length;i++)
					$("listtable").rows[i].cells[cellindex].width = nowwidth;
			}
			else
			{
				$("listtable").rows[0].cells[cellindex].width = nowwidth;
			}
		}
	}
	catch(e){}
}

function dragEnd()
{
	try
	{
		var evt = getEvent();
		if(lastdragobj == null) return false;

		try
		{
			var nowwidth = lastdragobj.TDoffset + (evt.clientX - lastdragobj.lastMouseX);
			if(nowwidth < 80) nowwidth = 80;
			var index = lastdragobj.parentNode.cellIndex;
			setCookie("cellwidth"+index, nowwidth);
		}
		catch(e)
		{
		}

		if(window.addEventListener)
		{
			window.removeEventListener('mousemove',dragMove,true); 
			window.removeEventListener('mouseup',dragEnd,true); 
		}
		else
		{
			lastdragobj.releaseCapture();
			lastdragobj.detachEvent("onmousemove",dragMove);
			lastdragobj.detachEvent("onmouseup",dragEnd);
		}

		lastdragobj.parentNode.className='listhead';
		lastdragobj = null;

		try{
			$("blanktd").style.width = "100%";
		}catch(e){}
	}
	catch(e){}
}


function showMessagebox(titleStr, contentStr, callbackFunc, width, height)
{
	__drag = false;
	boxwidth = width || 350;
	if (boxwidth < 350)
	{
		boxwidth = 350;
	}
	boxheight = height || 200;
	if (boxheight < 200)
	{
		boxheight = 200;
	}
	titleheight = 34;
	bordercolor = "#CCCCCC";
	backcolor = "#1F7FF8";

	if(top.__zIndex == null)
		top.__zIndex = 100;

	top.__zIndex++;

	var maskDiv=top.document.createElement("div");
	maskDiv.setAttribute('id','maskDiv'+top.__zIndex);
	maskDiv.style.position = "absolute";
	maskDiv.style.top = "0px";
	maskDiv.style.left = "0px";
	maskDiv.style.background = "#777";
	maskDiv.style.filter = "alpha(opacity=50)";
	maskDiv.style.opacity = "0.50";
	if(isIphone || isWindowsPhone || isAndroid || isPad)
	{
		maskDiv.style.width = "2000px";
		maskDiv.style.height = "50000px";
	}
	else
	{
		maskDiv.style.width = "120%";
		maskDiv.style.height = "3000px";
	}
	maskDiv.style.zIndex = 80;
	top.document.body.appendChild(maskDiv);
	maskDiv = null;

	var contentDiv=top.document.createElement("div")
	contentDiv.setAttribute("id","msgDiv"+top.__zIndex);
	contentDiv.style.textAlign = "center";
	contentDiv.style.background="#E6E6E6";
	contentDiv.style.border="1px solid " + bordercolor;
	contentDiv.style.position = "absolute";
	if(isIphone || isWindowsPhone || isAndroid || isPad)
	{
		contentDiv.style.left = "5px";
		contentDiv.style.top = "20px";
		top.window.scrollTo(0,0);
	}
	else
	{
		var templeft = (getBrowerWidth()-boxwidth)/2;
		if(templeft < 0) templeft = 0;
		contentDiv.style.left = templeft +"px";
		var temptop = (getBrowerHeight()-boxheight)/2 - 30;
		if(temptop < 0) temptop = 0;
		contentDiv.style.top = temptop +"px";

		if(isOpera)
			top.window.scrollTo(0,0);
	}
	contentDiv.style.font= "12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
	contentDiv.style.width = boxwidth + "px";
	contentDiv.style.height = (boxheight+titleheight+6) + "px";
	contentDiv.style.lineHeight ="25px";
	contentDiv.style.zIndex = top.__zIndex;
	top.document.body.appendChild(contentDiv);
	contentDiv = null;

	var title=top.document.createElement("h4");
	title.setAttribute("id","msgTitle"+top.__zIndex);
	title.style.textAlign = "right";
	title.style.margin="0px";
	title.style.padding="3px";
	title.style.background = backcolor;
	//title.style.backgroundImage = "url(images/navbg.gif)";
	title.style.border="0px solid " + bordercolor;
	title.style.color="#FFF";
	title.style.cursor="move";
	title.style.fontSize="10pt";
	title.style.height = titleheight + "px";
	title.innerHTML="<span style='float:left;font-size:10pt;font-weight:bold;margin:2px;'>"+titleStr+"</span><img src='images/close.png' title='close' style='cursor:default;margin:5px;' id='closeButton"+top.__zIndex+"' >";
	top.document.getElementById("msgDiv"+top.__zIndex).appendChild(title);
	title = null;

	var content=top.document.createElement("div");
	content.setAttribute("id","msgContent"+top.__zIndex);
	content.style.marginTop="0px";
	content.style.textAlign="center";
	content.style.height = boxheight + "px";
	content.innerHTML = contentStr;
	top.document.getElementById("msgDiv"+top.__zIndex).appendChild(content);

	if(isIE)
	{
		var buttonObj = content.getElementsByTagName("button");
		for (var i=0; i<buttonObj.length; i++) {
			if(buttonObj[i].className != "mybutton")
			{
				buttonObj[i].onmouseover=function(){
					this.className = "buttonhover";
				}
				buttonObj[i].onmouseout=function(){
					this.className = this.className.replace(/\bbuttonhover\b/,'');
				}
			}
		}
	}
	content = null;
	
	
	if(isChrome || isSafari)
	{
		top.document.getElementById("closeButton"+top.__zIndex).onclick=function()
		{
			return closewindow();
		}
	}
	else
	{
		top.document.getElementById("msgTitle"+top.__zIndex).onclick=function()
		{
			var evt = top.getEvent();
			var element = evt.srcElement || evt.target;
			if(element.tagName == "IMG")
			{
				return closewindow();
			}
		}
	}


	top.document.getElementById("msgTitle"+top.__zIndex).onmousedown=function(e)
	{
		var msgdiv_obj = top.document.getElementById("msgDiv"+top.__zIndex);
		if(msgdiv_obj != null)
		{
			var x,y;
			if(!__drag)
				__drag=true;
			else
				__drag=false;
			with(msgdiv_obj)
			{
				style.position = "absolute";
				var templeft = offsetLeft;
				var temptop = offsetTop;
				x = objevent(e).screenX;
				y = objevent(e).screenY;
			}

			if(window.addEventListener)
				e.preventDefault();
			else
				msgdiv_obj.setCapture();

			top.document.onmousemove=function(e)
			{
				try
				{
					var element = objevent(e).srcElement || objevent(e).target;
					if((element.tagName == "INPUT" || element.tagName == "SELECT" || element.tagName == "TEXTAREA"))
					{
						return true;
					}
				}
				catch(e)
				{
					if(!__drag) return false;
				}
				if(!__drag) return false;
				with(msgdiv_obj)
				{
					var left = templeft+objevent(e).screenX-x;
					var top = temptop+objevent(e).screenY-y;
					if(left < 0) left = 0;
					if(top < 0) top = 0;
					style.left = left + "px";
					style.top = top + "px";
				}
			}
			top.document.onmouseup=function(e)
			{
				if(!window.addEventListener && __drag == true)
				{
					msgdiv_obj.releaseCapture();
				}
				__drag=false;
			}

		}
	}

	if(top.callback == null) top.callback = new Array();
	top.callback[top.__zIndex] = callbackFunc;
}

function closewindow(value)
{
	try
	{
		if(typeof(top.cancelTimerCallback) == "function" && top.cancelTimerCallback != null)
		{
			top.cancelTimerCallback();
			//top.cancelTimerCallback = null;
		}
	}
	catch(e){}

	try
	{
		if(typeof(top.callback[top.__zIndex]) == "function" && top.callback[top.__zIndex] != null)
		{
			if(top.callback[top.__zIndex](value) == false)
				return false;
			top.callback[top.__zIndex] = null;
		}
	}
	catch(e){}

	try
	{
		top.document.body.removeChild(top.document.getElementById("maskDiv"+top.__zIndex));		
		top.document.body.removeChild(top.document.getElementById("msgDiv"+top.__zIndex));
	}
	catch(e){}
	top.__zIndex--;
	return false;
}


function drawSelect(input_id,select_id,callback)
{
	$(select_id).style.display = ($(select_id).style.display=="none" ? "" : "none");
	$(select_id).onmouseout = function(){
		selectTimer = setTimeout(function(){$(select_id).style.display="none";}, 1000);
	}
	$(select_id).onmouseover = function(o){
		insertOption(o,input_id,select_id,callback);
		try{window.clearTimeout(selectTimer);}catch(e){}
	}
	$(input_id).onmouseout = function(){
		selectTimer = setTimeout(function(){$(select_id).style.display="none";}, 1000);
	}
	$(input_id).onmouseover = function(o){
		try{window.clearTimeout(selectTimer);}catch(e){}
	}
}

function insertOption(o,input_id,select_id,callback)
{
	var o = o || window.event;
	var obj=o.target || o.srcElement;
	if (obj.tagName=='LI')
	{
		obj.className = "optionSelected";
		obj.onclick = function()
		{
			$(input_id).value=obj.innerHTML;
			$(select_id).style.display="none";
			callback($(input_id).value);
		}
		obj.onmouseout=function(){
			obj.className="none";
		}
	}
}


var ajaxlock = false;
var xmlhttp,page,post;
xmlhttp = isIE ? new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();

function ajaxRequest(pagename,poststring,method)
{
	if(ajaxlock == false)
	{	
		delete xmlhttp;
		xmlhttp = isIE ? new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();

		ajaxlock = true;
		page = pagename;
		post = poststring;
		if(page != "")
		{
			if(page == "zip" || page == "unzip")
				$("waitingdiv2").style.display = "";
			else
				$("waitingdiv").style.display = "";
		}

		if(method == "GET")
			xmlhttp.open("GET",page+".html"+post);
		else
			xmlhttp.open("POST",page+".html");

		xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xmlhttp.onreadystatechange = ajaxResponse;
		if(method != "GET")
			xmlhttp.send(post);
		else
			xmlhttp.send("");
	}
}

var KeepliveObject;
KeepliveObject = isIE ? new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();

function keeplive()
{
	if(!KeepliveObject)
	{
		KeepliveObject = isIE ? new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();
	}

	KeepliveObject.open("POST","keeplive.html?r="+Math.random());
	KeepliveObject.send("");
}


function clear_imageThumb() 
{
	imageThumb = null;
	imageThumb = new Array();
	imageThumbID = null;
	imageThumbID = new Array();
}

function makethumb_req(imgobj,filename)
{
	$(imgobj).innerHTML = "<img src='images/waiting.gif'>";
	if(thumbimage_req == 0)
	{
		thumberror = false;
		thumbimage_rsp = 0;
		makethumb(imgobj,filename);
	}
	imageThumbID.push(imgobj);
	imageThumb.push(filename);
	thumbimage_req++;
}

function makethumb(imgobj,filename)
{
	var XMLHttpRequestObject = null;
	XMLHttpRequestObject = isIE ? new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();

	var file_icon = "<img src='icons/file_image64.png'>";

	if(XMLHttpRequestObject) 
	{
		XMLHttpRequestObject.open("POST","makethumb.html");
		XMLHttpRequestObject.onreadystatechange = function()
		{
			if (XMLHttpRequestObject.readyState == 4) 
			{
				try
				{
					if(XMLHttpRequestObject.status == 200)
					{
						var imgsrc = trim(XMLHttpRequestObject.responseText);
						if(imgsrc == "error")
						{
							$(imgobj).innerHTML = file_icon;
						}
						else
						{
							if(isOpera)
							{
								dynamicGetImage(imgobj,imgsrc);
							}
							else if(isIE)
							{
								$(imgobj).innerHTML = "<img id='thumbimg"+thumbimage_rsp+"' src='"+imgsrc+"'>";
								$("thumbimg"+thumbimage_rsp).onerror = function(){
									$(imgobj).innerHTML = file_icon;
								};
							}
							else
							{
								$(imgobj).innerHTML = "<img src='"+imgsrc+"'>";
							}
						}
					}
					else
					{
						$(imgobj).innerHTML = file_icon;
					}

					delete XMLHttpRequestObject;
					XMLHttpRequestObject = null;
				}
				catch(e){
					thumberror = true;
				}

				thumbimage_rsp++;
				if(thumbimage_rsp >= thumbimage_req)
					clear_imageThumb();
				else
					makethumb(imageThumbID[thumbimage_rsp],imageThumb[thumbimage_rsp]);
			}
		}
		XMLHttpRequestObject.send("filename="+encodeURIComponent(htmldecode(filename)));
	}
}

function dynamicGetImage(imgobj,filename)
{
	var XMLHttpRequestObject = false;
	XMLHttpRequestObject = isIE ? new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();

	if(XMLHttpRequestObject) 
	{
		XMLHttpRequestObject.open("GET",filename);
		XMLHttpRequestObject.onreadystatechange = function()
		{
			if (XMLHttpRequestObject.readyState == 4) 
			{
				if(XMLHttpRequestObject.status == 200)
				{
					$(imgobj).innerHTML = "<img src='"+filename+"'>";
				}
				delete XMLHttpRequestObject;
				XMLHttpRequestObject = null;
			}
		}
		XMLHttpRequestObject.send("");
	}
}

function beforeWindowClose()
{
	var evt = getEvent();
	evt.returnValue = "Are you sure to close window?";
}


function change_viewmode(thumbmode)
{
	if(lastObj != null)
	{
		if(lastObj.className == "listtr04")
			lastObj.className = "listtr03";
		else
			lastObj.className = "listtr01";
		lastObj = null;
	}
	viewmode = thumbmode;
	if(viewmode == true)
	{
		//if(thumb_num == 0) 
		//{
			$("waitingdiv").style.display = "";
			showthumb();
		//}
		setCookie("viewmode",1);
		$("thumbmode").style.display = "";
		$("listmode").style.display = "none";
		$("thumbview_div").style.display = "";
		$("listview_div").style.display = "none";
		//$("listmode").focus();
	}
	else
	{
		setCookie("viewmode",0);
		$("thumbmode").style.display = "none";
		$("listmode").style.display = "";
		$("thumbview_div").style.display = "none";
		$("listview_div").style.display = "";
		//$("thumbmode").focus();
	}


	var box_checked = false;
	var checkboxs = document.getElementsByTagName("input");
	for(var i=0;i<checkboxs.length;i++)
	{
		if(checkboxs[i].type == "checkbox")
		{
			try
			{
				if(viewmode == false)
				{
					if(checkboxs[i].checked == true && checkboxs[i].getAttribute("flag") == "list")
					{
						box_checked = true;
						break;
					}
				}
				else
				{
					if(checkboxs[i].checked == true && checkboxs[i].getAttribute("flag") == "thumb")
					{
						box_checked = true;
						break;
					}
				}
			}
			catch(e){}
		}
	}
	if(box_checked == false)
	{
		$("operation_buttons").style.display = "none";
	}
	else
	{
		$("operation_buttons").style.display = "";
	}

	selectedRow=null;

}


function close_picture()
{
	$("picturediv").style.width = "100%";
	$("picturediv").style.height = "100%";
	$("picturediv").style.display = "none";
	$("picturediv2").style.display = "none";
	$("imgloading").style.visibility = "hidden";
	$("picture").src = "images/empty.gif";
}

function show_picture(source)
{
	window.scrollTo(0,0);
	now_image = source;
	$("picturediv").style.width = "300%";
	$("picturediv").style.height = "300%";
	$("picturediv").style.display = "";
	$("picturediv2").style.display = "";
	$("imgloading").style.visibility = "";
	zoomval = 100;
	nRotateAngle = 0;
	$("picture").style.transform = "rotate(" + nRotateAngle + "deg)";

	//$("picture_title").innerHTML = htmlencode(decodeURIComponent(source.replace(/\%27/g,"'").replace(/\$/g,"\%")));
	$("picture").title = htmlencode(decodeURIComponent(source.replace(/\%27/g,"'").replace(/\$/g,"\%")));
	$("picture").src = "/?download&filename="+now_image+"&start_time="+start_time+"&nowdir="+urlEncodeSpecial(now_dir);
	$("picture").onload = function()
	{
		resize_picture(false);
	};

	$("pic_prev").onmouseover = $("pic_next").onmouseover = $("picture").onmouseover = function(){
		$("pic_prev").style.display = "";
		$("pic_next").style.display = "";
	};
	$("pic_prev").onmouseout = $("pic_next").onmouseout = $("picture").onmouseout = function(){
		$("pic_prev").style.display = "none";
		$("pic_next").style.display = "none";
	};

	$("lable1").innerHTML = "1 of " + imageGroup.length;
	for(i = 0; i < imageGroup.length; i++)
	{
		if(imageGroup[i] == now_image)
		{
			$("lable1").innerHTML = (i+1) + " of " + imageGroup.length;
			break;
		}
	}

	if(!isIE && !isOpera)
		$("picturediv2").style.height = "100%";
}

function pre_picture()
{
	for(i = 0; i < imageGroup.length; i++)
	{
		if(imageGroup[i] == now_image)
		{
			var preindex = i-1;
			if(preindex < 0) preindex = imageGroup.length-1;
			now_image = imageGroup[preindex];
			show_picture(now_image);
			return;
		}
	}
}

function next_picture()
{
	for(i = 0; i < imageGroup.length; i++)
	{
		if(imageGroup[i] == now_image)
		{
			var nextindex = i+1;
			if(nextindex >= imageGroup.length) nextindex = 0;
			now_image = imageGroup[nextindex];
			show_picture(now_image);
			return;
		}
	}
}

function zoom(val) 
{
	var nVal = (100 / zoomval)*val
	var zoom = 100 + nVal;
	oldwidth = $("picture").width;
	oldheight = $("picture").height;

	if((zoomval + val) >= 200)
	{
		return false;
	}

	$("picture").width = parseInt(oldwidth*parseFloat(zoom/100));
	$("picture").height = parseInt(oldheight*parseFloat(zoom/100));
	if($("picture").width <= 200)
	{
		$("picture").width = 200;
		$("picture").height = (oldheight*200)/oldwidth;   
	}
	//if($("picture").width >= document.body.clientWidth)
	//{     
	//	$("picture").width = document.body.clientWidth;   
	//	$("picture").height = (oldheight*document.body.clientWidth)/oldwidth;   
	//}

	$("picturediv3").style.width = $("picture").width + "px";
	zoomval = 100*$("picture").width / (oldwidth / (zoomval/100));

	$("lable2").innerHTML = round(zoomval, 0) + "%";
} 

function resize_picture(fullsize)
{
	$("imgloading").style.visibility = "hidden";

	maxwidth = document.body.clientWidth;
	maxheight = document.body.clientHeight-80;

	if(isIphone || isWindowsPhone || isAndroid)
	{
		maxwidth = 360;
		maxheight = 480;
	}

	var imgwidth = $("picture").width;
	var imgheight = $("picture").height;

	var image = new Image();
	var isIE6 = isIE && !window.XMLHttpRequest;
	if(isIE6)
	{
		image.src = $("picture").src + "&IE6=1";
	}
	else
	{
		image.src = $("picture").src;
	}

	image.onload = function() {
		imgwidth = image.width;
		imgheight = image.height;

		if(fullsize == true)
		{
			$("picture").width=imgwidth;
			$("picture").height=imgheight;
		}
		else
		{
			if(imgwidth > 0 && imgheight > 0)
			{
				if(imgwidth/imgheight >= maxwidth/maxheight)
				{   
					if(imgwidth > maxwidth)
					{     
						$("picture").width=maxwidth;   
						$("picture").height=(imgheight*maxwidth)/imgwidth;   
					}else
					{   
						$("picture").width=imgwidth;     
						$("picture").height=imgheight;   
					}   
				}   
				else
				{   
					if(imgheight > maxheight)
					{     
						$("picture").height=maxheight;   
						$("picture").width=(imgwidth*maxheight)/imgheight;     
					}
					else
					{   
						$("picture").width=imgwidth;     
						$("picture").height=imgheight;   
					} 
				}   
			}
		}

		$("picturediv3").style.width = $("picture").width + "px";

		zoomval = 100*$("picture").width / imgwidth;
		$("lable2").innerHTML = round(zoomval, 0) + "%";

		image = null;

	}
}

function rotate_picture() 
{
	nRotateAngle = (nRotateAngle + 90) % 360;
	$("picture").style.transform = "rotate(" + nRotateAngle + "deg)";
}

function down_picture()
{
	window.open("/?download&filename="+now_image+"&r="+Math.random(),"_self");
}

function dragHead(obj)
{
	dragStart(obj,'listview_div','listhead','listtable');
}



var V_Key = {8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"Cap",27:"Esc",32:"Space",33:"Page up",34:"Page down",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Impr ecran",45:"Insert",46:"Delete",91:"Windows",92:"Menu Windows",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12"};

function myKeyDown(e)
{
	if(!e){	// if IE
		e=event;
	}

	var use = false;
	var opened = false;

	if (V_Key[e.keyCode])
		letter=V_Key[e.keyCode];
	else
		letter=String.fromCharCode(e.keyCode);	
	var low_letter= letter.toLowerCase();
	

	if((top.__zIndex != null && top.__zIndex > 100) || $("picturediv").style.display == "" || $("uploadingDiv_mask").style.display == "" || $("menu_div").style.visibility == "" || $("menu_div").style.visibility == "visible" || $("menu_div2").style.visibility == "" || $("menu_div2").style.visibility == "visible")
	{
		opened = true;

		if(uploading == true || letter == "F5")
		{
			if(isIE)
				e.keyCode=0;
			return false;
		}

		var element = e.srcElement || e.target;
		if(element.tagName != "INPUT" && element.tagName != "TEXTAREA" && element.tagName != "SELECT" && element.tagName != "OPTION")
		{
			if(letter == "Backspace")
			{
				if(isIE)
					e.keyCode=0;
				return false;
			}
		}
	}

	if(letter == "Tab")
	{
		var element = e.srcElement || e.target;

		if(opened == false)
		{
			if(element.tabIndex == 10 || element.tabIndex == 0)
			{
				$("first_button").focus();
				return false;
			}
		}
		else
		{
			if(element.tabIndex == 30 || (element.tabIndex >= 0 && element.tabIndex <= 10))
			{
				$("btn_submit").focus();
				return false;
			}
		}
	}

	if(opened == false)
	{
		if(letter == "Up" || letter == "Left")
		{
			if(document.activeElement.tabIndex > 0)
				document.activeElement.blur();

			use=true;
			if(selectedRow == null)
			{
				next_id = 0;
			}
			else
			{
				f_id = selectedRow.cells[0].getAttribute("id");
				if(viewmode == true && letter == "Up" && total_num > row_filenum)
					next_id = parseInt(f_id.substr(f_id.lastIndexOf("_")+1))-row_filenum;
				else
					next_id = parseInt(f_id.substr(f_id.lastIndexOf("_")+1))-1;

				if(next_id < 0) next_id = total_num-1;
			}

			if(viewmode == true)
			{
				$("td_"+next_id).scrollIntoView(false);
				if(lastObj == null || total_num > 1)
				{
					$("td_"+next_id).onclick();
					$("td_"+next_id).focus();
				}
			}
			else
			{
				$("tr_"+next_id).parentNode.scrollIntoView(false);
				if(lastObj == null || total_num > 1)
				{
					$("tr_"+next_id).parentNode.onclick();
					$("tr_"+next_id).parentNode.focus();
				}
			}
		}
		else if(letter == "Down" || letter == "Right")
		{
			if(document.activeElement.tabIndex > 0)
				document.activeElement.blur();

			use=true;
			if(selectedRow == null)
			{
				next_id = 0;
			}
			else
			{
				f_id = selectedRow.cells[0].getAttribute("id");
				if(viewmode == true && letter == "Down" && total_num > row_filenum)
					next_id = parseInt(f_id.substr(f_id.lastIndexOf("_")+1))+row_filenum;
				else
					next_id = parseInt(f_id.substr(f_id.lastIndexOf("_")+1))+1;

				if(next_id >= total_num) next_id = 0;
			}

			if(viewmode == true)
			{
				$("td_"+next_id).scrollIntoView(false);
				if(lastObj == null || total_num > 1)
				{
					$("td_"+next_id).onclick();
					$("td_"+next_id).focus();
				}
			}
			else
			{
				$("tr_"+next_id).parentNode.scrollIntoView(false);
				if(lastObj == null || total_num > 1)
				{
					$("tr_"+next_id).parentNode.onclick();
					$("tr_"+next_id).parentNode.focus();
				}
			}
		}
		else if(letter == "Enter")
		{
			use=true;
			if(selectedRow == null)
				return false;
			f_id = selectedRow.cells[0].getAttribute("id");
			now_id = parseInt(f_id.substr(f_id.lastIndexOf("_")+1));
			if(isIE)
			{
				if(viewmode == true)
				{
					$("td_"+now_id).ondblclick();
					$("td_"+now_id).focus();
				}
				else
				{
					$("tr_"+now_id).parentNode.ondblclick();
					$("tr_"+now_id).parentNode.focus();
				}
			}
			else
			{
				if(viewmode == true)
				{
					$("td_"+now_id).onclick();
					$("td_"+now_id).focus();
				}
				else
				{
					$("tr_"+now_id).parentNode.onclick();
					$("tr_"+now_id).parentNode.focus();
				}
			}
		}
		else if(letter == "Delete")
		{
			use=true;
			deleteFile();
		}
		else if(letter == "Backspace")
		{
			use=true;
			goUp();
		}
		else if(letter == "Home")
		{
			use=true;
			goHome();
		}
		else if(letter == "F5")
		{
			use=true;
			Refresh();
		}
		else if(CtrlPressed(e) && !AltPressed(e) && !ShiftPressed(e))
		{
			switch(low_letter){
				case "a":
					use=true;
					break;
				case "d":
					use=true;
					downloadFile_ext();
					break;
				case "r":
					use=true;
					renameFile();
					break;
				case "u":
					use=true;
					checkUpload();
					break;
				case "v":
					use=true;
					pasteFile();
					break;
				case "x":
					use=true;
					cutFile();
					break;
//				case "s":
//					use=true;
//					showDownloadUrl();
//					break;
//				case "f":
//					use=true;
//					openSearch();
//					break;
//				case "l":
//					use=true;
//					if(viewmode == 1) viewmode = true;
//					if(viewmode == 0) viewmode = false;
//					change_viewmode(!viewmode);
//					break;
				default:
					break;			
			}		
		}

	}
	
	if(use){
		if(isIE)
			e.keyCode=0;
		return false;
	}

	try
	{
		if(opened == false)
		{
			var searched = false;
			var hitkey = String.fromCharCode(e.keyCode).toLowerCase(); 
			if(hitkey != old_hitkey || hitcount >= total_num)
				hitcount = 0;

			old_hitkey = hitkey;

			for(var k=hitcount;k<total_num;k++)
			{
				if(viewmode == true)
				{
					var tmpname = htmldecode($("td_"+k).getAttribute("name"));
					if(hitkey == tmpname.substr(0,1).toLowerCase() )
					{
						$("td_"+k).scrollIntoView(false);
						if(lastObj == null || total_num > 1)
						{
							if(lastObj != null && lasthint == k )
							{
							}
							else
							{
								lasthint = k;
								$("td_"+k).onclick();
								$("td_"+k).focus();
							}
						}
						searched = true;
						existed = true;
						hitcount = k+1;
						break;
					}
				}
				else
				{
					var tmpname = htmldecode($("tr_"+k).getAttribute("name"));
					if(hitkey == tmpname.substr(0,1).toLowerCase() )
					{
						$("tr_"+k).parentNode.scrollIntoView(false);
						if(lastObj == null || total_num > 1)
						{
							if(lastObj != null && lasthint == k )
							{
							}
							else
							{
								lasthint = k;
								$("tr_"+k).parentNode.onclick();
								$("tr_"+k).parentNode.focus();
							}
						}
						searched = true;
						existed = true;
						hitcount = k+1;
						break;
					}
				}	
				hitcount++;
			}

			if(searched == false && existed == true)
			{ 
				existed = false; 
				hitcount = 0; 

				if(isOpera)
					document.body.onkeypress();
				else
					document.body.onkeydown();
			}

		}
	
	}
	catch(e){}
	
	return true;
	
}

function AltPressed(e) {
	if (window.event) {
		return (window.event.altKey);
	} else {
		if(e.modifiers)
			return (e.altKey || (e.modifiers % 2));
		else
			return e.altKey;
	}
}

function CtrlPressed(e) {
	if (window.event) {
		return (window.event.ctrlKey);
	} else {
		return (e.ctrlKey || (e.modifiers==2) || (e.modifiers==3) || (e.modifiers>5));
	}
}

function ShiftPressed(e) {
	if (window.event) {
		return (window.event.shiftKey);
	} else {
		return (e.shiftKey || (e.modifiers>3));
	}
}


//avoid mouse selection
if(!isFirefox)
{
	if(window.addEventListener)
	{
		document.onmousedown = function(){
			var evt = getEvent();
			var element = evt.srcElement || evt.target;
			if((element.tagName == "INPUT" || element.tagName == "SELECT" || element.tagName == "OPTION" || element.tagName == "TEXTAREA" || element.tagName == "OBJECT" || element.tagName == "EMBED" || element.tagName == "APPLET"))
				return true;
			else
				return false;
		}
	}
	else
	{
		document.onselectstart = function(){
			var evt = getEvent();
			var element = evt.srcElement || evt.target;
			if((element.tagName == "INPUT" || element.tagName == "SELECT" || element.tagName == "OPTION" || element.tagName == "TEXTAREA" || element.tagName == "OBJECT" || element.tagName == "EMBED" || element.tagName == "APPLET"))
				return true;
			else
				return false;
		}
	}
}


function xmlFieldValue(xml_rowobj, column_name, default_value)
{
	try
	{
		return xml_rowobj.getElementsByTagName(column_name)[0].firstChild.nodeValue; 
	}
	catch(e)
	{
		if(default_value != null)
			return default_value;
		else
			return "";
	}
}

function getBrowerWidth()
{
	if(isIphone || isWindowsPhone || isAndroid1 || isAndroid2)
	{
		var devicePixelRatio = 1;

		if(window.devicePixelRatio)
			devicePixelRatio = window.devicePixelRatio;
		else if(isWindowsPhone)
			devicePixelRatio = document.documentElement.clientWidth / window.screen.availWidth;

		return window.screen.width * devicePixelRatio;
	}
	else if(isAndroid)
	{
		if(window.devicePixelRatio)
			return (window.screen.width / window.devicePixelRatio) * 1.5;
		else
			return window.screen.width;
	}
	else if(isIE)
	{
		return top.document.compatMode == "CSS1Compat"?top.document.documentElement.clientWidth :top.document.body.clientWidth;
	}
	else
	{
		return top.self.innerWidth;
	}
}

function getBrowerHeight()
{
	if(isIphone || isWindowsPhone || isAndroid)
	{
		var devicePixelRatio = 1;
		if(window.devicePixelRatio)
			devicePixelRatio = window.devicePixelRatio;
		return window.screen.height * devicePixelRatio;
	}
	else if(isIE)
	{
		return top.document.compatMode == "CSS1Compat"?top.document.documentElement.clientHeight:top.document.body.clientHeight;
	}
	else
	{
		return top.self.innerHeight;
	}
}


function addItem(ItemList,Target)
{
    for(var x = 0; x < ItemList.length; x++)
    {
        var opt = ItemList.options[x];
        if (opt.selected)
        {
            flag = true;
            for (var y=0;y<Target.length;y++)
            {
                var myopt = Target.options[y];
                if (myopt.value == opt.value)
                {
                    flag = false;
                }
            }
            if(flag)
            {
                Target.options[Target.options.length] = new Option(opt.text, opt.value);
            }
        }
    }
}

function delItem(ItemList)
{
    for(var x=ItemList.length-1;x>=0;x--)
    {
        var opt = ItemList.options[x];
        if (opt.selected)
        {
            ItemList.options[x] = null;
        }
    }
}

function upItem(ItemList)
{
    for(var x=1;x<ItemList.length;x++)
    {
        var opt = ItemList.options[x];
        if(opt.selected)
        {
            tmpUpValue = ItemList.options[x-1].value;
            tmpUpText  = ItemList.options[x-1].text;
            ItemList.options[x-1].value = opt.value;
            ItemList.options[x-1].text  = opt.text;
            ItemList.options[x].value = tmpUpValue;
            ItemList.options[x].text  = tmpUpText;
            ItemList.options[x-1].selected = true;
            ItemList.options[x].selected = false;
            break;
        }
    }
}

function downItem(ItemList)
{
    for(var x=0;x<ItemList.length;x++)
    {
        var opt = ItemList.options[x];
        if(opt.selected)
        {
            tmpUpValue = ItemList.options[x+1].value;
            tmpUpText  = ItemList.options[x+1].text;
            ItemList.options[x+1].value = opt.value;
            ItemList.options[x+1].text  = opt.text;
            ItemList.options[x].value = tmpUpValue;
            ItemList.options[x].text  = tmpUpText;
            ItemList.options[x+1].selected = true;
            ItemList.options[x].selected = false;
            break;
        }
    }
}

function selectItem(ItemList)
{
    for(var x=ItemList.length-1;x>=0;x--)
    {
        var opt = ItemList.options[x];
        opt.selected = true;
    }
}

function selectOneItem(ItemList,ItemValue)
{
    for(I = 0;I < ItemList.options.length; I++)
    {
        if(ItemValue == ItemList.options[I].value)
        {
           ItemList.options[I].selected = true;
        }
    }
}

function joinItem(ItemList)
{
    var OptionList = new Array();
    for (var x=0; x<ItemList.length;x++)
    {
        OptionList[x] = ItemList.options[x].value;
    }
    return OptionList.join(",");
}

function selectAll(obj)
{ 
	var checked = obj.checked;
	var checkboxs = document.getElementsByTagName("input");
	for(var i=0;i<checkboxs.length;i++)
	{
		if(checkboxs[i].type == "checkbox")
		{
			if(checked)
				checkboxs[i].checked = true;
			else
				checkboxs[i].checked = false;
		}
	}
}

function unselectAll()
{ 
	var checkboxs = document.getElementsByTagName("input");
	for(var i=0;i<checkboxs.length;i++)
	{
		if(checkboxs[i].type == "checkbox")
			checkboxs[i].checked = false;
	}

	selectedRow = null;
	if(lastObj != null)
	{
		lastObj.className = "listtr01";
	}

	$("operation_buttons").style.display = "none";
}

function getCheckedFilelist()
{ 
	var filelist = "";
	var checkboxs = document.getElementsByTagName("input");
	for(var i=0;i<checkboxs.length;i++)
	{
		if(checkboxs[i].type == "checkbox" && checkboxs[i].checked == true)
		{
			try
			{
				if(checkboxs[i].getAttribute("flag") == "list")
				{
					var cid = checkboxs[i].getAttribute("cid");
					if(filelist != "") filelist += "||";
					filelist += htmldecode($("tr_"+cid).getAttribute("name"));
				}
			}
			catch (e){}
		}
	}
	return filelist;
}

function getFirstCheckedID()
{
	var checkboxs = document.getElementsByTagName("input");
	for(var i=0;i<checkboxs.length;i++)
	{
		if(checkboxs[i].type == "checkbox" && checkboxs[i].checked == true)
		{
			try
			{
				if(checkboxs[i].getAttribute("flag") == "list")
				{
					var cid = checkboxs[i].getAttribute("cid");
					return cid;
				}
			}
			catch (e){}
		}
	}
	return "-1";
}

function translateTime(timevalue)
{
	var nDate = new Date(timevalue * 1000);

	var year = nDate.getUTCFullYear();
	var month = nDate.getUTCMonth()+1;
	var day = nDate.getUTCDate();
	var hours = nDate.getUTCHours();
	var minutes = nDate.getUTCMinutes();
	var seconds = nDate.getUTCSeconds();

	var dateString = year;
	dateString += ((month < 10) ? "-0" : "-") + month;
	dateString += ((day < 10) ? "-0" : "-") + day;

	var timeString = ((hours < 10) ? "0" : "") + hours;
	timeString += ((minutes < 10) ? ":0" : ":") + minutes;
	timeString += ((seconds < 10) ? ":0" : ":") + seconds;

	return dateString + " " + timeString;
}

function compareDate(datevalue)
{
	var myDate, nowDate, arr, arr1, arr2;

	arr = datevalue.split(" ");
	arr1 = arr[0].split("-");
	arr2 = arr[1].split(":");
	myDate = new Date(arr1[0], arr1[1] - 1, arr1[2], arr2[0], arr2[1], arr2[2]);
	nowDate = new Date();

	if(nowDate > myDate)
	{
		return true;
	}
	return false;
}
