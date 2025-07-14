var isIE,isOpera,isFirefox,isChrome,isNetscape,isSafari;
isIE = navigator.userAgent.indexOf('MSIE')==-1? 0:1;
isOpera = navigator.userAgent.indexOf('Opera')==-1? 0:1;
isFirefox = navigator.userAgent.indexOf('Firefox')==-1? 0:1;
isChrome = navigator.userAgent.indexOf('Chrome')==-1? 0:1;
isNetscape = navigator.userAgent.indexOf('Netscape')==-1? 0:1;
isSafari = navigator.userAgent.indexOf('Safari')==-1? 0:1;
var isMacOS = navigator.userAgent.indexOf('Macintosh')==-1? 0:1;
var isIphone = navigator.userAgent.toLowerCase().indexOf('iphone')==-1? 0:1;
var isIpod = navigator.userAgent.toLowerCase().indexOf('ipod')==-1? 0:1;
var isIpad = navigator.userAgent.toLowerCase().indexOf('ipad')==-1? 0:1;
var isAndroid = navigator.userAgent.toLowerCase().indexOf('android')==-1? 0:1;


var lastsortcol = -1;
var autosortcol = -1;
var autosorttype = "";
var sortArrow = false;
var lastArrow = null;
var lastdragobj = null;
var selectTimer = null;
var cancelTimerCallback = null;
var __drag = false;
var __zIndex = 100;
var __zOwnIndex = 1000;
var __alertdrag = false;
var __zAlertIndex = 10000;
var fileByte = new Array('B', 'KB', 'MB', 'GB');
var logLegend = new Array('01 Normal Message','02 Security Message','03 FTP Command','04 FTP Response','05 Web Request','06 Web Response','07 SSH Command','08 SSH Response','09 ODBC Error','10 Mysql Error','11 Lua Error','12 Mail Error','13 File Access Error','14 Normal Error');
var logFontColor = new Array('#009900','#FF0000','#009900','#0000FF','#000','#000','#000','#000','#CCC','#CCC','#00FFCC','#00FF00','#FFFF00','#FFF');
var logBackColor = new Array('#FFF', '#FFF', '#FFF', '#FFF', '#FFFFCC', '#FFFFCC','#FFFF99','#FFFF99','#FF0000','#FF0000','#FF0000','#FF0000','#FF0000','#FF0000');

var logFontColor2 = new Array('#009900', '#FF0000', '#009900', '#FF0000', '#FF0000');
var logBackColor2 = new Array('#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF');

var objevent = new Function('e','if (!e) e = top.window.event;return e');

var KeepliveObject;
KeepliveObject = isIE ? new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();

function keeplive()
{
	if(!KeepliveObject)
	{
		KeepliveObject = isIE ? new ActiveXObject('Microsoft.XMLHTTP'):new XMLHttpRequest();
	}
	else
	{
		KeepliveObject.open("POST","keeplive.html?r="+Math.random());
		KeepliveObject.send("");
		KeepliveObject.onreadystatechange = function()
		{
			if (KeepliveObject.readyState == 4) 
			{
				if(KeepliveObject.status == 200)
				{
					if(KeepliveObject.responseText == "deleted")
					{
						top.location.reload();
					}
					else if(KeepliveObject.responseText == "refreshed")
					{
						top.left.location.reload();
					}
					else if(KeepliveObject.responseText == "upgrade_tip")
					{
						top.upgradeTip();
					}
				}
			}
		}

	}
}


function ltrim(s)
{ 
	return s.replace( /^(\s*|¡¡*)/, ""); 
} 

function rtrim(s)
{ 
	return s.replace( /(\s*|¡¡*)$/, ""); 
} 

function trim(s)
{ 
	return ltrim(rtrim(s));
}

function right(s,len)
{ 
	var pos = s.length - len;
	return s.substr(pos);
} 

function filter(s,f1,f2)
{
	var strArray = s.split("\r\n");
	for(var i=0;i<strArray.length;i++)
	{
		if(f1 != null && f1 != "" && strArray[i].indexOf(f1) == -1)
		{
			delete strArray[i];
		}
		else
		{
			if(f2 != null && f2 != "" && strArray[i].indexOf(f2) == -1)
			{
				delete strArray[i];
			}
			else
			{
				var colorIndex = parseInt(strArray[i].substr(1,2),10)-1;
				if(colorIndex < 0) colorIndex = 0;
				if(colorIndex > logFontColor.length-1) colorIndex = logFontColor.length-1;
				strArray[i] = "<span style='line-height:150%;font-size:8pt;background-color:"+logBackColor[colorIndex]+";color:"+logFontColor[colorIndex]+";'>"+strArray[i]+"</span><br>";
			}
		}
	}
	return strArray.join("");
}

function sysfilter(s,f1,f2)
{
	var strArray = s.split("\r\n");
	for(var i=0;i<strArray.length;i++)
	{
		if(f1 != null && f1 != "" && strArray[i].indexOf(f1) == -1)
		{
			delete strArray[i];
		}
		else
		{
			if(f2 != null && f2 != "" && strArray[i].indexOf(f2) == -1)
			{
				delete strArray[i];
			}
			else
			{
				var colorIndex = parseInt(strArray[i].substr(1,2),10)-1;
				if(colorIndex < 0) colorIndex = 0;
				if(colorIndex > logFontColor2.length-1) colorIndex = logFontColor2.length-1;
				strArray[i] = "<span style='line-height:150%;font-size:8pt;background-color:"+logBackColor2[colorIndex]+";color:"+logFontColor2[colorIndex]+";'>"+strArray[i]+"</span><br>";
			}
		}
	}
	return strArray.join("");
}

function $(obj)
{
	return document.getElementById(obj);
}

function txt2html(src)
{
	src=src.replace(/>/ig, "&gt;"); 
 	src=src.replace(/</ig, "&lt;");
	src=src.replace(/\r\n/ig,"<BR>");	
	src=src.replace(/\n/ig,"<BR>");
	src=src.replace(/ /ig,"&nbsp;");
	src=src.replace(/\"/ig, "&quot;");
	src=src.replace(/\'/ig, "&#39;");
	src=src.replace(/\\/ig, "&slash;");
	return src;
}
function html2txt(src)
{
	src=src.replace(/<BR>/ig,"\r\n");
	src=src.replace(/<BR>/ig,"\n");
	src=src.replace(/&gt;/ig, ">"); 
 	src=src.replace(/&lt;/ig, "<"); 
	src=src.replace(/&nbsp;/ig," ");
	src=src.replace(/&quot;/ig, "\"");
	src=src.replace(/&#39;/ig, "\'");
	src=src.replace(/&slash;/ig, "\\");
	return src;
}

function getEvent()
{
  if(isIE || isOpera || isSafari)
  {
    return window.event;
  }
  func=getEvent.caller;
  while(func!=null)
  {
    var arg0=func.arguments[0];
    if(arg0)
    {
      if((arg0.constructor==Event || arg0.constructor ==MouseEvent)
		||(typeof(arg0)=="object" && arg0.preventDefault && arg0.stopPropagation))
       {
          return arg0;
       }
    }
    func=func.caller;
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

function round(number, places) 
{
	if (!places) {
		var shift = 1;
	} else {
		var shift = Math.pow(10, places);
	}
	return Math.round(number * shift) / shift;
}

function formatTime(time) {
    seconds = parseInt(time % 60);
    minutes = parseInt(time / 60);

	if(minutes <= 0)
		return seconds+" s ";
	else
		return minutes+" m "+seconds+" s";
}

function fileSize(bytes)
{
	if(Math.round(bytes/1024) < 1)
		return bytes+" B";
	else if(Math.round(bytes/(1024*1024)) < 1)
		return round(bytes/1024, 2)+" KB";
	else if(Math.round(bytes/(1024*1024*1024)) < 1)
		return round(bytes/(1024*1024), 2)+" MB";
	else
		return round(bytes/(1024*1024*1024), 2)+" GB";
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
	return encodeURIComponent(src).replace(/\'/g,"$27").replace(/\+/g,"$2B");
}

function urlEncodeSpecial(src)
{
	return encodeURIComponent(src).replace(/\'/g,"$27").replace(/\+/g,"$2B").replace(/\%/g,"\$");
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
			 var vValue1 = "";
			 var vValue2 = "";
			 if(sDataType == "size")
			 {
				 vValue1 = oTR1.cells[iCol].innerHTML;
				 vValue2 = oTR2.cells[iCol].innerHTML;
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
				
				 if (vValue1d*ratio1 < vValue2d*ratio2)
					 return -1;   
				 else if (vValue1d*ratio1 > vValue2d*ratio2) 
					 return 1;   
				 else
					 return 0; 
			 }
			 else
			 {
				 if(sDataType == "myname")
				 {
					vValue1 = oTR1.cells[iCol].getAttribute("myname");
					vValue2 = oTR2.cells[iCol].getAttribute("myname");
				 }
				 else
				 {
					vValue1 = oTR1.cells[iCol].innerHTML;
					vValue2 = oTR2.cells[iCol].innerHTML;
				 }

				 if(sDataType == "filename")
				 {
					vValue1 = vValue1.substr(vValue1.lastIndexOf("> ")+2);
					vValue2 = vValue2.substr(vValue2.lastIndexOf("> ")+2);
				 }
				 else
				 {
					vValue1 = convert(vValue1, sDataType);   
					vValue2 = convert(vValue2, sDataType); 
				 }
				 if (vValue1 < vValue2)
					 return -1;   
				 else if (vValue1 > vValue2)   
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
		aTRs[i] = colDataRows[i];

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
			obj.style.backgroundImage="url('images/sortup.gif')";
		else
			obj.style.backgroundImage="url('images/sortdown.gif')";
		obj.style.backgroundPosition="15px";
		obj.style.backgroundRepeat="no-repeat";
		lastArrow = obj;
	}

	for(var j=0; j<aTRs.length; j++)
		oTBody.appendChild(aTRs[j]);

	lastsortcol = iCol;
	autosortcol = lastsortcol;
	autosorttype = sDataType;
	aTRs = null;
}   


function autoSortTable(sTableID) 
{
	if(autosortcol != -1)
	{
		var oTable = $(sTableID);   
		var oTBody = oTable.tBodies[0];   
		var colDataRows = oTBody.rows;
		var aTRs = new Array();   
		for (var i=0; i < colDataRows.length; i++)
			aTRs[i] = colDataRows[i];

		aTRs.sort(generateCompareTRs(autosortcol, autosorttype));
		if(sortArrow)
			aTRs.reverse();

		if(lastArrow != null)
		{
			if(sortArrow == false)
				lastArrow.style.backgroundImage="url('images/sortup.gif')";
			else
				lastArrow.style.backgroundImage="url('images/sortdown.gif')";
			lastArrow.style.backgroundPosition="15px";
			lastArrow.style.backgroundRepeat="no-repeat";
		}

		for(var j=0; j<aTRs.length; j++)
			oTBody.appendChild(aTRs[j]);

		aTRs = null;
	}
}

function dragStart(obj, listview_div, listhead, listtable)
{
	try
	{
		var evt = getEvent();
		obj.lastMouseX = evt.clientX; 
		obj.TDoffset = obj.parentNode.offsetWidth;
		lastdragobj = obj;

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
											$(listview_div).style.width = $(listhead).style.width;
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
											$(listview_div).style.width = $(listhead).style.width;
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
	}
	catch(e){}
}


function showMessagebox(titleStr, contentStr, callbackFunc, width, height)
{
	__drag = false;
	boxwidth = width || 320;
	boxheight = height || 200;
	titleheight = 24;
	bordercolor = "#5488C9";
	backcolor = "#5488C9";

	if(top.__zIndex == null)
		top.__zIndex = 100;

	top.__zIndex++;

	var maskDiv=top.document.createElement("div");
	maskDiv.setAttribute('id','maskDiv'+top.__zIndex);
	maskDiv.style.position = "absolute";
	maskDiv.style.top = "0px";
	maskDiv.style.left = "0px";
	maskDiv.style.background = "#FFF";
	maskDiv.style.filter = "alpha(opacity=0)";
	maskDiv.style.opacity = "0";
	if(isIpad || isAndroid)
	{
		maskDiv.style.width = "100%";
		maskDiv.style.height = "100%";
	}
	else
	{
		maskDiv.style.width = "3000px";
		maskDiv.style.height = "2000px";
	}
	top.document.body.appendChild(maskDiv);
	maskDiv = null;

	var contentDiv=top.document.createElement("div")
	contentDiv.setAttribute("id","msgDiv"+top.__zIndex);
	contentDiv.style.textAlign = "center";
	contentDiv.style.background ="#E6E6E6";
	contentDiv.style.border="1px solid " + bordercolor;
	contentDiv.style.position = "absolute";
	var templeft = (getBrowerWidth()-boxwidth)/2;
	if(templeft < 0) templeft = 0;
	contentDiv.style.left = templeft +"px";
	var temptop = (getBrowerHeight()-boxheight)/2;
	if(temptop < 0) temptop = 0;
	contentDiv.style.top = temptop +"px";
	contentDiv.style.font= "12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
	contentDiv.style.width = boxwidth + "px";
	contentDiv.style.height = (boxheight+titleheight+6) + "px";
	contentDiv.style.lineHeight ="25px";
	top.document.body.appendChild(contentDiv);
	contentDiv = null;

	var title=top.document.createElement("h4");
	title.setAttribute("id","msgTitle"+top.__zIndex);
	title.style.textAlign = "right";
	title.style.margin="0px";
	title.style.padding="3px";
	title.style.background = backcolor;
	title.style.backgroundImage = "url(images/navbg.gif)";
	title.style.border="0px solid " + bordercolor;
	title.style.color="#FFF";
	title.style.cursor="move";
	title.style.fontSize="10pt";
	title.style.height = titleheight + "px";
	title.innerHTML="<span style='float:left;font-size:10pt;font-weight:bold;'>"+titleStr+"</span><img src='images/close.png' title='close' style='cursor:default;padding:3px;' id='closeButton"+top.__zIndex+"' >";
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
			buttonObj[i].onmouseover=function(){
				this.className = "buttonhover";
			}
			buttonObj[i].onmouseout=function(){
				this.className = this.className.replace(/\bbuttonhover\b/,'');
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
				templeft = offsetLeft;
				temptop = offsetTop;
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
					msgdiv_obj.releaseCapture();
				__drag=false;
			}

			try
			{
				if(window.addEventListener)
				{
					var frameobj = top.frames[2];
					frameobj.document.onmousemove=function(e)
					{
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
					frameobj.document.onmouseup=function(e)
					{
						if(!window.addEventListener && __drag == true)
							msgdiv_obj.releaseCapture();
						__drag=false;
					}
				}
			}
			catch(e){}

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

function showMessageboxOwn(titleStr, contentStr, callback, width, height)
{
	__drag = false;
	boxwidth = width || 320;
	boxheight = height || 200;
	titleheight = 24;
	bordercolor = "#5488C9";
	backcolor = "#5488C9";

	if(top.__zOwnIndex == null)
		top.__zOwnIndex = 100;

	top.__zOwnIndex++;

	var maskDiv=document.createElement("div");
	maskDiv.setAttribute('id','maskDiv'+top.__zOwnIndex);
	maskDiv.style.position = "absolute";
	maskDiv.style.top = "0px";
	maskDiv.style.left = "0px";
	maskDiv.style.background = "#FFF";
	maskDiv.style.filter = "alpha(opacity=0)";
	maskDiv.style.opacity = "0";
	maskDiv.style.width = document.body.clientWidth + "px";
	maskDiv.style.height = document.body.clientHeight + "px";
	document.body.appendChild(maskDiv);
	maskDiv = null;

	var contentDiv=document.createElement("div")
	contentDiv.setAttribute("id","msgDiv"+top.__zOwnIndex);
	contentDiv.style.textAlign = "center";
	contentDiv.style.background="#E6E6E6";
	contentDiv.style.border="1px solid " + bordercolor;
	contentDiv.style.position = "absolute";
	contentDiv.style.left = (getBrowerWidth2()-boxwidth)/2 +"px";;
	contentDiv.style.top = (getBrowerHeight2()-boxheight)/2 +"px";;
	contentDiv.style.font= "12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
	contentDiv.style.width = boxwidth + "px";
	contentDiv.style.height = boxheight + "px";
	contentDiv.style.lineHeight ="25px";
	document.body.appendChild(contentDiv);
	contentDiv = null;

	var title=document.createElement("h4");
	title.setAttribute("id","msgTitle"+top.__zOwnIndex);
	title.style.textAlign = "right";
	title.style.margin="0px";
	title.style.padding="3px";
	title.style.background = backcolor;
	title.style.backgroundImage = "url(images/navbg.gif)";
	title.style.border="0px solid " + bordercolor;
	title.style.color="#FFF";
	title.style.fontSize="11pt";
	title.style.height = titleheight + "px";
	title.innerHTML="<span style='float:left;font-size:11pt;font-weight:bold;'>"+titleStr+"</span><img src='images/close.png' title='close' style='cursor:default;padding:3px;'>";
	document.getElementById("msgDiv"+top.__zOwnIndex).appendChild(title);
	title = null;

	var content=document.createElement("div");
	content.setAttribute("id","msgContent"+top.__zOwnIndex);
	content.style.marginTop="1px";
	content.style.textAlign="center";
	content.innerHTML = contentStr;
	document.getElementById("msgDiv"+top.__zOwnIndex).appendChild(content);

	if(isIE)
	{
		var buttonObj = content.getElementsByTagName("button");
		for (var i=0; i<buttonObj.length; i++) {
			buttonObj[i].onmouseover=function(){
				this.className = "buttonhover";
			}
			buttonObj[i].onmouseout=function(){
				this.className = this.className.replace(/\bbuttonhover\b/,'');
			}
		}
	}
	content = null;

	document.getElementById("msgTitle"+top.__zOwnIndex).onclick=function()
	{
		var evt = getEvent();
		var element = evt.srcElement || evt.target;
		if(element.tagName == "IMG")
		{
			return closewindowOwn();
		}
	}

	if(top.callback == null) top.callback = new Array();
	top.callback[top.__zOwnIndex] = callback;
}

function closewindowOwn(value)
{
	try
	{
		document.body.removeChild(document.getElementById("maskDiv"+top.__zOwnIndex));
		document.body.removeChild(document.getElementById("msgDiv"+top.__zOwnIndex));
	}
	catch(e){}
	top.__zOwnIndex--;
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
			$(select_id).style.display="none";
			if(callback != null)
				callback(obj.title);
		}
		obj.onmouseout=function(){
			obj.className="none";
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
	if(isIE)
		return top.document.compatMode == "CSS1Compat"?top.document.documentElement.clientWidth :top.document.body.clientWidth;
	else
		return top.self.innerWidth;
}

function getBrowerHeight()
{
	if(isIE)
		return top.document.compatMode == "CSS1Compat"?top.document.documentElement.clientHeight:top.document.body.clientHeight;
	else
		return top.self.innerHeight;
}

function getBrowerWidth2()
{
	if(isIE)
		return document.compatMode == "CSS1Compat"?document.documentElement.clientWidth :document.body.clientWidth;
	else
		return self.innerWidth;
}

function getBrowerHeight2()
{
	if(isIE)
		return document.compatMode == "CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;
	else
		return self.innerHeight;
}


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


if(isIE)
{
	window.onunload = function()
	{
		if(window.parent == window.top && top.__zIndex != null && top.__zIndex > 100)
		{
			top.location.reload();
		}
	}
}
else
{
	window.onbeforeunload = function()
	{
		if(window.parent == window.top && top.__zIndex != null && top.__zIndex > 100)
		{
			top.location.reload();
		}
	}
}

document.oncontextmenu=function(){
	var evt = getEvent();
	var element = evt.srcElement || evt.target;
	if((element.tagName =="INPUT" || element.tagName == "TEXTAREA"))
	{
		return true;
	}
	else
	{
		return false;
	}
}

btnHover = function(){
      var buttonObj = document.body.getElementsByTagName("button");
      for (var i=0; i<buttonObj.length; i++) {
            buttonObj[i].onmouseover=function(){
                this.className = "buttonhover";
            }
            buttonObj[i].onmouseout=function(){
				this.className = this.className.replace(/\bbuttonhover\b/,'');
            }
      }
}
if(window.attachEvent && isIE)
	window.attachEvent("onload", btnHover);


function removeXSS(src)
{
	src=src.replace(/>/ig, "&gt;"); 
 	src=src.replace(/</ig, "&lt;");
	src=src.replace(/\"/ig, "&quot;");
	src=src.replace(/\'/ig, "&#39;");
	src=src.replace(/\\/ig, "&slash;");
	return src;
}
