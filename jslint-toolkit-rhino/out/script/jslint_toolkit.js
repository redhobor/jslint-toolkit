(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"jslint_toolkit.Application","qx.theme":"jslint_toolkit.theme.Theme","qx.version":"1.3"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"jslint_toolkit":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.3"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:jslint_toolkit.js"]],
  urisBefore : [],
  packageHashes : {"0":"9a2869fcc71f"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : false,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['9a2869fcc71f']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}},"resources":{"jslint_toolkit/Thumbs.db":"jslint_toolkit","jslint_toolkit/image/Thumbs.db":"jslint_toolkit","jslint_toolkit/image/document-folder.png":[22,22,"png","jslint_toolkit"],"jslint_toolkit/image/edit-delete.png":[22,22,"png","jslint_toolkit"],"jslint_toolkit/image/edit-redo.png":[22,22,"png","jslint_toolkit"],"jslint_toolkit/image/errorIcon.png":[14,14,"png","jslint_toolkit"],"jslint_toolkit/image/go-down.png":[16,16,"png","jslint_toolkit"],"jslint_toolkit/image/go-up.png":[16,16,"png","jslint_toolkit"],"jslint_toolkit/image/help-about.png":[22,22,"png","jslint_toolkit"],"jslint_toolkit/image/help-contents.png":[22,22,"png","jslint_toolkit"],"jslint_toolkit/image/infoIcon.png":[14,14,"png","jslint_toolkit"],"jslint_toolkit/image/loading.gif":[24,24,"gif","jslint_toolkit"],"jslint_toolkit/image/media-playback-start.png":[22,22,"png","jslint_toolkit"],"jslint_toolkit/image/user-desktop.png":[16,16,"png","jslint_toolkit"],"jslint_toolkit/image/utilities-color-chooser.png":[16,16,"png","jslint_toolkit"],"jslint_toolkit/image/utilities-dictionary.png":[16,16,"png","jslint_toolkit"],"jslint_toolkit/image/utilities-log-viewer.png":[22,22,"png","jslint_toolkit"],"jslint_toolkit/image/utilities-terminal.png":[22,22,"png","jslint_toolkit"],"jslint_toolkit/image/warningIcon.png":[14,14,"png","jslint_toolkit"],"jslint_toolkit/js/jquery-1.3.2.min.js":"jslint_toolkit","jslint_toolkit/js/jquery-1.5.min.js":"jslint_toolkit","jslint_toolkit/source.htm":"jslint_toolkit","jslint_toolkit/syntax/scripts/clipboard.swf":"jslint_toolkit","jslint_toolkit/syntax/scripts/shBrushJScript.js":"jslint_toolkit","jslint_toolkit/syntax/scripts/shCore.js":"jslint_toolkit","jslint_toolkit/syntax/styles/help.png":[16,16,"png","jslint_toolkit"],"jslint_toolkit/syntax/styles/magnifier.png":[16,16,"png","jslint_toolkit"],"jslint_toolkit/syntax/styles/page_white_code.png":[16,16,"png","jslint_toolkit"],"jslint_toolkit/syntax/styles/page_white_copy.png":[16,16,"png","jslint_toolkit"],"jslint_toolkit/syntax/styles/printer.png":[16,16,"png","jslint_toolkit"],"jslint_toolkit/syntax/styles/shCore.css":"jslint_toolkit","jslint_toolkit/syntax/styles/shThemeDefault.css":"jslint_toolkit","jslint_toolkit/syntax/styles/shThemeDjango.css":"jslint_toolkit","jslint_toolkit/syntax/styles/shThemeEmacs.css":"jslint_toolkit","jslint_toolkit/syntax/styles/shThemeFadeToGrey.css":"jslint_toolkit","jslint_toolkit/syntax/styles/shThemeMidnight.css":"jslint_toolkit","jslint_toolkit/syntax/styles/shThemeRDark.css":"jslint_toolkit","jslint_toolkit/syntax/styles/wrapping.png":[16,16,"png","jslint_toolkit"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"en":{}}};
(function(){var m="toString",k=".",j="default",h="Object",g='"',f="Array",e="()",d="String",c="Function",b=".prototype",L="function",K="Boolean",J="Error",I="constructor",H="warn",G="hasOwnProperty",F="string",E="toLocaleString",D="RegExp",C='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="count",z="debug",B="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,M){var O=name.split(k);
var parent=window;
var N=O[0];

for(var i=0,P=O.length-1;i<P;i++,N=O[i]){if(!parent[N]){parent=parent[N]={};
}else{parent=parent[N];
}}parent[N]=M;
return N;
},setDisplayName:function(Q,R,name){Q.displayName=R+k+name+e;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+k+name+e;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+b);
bb=V.construct||new Function;

if(V.extend){this.extendClass(bb,bb,V.extend,name,ba);
}var W=V.statics||{};
for(var i=0,bc=qx.Bootstrap.getKeys(W),l=bc.length;i<l;i++){var bd=bc[i];
bb[bd]=W[bd];
}Y=bb.prototype;
var X=V.members||{};
for(var i=0,bc=qx.Bootstrap.getKeys(X),l=bc.length;i<l;i++){var bd=bc[i];
Y[bd]=X[bd];
}}else{bb=V.statics||{};
}var ba=this.createNamespace(name,bb);
bb.name=bb.classname=name;
bb.basename=ba;
bb.$$type=o;
if(!bb.hasOwnProperty(m)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(be,bf,bg,name,bh){var bk=bg.prototype;
var bj=new Function;
bj.prototype=bk;
var bi=new bj;
be.prototype=bi;
bi.name=bi.classname=name;
bi.basename=bh;
bf.base=be.superclass=bg;
bf.self=be.constructor=bi.constructor=be;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bl){return bl.__count__;
},"default":function(bm){var length=0;

for(var bn in bm){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bo,bp,bq){if(bq===undefined){bq=true;
}
for(var br in bp){if(bq||bo[br]===undefined){bo[br]=bp[br];
}}return bo;
},__oF:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bs){var bt=[];
var bv=Object.prototype.hasOwnProperty;

for(var bw in bs){if(bv.call(bs,bw)){bt.push(bw);
}}var bu=qx.Bootstrap.__oF;

for(var i=0,a=bu,l=a.length;i<l;i++){if(bv.call(bs,a[i])){bt.push(a[i]);
}}return bt;
},"default":function(bx){var by=[];
var bz=Object.prototype.hasOwnProperty;

for(var bA in bx){if(bz.call(bx,bA)){by.push(bA);
}}return by;
}})[typeof (Object.keys)==
L?B:
(function(){for(var bB in {toString:1}){return bB;
}})()!==m?u:j],getKeysAsString:function(bC){var bD=qx.Bootstrap.getKeys(bC);

if(bD.length==0){return p;
}return g+bD.join(C)+g;
},__oG:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bE,self,bF){var bG=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bH=Array.prototype.slice.call(arguments,0,arguments.length);
return bE.apply(self,bG.concat(bH));
};
},firstUp:function(bI){return bI.charAt(0).toUpperCase()+bI.substr(1);
},firstLow:function(bJ){return bJ.charAt(0).toLowerCase()+bJ.substr(1);
},getClass:function(bK){var bL=Object.prototype.toString.call(bK);
return (qx.Bootstrap.__oG[bL]||bL.slice(8,-1));
},isString:function(bM){return (bM!==null&&(typeof bM===F||qx.Bootstrap.getClass(bM)==d||bM instanceof String||(!!bM&&!!bM.$$isString)));
},isArray:function(bN){return (bN!==null&&(bN instanceof Array||(bN&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bN.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bN)==f||(!!bN&&!!bN.$$isArray)));
},isObject:function(bO){return (bO!==undefined&&bO!==null&&qx.Bootstrap.getClass(bO)==h);
},isFunction:function(bP){return qx.Bootstrap.getClass(bP)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bQ,name){while(bQ){if(bQ.$$properties&&bQ.$$properties[name]){return bQ.$$properties[name];
}bQ=bQ.superclass;
}return null;
},hasProperty:function(bR,name){return !!qx.Bootstrap.getPropertyDefinition(bR,name);
},getEventType:function(bS,name){var bS=bS.constructor;

while(bS.superclass){if(bS.$$events&&bS.$$events[name]!==undefined){return bS.$$events[name];
}bS=bS.superclass;
}return null;
},supportsEvent:function(bT,name){return !!qx.Bootstrap.getEventType(bT,name);
},getByInterface:function(bU,bV){var bW,i,l;

while(bU){if(bU.$$implements){bW=bU.$$flatImplements;

for(i=0,l=bW.length;i<l;i++){if(bW[i]===bV){return bU;
}}}bU=bU.superclass;
}return null;
},hasInterface:function(bX,bY){return !!qx.Bootstrap.getByInterface(bX,bY);
},getMixins:function(ca){var cb=[];

while(ca){if(ca.$$includes){cb.push.apply(cb,ca.$$flatIncludes);
}ca=ca.superclass;
}return cb;
},$$logs:[],debug:function(cc,cd){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(ce,cf){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(cg,ch){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(ci,cj){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(ck){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}{};
var k=h.statics?h.statics:{};
qx.Bootstrap.setDisplayNames(k,name);

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
qx.Bootstrap.setDisplayName(h.construct,name,e);
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
qx.Bootstrap.setDisplayNames(h.members,name+f);
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
qx.Bootstrap.setDisplayName(h.destruct,name,b);
}}else{var k={};
}k.$$type=a;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
},checkCompatibility:function(m){var p=this.flatten(m);
var q=p.length;

if(q<2){return true;
}var t={};
var s={};
var r={};
var o;

for(var i=0;i<q;i++){o=p[i];

for(var n in o.events){if(r[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+r[n]+'" in member "'+n+'"!');
}r[n]=o.name;
}
for(var n in o.properties){if(t[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+t[n]+'" in property "'+n+'"!');
}t[n]=o.name;
}
for(var n in o.members){if(s[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+s[n]+'" in member "'+n+'"!');
}s[n]=o.name;
}}return true;
},isCompatible:function(u,v){var w=qx.Bootstrap.getMixins(v);
w.push(u);
return qx.Mixin.checkCompatibility(w);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__oh:null,__oi:function(){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__jD:{},define:function(j,k){if(k===undefined){throw new Error('Default value of setting "'+j+'" must be defined!');
}
if(!this.__jD[j]){this.__jD[j]={};
}else if(this.__jD[j].defaultValue!==undefined){throw new Error('Setting "'+j+'" is already defined!');
}this.__jD[j].defaultValue=k;
},get:function(l){var m=this.__jD[l];

if(m===undefined){throw new Error('Setting "'+l+'" is not defined.');
}
if(m.value!==undefined){return m.value;
}return m.defaultValue;
},set:function(n,o){if((n.split(a)).length<2){throw new Error('Malformed settings key "'+n+'". Must be following the schema "namespace.key".');
}
if(!this.__jD[n]){this.__jD[n]={};
}this.__jD[n].value=o;
},__jE:function(){if(window.qxsettings){for(var p in window.qxsettings){this.set(p,window.qxsettings[p]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(q){}this.__jF();
}},__jF:function(){if(this.get(h)!=true){return;
}var s=document.location.search.slice(1).split(g);

for(var i=0;i<s.length;i++){var r=s[i].split(b);

if(r.length!=3||r[0]!=c){continue;
}this.set(r[1],decodeURIComponent(r[2]));
}}},defer:function(t){t.define(h,false);
t.define(e,false);
t.define(d,0);
t.__jE();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,j){if(j){if(j.extend&&!(j.extend instanceof Array)){j.extend=[j.extend];
}{};
var k=j.statics?j.statics:{};
if(j.extend){k.$$extends=j.extend;
}
if(j.properties){k.$$properties=j.properties;
}
if(j.members){k.$$members=j.members;
}
if(j.events){k.$$events=j.events;
}}else{var k={};
}k.$$type=c;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
qx.Interface.$$registry[name]=k;
return k;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$extends){n.push.apply(n,this.flatten(m[i].$$extends));
}}return n;
},__rQ:function(o,p,q,r){var v=q.$$members;

if(v){for(var u in v){if(qx.Bootstrap.isFunction(v[u])){var t=this.__rR(p,u);
var s=t||qx.Bootstrap.isFunction(o[u]);

if(!s){throw new Error('Implementation of method "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}var w=r===true&&!t&&!qx.Bootstrap.hasInterface(p,q);

if(w){o[u]=this.__rU(q,o[u],u,v[u]);
}}else{if(typeof o[u]===undefined){if(typeof o[u]!==h){throw new Error('Implementation of member "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}}}}}},__rR:function(x,y){var C=y.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!C){return false;
}var z=qx.Bootstrap.firstLow(C[2]);
var A=qx.Bootstrap.getPropertyDefinition(x,z);

if(!A){return false;
}var B=C[0]==b||C[0]==d;

if(B){return qx.Bootstrap.getPropertyDefinition(x,z).check==g;
}return true;
},__rS:function(D,E){if(E.$$properties){for(var F in E.$$properties){if(!qx.Bootstrap.getPropertyDefinition(D,F)){throw new Error('The property "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},__rT:function(G,H){if(H.$$events){for(var I in H.$$events){if(!qx.Bootstrap.supportsEvent(G,I)){throw new Error('The event "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__rQ(J,M,K,false);
this.__rS(M,K);
this.__rT(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__rQ(N.prototype,N,O,P);
this.__rS(N,O);
this.__rT(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__rU:function(){},__rV:null,__rW:function(){}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__to:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__to;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var n=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,n);
}return n;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(o,p,q,name){this.__to.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}}[String.prototype.quote?f:g]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__jC:function(){var t=d;
var x=e;
var w=window.navigator.userAgent;
var z=false;
var v=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){t=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(w)){x=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){x+=q+RegExp.$3;
}}else{v=true;
x=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){t=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(w)){x=RegExp.$1;
var y=RegExp(n).exec(x);

if(y){x=x.slice(0,y.index);
}}else{v=true;
x=m;
}}else if(window.controllers&&window.navigator.product===c){t=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(w)){x=RegExp.$1;
}else{v=true;
x=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(w)){t=k;
x=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(x<8&&/Trident\/([^\);]+)(\)|;)/.test(w)){if(RegExp.$1===g){x=h;
}}this.MSHTML=true;
}else{var u=window.qxFail;

if(u&&typeof u===o){var t=u();

if(t.NAME&&t.FULLVERSION){t=t.NAME;
this[t.toUpperCase()]=true;
x=t.FULLVERSION;
}}else{z=true;
v=true;
x=r;
t=s;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__jC();
}});
})();
(function(){var x="off",w="on",u="|",t="default",s="object",r="&",q="qx.aspects",p="qx.mobile.nativescroll",o="qx.mobile.emulatetouch",n="$",e="qx.allowUrlVariants",m="qx.debug",h="qx.client",c="qx.dynlocale",b="webkit",g="qxvariant",f="opera",j=":",a="qx.core.Variant",k="mshtml",d="gecko";
qx.Bootstrap.define(a,{statics:{__kJ:{},__kK:{},compilerIsSet:function(){return true;
},define:function(y,z,A){{};

if(!this.__kJ[y]){this.__kJ[y]={};
}else{}this.__kJ[y].allowedValues=z;
this.__kJ[y].defaultValue=A;
},get:function(B){var C=this.__kJ[B];
{};

if(C.value!==undefined){return C.value;
}return C.defaultValue;
},__kL:function(){if(window.qxvariants){for(var D in qxvariants){{};

if(!this.__kJ[D]){this.__kJ[D]={};
}this.__kJ[D].value=qxvariants[D];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(E){}this.__kM(this.__kJ);
}},__kM:function(){if(qx.core.Setting.get(e)!=true){return;
}var F=document.location.search.slice(1).split(r);

for(var i=0;i<F.length;i++){var G=F[i].split(j);

if(G.length!=3||G[0]!=g){continue;
}var H=G[1];

if(!this.__kJ[H]){this.__kJ[H]={};
}this.__kJ[H].value=decodeURIComponent(G[2]);
}},select:function(I,J){{};

for(var K in J){if(this.isSet(I,K)){return J[K];
}}
if(J[t]!==undefined){return J[t];
}{};
},isSet:function(L,M){var N=L+n+M;

if(this.__kK[N]!==undefined){return this.__kK[N];
}var P=false;
if(M.indexOf(u)<0){P=this.get(L)===M;
}else{var O=M.split(u);

for(var i=0,l=O.length;i<l;i++){if(this.get(L)===O[i]){P=true;
break;
}}}this.__kK[N]=P;
return P;
},__kN:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__kO:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__kP:function(Q,R){for(var i=0,l=Q.length;i<l;i++){if(Q[i]==R){return true;
}}return false;
}},defer:function(S){S.define(h,[d,k,f,b],qx.bom.client.Engine.NAME);
S.define(m,[w,x],w);
S.define(q,[w,x],x);
S.define(c,[w,x],w);
S.define(o,[w,x],x);
S.define(p,[w,x],x);
S.__kL();
}});
})();
(function(){var cz=';',cy='computed=this.',cx='=value;',cw='this.',cv="set",cu="setThemed",ct="setRuntime",cs="init",cr='if(this.',cq='delete this.',bA='!==undefined)',bz='}',by="resetThemed",bx='else if(this.',bw="string",bv='return this.',bu="reset",bt="boolean",bs="resetRuntime",br='!==undefined){',cG="",cH="refresh",cE='=true;',cF="this.",cC=";",cD='old=this.',cA="();",cB='else ',cI='if(old===undefined)old=this.',cJ='old=computed=this.',bY="return this.",bX="get",cb='(value);',ca="(a[",cd='if(old===computed)return value;',cc='if(old===undefined)old=null;',cf=' of an instance of ',ce=' is not (yet) ready!");',bW="]);",bV='!==inherit){',g='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',h='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',j='value !== null && value.nodeType === 9 && value.documentElement',k='===value)return value;',m='value !== null && value.$$type === "Mixin"',n='return init;',o='var init=this.',p='value !== null && value.nodeType === 1 && value.attributes',q="var parent = this.getLayoutParent();",r="Error in property ",cX='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',cW="property",cV='.validate.call(this, value);',cU='qx.core.Assert.assertInstance(value, Date, msg) || true',dc='else{',db="if (!parent) return;",da=" in method ",cY='qx.core.Assert.assertInstance(value, Error, msg) || true',de='=computed;',dd='Undefined value is not allowed!',Q='(backup);',R="MSIE 6.0",O='if(computed===inherit){',P="inherit",U='Is invalid!',V='if(value===undefined)prop.error(this,2,"',S='var computed, old=this.',T='else if(computed===undefined)',M="': ",N=" of class ",z='value !== null && value.nodeType !== undefined',y='===undefined)return;',B='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',A="')){",v='qx.core.Assert.assertPositiveInteger(value, msg) || true',u='else this.',x='value=this.',w='","',t='if(init==qx.core.Property.$$inherit)init=null;',s='value !== null && value.$$type === "Interface"',bb='var inherit=prop.$$inherit;',bc="', qx.event.type.Data, [computed, old]",bd="var value = parent.",be="$$useinit_",W='computed=undefined;delete this.',X="(value);",Y='",value);',ba='computed=value;',bf=".",bg="$$runtime_",J='Requires exactly one argument!',I=';}',H="$$user_",G='){',F='qx.core.Assert.assertArray(value, msg) || true',E='if(computed===undefined||computed===inherit){',D='qx.core.Assert.assertPositiveNumber(value, msg) || true',C=".prototype",L="Boolean",K=")}",bh='(computed, old, "',bi='return value;',bj='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bk='}else{',bl="if(reg.hasListener(this, '",bm='Does not allow any arguments!',bn=')a[i].',bo="()",bp="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bq='.$$properties.',bE='value !== null && value.$$type === "Theme"',bD="var reg=qx.event.Registration;",bC="())",bB='return null;',bI='qx.core.Assert.assertObject(value, msg) || true',bH='");',bG='qx.core.Assert.assertString(value, msg) || true',bF='var pa=this.getLayoutParent();if(pa)computed=pa.',bK="if (value===undefined) value = parent.",bJ='value !== null && value.$$type === "Class"',bR='qx.core.Assert.assertFunction(value, msg) || true',bS='!==undefined&&',bP='var computed, old;',bQ='var backup=computed;',bN="on",bO="object",bL="$$init_",bM="$$theme_",bT='if(computed===undefined)computed=null;',bU='qx.core.Assert.assertMap(value, msg) || true',cj="qx.aspects",ci='qx.core.Assert.assertNumber(value, msg) || true',cl='if((computed===undefined||computed===inherit)&&',ck="reg.fireEvent(this, '",cn='Null value is not allowed!',cm='qx.core.Assert.assertInteger(value, msg) || true',cp="value",co="rv:1.8.1",ch="shorthand",cg='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cQ='value !== null && value.type !== undefined',cR='value !== null && value.document',cS='throw new Error("Property ',cT="(!this.",cM='qx.core.Assert.assertBoolean(value, msg) || true',cN='if(a[i].',cO="toggle",cP="$$inherit_",cK='var prop=qx.core.Property;',cL=" with incoming value '",f="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",e='if(computed===undefined||computed==inherit)computed=null;',d="qx.core.Property",c="is",b='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(d,{statics:{__nb:{"Boolean":cM,"String":bG,"Number":ci,"Integer":cm,"PositiveNumber":D,"PositiveInteger":v,"Error":cY,"RegExp":cg,"Object":bI,"Array":F,"Map":bU,"Function":bR,"Date":cU,"Node":z,"Element":p,"Document":j,"Window":cR,"Event":cQ,"Class":bJ,"Mixin":m,"Interface":s,"Theme":bE,"Color":g,"Decorator":B,"Font":h},__nc:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:P,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bw,dereference:bt,inheritable:bt,nullable:bt,themeable:bt,refine:bt,init:null,apply:bw,event:bw,check:null,transform:bw,deferredInit:bt,validate:null},$$allowedGroupKeys:{name:bw,group:bO,mode:bw,themeable:bt},$$inheritable:{},__nd:function(df){var dg=this.__ne(df);

if(!dg.length){var dh=qx.lang.Function.empty;
}else{dh=this.__nf(dg);
}df.prototype.$$refreshInheritables=dh;
},__ne:function(di){var dk=[];

while(di){var dj=di.$$properties;

if(dj){for(var name in this.$$inheritable){if(dj[name]&&dj[name].inheritable){dk.push(name);
}}}di=di.superclass;
}return dk;
},__nf:function(dl){var dq=this.$$store.inherit;
var dp=this.$$store.init;
var dn=this.$$method.refresh;
var dm=[q,db];

for(var i=0,l=dl.length;i<l;i++){var name=dl[i];
dm.push(bd,dq[name],cC,bK,dp[name],cC,cF,dn[name],X);
}return new Function(dm.join(cG));
},attachRefreshInheritables:function(dr){dr.prototype.$$refreshInheritables=function(){qx.core.Property.__nd(dr);
return this.$$refreshInheritables();
};
},attachMethods:function(ds,name,dt){dt.group?this.__ng(ds,dt,name):this.__nh(ds,dt,name);
},__ng:function(du,dv,name){var dC=qx.Bootstrap.firstUp(name);
var dB=du.prototype;
var dD=dv.themeable===true;
{};
var dE=[];
var dy=[];

if(dD){var dw=[];
var dA=[];
}var dz=bp;
dE.push(dz);

if(dD){dw.push(dz);
}
if(dv.mode==ch){var dx=f;
dE.push(dx);

if(dD){dw.push(dx);
}}
for(var i=0,a=dv.group,l=a.length;i<l;i++){{};
dE.push(cF,this.$$method.set[a[i]],ca,i,bW);
dy.push(cF,this.$$method.reset[a[i]],cA);

if(dD){{};
dw.push(cF,this.$$method.setThemed[a[i]],ca,i,bW);
dA.push(cF,this.$$method.resetThemed[a[i]],cA);
}}this.$$method.set[name]=cv+dC;
dB[this.$$method.set[name]]=new Function(dE.join(cG));
this.$$method.reset[name]=bu+dC;
dB[this.$$method.reset[name]]=new Function(dy.join(cG));

if(dD){this.$$method.setThemed[name]=cu+dC;
dB[this.$$method.setThemed[name]]=new Function(dw.join(cG));
this.$$method.resetThemed[name]=by+dC;
dB[this.$$method.resetThemed[name]]=new Function(dA.join(cG));
}},__nh:function(dF,dG,name){var dI=qx.Bootstrap.firstUp(name);
var dK=dF.prototype;
{};
if(dG.dereference===undefined&&typeof dG.check===bw){dG.dereference=this.__ni(dG.check);
}var dJ=this.$$method;
var dH=this.$$store;
dH.runtime[name]=bg+name;
dH.user[name]=H+name;
dH.theme[name]=bM+name;
dH.init[name]=bL+name;
dH.inherit[name]=cP+name;
dH.useinit[name]=be+name;
dJ.get[name]=bX+dI;
dK[dJ.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dF,name,bX);
};
dJ.set[name]=cv+dI;
dK[dJ.set[name]]=function(dL){return qx.core.Property.executeOptimizedSetter(this,dF,name,cv,arguments);
};
dJ.reset[name]=bu+dI;
dK[dJ.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dF,name,bu);
};

if(dG.inheritable||dG.apply||dG.event||dG.deferredInit){dJ.init[name]=cs+dI;
dK[dJ.init[name]]=function(dM){return qx.core.Property.executeOptimizedSetter(this,dF,name,cs,arguments);
};
}
if(dG.inheritable){dJ.refresh[name]=cH+dI;
dK[dJ.refresh[name]]=function(dN){return qx.core.Property.executeOptimizedSetter(this,dF,name,cH,arguments);
};
}dJ.setRuntime[name]=ct+dI;
dK[dJ.setRuntime[name]]=function(dO){return qx.core.Property.executeOptimizedSetter(this,dF,name,ct,arguments);
};
dJ.resetRuntime[name]=bs+dI;
dK[dJ.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dF,name,bs);
};

if(dG.themeable){dJ.setThemed[name]=cu+dI;
dK[dJ.setThemed[name]]=function(dP){return qx.core.Property.executeOptimizedSetter(this,dF,name,cu,arguments);
};
dJ.resetThemed[name]=by+dI;
dK[dJ.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dF,name,by);
};
}
if(dG.check===L){dK[cO+dI]=new Function(bY+dJ.set[name]+cT+dJ.get[name]+bC);
dK[c+dI]=new Function(bY+dJ.get[name]+bo);
}},__ni:function(dQ){return !!this.__nc[dQ];
},__nj:function(dR){return this.__nc[dR]||qx.Bootstrap.classIsDefined(dR)||(qx.Interface&&qx.Interface.isDefined(dR));
},__nk:{0:b,1:J,2:dd,3:bm,4:cn,5:U},error:function(dS,dT,dU,dV,dW){var dX=dS.constructor.classname;
var dY=r+dU+N+dX+da+this.$$method[dV][dU]+cL+dW+M;
throw new Error(dY+(this.__nk[dT]||"Unknown reason: "+dT));
},__nl:function(ea,eb,name,ec,ed,ee){var ef=this.$$method[ec][name];
{eb[ef]=new Function(cp,ed.join(cG));
};
if(qx.core.Variant.isSet(cj,bN)){eb[ef]=qx.core.Aspect.wrap(ea.classname+bf+ef,eb[ef],cW);
}qx.Bootstrap.setDisplayName(eb[ef],ea.classname+C,ef);
if(ee===undefined){return ea[ef]();
}else{return ea[ef](ee[0]);
}},executeOptimizedGetter:function(eg,eh,name,ei){var ek=eh.$$properties[name];
var em=eh.prototype;
var ej=[];
var el=this.$$store;
ej.push(cr,el.runtime[name],bA);
ej.push(bv,el.runtime[name],cz);

if(ek.inheritable){ej.push(bx,el.inherit[name],bA);
ej.push(bv,el.inherit[name],cz);
ej.push(cB);
}ej.push(cr,el.user[name],bA);
ej.push(bv,el.user[name],cz);

if(ek.themeable){ej.push(bx,el.theme[name],bA);
ej.push(bv,el.theme[name],cz);
}
if(ek.deferredInit&&ek.init===undefined){ej.push(bx,el.init[name],bA);
ej.push(bv,el.init[name],cz);
}ej.push(cB);

if(ek.init!==undefined){if(ek.inheritable){ej.push(o,el.init[name],cz);

if(ek.nullable){ej.push(t);
}else if(ek.init!==undefined){ej.push(bv,el.init[name],cz);
}else{ej.push(bj,name,cf,eh.classname,ce);
}ej.push(n);
}else{ej.push(bv,el.init[name],cz);
}}else if(ek.inheritable||ek.nullable){ej.push(bB);
}else{ej.push(cS,name,cf,eh.classname,ce);
}return this.__nl(eg,em,name,ei,ej);
},executeOptimizedSetter:function(en,eo,name,ep,eq){var ev=eo.$$properties[name];
var eu=eo.prototype;
var es=[];
var er=ep===cv||ep===cu||ep===ct||(ep===cs&&ev.init===undefined);
var et=ev.apply||ev.event||ev.inheritable;
var ew=this.__nm(ep,name);
this.__nn(es,ev,name,ep,er);

if(er){this.__no(es,eo,ev,name);
}
if(et){this.__np(es,er,ew,ep);
}
if(ev.inheritable){es.push(bb);
}{};

if(!et){this.__nr(es,name,ep,er);
}else{this.__ns(es,ev,name,ep,er);
}
if(ev.inheritable){this.__nt(es,ev,name,ep);
}else if(et){this.__nu(es,ev,name,ep);
}
if(et){this.__nv(es,ev,name);
if(ev.inheritable&&eu._getChildren){this.__nw(es,name);
}}if(er){es.push(bi);
}return this.__nl(en,eu,name,ep,es,eq);
},__nm:function(ex,name){if(ex===ct||ex===bs){var ey=this.$$store.runtime[name];
}else if(ex===cu||ex===by){ey=this.$$store.theme[name];
}else if(ex===cs){ey=this.$$store.init[name];
}else{ey=this.$$store.user[name];
}return ey;
},__nn:function(ez,eA,name,eB,eC){{if(!eA.nullable||eA.check||eA.inheritable){ez.push(cK);
}if(eB===cv){ez.push(V,name,w,eB,Y);
}};
},__no:function(eD,eE,eF,name){if(eF.transform){eD.push(x,eF.transform,cb);
}if(eF.validate){if(typeof eF.validate===bw){eD.push(cw,eF.validate,cb);
}else if(eF.validate instanceof Function){eD.push(eE.classname,bq,name);
eD.push(cV);
}}},__np:function(eG,eH,eI,eJ){var eK=(eJ===bu||eJ===by||eJ===bs);

if(eH){eG.push(cr,eI,k);
}else if(eK){eG.push(cr,eI,y);
}},__nq:undefined,__nr:function(eL,name,eM,eN){if(eM===ct){eL.push(cw,this.$$store.runtime[name],cx);
}else if(eM===bs){eL.push(cr,this.$$store.runtime[name],bA);
eL.push(cq,this.$$store.runtime[name],cz);
}else if(eM===cv){eL.push(cw,this.$$store.user[name],cx);
}else if(eM===bu){eL.push(cr,this.$$store.user[name],bA);
eL.push(cq,this.$$store.user[name],cz);
}else if(eM===cu){eL.push(cw,this.$$store.theme[name],cx);
}else if(eM===by){eL.push(cr,this.$$store.theme[name],bA);
eL.push(cq,this.$$store.theme[name],cz);
}else if(eM===cs&&eN){eL.push(cw,this.$$store.init[name],cx);
}},__ns:function(eO,eP,name,eQ,eR){if(eP.inheritable){eO.push(S,this.$$store.inherit[name],cz);
}else{eO.push(bP);
}eO.push(cr,this.$$store.runtime[name],br);

if(eQ===ct){eO.push(cy,this.$$store.runtime[name],cx);
}else if(eQ===bs){eO.push(cq,this.$$store.runtime[name],cz);
eO.push(cr,this.$$store.user[name],bA);
eO.push(cy,this.$$store.user[name],cz);
eO.push(bx,this.$$store.theme[name],bA);
eO.push(cy,this.$$store.theme[name],cz);
eO.push(bx,this.$$store.init[name],br);
eO.push(cy,this.$$store.init[name],cz);
eO.push(cw,this.$$store.useinit[name],cE);
eO.push(bz);
}else{eO.push(cJ,this.$$store.runtime[name],cz);
if(eQ===cv){eO.push(cw,this.$$store.user[name],cx);
}else if(eQ===bu){eO.push(cq,this.$$store.user[name],cz);
}else if(eQ===cu){eO.push(cw,this.$$store.theme[name],cx);
}else if(eQ===by){eO.push(cq,this.$$store.theme[name],cz);
}else if(eQ===cs&&eR){eO.push(cw,this.$$store.init[name],cx);
}}eO.push(bz);
eO.push(bx,this.$$store.user[name],br);

if(eQ===cv){if(!eP.inheritable){eO.push(cD,this.$$store.user[name],cz);
}eO.push(cy,this.$$store.user[name],cx);
}else if(eQ===bu){if(!eP.inheritable){eO.push(cD,this.$$store.user[name],cz);
}eO.push(cq,this.$$store.user[name],cz);
eO.push(cr,this.$$store.runtime[name],bA);
eO.push(cy,this.$$store.runtime[name],cz);
eO.push(cr,this.$$store.theme[name],bA);
eO.push(cy,this.$$store.theme[name],cz);
eO.push(bx,this.$$store.init[name],br);
eO.push(cy,this.$$store.init[name],cz);
eO.push(cw,this.$$store.useinit[name],cE);
eO.push(bz);
}else{if(eQ===ct){eO.push(cy,this.$$store.runtime[name],cx);
}else if(eP.inheritable){eO.push(cy,this.$$store.user[name],cz);
}else{eO.push(cJ,this.$$store.user[name],cz);
}if(eQ===cu){eO.push(cw,this.$$store.theme[name],cx);
}else if(eQ===by){eO.push(cq,this.$$store.theme[name],cz);
}else if(eQ===cs&&eR){eO.push(cw,this.$$store.init[name],cx);
}}eO.push(bz);
if(eP.themeable){eO.push(bx,this.$$store.theme[name],br);

if(!eP.inheritable){eO.push(cD,this.$$store.theme[name],cz);
}
if(eQ===ct){eO.push(cy,this.$$store.runtime[name],cx);
}else if(eQ===cv){eO.push(cy,this.$$store.user[name],cx);
}else if(eQ===cu){eO.push(cy,this.$$store.theme[name],cx);
}else if(eQ===by){eO.push(cq,this.$$store.theme[name],cz);
eO.push(cr,this.$$store.init[name],br);
eO.push(cy,this.$$store.init[name],cz);
eO.push(cw,this.$$store.useinit[name],cE);
eO.push(bz);
}else if(eQ===cs){if(eR){eO.push(cw,this.$$store.init[name],cx);
}eO.push(cy,this.$$store.theme[name],cz);
}else if(eQ===cH){eO.push(cy,this.$$store.theme[name],cz);
}eO.push(bz);
}eO.push(bx,this.$$store.useinit[name],G);

if(!eP.inheritable){eO.push(cD,this.$$store.init[name],cz);
}
if(eQ===cs){if(eR){eO.push(cy,this.$$store.init[name],cx);
}else{eO.push(cy,this.$$store.init[name],cz);
}}else if(eQ===cv||eQ===ct||eQ===cu||eQ===cH){eO.push(cq,this.$$store.useinit[name],cz);

if(eQ===ct){eO.push(cy,this.$$store.runtime[name],cx);
}else if(eQ===cv){eO.push(cy,this.$$store.user[name],cx);
}else if(eQ===cu){eO.push(cy,this.$$store.theme[name],cx);
}else if(eQ===cH){eO.push(cy,this.$$store.init[name],cz);
}}eO.push(bz);
if(eQ===cv||eQ===ct||eQ===cu||eQ===cs){eO.push(dc);

if(eQ===ct){eO.push(cy,this.$$store.runtime[name],cx);
}else if(eQ===cv){eO.push(cy,this.$$store.user[name],cx);
}else if(eQ===cu){eO.push(cy,this.$$store.theme[name],cx);
}else if(eQ===cs){if(eR){eO.push(cy,this.$$store.init[name],cx);
}else{eO.push(cy,this.$$store.init[name],cz);
}eO.push(cw,this.$$store.useinit[name],cE);
}eO.push(bz);
}},__nt:function(eS,eT,name,eU){eS.push(E);

if(eU===cH){eS.push(ba);
}else{eS.push(bF,this.$$store.inherit[name],cz);
}eS.push(cl);
eS.push(cw,this.$$store.init[name],bS);
eS.push(cw,this.$$store.init[name],bV);
eS.push(cy,this.$$store.init[name],cz);
eS.push(cw,this.$$store.useinit[name],cE);
eS.push(bk);
eS.push(cq,this.$$store.useinit[name],I);
eS.push(bz);
eS.push(cd);
eS.push(O);
eS.push(W,this.$$store.inherit[name],cz);
eS.push(bz);
eS.push(T);
eS.push(cq,this.$$store.inherit[name],cz);
eS.push(u,this.$$store.inherit[name],de);
eS.push(bQ);
if(eT.init!==undefined&&eU!==cs){eS.push(cI,this.$$store.init[name],cC);
}else{eS.push(cc);
}eS.push(e);
},__nu:function(eV,eW,name,eX){if(eX!==cv&&eX!==ct&&eX!==cu){eV.push(bT);
}eV.push(cd);
if(eW.init!==undefined&&eX!==cs){eV.push(cI,this.$$store.init[name],cC);
}else{eV.push(cc);
}},__nv:function(eY,fa,name){if(fa.apply){eY.push(cw,fa.apply,bh,name,bH);
}if(fa.event){eY.push(bD,bl,fa.event,A,ck,fa.event,bc,K);
}},__nw:function(fb,name){fb.push(cX);
fb.push(cN,this.$$method.refresh[name],bn,this.$$method.refresh[name],Q);
fb.push(bz);
}},defer:function(fc){var fe=navigator.userAgent.indexOf(R)!=-1;
var fd=navigator.userAgent.indexOf(co)!=-1;
if(fe||fd){fc.__ni=fc.__nj;
}}});
})();
(function(){var v="qx.aspects",u="on",t=".",s="static",r="constructor",q="[Class ",p="]",o="toString",n="singleton",m="$$init_",e=".prototype",k="destructor",h="extend",d="destruct",c="Class",g="off",f="qx.Class",j="member",b="qx.event.type.Data";
qx.Bootstrap.define(f,{statics:{define:function(name,w){if(!w){var w={};
}if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}if(w.implement&&!(w.implement instanceof Array)){w.implement=[w.implement];
}var x=false;

if(!w.hasOwnProperty(h)&&!w.type){w.type=s;
x=true;
}{};
var y=this.__nB(name,w.type,w.extend,w.statics,w.construct,w.destruct,w.include);
if(w.extend){if(w.properties){this.__nD(y,w.properties,true);
}if(w.members){this.__nF(y,w.members,true,true,false);
}if(w.events){this.__nC(y,w.events,true);
}if(w.include){for(var i=0,l=w.include.length;i<l;i++){this.__nJ(y,w.include[i],false);
}}}if(w.settings){for(var z in w.settings){qx.core.Setting.define(z,w.settings[z]);
}}if(w.variants){for(var z in w.variants){qx.core.Variant.define(z,w.variants[z].allowedValues,w.variants[z].defaultValue);
}}if(w.implement){for(var i=0,l=w.implement.length;i<l;i++){this.__nH(y,w.implement[i]);
}}{};
if(w.defer){w.defer.self=y;
w.defer(y,y.prototype,{add:function(name,A){var B={};
B[name]=A;
qx.Class.__nD(y,B,true);
}});
}return y;
},undefine:function(name){delete this.$$registry[name];
var C=name.split(t);
var E=[window];

for(var i=0;i<C.length;i++){E.push(E[i][C[i]]);
}for(var i=E.length-1;i>=1;i--){var D=E[i];
var parent=E[i-1];

if(qx.Bootstrap.isFunction(D)||qx.Bootstrap.objectGetLength(D)===0){delete parent[C[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(F,G){{};
qx.Class.__nJ(F,G,false);
},patch:function(H,I){{};
qx.Class.__nJ(H,I,true);
},isSubClassOf:function(J,K){if(!J){return false;
}
if(J==K){return true;
}
if(J.prototype instanceof K){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(L){var M=[];

while(L){if(L.$$properties){M.push.apply(M,qx.Bootstrap.getKeys(L.$$properties));
}L=L.superclass;
}return M;
},getByProperty:function(N,name){while(N){if(N.$$properties&&N.$$properties[name]){return N;
}N=N.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(O,P){return O.$$includes&&O.$$includes.indexOf(P)!==-1;
},getByMixin:function(Q,R){var S,i,l;

while(Q){if(Q.$$includes){S=Q.$$flatIncludes;

for(i=0,l=S.length;i<l;i++){if(S[i]===R){return Q;
}}}Q=Q.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(T,U){return !!this.getByMixin(T,U);
},hasOwnInterface:function(V,W){return V.$$implements&&V.$$implements.indexOf(W)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(X){var Y=[];

while(X){if(X.$$implements){Y.push.apply(Y,X.$$flatImplements);
}X=X.superclass;
}return Y;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(ba,bb){var bc=ba.constructor;

if(this.hasInterface(bc,bb)){return true;
}
try{qx.Interface.assertObject(ba,bb);
return true;
}catch(bd){}
try{qx.Interface.assert(bc,bb,false);
return true;
}catch(be){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return q+this.classname+p;
},$$registry:qx.Bootstrap.$$registry,__nx:null,__ny:null,__nz:function(){},__nA:function(){},__nB:function(name,bf,bg,bh,bi,bj,bk){var bn;

if(!bg&&qx.core.Variant.isSet(v,g)){bn=bh||{};
qx.Bootstrap.setDisplayNames(bn,name);
}else{var bn={};

if(bg){if(!bi){bi=this.__nK();
}
if(this.__nM(bg,bk)){bn=this.__nN(bi,name,bf);
}else{bn=bi;
}if(bf===n){bn.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bi,name,r);
}if(bh){qx.Bootstrap.setDisplayNames(bh,name);
var bo;

for(var i=0,a=qx.Bootstrap.getKeys(bh),l=a.length;i<l;i++){bo=a[i];
var bl=bh[bo];

if(qx.core.Variant.isSet(v,u)){if(bl instanceof Function){bl=qx.core.Aspect.wrap(name+t+bo,bl,s);
}bn[bo]=bl;
}else{bn[bo]=bl;
}}}}var bm=qx.Bootstrap.createNamespace(name,bn);
bn.name=bn.classname=name;
bn.basename=bm;
bn.$$type=c;

if(bf){bn.$$classtype=bf;
}if(!bn.hasOwnProperty(o)){bn.toString=this.genericToString;
}
if(bg){qx.Bootstrap.extendClass(bn,bi,bg,name,bm);
if(bj){if(qx.core.Variant.isSet(v,u)){bj=qx.core.Aspect.wrap(name,bj,k);
}bn.$$destructor=bj;
qx.Bootstrap.setDisplayName(bj,name,d);
}}this.$$registry[name]=bn;
return bn;
},__nC:function(bp,bq,br){var bs,bs;
{};

if(bp.$$events){for(var bs in bq){bp.$$events[bs]=bq[bs];
}}else{bp.$$events=bq;
}},__nD:function(bt,bu,bv){var bw;

if(bv===undefined){bv=false;
}var bx=bt.prototype;

for(var name in bu){bw=bu[name];
{};
bw.name=name;
if(!bw.refine){if(bt.$$properties===undefined){bt.$$properties={};
}bt.$$properties[name]=bw;
}if(bw.init!==undefined){bt.prototype[m+name]=bw.init;
}if(bw.event!==undefined){var event={};
event[bw.event]=b;
this.__nC(bt,event,bv);
}if(bw.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bx.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bt);
}}
if(!bw.refine){qx.core.Property.attachMethods(bt,name,bw);
}}},__nE:null,__nF:function(by,bz,bA,bB,bC){var bD=by.prototype;
var bF,bE;
qx.Bootstrap.setDisplayNames(bz,by.classname+e);

for(var i=0,a=qx.Bootstrap.getKeys(bz),l=a.length;i<l;i++){bF=a[i];
bE=bz[bF];
{};
if(bB!==false&&bE instanceof Function&&bE.$$type==null){if(bC==true){bE=this.__nG(bE,bD[bF]);
}else{if(bD[bF]){bE.base=bD[bF];
}bE.self=by;
}
if(qx.core.Variant.isSet(v,u)){bE=qx.core.Aspect.wrap(by.classname+t+bF,bE,j);
}}bD[bF]=bE;
}},__nG:function(bG,bH){if(bH){return function(){var bJ=bG.base;
bG.base=bH;
var bI=bG.apply(this,arguments);
bG.base=bJ;
return bI;
};
}else{return bG;
}},__nH:function(bK,bL){{};
var bM=qx.Interface.flatten([bL]);

if(bK.$$implements){bK.$$implements.push(bL);
bK.$$flatImplements.push.apply(bK.$$flatImplements,bM);
}else{bK.$$implements=[bL];
bK.$$flatImplements=bM;
}},__nI:function(bN){var name=bN.classname;
var bO=this.__nN(bN,name,bN.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bN),l=a.length;i<l;i++){bP=a[i];
bO[bP]=bN[bP];
}bO.prototype=bN.prototype;
var bR=bN.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bR),l=a.length;i<l;i++){bP=a[i];
var bS=bR[bP];
if(bS&&bS.self==bN){bS.self=bO;
}}for(var bP in this.$$registry){var bQ=this.$$registry[bP];

if(!bQ){continue;
}
if(bQ.base==bN){bQ.base=bO;
}
if(bQ.superclass==bN){bQ.superclass=bO;
}
if(bQ.$$original){if(bQ.$$original.base==bN){bQ.$$original.base=bO;
}
if(bQ.$$original.superclass==bN){bQ.$$original.superclass=bO;
}}}qx.Bootstrap.createNamespace(name,bO);
this.$$registry[name]=bO;
return bO;
},__nJ:function(bT,bU,bV){{};

if(this.hasMixin(bT,bU)){return;
}var bY=bT.$$original;

if(bU.$$constructor&&!bY){bT=this.__nI(bT);
}var bX=qx.Mixin.flatten([bU]);
var bW;

for(var i=0,l=bX.length;i<l;i++){bW=bX[i];
if(bW.$$events){this.__nC(bT,bW.$$events,bV);
}if(bW.$$properties){this.__nD(bT,bW.$$properties,bV);
}if(bW.$$members){this.__nF(bT,bW.$$members,bV,bV,bV);
}}if(bT.$$includes){bT.$$includes.push(bU);
bT.$$flatIncludes.push.apply(bT.$$flatIncludes,bX);
}else{bT.$$includes=[bU];
bT.$$flatIncludes=bX;
}},__nK:function(){function ca(){ca.base.apply(this,arguments);
}return ca;
},__nL:function(){return function(){};
},__nM:function(cb,cc){{};
if(cb&&cb.$$includes){var cd=cb.$$flatIncludes;

for(var i=0,l=cd.length;i<l;i++){if(cd[i].$$constructor){return true;
}}}if(cc){var ce=qx.Mixin.flatten(cc);

for(var i=0,l=ce.length;i<l;i++){if(ce[i].$$constructor){return true;
}}}return false;
},__nN:function(cf,name,cg){var ci=function(){var cl=ci;
{};
var ck=cl.$$original.apply(this,arguments);
if(cl.$$includes){var cj=cl.$$flatIncludes;

for(var i=0,l=cj.length;i<l;i++){if(cj[i].$$constructor){cj[i].$$constructor.apply(this,arguments);
}}}{};
return ck;
};

if(qx.core.Variant.isSet(v,u)){var ch=qx.core.Aspect.wrap(name,ci,r);
ci.$$original=cf;
ci.constructor=ch;
ci=ch;
}ci.$$original=cf;
cf.wrapper=ci;
return ci;
}},defer:function(){if(qx.core.Variant.isSet(v,u)){for(var cm in qx.Bootstrap.$$registry){var cn=qx.Bootstrap.$$registry[cm];

for(var co in cn){if(cn[co] instanceof Function){cn[co]=qx.core.Aspect.wrap(cm+t+co,cn[co],s);
}}}}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__lR:0,__lS:0,__lT:false,__lU:0,__lV:null,__lW:null,setMaxEntries:function(c){this.__lW=c;
this.clear();
},getMaxEntries:function(){return this.__lW;
},addEntry:function(d){this.__lV[this.__lR]=d;
this.__lR=this.__lX(this.__lR,1);
var e=this.getMaxEntries();

if(this.__lS<e){this.__lS++;
}if(this.__lT&&(this.__lU<e)){this.__lU++;
}},mark:function(){this.__lT=true;
this.__lU=0;
},clearMark:function(){this.__lT=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__lS){f=this.__lS;
}if(g&&this.__lT&&(f>this.__lU)){f=this.__lU;
}
if(f>0){var i=this.__lX(this.__lR,-1);
var h=this.__lX(i,-f+1);
var j;

if(h<=i){j=this.__lV.slice(h,i+1);
}else{j=this.__lV.slice(h,this.__lS).concat(this.__lV.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__lV=new Array(this.getMaxEntries());
this.__lS=0;
this.__lU=0;
this.__lR=0;
},__lX:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);
},members:{setMaxMessages:function(c){this.setMaxEntries(c);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var g="mshtml",f="qx.client",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Class.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}var o=new m;
if(qx.core.Variant.isSet(f,g)){if(k.item){for(var i=n||0,l=k.length;i<l;i++){o.push(k[i]);
}return o;
}}if(Object.prototype.toString.call(k)===e&&n==null){o.push.apply(o,k);
}else{o.push.apply(o,Array.prototype.slice.call(k,n||0));
}return o;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(r){if(qx.core.Variant.isSet(f,g)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(t){var v=t.length;
var u=qx.lang.Array.clone(t);
switch(v){case 1:u[1]=u[2]=u[3]=u[0];
break;
case 2:u[2]=u[0];
case 3:u[3]=u[1];
}return u;
},clone:function(w){return w.concat();
},insertAt:function(x,y,i){x.splice(i,0,y);
return x;
},insertBefore:function(z,A,B){var i=z.indexOf(B);

if(i==-1){z.push(A);
}else{z.splice(i,0,A);
}return z;
},insertAfter:function(C,D,E){var i=C.indexOf(E);

if(i==-1||i==(C.length-1)){C.push(D);
}else{C.splice(i+1,0,D);
}return C;
},removeAt:function(F,i){return F.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(H,I){{};
Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){{};

for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

if(L!=-1){J.splice(L,1);
}}return J;
},remove:function(N,O){var i=N.indexOf(O);

if(i!=-1){N.splice(i,1);
return O;
}},contains:function(P,Q){return P.indexOf(Q)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(V){{};
var i,X=V.length,W=V[0];

for(i=1;i<X;i++){if(V[i]>W){W=V[i];
}}return W===undefined?null:W;
},min:function(Y){{};
var i,bb=Y.length,ba=Y[0];

for(i=1;i<bb;i++){if(Y[i]<ba){ba=Y[i];
}}return ba===undefined?null:ba;
},unique:function(bc){var bm=[],be={},bh={},bj={};
var bi,bd=0;
var bn=c+qx.lang.Date.now();
var bf=false,bl=false,bo=false;
for(var i=0,bk=bc.length;i<bk;i++){bi=bc[i];
if(bi===null){if(!bf){bf=true;
bm.push(bi);
}}else if(bi===undefined){}else if(bi===false){if(!bl){bl=true;
bm.push(bi);
}}else if(bi===true){if(!bo){bo=true;
bm.push(bi);
}}else if(typeof bi===a){if(!be[bi]){be[bi]=1;
bm.push(bi);
}}else if(typeof bi===b){if(!bh[bi]){bh[bi]=1;
bm.push(bi);
}}else{bg=bi[bn];

if(bg==null){bg=bi[bn]=bd++;
}
if(!bj[bg]){bj[bg]=bi;
bm.push(bi);
}}}for(var bg in bj){try{delete bj[bg][bn];
}catch(bp){try{bj[bg][bn]=null;
}catch(bq){throw new Error("Cannot clean-up map entry doneObjects["+bg+"]["+bn+"]");
}}}return bm;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+a;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+d+j+f;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+e+j+f;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+d+j+f;
}}for(var j in k){if(k[j]==h){return k.classname+e+j+f;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+f;
}return c;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){{};
if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){{};
var p=qx.lang.Array.fromArguments(arguments);
if(n.args){p=n.args.concat(p);
}
if(n.delay||n.periodical){var o=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,p);
});

if(n.delay){return window.setTimeout(o,n.delay);
}
if(n.periodical){return window.setInterval(o,n.periodical);
}}else if(n.attempt){var q=false;

try{q=m.apply(n.self||this,p);
}catch(r){}return q;
}else{return m.apply(n.self||this,p);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);
};
}else{var y=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,y);
w.apply(self||this,z);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var j=":",h="qx.client",g="anonymous",f="...",e="qx.dev.StackTrace",d="",c="\n",b="/source/class/",a=".";
qx.Class.define(e,{statics:{getStackTrace:qx.core.Variant.select(h,{"gecko":function(){try{throw new Error();
}catch(x){var r=this.getStackTraceFromError(x);
qx.lang.Array.removeAt(r,0);
var p=this.getStackTraceFromCaller(arguments);
var n=p.length>r.length?p:r;

for(var i=0;i<Math.min(p.length,r.length);i++){var o=p[i];

if(o.indexOf(g)>=0){continue;
}var v=o.split(j);

if(v.length!=2){continue;
}var t=v[0];
var m=v[1];
var l=r[i];
var w=l.split(j);
var s=w[0];
var k=w[1];

if(qx.Class.getByName(s)){var q=s;
}else{q=t;
}var u=q+j;

if(m){u+=m+j;
}u+=k;
n[i]=u;
}return n;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var y;

try{y.bar();
}catch(A){var z=this.getStackTraceFromError(A);
qx.lang.Array.removeAt(z,0);
return z;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(h,{"opera":function(B){return [];
},"default":function(C){var H=[];
var G=qx.lang.Function.getCaller(C);
var D={};

while(G){var E=qx.lang.Function.getName(G);
H.push(E);

try{G=G.caller;
}catch(I){break;
}
if(!G){break;
}var F=qx.core.ObjectRegistry.toHashCode(G);

if(D[F]){H.push(f);
break;
}D[F]=G;
}return H;
}}),getStackTraceFromError:qx.core.Variant.select(h,{"gecko":function(J){if(!J.stack){return [];
}var P=/@(.+):(\d+)$/gm;
var K;
var L=[];

while((K=P.exec(J.stack))!=null){var M=K[1];
var O=K[2];
var N=this.__kI(M);
L.push(N+j+O);
}return L;
},"webkit":function(Q){if(Q.sourceURL&&Q.line){return [this.__kI(Q.sourceURL)+j+Q.line];
}else{return [];
}},"opera":function(R){if(R.message.indexOf("Backtrace:")<0){return [];
}var T=[];
var U=qx.lang.String.trim(R.message.split("Backtrace:")[1]);
var V=U.split(c);

for(var i=0;i<V.length;i++){var S=V[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(S&&S.length>=2){var X=S[1];
var W=this.__kI(S[2]);
T.push(W+j+X);
}}return T;
},"default":function(){return [];
}}),__kI:function(Y){var bc=b;
var ba=Y.indexOf(bc);
var bb=(ba==-1)?Y:Y.substring(ba+bc.length).replace(/\//g,a).replace(/\.js$/,d);
return bb;
}}});
})();
(function(){var k="",j="g",h="0",g='\\$1',f="%",e='-',d="qx.lang.String",c=' ',b='\n',a="undefined";
qx.Class.define(d,{statics:{camelCase:function(l){return l.replace(/\-([a-z])/g,function(m,n){return n.toUpperCase();
});
},hyphenate:function(o){return o.replace(/[A-Z]/g,function(p){return (e+p.charAt(0).toLowerCase());
});
},capitalize:function(q){return q.replace(/\b[a-z]/g,function(r){return r.toUpperCase();
});
},clean:function(s){return this.trim(s.replace(/\s+/g,c));
},trimLeft:function(t){return t.replace(/^\s+/,k);
},trimRight:function(u){return u.replace(/\s+$/,k);
},trim:function(v){return v.replace(/^\s+|\s+$/g,k);
},startsWith:function(w,x){return w.indexOf(x)===0;
},endsWith:function(y,z){return y.substring(y.length-z.length,y.length)===z;
},repeat:function(A,B){return A.length>0?new Array(B+1).join(A):k;
},pad:function(C,length,D){var E=length-C.length;

if(E>0){if(typeof D===a){D=h;
}return this.repeat(D,E)+C;
}else{return C;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(F,G){return F.indexOf(G)!=-1;
},format:function(H,I){var J=H;

for(var i=0;i<I.length;i++){J=J.replace(new RegExp(f+(i+1),j),I[i]+k);
}return J;
},escapeRegexpChars:function(K){return K.replace(/([.*+?^${}()|[\]\/\\])/g,g);
},toArray:function(L){return L.split(/\B|\b/g);
},stripTags:function(M){return M.replace(/<\/?[^>]+>/gi,k);
},stripScripts:function(N,O){var Q=k;
var P=N.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){Q+=arguments[1]+b;
return k;
});

if(O===true){qx.lang.Function.globalEval(Q);
}return P;
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__ro:A,setLevel:function(I){this.__ro=I;
},getLevel:function(){return this.__ro;
},setTreshold:function(J){this.__rr.setMaxMessages(J);
},getTreshold:function(){return this.__rr.getMaxMessages();
},__rp:{},__rq:0,register:function(K){if(K.$$id){return;
}var M=this.__rq++;
this.__rp[M]=K;
K.$$id=M;
var L=this.__rs;
var N=this.__rr.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__ro]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__rp[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__rt(A,arguments);
},info:function(S,T){qx.log.Logger.__rt(e,arguments);
},warn:function(U,V){qx.log.Logger.__rt(r,arguments);
},error:function(W,X){qx.log.Logger.__rt(j,arguments);
},trace:function(Y){qx.log.Logger.__rt(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
{};
},deprecatedClassWarning:function(bd,be){var bf;
{};
},deprecatedEventWarning:function(bg,event,bh){var bi;
{};
},deprecatedMixinWarning:function(bj,bk){var bl;
{};
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
{};
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
{};
},clear:function(){this.__rr.clearHistory();
},__rr:new qx.log.appender.RingBuffer(50),__rs:{debug:0,info:1,warn:2,error:3},__rt:function(bv,bw){var bB=this.__rs;

if(bB[bv]<bB[this.__ro]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__rv(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__rr.process(bD);
var bE=this.__rp;

for(var bz in bE){bE[bz].process(bD);
}},__ru:function(bF){if(bF===undefined){return y;
}else if(bF===null){return b;
}
if(bF.$$type){return a;
}var bG=typeof bF;

if(bG===C||bG==c||bG===H||bG===B){return bG;
}else if(bG===w){if(bF.nodeType){return k;
}else if(bF.classname){return d;
}else if(bF instanceof Array){return g;
}else if(bF instanceof Error){return j;
}else if(bF instanceof Date){return E;
}else{return z;
}}
if(bF.toString){return G;
}return D;
},__rv:function(bH,bI){var bP=this.__ru(bH);
var bL=D;
var bK=[];

switch(bP){case b:case y:bL=bP;
break;
case c:case H:case B:case E:bL=bH;
break;
case k:if(bH.nodeType===9){bL=o;
}else if(bH.nodeType===3){bL=m+bH.nodeValue+F;
}else if(bH.nodeType===1){bL=bH.nodeName.toLowerCase();

if(bH.id){bL+=q+bH.id;
}}else{bL=k;
}break;
case C:bL=qx.lang.Function.getName(bH)||bP;
break;
case d:bL=bH.basename+t+bH.$$hash+F;
break;
case a:case G:bL=bH.toString();
break;
case j:bK=qx.dev.StackTrace.getStackTraceFromError(bH);
bL=bH.toString();
break;
case g:if(bI){bL=[];

for(var i=0,l=bH.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bL.push(this.__rv(bH[i],false));
}}else{bL=n+bH.length+x;
}break;
case z:if(bI){var bJ;
var bO=[];

for(var bN in bH){bO.push(bN);
}bO.sort();
bL=[];

for(var i=0,l=bO.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bN=bO[i];
bJ=this.__rv(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__rt(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__oH:{},__oI:0,__oJ:[],register:function(f){var j=this.__oH;

if(!j){return;
}var h=f.$$hash;

if(h==null){var g=this.__oJ;

if(g.length>0){h=g.pop();
}else{h=(this.__oI++)+d;
}f.$$hash=h;
}{};
j[h]=f;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__oH;

if(n&&n[m]){delete n[m];
this.__oJ.push(m);
}try{delete k.$$hash;
}catch(o){if(k.removeAttribute){k.removeAttribute(e);
}}},toHashCode:function(p){{};
var r=p.$$hash;

if(r!=null){return r;
}var q=this.__oJ;

if(q.length>0){r=q.pop();
}else{r=(this.__oI++)+d;
}return p.$$hash=r;
},clearHashCode:function(s){{};
var t=s.$$hash;

if(t!=null){this.__oJ.push(t);
try{delete s.$$hash;
}catch(u){if(s.removeAttribute){s.removeAttribute(e);
}}}},fromHashCode:function(v){return this.__oH[v]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__oH;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(A){qx.Bootstrap.error(this,"Could not dispose object "+w.toString()+": "+A);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__oH;
},getRegistry:function(){return this.__oH;
}}});
})();
(function(){var j="on",i="qx.client",h="gecko",g="function",f="HTMLEvents",d="mousedown",c="qx.bom.Event",b="return;",a="mouseover";
qx.Class.define(c,{statics:{addNativeListener:function(k,l,m,n){if(k.addEventListener){k.addEventListener(l,m,!!n);
}else if(k.attachEvent){k.attachEvent(j+l,m);
}},removeNativeListener:function(o,p,q,r){if(o.removeEventListener){o.removeEventListener(p,q,!!r);
}else if(o.detachEvent){try{o.detachEvent(j+p,q);
}catch(e){if(e.number!==-2146828218){throw e;
}}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if(qx.core.Variant.isSet(i,h)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===a){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if(qx.core.Variant.isSet(i,h)&&qx.bom.client.Engine.VERSION>=1.9&&e.type==d&&e.button==2){return;
}e.preventDefault();
if(qx.core.Variant.isSet(i,h)&&qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(s){}}}else{try{e.keyCode=0;
}catch(t){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(u,v){if(document.createEvent){var w=document.createEvent(f);
w.initEvent(v,true,true);
return !u.dispatchEvent(w);
}else{var w=document.createEventObject();
return u.fireEvent(j+v,w);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(x,y){return x.hasOwnProperty(j+y);
},"default":function(z,A){var B=j+A;
var C=(B in z);

if(!C){C=typeof z[B]==g;

if(!C&&z.setAttribute){z.setAttribute(B,b);
C=typeof z[B]==g;
z.removeAttribute(B);
}}return C;
}})}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="__rA",h="__rB",g="c",c="DOM_",f="WIN_",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__rw=s;
this.__rx=qx.core.ObjectRegistry.toHashCode(s);
this.__ry=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__rz={};
this.__rA={};
this.__rB={};
this.__rC={};
},statics:{__rD:0,getNextUniqueId:function(){return (this.__rD++)+o;
}},members:{__ry:null,__rz:null,__rB:null,__rE:null,__rA:null,__rC:null,__rw:null,__rx:null,getWindow:function(){return this.__rw;
},getWindowId:function(){return this.__rx;
},getHandler:function(u){var v=this.__rA[u.classname];

if(v){return v;
}return this.__rA[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__rB[w.classname];

if(x){return x;
}return this.__rB[w.classname]=new w(this,this.__ry);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__rz[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__rz[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==g;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__rz[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__rF(P,W,R);
}else{this.__rG(P,W,R);
}}}},hasListener:function(Y,ba,bb){{};
var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__rz[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return bd&&bd.length>0;
},importListeners:function(bg,bh){{};
var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__rz[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__rF(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__rD++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
{};
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__rz[bx];

if(!bz){bz=this.__rz[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__rF(bp,bq,bs);
}var by=(qx.event.Manager.__rD++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=c+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__rw){bF=true;
bL=f+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__rC;

if(bH[bL]){return bH[bL];
}var bK=this.__ry.getHandlers();
var bG=qx.event.IEventHandler;
var bI,bJ,bE,bD;

for(var i=0,l=bK.length;i<l;i++){bI=bK[i];
bE=bI.SUPPORTED_TYPES;

if(bE&&!bE[bB]){continue;
}bD=bI.TARGET_CHECK;

if(bD){var bM=false;

if(bN&&((bD&bG.TARGET_DOMNODE)!=0)){bM=true;
}else if(bF&&((bD&bG.TARGET_WINDOW)!=0)){bM=true;
}else if(bO&&((bD&bG.TARGET_OBJECT)!=0)){bM=true;
}else if(bC&&((bD&bG.TARGET_DOCUMENT)!=0)){bM=true;
}
if(!bM){continue;
}}bJ=this.getHandler(bK[i]);

if(bI.IGNORE_CAN_HANDLE||bJ.canHandleEvent(bA,bB)){bH[bL]=bJ;
return bJ;
}}return null;
},__rF:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}{};
},removeListener:function(bT,bU,bV,self,bW){var cb;
{};
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__rz[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__rG(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
{};
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__rz[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__rG(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__rz[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__rG(cq,cv,cr);
}}delete this.__rz[cu];
return true;
},deleteAllListeners:function(cx){delete this.__rz[cx];
},__rG:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}{};
},dispatchEvent:function(cC,event){var cH;
{};
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__ry.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){{};
return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__ry.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,j);
qx.util.DisposeUtil.disposeMap(this,h);
this.__rz=this.__rw=this.__rE=null;
this.__ry=this.__rC=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===
this.DOCUMENT?e:
e.ownerDocument||e.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(h){return this.getDocument(h).documentElement;
},getBodyElement:function(j){return this.getDocument(j).body;
},isNode:function(k){return !!(k&&k.nodeType!=null);
},isElement:function(l){return !!(l&&l.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(p,q){if(!q||!p||!p.nodeName){return false;
}return q.toLowerCase()==qx.dom.Node.getName(p);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(s){if(!s||!s.nodeType){return null;
}
switch(s.nodeType){case 1:var i,a=[],t=s.childNodes,length=t.length;

for(i=0;i<length;i++){a[i]=this.getText(t[i]);
}return a.join(b);
case 2:return s.nodeValue;
break;
case 3:return s.nodeValue;
break;
}return null;
},isBlockNode:function(u){if(!qx.dom.Node.isElement(u)){return false;
}u=qx.dom.Node.getName(u);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(u);
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__rl:{},getManager:function(d){if(d==null){{};
d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__rl[f];

if(!e){e=new qx.event.Manager(d,this);
this.__rl[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__rl[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){{};
if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
{};
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){{};
var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__rm:[],addHandler:function(Q){{};
this.__rm.push(Q);
this.__rm.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__rm;
},__rn:[],addDispatcher:function(R,S){{};
this.__rn.push(R);
this.__rn.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__rn;
}}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__jv=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__jv:null,message:null,getComment:function(){return this.__jv;
},toString:function(){return this.__jv+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__la=qx.dev.StackTrace.getStackTrace();
},members:{__la:null,getStackTrace:function(){return this.__la;
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bw="' but found ",bv="The value '",bu=" != ",bt="qx.core.Object",bs="Expected value to be an array but found ",br=") was fired.",bq="Expected value to be an integer >= 0 but found ",bp="' to be not equal with '",bo="' to '",bn="qx.ui.core.Widget",w="Called assertTrue with '",x="Expected value to be a map but found ",u="The function did not raise an exception!",v="Expected value to be undefined but found ",s="Expected value to be a DOM element but found  '",t="Expected value to be a regular expression but found ",q="' to implement the interface '",r="Expected value to be null but found ",E="Invalid argument 'type'",F="Called assert with 'false'",R="Assertion error! ",N="Expected value to be a string but found ",ba="null",U="' but found '",bj="' must must be a key of the map '",bf="The String '",J="Expected value not to be undefined but found ",bm="qx.util.ColorUtil",bl=": ",bk="The raised exception does not have the expected type! ",I=") not fired.",L="qx.core.Assert",M="Expected value to be typeof object but found ",P="' (identical) but found '",S="' must have any of the values defined in the array '",V="Expected value to be a number but found ",bc="Called assertFalse with '",bh="]",y="Expected value to be a qooxdoo object but found ",z="' arguments.",K="Expected value not to be null but found ",Y="Array[",X="' does not match the regular expression '",W="' to be not identical with '",be="' arguments but found '",bd="', which cannot be converted to a CSS color!",T="Expected object '",bb="qx.core.AssertionError",a="Expected value to be a boolean but found ",bg="))!",A="Expected value to be a qooxdoo widget but found ",B="Expected value '%1' to be in the range '%2'..'%3'!",O="Expected value to be typeof '",b="Expected value to be typeof function but found ",c="Expected value to be an integer but found ",H="Called fail().",C="The parameter 're' must be a string or a regular expression.",D="Expected value to be a number >= 0 but found ",G="Expected value to be instanceof '",Q="Wrong number of arguments given. Expected '",bi="object";
qx.Class.define(L,{statics:{__lv:true,__lw:function(bx,by){var bz=p;

for(var i=1,l=arguments.length;i<l;i++){bz=bz+this.__lx(arguments[i]);
}var bB=R+bx+bl+bz;

if(this.__lv){qx.Bootstrap.error(bB);
}
if(qx.Class.isDefined(bb)){var bA=new qx.core.AssertionError(bx,bz);

if(this.__lv){qx.Bootstrap.error("Stack trace: \n"+bA.getStackTrace());
}throw bA;
}else{throw new Error(bB);
}},__lx:function(bC){var bD;

if(bC===null){bD=ba;
}else if(qx.lang.Type.isArray(bC)&&bC.length>10){bD=Y+bC.length+bh;
}else if((bC instanceof Object)&&(bC.toString==null)){bD=qx.lang.Json.stringify(bC,null,2);
}else{try{bD=bC.toString();
}catch(e){bD=p;
}}return bD;
},assert:function(bE,bF){bE==true||this.__lw(bF||p,F);
},fail:function(bG){this.__lw(bG||p,H);
},assertTrue:function(bH,bI){(bH===true)||this.__lw(bI||p,w,bH,m);
},assertFalse:function(bJ,bK){(bJ===false)||this.__lw(bK||p,bc,bJ,m);
},assertEquals:function(bL,bM,bN){bL==bM||this.__lw(bN||p,k,bL,U,bM,n);
},assertNotEquals:function(bO,bP,bQ){bO!=bP||this.__lw(bQ||p,k,bO,bp,bP,n);
},assertIdentical:function(bR,bS,bT){bR===bS||this.__lw(bT||p,k,bR,P,bS,n);
},assertNotIdentical:function(bU,bV,bW){bU!==bV||this.__lw(bW||p,k,bU,W,bV,n);
},assertNotUndefined:function(bX,bY){bX!==undefined||this.__lw(bY||p,J,bX,o);
},assertUndefined:function(ca,cb){ca===undefined||this.__lw(cb||p,v,ca,o);
},assertNotNull:function(cc,cd){cc!==null||this.__lw(cd||p,K,cc,o);
},assertNull:function(ce,cf){ce===null||this.__lw(cf||p,r,ce,o);
},assertJsonEquals:function(cg,ch,ci){this.assertEquals(qx.lang.Json.stringify(cg),qx.lang.Json.stringify(ch),ci);
},assertMatch:function(cj,ck,cl){this.assertString(cj);
this.assert(qx.lang.Type.isRegExp(ck)||qx.lang.Type.isString(ck),C);
cj.search(ck)>=0||this.__lw(cl||p,bf,cj,X,ck.toString(),n);
},assertArgumentsCount:function(cm,cn,co,cp){var cq=cm.length;
(cq>=cn&&cq<=co)||this.__lw(cp||p,Q,cn,bo,co,be,arguments.length,z);
},assertEventFired:function(cr,event,cs,ct,cu){var cw=false;
var cv=function(e){if(ct){ct.call(cr,e);
}cw=true;
};
var cx;

try{cx=cr.addListener(event,cv,cr);
cs.call();
}catch(cy){throw cy;
}finally{try{cr.removeListenerById(cx);
}catch(cz){}}cw===true||this.__lw(cu||p,f,event,I);
},assertEventNotFired:function(cA,event,cB,cC){var cE=false;
var cD=function(e){cE=true;
};
var cF=cA.addListener(event,cD,cA);
cB.call();
cE===false||this.__lw(cC||p,f,event,br);
cA.removeListenerById(cF);
},assertException:function(cG,cH,cI,cJ){var cH=cH||Error;
var cK;

try{this.__lv=false;
cG();
}catch(cL){cK=cL;
}finally{this.__lv=true;
}
if(cK==null){this.__lw(cJ||p,u);
}cK instanceof cH||this.__lw(cJ||p,bk,cH,bu,cK);

if(cI){this.assertMatch(cK.toString(),cI,cJ);
}},assertInArray:function(cM,cN,cO){cN.indexOf(cM)!==-1||this.__lw(cO||p,bv,cM,S,cN,m);
},assertArrayEquals:function(cP,cQ,cR){this.assertArray(cP,cR);
this.assertArray(cQ,cR);
this.assertEquals(cP.length,cQ.length,cR);

for(var i=0;i<cP.length;i++){this.assertIdentical(cP[i],cQ[i],cR);
}},assertKeyInMap:function(cS,cT,cU){cT[cS]!==undefined||this.__lw(cU||p,bv,cS,bj,cT,m);
},assertFunction:function(cV,cW){qx.lang.Type.isFunction(cV)||this.__lw(cW||p,b,cV,o);
},assertString:function(cX,cY){qx.lang.Type.isString(cX)||this.__lw(cY||p,N,cX,o);
},assertBoolean:function(da,db){qx.lang.Type.isBoolean(da)||this.__lw(db||p,a,da,o);
},assertNumber:function(dc,dd){(qx.lang.Type.isNumber(dc)&&isFinite(dc))||this.__lw(dd||p,V,dc,o);
},assertPositiveNumber:function(de,df){(qx.lang.Type.isNumber(de)&&isFinite(de)&&de>=0)||this.__lw(df||p,D,de,o);
},assertInteger:function(dg,dh){(qx.lang.Type.isNumber(dg)&&isFinite(dg)&&dg%1===0)||this.__lw(dh||p,c,dg,o);
},assertPositiveInteger:function(di,dj){var dk=(qx.lang.Type.isNumber(di)&&isFinite(di)&&di%1===0&&di>=0);
dk||this.__lw(dj||p,bq,di,o);
},assertInRange:function(dl,dm,dn,dp){(dl>=dm&&dl<=dn)||this.__lw(dp||p,qx.lang.String.format(B,[dl,dm,dn]));
},assertObject:function(dq,dr){var ds=dq!==null&&(qx.lang.Type.isObject(dq)||typeof dq===bi);
ds||this.__lw(dr||p,M,(dq),o);
},assertArray:function(dt,du){qx.lang.Type.isArray(dt)||this.__lw(du||p,bs,dt,o);
},assertMap:function(dv,dw){qx.lang.Type.isObject(dv)||this.__lw(dw||p,x,dv,o);
},assertRegExp:function(dx,dy){qx.lang.Type.isRegExp(dx)||this.__lw(dy||p,t,dx,o);
},assertType:function(dz,dA,dB){this.assertString(dA,E);
typeof (dz)===dA||this.__lw(dB||p,O,dA,bw,dz,o);
},assertInstance:function(dC,dD,dE){var dF=dD.classname||dD+p;
dC instanceof dD||this.__lw(dE||p,G,dF,bw,dC,o);
},assertInterface:function(dG,dH,dI){qx.Class.implementsInterface(dG,dH)||this.__lw(dI||p,T,dG,q,dH,n);
},assertCssColor:function(dJ,dK,dL){var dM=qx.Class.getByName(bm);

if(!dM){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dO=dM.stringToRgb(dJ);

try{var dN=dM.stringToRgb(dK);
}catch(dQ){this.__lw(dL||p,d,dJ,j,dO.join(h),g,dK,bd);
}var dP=dO[0]==dN[0]&&dO[1]==dN[1]&&dO[2]==dN[2];
dP||this.__lw(dL||p,d,dO,j,dO.join(h),g,dK,j,dN.join(h),bg);
},assertElement:function(dR,dS){!!(dR&&dR.nodeType===1)||this.__lw(dS||p,s,dR,n);
},assertQxObject:function(dT,dU){this.__ly(dT,bt)||this.__lw(dU||p,y,dT,o);
},assertQxWidget:function(dV,dW){this.__ly(dV,bn)||this.__lw(dW||p,A,dV,o);
},__ly:function(dX,dY){if(!dX){return false;
}var ea=dX.constructor;

while(ea){if(ea.classname===dY){return true;
}ea=ea.superclass;
}return false;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__mT:null,__mU:null,__mV:null,__mW:null,stringify:function(bb,bc,bd){this.__mT=p;
this.__mU=p;
this.__mW=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__mU+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__mU=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__mV=bc;
}else{this.__mV=null;
}return this.__mX(p,{'':bb});
},__mX:function(be,bf){var bi=this.__mT,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__mV===e){bj=this.__mV.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__mY(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__mT+=this.__mU;
bg=[];

if(this.__mW.indexOf(bj)!==-1){throw new TypeError(V);
}this.__mW.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__mX(i,bj)||h;
}this.__mW.pop();
if(bg.length===0){var bh=s;
}else if(this.__mT){bh=E+this.__mT+bg.join(Y+this.__mT)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__mT=bi;
return bh;
case z:this.__mT+=this.__mU;
bg=[];

if(this.__mW.indexOf(bj)!==-1){throw new TypeError(V);
}this.__mW.push(bj);
if(this.__mV&&typeof this.__mV===f){var length=this.__mV.length;

for(var i=0;i<length;i+=1){var k=this.__mV[i];

if(typeof k===W){var v=this.__mX(k,bj);

if(v){bg.push(this.__mY(k)+(this.__mT?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__mX(k,bj);

if(v){bg.push(this.__mY(k)+(this.__mT?g:m)+v);
}}}}this.__mW.pop();
if(bg.length===0){var bh=A;
}else if(this.__mT){bh=w+this.__mT+bg.join(Y+this.__mT)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__mT=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__mY:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+
bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__na({'':j},p,bs):j;
}throw new SyntaxError(P);
},__na:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__na(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){{};
this.__sF=b+(c&&c.message?c.message:c);
Error.call(this,this.__sF);
this.__sG=d;
this.__sH=c;
},members:{__sH:null,__sG:null,__sF:null,toString:function(){return this.__sF;
},getArguments:function(){return this.__sG;
},getSourceException:function(){return this.__sH;
}},destruct:function(){this.__sH=null;
this.__sG=null;
this.__sF=null;
}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(d,f){this.__pB=d||null;
this.__pC=f||window;

if(qx.core.Setting.get(c)===b){if(d&&window.onerror){var g=qx.Bootstrap.bind(this.__pE,this);

if(this.__pD==null){this.__pD=window.onerror;
}var self=this;
window.onerror=function(e){self.__pD(e);
g(e);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__pE,this);
}if(this.__pB==null){if(this.__pD!=null){window.onerror=this.__pD;
this.__pD=null;
}else{window.onerror=null;
}}}},__pE:function(h,i,j){if(this.__pB){this.handleError(new qx.core.WindowError(h,i,j));
return true;
}},observeMethod:function(k){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__pB){return k.apply(this,arguments);
}
try{return k.apply(this,arguments);
}catch(l){self.handleError(new qx.core.GlobalError(l,arguments));
}};
}else{return k;
}},handleError:function(m){if(this.__pB){this.__pB.call(this.__pC,m);
}}},defer:function(n){qx.core.Setting.define(c,b);
n.setErrorHandler(null,null);
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var q="set",p="get",o="reset",n="MSIE 6.0",m="info",k="qx.core.Object",j="error",h="warn",g="]",f="debug",b="[",d="$$user_",c="rv:1.8.1",a="Object";
qx.Class.define(k,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+b+this.$$hash+g;
},base:function(r,s){{};

if(arguments.length===1){return r.callee.base.call(this);
}else{return r.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(t){return t.callee.self;
},clone:function(){var v=this.constructor;
var u=new v;
var x=qx.Class.getProperties(v);
var w=qx.core.Property.$$store.user;
var y=qx.core.Property.$$method.set;
var name;
for(var i=0,l=x.length;i<l;i++){name=x[i];

if(this.hasOwnProperty(w[name])){u[y[name]](this[w[name]]);
}}return u;
},set:function(z,A){var C=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(z)){if(!this[C[z]]){if(this[q+qx.Bootstrap.firstUp(z)]!=undefined){this[q+qx.Bootstrap.firstUp(z)](A);
return this;
}{};
}return this[C[z]](A);
}else{for(var B in z){if(!this[C[B]]){if(this[q+qx.Bootstrap.firstUp(B)]!=undefined){this[q+qx.Bootstrap.firstUp(B)](z[B]);
continue;
}{};
}this[C[B]](z[B]);
}return this;
}},get:function(D){var E=qx.core.Property.$$method.get;

if(!this[E[D]]){if(this[p+qx.Bootstrap.firstUp(D)]!=undefined){return this[p+qx.Bootstrap.firstUp(D)]();
}{};
}return this[E[D]]();
},reset:function(F){var G=qx.core.Property.$$method.reset;

if(!this[G[F]]){if(this[o+qx.Bootstrap.firstUp(F)]!=undefined){this[o+qx.Bootstrap.firstUp(F)]();
return;
}{};
}this[G[F]]();
},__kT:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__kT.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__kT.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__kT.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__kT.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__kT.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__kT.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__kT.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__kT.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__kU:null,setUserData:function(bg,bh){if(!this.__kU){this.__kU={};
}this.__kU[bg]=bh;
},getUserData:function(bi){if(!this.__kU){return null;
}var bj=this.__kU[bi];
return bj===undefined?null:bj;
},__kV:qx.log.Logger,debug:function(bk){this.__kW(f,arguments);
},info:function(bl){this.__kW(m,arguments);
},warn:function(bm){this.__kW(h,arguments);
},error:function(bn){this.__kW(j,arguments);
},trace:function(){this.__kV.trace(this);
},__kW:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__kV[bo].apply(this.__kV,bq);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bv,bt,bs,bw;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bu=this.constructor;
var br;

while(bu.superclass){if(bu.$$destructor){bu.$$destructor.call(this);
}if(bu.$$includes){br=bu.$$flatIncludes;

for(var i=0,l=br.length;i<l;i++){if(br[i].$$destructor){br[i].$$destructor.call(this);
}}}bu=bu.superclass;
}if(this.__kX){this.__kX();
}{};
},__kX:null,__kY:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bC,bD){{};
var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__kX=bD.__kY;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__kU=null;
var bI=this.constructor;
var bM;
var bN=qx.core.Property.$$store;
var bK=bN.user;
var bL=bN.theme;
var bG=bN.inherit;
var bJ=bN.useinit;
var bH=bN.init;

while(bI){bM=bI.$$properties;

if(bM){for(var name in bM){if(bM[name].dereference){this[bK[name]]=this[bL[name]]=this[bG[name]]=this[bJ[name]]=this[bH[name]]=undefined;
}}}bI=bI.superclass;
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="qx.application",d="gecko|opera|webkit",c="left",a="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._window=n.getWindow();
this.__ks=false;
this.__kt=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var o=qx.event.handler.Application.$$instance;

if(o){o.__kw();
}}},members:{canHandleEvent:function(p,q){},registerEvent:function(r,s,t){},unregisterEvent:function(u,v,w){},__ku:null,__ks:null,__kt:null,__kv:null,__kw:function(){if(!this.__ku&&this.__ks&&qx.$$loader.scriptLoaded){try{var x=qx.core.Setting.get(f);

if(!qx.Class.getByName(x)){return;
}}catch(e){}if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__ku=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__ku=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__ku;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__ks=true;
this.__kw();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,d)){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var y=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__ks=true;
this.__kw();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__kv){this.__kv=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;

try{var t=q.document;
}catch(e){return ;
}var r=t.documentElement;
var p=qx.bom.Event.getTarget(e);

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__mO||null;
},ready:function(){if(this.__mO){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var h=qx.core.Setting.get(d);
var i=qx.Class.getByName(h);

if(i){this.__mO=new i;
var g=new Date;
this.__mO.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__mO.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+h);
}},__mP:function(e){var j=this.__mO;

if(j){e.setReturnValue(j.close());
}},__mQ:function(){var k=this.__mO;

if(k){k.terminate();
}}},defer:function(l){qx.event.Registration.addListener(window,f,l.ready,l);
qx.event.Registration.addListener(window,a,l.__mQ,l);
qx.event.Registration.addListener(window,c,l.__mP,l);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(e,f,g,h){var i=qx.locale.Manager;

if(i){return i.trn.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__xG:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__xG;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__xG=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__xG=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var l="jsFilePath",k="",j="#FF0000",h="#FF9900",g="level",f='click',d='horizontal',c="name",b="green",a="Only L1 Warnings",bf="errors",be="completed",bd="==",bc="click",bb="Horizontal",ba="data/json/tree.json",Y='vertical',X="jslint_toolkit/image/go-down.png",W="folder",V="jslint_toolkit/image/go-up.png",s="data/errors/",t="jslint_toolkit/image/utilities-color-chooser.png",q="Expand",r="evidence",o="dblclick",p='Horizontal',m="jslint_toolkit/source.htm",n="2*",w='Vertical',x="character",F="1*",D="kids",M="../../data/source/",H="type",R="pointer",P="changeSelection",z='</a>',U="_",T="Collapse",S="vertical",y="fileCount",B="jslint_toolkit.Application",C="reason",E="Collapse the tree",G=' ',I="horizontal",N="Loading...",Q="Expand the tree",u="jslint_toolkit/image/utilities-dictionary.png",v=".json",A="Change layout between horizontal and vertical",L="line",K="JSLint-Toolkit",J='<a href="http://code.google.com/p/jslint-toolkit/" target="_blank">',O="1.2";
qx.Class.define(B,{extend:qx.application.Standalone,members:{_name:K,_version:O,_rightPane:null,_rightPaneArea:null,_leftPane:null,_leftPaneTree:null,_middlePane:null,_middlePaneTable:null,_filterButton:null,_treeJSON:null,main:function(){qx.application.Standalone.prototype.main.call(this);
{};
var bh=new qx.ui.layout.VBox();
var bg=new qx.ui.container.Composite(bh);
this.getRoot().add(bg,{edge:0});
bg.add(this.__Ar(),{flex:0});
bg.add(this.__Aq(),{flex:1});
},__Ar:function(){var toolbar=new qx.ui.toolbar.ToolBar();
var bm=new qx.ui.toolbar.Part();
toolbar.add(bm);
var bk=new qx.ui.toolbar.Button(this.tr(q),X);
bk.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(Q)));
bk.addListener(f,function(){var bq=this._leftPaneTree.getRoot().getItems(true,true,false);

for(var i=0;i<bq.length;i++){var br=bq[i];

if(br.hasChildren()&&!br.isOpen()){br.setOpen(true);
}}},this);
bm.add(bk);
var bj=new qx.ui.toolbar.Button(this.tr(T),V);
bj.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(E)));
bj.addListener(f,function(){var bs=this._leftPaneTree.getRoot().getItems(true,true,true);

for(var i=0;i<bs.length;i++){var bt=bs[i];

if(bt.hasChildren()&&bt.isOpen()){bt.setOpen(false);
}}this._leftPaneTree.select(this._leftPaneTree.getRoot());
},this);
bm.add(bj);
var bp=new qx.ui.toolbar.Button(this.tr(bb),u);
bp.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(A)));
bp.addListener(f,function(){var bu=this._middlePaneTable.getTableColumnModel();

if(this._mainSplitPane.getOrientation()===d){this._mainSplitPane.setOrientation(Y);
bp.setLabel(p);
bu.setColumnVisible(4,true);
}else{this._mainSplitPane.setOrientation(d);
bp.setLabel(w);
bu.setColumnVisible(4,false);
}},this);
bm.add(bp);
var bn=new qx.ui.toolbar.Part();
toolbar.add(bn);
var bl=new qx.ui.toolbar.CheckBox(this.tr(a),t);
bl.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(a)));
bl.addListener(bc,function(){this.__AB();
},this);
bl.setValue(true);
this._filterButton=bl;
bn.add(bl);
toolbar.addSpacer();
var bo=new qx.ui.toolbar.Part();
toolbar.add(bo);
var bi=new qx.ui.basic.Atom();
bi.set({paddingLeft:5,paddingRight:5,rich:true,label:J+this._name+G+this._version+z});
bo.add(bi);
return toolbar;
},__Aq:function(){var bw=new qx.ui.splitpane.Pane(I);
var bv=this.__Al();
bw.add(bv,0);
var bx=new qx.ui.splitpane.Pane(S);
bx.setDecorator(null);
bw.add(bx,1);
bx.add(this.__Ao(),1);
bx.add(this.__Ap(),1.5);
this._mainSplitPane=bx;
return bw;
},__Al:function(){var bA=this;
var bz=new qx.ui.tree.Tree();
bz.set({width:200,openMode:o,hideRoot:false});
var by=new qx.ui.tree.TreeFolder(this.tr(N));
bz.setRoot(by);
by.setIcon(null);
by.setOpen(true);
window.setTimeout(function(){var bB=new qx.io.remote.Request(ba);
bB.addListener(be,function(e){var bC=qx.util.Json.parse(e.getContent());
bA.__Am(by,bC);
bA._treeJSON=bC;
bz.setHideRoot(true);
bz.setRootOpenClose(true);
});
bB.send();
},200);
this._leftPane=bz;
this._leftPaneTree=bz;
return bz;
},__Am:function(bD,bE){for(var i=0;i<bE.length;i++){var bL=bE[i],name=bL.name,bG,bJ=bL.path,bF=bL.errors;
var bH=new qx.ui.tooltip.ToolTip(bJ);
bG=this.__AD(name,bF,this._filterButton.isValue());

if(bL[H]===W){if(bL[y]===0){continue;
}var bK=new qx.ui.tree.TreeFolder(bG);
bK.setUserData(c,name);
bK.setUserData(bf,bF);
bK.setToolTip(bH);

if(bF[0]===0){bK.setTextColor(b);
}else if(bF[1]===0){bK.setTextColor(h);
}else{bK.setTextColor(j);
}bD.add(bK);
this.__Am(bK,bL[D]);
}else{var bI=new qx.ui.tree.TreeFile(bG);
bI.setUserData(c,name);
bI.setUserData(bf,bF);
bI.setToolTip(bH);

if(bF[0]===0){bI.setTextColor(b);
}else{if(bF[1]===0){bI.setTextColor(h);
}else{bI.setTextColor(j);
}bI.setCursor(R);
(function(bM,bN,bO){bO.addListener(bc,function(e){this._middlePaneTable.setUserData(l,bN);
this.__An();
},bM);
})(this,bJ,bI);
}bD.add(bI);
}}},__An:function(){var bP=this._middlePaneTable.getUserData(l);

if(!bP){return;
}var bS=this.__Az(bP);
var bQ=s+bS+v;
var bR=new qx.io.remote.Request(bQ);
bR.addListener(be,function(e){var bU=qx.util.Json.parse(e.getContent());

if(this._filterButton.isValue()){var bV=[];

for(var i=0;i<bU.length;i++){if(bU[i][0]!==3){bV.push(bU[i]);
}}bU=bV;
}var bT=this._middlePaneTable.getTableModel();
var bW=this._middlePaneTable.getSelectionModel();
bT.setData(bU);
bW.resetSelection();

if(bT.getRowCount()){bW.addSelectionInterval(0,0);
}},this);
bR.send();
},__Ao:function(){var cd=new qx.ui.table.model.Simple();
cd.setColumns([g,L,x,C,r]);
var ca={tableColumnModel:function(cf){return new qx.ui.table.columnmodel.Resize(cf);
}};
var cc=new qx.ui.table.Table(cd,ca);
var cb=cc.getTableColumnModel();
var bX=cb.getBehavior();
bX.set(0,{width:50});
bX.set(1,{width:50});
bX.set(2,{width:50});
bX.set(3,{width:F});
bX.set(4,{width:n});
var ce=new qx.ui.table.cellrenderer.Conditional(k,k,k,k);
ce.addNumericCondition(bd,1,null,j,null,null,g);
ce.addNumericCondition(bd,3,null,h,null,null,g);
cb.setDataCellRenderer(0,ce);
cb.setDataCellRenderer(1,ce);
cb.setDataCellRenderer(2,ce);
cb.setDataCellRenderer(3,ce);
cb.setDataCellRenderer(4,ce);
var bY=cc.getSelectionModel();
bY.setSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
bY.addListener(P,function(){var ci=this;

if(!bY.isSelectionEmpty()){var ch=cc.getSelectionModel().getSelectedRanges()[0].minIndex;
var cg=parseInt(cc.getTableModel().getValue(1,ch),10);
this.__Av(cg);
}},this);
cb.setColumnVisible(0,false);
cb.setColumnVisible(2,false);
cc.setStatusBarVisible(true);
this._middlePane=cc;
this._middlePaneTable=cc;
return cc;
},__Ap:function(){var content=new qx.ui.embed.Iframe(qx.util.ResourceManager.getInstance().toUri(m));
this._rightPane=content;
this._rightPaneArea=content;
return content;
},__AB:function(){var cj=this._leftPaneTree.getRoot();
this.__AC(cj,this._filterButton.isValue());
this.__An();
},__AC:function(ck,cl){var cn=ck.getChildren();

for(var i=0;i<cn.length;i++){var co=cn[i];
var name=co.getUserData("name");
var cm=co.getUserData("errors");

if(cm[0]===0){continue;
}co.setLabel(this.__AD(name,cm,cl));

if(co.classname==="qx.ui.tree.TreeFolder"){this.__AC(co,cl);
}}},__AD:function(name,cp,cq){var cr=name;

if(cp[0]!==0){if(cq){if(cp[1]){cr+=" ("+cp[1]+")";
}}else{cr+=" ("+cp[0]+")";
}}return cr;
},__Av:function(cs){var ct=this;

if(this._rightPane.isExcluded()){this._rightPane.show();
this._middlePaneTable.getTableColumnModel().setColumnVisible(3,false);
}ct.__Aw(cs);
},__Aw:function(cu){var cz=this;
var cv=this._middlePaneTable.getUserData(l);

if(cv!=this._rightPaneArea.getUserData(l)){var cy=this._rightPaneArea.getWindow();

if(cy){this._rightPaneArea.setUserData(l,cv);
var cx=this.__Az(cv);
var cw=M+cx;
cy.loadJS(cw,function(){cz.__Ax(cu);
});
}}else{if(cu){this.__Ax(cu);
}}},__Ax:function(cA){var cB=this._rightPaneArea.getWindow();

if(cB){cB.highlight(cA);
}},__Ay:function(){if(!this._rightPane.isExcluded()){this._rightPane.exclude();
this._middlePaneTable.getTableColumnModel().setColumnVisible(3,true);
}},__Az:function(cC){return cC.replace(/[:|\\|\/]/g,U);
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!b;
this._cancelable=!!c;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__pz:null,__pA:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__pz=b;
this.__pA=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__pz=this.__pz;
f.__pA=this.__pA;
return f;
},getData:function(){return this.__pz;
},getOldData:function(){return this.__pA;
}},destruct:function(){this.__pz=this.__pA=null;
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__jG=c;
this.__jH=d||b;
this.__jI=e===undefined?-1:e;
},members:{__jG:null,__jH:null,__jI:null,toString:function(){return this.__jG;
},getUri:function(){return this.__jH;
},getLineNumber:function(){return this.__jI;
}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__rP={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__rP:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__rP[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__rP){return;
}var h=g.classname;
var j=this.__rP[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__rP[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__rP;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__rP;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(j){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+j);
}h.length=0;
e[f]=null;
},disposeMap:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var p in o){n=o[p];

if(o.hasOwnProperty(p)&&n){n.dispose();
}}}catch(q){throw new Error("The map field: "+m+" of object: "+k+" has non disposable entries: "+q);
}k[m]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",D="deepBinding",C="item",B="reset",A="' (",z="Boolean",y=").",x=") to the object '",w="Integer",v=" of object ",u="qx.data.SingleValueBinding",s="Binding property ",t="PositiveNumber",q="Binding from '",r="PositiveInteger",o="Binding does not exist!",p="Date",n=" not possible: No event available. ";
qx.Class.define(u,{statics:{DEBUG_ON:false,__rX:{},bind:function(E,F,G,H,I){var S=this.__sa(E,F,G,H,I);
var N=F.split(d);
var K=this.__sg(N);
var R=[];
var O=[];
var P=[];
var L=[];
var M=E;
for(var i=0;i<N.length;i++){if(K[i]!==l){L.push(g);
}else{L.push(this.__sb(M,N[i]));
}R[i]=M;
if(i==N.length-1){if(K[i]!==l){var V=K[i]===h?M.length-1:K[i];
var J=M.getItem(V);
this.__sf(J,G,H,I,E);
P[i]=this.__sh(M,L[i],G,H,I,K[i]);
}else{if(N[i]!=null&&M[m+qx.lang.String.firstUp(N[i])]!=null){var J=M[m+qx.lang.String.firstUp(N[i])]();
this.__sf(J,G,H,I,E);
}P[i]=this.__sh(M,L[i],G,H,I);
}}else{var T={index:i,propertyNames:N,sources:R,listenerIds:P,arrayIndexValues:K,targetObject:G,targetPropertyChain:H,options:I,listeners:O};
var Q=qx.lang.Function.bind(this.__rY,this,T);
O.push(Q);
P[i]=M.addListener(L[i],Q);
}if(M[m+qx.lang.String.firstUp(N[i])]==null){M=null;
}else if(K[i]!==l){M=M[m+qx.lang.String.firstUp(N[i])](K[i]);
}else{M=M[m+qx.lang.String.firstUp(N[i])]();
}
if(!M){break;
}}var U={type:D,listenerIds:P,sources:R,targetListenerIds:S.listenerIds,targets:S.targets};
this.__si(U,E,F,G,H);
return U;
},__rY:function(W){if(W.options&&W.options.onUpdate){W.options.onUpdate(W.sources[W.index],W.targetObject);
}for(var j=W.index+1;j<W.propertyNames.length;j++){var bb=W.sources[j];
W.sources[j]=null;

if(!bb){continue;
}bb.removeListenerById(W.listenerIds[j]);
}var bb=W.sources[W.index];
for(var j=W.index+1;j<W.propertyNames.length;j++){if(W.arrayIndexValues[j-1]!==l){bb=bb[m+qx.lang.String.firstUp(W.propertyNames[j-1])](W.arrayIndexValues[j-1]);
}else{bb=bb[m+qx.lang.String.firstUp(W.propertyNames[j-1])]();
}W.sources[j]=bb;
if(!bb){this.__sc(W.targetObject,W.targetPropertyChain);
break;
}if(j==W.propertyNames.length-1){if(qx.Class.implementsInterface(bb,qx.data.IListData)){var bc=W.arrayIndexValues[j]===h?bb.length-1:W.arrayIndexValues[j];
var Y=bb.getItem(bc);
this.__sf(Y,W.targetObject,W.targetPropertyChain,W.options,W.sources[W.index]);
W.listenerIds[j]=this.__sh(bb,g,W.targetObject,W.targetPropertyChain,W.options,W.arrayIndexValues[j]);
}else{if(W.propertyNames[j]!=null&&bb[m+qx.lang.String.firstUp(W.propertyNames[j])]!=null){var Y=bb[m+qx.lang.String.firstUp(W.propertyNames[j])]();
this.__sf(Y,W.targetObject,W.targetPropertyChain,W.options,W.sources[W.index]);
}var ba=this.__sb(bb,W.propertyNames[j]);
W.listenerIds[j]=this.__sh(bb,ba,W.targetObject,W.targetPropertyChain,W.options);
}}else{if(W.listeners[j]==null){var X=qx.lang.Function.bind(this.__rY,this,W);
W.listeners.push(X);
}if(qx.Class.implementsInterface(bb,qx.data.IListData)){var ba=g;
}else{var ba=this.__sb(bb,W.propertyNames[j]);
}W.listenerIds[j]=bb.addListener(ba,W.listeners[j]);
}}},__sa:function(bd,be,bf,bg,bh){var bl=bg.split(d);
var bj=this.__sg(bl);
var bq=[];
var bp=[];
var bn=[];
var bm=[];
var bk=bf;
for(var i=0;i<bl.length-1;i++){if(bj[i]!==l){bm.push(g);
}else{try{bm.push(this.__sb(bk,bl[i]));
}catch(e){break;
}}bq[i]=bk;
var bo=function(){for(var j=i+1;j<bl.length-1;j++){var bt=bq[j];
bq[j]=null;

if(!bt){continue;
}bt.removeListenerById(bn[j]);
}var bt=bq[i];
for(var j=i+1;j<bl.length-1;j++){var br=qx.lang.String.firstUp(bl[j-1]);
if(bj[j-1]!==l){var bu=bj[j-1]===h?bt.getLength()-1:bj[j-1];
bt=bt[m+br](bu);
}else{bt=bt[m+br]();
}bq[j]=bt;
if(bp[j]==null){bp.push(bo);
}if(qx.Class.implementsInterface(bt,qx.data.IListData)){var bs=g;
}else{try{var bs=qx.data.SingleValueBinding.__sb(bt,bl[j]);
}catch(e){break;
}}bn[j]=bt.addListener(bs,bp[j]);
}qx.data.SingleValueBinding.updateTarget(bd,be,bf,bg,bh);
};
bp.push(bo);
bn[i]=bk.addListener(bm[i],bo);
var bi=qx.lang.String.firstUp(bl[i]);
if(bk[m+bi]==null){bk=null;
}else if(bj[i]!==l){bk=bk[m+bi](bj[i]);
}else{bk=bk[m+bi]();
}
if(!bk){break;
}}return {listenerIds:bn,targets:bq};
},updateTarget:function(bv,bw,bx,by,bz){var bD=this.__se(bv,bw);

if(bD!=null){var bF=bw.substring(bw.lastIndexOf(d)+1,bw.length);
if(bF.charAt(bF.length-1)==f){var bA=bF.substring(bF.lastIndexOf(k)+1,bF.length-1);
var bC=bF.substring(0,bF.lastIndexOf(k));
var bE=bD[m+qx.lang.String.firstUp(bC)]();

if(bA==h){bA=bE.length-1;
}
if(bE!=null){var bB=bE.getItem(bA);
}}else{var bB=bD[m+qx.lang.String.firstUp(bF)]();
}}bB=qx.data.SingleValueBinding.__sj(bB,bx,by,bz);
this.__sd(bx,by,bB);
},__sb:function(bG,bH){var bI=this.__sk(bG,bH);
if(bI==null){if(qx.Class.supportsEvent(bG.constructor,bH)){bI=bH;
}else if(qx.Class.supportsEvent(bG.constructor,g+qx.lang.String.firstUp(bH))){bI=g+qx.lang.String.firstUp(bH);
}else{throw new qx.core.AssertionError(s+bH+v+bG+n);
}}return bI;
},__sc:function(bJ,bK){var bL=this.__se(bJ,bK);

if(bL!=null){var bM=bK.substring(bK.lastIndexOf(d)+1,bK.length);
if(bM.charAt(bM.length-1)==f){this.__sd(bJ,bK,null);
return;
}if(bL[B+qx.lang.String.firstUp(bM)]!=undefined){bL[B+qx.lang.String.firstUp(bM)]();
}else{bL[a+qx.lang.String.firstUp(bM)](null);
}}},__sd:function(bN,bO,bP){var bT=this.__se(bN,bO);

if(bT!=null){var bU=bO.substring(bO.lastIndexOf(d)+1,bO.length);
if(bU.charAt(bU.length-1)==f){var bQ=bU.substring(bU.lastIndexOf(k)+1,bU.length-1);
var bS=bU.substring(0,bU.lastIndexOf(k));
var bR=bT[m+qx.lang.String.firstUp(bS)]();

if(bQ==h){bQ=bR.length-1;
}
if(bR!=null){bR.setItem(bQ,bP);
}}else{bT[a+qx.lang.String.firstUp(bU)](bP);
}}},__se:function(bV,bW){var ca=bW.split(d);
var cb=bV;
for(var i=0;i<ca.length-1;i++){try{var bY=ca[i];
if(bY.indexOf(f)==bY.length-1){var bX=bY.substring(bY.indexOf(k)+1,bY.length-1);
bY=bY.substring(0,bY.indexOf(k));
}cb=cb[m+qx.lang.String.firstUp(bY)]();

if(bX!=null){if(bX==h){bX=cb.length-1;
}cb=cb.getItem(bX);
bX=null;
}}catch(cc){return null;
}}return cb;
},__sf:function(cd,ce,cf,cg,ch){cd=this.__sj(cd,ce,cf,cg);
if(cd===undefined){this.__sc(ce,cf);
}if(cd!==undefined){try{this.__sd(ce,cf,cd);
if(cg&&cg.onUpdate){cg.onUpdate(ch,ce,cd);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cg&&cg.onSetFail){cg.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cd+" on "+ce+". Error message: "+e);
}}}},__sg:function(ci){var cj=[];
for(var i=0;i<ci.length;i++){var name=ci[i];
if(qx.lang.String.endsWith(name,f)){var ck=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(ck!==h){if(ck==l||isNaN(parseInt(ck,10))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){ci[i]=name.substring(0,name.indexOf(k));
cj[i]=l;
cj[i+1]=ck;
ci.splice(i+1,0,C);
i++;
}else{cj[i]=ck;
ci.splice(i,1,C);
}}else{cj[i]=l;
}}return cj;
},__sh:function(cl,cm,cn,co,cp,cq){var cr;
{};
var ct=function(cu,e){if(cu!==l){if(cu===h){cu=cl.length-1;
}var cx=cl.getItem(cu);
if(cx===undefined){qx.data.SingleValueBinding.__sc(cn,co);
}var cv=e.getData().start;
var cw=e.getData().end;

if(cu<cv||cu>cw){return;
}}else{var cx=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cl+" by "+cm+" to "+cn+" ("+co+")");
qx.log.Logger.debug("Data before conversion: "+cx);
}cx=qx.data.SingleValueBinding.__sj(cx,cn,co,cp);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cx);
}try{if(cx!==undefined){qx.data.SingleValueBinding.__sd(cn,co,cx);
}else{qx.data.SingleValueBinding.__sc(cn,co);
}if(cp&&cp.onUpdate){cp.onUpdate(cl,cn,cx);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cp&&cp.onSetFail){cp.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cx+" on "+cn+". Error message: "+e);
}}};
if(!cq){cq=l;
}ct=qx.lang.Function.bind(ct,cl,cq);
var cs=cl.addListener(cm,ct);
return cs;
},__si:function(cy,cz,cA,cB,cC){if(this.__rX[cz.toHashCode()]===undefined){this.__rX[cz.toHashCode()]=[];
}this.__rX[cz.toHashCode()].push([cy,cz,cA,cB,cC]);
},__sj:function(cD,cE,cF,cG){if(cG&&cG.converter){var cI;

if(cE.getModel){cI=cE.getModel();
}return cG.converter(cD,cI);
}else{var cK=this.__se(cE,cF);
var cL=cF.substring(cF.lastIndexOf(d)+1,cF.length);
if(cK==null){return cD;
}var cJ=qx.Class.getPropertyDefinition(cK.constructor,cL);
var cH=cJ==null?l:cJ.check;
return this.__sl(cD,cH);
}},__sk:function(cM,cN){var cO=qx.Class.getPropertyDefinition(cM.constructor,cN);

if(cO==null){return null;
}return cO.event;
},__sl:function(cP,cQ){var cR=qx.lang.Type.getClass(cP);
if((cR==c||cR==b)&&(cQ==w||cQ==r)){cP=parseInt(cP,10);
}if((cR==z||cR==c||cR==p)&&cQ==b){cP=cP+l;
}if((cR==c||cR==b)&&(cQ==c||cQ==t)){cP=parseFloat(cP);
}return cP;
},removeBindingFromObject:function(cS,cT){if(cT.type==D){for(var i=0;i<cT.sources.length;i++){if(cT.sources[i]){cT.sources[i].removeListenerById(cT.listenerIds[i]);
}}for(var i=0;i<cT.targets.length;i++){if(cT.targets[i]){cT.targets[i].removeListenerById(cT.targetListenerIds[i]);
}}}else{cS.removeListenerById(cT);
}var cU=this.__rX[cS.toHashCode()];
if(cU!=undefined){for(var i=0;i<cU.length;i++){if(cU[i][0]==cT){qx.lang.Array.remove(cU,cU[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cV){{};
var cW=this.__rX[cV.toHashCode()];

if(cW!=undefined){for(var i=cW.length-1;i>=0;i--){this.removeBindingFromObject(cV,cW[i][0]);
}}},getAllBindingsForObject:function(cX){if(this.__rX[cX.toHashCode()]===undefined){this.__rX[cX.toHashCode()]=[];
}return this.__rX[cX.toHashCode()];
},removeAllBindings:function(){for(var da in this.__rX){var cY=qx.core.ObjectRegistry.fromHashCode(da);
if(cY==null){delete this.__rX[da];
continue;
}this.removeAllBindingsForObject(cY);
}this.__rX={};
},getAllBindings:function(){return this.__rX;
},showBindingInLog:function(db,dc){var de;
for(var i=0;i<this.__rX[db.toHashCode()].length;i++){if(this.__rX[db.toHashCode()][i][0]==dc){de=this.__rX[db.toHashCode()][i];
break;
}}
if(de===undefined){var dd=o;
}else{var dd=q+de[1]+A+de[2]+x+de[3]+A+de[4]+y;
}qx.log.Logger.debug(dd);
},showAllBindingsInLog:function(){for(var dg in this.__rX){var df=qx.core.ObjectRegistry.fromHashCode(dg);

for(var i=0;i<this.__rX[dg].length;i++){this.showBindingInLog(df,this.__rX[dg][i][0]);
}}}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__oj:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__ok:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ol:function(){var L=qx.lang.Generics.__oj;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__ok(N,O);
}}}}},defer:function(Q){Q.__ol();
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
this._returnValue=null;
return this;
},clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);
var i={};
h._native=this._cloneNativeEvent(this._native,i);
h._returnValue=this._returnValue;
return h;
},_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;
return k;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="iPad",d="X11",c="MacIntel",a="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__mR:function(){var o=navigator.platform;
if(o==null||o===l){o=navigator.userAgent;
}
if(o.indexOf(f)!=-1||o.indexOf(m)!=-1||o.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(h)!=-1||o.indexOf(a)!=-1||o.indexOf(c)!=-1||o.indexOf(n)!=-1||o.indexOf(g)!=-1||o.indexOf(b)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(d)!=-1||o.indexOf(j)!=-1||o.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(p){p.__mR();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",I=")",H="winxp",G="freebsd",F="sunos",E="SV1",D="|",C="nintendods",B="winnt4",A="wince",z="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="iPad",v="symbian",u="win7",x="g",w="qx.bom.client.System",y=" Mobile/";
qx.Bootstrap.define(w,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,IPAD:false,UNKNOWN_SYSTEM:false,__kR:{"Windows NT 6.1":u,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":H,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":B,"Win 9x 4.90":z,"Windows CE":A,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":G,"NetBSD":m,"OpenBSD":k,"SunOS":F,"Symbian System":v,"Nitro":C,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__kS:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__kR){K.push(J);
}var M=new RegExp(l+K.join(D).replace(/\./g,r)+I,x);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(y).test(navigator.userAgent)){if(RegExp(t).test(navigator.userAgent)){this.IPAD=true;
this.NAME="ipad";
}else{this.IPHONE=true;
this.NAME="iphone";
}}else{this.NAME=this.__kR[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(E)!==-1){this.SP2=true;
}}}}},defer:function(N){N.__kS();
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(g){var h={};

if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;

for(var l in i){k=i[l];

if(typeof k===b){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}this._setDynamic(h);
},resolve:function(m){var p=this._dynamic;
var n=p[m];

if(n){return n;
}var o=this.getTheme();

if(o!==null&&o.colors[m]){return p[m]=o.colors[m];
}return m;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var h=",",e="rgb(",d=")",c="qx.theme.manager.Color",a="qx.util.ColorUtil";
qx.Class.define(a,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(j){return this.NAMED[j]!==undefined;
},isSystemColor:function(k){return this.SYSTEM[k]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(c);
},isThemedColor:function(l){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(l);
},stringToRgb:function(m){if(this.supportsThemes()&&this.isThemedColor(m)){var m=qx.theme.manager.Color.getInstance().resolveDynamic(m);
}
if(this.isNamedColor(m)){return this.NAMED[m];
}else if(this.isSystemColor(m)){throw new Error("Could not convert system colors to RGB: "+m);
}else if(this.isRgbString(m)){return this.__jR();
}else if(this.isHex3String(m)){return this.__jT();
}else if(this.isHex6String(m)){return this.__jU();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__jR();
}else if(this.isRgbaString(n)){return this.__jS();
}else if(this.isHex3String(n)){return this.__jT();
}else if(this.isHex6String(n)){return this.__jU();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v);
},isCssString:function(w){return this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w);
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__jR:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__jS:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__jT:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__jU:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__jT(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__jU(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__jT(P);
}
if(this.isHex6String(P)){return this.__jU(P);
}throw new Error("Invalid hex value: "+P);
},rgbToHsb:function(Q){var S,T,V;
var bc=Q[0];
var Y=Q[1];
var R=Q[2];
var bb=(bc>Y)?bc:Y;

if(R>bb){bb=R;
}var U=(bc<Y)?bc:Y;

if(R<U){U=R;
}V=bb/255.0;

if(bb!=0){T=(bb-U)/bb;
}else{T=0;
}
if(T==0){S=0;
}else{var X=(bb-bc)/(bb-U);
var ba=(bb-Y)/(bb-U);
var W=(bb-R)/(bb-U);

if(bc==bb){S=W-ba;
}else if(Y==bb){S=2.0+X-W;
}else{S=4.0+ba-X;
}S=S/6.0;

if(S<0){S=S+1.0;
}}return [Math.round(S*360),Math.round(T*100),Math.round(V*100)];
},hsbToRgb:function(bd){var i,f,p,q,t;
var be=bd[0]/360;
var bf=bd[1]/100;
var bg=bd[2]/100;

if(be>=1.0){be%=1.0;
}
if(bf>1.0){bf=1.0;
}
if(bg>1.0){bg=1.0;
}var bh=Math.floor(255*bg);
var bi={};

if(bf==0.0){bi.red=bi.green=bi.blue=bh;
}else{be*=6.0;
i=Math.floor(be);
f=be-i;
p=Math.floor(bh*(1.0-bf));
q=Math.floor(bh*(1.0-(bf*f)));
t=Math.floor(bh*(1.0-(bf*(1.0-f))));

switch(i){case 0:bi.red=bh;
bi.green=t;
bi.blue=p;
break;
case 1:bi.red=q;
bi.green=bh;
bi.blue=p;
break;
case 2:bi.red=p;
bi.green=bh;
bi.blue=t;
break;
case 3:bi.red=p;
bi.green=q;
bi.blue=bh;
break;
case 4:bi.red=t;
bi.green=p;
bi.blue=bh;
break;
case 5:bi.red=bh;
bi.green=p;
bi.blue=q;
break;
}}return [bi.red,bi.green,bi.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var h="object",g="_applyTheme",f="__pR",e="qx.theme.manager.Decoration",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:g,event:c}},members:{__pR:null,resolve:function(i){if(!i){return null;
}
if(typeof i===h){return i;
}var l=this.getTheme();

if(!l){return null;
}var l=this.getTheme();

if(!l){return null;
}var m=this.__pR;

if(!m){m=this.__pR={};
}var j=m[i];

if(j){return j;
}var k=l.decorations[i];

if(!k){return null;
}var n=k.decorator;

if(n==null){throw new Error("Missing definition of which decorator to use in entry: "+i+"!");
}return m[i]=(new n).set(k.style);
},isValidPropertyValue:function(o){if(typeof o===b){return this.isDynamic(o);
}else if(typeof o===h){var p=o.constructor;
return qx.Class.hasInterface(p,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(q){if(!q){return false;
}var r=this.getTheme();

if(!r){return false;
}return !!r.decorations[q];
},_applyTheme:function(s,t){var v=qx.util.AliasManager.getInstance();

if(t){for(var u in t.aliases){v.remove(u);
}}
if(s){for(var u in s.aliases){v.add(u,s.aliases[u]);
}}
if(!s){this.__pR={};
}}},destruct:function(){this._disposeMap(f);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__jV={};
this.add(a,h);
},members:{__jV:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__jV[k]){return this.__jV[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__jV[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__jV[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__jV[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
}},destruct:function(){this.__jV=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},resolve:function(h){var k=this._dynamic;
var i=k[h];

if(i){return i;
}var j=this.getTheme();

if(j!==null&&j.fonts[h]){return k[h]=(new qx.bom.Font).set(j.fonts[h]);
}return h;
},isDynamic:function(l){var n=this._dynamic;

if(l&&(l instanceof qx.bom.Font||n[l]!==undefined)){return true;
}var m=this.getTheme();

if(m!==null&&l&&m.fonts[l]){n[l]=(new qx.bom.Font).set(m.fonts[l]);
return true;
}return false;
},__oC:function(o,p){if(o[p].include){var q=o[o[p].include];
o[p].include=null;
delete o[p].include;
o[p]=qx.lang.Object.mergeWith(o[p],q,false);
this.__oC(o,p);
}},_applyTheme:function(r){var s=this._getDynamic();

for(var v in s){if(s[v].themed){s[v].dispose();
delete s[v];
}}
if(r){var t=r.fonts;
var u=qx.bom.Font;

for(var v in t){if(t[v].include&&t[t[v].include]){this.__oC(t,v);
}s[v]=(new u).set(t[v]);
s[v].themed=true;
}}this._setDynamic(s);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(y,z){qx.core.Object.call(this);

if(y!==undefined){this.setSize(y);
}
if(z!==undefined){this.setFamily(z);
}},statics:{fromString:function(A){var E=new qx.bom.Font();
var C=A.split(/\s+/);
var name=[];
var D;

for(var i=0;i<C.length;i++){switch(D=C[i]){case c:E.setBold(true);
break;
case e:E.setItalic(true);
break;
case j:E.setDecoration(j);
break;
default:var B=parseInt(D,10);

if(B==D||qx.lang.String.contains(D,g)){E.setSize(B);
}else{name.push(D);
}break;
}}
if(name.length>0){E.setFamily(name);
}return E;
},fromConfig:function(F){var G=new qx.bom.Font;
G.set(F);
return G;
},__nR:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__nR;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__nS:null,__nT:null,__nU:null,__nV:null,__nW:null,__nX:null,_applySize:function(H,I){this.__nS=H===null?null:H+g;
},_applyLineHeight:function(J,K){this.__nX=J===null?null:J;
},_applyFamily:function(L,M){var N=k;

for(var i=0,l=L.length;i<l;i++){if(L[i].indexOf(o)>0){N+=f+L[i]+f;
}else{N+=L[i];
}
if(i!==l-1){N+=n;
}}this.__nT=N;
},_applyBold:function(O,P){this.__nU=O===null?null:O?c:d;
},_applyItalic:function(Q,R){this.__nV=Q===null?null:Q?e:d;
},_applyDecoration:function(S,T){this.__nW=S===null?null:S;
},getStyles:function(){return {fontFamily:this.__nT,fontSize:this.__nS,fontWeight:this.__nU,fontStyle:this.__nV,textDecoration:this.__nW,lineHeight:this.__nX};
}}});
})();
(function(){var g="qx.bom.client.Feature",f="CSS1Compat",d="label",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="input",a="pointerEvents";
qx.Bootstrap.define(g,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:false,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:!!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),TOUCH:("ontouchstart" in window),PLACEHOLDER:false,__oD:function(){this.QUIRKS_MODE=this.__oE();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;

try{document.createElementNS(c,d);
this.XUL=true;
}catch(e){this.XUL=false;
}var i=document.createElement(b);
this.PLACEHOLDER="placeholder" in i;
if(a in document.documentElement.style){if(qx.bom.client.Engine.OPERA){this.CSS_POINTER_EVENTS=false;
}else{this.CSS_POINTER_EVENTS=true;
}}},__oE:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==f;
}}},defer:function(h){h.__oD();
}});
})();
(function(){var a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(b){{};

for(var c in b){if(b.hasOwnProperty(c)){delete b[c];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(d){{};
return d.__count__===0;
}:
function(e){{};

for(var f in e){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(g,h){{};
return g.__count__>=h;
}:
function(j,k){{};

if(k<=0){return true;
}var length=0;

for(var m in j){if((++length)>=k){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(n){{};
var p=[];
var o=this.getKeys(n);

for(var i=0,l=o.length;i<l;i++){p.push(n[o[i]]);
}return p;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(q,r){{};
return qx.lang.Object.mergeWith(q,r,false);
},merge:function(s,t){{};
var u=arguments.length;

for(var i=1;i<u;i++){qx.lang.Object.mergeWith(s,arguments[i]);
}return s;
},clone:function(v){{};
var w={};

for(var x in v){w[x]=v[x];
}return w;
},invert:function(y){{};
var z={};

for(var A in y){z[y[A].toString()]=A;
}return z;
},getKeyFromValue:function(B,C){{};

for(var D in B){if(B.hasOwnProperty(D)&&B[D]===C){return D;
}}return null;
},contains:function(E,F){{};
return this.getKeyFromValue(E,F)!==null;
},select:function(G,H){{};
return H[G];
},fromArray:function(I){{};
var J={};

for(var i=0,l=I.length;i<l;i++){{};
J[I[i].toString()]=true;
}return J;
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ob={};
this.__oc={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__od:{},__ob:null,__oc:null,_applyTheme:function(j,k){this.__oc={};
this.__ob={};
},__oe:function(l,m,n){var s=m.appearances;
var v=s[l];

if(!v){var w=b;
var p=[];
var u=l.split(w);
var t;

while(!v&&u.length>0){p.unshift(u.pop());
var q=u.join(w);
v=s[q];

if(v){t=v.alias||v;

if(typeof t===h){var r=t+w+p.join(w);
return this.__oe(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__oe(q,m);

if(o){return o;
}}if(n!=null){return this.__oe(n,m);
}return null;
}else if(typeof v===h){return this.__oe(v,m,n);
}else if(v.include&&!v.style){return this.__oe(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var G=this.__oc;
var B=G[x];

if(!B){B=G[x]=this.__oe(x,z,A);
}var L=z.appearances[B];

if(!L){this.warn("Missing appearance: "+x);
return null;
}if(!L.style){return null;
}var M=B;

if(y){var N=L.$$bits;

if(!N){N=L.$$bits={};
L.$$length=0;
}var E=0;

for(var H in y){if(!y[H]){continue;
}
if(N[H]==null){N[H]=1<<L.$$length++;
}E+=N[H];
}if(E>0){M+=e+E;
}}var F=this.__ob;

if(F[M]!==undefined){return F[M];
}if(!y){y=this.__od;
}var J;
if(L.include||L.base){var D=L.style(y);
var C;

if(L.include){C=this.styleFrom(L.include,y,z,A);
}J={};
if(L.base){var I=this.styleFrom(B,y,L.base,A);

if(L.include){for(var K in I){if(!C.hasOwnProperty(K)&&!D.hasOwnProperty(K)){J[K]=I[K];
}}}else{for(var K in I){if(!D.hasOwnProperty(K)){J[K]=I[K];
}}}}if(L.include){for(var K in C){if(!D.hasOwnProperty(K)){J[K]=C[K];
}}}for(var K in D){J[K]=D[K];
}}else{J=L.style(y);
}return F[M]=J||null;
}},destruct:function(){this.__ob=this.__oc=null;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__xp(q.include);
q.patch=this.__xp(q.patch);
{};
var r={$$type:e,name:name,title:q.title,toString:this.genericToString};
if(q.extend){r.supertheme=q.extend;
}r.basename=qx.Bootstrap.createNamespace(name,r);
this.__xs(r,q);
this.__xq(r,q);
this.$$registry[name]=r;
for(var i=0,a=q.include,l=a.length;i<l;i++){this.include(r,a[i]);
}
for(var i=0,a=q.patch,l=a.length;i<l;i++){this.patch(r,a[i]);
}},__xp:function(s){if(!s){return [];
}
if(qx.Bootstrap.isArray(s)){return s;
}else{return [s];
}},__xq:function(t,u){var v=u.aliases||{};

if(u.extend&&u.extend.aliases){qx.Bootstrap.objectMergeWith(v,u.extend.aliases,false);
}t.aliases=v;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__xr:function(w){for(var i=0,x=this.__xt,l=x.length;i<l;i++){if(w[x[i]]){return x[i];
}}},__xs:function(y,z){var C=this.__xr(z);
if(z.extend&&!C){C=z.extend.type;
}y.type=C||p;
if(!C){return;
}var E=function(){};
if(z.extend){E.prototype=new z.extend.$$clazz;
}var D=E.prototype;
var B=z[C];
for(var A in B){D[A]=B[A];
if(D[A].base){{};
D[A].base=z.extend;
}}y.$$clazz=E;
y[C]=new E;
},$$registry:{},__xt:[g,d,f,n,c,o,m,b],__xu:null,__xv:null,__xw:function(){},patch:function(F,G){var I=this.__xr(G);

if(I!==this.__xr(F)){throw new Error("The mixins '"+F.name+"' are not compatible '"+G.name+"'!");
}var H=G[I];
var J=F.$$clazz.prototype;

for(var K in H){J[K]=H[K];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
})();
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="__yc",i="widget",h="__yb",g="qx.ui.tooltip.ToolTip",c="_applyCurrent",f="qx.ui.tooltip.Manager",d="__ye",b="tooltip-error",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__yl,this,true);
this.__yb=new qx.event.Timer();
this.__yb.addListener(n,this.__yi,this);
this.__yc=new qx.event.Timer();
this.__yc.addListener(n,this.__yj,this);
this.__yd={left:0,top:0};
},properties:{current:{check:g,nullable:true,apply:c},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__yd:null,__yc:null,__yb:null,__ye:null,__yf:null,__yg:function(){if(!this.__ye){this.__ye=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ye;
},__yh:function(){if(!this.__yf){this.__yf=new qx.ui.tooltip.ToolTip().set({appearance:b});
this.__yf.syncAppearance();
}return this.__yf;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__yb.stop();
this.__yc.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__yb.startWith(q.getShowTimeout());
t.addListener(s,l,this.__ym,this,true);
t.addListener(s,o,this.__yn,this,true);
t.addListener(s,k,this.__yk,this,true);
}else{t.removeListener(s,l,this.__ym,this,true);
t.removeListener(s,o,this.__yn,this,true);
t.removeListener(s,k,this.__yk,this,true);
}},__yi:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__yc.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==i){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__yd);
}u.show();
}this.__yb.stop();
},__yj:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__yc.stop();
this.resetCurrent();
},__yk:function(e){var w=this.__yd;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__yl:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A,B,y,x;
while(z!=null){A=z.getToolTip();
B=z.getToolTipText()||null;
y=z.getToolTipIcon()||null;

if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){x=z.getInvalidMessage();
}
if(A||B||y||x){break;
}z=z.getLayoutParent();
}if(!z||
!z.getEnabled()||
z.isBlockToolTip()||
(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
}
if(x){A=this.__yh().set({label:x});
}
if(!A){A=this.__yg().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__ym:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__yn:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__yl,this,true);
this._disposeObjects(h,j,d);
this.__yd=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__ls=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__lt=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__lu:null,__ls:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__lu);
this.__lu=null;
}else if(p){this.__lu=window.setInterval(this.__ls,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(r){this.setInterval(r);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__lu){window.clearInterval(this.__lu);
}this.__lu=this.__ls=null;
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{statics:{__sY:null,setVisibleElement:function(y){this.__sY=y;
},getVisibleElement:function(){return this.__sY;
}},properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__ta:null,__tb:null,__tc:null,getLayoutLocation:function(z){var C,B,D,top;
B=z.getBounds();
D=B.left;
top=B.top;
var E=B;
z=z.getLayoutParent();

while(z&&!z.isRootWidget()){B=z.getBounds();
D+=B.left;
top+=B.top;
C=z.getInsets();
D+=C.left;
top+=C.top;
z=z.getLayoutParent();
}if(z.isRootWidget()){var A=z.getContainerLocation();

if(A){D+=A.left;
top+=A.top;
}}return {left:D,top:top,right:D+E.width,bottom:top+E.height};
},moveTo:function(F,top){var H=qx.ui.core.MPlacement.getVisibleElement();
if(H){var J=this.getBounds();
var G=H.getContentLocation();
if(J&&G){var K=top+J.height;
var I=F+J.width;
if((I>G.left&&F<G.right)&&(K>G.top&&top<G.bottom)){F=Math.max(G.left-J.width,0);
}}}
if(this.getDomMove()){this.setDomPosition(F,top);
}else{this.setLayoutProperties({left:F,top:top});
}},placeToWidget:function(L,M){if(M){this.__td();
this.__ta=qx.lang.Function.bind(this.placeToWidget,this,L,false);
qx.event.Idle.getInstance().addListener(i,this.__ta);
this.__tc=function(){this.__td();
};
this.addListener(g,this.__tc,this);
}var N=L.getContainerLocation()||this.getLayoutLocation(L);
this.__tf(N);
},__td:function(){if(this.__ta){qx.event.Idle.getInstance().removeListener(i,this.__ta);
this.__ta=null;
}
if(this.__tc){this.removeListener(g,this.__tc,this);
this.__tc=null;
}},placeToMouse:function(event){var P=event.getDocumentLeft();
var top=event.getDocumentTop();
var O={left:P,top:top,right:P,bottom:top};
this.__tf(O);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__ta=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(i,this.__ta);
this.addListener(g,function(){if(this.__ta){qx.event.Idle.getInstance().removeListener(i,this.__ta);
this.__ta=null;
}},this);
}this.__tf(S);
},placeToPoint:function(T){var U={left:T.left,top:T.top,right:T.left,bottom:T.top};
this.__tf(U);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__te:function(V){var W=null;

if(this._computePlacementSize){var W=this._computePlacementSize();
}else if(this.isVisible()){var W=this.getBounds();
}
if(W==null){this.addListenerOnce(q,function(){this.__te(V);
},this);
}else{V.call(this,W);
}},__tf:function(X){this.__te(function(Y){var ba=qx.util.placement.Placement.compute(Y,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(ba.left,ba.top);
});
}},destruct:function(){this.__td();
}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(c,d){this._add(c,d);
},addAt:function(e,f,g){this._addAt(e,f,g);
},addBefore:function(h,i,j){this._addBefore(h,i,j);
},addAfter:function(k,l,m){this._addAfter(k,l,m);
},remove:function(n){this._remove(n);
},removeAt:function(o){return this._removeAt(o);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(p){p.getChildren=p._getChildren;
p.hasChildren=p._hasChildren;
p.indexOf=p._indexOf;
p.add=p._add;
p.addAt=p._addAt;
p.addBefore=p._addBefore;
p.addAfter=p._addAfter;
p.remove=p._remove;
p.removeAt=p._removeAt;
p.removeAll=p._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__rH:null,__rI:null,__rJ:null,__rK:null,__rL:null,__rM:null,__rN:null,getBounds:function(){return this.__rM||this.__rI||null;
},clearSeparators:function(){},renderSeparator:function(y,z){},renderLayout:function(A,top,B,C){var D;
{};
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__rH){this.__rH=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__rI;

if(!G){G=this.__rI={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__rJ){F.local=true;
delete this.__rJ;
}
if(this.__rL){F.margin=true;
delete this.__rL;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__rJ;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__rJ=true;
this.__rK=null;
},getSizeHint:function(H){var I=this.__rK;

if(I){return I;
}
if(H===false){return null;
}I=this.__rK=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__rH&&this.getHeight()==null){I.height=this.__rH;
}if(I.minWidth>I.width){I.width=I.minWidth;
}
if(I.maxWidth<I.width){I.width=I.maxWidth;
}
if(!this.getAllowGrowX()){I.maxWidth=I.width;
}
if(!this.getAllowShrinkX()){I.minWidth=I.width;
}if(I.minHeight>I.height){I.height=I.minHeight;
}
if(I.maxHeight<I.height){I.height=I.maxHeight;
}
if(!this.getAllowGrowY()){I.maxHeight=I.height;
}
if(!this.getAllowShrinkY()){I.minHeight=I.height;
}return I;
},_computeSizeHint:function(){var N=this.getMinWidth()||0;
var K=this.getMinHeight()||0;
var O=this.getWidth()||N;
var M=this.getHeight()||K;
var J=this.getMaxWidth()||Infinity;
var L=this.getMaxHeight()||Infinity;
return {minWidth:N,width:O,maxWidth:J,minHeight:K,height:M,maxHeight:L};
},_hasHeightForWidth:function(){var P=this._getLayout();

if(P){return P.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Q){var R=this._getLayout();

if(R&&R.hasHeightForWidth()){return R.getHeightForWidth(Q);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__rL=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__rM;
},setUserBounds:function(S,top,T,U){this.__rM={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__rM;
qx.ui.core.queue.Layout.add(this);
},__rO:{},setLayoutProperties:function(V){if(V==null){return;
}var W=this.__rN;

if(!W){W=this.__rN={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},getLayoutProperties:function(){return this.__rN||this.__rO;
},clearLayoutProperties:function(){delete this.__rN;
},updateLayoutProperties:function(Y){var ba=this._getLayout();

if(ba){var bb;
{};
ba.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var bc=qx.core.Object.prototype.clone.call(this);
var bd=this.__rN;

if(bd){bc.__rN=qx.lang.Object.clone(bd);
}return bc;
}},destruct:function(){this.$$parent=this.$$subparent=this.__rN=this.__rI=this.__rM=this.__rK=null;
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jA={};
},statics:{MAX_SIZE:15,__jB:a},members:{__jA:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__jB;
e=c;
}var g=this.__jA;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__jB){i.dispose();
return;
}var k=this.__jA;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(m,n){var o=new qx.html.Decorator(m,n);
{};
return o;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__jA;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__jA=null;
}});
})();
(function(){var bV="px",bU="Boolean",bT="qx.event.type.Drag",bS="qx.event.type.Mouse",bR="visible",bQ="qx.event.type.Focus",bP="on",bO="Integer",bN="qx.event.type.Touch",bM="excluded",bx="qx.event.type.Data",bw="_applyPadding",bv="qx.event.type.Event",bu="hidden",bt="contextmenu",bs="String",br="tabIndex",bq="focused",bp="changeVisibility",bo="mshtml",cd="hovered",ce="qx.event.type.KeySequence",cb="qx.client",cc="absolute",bY="backgroundColor",ca="drag",bW="div",bX="disabled",cf="move",cg="dragstart",bF="qx.dynlocale",bE="dragchange",bH="dragend",bG="resize",bJ="Decorator",bI="zIndex",bL="opacity",bK="default",bD="Color",bC="changeToolTipText",c="beforeContextmenuOpen",d="__qJ",f="_applyNativeContextMenu",g="__qR",h="_applyBackgroundColor",j="_applyFocusable",k="changeShadow",m="qx.event.type.KeyInput",n="createChildControl",o="__qI",ck="Font",cj="_applyShadow",ci="_applyEnabled",ch="_applySelectable",co="Number",cn="_applyKeepActive",cm="_applyVisibility",cl="repeat",cq="qxDraggable",cp="syncAppearance",N="paddingLeft",O="_applyDroppable",L="#",M="qx.event.type.MouseWheel",R="_applyCursor",S="_applyDraggable",P="changeTextColor",Q="$$widget",J="changeContextMenu",K="paddingTop",w="changeSelectable",v="hideFocus",y="none",x="outline",s="_applyAppearance",r="__qO",u="_applyOpacity",t="url(",q=")",p="qx.ui.core.Widget",X="_applyFont",Y="__qV",ba="cursor",bb="qxDroppable",T="changeZIndex",U="__qN",V="changeEnabled",W="changeFont",bc="_applyDecorator",bd="_applyZIndex",G="_applyTextColor",F="qx.ui.menu.Menu",E="__qM",D="_applyToolTipText",C="true",B="widget",A="changeDecorator",z="__qT",I="_applyTabIndex",H="changeAppearance",be="shorthand",bf="/",bg="",bh="_applyContextMenu",bi="paddingBottom",bj="changeNativeContextMenu",bk="qx.ui.tooltip.ToolTip",bl="qxKeepActive",bm="_applyKeepFocus",bn="paddingRight",bB="changeBackgroundColor",bA="changeLocale",bz="qxKeepFocus",by="qx/static/blank.gif";
qx.Class.define(p,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__qI=this._createContainerElement();
this.__qJ=this.__qU();
this.__qI.add(this.__qJ);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bv,disappear:bv,createChildControl:bx,resize:bx,move:bx,syncAppearance:bx,mousemove:bS,mouseover:bS,mouseout:bS,mousedown:bS,mouseup:bS,click:bS,dblclick:bS,contextmenu:bS,beforeContextmenuOpen:bx,mousewheel:M,touchstart:bN,touchend:bN,touchmove:bN,touchcancel:bN,tap:bN,swipe:bN,keyup:ce,keydown:ce,keypress:ce,keyinput:m,focus:bQ,blur:bQ,focusin:bQ,focusout:bQ,activate:bQ,deactivate:bQ,capture:bv,losecapture:bv,drop:bT,dragleave:bT,dragover:bT,drag:bT,dragstart:bT,dragend:bT,dragchange:bT,droprequest:bT},properties:{paddingTop:{check:bO,init:0,apply:bw,themeable:true},paddingRight:{check:bO,init:0,apply:bw,themeable:true},paddingBottom:{check:bO,init:0,apply:bw,themeable:true},paddingLeft:{check:bO,init:0,apply:bw,themeable:true},padding:{group:[K,bn,bi,N],mode:be,themeable:true},zIndex:{nullable:true,init:null,apply:bd,event:T,check:bO,themeable:true},decorator:{nullable:true,init:null,apply:bc,event:A,check:bJ,themeable:true},shadow:{nullable:true,init:null,apply:cj,event:k,check:bJ,themeable:true},backgroundColor:{nullable:true,check:bD,apply:h,event:bB,themeable:true},textColor:{nullable:true,check:bD,apply:G,event:P,themeable:true,inheritable:true},font:{nullable:true,apply:X,check:ck,event:W,themeable:true,inheritable:true,dereference:true},opacity:{check:co,apply:u,themeable:true,nullable:true,init:null},cursor:{check:bs,apply:R,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bk,nullable:true},toolTipText:{check:bs,nullable:true,event:bC,apply:D},toolTipIcon:{check:bs,nullable:true,event:bC},blockToolTip:{check:bU,init:false},visibility:{check:[bR,bu,bM],init:bR,apply:cm,event:bp},enabled:{init:true,check:bU,inheritable:true,apply:ci,event:V},anonymous:{init:false,check:bU},tabIndex:{check:bO,nullable:true,apply:I},focusable:{check:bU,init:false,apply:j},keepFocus:{check:bU,init:false,apply:bm},keepActive:{check:bU,init:false,apply:cn},draggable:{check:bU,init:false,apply:S},droppable:{check:bU,init:false,apply:O},selectable:{check:bU,init:false,event:w,apply:ch},contextMenu:{check:F,apply:bh,nullable:true,event:J},nativeContextMenu:{check:bU,init:false,themeable:true,event:bj,apply:f},appearance:{check:bs,init:B,apply:s,event:H}},statics:{DEBUG:false,getWidgetByElement:function(cr,cs){while(cr){var ct=cr.$$widget;
if(ct!=null){var cu=qx.core.ObjectRegistry.fromHashCode(ct);
if(!cs||!cu.getAnonymous()){return cu;
}}try{cr=cr.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cv){while(cv){if(parent==cv){return true;
}cv=cv.getLayoutParent();
}return false;
},__qK:new qx.ui.core.DecoratorFactory(),__qL:new qx.ui.core.DecoratorFactory()},members:{__qI:null,__qJ:null,__qM:null,__qN:null,__qO:null,__qP:null,__qQ:null,__qR:null,_getLayout:function(){return this.__qR;
},_setLayout:function(cw){{};

if(this.__qR){this.__qR.connectToWidget(null);
}
if(cw){cw.connectToWidget(this);
}this.__qR=cw;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cx=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cx);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cx);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__qS:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cy=qx.theme.manager.Decoration.getInstance();
var cA=cy.resolve(a).getInsets();
var cz=cy.resolve(b).getInsets();

if(cA.top!=cz.top||cA.right!=cz.right||cA.bottom!=cz.bottom||cA.left!=cz.left){return true;
}return false;
},renderLayout:function(cB,top,cC,cD){var cM=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,cB,top,cC,cD);
if(!cM){return null;
}var cF=this.getContainerElement();
var content=this.getContentElement();
var cJ=cM.size||this._updateInsets;
var cN=bV;
var cK={};
if(cM.position){cK.left=cB+cN;
cK.top=top+cN;
}if(cM.size){cK.width=cC+cN;
cK.height=cD+cN;
}
if(cM.position||cM.size){cF.setStyles(cK);
}
if(cJ||cM.local||cM.margin){var cE=this.getInsets();
var innerWidth=cC-cE.left-cE.right;
var innerHeight=cD-cE.top-cE.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var cH={};

if(this._updateInsets){cH.left=cE.left+cN;
cH.top=cE.top+cN;
}
if(cJ){cH.width=innerWidth+cN;
cH.height=innerHeight+cN;
}
if(cJ||this._updateInsets){content.setStyles(cH);
}
if(cM.size){var cL=this.__qO;

if(cL){cL.setStyles({width:cC+bV,height:cD+bV});
}}
if(cM.size||this._updateInsets){if(this.__qM){this.__qM.resize(cC,cD);
}}
if(cM.size){if(this.__qN){var cE=this.__qN.getInsets();
var cI=cC+cE.left+cE.right;
var cG=cD+cE.top+cE.bottom;
this.__qN.resize(cI,cG);
}}
if(cJ||cM.local||cM.margin){if(this.__qR&&this.hasLayoutChildren()){this.__qR.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cM.position&&this.hasListener(cf)){this.fireDataEvent(cf,this.getBounds());
}
if(cM.size&&this.hasListener(bG)){this.fireDataEvent(bG,this.getBounds());
}delete this._updateInsets;
return cM;
},__qT:null,clearSeparators:function(){var cP=this.__qT;

if(!cP){return;
}var cQ=qx.ui.core.Widget.__qK;
var content=this.getContentElement();
var cO;

for(var i=0,l=cP.length;i<l;i++){cO=cP[i];
cQ.poolDecorator(cO);
content.remove(cO);
}cP.length=0;
},renderSeparator:function(cR,cS){var cT=qx.ui.core.Widget.__qK.getDecoratorElement(cR);
this.getContentElement().add(cT);
cT.resize(cS.width,cS.height);
cT.setStyles({left:cS.left+bV,top:cS.top+bV});
if(!this.__qT){this.__qT=[cT];
}else{this.__qT.push(cT);
}},_computeSizeHint:function(){var db=this.getWidth();
var da=this.getMinWidth();
var cV=this.getMaxWidth();
var cY=this.getHeight();
var cW=this.getMinHeight();
var cX=this.getMaxHeight();
{};
var dc=this._getContentHint();
var cU=this.getInsets();
var de=cU.left+cU.right;
var dd=cU.top+cU.bottom;

if(db==null){db=dc.width+de;
}
if(cY==null){cY=dc.height+dd;
}
if(da==null){da=de;

if(dc.minWidth!=null){da+=dc.minWidth;
}}
if(cW==null){cW=dd;

if(dc.minHeight!=null){cW+=dc.minHeight;
}}
if(cV==null){if(dc.maxWidth==null){cV=Infinity;
}else{cV=dc.maxWidth+de;
}}
if(cX==null){if(dc.maxHeight==null){cX=Infinity;
}else{cX=dc.maxHeight+dd;
}}return {width:db,minWidth:da,maxWidth:cV,height:cY,minHeight:cW,maxHeight:cX};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__qR){this.__qR.invalidateLayoutCache();
}},_getContentHint:function(){var dg=this.__qR;

if(dg){if(this.hasLayoutChildren()){var df;
var dh=dg.getSizeHint();
{};
return dh;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(di){var dm=this.getInsets();
var dq=dm.left+dm.right;
var dp=dm.top+dm.bottom;
var dn=di-dq;
var dk=this._getLayout();

if(dk&&dk.hasHeightForWidth()){var dj=dk.getHeightForWidth(di);
}else{dj=this._getContentHeightForWidth(dn);
}var dl=dj+dp;
return dl;
},_getContentHeightForWidth:function(dr){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dt=this.getPaddingRight();
var dv=this.getPaddingBottom();
var du=this.getPaddingLeft();

if(this.__qM){var ds=this.__qM.getInsets();
{};
top+=ds.top;
dt+=ds.right;
dv+=ds.bottom;
du+=ds.left;
}return {"top":top,"right":dt,"bottom":dv,"left":du};
},getInnerSize:function(){var dx=this.getBounds();

if(!dx){return null;
}var dw=this.getInsets();
return {width:dx.width-dw.left-dw.right,height:dx.height-dw.top-dw.bottom};
},show:function(){this.setVisibility(bR);
},hide:function(){this.setVisibility(bu);
},exclude:function(){this.setVisibility(bM);
},isVisible:function(){return this.getVisibility()===bR;
},isHidden:function(){return this.getVisibility()!==bR;
},isExcluded:function(){return this.getVisibility()===bM;
},isSeeable:function(){var dz=this.getContainerElement().getDomElement();

if(dz){return dz.offsetWidth>0;
}var dy=this;

do{if(!dy.isVisible()){return false;
}
if(dy.isRootWidget()){return true;
}dy=dy.getLayoutParent();
}while(dy);
return false;
},_createContainerElement:function(){var dB={"$$widget":this.toHashCode()};
{};
var dA={zIndex:0,position:cc};
return new qx.html.Element(bW,dA,dB);
},__qU:function(){var dC=this._createContentElement();
{};
dC.setStyles({"position":cc,"zIndex":10});
return dC;
},_createContentElement:function(){return new qx.html.Element(bW,{overflowX:bu,overflowY:bu});
},getContainerElement:function(){return this.__qI;
},getContentElement:function(){return this.__qJ;
},getDecoratorElement:function(){return this.__qM||null;
},getShadowElement:function(){return this.__qN||null;
},__qV:null,getLayoutChildren:function(){var dE=this.__qV;

if(!dE){return this.__qW;
}var dF;

for(var i=0,l=dE.length;i<l;i++){var dD=dE[i];

if(dD.hasUserBounds()||dD.isExcluded()){if(dF==null){dF=dE.concat();
}qx.lang.Array.remove(dF,dD);
}}return dF||dE;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dG=this.__qR;

if(dG){dG.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dH=this.__qV;

if(!dH){return false;
}var dI;

for(var i=0,l=dH.length;i<l;i++){dI=dH[i];

if(!dI.hasUserBounds()&&!dI.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__qW:[],_getChildren:function(){return this.__qV||this.__qW;
},_indexOf:function(dJ){var dK=this.__qV;

if(!dK){return -1;
}return dK.indexOf(dJ);
},_hasChildren:function(){var dL=this.__qV;
return dL!=null&&(!!dL[0]);
},addChildrenToQueue:function(dM){var dN=this.__qV;

if(!dN){return;
}var dO;

for(var i=0,l=dN.length;i<l;i++){dO=dN[i];
dM[dO.$$hash]=dO;
dO.addChildrenToQueue(dM);
}},_add:function(dP,dQ){if(dP.getLayoutParent()==this){qx.lang.Array.remove(this.__qV,dP);
}
if(this.__qV){this.__qV.push(dP);
}else{this.__qV=[dP];
}this.__qX(dP,dQ);
},_addAt:function(dR,dS,dT){if(!this.__qV){this.__qV=[];
}if(dR.getLayoutParent()==this){qx.lang.Array.remove(this.__qV,dR);
}var dU=this.__qV[dS];

if(dU===dR){dR.setLayoutProperties(dT);
}
if(dU){qx.lang.Array.insertBefore(this.__qV,dR,dU);
}else{this.__qV.push(dR);
}this.__qX(dR,dT);
},_addBefore:function(dV,dW,dX){{};

if(dV==dW){return;
}
if(!this.__qV){this.__qV=[];
}if(dV.getLayoutParent()==this){qx.lang.Array.remove(this.__qV,dV);
}qx.lang.Array.insertBefore(this.__qV,dV,dW);
this.__qX(dV,dX);
},_addAfter:function(dY,ea,eb){{};

if(dY==ea){return;
}
if(!this.__qV){this.__qV=[];
}if(dY.getLayoutParent()==this){qx.lang.Array.remove(this.__qV,dY);
}qx.lang.Array.insertAfter(this.__qV,dY,ea);
this.__qX(dY,eb);
},_remove:function(ec){if(!this.__qV){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__qV,ec);
this.__qY(ec);
},_removeAt:function(ed){if(!this.__qV){throw new Error("This widget has no children!");
}var ee=this.__qV[ed];
qx.lang.Array.removeAt(this.__qV,ed);
this.__qY(ee);
return ee;
},_removeAll:function(){if(!this.__qV){return;
}var ef=this.__qV.concat();
this.__qV.length=0;

for(var i=ef.length-1;i>=0;i--){this.__qY(ef[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__qX:function(eg,eh){{};
var parent=eg.getLayoutParent();

if(parent&&parent!=this){parent._remove(eg);
}eg.setLayoutParent(this);
if(eh){eg.setLayoutProperties(eh);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(eg);
}},__qY:function(ei){{};

if(ei.getLayoutParent()!==this){throw new Error("Remove Error: "+ei+" is not a child of this widget!");
}ei.setLayoutParent(null);
if(this.__qR){this.__qR.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(ei);
}},capture:function(ej){this.getContainerElement().capture(ej);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(ek,em,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__qO){return;
}var en=this.__qO=new qx.html.Element;
{};
en.setStyles({position:cc,top:0,left:0,zIndex:7});
var eo=this.getBounds();

if(eo){this.__qO.setStyles({width:eo.width+bV,height:eo.height+bV});
}if(qx.core.Variant.isSet(cb,bo)){en.setStyles({backgroundImage:t+qx.util.ResourceManager.getInstance().toUri(by)+q,backgroundRepeat:cl});
}this.getContainerElement().add(en);
},_applyDecorator:function(ep,eq){{};
var et=qx.ui.core.Widget.__qK;
var er=this.getContainerElement();
if(!this.__qO&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(eq){er.remove(this.__qM);
et.poolDecorator(this.__qM);
}if(ep){var es=this.__qM=et.getDecoratorElement(ep);
es.setStyle(bI,5);
er.add(es);
}else{delete this.__qM;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__qS(eq,ep)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(ep){var eu=this.getBounds();

if(eu){es.resize(eu.width,eu.height);
this.__qO&&
this.__qO.setStyles({width:eu.width+bV,height:eu.height+bV});
}}},_applyShadow:function(ev,ew){var eD=qx.ui.core.Widget.__qL;
var ey=this.getContainerElement();
if(ew){ey.remove(this.__qN);
eD.poolDecorator(this.__qN);
}if(ev){var eA=this.__qN=eD.getDecoratorElement(ev);
ey.add(eA);
var eC=eA.getInsets();
eA.setStyles({left:(-eC.left)+bV,top:(-eC.top)+bV});
var eB=this.getBounds();

if(eB){var ez=eB.width+eC.left+eC.right;
var ex=eB.height+eC.top+eC.bottom;
eA.resize(ez,ex);
}eA.tint(null);
}else{delete this.__qN;
}},_applyToolTipText:function(eE,eF){if(qx.core.Variant.isSet(bF,bP)){if(this.__qQ){return;
}var eG=qx.locale.Manager.getInstance();
this.__qQ=eG.addListener(bA,function(){var eH=this.getToolTipText();

if(eH&&eH.translate){this.setToolTipText(eH.translate());
}},this);
}},_applyTextColor:function(eI,eJ){},_applyZIndex:function(eK,eL){this.getContainerElement().setStyle(bI,eK==null?0:eK);
},_applyVisibility:function(eM,eN){var eO=this.getContainerElement();

if(eM===bR){eO.show();
}else{eO.hide();
}var parent=this.$$parent;

if(parent&&(eN==null||eM==null||eN===bM||eM===bM)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eP,eQ){this.getContainerElement().setStyle(bL,eP==1?null:eP);
if(qx.core.Variant.isSet(cb,bo)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eR=(eP==1||eP==null)?null:0.99;
this.getContentElement().setStyle(bL,eR);
}}},_applyCursor:function(eS,eT){if(eS==null&&!this.isSelectable()){eS=bK;
}this.getContainerElement().setStyle(ba,eS,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(eU,eV){var eW=this.getBackgroundColor();
var eY=this.getContainerElement();

if(this.__qM){this.__qM.tint(eW);
eY.setStyle(bY,null);
}else{var eX=qx.theme.manager.Color.getInstance().resolve(eW);
eY.setStyle(bY,eX);
}},_applyFont:function(fa,fb){},__ra:null,$$stateChanges:null,_forwardStates:null,hasState:function(fc){var fd=this.__ra;
return !!fd&&!!fd[fc];
},addState:function(fe){var ff=this.__ra;

if(!ff){ff=this.__ra={};
}
if(ff[fe]){return;
}this.__ra[fe]=true;
if(fe===cd){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fi=this.__rd;

if(forward&&forward[fe]&&fi){var fg;

for(var fh in fi){fg=fi[fh];

if(fg instanceof qx.ui.core.Widget){fi[fh].addState(fe);
}}}},removeState:function(fj){var fk=this.__ra;

if(!fk||!fk[fj]){return;
}delete this.__ra[fj];
if(fj===cd){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fn=this.__rd;

if(forward&&forward[fj]&&fn){for(var fm in fn){var fl=fn[fm];

if(fl instanceof qx.ui.core.Widget){fl.removeState(fj);
}}}},replaceState:function(fo,fp){var fq=this.__ra;

if(!fq){fq=this.__ra={};
}
if(!fq[fp]){fq[fp]=true;
}
if(fq[fo]){delete fq[fo];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var ft=this.__rd;

if(forward&&forward[fp]&&ft){for(var fs in ft){var fr=ft[fs];

if(fr instanceof qx.ui.core.Widget){fr.replaceState(fo,fp);
}}}},__rb:null,__rc:null,syncAppearance:function(){var fy=this.__ra;
var fx=this.__rb;
var fz=qx.theme.manager.Appearance.getInstance();
var fv=qx.core.Property.$$method.setThemed;
var fD=qx.core.Property.$$method.resetThemed;
if(this.__rc){delete this.__rc;
if(fx){var fu=fz.styleFrom(fx,fy,null,this.getAppearance());
if(fu){fx=null;
}}}if(!fx){var fw=this;
var fC=[];

do{fC.push(fw.$$subcontrol||fw.getAppearance());
}while(fw=fw.$$subparent);
fx=fC.reverse().join(bf).replace(/#[0-9]+/g,bg);
this.__rb=fx;
}var fA=fz.styleFrom(fx,fy,null,this.getAppearance());

if(fA){var fB;

if(fu){for(var fB in fu){if(fA[fB]===undefined){this[fD[fB]]();
}}}{};
for(var fB in fA){fA[fB]===undefined?this[fD[fB]]():this[fv[fB]](fA[fB]);
}}else if(fu){for(var fB in fu){this[fD[fB]]();
}}this.fireDataEvent(cp,this.__ra);
},_applyAppearance:function(fE,fF){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__qP){qx.ui.core.queue.Appearance.add(this);
this.__qP=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__rc=true;
qx.ui.core.queue.Appearance.add(this);
var fI=this.__rd;

if(fI){var fG;

for(var fH in fI){fG=fI[fH];

if(fG instanceof qx.ui.core.Widget){fG.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fJ=this;

while(fJ.getAnonymous()){fJ=fJ.getLayoutParent();

if(!fJ){return null;
}}return fJ;
},getFocusTarget:function(){var fK=this;

if(!fK.getEnabled()){return null;
}
while(fK.getAnonymous()||!fK.getFocusable()){fK=fK.getLayoutParent();

if(!fK||!fK.getEnabled()){return null;
}}return fK;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fL,fM){var fN=this.getFocusElement();
if(fL){var fO=this.getTabIndex();

if(fO==null){fO=1;
}fN.setAttribute(br,fO);
if(qx.core.Variant.isSet(cb,bo)){fN.setAttribute(v,C);
}else{fN.setStyle(x,y);
}}else{if(fN.isNativelyFocusable()){fN.setAttribute(br,-1);
}else if(fM){fN.setAttribute(br,null);
}}},_applyKeepFocus:function(fP){var fQ=this.getFocusElement();
fQ.setAttribute(bz,fP?bP:null);
},_applyKeepActive:function(fR){var fS=this.getContainerElement();
fS.setAttribute(bl,fR?bP:null);
},_applyTabIndex:function(fT){if(fT==null){fT=1;
}else if(fT<1||fT>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&fT!=null){this.getFocusElement().setAttribute(br,fT);
}},_applySelectable:function(fU,fV){if(fV!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(fU);
},_applyEnabled:function(fW,fX){if(fW===false){this.addState(bX);
this.removeState(cd);
if(this.isFocusable()){this.removeState(bq);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(bX);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(fY,ga,name){},_applyContextMenu:function(gb,gc){if(gc){gc.removeState(bt);

if(gc.getOpener()==this){gc.resetOpener();
}
if(!gb){this.removeListener(bt,this._onContextMenuOpen);
gc.removeListener(bp,this._onBeforeContextMenuOpen,this);
}}
if(gb){gb.setOpener(this);
gb.addState(bt);

if(!gc){this.addListener(bt,this._onContextMenuOpen);
gb.addListener(bp,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bR&&this.hasListener(c)){this.fireDataEvent(c,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gd,ge){if(!this.isEnabled()&&gd===true){gd=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gd){this.addListener(cg,this._onDragStart);
this.addListener(ca,this._onDrag);
this.addListener(bH,this._onDragEnd);
this.addListener(bE,this._onDragChange);
}else{this.removeListener(cg,this._onDragStart);
this.removeListener(ca,this._onDrag);
this.removeListener(bH,this._onDragEnd);
this.removeListener(bE,this._onDragChange);
}this.getContainerElement().setAttribute(cq,gd?bP:null);
},_applyDroppable:function(gf,gg){if(!this.isEnabled()&&gf===true){gf=false;
}this.getContainerElement().setAttribute(bb,gf?bP:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bK);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gh=qx.ui.core.DragDropCursor.getInstance();
var gi=e.getCurrentAction();
gi?gh.setAction(gi):gh.resetAction();
},visualizeFocus:function(){this.addState(bq);
},visualizeBlur:function(){this.removeState(bq);
},scrollChildIntoView:function(gj,gk,gl,gm){this.scrollChildIntoViewX(gj,gk,gm);
this.scrollChildIntoViewY(gj,gl,gm);
},scrollChildIntoViewX:function(gn,go,gp){this.getContentElement().scrollChildIntoViewX(gn.getContainerElement(),go,gp);
},scrollChildIntoViewY:function(gq,gr,gs){this.getContentElement().scrollChildIntoViewY(gq.getContainerElement(),gr,gs);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gt){if(!this.__rd){return false;
}return !!this.__rd[gt];
},__rd:null,_getCreatedChildControls:function(){return this.__rd;
},getChildControl:function(gu,gv){if(!this.__rd){if(gv){return null;
}this.__rd={};
}var gw=this.__rd[gu];

if(gw){return gw;
}
if(gv===true){return null;
}return this._createChildControl(gu);
},_showChildControl:function(gx){var gy=this.getChildControl(gx);
gy.show();
return gy;
},_excludeChildControl:function(gz){var gA=this.getChildControl(gz,true);

if(gA){gA.exclude();
}},_isChildControlVisible:function(gB){var gC=this.getChildControl(gB,true);

if(gC){return gC.isVisible();
}return false;
},_createChildControl:function(gD){if(!this.__rd){this.__rd={};
}else if(this.__rd[gD]){throw new Error("Child control '"+gD+"' already created!");
}var gH=gD.indexOf(L);

if(gH==-1){var gE=this._createChildControlImpl(gD);
}else{var gE=this._createChildControlImpl(gD.substring(0,gH),gD.substring(gH+1,gD.length));
}
if(!gE){throw new Error("Unsupported control: "+gD);
}gE.$$subcontrol=gD;
gE.$$subparent=this;
var gF=this.__ra;
var forward=this._forwardStates;

if(gF&&forward&&gE instanceof qx.ui.core.Widget){for(var gG in gF){if(forward[gG]){gE.addState(gG);
}}}this.fireDataEvent(n,gE);
return this.__rd[gD]=gE;
},_createChildControlImpl:function(gI,gJ){return null;
},_disposeChildControls:function(){var gN=this.__rd;

if(!gN){return;
}var gL=qx.ui.core.Widget;

for(var gM in gN){var gK=gN[gM];

if(!gL.contains(this,gK)){gK.destroy();
}else{gK.dispose();
}}delete this.__rd;
},_findTopControl:function(){var gO=this;

while(gO){if(!gO.$$subparent){return gO;
}gO=gO.$$subparent;
}return null;
},getContainerLocation:function(gP){var gQ=this.getContainerElement().getDomElement();
return gQ?qx.bom.element.Location.get(gQ,gP):null;
},getContentLocation:function(gR){var gS=this.getContentElement().getDomElement();
return gS?qx.bom.element.Location.get(gS,gR):null;
},setDomLeft:function(gT){var gU=this.getContainerElement().getDomElement();

if(gU){gU.style.left=gT+bV;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gV){var gW=this.getContainerElement().getDomElement();

if(gW){gW.style.top=gV+bV;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(gX,top){var gY=this.getContainerElement().getDomElement();

if(gY){gY.style.left=gX+bV;
gY.style.top=top+bV;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var ha=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hb=this.getChildren();

for(var i=0,l=hb.length;i<l;i++){ha.add(hb[i].clone());
}}return ha;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(bF,bP)){if(this.__qQ){qx.locale.Manager.getInstance().removeListenerById(this.__qQ);
}}this.getContainerElement().setAttribute(Q,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var hd=qx.ui.core.Widget;
var hc=this.getContainerElement();

if(this.__qM){hc.remove(this.__qM);
hd.__qK.poolDecorator(this.__qM);
}
if(this.__qN){hc.remove(this.__qN);
hd.__qL.poolDecorator(this.__qN);
}this.clearSeparators();
this.__qM=this.__qN=this.__qT=null;
}else{this._disposeArray(z);
this._disposeObjects(E,U);
}this._disposeArray(Y);
this.__ra=this.__rd=null;
this._disposeObjects(g,o,d,r);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);

if(e!=null){this._setLayout(e);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(a,qx.event.type.Data,[g]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(o,p){var q;

switch(o){case l:q=new qx.ui.basic.Atom;
this._add(q);
break;
}return q||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,o);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(r,s){var t=this.getChildControl(l);
r==null?t.resetIcon():t.setIcon(r);
},_applyLabel:function(u,v){var w=this.getChildControl(l);
u==null?w.resetLabel():w.setLabel(u);
},_applyRich:function(x,y){var z=this.getChildControl(l);
z.setRich(x);
}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__sm=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__sm:null,_applyTimeoutInterval:function(h){this.__sm.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__sm){this.__sm.stop();
}this.__sm=null;
}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="marginTop",g="marginLeft",f="scroll",e="qx.client",d="border-box",c="borderBottomWidth",b="borderRightWidth",a="auto",y="padding",x="qx.bom.element.Location",w="paddingLeft",v="static",u="marginBottom",t="visible",s="BODY",r="paddingBottom",q="paddingTop",p="marginRight",n="position",o="margin",l="overflow",m="paddingRight",k="border";
qx.Class.define(x,{statics:{__tg:function(z,A){return qx.bom.element.Style.get(z,A,qx.bom.element.Style.COMPUTED_MODE,false);
},__th:function(B,C){return parseInt(qx.bom.element.Style.get(B,C,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ti:function(D){var G=0,top=0;
if(D.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var F=qx.dom.Node.getWindow(D);
G-=qx.bom.Viewport.getScrollLeft(F);
top-=qx.bom.Viewport.getScrollTop(F);
}else{var E=qx.dom.Node.getDocument(D).body;
D=D.parentNode;
while(D&&D!=E){G+=D.scrollLeft;
top+=D.scrollTop;
D=D.parentNode;
}}return {left:G,top:top};
},__tj:qx.core.Variant.select(e,{"mshtml":function(H){var J=qx.dom.Node.getDocument(H);
var I=J.body;
var K=0;
var top=0;
K-=I.clientLeft+J.documentElement.clientLeft;
top-=I.clientTop+J.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){K+=this.__th(I,i);
top+=this.__th(I,j);
}return {left:K,top:top};
},"webkit":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=M.offsetLeft;
var top=M.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){O+=this.__th(M,i);
top+=this.__th(M,j);
}return {left:O,top:top};
},"gecko":function(P){var Q=qx.dom.Node.getDocument(P).body;
var R=Q.offsetLeft;
var top=Q.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){R+=this.__th(Q,g);
top+=this.__th(Q,h);
}if(qx.bom.element.BoxSizing.get(Q)!==d){R+=this.__th(Q,i);
top+=this.__th(Q,j);
}return {left:R,top:top};
},"default":function(S){var T=qx.dom.Node.getDocument(S).body;
var U=T.offsetLeft;
var top=T.offsetTop;
return {left:U,top:top};
}}),__tk:qx.core.Variant.select(e,{"mshtml|webkit":function(V){var X=qx.dom.Node.getDocument(V);
if(V.getBoundingClientRect){var Y=V.getBoundingClientRect();
var ba=Y.left;
var top=Y.top;
}else{var ba=V.offsetLeft;
var top=V.offsetTop;
V=V.offsetParent;
var W=X.body;
while(V&&V!=W){ba+=V.offsetLeft;
top+=V.offsetTop;
ba+=this.__th(V,i);
top+=this.__th(V,j);
V=V.offsetParent;
}}return {left:ba,top:top};
},"gecko":function(bb){if(bb.getBoundingClientRect){var be=bb.getBoundingClientRect();
var bf=Math.round(be.left);
var top=Math.round(be.top);
}else{var bf=0;
var top=0;
var bc=qx.dom.Node.getDocument(bb).body;
var bd=qx.bom.element.BoxSizing;

if(bd.get(bb)!==d){bf-=this.__th(bb,i);
top-=this.__th(bb,j);
}
while(bb&&bb!==bc){bf+=bb.offsetLeft;
top+=bb.offsetTop;
if(bd.get(bb)!==d){bf+=this.__th(bb,i);
top+=this.__th(bb,j);
}if(bb.parentNode&&this.__tg(bb.parentNode,l)!=t){bf+=this.__th(bb.parentNode,i);
top+=this.__th(bb.parentNode,j);
}bb=bb.offsetParent;
}}return {left:bf,top:top};
},"default":function(bg){var bi=0;
var top=0;
var bh=qx.dom.Node.getDocument(bg).body;
while(bg&&bg!==bh){bi+=bg.offsetLeft;
top+=bg.offsetTop;
bg=bg.offsetParent;
}return {left:bi,top:top};
}}),get:function(bj,bk){if(bj.tagName==s){var location=this.__tl(bj);
var br=location.left;
var top=location.top;
}else{var bl=this.__tj(bj);
var bq=this.__tk(bj);
var scroll=this.__ti(bj);
var br=bq.left+bl.left-scroll.left;
var top=bq.top+bl.top-scroll.top;
}var bm=br+bj.offsetWidth;
var bn=top+bj.offsetHeight;

if(bk){if(bk==y||bk==f){var bo=qx.bom.element.Overflow.getX(bj);

if(bo==f||bo==a){bm+=bj.scrollWidth-bj.offsetWidth+this.__th(bj,i)+this.__th(bj,b);
}var bp=qx.bom.element.Overflow.getY(bj);

if(bp==f||bp==a){bn+=bj.scrollHeight-bj.offsetHeight+this.__th(bj,j)+this.__th(bj,c);
}}
switch(bk){case y:br+=this.__th(bj,w);
top+=this.__th(bj,q);
bm-=this.__th(bj,m);
bn-=this.__th(bj,r);
case f:br-=bj.scrollLeft;
top-=bj.scrollTop;
bm-=bj.scrollLeft;
bn-=bj.scrollTop;
case k:br+=this.__th(bj,i);
top+=this.__th(bj,j);
bm-=this.__th(bj,b);
bn-=this.__th(bj,c);
break;
case o:br-=this.__th(bj,g);
top-=this.__th(bj,h);
bm+=this.__th(bj,p);
bn+=this.__th(bj,u);
break;
}}return {left:br,top:top,right:bm,bottom:bn};
},__tl:qx.core.Variant.select(e,{"default":function(bs){var top=bs.offsetTop+this.__th(bs,h);
var bt=bs.offsetLeft+this.__th(bs,g);
return {left:bt,top:top};
},"mshtml":function(bu){var top=bu.offsetTop;
var bv=bu.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__th(bu,h);
bv+=this.__th(bu,g);
}return {left:bv,top:top};
},"gecko":function(bw){var top=bw.offsetTop+this.__th(bw,h)+this.__th(bw,i);
var bx=bw.offsetLeft+this.__th(bw,g)+this.__th(bw,j);
return {left:bx,top:top};
}}),getLeft:function(by,bz){return this.get(by,bz).left;
},getTop:function(bA,bB){return this.get(bA,bB).top;
},getRight:function(bC,bD){return this.get(bC,bD).right;
},getBottom:function(bE,bF){return this.get(bE,bF).bottom;
},getRelative:function(bG,bH,bI,bJ){var bL=this.get(bG,bI);
var bK=this.get(bH,bJ);
return {left:bL.left-bK.left,top:bL.top-bK.top,right:bL.right-bK.right,bottom:bL.bottom-bK.bottom};
},getPosition:function(bM){return this.getRelative(bM,this.getOffsetParent(bM));
},getOffsetParent:function(bN){var bP=bN.offsetParent||document.body;
var bO=qx.bom.element.Style;

while(bP&&(!/^body|html$/i.test(bP.tagName)&&bO.get(bP,n)===v)){bP=bP.offsetParent;
}return bP;
}}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__pS:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__pT:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__pU:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__pV:function(r){var s=this.__pU;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(t){{};
},"default":function(u){var w=this.__pT;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+m+u+c;
}}return v;
}}),get:qx.core.Variant.select(q,{"mshtml":function(x){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(x))){if(!this.__pV(x)){return d;
}}return k;
},"default":function(y){var A=this.__pS;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(B,C){{};
},"default":function(D,E){var F=this.__pS;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
})();
(function(){var k="",j="qx.client",i="hidden",h="-moz-scrollbars-none",g="overflow",f=";",e="overflowY",d=":",b="overflowX",a="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",n="100px",l="qx.bom.element.Overflow",m="overflow-x";
qx.Class.define(l,{statics:{__kH:null,getScrollbarWidth:function(){if(this.__kH!==null){return this.__kH;
}var z=qx.bom.element.Style;
var B=function(F,G){return parseInt(z.get(F,G),10)||0;
};
var C=function(H){return (z.get(H,v)==y?0:B(H,r));
};
var A=function(I){return (z.get(I,w)==y?0:B(I,p));
};
var E=qx.core.Variant.select(j,{"mshtml":function(J){if(z.get(J,e)==i||J.clientWidth==0){return C(J);
}return Math.max(0,J.offsetWidth-J.clientLeft-J.clientWidth);
},"default":function(K){if(K.clientWidth==0){var L=z.get(K,g);
var M=(L==x||L==o?16:0);
return Math.max(0,C(K)+M);
}return Math.max(0,(K.offsetWidth-K.clientWidth-A(K)));
}});
var D=function(N){return E(N)-C(N);
};
var t=document.createElement(u);
var s=t.style;
s.height=s.width=n;
s.overflow=x;
document.body.appendChild(t);
var c=D(t);
this.__kH=c?c:16;
document.body.removeChild(t);
return this.__kH;
},_compile:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O,P){if(P==i){P=h;
}return a+P+f;
}:
function(Q,R){return Q+d+R+f;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(S,T){return a+T+f;
}:
function(U,V){return U+d+V+f;
},"default":function(W,X){return W+d+X+f;
}}),compileX:function(Y){return this._compile(m,Y);
},compileY:function(ba){return this._compile(q,ba);
},getX:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bb,bc){var bd=qx.bom.element.Style.get(bb,g,bc,false);

if(bd===h){bd=i;
}return bd;
}:
function(be,bf){return qx.bom.element.Style.get(be,b,bf,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bg,bh){return qx.bom.element.Style.get(bg,g,bh,false);
}:
function(bi,bj){return qx.bom.element.Style.get(bi,b,bj,false);
},"default":function(bk,bl){return qx.bom.element.Style.get(bk,b,bl,false);
}}),setX:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bm,bn){if(bn==i){bn=h;
}bm.style.overflow=bn;
}:
function(bo,bp){bo.style.overflowX=bp;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bq,br){bq.style.overflow=br;
}:
function(bs,bt){bs.style.overflowX=bt;
},"default":function(bu,bv){bu.style.overflowX=bv;
}}),resetX:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bw){bw.style.overflow=k;
}:
function(bx){bx.style.overflowX=k;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(by,bz){by.style.overflow=k;
}:
function(bA,bB){bA.style.overflowX=k;
},"default":function(bC){bC.style.overflowX=k;
}}),getY:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bD,bE){var bF=qx.bom.element.Style.get(bD,g,bE,false);

if(bF===h){bF=i;
}return bF;
}:
function(bG,bH){return qx.bom.element.Style.get(bG,e,bH,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bI,bJ){return qx.bom.element.Style.get(bI,g,bJ,false);
}:
function(bK,bL){return qx.bom.element.Style.get(bK,e,bL,false);
},"default":function(bM,bN){return qx.bom.element.Style.get(bM,e,bN,false);
}}),setY:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bO,bP){if(bP===i){bP=h;
}bO.style.overflow=bP;
}:
function(bQ,bR){bQ.style.overflowY=bR;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bS,bT){bS.style.overflow=bT;
}:
function(bU,bV){bU.style.overflowY=bV;
},"default":function(bW,bX){bW.style.overflowY=bX;
}}),resetY:qx.core.Variant.select(j,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bY){bY.style.overflow=k;
}:
function(ca){ca.style.overflowY=k;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cb,cc){cb.style.overflow=k;
}:
function(cd,ce){cd.style.overflowY=k;
},"default":function(cf){cf.style.overflowY=k;
}})}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__re:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return f+(this.__re[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__re[p]||p;
},reset:function(q){q.style.cursor=g;
}}});
})();
(function(){var o="auto",n="px",m=",",l="clip:auto;",k="rect(",j=");",i="",h=")",g="qx.bom.element.Clip",f="string",c="clip:rect(",e=" ",d="clip",b="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(g,{statics:{compile:function(p){if(!p){return l;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?o:t+n);
u=o;
}else{q=(t==null?o:u+t+n);
u=u+n;
}
if(top==null){r=(s==null?o:s+n);
top=o;
}else{r=(s==null?o:top+s+n);
top=top+n;
}return c+top+m+q+m+r+m+u+j;
},get:function(v,w){var y=qx.bom.element.Style.get(v,d,w,false);
var E,top,C,B;
var x,z;

if(typeof y===f&&y!==o&&y!==i){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var D=RegExp.$1;
if(/,/.test(D)){var A=D.split(m);
}else{var A=D.split(e);
}top=qx.lang.String.trim(A[0]);
x=qx.lang.String.trim(A[1]);
z=qx.lang.String.trim(A[2]);
E=qx.lang.String.trim(A[3]);
if(E===o){E=null;
}
if(top===o){top=null;
}
if(x===o){x=null;
}
if(z===o){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(E!=null){E=parseInt(E,10);
}if(x!=null&&E!=null){C=x-E;
}else if(x!=null){C=x;
}
if(z!=null&&top!=null){B=z-top;
}else if(z!=null){B=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:E||null,top:top||null,width:C||null,height:B||null};
},set:function(F,G){if(!G){F.style.clip=b;
return;
}var L=G.left;
var top=G.top;
var K=G.width;
var J=G.height;
var H,I;

if(L==null){H=(K==null?o:K+n);
L=o;
}else{H=(K==null?o:L+K+n);
L=L+n;
}
if(top==null){I=(J==null?o:J+n);
top=o;
}else{I=(J==null?o:top+J+n);
top=top+n;
}F.style.clip=k+top+m+H+m+I+m+L+h;
},reset:function(M){M.style.clip=a;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Variant.select(l,{"mshtml":function(n){if(n>=1){n=1;
}
if(n<0.00001){n=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+n+k;
}else{return d+(n*100)+f;
}},"gecko":function(o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+o+k;
}else{return j+o+k;
}},"default":function(p){if(p>=1){return m;
}return j+p+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(q,r){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(r>=1){r=m;
}q.style.opacity=r;
}else{var s=qx.bom.element.Style.get(q,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(r>=1){r=1;
}
if(r<0.00001){r=0;
}if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;
}q.style.filter=s.replace(/alpha\([^\)]*\)/gi,m)+c+r*100+e;
}},"gecko":function(t,u){if(u>=1){u=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=u;
}else{t.style.opacity=u;
}},"default":function(v,w){if(w>=1){w=m;
}v.style.opacity=w;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(x){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){x.style.opacity=m;
}else{var y=qx.bom.element.Style.get(x,h,qx.bom.element.Style.COMPUTED_MODE,false);
x.style.filter=y.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(z){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=m;
}else{z.style.opacity=m;
}},"default":function(A){A.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var D=qx.bom.element.Style.get(B,i,C,false);

if(D!=null){return parseFloat(D);
}return 1.0;
}else{var E=qx.bom.element.Style.get(B,h,C,false);

if(E){var D=E.match(/alpha\(opacity=(.*)\)/);

if(D&&D[1]){return parseFloat(D[1])/100;
}}return 1.0;
}},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,i,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})},defer:function(L){L.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var m="",k="qx.client",h="userSelect",g="style",f="MozUserModify",e="px",d="float",c="borderImage",b="styleFloat",a="appearance",F="pixelHeight",E='Ms',D=":",C="cssFloat",B="pixelTop",A="pixelLeft",z='O',y="qx.bom.element.Style",x='Khtml',w='string',t="pixelRight",u='Moz',r="pixelWidth",s="pixelBottom",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(y,{statics:{__sR:function(){var G=[a,h,q,c];
var K={};
var H=document.documentElement.style;
var L=[u,o,x,z,E];

for(var i=0,l=G.length;i<l;i++){var M=G[i];
var I=M;

if(H[M]){K[I]=M;
continue;
}M=qx.lang.String.firstUp(M);

for(var j=0,N=L.length;j<N;j++){var J=L[j]+M;

if(typeof H[J]==w){K[I]=J;
break;
}}}this.__sS=K;
this.__sS[n]=qx.core.Variant.select(k,{"gecko":f,"webkit":v,"default":h});
this.__sT={};

for(var I in K){this.__sT[I]=this.__sX(K[I]);
}this.__sS[d]=qx.core.Variant.select(k,{"mshtml":b,"default":C});
},__sU:{width:r,height:F,left:A,right:t,top:B,bottom:s},__sV:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__sV;
var R=this.__sT;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(this.__sX(name),D,P,p);
}}return Q.join(m);
},__sW:{},__sX:function(T){var U=this.__sW;
var V=U[T];

if(!V){V=U[T]=qx.lang.String.hyphenate(T);
}return V;
},setCss:qx.core.Variant.select(k,{"mshtml":function(W,X){W.style.cssText=X;
},"default":function(Y,ba){Y.setAttribute(g,ba);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(bb){return bb.style.cssText.toLowerCase();
},"default":function(bc){return bc.getAttribute(g);
}}),isPropertySupported:function(bd){return (this.__sV[bd]||this.__sS[bd]||bd in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(be,name,bf,bg){{};
name=this.__sS[name]||name;
if(bg!==false&&this.__sV[name]){return this.__sV[name].set(be,bf);
}else{be.style[name]=bf!==null?bf:m;
}},setStyles:function(bh,bi,bj){{};
var bm=this.__sS;
var bo=this.__sV;
var bk=bh.style;

for(var bn in bi){var bl=bi[bn];
var name=bm[bn]||bn;

if(bl===undefined){if(bj!==false&&bo[name]){bo[name].reset(bh);
}else{bk[name]=m;
}}else{if(bj!==false&&bo[name]){bo[name].set(bh,bl);
}else{bk[name]=bl!==null?bl:m;
}}}},reset:function(bp,name,bq){name=this.__sS[name]||name;
if(bq!==false&&this.__sV[name]){return this.__sV[name].reset(bp);
}else{bp.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(br,name,bs,bt){name=this.__sS[name]||name;
if(bt!==false&&this.__sV[name]){return this.__sV[name].get(br,bs);
}if(!br.currentStyle){return br.style[name]||m;
}switch(bs){case this.LOCAL_MODE:return br.style[name]||m;
case this.CASCADED_MODE:return br.currentStyle[name]||m;
default:var bx=br.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bx)){return bx;
}var bw=this.__sU[name];

if(bw){var bu=br.style[name];
br.style[name]=bx||0;
var bv=br.style[bw]+e;
br.style[name]=bu;
return bv;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bx)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bx;
}},"default":function(by,name,bz,bA){name=this.__sS[name]||name;
if(bA!==false&&this.__sV[name]){return this.__sV[name].get(by,bz);
}switch(bz){case this.LOCAL_MODE:return by.style[name]||m;
case this.CASCADED_MODE:if(by.currentStyle){return by.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bB=qx.dom.Node.getDocument(by);
var bC=bB.defaultView.getComputedStyle(by,null);
return bC?bC[name]:m;
}}})},defer:function(bD){bD.__sR();
}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(g){if(qx.bom.client.Engine.VERSION>=8){return (g||window).document.documentMode===5;
}else{return (g||window).document.compatMode!==f;
}},"webkit":function(h){if(document.compatMode===undefined){var i=(h||window).document.createElement(a);
i.style.cssText=e;
return i.style.width===c?true:false;
}else{return (h||window).document.compatMode!==f;
}},"default":function(j){return (j||window).document.compatMode!==f;
}}),isStandardMode:function(k){return !this.isQuirksMode(k);
},getWidth:function(l){var m=(l||window).document;
var n=qx.bom.Viewport.getWidth(l);
var scroll=this.isStandardMode(l)?m.documentElement.scrollWidth:m.body.scrollWidth;
return Math.max(scroll,n);
},getHeight:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getHeight(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollHeight:p.body.scrollHeight;
return Math.max(scroll,q);
}}});
})();
(function(){var b="qx.client",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(c){if(qx.bom.client.Engine.VERSION<9.5){return (c||window).document.body.clientWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},"webkit":function(e){if(qx.bom.client.Engine.VERSION<523.15){return (e||window).innerWidth;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}},"default":function(g){var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(i){if(qx.bom.client.Engine.VERSION<9.5){return (i||window).document.body.clientHeight;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientHeight:j.body.clientHeight;
}},"webkit":function(k){if(qx.bom.client.Engine.VERSION<523.15){return (k||window).innerHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"default":function(m){var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollLeft||p.body.scrollLeft;
},"default":function(q){return (q||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(r){var s=(r||window).document;
return s.documentElement.scrollTop||s.body.scrollTop;
},"default":function(t){return (t||window).pageYOffset;
}}),getOrientation:function(u){var v=(u||window).orientation;

if(v==null){v=this.getWidth(u)>this.getHeight(u)?90:0;
}return v;
},isLandscape:function(w){return Math.abs(this.getOrientation(w))==90;
},isPortrait:function(x){var y=this.getOrientation(x);
return (y==0||y==180);
}}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b='__le',a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__le=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__lf:null,compute:function(p,q,r,s,t,u,v){this.__lf=this.__lf||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__lf.set({axisX:this.__lj(u),axisY:this.__lj(v),edge:x,align:w});
return this.__lf.compute(p,q,r,s);
},__lg:null,__lh:null,__li:null,__lj:function(z){switch(z){case a:this.__lg=this.__lg||new qx.util.placement.DirectAxis();
return this.__lg;
case d:this.__lh=this.__lh||new qx.util.placement.KeepAlignAxis();
return this.__lh;
case c:this.__li=this.__li||new qx.util.placement.BestFitAxis();
return this.__li;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__le:null,compute:function(A,B,C,D){{};
var E=this.getAxisX()||this.__le;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__lk());
var F=this.getAxisY()||this.__le;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__ll());
return {left:G,top:top};
},__lk:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__ll:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(k,l,m,n){switch(n){case e:return l.start-m.end-k;
case b:return l.end+m.start;
case d:return l.start+m.start;
case c:return l.end-m.end-k;
}},_isInRange:function(o,p,q){return o>=0&&o+p<=q;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__sN:{},remove:function(c){delete this.__sN[c.$$hash];
},add:function(d){this.__sN[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var e=this.__sQ();
for(var i=e.length-1;i>=0;i--){var f=e[i];
if(f.hasValidLayout()){continue;
}if(f.isRootWidget()&&!f.hasUserBounds()){var h=f.getSizeHint();
f.renderLayout(0,0,h.width,h.height);
}else{var g=f.getBounds();
f.renderLayout(g.left,g.top,g.width,g.height);
}}},getNestingLevel:function(j){var k=this.__sP;
var m=0;
var parent=j;
while(true){if(k[parent.$$hash]!=null){m+=k[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
m+=1;
}var l=m;

while(j&&j!==parent){k[j.$$hash]=l--;
j=j.$$parent;
}return m;
},__sO:function(){var s=qx.ui.core.queue.Visibility;
this.__sP={};
var r=[];
var q=this.__sN;
var n,p;

for(var o in q){n=q[o];

if(s.isVisible(n)){p=this.getNestingLevel(n);
if(!r[p]){r[p]={};
}r[p][o]=n;
delete q[o];
}}return r;
},__sQ:function(){var w=[];
var y=this.__sO();

for(var v=y.length-1;v>=0;v--){if(!y[v]){continue;
}
for(var u in y[v]){var t=y[v][u];
if(v==0||t.isRootWidget()||t.hasUserBounds()){w.push(t);
t.invalidateLayoutCache();
continue;
}var A=t.getSizeHint(false);

if(A){t.invalidateLayoutCache();
var x=t.getSizeHint();
var z=(!t.getBounds()||A.minWidth!==x.minWidth||A.width!==x.width||A.maxWidth!==x.maxWidth||A.minHeight!==x.minHeight||A.height!==x.height||A.maxHeight!==x.maxHeight);
}else{z=true;
}
if(z){var parent=t.getLayoutParent();

if(!y[v-1]){y[v-1]={};
}y[v-1][parent.$$hash]=parent;
}else{w.push(t);
}}}return w;
}}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__jJ={};
this.__jK=qx.lang.Function.bind(this.__jO,this);
this.__jL=false;
},members:{__jM:null,__jN:null,__jJ:null,__jL:null,__jK:null,schedule:function(c){if(this.__jM==null){this.__jM=window.setTimeout(this.__jK,0);
}var d=c.toHashCode();
if(this.__jN&&this.__jN[d]){return;
}this.__jJ[d]=c;
this.__jL=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__jN&&this.__jN[f]){this.__jN[f]=null;
return;
}delete this.__jJ[f];
if(qx.lang.Object.isEmpty(this.__jJ)&&this.__jM!=null){window.clearTimeout(this.__jM);
this.__jM=null;
}},__jO:qx.event.GlobalError.observeMethod(function(){this.__jM=null;
while(this.__jL){this.__jN=qx.lang.Object.clone(this.__jJ);
this.__jJ={};
this.__jL=false;

for(var h in this.__jN){var g=this.__jN[h];

if(g){this.__jN[h]=null;
g.call();
}}}this.__jN=null;
})},destruct:function(){if(this.__jM!=null){window.clearTimeout(this.__jM);
}this.__jK=this.__jJ=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__lO=b;
this.__lP=c||null;
this.__lQ=qx.util.DeferredCallManager.getInstance();
},members:{__lO:null,__lP:null,__lQ:null,cancel:function(){this.__lQ.cancel(this);
},schedule:function(){this.__lQ.schedule(this);
},call:function(){this.__lP?this.__lO.apply(this.__lP):this.__lO();
}},destruct:function(d,e){this.cancel();
this.__lP=this.__lO=this.__lQ=null;
}});
})();
(function(){var m="element",k="qx.client",j="qxSelectable",h="off",g="on",f="text",d="div",c="",b="mshtml",a="none",F="scroll",E="qx.html.Element",D="|capture|",C="activate",B="blur",A="__qw",z="deactivate",w="capture",v="userSelect",u="-moz-none",s="visible",t="releaseCapture",q="|bubble|",r="tabIndex",o="focus",p="MozUserSelect",n="hidden";
qx.Class.define(E,{extend:qx.core.Object,construct:function(G,H,I){qx.core.Object.call(this);
this.__qa=G||d;
this.__qb=H||null;
this.__qc=I||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__qd:{},_scheduleFlush:function(J){qx.html.Element.__qH.schedule();
},flush:function(){var U;
{};
var M=this.__qe();
var L=M.getFocus();

if(L&&this.__qi(L)){M.blur(L);
}var bc=M.getActive();

if(bc&&this.__qi(bc)){qx.bom.Element.deactivate(bc);
}var P=this.__qg();

if(P&&this.__qi(P)){qx.bom.Element.releaseCapture(P);
}var V=[];
var W=this._modified;

for(var T in W){U=W[T];
if(U.__qA()){if(U.__qj&&qx.dom.Hierarchy.isRendered(U.__qj)){V.push(U);
}else{{};
U.__qz();
}delete W[T];
}}
for(var i=0,l=V.length;i<l;i++){U=V[i];
{};
U.__qz();
}var R=this._visibility;

for(var T in R){U=R[T];
var X=U.__qj;

if(!X){delete R[T];
continue;
}{};
if(!U.$$disposed){X.style.display=U.__qm?c:a;
if(qx.core.Variant.isSet(k,b)){if(!(document.documentMode>=8)){X.style.visibility=U.__qm?s:n;
}}}delete R[T];
}var scroll=this._scroll;

for(var T in scroll){U=scroll[T];
var bd=U.__qj;

if(bd&&bd.offsetWidth){var O=true;
if(U.__qp!=null){U.__qj.scrollLeft=U.__qp;
delete U.__qp;
}if(U.__qq!=null){U.__qj.scrollTop=U.__qq;
delete U.__qq;
}var Y=U.__qn;

if(Y!=null){var S=Y.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewX(S,bd,Y.align);
delete U.__qn;
}else{O=false;
}}var ba=U.__qo;

if(ba!=null){var S=ba.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewY(S,bd,ba.align);
delete U.__qo;
}else{O=false;
}}if(O){delete scroll[T];
}}}var N={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bb=this._actions[i];
var X=bb.element.__qj;

if(!X||!N[bb.type]&&!bb.element.__qA()){continue;
}var Q=bb.args;
Q.unshift(X);
qx.bom.Element[bb.type].apply(qx.bom.Element,Q);
}this._actions=[];
for(var T in this.__qd){var K=this.__qd[T];
var bd=K.element.__qj;

if(bd){qx.bom.Selection.set(bd,K.start,K.end);
delete this.__qd[T];
}}qx.event.handler.Appear.refresh();
},__qe:function(){if(!this.__qf){var be=qx.event.Registration.getManager(window);
this.__qf=be.getHandler(qx.event.handler.Focus);
}return this.__qf;
},__qg:function(){if(!this.__qh){var bf=qx.event.Registration.getManager(window);
this.__qh=bf.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__qh.getCaptureElement();
},__qi:function(bg){var bh=qx.core.ObjectRegistry.fromHashCode(bg.$$element);
return bh&&!bh.__qA();
}},members:{__qa:null,__qj:null,__qk:false,__ql:true,__qm:true,__qn:null,__qo:null,__qp:null,__qq:null,__qr:null,__qs:null,__qt:null,__qb:null,__qc:null,__qu:null,__qv:null,__qw:null,__qx:null,__qy:null,_scheduleChildrenUpdate:function(){if(this.__qx){return;
}this.__qx=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__qa);
},__qz:function(){{};
var length;
var bi=this.__qw;

if(bi){length=bi.length;
var bj;

for(var i=0;i<length;i++){bj=bi[i];

if(bj.__qm&&bj.__ql&&!bj.__qj){bj.__qz();
}}}
if(!this.__qj){this.__qj=this._createDomElement();
this.__qj.$$element=this.$$hash;
this._copyData(false);

if(bi&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__qx){this._syncChildren();
}}delete this.__qx;
},_insertChildren:function(){var bk=this.__qw;
var length=bk.length;
var bm;

if(length>2){var bl=document.createDocumentFragment();

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__qj&&bm.__ql){bl.appendChild(bm.__qj);
}}this.__qj.appendChild(bl);
}else{var bl=this.__qj;

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__qj&&bm.__ql){bl.appendChild(bm.__qj);
}}}},_syncChildren:function(){var br;
var bw=qx.core.ObjectRegistry;
var bn=this.__qw;
var bu=bn.length;
var bo;
var bs;
var bq=this.__qj;
var bt=bq.childNodes;
var bp=0;
var bv;
{};
for(var i=bt.length-1;i>=0;i--){bv=bt[i];
bs=bw.fromHashCode(bv.$$element);

if(!bs||!bs.__ql||bs.__qy!==this){bq.removeChild(bv);
{};
}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__ql){bs=bo.__qj;
bv=bt[bp];

if(!bs){continue;
}if(bs!=bv){if(bv){bq.insertBefore(bs,bv);
}else{bq.appendChild(bs);
}{};
}bp++;
}}{};
},_copyData:function(bx){var bB=this.__qj;
var bA=this.__qc;

if(bA){var by=qx.bom.element.Attribute;

for(var bC in bA){by.set(bB,bC,bA[bC]);
}}var bA=this.__qb;

if(bA){var bz=qx.bom.element.Style;

if(bx){bz.setStyles(bB,bA);
}else{bz.setCss(bB,bz.compile(bA));
}}var bA=this.__qu;

if(bA){for(var bC in bA){this._applyProperty(bC,bA[bC]);
}}var bA=this.__qv;

if(bA){qx.event.Registration.getManager(bB).importListeners(bB,bA);
delete this.__qv;
}},_syncData:function(){var bH=this.__qj;
var bG=qx.bom.element.Attribute;
var bE=qx.bom.element.Style;
var bF=this.__qs;

if(bF){var bK=this.__qc;

if(bK){var bI;

for(var bJ in bF){bI=bK[bJ];

if(bI!==undefined){bG.set(bH,bJ,bI);
}else{bG.reset(bH,bJ);
}}}this.__qs=null;
}var bF=this.__qr;

if(bF){var bK=this.__qb;

if(bK){var bD={};

for(var bJ in bF){bD[bJ]=bK[bJ];
}bE.setStyles(bH,bD);
}this.__qr=null;
}var bF=this.__qt;

if(bF){var bK=this.__qu;

if(bK){var bI;

for(var bJ in bF){this._applyProperty(bJ,bK[bJ]);
}}this.__qt=null;
}},__qA:function(){var bL=this;
while(bL){if(bL.__qk){return true;
}
if(!bL.__ql||!bL.__qm){return false;
}bL=bL.__qy;
}return false;
},__qB:function(bM){if(bM.__qy===this){throw new Error("Child is already in: "+bM);
}
if(bM.__qk){throw new Error("Root elements could not be inserted into other ones.");
}if(bM.__qy){bM.__qy.remove(bM);
}bM.__qy=this;
if(!this.__qw){this.__qw=[];
}if(this.__qj){this._scheduleChildrenUpdate();
}},__qC:function(bN){if(bN.__qy!==this){throw new Error("Has no child: "+bN);
}if(this.__qj){this._scheduleChildrenUpdate();
}delete bN.__qy;
},__qD:function(bO){if(bO.__qy!==this){throw new Error("Has no child: "+bO);
}if(this.__qj){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__qw||null;
},getChild:function(bP){var bQ=this.__qw;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var bR=this.__qw;
return bR&&bR[0]!==undefined;
},indexOf:function(bS){var bT=this.__qw;
return bT?bT.indexOf(bS):-1;
},hasChild:function(bU){var bV=this.__qw;
return bV&&bV.indexOf(bU)!==-1;
},add:function(bW){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__qB(arguments[i]);
}this.__qw.push.apply(this.__qw,arguments);
}else{this.__qB(bW);
this.__qw.push(bW);
}return this;
},addAt:function(bX,bY){this.__qB(bX);
qx.lang.Array.insertAt(this.__qw,bX,bY);
return this;
},remove:function(ca){var cb=this.__qw;

if(!cb){return;
}
if(arguments[1]){var cc;

for(var i=0,l=arguments.length;i<l;i++){cc=arguments[i];
this.__qC(cc);
qx.lang.Array.remove(cb,cc);
}}else{this.__qC(ca);
qx.lang.Array.remove(cb,ca);
}return this;
},removeAt:function(cd){var ce=this.__qw;

if(!ce){throw new Error("Has no children!");
}var cf=ce[cd];

if(!cf){throw new Error("Has no child at this position!");
}this.__qC(cf);
qx.lang.Array.removeAt(this.__qw,cd);
return this;
},removeAll:function(){var cg=this.__qw;

if(cg){for(var i=0,l=cg.length;i<l;i++){this.__qC(cg[i]);
}cg.length=0;
}return this;
},getParent:function(){return this.__qy||null;
},insertInto:function(parent,ch){parent.__qB(this);

if(ch==null){parent.__qw.push(this);
}else{qx.lang.Array.insertAt(this.__qw,this,ch);
}return this;
},insertBefore:function(ci){var parent=ci.__qy;
parent.__qB(this);
qx.lang.Array.insertBefore(parent.__qw,this,ci);
return this;
},insertAfter:function(cj){var parent=cj.__qy;
parent.__qB(this);
qx.lang.Array.insertAfter(parent.__qw,this,cj);
return this;
},moveTo:function(ck){var parent=this.__qy;
parent.__qD(this);
var cl=parent.__qw.indexOf(this);

if(cl===ck){throw new Error("Could not move to same index!");
}else if(cl<ck){ck--;
}qx.lang.Array.removeAt(parent.__qw,cl);
qx.lang.Array.insertAt(parent.__qw,this,ck);
return this;
},moveBefore:function(cm){var parent=this.__qy;
return this.moveTo(parent.__qw.indexOf(cm));
},moveAfter:function(cn){var parent=this.__qy;
return this.moveTo(parent.__qw.indexOf(cn)+1);
},free:function(){var parent=this.__qy;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__qw){return;
}parent.__qC(this);
qx.lang.Array.remove(parent.__qw,this);
return this;
},getDomElement:function(){return this.__qj||null;
},getNodeName:function(){return this.__qa;
},setNodeName:function(name){this.__qa=name;
},setRoot:function(co){this.__qk=co;
},useMarkup:function(cp){if(this.__qj){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(k,b)){var cq=document.createElement(d);
}else{var cq=qx.bom.Element.getHelperElement();
}cq.innerHTML=cp;
this.useElement(cq.firstChild);
return this.__qj;
},useElement:function(cr){if(this.__qj){throw new Error("Could not overwrite existing element!");
}this.__qj=cr;
this.__qj.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ct=this.getAttribute(r);

if(ct>=1){return true;
}var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ct>=0&&cs[this.__qa]){return true;
}return false;
},setSelectable:qx.core.Variant.select(k,{"webkit":function(cu){this.setAttribute(j,cu?g:h);
this.setStyle(v,cu?f:a);
},"gecko":function(cv){this.setAttribute(j,cv?g:h);
this.setStyle(p,cv?f:u);
},"default":function(cw){this.setAttribute(j,cw?g:h);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__qa];
},include:function(){if(this.__ql){return;
}delete this.__ql;

if(this.__qy){this.__qy._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__ql){return;
}this.__ql=false;

if(this.__qy){this.__qy._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__ql===true;
},show:function(){if(this.__qm){return;
}
if(this.__qj){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__qy){this.__qy._scheduleChildrenUpdate();
}delete this.__qm;
},hide:function(){if(!this.__qm){return;
}
if(this.__qj){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__qm=false;
},isVisible:function(){return this.__qm===true;
},scrollChildIntoViewX:function(cx,cy,cz){var cA=this.__qj;
var cB=cx.getDomElement();

if(cz!==false&&cA&&cA.offsetWidth&&cB&&cB.offsetWidth){qx.bom.element.Scroll.intoViewX(cB,cA,cy);
}else{this.__qn={element:cx,align:cy};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__qp;
},scrollChildIntoViewY:function(cC,cD,cE){var cF=this.__qj;
var cG=cC.getDomElement();

if(cE!==false&&cF&&cF.offsetWidth&&cG&&cG.offsetWidth){qx.bom.element.Scroll.intoViewY(cG,cF,cD);
}else{this.__qo={element:cC,align:cD};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__qq;
},scrollToX:function(x,cH){var cI=this.__qj;

if(cH!==true&&cI&&cI.offsetWidth){cI.scrollLeft=x;
}else{this.__qp=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__qn;
},getScrollX:function(){var cJ=this.__qj;

if(cJ){return cJ.scrollLeft;
}return this.__qp||0;
},scrollToY:function(y,cK){var cL=this.__qj;

if(cK!==true&&cL&&cL.offsetWidth){cL.scrollTop=y;
}else{this.__qq=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__qo;
},getScrollY:function(){var cM=this.__qj;

if(cM){return cM.scrollTop;
}return this.__qq||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(F,this.__qF,this);
},enableScrolling:function(){this.removeListener(F,this.__qF,this);
},__qE:null,__qF:function(e){if(!this.__qE){this.__qE=true;
this.__qj.scrollTop=0;
this.__qj.scrollLeft=0;
delete this.__qE;
}},getTextSelection:function(){var cN=this.__qj;

if(cN){return qx.bom.Selection.get(cN);
}return null;
},getTextSelectionLength:function(){var cO=this.__qj;

if(cO){return qx.bom.Selection.getLength(cO);
}return null;
},getTextSelectionStart:function(){var cP=this.__qj;

if(cP){return qx.bom.Selection.getStart(cP);
}return null;
},getTextSelectionEnd:function(){var cQ=this.__qj;

if(cQ){return qx.bom.Selection.getEnd(cQ);
}return null;
},setTextSelection:function(cR,cS){var cT=this.__qj;

if(cT){qx.bom.Selection.set(cT,cR,cS);
return;
}qx.html.Element.__qd[this.toHashCode()]={element:this,start:cR,end:cS};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cU=this.__qj;

if(cU){qx.bom.Selection.clear(cU);
}delete qx.html.Element.__qd[this.toHashCode()];
},__qG:function(cV,cW){var cX=qx.html.Element._actions;
cX.push({type:cV,element:this,args:cW||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__qG(o);
},blur:function(){this.__qG(B);
},activate:function(){this.__qG(C);
},deactivate:function(){this.__qG(z);
},capture:function(cY){this.__qG(w,[cY!==false]);
},releaseCapture:function(){this.__qG(t);
},setStyle:function(da,dc,dd){if(!this.__qb){this.__qb={};
}
if(this.__qb[da]==dc){return;
}
if(dc==null){delete this.__qb[da];
}else{this.__qb[da]=dc;
}if(this.__qj){if(dd){qx.bom.element.Style.set(this.__qj,da,dc);
return this;
}if(!this.__qr){this.__qr={};
}this.__qr[da]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(de,df){var dg=qx.bom.element.Style;

if(!this.__qb){this.__qb={};
}
if(this.__qj){if(!this.__qr){this.__qr={};
}
for(var di in de){var dh=de[di];

if(this.__qb[di]==dh){continue;
}
if(dh==null){delete this.__qb[di];
}else{this.__qb[di]=dh;
}if(df){dg.set(this.__qj,di,dh);
continue;
}this.__qr[di]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var di in de){var dh=de[di];

if(this.__qb[di]==dh){continue;
}
if(dh==null){delete this.__qb[di];
}else{this.__qb[di]=dh;
}}}return this;
},removeStyle:function(dj,dk){this.setStyle(dj,null,dk);
},getStyle:function(dl){return this.__qb?this.__qb[dl]:null;
},getAllStyles:function(){return this.__qb||null;
},setAttribute:function(dm,dn,dp){if(!this.__qc){this.__qc={};
}
if(this.__qc[dm]==dn){return;
}
if(dn==null){delete this.__qc[dm];
}else{this.__qc[dm]=dn;
}if(this.__qj){if(dp){qx.bom.element.Attribute.set(this.__qj,dm,dn);
return this;
}if(!this.__qs){this.__qs={};
}this.__qs[dm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dq,dr){for(var ds in dq){this.setAttribute(ds,dq[ds],dr);
}return this;
},removeAttribute:function(dt,du){this.setAttribute(dt,null,du);
},getAttribute:function(dv){return this.__qc?this.__qc[dv]:null;
},_applyProperty:function(name,dw){},_setProperty:function(dx,dy,dz){if(!this.__qu){this.__qu={};
}
if(this.__qu[dx]==dy){return;
}
if(dy==null){delete this.__qu[dx];
}else{this.__qu[dx]=dy;
}if(this.__qj){if(dz){this._applyProperty(dx,dy);
return this;
}if(!this.__qt){this.__qt={};
}this.__qt[dx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dA,dB){this._setProperty(dA,null,dB);
},_getProperty:function(dC){var dD=this.__qu;

if(!dD){return null;
}var dE=dD[dC];
return dE==null?null:dE;
},addListener:function(dF,dG,self,dH){var dI;

if(this.$$disposed){return null;
}{};

if(this.__qj){return qx.event.Registration.addListener(this.__qj,dF,dG,self,dH);
}
if(!this.__qv){this.__qv={};
}
if(dH==null){dH=false;
}var dJ=qx.event.Manager.getNextUniqueId();
var dK=dF+(dH?D:q)+dJ;
this.__qv[dK]={type:dF,listener:dG,self:self,capture:dH,unique:dJ};
return dK;
},removeListener:function(dL,dM,self,dN){var dO;

if(this.$$disposed){return null;
}{};

if(this.__qj){qx.event.Registration.removeListener(this.__qj,dL,dM,self,dN);
}else{var dQ=this.__qv;
var dP;

if(dN==null){dN=false;
}
for(var dR in dQ){dP=dQ[dR];
if(dP.listener===dM&&dP.self===self&&dP.capture===dN&&dP.type===dL){delete dQ[dR];
break;
}}}return this;
},removeListenerById:function(dS){if(this.$$disposed){return null;
}
if(this.__qj){qx.event.Registration.removeListenerById(this.__qj,dS);
}else{delete this.__qv[dS];
}return this;
},hasListener:function(dT,dU){if(this.$$disposed){return false;
}
if(this.__qj){return qx.event.Registration.hasListener(this.__qj,dT,dU);
}var dW=this.__qv;
var dV;

if(dU==null){dU=false;
}
for(var dX in dW){dV=dW[dX];
if(dV.capture===dU&&dV.type===dT){return true;
}}return false;
}},defer:function(dY){dY.__qH=new qx.util.DeferredCall(dY.flush,dY);
},destruct:function(){var ea=this.__qj;

if(ea){qx.event.Registration.getManager(ea).removeAllListeners(ea);
ea.$$element=c;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__qy;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(A);
this.__qc=this.__qb=this.__qv=this.__qu=this.__qs=this.__qr=this.__qt=this.__qj=this.__qy=this.__qn=this.__qo=null;
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__tm=b;
this.__tn=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__tm:null,__tn:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__tm=this.__tn=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var d='ie',c="qx.ui.core.queue.Manager",b="useraction",a="touchend";
qx.Class.define(c,{statics:{__lY:false,__ma:{},__mb:0,MAX_RETRIES:10,scheduleFlush:function(f){var self=qx.ui.core.queue.Manager;
self.__ma[f]=true;

if(!self.__lY){self.__mg.schedule();
self.__lY=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__mc){return;
}self.__mc=true;
self.__mg.cancel();
var g=self.__ma;
self.__md(function(){while(g.visibility||g.widget||g.appearance||g.layout||g.element){if(g.widget){delete g.widget;
qx.ui.core.queue.Widget.flush();
}
if(g.visibility){delete g.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(g.appearance){delete g.appearance;
qx.ui.core.queue.Appearance.flush();
}if(g.widget||g.visibility||g.appearance){continue;
}
if(g.layout){delete g.layout;
qx.ui.core.queue.Layout.flush();
}if(g.widget||g.visibility||g.appearance||g.layout){continue;
}
if(g.element){delete g.element;
qx.html.Element.flush();
}}},function(){self.__lY=false;
});
self.__md(function(){if(g.dispose){delete g.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__mc=false;
});
self.__mb=0;
},__md:function(h,i){var self=qx.ui.core.queue.Manager;

try{h();
}catch(e){{};
self.__lY=false;
self.__mc=false;
self.__mb+=1;
if(qx.bom.client.Browser.NAME==d&&qx.bom.client.Browser.VERSION<=7){i();
}
if(self.__mb<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__mb-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{i();
}},__me:function(e){var j=qx.ui.core.queue.Manager;
if(e.getData()==a){j.PAUSE=true;

if(j.__mf){window.clearTimeout(j.__mf);
}j.__mf=window.setTimeout(function(){j.PAUSE=false;
j.__mf=null;
j.flush();
},500);
}else{j.flush();
}}},defer:function(k){k.__mg=new qx.util.DeferredCall(k.flush);
qx.html.Element._scheduleFlush=k.scheduleFlush;
qx.event.Registration.addListener(window,b,qx.bom.client.Feature.TOUCH?k.__me:k.flush);
}});
})();
(function(){var b="-",a="qx.event.handler.Element";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){qx.core.Object.call(this);
this._manager=c;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,e){},registerEvent:function(f,g,h){var k=qx.core.ObjectRegistry.toHashCode(f);
var i=k+b+g;
var j=qx.lang.Function.listener(this._onNative,this,i);
qx.bom.Event.addNativeListener(f,g,j);
this._registeredEvents[i]={element:f,type:g,listener:j};
},unregisterEvent:function(l,m,n){var q=this._registeredEvents;

if(!q){return;
}var r=qx.core.ObjectRegistry.toHashCode(l);
var o=r+b+m;
var p=this._registeredEvents[o];

if(p){qx.bom.Event.removeNativeListener(l,m,p.listener);
}delete this._registeredEvents[o];
},_onNative:qx.event.GlobalError.observeMethod(function(s,t){var v=this._registeredEvents;

if(!v){return;
}var u=v[t];
qx.event.Registration.fireNonBubblingEvent(u.element,u.type,qx.event.type.Native,[s]);
})},destruct:function(){var w;
var x=this._registeredEvents;

for(var y in x){w=x[y];
qx.bom.Event.removeNativeListener(w.element,w.type,w.listener);
}this._manager=this._registeredEvents=null;
},defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__sI=f;
this.__sJ=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__sI:null,__sJ:null,__sK:null,__sL:null,__sM:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__sM=qx.lang.Function.listener(this._onNative,this);
this.__sK=qx.bom.Event.supportsEvent(this.__sJ,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__sJ,this.__sK,this.__sM);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__sJ,this.__sK,this.__sM);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__sL!=p){this.__sL=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__sJ,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__sI=this.__sJ=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="mousemove",o="touchcancel",n="mouseup",m="mousedown",l="qx.client",k="mshtml",d="qx.event.handler.Touch",j="useraction",h="swipe",c="qx.mobile.nativescroll",b="webkit",g="off",f="tap",i="x",a="y";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__jW=u;
this.__jX=u.getWindow();
this.__jY=this.__jX.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:10,SWIPE_MIN_DISTANCE:11,SWIPE_MIN_VELOCITY:0},members:{__ka:null,__kb:null,__jW:null,__jX:null,__jY:null,__kc:null,__kd:null,__ke:null,__kf:null,__kg:false,__kh:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__ki:function(D){var E=qx.bom.Event.getTarget(D);
if(qx.core.Variant.isSet(l,b)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__kj:function(F,G,H,I){if(!H){H=this.__ki(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__jX,j,qx.event.type.Data,[G]);
},__kk:function(J,K,L){if(!L){L=this.__ki(J);
}var K=K||J.type;

if(K==r){this.__kl(J,L);
}else if(K==q){this.__km(J,L);
}else if(K==s){this.__kn(J,L);
}},__kl:function(M,N){var O=M.changedTouches[0];
this.__kc=O.screenX;
this.__kd=O.screenY;
this.__ke=new Date().getTime();
this.__kf=M.changedTouches.length===1;
},__km:function(P,Q){if(this.__kf&&P.changedTouches.length>1){this.__kf=false;
}},__kn:function(R,S){if(this.__kf){var T=R.changedTouches[0];
var V={x:T.screenX-this.__kc,y:T.screenY-this.__kd};
var W=qx.event.handler.Touch;

if(this.__kh==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__kj(R,f,S,qx.event.type.Tap);
}else{var U=this.__ko(R,S,V);

if(U){R.swipe=U;
this.__kj(R,h,S,qx.event.type.Swipe);
}}}},__ko:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__ke;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__ke,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__kp:qx.core.Variant.select(t,{"on":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__kq(bi)){this.__kg=true;
}else if(bj==s){this.__kg=false;
}var bm=this.__kr(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__kq:qx.core.Variant.select(t,{"on":function(bn){if(qx.core.Variant.isSet(l,k)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__kr:qx.core.Variant.select(t,{"on":function(bp){var bq=this.__ki(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__ka=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__jY,r,this.__ka);
Event.addNativeListener(this.__jY,q,this.__ka);
Event.addNativeListener(this.__jY,s,this.__ka);
Event.addNativeListener(this.__jY,o,this.__ka);
},_initMouseObserver:qx.core.Variant.select(t,{"on":function(){if(!qx.bom.client.Feature.TOUCH){this.__kb=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__jY,m,this.__kb);
Event.addNativeListener(this.__jY,p,this.__kb);
Event.addNativeListener(this.__jY,n,this.__kb);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__jY,r,this.__ka);
Event.removeNativeListener(this.__jY,q,this.__ka);
Event.removeNativeListener(this.__jY,s,this.__ka);
Event.removeNativeListener(this.__jY,o,this.__ka);
},_stopMouseObserver:qx.core.Variant.select(t,{"on":function(){if(!qx.bom.client.Feature.TOUCH){var Event=qx.bom.Event;
Event.removeNativeListener(this.__jY,m,this.__kb);
Event.removeNativeListener(this.__jY,p,this.__kb);
Event.removeNativeListener(this.__jY,n,this.__kb);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Variant.select(t,{"on":qx.event.GlobalError.observeMethod(function(bs){if(!qx.bom.client.Feature.TOUCH){if(bs.type==p&&!this.__kg){return;
}var bt=this.__kp(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__kh=this.__ki(bu);
}this.__kj(bu,bv);
this.__kk(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__jW=this.__jX=this.__jY=this.__kh=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.bom.client.Feature.TOUCH){if(qx.core.Variant.isSet(c,g)){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var p="mouseup",o="click",n="qx.client",m="mousedown",l="contextmenu",k="mousewheel",j="dblclick",h="mouseover",g="mouseout",f="mousemove",c="on",e="useraction",d="DOMMouseScroll",b="gecko|webkit",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);
this.__lz=q;
this.__lA=q.getWindow();
this.__lB=this.__lA.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__lC:null,__lD:null,__lE:null,__lF:null,__lG:null,__lz:null,__lA:null,__lB:null,canHandleEvent:function(r,s){},registerEvent:qx.bom.client.System.IPHONE?
function(t,u,v){t[c+u]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(w,x,y){w[c+x]=undefined;
}:qx.lang.Function.returnNull,__lH:function(z,A,B){if(!B){B=qx.bom.Event.getTarget(z);
}if(B&&B.nodeType){qx.event.Registration.fireEvent(B,A||z.type,A==k?qx.event.type.MouseWheel:qx.event.type.Mouse,[z,B,null,true,true]);
}qx.event.Registration.fireEvent(this.__lA,e,qx.event.type.Data,[A||z.type]);
},__lI:function(){var D=[this.__lA,this.__lB,this.__lB.body];
var E=this.__lA;
var C=d;

for(var i=0;i<D.length;i++){if(qx.bom.Event.supportsEvent(D[i],k)){C=k;
E=D[i];
break;
}}return {type:C,target:E};
},_initButtonObserver:function(){this.__lC=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__lB,m,this.__lC);
Event.addNativeListener(this.__lB,p,this.__lC);
Event.addNativeListener(this.__lB,o,this.__lC);
Event.addNativeListener(this.__lB,j,this.__lC);
Event.addNativeListener(this.__lB,l,this.__lC);
},_initMoveObserver:function(){this.__lD=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__lB,f,this.__lD);
Event.addNativeListener(this.__lB,h,this.__lD);
Event.addNativeListener(this.__lB,g,this.__lD);
},_initWheelObserver:function(){this.__lE=qx.lang.Function.listener(this._onWheelEvent,this);
var F=this.__lI();
qx.bom.Event.addNativeListener(F.target,F.type,this.__lE);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__lB,m,this.__lC);
Event.removeNativeListener(this.__lB,p,this.__lC);
Event.removeNativeListener(this.__lB,o,this.__lC);
Event.removeNativeListener(this.__lB,j,this.__lC);
Event.removeNativeListener(this.__lB,l,this.__lC);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__lB,f,this.__lD);
Event.removeNativeListener(this.__lB,h,this.__lD);
Event.removeNativeListener(this.__lB,g,this.__lD);
},_stopWheelObserver:function(){var G=this.__lI();
qx.bom.Event.removeNativeListener(G.target,G.type,this.__lE);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(H){this.__lH(H);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(I){var J=I.type;
var K=qx.bom.Event.getTarget(I);
if(qx.core.Variant.isSet(n,b)){if(K&&K.nodeType==3){K=K.parentNode;
}}
if(this.__lJ){this.__lJ(I,J,K);
}
if(this.__lL){this.__lL(I,J,K);
}this.__lH(I,J,K);

if(this.__lK){this.__lK(I,J,K);
}
if(this.__lM){this.__lM(I,J,K);
}this.__lF=J;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(L){this.__lH(L,k);
}),__lJ:qx.core.Variant.select(n,{"webkit":function(M,N,O){if(qx.bom.client.Engine.VERSION<530){if(N==l){this.__lH(M,p,O);
}}},"default":null}),__lK:qx.core.Variant.select(n,{"opera":function(P,Q,R){if(Q==p&&P.button==2){this.__lH(P,l,R);
}},"default":null}),__lL:qx.core.Variant.select(n,{"mshtml":function(S,T,U){if(S.target!==undefined){return;
}
if(T==p&&this.__lF==o){this.__lH(S,m,U);
}else if(T==j){this.__lH(S,o,U);
}},"default":null}),__lM:qx.core.Variant.select(n,{"mshtml":null,"default":function(V,W,X){switch(W){case m:this.__lG=X;
break;
case p:if(X!==this.__lG){var Y=qx.dom.Hierarchy.getCommonParent(X,this.__lG);
this.__lH(V,o,Y);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__lz=this.__lA=this.__lB=this.__lG=null;
},defer:function(ba){qx.event.Registration.addHandler(ba);
}});
})();
(function(){var m="keydown",l="qx.client",k="keypress",j="NumLock",i="keyup",h="Enter",g="0",f="9",e="-",d="PageUp",bu="+",bt="PrintScreen",bs="gecko",br="A",bq="Z",bp="Left",bo="F5",bn="Down",bm="Up",bl="F11",t="F6",u="useraction",r="F3",s="keyinput",p="Insert",q="F8",n="End",o="/",B="Delete",C="*",O="cmd",K="F1",W="F4",R="Home",bh="F2",bc="F12",G="PageDown",bk="F7",bj="Win",bi="F9",F="F10",I="Right",J="text",M="Escape",P="webkit",S="5",Y="3",be="Meta",v="7",w="CapsLock",H="input",V="Control",U="Space",T="Tab",bb="Shift",ba="Pause",Q="Unidentified",X="qx.event.handler.Keyboard",a="mshtml|webkit",bd="6",x="off",y="Apps",L="4",b="Alt",c="mshtml",E="2",z="Scroll",A="1",D="8",N="autoComplete",bg=",",bf="Backspace";
qx.Class.define(X,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bv){qx.core.Object.call(this);
this.__st=bv;
this.__su=bv.getWindow();
if(qx.core.Variant.isSet(l,bs)){this.__sv=this.__su;
}else{this.__sv=this.__su.document.documentElement;
}this.__sw={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bw){if(this._identifierToKeyCodeMap[bw]){return true;
}
if(bw.length!=1){return false;
}
if(bw>=g&&bw<=f){return true;
}
if(bw>=br&&bw<=bq){return true;
}
switch(bw){case bu:case e:case C:case o:return true;
default:return false;
}}},members:{__sx:null,__st:null,__su:null,__sv:null,__sw:null,__sy:null,__sz:null,__sA:null,canHandleEvent:function(bx,by){},registerEvent:function(bz,bA,bB){},unregisterEvent:function(bC,bD,bE){},_fireInputEvent:function(bF,bG){var bH=this.__sB();
if(bH&&bH.offsetWidth!=0){var event=qx.event.Registration.createEvent(s,qx.event.type.KeyInput,[bF,bH,bG]);
this.__st.dispatchEvent(bH,event);
}if(this.__su){qx.event.Registration.fireEvent(this.__su,u,qx.event.type.Data,[s]);
}},_fireSequenceEvent:function(bI,bJ,bK){var bL=this.__sB();
var bM=bI.keyCode;
var event=qx.event.Registration.createEvent(bJ,qx.event.type.KeySequence,[bI,bL,bK]);
this.__st.dispatchEvent(bL,event);
if(qx.core.Variant.isSet(l,a)){if(bJ==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bM)&&!this._emulateKeyPress[bM]){this._fireSequenceEvent(bI,k,bK);
}}}if(this.__su){qx.event.Registration.fireEvent(this.__su,u,qx.event.type.Data,[bJ]);
}},__sB:function(){var bN=this.__st.getHandler(qx.event.handler.Focus);
var bO=bN.getActive();
if(!bO||bO.offsetWidth==0){bO=bN.getFocus();
}if(!bO||bO.offsetWidth==0){bO=this.__st.getWindow().document.body;
}return bO;
},_initKeyObserver:function(){this.__sx=qx.lang.Function.listener(this.__sC,this);
this.__sA=qx.lang.Function.listener(this.__sE,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__sv,i,this.__sx);
Event.addNativeListener(this.__sv,m,this.__sx);
Event.addNativeListener(this.__sv,k,this.__sA);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__sv,i,this.__sx);
Event.removeNativeListener(this.__sv,m,this.__sx);
Event.removeNativeListener(this.__sv,k,this.__sA);

for(var bQ in (this.__sz||{})){var bP=this.__sz[bQ];
Event.removeNativeListener(bP.target,k,bP.callback);
}delete (this.__sz);
},__sC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(bR){bR=window.event||bR;
var bU=bR.keyCode;
var bS=0;
var bT=bR.type;
if(!(this.__sw[bU]==m&&bT==m)){this._idealKeyHandler(bU,bS,bT,bR);
}if(bT==m){if(this._isNonPrintableKeyCode(bU)||this._emulateKeyPress[bU]){this._idealKeyHandler(bU,bS,k,bR);
}}this.__sw[bU]=bT;
},"gecko":function(bV){var ca=this._keyCodeFix[bV.keyCode]||bV.keyCode;
var bX=0;
var bY=bV.type;
if(qx.bom.client.Platform.WIN){var bW=ca?this._keyCodeToIdentifier(ca):this._charCodeToIdentifier(bX);

if(!(this.__sw[bW]==m&&bY==m)){this._idealKeyHandler(ca,bX,bY,bV);
}this.__sw[bW]=bY;
}else{this._idealKeyHandler(ca,bX,bY,bV);
}this.__sD(bV.target,bY,ca);
},"webkit":function(cb){var ce=0;
var cc=0;
var cd=cb.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cd==i||cd==m){ce=this._charCode2KeyCode[cb.charCode]||cb.keyCode;
}else{if(this._charCode2KeyCode[cb.charCode]){ce=this._charCode2KeyCode[cb.charCode];
}else{cc=cb.charCode;
}}this._idealKeyHandler(ce,cc,cd,cb);
}else{ce=cb.keyCode;
this._idealKeyHandler(ce,cc,cd,cb);
if(cd==m){if(this._isNonPrintableKeyCode(ce)||this._emulateKeyPress[ce]){this._idealKeyHandler(ce,cc,k,cb);
}}this.__sw[ce]=cd;
}},"opera":function(cf){this.__sy=cf.keyCode;
this._idealKeyHandler(cf.keyCode,0,cf.type,cf);
}})),__sD:qx.core.Variant.select(l,{"gecko":function(cg,ch,ci){if(ch===m&&(ci==33||ci==34||ci==38||ci==40)&&cg.type==J&&cg.tagName.toLowerCase()===H&&cg.getAttribute(N)!==x){if(!this.__sz){this.__sz={};
}var ck=qx.core.ObjectRegistry.toHashCode(cg);

if(this.__sz[ck]){return;
}var self=this;
this.__sz[ck]={target:cg,callback:function(cl){qx.bom.Event.stopPropagation(cl);
self.__sE(cl);
}};
var cj=qx.event.GlobalError.observeMethod(this.__sz[ck].callback);
qx.bom.Event.addNativeListener(cg,k,cj);
}},"default":null}),__sE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(l,{"mshtml":function(cm){cm=window.event||cm;

if(this._charCode2KeyCode[cm.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cm.keyCode],0,cm.type,cm);
}else{this._idealKeyHandler(0,cm.keyCode,cm.type,cm);
}},"gecko":function(cn){var cq=this._keyCodeFix[cn.keyCode]||cn.keyCode;
var co=cn.charCode;
var cp=cn.type;
this._idealKeyHandler(cq,co,cp,cn);
},"webkit":function(cr){if(qx.bom.client.Engine.VERSION<525.13){var cu=0;
var cs=0;
var ct=cr.type;

if(ct==i||ct==m){cu=this._charCode2KeyCode[cr.charCode]||cr.keyCode;
}else{if(this._charCode2KeyCode[cr.charCode]){cu=this._charCode2KeyCode[cr.charCode];
}else{cs=cr.charCode;
}}this._idealKeyHandler(cu,cs,ct,cr);
}else{if(this._charCode2KeyCode[cr.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cr.keyCode],0,cr.type,cr);
}else{this._idealKeyHandler(0,cr.keyCode,cr.type,cr);
}}},"opera":function(cv){var cx=cv.keyCode;
var cw=cv.type;
if(cx!=this.__sy){this._idealKeyHandler(0,this.__sy,cw,cv);
}else{if(this._keyCodeToIdentifierMap[cv.keyCode]){this._idealKeyHandler(cv.keyCode,0,cv.type,cv);
}else{this._idealKeyHandler(0,cv.keyCode,cv.type,cv);
}}}})),_idealKeyHandler:function(cy,cz,cA,cB){var cC;
if(cy||(!cy&&!cz)){cC=this._keyCodeToIdentifier(cy);
this._fireSequenceEvent(cB,cA,cC);
}else{cC=this._charCodeToIdentifier(cz);
this._fireSequenceEvent(cB,k,cC);
this._fireInputEvent(cB,cz);
}},_specialCharCodeMap:{8:bf,9:T,13:h,27:M,32:U},_emulateKeyPress:qx.core.Variant.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bb,17:V,18:b,20:w,224:be,37:bp,38:bm,39:I,40:bn,33:d,34:G,35:n,36:R,45:p,46:B,112:K,113:bh,114:r,115:W,116:bo,117:t,118:bk,119:q,120:bi,121:F,122:bl,123:bc,144:j,44:bt,145:z,19:ba,91:qx.bom.client.Platform.MAC?O:bj,92:bj,93:qx.bom.client.Platform.MAC?O:y},_numpadToCharCode:{96:g.charCodeAt(0),97:A.charCodeAt(0),98:E.charCodeAt(0),99:Y.charCodeAt(0),100:L.charCodeAt(0),101:S.charCodeAt(0),102:bd.charCodeAt(0),103:v.charCodeAt(0),104:D.charCodeAt(0),105:f.charCodeAt(0),106:C.charCodeAt(0),107:bu.charCodeAt(0),109:e.charCodeAt(0),110:bg.charCodeAt(0),111:o.charCodeAt(0)},_charCodeA:br.charCodeAt(0),_charCodeZ:bq.charCodeAt(0),_charCode0:g.charCodeAt(0),_charCode9:f.charCodeAt(0),_isNonPrintableKeyCode:function(cD){return this._keyCodeToIdentifierMap[cD]?true:false;
},_isIdentifiableKeyCode:function(cE){if(cE>=this._charCodeA&&cE<=this._charCodeZ){return true;
}if(cE>=this._charCode0&&cE<=this._charCode9){return true;
}if(this._specialCharCodeMap[cE]){return true;
}if(this._numpadToCharCode[cE]){return true;
}if(this._isNonPrintableKeyCode(cE)){return true;
}return false;
},_keyCodeToIdentifier:function(cF){if(this._isIdentifiableKeyCode(cF)){var cG=this._numpadToCharCode[cF];

if(cG){return String.fromCharCode(cG);
}return (this._keyCodeToIdentifierMap[cF]||this._specialCharCodeMap[cF]||String.fromCharCode(cF));
}else{return Q;
}},_charCodeToIdentifier:function(cH){return this._specialCharCodeMap[cH]||String.fromCharCode(cH).toUpperCase();
},_identifierToKeyCode:function(cI){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cI]||cI.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__sy=this.__st=this.__su=this.__sv=this.__sw=null;
},defer:function(cJ,cK){qx.event.Registration.addHandler(cJ);
if(!cJ._identifierToKeyCodeMap){cJ._identifierToKeyCodeMap={};

for(var cL in cK._keyCodeToIdentifierMap){cJ._identifierToKeyCodeMap[cK._keyCodeToIdentifierMap[cL]]=parseInt(cL,10);
}
for(var cL in cK._specialCharCodeMap){cJ._identifierToKeyCodeMap[cK._specialCharCodeMap[cL]]=parseInt(cL,10);
}}
if(qx.core.Variant.isSet(l,c)){cK._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(l,bs)){cK._keyCodeFix={12:cK._identifierToKeyCode(j)};
}else if(qx.core.Variant.isSet(l,P)){if(qx.bom.client.Engine.VERSION<525.13){cK._charCode2KeyCode={63289:cK._identifierToKeyCode(j),63276:cK._identifierToKeyCode(d),63277:cK._identifierToKeyCode(G),63275:cK._identifierToKeyCode(n),63273:cK._identifierToKeyCode(R),63234:cK._identifierToKeyCode(bp),63232:cK._identifierToKeyCode(bm),63235:cK._identifierToKeyCode(I),63233:cK._identifierToKeyCode(bn),63272:cK._identifierToKeyCode(B),63302:cK._identifierToKeyCode(p),63236:cK._identifierToKeyCode(K),63237:cK._identifierToKeyCode(bh),63238:cK._identifierToKeyCode(r),63239:cK._identifierToKeyCode(W),63240:cK._identifierToKeyCode(bo),63241:cK._identifierToKeyCode(t),63242:cK._identifierToKeyCode(bk),63243:cK._identifierToKeyCode(q),63244:cK._identifierToKeyCode(bi),63245:cK._identifierToKeyCode(F),63246:cK._identifierToKeyCode(bl),63247:cK._identifierToKeyCode(bc),63248:cK._identifierToKeyCode(bt),3:cK._identifierToKeyCode(h),12:cK._identifierToKeyCode(j),13:cK._identifierToKeyCode(h)};
}else{cK._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this.__pe=B;
this.__pf=B.getWindow().document.documentElement;
this.__pe.addListener(this.__pf,v,this._onMouseDown,this);
this.__pr();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__pe:null,__pf:null,__pg:null,__ph:null,__pi:null,__pj:null,__pk:null,__pl:null,__pm:null,__pn:null,__po:false,__pp:0,__pq:0,canHandleEvent:function(C,D){},registerEvent:function(E,F,G){},unregisterEvent:function(H,I,J){},addType:function(K){this.__pi[K]=true;
},addAction:function(L){this.__pj[L]=true;
},supportsType:function(M){return !!this.__pi[M];
},supportsAction:function(N){return !!this.__pj[N];
},getData:function(O){if(!this.__py||!this.__pg){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__pi[O]){throw new Error("Unsupported data type: "+O+"!");
}
if(!this.__pl[O]){this.__pm=O;
this.__pt(q,this.__ph,this.__pg,false);
}
if(!this.__pl[O]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__pl[O]||null;
},getCurrentAction:function(){return this.__pn;
},addData:function(P,Q){this.__pl[P]=Q;
},getCurrentType:function(){return this.__pm;
},isSessionActive:function(){return this.__po;
},__pr:function(){this.__pi={};
this.__pj={};
this.__pk={};
this.__pl={};
},__ps:function(){if(this.__ph==null){return;
}var T=this.__pj;
var R=this.__pk;
var S=null;

if(this.__py){if(R.Shift&&R.Ctrl&&T.alias){S=k;
}else if(R.Shift&&R.Alt&&T.copy){S=j;
}else if(R.Shift&&T.move){S=b;
}else if(R.Alt&&T.alias){S=k;
}else if(R.Ctrl&&T.copy){S=j;
}else if(T.move){S=b;
}else if(T.copy){S=j;
}else if(T.alias){S=k;
}}
if(S!=this.__pn){this.__pn=S;
this.__pt(o,this.__ph,this.__pg,false);
}},__pt:function(U,V,W,X,Y){var bb=qx.event.Registration;
var ba=bb.createEvent(U,qx.event.type.Drag,[X,Y]);

if(V!==W){ba.setRelatedTarget(W);
}return bb.dispatchEvent(V,ba);
},__pu:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(u)==w){return bc;
}bc=bc.parentNode;
}return null;
},__pv:function(bd){while(bd&&bd.nodeType==1){if(bd.getAttribute(r)==w){return bd;
}bd=bd.parentNode;
}return null;
},__pw:function(){this.__ph=null;
this.__pe.removeListener(this.__pf,c,this._onMouseMove,this,true);
this.__pe.removeListener(this.__pf,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__pr();
},__px:function(){if(this.__po){this.__pe.removeListener(this.__pf,a,this._onMouseOver,this,true);
this.__pe.removeListener(this.__pf,h,this._onMouseOut,this,true);
this.__pe.removeListener(this.__pf,g,this._onKeyDown,this,true);
this.__pe.removeListener(this.__pf,z,this._onKeyUp,this,true);
this.__pt(x,this.__ph,this.__pg,false);
this.__po=false;
}this.__py=false;
this.__pg=null;
this.__pw();
},__py:false,_onWindowBlur:function(e){this.__px();
},_onKeyDown:function(e){var be=e.getKeyIdentifier();

switch(be){case A:case f:case d:if(!this.__pk[be]){this.__pk[be]=true;
this.__ps();
}}},_onKeyUp:function(e){var bf=e.getKeyIdentifier();

switch(bf){case A:case f:case d:if(this.__pk[bf]){this.__pk[bf]=false;
this.__ps();
}}},_onMouseDown:function(e){if(this.__po){return;
}var bg=this.__pu(e.getTarget());

if(bg){this.__pp=e.getDocumentLeft();
this.__pq=e.getDocumentTop();
this.__ph=bg;
this.__pe.addListener(this.__pf,c,this._onMouseMove,this,true);
this.__pe.addListener(this.__pf,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__py){this.__pt(s,this.__pg,this.__ph,false,e);
}if(this.__po){e.stopPropagation();
}this.__px();
},_onMouseMove:function(e){if(this.__po){if(!this.__pt(t,this.__ph,this.__pg,true,e)){this.__px();
}}else{if(Math.abs(e.getDocumentLeft()-this.__pp)>3||Math.abs(e.getDocumentTop()-this.__pq)>3){if(this.__pt(n,this.__ph,this.__pg,true,e)){this.__po=true;
this.__pe.addListener(this.__pf,a,this._onMouseOver,this,true);
this.__pe.addListener(this.__pf,h,this._onMouseOut,this,true);
this.__pe.addListener(this.__pf,g,this._onKeyDown,this,true);
this.__pe.addListener(this.__pf,z,this._onKeyUp,this,true);
var bh=this.__pk;
bh.Ctrl=e.isCtrlPressed();
bh.Shift=e.isShiftPressed();
bh.Alt=e.isAltPressed();
this.__ps();
}else{this.__pt(x,this.__ph,this.__pg,false);
this.__pw();
}}}},_onMouseOver:function(e){var bi=e.getTarget();
var bj=this.__pv(bi);

if(bj&&bj!=this.__pg){this.__py=this.__pt(m,bj,this.__ph,true,e);
this.__pg=bj;
this.__ps();
}},_onMouseOut:function(e){var bl=this.__pv(e.getTarget());
var bk=this.__pv(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__pg){this.__pt(l,this.__pg,bk,false,e);
this.__pg=null;
this.__py=false;
qx.event.Timer.once(this.__ps,this,0);
}}},destruct:function(){this.__ph=this.__pg=this.__pe=this.__pf=this.__pi=this.__pj=this.__pk=this.__pl=null;
},defer:function(bm){qx.event.Registration.addHandler(bm);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__nO=d;
this.__nP={};
qx.event.handler.Appear.__nQ[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__nQ:{},refresh:function(){var e=this.__nQ;

for(var f in e){e[f].refresh();
}}},members:{__nO:null,__nP:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__nP;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__nP;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__nP;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__nO.dispatchEvent(w,t);
}}}},destruct:function(){this.__nO=this.__nP=null;
delete qx.event.handler.Appear.__nQ[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(e,event,f){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var q="mshtml",p="",o="qx.client",n=" ",m=">",k="<",h="='",g="none",f="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",d="qx.bom.Element",a="' ",c="div",b="></";
qx.Class.define(d,{statics:{__tp:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__tq:{},__tr:{},allowCreationWithMarkup:function(r){if(!r){r=window;
}var s=r.location.href;

if(qx.bom.Element.__tr[s]==undefined){try{r.document.createElement(f);
qx.bom.Element.__tr[s]=true;
}catch(e){qx.bom.Element.__tr[s]=false;
}}return qx.bom.Element.__tr[s];
},getHelperElement:function(t){if(!t){t=window;
}var v=t.location.href;

if(!qx.bom.Element.__tq[v]){var u=qx.bom.Element.__tq[v]=t.document.createElement(c);
if(qx.bom.client.Engine.WEBKIT){u.style.display=g;
t.document.body.appendChild(u);
}}return qx.bom.Element.__tq[v];
},create:function(name,w,x){if(!x){x=window;
}
if(!name){throw new Error("The tag name is missing!");
}var z=this.__tp;
var y=p;

for(var B in w){if(z[B]){y+=B+h+w[B]+a;
}}var C;
if(y!=p){if(qx.bom.Element.allowCreationWithMarkup(x)){C=x.document.createElement(k+name+n+y+m);
}else{var A=qx.bom.Element.getHelperElement(x);
A.innerHTML=k+name+n+y+b+name+m;
C=A.firstChild;
}}else{C=x.document.createElement(name);
}
for(var B in w){if(!z[B]){qx.bom.element.Attribute.set(C,B,w[B]);
}}return C;
},empty:function(D){return D.innerHTML=p;
},addListener:function(E,F,G,self,H){return qx.event.Registration.addListener(E,F,G,self,H);
},removeListener:function(I,J,K,self,L){return qx.event.Registration.removeListener(I,J,K,self,L);
},removeListenerById:function(M,N){return qx.event.Registration.removeListenerById(M,N);
},hasListener:function(O,P,Q){return qx.event.Registration.hasListener(O,P,Q);
},focus:function(R){qx.event.Registration.getManager(R).getHandler(qx.event.handler.Focus).focus(R);
},blur:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).blur(S);
},activate:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).activate(T);
},deactivate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).deactivate(U);
},capture:function(V,W){qx.event.Registration.getManager(V).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(V,W);
},releaseCapture:function(X){qx.event.Registration.getManager(X).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(X);
},matchesSelector:function(Y,ba){if(ba){return qx.bom.Selector.query(ba,Y.parentNode).length>0;
}else{return false;
}},clone:function(bb,bc){var bf;

if(bc||(qx.core.Variant.isSet(o,q)&&!qx.xml.Document.isXmlDocument(bb))){var bj=qx.event.Registration.getManager(bb);
var bd=qx.dom.Hierarchy.getDescendants(bb);
bd.push(bb);
}if(qx.core.Variant.isSet(o,q)){for(var i=0,l=bd.length;i<l;i++){bj.toggleAttachedEvents(bd[i],false);
}}var bf=bb.cloneNode(true);
if(qx.core.Variant.isSet(o,q)){for(var i=0,l=bd.length;i<l;i++){bj.toggleAttachedEvents(bd[i],true);
}}if(bc===true){var bm=qx.dom.Hierarchy.getDescendants(bf);
bm.push(bf);
var be,bh,bl,bg;

for(var i=0,bk=bd.length;i<bk;i++){bl=bd[i];
be=bj.serializeListeners(bl);

if(be.length>0){bh=bm[i];

for(var j=0,bi=be.length;j<bi;j++){bg=be[j];
bj.addListener(bh,bg.type,bg.handler,bg.self,bg.capture);
}}}}return bf;
}}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__lq:null,__lr:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__lq=d;
this.__lr=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__lq=this.__lq;
g.__lr=this.__lr;
return g;
},getOrientation:function(){return this.__lq;
},isLandscape:function(){return this.__lr==c;
},isPortrait:function(){return this.__lr==a;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Native.prototype._cloneNativeEvent.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.layerX=d.layerX;
e.layerY=d.layerY;
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(var i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(var i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__oa().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__nY(f).pageX;
},getDocumentTop:function(g){return this.__nY(g).pageY;
},getScreenLeft:function(h){return this.__nY(h).screenX;
},getScreenTop:function(j){return this.__nY(j).screenY;
},getViewportLeft:function(k){return this.__nY(k).clientX;
},getViewportTop:function(l){return this.__nY(l).clientY;
},getIdentifier:function(m){return this.__nY(m).identifier;
},__nY:function(n){n=n==null?0:n;
return this.__oa()[n];
},__oa:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
}}});
})();
(function(){var a="qx.event.type.Swipe";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);
c.swipe=b.swipe;
return c;
},_isTouchEnd:function(){return true;
},getStartTime:function(){return this._native.swipe.startTime;
},getDuration:function(){return this._native.swipe.duration;
},getAxis:function(){return this._native.swipe.axis;
},getDirection:function(){return this._native.swipe.direction;
},getVelocity:function(){return this._native.swipe.velocity;
},getDistance:function(){return this._native.swipe.distance;
}}});
})();
(function(){var h="left",g="right",f="middle",e="none",d="click",c="contextmenu",b="qx.event.type.Mouse",a="qx.client";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(i,j){var j=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,i,j);
j.button=i.button;
j.clientX=i.clientX;
j.clientY=i.clientY;
j.pageX=i.pageX;
j.pageY=i.pageY;
j.screenX=i.screenX;
j.screenY=i.screenY;
j.wheelDelta=i.wheelDelta;
j.detail=i.detail;
j.srcElement=i.srcElement;
j.target=i.target;
return j;
},__pM:{0:h,2:g,1:f},__pN:{1:h,2:g,4:f},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case c:return g;
case d:if(this.__pO){return this.__pO();
}default:if(this._native.target!==undefined){return this.__pM[this._native.button]||e;
}else{return this.__pN[this._native.button]||e;
}}},__pO:qx.core.Variant.select(a,{"mshtml":function(){return h;
},"default":null}),isLeftPressed:function(){return this.getButton()===h;
},isMiddlePressed:function(){return this.getButton()===f;
},isRightPressed:function(){return this.getButton()===g;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){if(qx.bom.client.Platform.MAC){return -(this._native.wheelDelta/1200);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.bom.client.Platform.WIN){var d=120;
if(qx.bom.client.Engine.VERSION==533.16){d=1200;
}}else{d=40;
if(qx.bom.client.Engine.VERSION==533.16||qx.bom.client.Engine.VERSION==533.17||qx.bom.client.Engine.VERSION==533.18){d=1200;
}}return -(this._native.wheelDelta/d);
}}})}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__lb:function(y){var z=navigator.userAgent;
var B=new RegExp(s+y+d);
var C=z.match(B);

if(!C){return;
}var name=C[1].toLowerCase();
var A=C[3];
if(z.match(/Version(\/| )([0-9]+\.[0-9])/)){A=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(z.indexOf(a)!==-1||z.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
A=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=A;
this.VERSION=parseFloat(A,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(D){D.__lb(o);
},"gecko":function(E){E.__lb(k);
},"mshtml":function(F){F.__lb(v);
},"opera":function(G){G.__lb(p);
}})});
})();
(function(){var f="qx.client",e="qx.dom.Hierarchy",d="previousSibling",c="*",b="nextSibling",a="parentNode";
qx.Class.define(e,{statics:{getNodeIndex:function(g){var h=0;

while(g&&(g=g.previousSibling)){h++;
}return h;
},getElementIndex:function(i){var j=0;
var k=qx.dom.Node.ELEMENT;

while(i&&(i=i.previousSibling)){if(i.nodeType==k){j++;
}}return j;
},getNextElementSibling:function(l){while(l&&(l=l.nextSibling)&&!qx.dom.Node.isElement(l)){continue;
}return l||null;
},getPreviousElementSibling:function(m){while(m&&(m=m.previousSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},contains:qx.core.Variant.select(f,{"webkit|mshtml|opera":function(n,o){if(qx.dom.Node.isDocument(n)){var p=qx.dom.Node.getDocument(o);
return n&&p==n;
}else if(qx.dom.Node.isDocument(o)){return false;
}else{return n.contains(o);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:qx.core.Variant.select(f,{"mshtml":function(u){if(!u.parentNode||!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
return v.body.contains(u);
},"gecko":function(w){var x=w.ownerDocument||w.document;
return !!(x.compareDocumentPosition(w)&16);
},"default":function(y){if(!y.parentNode||!y.offsetParent){return false;
}var z=y.ownerDocument||y.document;
return z.body.contains(y);
}}),isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Variant.select(f,{"mshtml|opera":function(C,D){if(C===D){return C;
}
while(C&&qx.dom.Node.isElement(C)){if(C.contains(D)){return C;
}C=C.parentNode;
}return null;
},"default":function(E,F){if(E===F){return E;
}var G={};
var J=qx.core.ObjectRegistry;
var I,H;

while(E||F){if(E){I=J.toHashCode(E);

if(G[I]){return G[I];
}G[I]=E;
E=E.parentNode;
}
if(F){H=J.toHashCode(F);

if(G[H]){return G[H];
}G[H]=F;
F=F.parentNode;
}}return null;
}}),getAncestors:function(K){return this._recursivelyCollect(K,a);
},getChildElements:function(L){L=L.firstChild;

if(!L){return [];
}var M=this.getNextSiblings(L);

if(L.nodeType===1){M.unshift(L);
}return M;
},getDescendants:function(N){return qx.lang.Array.fromCollection(N.getElementsByTagName(c));
},getFirstDescendant:function(O){O=O.firstChild;

while(O&&O.nodeType!=1){O=O.nextSibling;
}return O;
},getLastDescendant:function(P){P=P.lastChild;

while(P&&P.nodeType!=1){P=P.previousSibling;
}return P;
},getPreviousSiblings:function(Q){return this._recursivelyCollect(Q,d);
},getNextSiblings:function(R){return this._recursivelyCollect(R,b);
},_recursivelyCollect:function(S,T){var U=[];

while(S=S[T]){if(S.nodeType==1){U.push(S);
}}return U;
},getSiblings:function(V){return this.getPreviousSiblings(V).reverse().concat(this.getNextSiblings(V));
},isEmpty:function(W){W=W.firstChild;

while(W){if(W.nodeType===qx.dom.Node.ELEMENT||W.nodeType===qx.dom.Node.TEXT){return false;
}W=W.nextSibling;
}return true;
},cleanWhitespace:function(X){var Y=X.firstChild;

while(Y){var ba=Y.nextSibling;

if(Y.nodeType==3&&!/\S/.test(Y.nodeValue)){X.removeChild(Y);
}Y=ba;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._keyCode=b.keyCode;
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._keyCode=this._keyCode;
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
}}});
})();
(function(){var j="qx.client",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__mn:null,__mo:null,__mp:null,__mq:null,__mr:null,__ms:null,__mt:null,__mu:null,__mv:null,__mw:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if(qx.core.Variant.isSet(j,n)){window.setTimeout(function(){try{J.focus();
var K=qx.bom.Selection.get(J);

if(K.length==0){var L=J.createTextRange();
L.moveStart(s,J.value.length);
L.collapse();
L.select();
}}catch(M){}},0);
}else{try{J.focus();
}catch(N){}}this.setFocus(J);
this.setActive(J);
},activate:function(O){this.setActive(O);
},blur:function(P){try{P.blur();
}catch(Q){}
if(this.getActive()===P){this.resetActive();
}
if(this.getFocus()===P){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(S){var T=this.__mL(S);

if(T){this.setActive(T);
}},__mx:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__my:function(){if(this._windowFocused){this._windowFocused=false;
this.__mx(this._window,null,g,false);
}},__mz:function(){if(!this._windowFocused){this._windowFocused=true;
this.__mx(this._window,null,f,false);
}},_initObserver:qx.core.Variant.select(j,{"gecko":function(){this.__mn=qx.lang.Function.listener(this.__mF,this);
this.__mo=qx.lang.Function.listener(this.__mG,this);
this.__mp=qx.lang.Function.listener(this.__mE,this);
this.__mq=qx.lang.Function.listener(this.__mD,this);
this.__mr=qx.lang.Function.listener(this.__mA,this);
qx.bom.Event.addNativeListener(this._document,i,this.__mn,true);
qx.bom.Event.addNativeListener(this._document,h,this.__mo,true);
qx.bom.Event.addNativeListener(this._window,f,this.__mp,true);
qx.bom.Event.addNativeListener(this._window,g,this.__mq,true);
qx.bom.Event.addNativeListener(this._window,y,this.__mr,true);
},"mshtml":function(){this.__mn=qx.lang.Function.listener(this.__mF,this);
this.__mo=qx.lang.Function.listener(this.__mG,this);
this.__mt=qx.lang.Function.listener(this.__mB,this);
this.__mu=qx.lang.Function.listener(this.__mC,this);
this.__ms=qx.lang.Function.listener(this.__mI,this);
qx.bom.Event.addNativeListener(this._document,i,this.__mn);
qx.bom.Event.addNativeListener(this._document,h,this.__mo);
qx.bom.Event.addNativeListener(this._document,b,this.__mt);
qx.bom.Event.addNativeListener(this._document,a,this.__mu);
qx.bom.Event.addNativeListener(this._document,d,this.__ms);
},"webkit":function(){this.__mn=qx.lang.Function.listener(this.__mF,this);
this.__mo=qx.lang.Function.listener(this.__mG,this);
this.__mu=qx.lang.Function.listener(this.__mC,this);
this.__mp=qx.lang.Function.listener(this.__mE,this);
this.__mq=qx.lang.Function.listener(this.__mD,this);
this.__ms=qx.lang.Function.listener(this.__mI,this);
qx.bom.Event.addNativeListener(this._document,i,this.__mn,true);
qx.bom.Event.addNativeListener(this._document,h,this.__mo,true);
qx.bom.Event.addNativeListener(this._document,d,this.__ms,false);
qx.bom.Event.addNativeListener(this._window,c,this.__mu,true);
qx.bom.Event.addNativeListener(this._window,f,this.__mp,true);
qx.bom.Event.addNativeListener(this._window,g,this.__mq,true);
},"opera":function(){this.__mn=qx.lang.Function.listener(this.__mF,this);
this.__mo=qx.lang.Function.listener(this.__mG,this);
this.__mt=qx.lang.Function.listener(this.__mB,this);
this.__mu=qx.lang.Function.listener(this.__mC,this);
qx.bom.Event.addNativeListener(this._document,i,this.__mn,true);
qx.bom.Event.addNativeListener(this._document,h,this.__mo,true);
qx.bom.Event.addNativeListener(this._window,z,this.__mt,true);
qx.bom.Event.addNativeListener(this._window,c,this.__mu,true);
}}),_stopObserver:qx.core.Variant.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__mn,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__mo,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__mp,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__mq,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__mr,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__mn);
qx.bom.Event.removeNativeListener(this._document,h,this.__mo);
qx.bom.Event.removeNativeListener(this._document,b,this.__mt);
qx.bom.Event.removeNativeListener(this._document,a,this.__mu);
qx.bom.Event.removeNativeListener(this._document,d,this.__ms);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__mn,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__mo,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__ms,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__mu,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__mp,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__mq,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__mn,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__mo,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__mt,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__mu,true);
}}),__mA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__mM(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__mB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(bd){this.__mz();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__mK(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__mz();

if(this.__mv){this.setFocus(this.__mv);
delete this.__mv;
}
if(this.__mw){this.setActive(this.__mw);
delete this.__mw;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__mM(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__mC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(bi){if(!bi.toElement){this.__my();
this.resetFocus();
this.resetActive();
}},"webkit":function(bj){var bk=qx.bom.Event.getTarget(bj);

if(bk===this.getFocus()){this.resetFocus();
}
if(bk===this.getActive()){this.resetActive();
}},"opera":function(bl){var bm=qx.bom.Event.getTarget(bl);

if(bm==this._document){this.__my();
this.__mv=this.getFocus();
this.__mw=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bm===this.getFocus()){this.resetFocus();
}
if(bm===this.getActive()){this.resetActive();
}}},"default":null})),__mD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(bn){var bo=qx.bom.Event.getTarget(bn);

if(bo===this._window||bo===this._document){this.__my();
this.resetActive();
this.resetFocus();
}},"webkit":function(bp){var bq=qx.bom.Event.getTarget(bp);

if(bq===this._window||bq===this._document){this.__my();
this.__mv=this.getFocus();
this.__mw=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__mE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(br){var bs=qx.bom.Event.getTarget(br);

if(bs===this._window||bs===this._document){this.__mz();
bs=this._body;
}this.setFocus(bs);
this.tryActivate(bs);
},"webkit":function(bt){var bu=qx.bom.Event.getTarget(bt);

if(bu===this._window||bu===this._document){this.__mz();

if(this.__mv){this.setFocus(this.__mv);
delete this.__mv;
}
if(this.__mw){this.setActive(this.__mw);
delete this.__mw;
}}else{this.setFocus(bu);
this.tryActivate(bu);
}},"default":null})),__mF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"gecko":function(bv){var bx=qx.bom.Event.getTarget(bv);
var bw=this.__mK(bx);

if(!bw){qx.bom.Event.preventDefault(bv);
}else if(bw===this._body){this.setFocus(bw);
}},"mshtml":function(by){var bA=qx.bom.Event.getTarget(by);
var bz=this.__mK(bA);

if(bz){if(!this.__mM(bA)){bA.unselectable=e;
try{document.selection.empty();
}catch(bB){}try{bz.focus();
}catch(bC){}}}else{qx.bom.Event.preventDefault(by);
if(!this.__mM(bA)){bA.unselectable=e;
}}},"webkit":function(bD){var bF=qx.bom.Event.getTarget(bD);
var bE=this.__mK(bF);

if(bE){this.setFocus(bE);
}else{qx.bom.Event.preventDefault(bD);
}},"opera":function(bG){var bJ=qx.bom.Event.getTarget(bG);
var bH=this.__mK(bJ);

if(!this.__mM(bJ)){qx.bom.Event.preventDefault(bG);
if(bH){var bI=this.getFocus();

if(bI&&bI.selectionEnd){bI.selectionStart=0;
bI.selectionEnd=0;
bI.blur();
}if(bH){this.setFocus(bH);
}}}else if(bH){this.setFocus(bH);
}},"default":null})),__mG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml":function(bK){var bL=qx.bom.Event.getTarget(bK);

if(bL.unselectable){bL.unselectable=p;
}this.tryActivate(this.__mH(bL));
},"gecko":function(bM){var bN=qx.bom.Event.getTarget(bM);

while(bN&&bN.offsetWidth===undefined){bN=bN.parentNode;
}
if(bN){this.tryActivate(bN);
}},"webkit|opera":function(bO){var bP=qx.bom.Event.getTarget(bO);
this.tryActivate(this.__mH(bP));
},"default":null})),__mH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml|webkit":function(bQ){var bR=this.getFocus();

if(bR&&bQ!=bR&&(bR.nodeName.toLowerCase()===r||bR.nodeName.toLowerCase()===u)){bQ=bR;
}return bQ;
},"default":function(bS){return bS;
}})),__mI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(j,{"mshtml|webkit":function(bT){var bU=qx.bom.Event.getTarget(bT);

if(!this.__mM(bU)){qx.bom.Event.preventDefault(bT);
}},"default":null})),__mJ:function(bV){var bW=qx.bom.element.Attribute.get(bV,o);

if(bW>=1){return true;
}var bX=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bW>=0&&bX[bV.tagName]){return true;
}return false;
},__mK:function(bY){while(bY&&bY.nodeType===1){if(bY.getAttribute(k)==e){return null;
}
if(this.__mJ(bY)){return bY;
}bY=bY.parentNode;
}return this._body;
},__mL:function(ca){var cb=ca;

while(ca&&ca.nodeType===1){if(ca.getAttribute(l)==e){return null;
}ca=ca.parentNode;
}return cb;
},__mM:function(cc){while(cc&&cc.nodeType===1){var cd=cc.getAttribute(q);

if(cd!=null){return cd===e;
}cc=cc.parentNode;
}return true;
},_applyActive:function(ce,cf){if(cf){this.__mx(cf,ce,v,true);
}
if(ce){this.__mx(ce,cf,m,true);
}},_applyFocus:function(cg,ch){if(ch){this.__mx(ch,cg,a,true);
}
if(cg){this.__mx(cg,ch,b,true);
}if(ch){this.__mx(ch,cg,g,false);
}
if(cg){this.__mx(cg,ch,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__mN=null;
},defer:function(ci){qx.event.Registration.addHandler(ci);
var cj=ci.FOCUSABLE_ELEMENTS;

for(var ck in cj){cj[ck.toUpperCase()]=1;
}}});
})();
(function(){var k="qx.client",j="character",i="EndToEnd",h="input",g="textarea",f="StartToStart",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Variant.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Variant.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__mS(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Variant.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__mS(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__mS(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Variant.select(k,{"mshtml":function(A){if(this.__mS(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(e,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();
H.moveToElementText(C);
var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(f,G);
B.setEndPoint(i,H);
if(H.compareEndPoints(f,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(j,-1);
if(H.compareEndPoints(f,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(J){if(this.__mS(J)){return J.selectionStart;
}else{var L=qx.dom.Node.getDocument(J);
var K=this.getSelectionObject(L);
if(K.anchorOffset<K.focusOffset){return K.anchorOffset;
}else{return K.focusOffset;
}}},"default":function(M){if(this.__mS(M)){return M.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(M)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(k,{"mshtml":function(N){if(this.__mS(N)){var S=qx.bom.Range.get();
if(!N.contains(S.parentElement())){return -1;
}var T=qx.bom.Range.get(N);
var R=N.value.length;
T.moveToBookmark(S.getBookmark());
T.moveStart(e,-R);
return T.text.length;
}else{var T=qx.bom.Range.get(N);
var P=T.parentElement();
var U=qx.bom.Range.get();
U.moveToElementText(P);
var R=U.text.length;
var O=qx.bom.Range.get(qx.dom.Node.getBodyElement(N));
O.setEndPoint(i,T);
O.setEndPoint(f,U);
if(U.compareEndPoints(i,O)==0){return R-1;
}var Q;
var V=0;

while(true){Q=O.moveEnd(j,1);
if(U.compareEndPoints(i,O)==0){break;
}if(Q==0){break;
}else{V++;
}}return R-(++V);
}},"gecko|webkit":function(W){if(this.__mS(W)){return W.selectionEnd;
}else{var Y=qx.dom.Node.getDocument(W);
var X=this.getSelectionObject(Y);
if(X.focusOffset>X.anchorOffset){return X.focusOffset;
}else{return X.anchorOffset;
}}},"default":function(ba){if(this.__mS(ba)){return ba.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(ba)).focusOffset;
}}}),__mS:function(bb){return qx.dom.Node.isElement(bb)&&(bb.nodeName.toLowerCase()==h||bb.nodeName.toLowerCase()==g);
},set:qx.core.Variant.select(k,{"mshtml":function(bc,bd,be){var bf;
if(qx.dom.Node.isDocument(bc)){bc=bc.body;
}
if(qx.dom.Node.isElement(bc)||qx.dom.Node.isText(bc)){switch(bc.nodeName.toLowerCase()){case h:case g:case c:if(be===undefined){be=bc.value.length;
}
if(bd>=0&&bd<=bc.value.length&&be>=0&&be<=bc.value.length){bf=qx.bom.Range.get(bc);
bf.collapse(true);
bf.moveStart(j,bd);
bf.moveEnd(j,be-bd);
bf.select();
return true;
}break;
case b:if(be===undefined){be=bc.nodeValue.length;
}
if(bd>=0&&bd<=bc.nodeValue.length&&be>=0&&be<=bc.nodeValue.length){bf=qx.bom.Range.get(qx.dom.Node.getBodyElement(bc));
bf.moveToElementText(bc.parentNode);
bf.collapse(true);
bf.moveStart(j,bd);
bf.moveEnd(j,be-bd);
bf.select();
return true;
}break;
default:if(be===undefined){be=bc.childNodes.length-1;
}if(bc.childNodes[bd]&&bc.childNodes[be]){bf=qx.bom.Range.get(qx.dom.Node.getBodyElement(bc));
bf.moveToElementText(bc.childNodes[bd]);
bf.collapse(true);
var bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bc));
bg.moveToElementText(bc.childNodes[be]);
bf.setEndPoint(i,bg);
bf.select();
return true;
}}}return false;
},"default":function(bh,bi,bj){var bn=bh.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bh)&&(bn==h||bn==g)){if(bj===undefined){bj=bh.value.length;
}if(bi>=0&&bi<=bh.value.length&&bj>=0&&bj<=bh.value.length){bh.focus();
bh.select();
bh.setSelectionRange(bi,bj);
return true;
}}else{var bl=false;
var bm=qx.dom.Node.getWindow(bh).getSelection();
var bk=qx.bom.Range.get(bh);
if(qx.dom.Node.isText(bh)){if(bj===undefined){bj=bh.length;
}
if(bi>=0&&bi<bh.length&&bj>=0&&bj<=bh.length){bl=true;
}}else if(qx.dom.Node.isElement(bh)){if(bj===undefined){bj=bh.childNodes.length-1;
}
if(bi>=0&&bh.childNodes[bi]&&bj>=0&&bh.childNodes[bj]){bl=true;
}}else if(qx.dom.Node.isDocument(bh)){bh=bh.body;

if(bj===undefined){bj=bh.childNodes.length-1;
}
if(bi>=0&&bh.childNodes[bi]&&bj>=0&&bh.childNodes[bj]){bl=true;
}}
if(bl){if(!bm.isCollapsed){bm.collapseToStart();
}bk.setStart(bh,bi);
if(qx.dom.Node.isText(bh)){bk.setEnd(bh,bj);
}else{bk.setEndAfter(bh.childNodes[bj]);
}if(bm.rangeCount>0){bm.removeAllRanges();
}bm.addRange(bk);
return true;
}}return false;
}}),setAll:function(bo){return qx.bom.Selection.set(bo,0);
},clear:qx.core.Variant.select(k,{"mshtml":function(bp){var bq=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bp));
var br=qx.bom.Range.get(bp);
var parent=br.parentElement();
var bs=qx.bom.Range.get(qx.dom.Node.getDocument(bp));
if(parent==bs.parentElement()&&parent==bp){bq.empty();
}},"default":function(bt){var bv=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bt));
var bx=bt.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bt)&&(bx==h||bx==g)){bt.setSelectionRange(0,0);
qx.bom.Element.blur(bt);
}else if(qx.dom.Node.isDocument(bt)||bx==a){bv.collapse(bt.body?bt.body:bt,0);
}else{var bw=qx.bom.Range.get(bt);

if(!bw.collapsed){var by;
var bu=bw.commonAncestorContainer;
if(qx.dom.Node.isElement(bt)&&qx.dom.Node.isText(bu)){by=bu.parentNode;
}else{by=bu;
}
if(by==bt){bv.collapse(bt,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__kQ:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__kQ.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(D,name){var F=this.__kQ;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__kQ;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__kQ;
name=L.names[name]||name;
if(L.bools[name]){K=!!K;
}if(L.property[name]&&(!(J[name]===undefined)||L.qxProperties[name])){if(K==null){if(L.removeableProperties[name]){J.removeAttribute(name);
return;
}else if(typeof L.propertyDefault[name]!==i){K=L.propertyDefault[name];
}}J[name]=K;
}else{if(K===true){J.setAttribute(name,name);
}else if(K===false||K===null){J.removeAttribute(name);
}else{J.setAttribute(name,K);
}}},reset:function(M,name){this.set(M,name,null);
}}});
})();
(function(){var a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:function(){if(this._native==null){return 0;
}
if(this._native.pageX!==undefined){return this._native.pageX;
}else{var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
}},getDocumentTop:function(){if(this._native==null){return 0;
}
if(this._native.pageY!==undefined){return this._native.pageY;
}else{var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
}},getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(h){this.getManager().addType(h);
},addAction:function(i){this.getManager().addAction(i);
},supportsType:function(j){return this.getManager().supportsType(j);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(l,m){this.getManager().addData(l,m);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(i,j){qx.event.dispatch.AbstractBubbling.call(this,i);
this.__kx=i.getWindow();
this.__ky=j;
i.addListener(this.__kx,f,this.releaseCapture,this);
i.addListener(this.__kx,e,this.releaseCapture,this);
i.addListener(this.__kx,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__ky:null,__kz:null,__kA:true,__kx:null,_getParent:function(k){return k.parentNode;
},canDispatchEvent:function(l,event,m){return (this.__kz&&this.__kB[m]);
},dispatchEvent:function(n,event,o){if(o==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__kA||!qx.dom.Hierarchy.contains(this.__kz,n)){n=this.__kz;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,n,event,o);
},__kB:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(p,q){var q=q!==false;

if(this.__kz===p&&this.__kA==q){return;
}
if(this.__kz){this.releaseCapture();
}this.nativeSetCapture(p,q);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(p,h,function(){qx.bom.Event.removeNativeListener(p,h,arguments.callee);
self.releaseCapture();
});
}this.__kA=q;
this.__kz=p;
this.__ky.fireEvent(p,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__kz;
},releaseCapture:function(){var r=this.__kz;

if(!r){return;
}this.__kz=null;
this.__ky.fireEvent(r,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(r);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(s,t){qx.event.Timer.once(function(){s.setCapture(t!==false);
},this,0);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(u){qx.event.Timer.once(function(){u.releaseCapture();
},this,0);
},"default":qx.lang.Function.empty})},destruct:function(){this.__kz=this.__kx=this.__ky=null;
},defer:function(v){qx.event.Registration.addDispatcher(v);
}});
})();
(function(){var c="qx.bom.Selector";
qx.Class.define(c,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,v=0,r=Object.prototype.toString,p=false,x=true;
[0,0].sort(function(){x=false;
return 0;
});
var g=function(z,A,B,C){B=B||[];
A=A||document;
var L=A;

if(A.nodeType!==1&&A.nodeType!==9){return [];
}
if(!z||typeof z!=="string"){return B;
}var m,F,D,H,J,G,M,i,N=true,E=g.isXML(A),I=[],K=z;
do{o.exec("");
m=o.exec(K);

if(m){K=m[3];
I.push(m[1]);

if(m[2]){H=m[3];
break;
}}}while(m);

if(I.length>1&&q.exec(z)){if(I.length===2&&k.relative[I[0]]){F=h(I[0]+I[1],A);
}else{F=k.relative[I[0]]?[A]:g(I.shift(),A);

while(I.length){z=I.shift();

if(k.relative[z]){z+=I.shift();
}F=h(z,F);
}}}else{if(!C&&I.length>1&&A.nodeType===9&&!E&&k.match.ID.test(I[0])&&!k.match.ID.test(I[I.length-1])){J=g.find(I.shift(),A,E);
A=J.expr?g.filter(J.expr,J.set)[0]:J.set[0];
}
if(A){J=C?
{expr:I.pop(),set:f(C)}:g.find(I.pop(),I.length===1&&(I[0]==="~"||I[0]==="+")&&A.parentNode?A.parentNode:A,E);
F=J.expr?g.filter(J.expr,J.set):J.set;

if(I.length>0){D=f(F);
}else{N=false;
}
while(I.length){G=I.pop();
M=G;

if(!k.relative[G]){G="";
}else{M=I.pop();
}
if(M==null){M=A;
}k.relative[G](D,M,E);
}}else{D=I=[];
}}
if(!D){D=F;
}
if(!D){g.error(G||z);
}
if(r.call(D)==="[object Array]"){if(!N){B.push.apply(B,D);
}else if(A&&A.nodeType===1){for(i=0;D[i]!=null;i++){if(D[i]&&(D[i]===true||D[i].nodeType===1&&g.contains(A,D[i]))){B.push(F[i]);
}}}else{for(i=0;D[i]!=null;i++){if(D[i]&&D[i].nodeType===1){B.push(F[i]);
}}}}else{f(D,B);
}
if(H){g(H,L,B,C);
g.uniqueSort(B);
}return B;
};
g.uniqueSort=function(O){if(s){p=x;
O.sort(s);

if(p){for(var i=1;i<O.length;i++){if(O[i]===O[i-1]){O.splice(i--,1);
}}}}return O;
};
g.matches=function(P,Q){return g(P,null,null,Q);
};
g.matchesSelector=function(R,S){return g(S,null,null,[R]).length>0;
};
g.find=function(T,U,V){var W;

if(!T){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var Y,X=k.order[i];

if((Y=k.leftMatch[X].exec(T))){var ba=Y[1];
Y.splice(1,1);

if(ba.substr(ba.length-1)!=="\\"){Y[1]=(Y[1]||"").replace(/\\/g,"");
W=k.find[X](Y,U,V);

if(W!=null){T=T.replace(k.match[X],"");
break;
}}}}
if(!W){W=U.getElementsByTagName("*");
}return {set:W,expr:T};
};
g.filter=function(bb,bc,bd,be){var br,bq,bf=bb,bk=[],bg=bc,bh=bc&&bc[0]&&g.isXML(bc[0]);

while(bb&&bc.length){for(var bo in k.filter){if((br=k.leftMatch[bo].exec(bb))!=null&&br[2]){var bn,bj,bi=k.filter[bo],bs=br[1];
bq=false;
br.splice(1,1);

if(bs.substr(bs.length-1)==="\\"){continue;
}
if(bg===bk){bk=[];
}
if(k.preFilter[bo]){br=k.preFilter[bo](br,bg,bd,bk,be,bh);

if(!br){bq=bn=true;
}else if(br===true){continue;
}}
if(br){for(var i=0;(bj=bg[i])!=null;i++){if(bj){bn=bi(bj,br,i,bg);
var bm=be^!!bn;

if(bd&&bn!=null){if(bm){bq=true;
}else{bg[i]=false;
}}else if(bm){bk.push(bj);
bq=true;
}}}}
if(bn!==undefined){if(!bd){bg=bk;
}bb=bb.replace(k.match[bo],"");

if(!bq){return [];
}break;
}}}if(bb===bf){if(bq==null){g.error(bb);
}else{break;
}}bf=bb;
}return bg;
};
g.error=function(bt){throw "Syntax error, unrecognized expression: "+bt;
};
var k=g.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bu){return bu.getAttribute("href");
}},relative:{"+":function(bv,bw){var bx=typeof bw==="string",bz=bx&&!/\W/.test(bw),bA=bx&&!bz;

if(bz){bw=bw.toLowerCase();
}
for(var i=0,l=bv.length,by;i<l;i++){if((by=bv[i])){while((by=by.previousSibling)&&by.nodeType!==1){}bv[i]=bA||by&&by.nodeName.toLowerCase()===bw?by||false:by===bw;
}}
if(bA){g.filter(bw,bv,true);
}},">":function(bB,bC){var bE,bD=typeof bC==="string",i=0,l=bB.length;

if(bD&&!/\W/.test(bC)){bC=bC.toLowerCase();

for(;i<l;i++){bE=bB[i];

if(bE){var parent=bE.parentNode;
bB[i]=parent.nodeName.toLowerCase()===bC?parent:false;
}}}else{for(;i<l;i++){bE=bB[i];

if(bE){bB[i]=bD?bE.parentNode:bE.parentNode===bC;
}}
if(bD){g.filter(bC,bB,true);
}}},"":function(bF,bG,bH){var bK,bI=v++,bJ=w;

if(typeof bG==="string"&&!/\W/.test(bG)){bG=bG.toLowerCase();
bK=bG;
bJ=y;
}bJ("parentNode",bG,bI,bF,bK,bH);
},"~":function(bL,bM,bN){var bQ,bO=v++,bP=w;

if(typeof bM==="string"&&!/\W/.test(bM)){bM=bM.toLowerCase();
bQ=bM;
bP=y;
}bP("previousSibling",bM,bO,bL,bQ,bN);
}},find:{ID:function(bR,bS,bT){if(typeof bS.getElementById!=="undefined"&&!bT){var m=bS.getElementById(bR[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(bU,bV){if(typeof bV.getElementsByName!=="undefined"){var bX=[],bW=bV.getElementsByName(bU[1]);

for(var i=0,l=bW.length;i<l;i++){if(bW[i].getAttribute("name")===bU[1]){bX.push(bW[i]);
}}return bX.length===0?null:bX;
}},TAG:function(bY,ca){return ca.getElementsByTagName(bY[1]);
}},preFilter:{CLASS:function(cb,cc,cd,ce,cf,cg){cb=" "+cb[1].replace(/\\/g,"")+" ";

if(cg){return cb;
}
for(var i=0,ch;(ch=cc[i])!=null;i++){if(ch){if(cf^(ch.className&&(" "+ch.className+" ").replace(/[\t\n]/g," ").indexOf(cb)>=0)){if(!cd){ce.push(ch);
}}else if(cd){cc[i]=false;
}}}return false;
},ID:function(ci){return ci[1].replace(/\\/g,"");
},TAG:function(cj,ck){return cj[1].toLowerCase();
},CHILD:function(cl){if(cl[1]==="nth"){var cm=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(cl[2]==="even"&&"2n"||cl[2]==="odd"&&"2n+1"||!/\D/.test(cl[2])&&"0n+"+cl[2]||cl[2]);
cl[2]=(cm[1]+(cm[2]||1))-0;
cl[3]=cm[3]-0;
}cl[0]=v++;
return cl;
},ATTR:function(cn,co,cp,cq,cr,cs){var name=cn[1].replace(/\\/g,"");

if(!cs&&k.attrMap[name]){cn[1]=k.attrMap[name];
}
if(cn[2]==="~="){cn[4]=" "+cn[4]+" ";
}return cn;
},PSEUDO:function(ct,cu,cv,cw,cx){if(ct[1]==="not"){if((o.exec(ct[3])||"").length>1||/^\w/.test(ct[3])){ct[3]=g(ct[3],null,null,cu);
}else{var cy=g.filter(ct[3],cu,cv,true^cx);

if(!cv){cw.push.apply(cw,cy);
}return false;
}}else if(k.match.POS.test(ct[0])||k.match.CHILD.test(ct[0])){return true;
}return ct;
},POS:function(cz){cz.unshift(true);
return cz;
}},filters:{enabled:function(cA){return cA.disabled===false&&cA.type!=="hidden";
},disabled:function(cB){return cB.disabled===true;
},checked:function(cC){return cC.checked===true;
},selected:function(cD){cD.parentNode.selectedIndex;
return cD.selected===true;
},parent:function(cE){return !!cE.firstChild;
},empty:function(cF){return !cF.firstChild;
},has:function(cG,i,cH){return !!g(cH[3],cG).length;
},header:function(cI){return (/h\d/i).test(cI.nodeName);
},text:function(cJ){return "text"===cJ.type;
},radio:function(cK){return "radio"===cK.type;
},checkbox:function(cL){return "checkbox"===cL.type;
},file:function(cM){return "file"===cM.type;
},password:function(cN){return "password"===cN.type;
},submit:function(cO){return "submit"===cO.type;
},image:function(cP){return "image"===cP.type;
},reset:function(cQ){return "reset"===cQ.type;
},button:function(cR){return "button"===cR.type||cR.nodeName.toLowerCase()==="button";
},input:function(cS){return (/input|select|textarea|button/i).test(cS.nodeName);
}},setFilters:{first:function(cT,i){return i===0;
},last:function(cU,i,cV,cW){return i===cW.length-1;
},even:function(cX,i){return i%2===0;
},odd:function(cY,i){return i%2===1;
},lt:function(da,i,db){return i<db[3]-0;
},gt:function(dc,i,dd){return i>dd[3]-0;
},nth:function(de,i,df){return df[3]-0===i;
},eq:function(dg,i,dh){return dh[3]-0===i;
}},filter:{PSEUDO:function(di,dj,i,dk){var name=dj[1],dl=k.filters[name];

if(dl){return dl(di,i,dj,dk);
}else if(name==="contains"){return (di.textContent||di.innerText||g.getText([di])||"").indexOf(dj[3])>=0;
}else if(name==="not"){var dm=dj[3];

for(var j=0,l=dm.length;j<l;j++){if(dm[j]===di){return false;
}}return true;
}else{g.error("Syntax error, unrecognized expression: "+name);
}},CHILD:function(dn,dp){var dv=dp[1],dq=dn;

switch(dv){case "only":case "first":while((dq=dq.previousSibling)){if(dq.nodeType===1){return false;
}}
if(dv==="first"){return true;
}dq=dn;
case "last":while((dq=dq.nextSibling)){if(dq.nodeType===1){return false;
}}return true;
case "nth":var dw=dp[2],ds=dp[3];

if(dw===1&&ds===0){return true;
}var du=dp[0],parent=dn.parentNode;

if(parent&&(parent.sizcache!==du||!dn.nodeIndex)){var dr=0;

for(dq=parent.firstChild;dq;dq=dq.nextSibling){if(dq.nodeType===1){dq.nodeIndex=++dr;
}}parent.sizcache=du;
}var dt=dn.nodeIndex-ds;

if(dw===0){return dt===0;
}else{return (dt%dw===0&&dt/dw>=0);
}}},ID:function(dx,dy){return dx.nodeType===1&&dx.getAttribute("id")===dy;
},TAG:function(dz,dA){return (dA==="*"&&dz.nodeType===1)||dz.nodeName.toLowerCase()===dA;
},CLASS:function(dB,dC){return (" "+(dB.className||dB.getAttribute("class"))+" ").indexOf(dC)>-1;
},ATTR:function(dD,dE){var name=dE[1],dI=k.attrHandle[name]?k.attrHandle[name](dD):dD[name]!=null?dD[name]:dD.getAttribute(name),dH=dI+"",dG=dE[2],dF=dE[4];
return dI==null?dG==="!=":dG==="="?dH===dF:dG==="*="?dH.indexOf(dF)>=0:dG==="~="?(" "+dH+" ").indexOf(dF)>=0:!dF?dH&&dI!==false:dG==="!="?dH!==dF:dG==="^="?dH.indexOf(dF)===0:dG==="$="?dH.substr(dH.length-dF.length)===dF:dG==="|="?dH===dF||dH.substr(0,dF.length+1)===dF+"-":false;
},POS:function(dJ,dK,i,dL){var name=dK[2],dM=k.setFilters[name];

if(dM){return dM(dJ,i,dK,dL);
}}}};
var q=k.match.POS,d=function(dN,dO){return "\\"+(dO-0+1);
};

for(var u in k.match){k.match[u]=new RegExp(k.match[u].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
k.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[u].source.replace(/\\(\d+)/g,d));
}var f=function(dP,dQ){dP=Array.prototype.slice.call(dP,0);

if(dQ){dQ.push.apply(dQ,dP);
return dQ;
}return dP;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){f=function(dR,dS){var i=0,dT=dS||[];

if(r.call(dR)==="[object Array]"){Array.prototype.push.apply(dT,dR);
}else{if(typeof dR.length==="number"){for(var l=dR.length;i<l;i++){dT.push(dR[i]);
}}else{for(;dR[i];i++){dT.push(dR[i]);
}}}return dT;
};
}var s,n;

if(document.documentElement.compareDocumentPosition){s=function(a,b){if(a===b){p=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{s=function(a,b){var dY,dW,ea=[],eb=[],dV=a.parentNode,dX=b.parentNode,dU=dV;
if(a===b){p=true;
return 0;
}else if(dV===dX){return n(a,b);
}else if(!dV){return -1;
}else if(!dX){return 1;
}while(dU){ea.unshift(dU);
dU=dU.parentNode;
}dU=dX;

while(dU){eb.unshift(dU);
dU=dU.parentNode;
}dY=ea.length;
dW=eb.length;
for(var i=0;i<dY&&i<dW;i++){if(ea[i]!==eb[i]){return n(ea[i],eb[i]);
}}return i===dY?n(a,eb[i],-1):n(ea[i],b,1);
};
n=function(a,b,ec){if(a===b){return ec;
}var ed=a.nextSibling;

while(ed){if(ed===b){return -1;
}ed=ed.nextSibling;
}return 1;
};
}g.getText=function(ee){var eg="",ef;

for(var i=0;ee[i];i++){ef=ee[i];
if(ef.nodeType===3||ef.nodeType===4){eg+=ef.nodeValue;
}else if(ef.nodeType!==8){eg+=g.getText(ef.childNodes);
}}return eg;
};
(function(){var ej=document.createElement("div"),ei="script"+(new Date()).getTime(),eh=document.documentElement;
ej.innerHTML="<a name='"+ei+"'/>";
eh.insertBefore(ej,eh.firstChild);
if(document.getElementById(ei)){k.find.ID=function(ek,el,em){if(typeof el.getElementById!=="undefined"&&!em){var m=el.getElementById(ek[1]);
return m?m.id===ek[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===ek[1]?[m]:undefined:[];
}};
k.filter.ID=function(en,eo){var ep=typeof en.getAttributeNode!=="undefined"&&en.getAttributeNode("id");
return en.nodeType===1&&ep&&ep.nodeValue===eo;
};
}eh.removeChild(ej);
eh=ej=null;
})();
(function(){var eq=document.createElement("div");
eq.appendChild(document.createComment(""));
if(eq.getElementsByTagName("*").length>0){k.find.TAG=function(er,es){var eu=es.getElementsByTagName(er[1]);
if(er[1]==="*"){var et=[];

for(var i=0;eu[i];i++){if(eu[i].nodeType===1){et.push(eu[i]);
}}eu=et;
}return eu;
};
}eq.innerHTML="<a href='#'></a>";

if(eq.firstChild&&typeof eq.firstChild.getAttribute!=="undefined"&&eq.firstChild.getAttribute("href")!=="#"){k.attrHandle.href=function(ev){return ev.getAttribute("href",2);
};
}eq=null;
})();

if(document.querySelectorAll){(function(){var ex=g,ew=document.createElement("div"),ey="__sizzle__";
ew.innerHTML="<p class='TEST'></p>";
if(ew.querySelectorAll&&ew.querySelectorAll(".TEST").length===0){return;
}g=function(eA,eB,eC,eD){eB=eB||document;
eA=eA.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!eD&&!g.isXML(eB)){if(eB.nodeType===9){try{return f(eB.querySelectorAll(eA),eC);
}catch(eG){}}else if(eB.nodeType===1&&eB.nodeName.toLowerCase()!=="object"){var eE=eB.getAttribute("id"),eF=eE||ey;

if(!eE){eB.setAttribute("id",eF);
}
try{return f(eB.querySelectorAll("#"+eF+" "+eA),eC);
}catch(eH){}finally{if(!eE){eB.removeAttribute("id");
}}}}return ex(eA,eB,eC,eD);
};

for(var ez in ex){g[ez]=ex[ez];
}ew=null;
})();
}(function(){var eK=document.documentElement,eI=eK.matchesSelector||eK.mozMatchesSelector||eK.webkitMatchesSelector||eK.msMatchesSelector,eJ=false;

try{eI.call(document.documentElement,"[test!='']:sizzle");
}catch(eL){eJ=true;
}
if(eI){g.matchesSelector=function(eM,eN){eN=eN.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!g.isXML(eM)){try{if(eJ||!k.match.PSEUDO.test(eN)&&!/!=/.test(eN)){return eI.call(eM,eN);
}}catch(e){}}return g(eN,null,null,[eM]).length>0;
};
}})();
(function(){var eO=document.createElement("div");
eO.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eO.getElementsByClassName||eO.getElementsByClassName("e").length===0){return;
}eO.lastChild.className="e";

if(eO.getElementsByClassName("e").length===1){return;
}k.order.splice(1,0,"CLASS");
k.find.CLASS=function(eP,eQ,eR){if(typeof eQ.getElementsByClassName!=="undefined"&&!eR){return eQ.getElementsByClassName(eP[1]);
}};
eO=null;
})();
function y(eS,eT,eU,eV,eW,eX){for(var i=0,l=eV.length;i<l;i++){var fa=eV[i];

if(fa){var eY=false;
fa=fa[eS];

while(fa){if(fa.sizcache===eU){eY=eV[fa.sizset];
break;
}
if(fa.nodeType===1&&!eX){fa.sizcache=eU;
fa.sizset=i;
}
if(fa.nodeName.toLowerCase()===eT){eY=fa;
break;
}fa=fa[eS];
}eV[i]=eY;
}}}function w(fb,fc,fd,fe,ff,fg){for(var i=0,l=fe.length;i<l;i++){var fi=fe[i];

if(fi){var fh=false;
fi=fi[fb];

while(fi){if(fi.sizcache===fd){fh=fe[fi.sizset];
break;
}
if(fi.nodeType===1){if(!fg){fi.sizcache=fd;
fi.sizset=i;
}
if(typeof fc!=="string"){if(fi===fc){fh=true;
break;
}}else if(g.filter(fc,[fi]).length>0){fh=fi;
break;
}}fi=fi[fb];
}fe[i]=fh;
}}}
if(document.documentElement.contains){g.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){g.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{g.contains=function(){return false;
};
}g.isXML=function(fj){var fk=(fj?fj.ownerDocument||fj:0).documentElement;
return fk?fk.nodeName!=="HTML":false;
};
var h=function(fl,fm){var fq,fo=[],fn="",fp=fm.nodeType?[fm]:fm;
while((fq=k.match.PSEUDO.exec(fl))){fn+=fq[0];
fl=fl.replace(k.match.PSEUDO,"");
}fl=k.relative[fl]?fl+"*":fl;

for(var i=0,l=fp.length;i<l;i++){g(fl,fp[i],fo);
}return g.filter(fn,fo);
};
var t=qx.bom.Selector;
t.query=function(fr,fs){return g(fr,fs);
};
t.matches=function(ft,fu){return g(ft,null,null,fu);
};
})();
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
v.setProperty(n,b);

if(u){var w=h;
w+=u;

if(t){w+=f+t+o;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||q,y||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(z){var A=qx.xml.Document.create();
A.loadXML(z);
return A;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(D){if(qx.core.Variant.isSet(r,p)){var E=[a,j];
var F=[c,g];

for(var i=0,l=E.length;i<l;i++){try{new ActiveXObject(E[i]);
new ActiveXObject(F[i]);
}catch(G){continue;
}D.DOMDOC=E[i];
D.XMLHTTP=F[i];
break;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(H,stop,I){var parent=H.parentNode;
var O=qx.dom.Node.getDocument(H);
var J=O.body;
var W,K,S;
var Y,V,Q;
var M,N,L;
var bb,bc,X,R;
var U,P,bd;
var ba=I===d;
var T=I===e;
stop=stop?stop.parentNode:O;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){K=parent.scrollTop;
S=K+qx.bom.Viewport.getHeight();
Y=qx.bom.Viewport.getHeight();
V=parent.clientHeight;
Q=parent.scrollHeight;
M=0;
N=0;
L=0;
}else{W=qx.bom.element.Location.get(parent);
K=W.top;
S=W.bottom;
Y=parent.offsetHeight;
V=parent.clientHeight;
Q=parent.scrollHeight;
M=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
N=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
L=Y-V-M-N;
}bb=qx.bom.element.Location.get(H);
bc=bb.top;
X=bb.bottom;
R=H.offsetHeight;
U=bc-K-M;
P=X-S+N;
bd=0;
if(ba){bd=U;
}else if(T){bd=P+L;
}else if(U<0||R>V){bd=U;
}else if(P>0){bd=P+L;
}parent.scrollTop+=bd;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__om:{},remove:function(c){delete this.__om[c.$$hash];
},add:function(d){var e=this.__om;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__om;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__om={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__kC:{},__kD:{},remove:function(c){var d=c.$$hash;
delete this.__kD[d];
delete this.__kC[d];
},isVisible:function(e){return this.__kD[e.$$hash]||false;
},__kE:function(f){var h=this.__kD;
var g=f.$$hash;
var i;
if(f.isExcluded()){i=false;
}else{var parent=f.$$parent;

if(parent){i=this.__kE(parent);
}else{i=f.isRootWidget();
}}return h[g]=i;
},add:function(j){var k=this.__kC;

if(k[j.$$hash]){return;
}k[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var l=this.__kC;
var p=this.__kD;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__kE(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__kC={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__lN:{},remove:function(c){delete this.__lN[c.$$hash];
},add:function(d){var e=this.__lN;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return !!this.__lN[f.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__lN;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__rk:{},add:function(c){var d=this.__rk;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__rk;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__rk={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}qx.html.Element.call(this,null,f);
this.__kF=d;
this.__kG=e||d.toHashCode();
this.useMarkup(d.getMarkup());
},members:{__kG:null,__kF:null,getId:function(){return this.__kG;
},getDecorator:function(){return this.__kF;
},resize:function(g,h){this.__kF.resize(this.getDomElement(),g,h);
},tint:function(i){this.__kF.tint(this.getDomElement(),i);
},getInsets:function(){return this.__kF.getInsets();
}},destruct:function(){this.__kF=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__jx=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__jx:null,__jy:{focusin:1,focusout:1,focus:1,blur:1},__jz:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__jy[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__jy[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__jy[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__jz[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__jx.getListeners(u,v,k);

if(!r||r.length===0){return;
}var m=qx.event.Pool.getInstance().getObject(j.constructor);
j.clone(m);
m.setTarget(o);
m.setRelatedTarget(w||null);
m.setCurrentTarget(u);
var y=j.getOriginalTarget();

if(y){var n=qx.ui.core.Widget.getWidgetByElement(y);

while(n&&n.isAnonymous()){n=n.getLayoutParent();
}m.setOriginalTarget(n);
}else{m.setOriginalTarget(p);
}for(var i=0,l=r.length;i<l;i++){var t=r[i].context||u;
r[i].handler.call(t,m);
}if(m.getPropagationStopped()){j.stopPropagation();
}
if(m.getDefaultPrevented()){j.preventDefault();
}qx.event.Pool.getInstance().poolObject(m);
},registerEvent:function(z,A,B){var C;

if(A===e||A===f){C=z.getFocusElement();
}else if(A===c||A===d){C=z.getContentElement();
}else{C=z.getContainerElement();
}
if(C){C.addListener(A,this._dispatchEvent,this,B);
}},unregisterEvent:function(D,E,F){var G;

if(E===e||E===f){G=D.getFocusElement();
}else if(E===c||E===d){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this.__jx=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var i="",h="/",g="mshtml",f="qx.client",e="//",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__pP:qx.$$resources||{},__pQ:{}},members:{has:function(j){return !!this.self(arguments).__pP[j];
},getData:function(k){return this.self(arguments).__pP[k]||null;
},getImageWidth:function(l){var m=this.self(arguments).__pP[l];
return m?m[0]:null;
},getImageHeight:function(n){var o=this.self(arguments).__pP[n];
return o?o[1]:null;
},getImageFormat:function(p){var q=this.self(arguments).__pP[p];
return q?q[2]:null;
},isClippedImage:function(r){var s=this.self(arguments).__pP[r];
return s&&s.length>4;
},toUri:function(t){if(t==null){return t;
}var u=this.self(arguments).__pP[t];

if(!u){return t;
}
if(typeof u===c){var w=u;
}else{var w=u[3];
if(!w){return t;
}}var v=i;

if(qx.core.Variant.isSet(f,g)&&qx.bom.client.Feature.SSL){v=this.self(arguments).__pQ[w];
}return v+qx.$$libraries[w].resourceUri+h+t;
}},defer:function(x){if(qx.core.Variant.isSet(f,g)){if(qx.bom.client.Feature.SSL){for(var B in qx.$$libraries){var z;

if(qx.$$libraries[B].resourceUri){z=qx.$$libraries[B].resourceUri;
}else{x.__pQ[B]=i;
continue;
}if(z.match(/^\/\//)!=null){x.__pQ[B]=window.location.protocol;
}else if(z.match(/^\//)!=null){x.__pQ[B]=window.location.protocol+e+window.location.host;
}else if(z.match(/^\.\//)!=null){var y=document.URL;
x.__pQ[B]=y.substring(0,y.lastIndexOf(h)+1);
}else if(z.match(/^http/)!=null){x.__pQ[B]=i;
}else{var C=window.location.href.indexOf(d);
var A;

if(C==-1){A=window.location.href;
}else{A=window.location.href.substring(0,C);
}x.__pQ[B]=A.substring(0,A.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__tG:function(){var d=(navigator.userLanguage||navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__tG();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__lc=u;
this.length=u.length;
},members:{$$isString:true,length:0,__lc:null,toString:function(){return this.__lc;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){{};
var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__of=c;
this.__og=d;
},members:{__of:null,__og:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__of,this.__og);
}}});
})();
(function(){var k="_",j="",h="_applyLocale",g="changeLocale",f="C",e="qx.dynlocale",d="on",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oV=qx.$$translations||{};
this.__oW=qx.$$locales||{};
var n=qx.bom.client.Locale;
var l=n.LOCALE;
var m=n.VARIANT;

if(m!==j){l+=k+m;
}this.__oX=l;
this.setLocale(l||this.__oY);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,2);
return qx.locale.Manager.getInstance().translate(x,z);
},marktr:function(A){return A;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__oY:f,__pa:null,__pb:null,__oV:null,__oW:null,__oX:null,getLanguage:function(){return this.__pb;
},getTerritory:function(){return this.getLocale().split(k)[1]||j;
},getAvailableLocales:function(){var C=[];

for(var B in this.__oW){if(B!=this.__oY){C.push(B);
}}return C;
},__pc:function(D){var F;
var E=D.indexOf(k);

if(E==-1){F=D;
}else{F=D.substring(0,E);
}return F;
},_applyLocale:function(G,H){{};
this.__pa=G;
this.__pb=this.__pc(G);
},addTranslation:function(I,J){var K=this.__oV;

if(K[I]){for(var L in J){K[I][L]=J[L];
}}else{K[I]=J;
}},addLocale:function(M,N){var O=this.__oW;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(Q,R,S){var T=this.__oV;
return this.__pd(T,Q,R,S);
},localize:function(U,V,W){var X=this.__oW;
return this.__pd(X,U,V,W);
},__pd:function(Y,ba,bb,bc){var bd;

if(!Y){return ba;
}
if(bc){var bf=this.__pc(bc);
}else{bc=this.__pa;
bf=this.__pb;
}if(!bd&&Y[bc]){bd=Y[bc][ba];
}if(!bd&&Y[bf]){bd=Y[bf][ba];
}if(!bd&&Y[this.__oY]){bd=Y[this.__oY][ba];
}
if(!bd){bd=ba;
}
if(bb.length>0){var be=[];

for(var i=0;i<bb.length;i++){var bg=bb[i];

if(bg&&bg.translate){be[i]=bg.translate();
}else{be[i]=bg;
}}bd=qx.lang.String.format(bd,be);
}
if(qx.core.Variant.isSet(e,d)){bd=new qx.locale.LocalizedString(bd,ba,bb);
}return bd;
}},destruct:function(){this.__oV=this.__oW=null;
}});
})();
(function(){var k="px",j="qx.client",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="scale-y",G="qx/icon",F="repeat",E=".png",D="crop",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',y="qx.bom.element.Decoration",x="', sizingMethod='",r="png",s="')",p='"></div>',q='"/>',n='" style="',o="none",l="webkit",m=" ",t="repeat-x",u="DXImageTransform.Microsoft.AlphaImageLoader",w="qx/static/blank.gif",v="absolute";
qx.Class.define(y,{statics:{DEBUG:false,__ts:{},__tt:qx.core.Variant.isSet(j,c)&&qx.bom.client.Engine.VERSION<9,__tu:qx.core.Variant.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__tv:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(H,I,J,K){var M=this.getTagName(J,I);

if(M!=H.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var N=this.getAttributes(I,J,K);

if(M===h){H.src=N.src||qx.util.ResourceManager.getInstance().toUri(w);
}if(H.style.backgroundPosition!=g&&N.style.backgroundPosition===undefined){N.style.backgroundPosition=null;
}if(H.style.clip!=g&&N.style.clip===undefined){N.style.clip=null;
}var L=qx.bom.element.Style;
L.setStyles(H,N.style);
if(this.__tt){try{H.filters[u].apply();
}catch(e){}}},create:function(O,P,Q){var R=this.getTagName(P,O);
var T=this.getAttributes(O,P,Q);
var S=qx.bom.element.Style.compile(T.style);

if(R===h){return z+T.src+n+S+q;
}else{return B+S+p;
}},getTagName:function(U,V){if(qx.core.Variant.isSet(j,c)){if(V&&this.__tt&&this.__tu[U]&&qx.lang.String.endsWith(V,E)){return i;
}}return this.__tv[U];
},getAttributes:function(W,X,Y){if(!Y){Y={};
}
if(!Y.position){Y.position=v;
}
if(qx.core.Variant.isSet(j,c)){Y.fontSize=0;
Y.lineHeight=0;
}else if(qx.core.Variant.isSet(j,l)){Y.WebkitUserDrag=o;
}var bb=qx.util.ResourceManager.getInstance().getImageFormat(W)||qx.io.ImageLoader.getFormat(W);
{};
var ba;
if(this.__tt&&this.__tu[X]&&bb===r){ba=this.__ty(Y,X,W);
}else{if(X===b){ba=this.__tz(Y,X,W);
}else if(X===d||X===a){ba=this.__tA(Y,X,W);
}else{ba=this.__tD(Y,X,W);
}}return ba;
},__tw:function(bc,bd,be){if(bc.width==null&&bd!=null){bc.width=bd+k;
}
if(bc.height==null&&be!=null){bc.height=be+k;
}return bc;
},__tx:function(bf){var bh=qx.util.ResourceManager.getInstance().getImageWidth(bf)||qx.io.ImageLoader.getWidth(bf);
var bi=qx.util.ResourceManager.getInstance().getImageHeight(bf)||qx.io.ImageLoader.getHeight(bf);
return {width:bh,height:bi};
},__ty:function(bj,bk,bl){var bo=this.__tx(bl);
bj=this.__tw(bj,bo.width,bo.height);
var bn=bk==f?D:b;
var bm=C+qx.util.ResourceManager.getInstance().toUri(bl)+x+bn+s;
bj.filter=bm;
bj.backgroundImage=bj.backgroundRepeat=g;
return {style:bj};
},__tz:function(bp,bq,br){var bs=qx.util.ResourceManager.getInstance().toUri(br);
var bt=this.__tx(br);
bp=this.__tw(bp,bt.width,bt.height);
return {src:bs,style:bp};
},__tA:function(bu,bv,bw){var bA=qx.util.ResourceManager.getInstance();
var bz=bA.isClippedImage(bw);
var bB=this.__tx(bw);

if(bz){var by=bA.getData(bw);
var bx=bA.toUri(by[4]);

if(bv===d){bu=this.__tB(bu,by,bB.height);
}else{bu=this.__tC(bu,by,bB.width);
}return {src:bx,style:bu};
}else{{};

if(bv==d){bu.height=bB.height==null?null:bB.height+k;
}else if(bv==a){bu.width=bB.width==null?null:bB.width+k;
}var bx=bA.toUri(bw);
return {src:bx,style:bu};
}},__tB:function(bC,bD,bE){var bF=qx.util.ResourceManager.getInstance().getImageHeight(bD[4]);
bC.clip={top:-bD[6],height:bE};
bC.height=bF+k;
if(bC.top!=null){bC.top=(parseInt(bC.top,10)+bD[6])+k;
}else if(bC.bottom!=null){bC.bottom=(parseInt(bC.bottom,10)+bE-bF-bD[6])+k;
}return bC;
},__tC:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageWidth(bH[4]);
bG.clip={left:-bH[5],width:bI};
bG.width=bJ+k;
if(bG.left!=null){bG.left=(parseInt(bG.left,10)+bH[5])+k;
}else if(bG.right!=null){bG.right=(parseInt(bG.right,10)+bI-bJ-bH[5])+k;
}return bG;
},__tD:function(bK,bL,bM){var bR=qx.util.ResourceManager.getInstance().isClippedImage(bM);
var bQ=this.__tx(bM);
if(bR&&bL!==F){var bP=qx.util.ResourceManager.getInstance().getData(bM);
var bO=qx.bom.element.Background.getStyles(bP[4],bL,bP[5],bP[6]);

for(var bN in bO){bK[bN]=bO[bN];
}
if(bQ.width!=null&&bK.width==null&&(bL==A||bL===f)){bK.width=bQ.width+k;
}
if(bQ.height!=null&&bK.height==null&&(bL==t||bL===f)){bK.height=bQ.height+k;
}return {style:bK};
}else{{};
bK=this.__tw(bK,bQ.width,bQ.height);
bK=this.__tE(bK,bM,bL);
return {style:bK};
}},__tE:function(bS,bT,bU){var top=null;
var bY=null;

if(bS.backgroundPosition){var bV=bS.backgroundPosition.split(m);
bY=parseInt(bV[0],10);

if(isNaN(bY)){bY=bV[0];
}top=parseInt(bV[1],10);

if(isNaN(top)){top=bV[1];
}}var bX=qx.bom.element.Background.getStyles(bT,bU,bY,top);

for(var bW in bX){bS[bW]=bX[bW];
}if(bS.filter){bS.filter=g;
}return bS;
},__tF:function(ca){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ca)&&ca.indexOf(G)==-1){if(!this.__ts[ca]){qx.log.Logger.debug("Potential clipped image candidate: "+ca);
this.__ts[ca]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__tt;
},"default":function(){return false;
}})}});
})();
(function(){var c="qx.client",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__pG:{},__pH:{width:null,height:null},__pI:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__pG[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__pG[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__pG[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__pG[k];
return m?m.format:null;
},getSize:function(n){var o=this.__pG[n];
return o?
{width:o.width,height:o.height}:this.__pH;
},getWidth:function(p){var q=this.__pG[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__pG[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__pG[t];

if(!w){w=this.__pG[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__pJ,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__pG[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__pG[z]=null;
},__pJ:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__pG[E];
if(event.type===b){F.loaded=true;
F.width=this.__pK(D);
F.height=this.__pL(D);
var G=this.__pI.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__pK:qx.core.Variant.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__pL:qx.core.Variant.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__pW:[i,null,h,b,null,j,e,null,j],__pX:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__pY:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(r,s,t,top){var u=this.__pY(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__pW;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(g);
},getStyles:function(x,y,z,top){if(!x){return this.__pX;
}var A=this.__pY(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C={backgroundPosition:A,backgroundImage:c+B+f};

if(y!=null){C.backgroundRepeat=y;
}return C;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,k){qx.html.Element.prototype._applyProperty.call(this,name,k);

if(name===j){var o=this.getDomElement();
var l=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){l.backgroundPosition=null;
l.backgroundRepeat=null;
}var m=this._getProperty(j);
var n=this._getProperty(i);
var p=n?i:h;
if(m!=null){qx.bom.element.Decoration.update(o,m,p,l);
}}},_createDomElement:function(){var r=this._getProperty(i);
var s=r?i:h;

if(qx.core.Variant.isSet(g,f)){var q=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s,q));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(t){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(u){this._setProperty(j,u);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(v){this._setProperty(i,v);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="qx.client",e="div",d="replacement",c="qx.event.type.Event",b="hidden",a="__on",y="Boolean",x="px",w="scale",v="changeSource",u="qx.ui.basic.Image",t="loaded",s="-disabled.$1",r="loadingFailed",q="String",p="_applySource",n="img",o="image",l="mshtml",m="_applyScale",k="no-repeat";
qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(z){this.__on={};
qx.ui.core.Widget.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:q,init:null,nullable:true,event:v,apply:p,themeable:true},scale:{check:y,init:false,themeable:true,apply:m},appearance:{refine:true,init:o},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:c,loaded:c},members:{__oo:null,__op:null,__oq:null,__on:null,getContentElement:function(){return this.__ou();
},_createContentElement:function(){return this.__ou();
},_getContentHint:function(){return {width:this.__oo||0,height:this.__op||0};
},_applyEnabled:function(A,B){qx.ui.core.Widget.prototype._applyEnabled.call(this,A,B);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(D){this._styleSource();
},__or:function(E){this.__oq=E;
},__os:function(){if(this.__oq==null){var G=this.getSource();
var F=false;

if(G!=null){F=qx.lang.String.endsWith(G,g);
}
if(this.getScale()&&F&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__oq=h;
}else if(this.getScale()){this.__oq=i;
}else{this.__oq=j;
}}return this.__oq;
},__ot:function(H){var I;
var J;

if(H==h){I=true;
J=e;
}else if(H==j){I=false;
J=e;
}else{I=true;
J=n;
}var K=new qx.html.Image(J);
K.setScale(I);
K.setStyles({"overflowX":b,"overflowY":b});
return K;
},__ou:function(){var L=this.__os();

if(this.__on[L]==null){this.__on[L]=this.__ot(L);
}return this.__on[L];
},_styleSource:function(){var M=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!M){this.getContentElement().resetSource();
return;
}this.__ov(M);

if(qx.core.Variant.isSet(f,l)){var N=this.getScale()?w:k;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(N,M);
}if(qx.util.ResourceManager.getInstance().has(M)){this.__ox(this.getContentElement(),M);
}else if(qx.io.ImageLoader.isLoaded(M)){this.__oy(this.getContentElement(),M);
}else{this.__oz(this.getContentElement(),M);
}},__ov:qx.core.Variant.select(f,{"mshtml":function(O){var Q=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var P=qx.lang.String.endsWith(O,g);

if(Q&&P){if(this.getScale()&&this.__os()!=h){this.__or(h);
}else if(!this.getScale()&&this.__os()!=j){this.__or(j);
}}else{if(this.getScale()&&this.__os()!=i){this.__or(i);
}else if(!this.getScale()&&this.__os()!=j){this.__or(j);
}}this.__ow(this.__ou());
},"default":function(R){if(this.getScale()&&this.__os()!=i){this.__or(i);
}else if(!this.getScale()&&this.__os(j)){this.__or(j);
}this.__ow(this.__ou());
}}),__ow:function(S){var V=this.getContainerElement();
var W=V.getChild(0);

if(W!=S){if(W!=null){var Y=x;
var T={};
var U=this.getInnerSize();

if(U!=null){T.width=U.width+Y;
T.height=U.height+Y;
}var X=this.getInsets();
T.left=X.left+Y;
T.top=X.top+Y;
T.zIndex=10;
S.setStyles(T,true);
S.setSelectable(this.getSelectable());
}V.removeAt(0);
V.addAt(S,0);
}},__ox:function(ba,bb){var bd=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bc=bb.replace(/\.([a-z]+)$/,s);

if(bd.has(bc)){bb=bc;
this.addState(d);
}else{this.removeState(d);
}}if(ba.getSource()===bb){return;
}ba.setSource(bb);
this.__oB(bd.getImageWidth(bb),bd.getImageHeight(bb));
},__oy:function(be,bf){var bh=qx.io.ImageLoader;
be.setSource(bf);
var bg=bh.getWidth(bf);
var bi=bh.getHeight(bf);
this.__oB(bg,bi);
},__oz:function(bj,bk){var self;
var bl=qx.io.ImageLoader;
{};
if(!bl.isFailed(bk)){bl.load(bk,this.__oA,this);
}else{if(bj!=null){bj.resetSource();
}}},__oA:function(bm,bn){if(this.$$disposed===true){return;
}if(bm!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bn.failed){this.warn("Image could not be loaded: "+bm);
this.fireEvent(r);
}else{this.fireEvent(t);
}this._styleSource();
},__oB:function(bo,bp){if(bo!==this.__oo||bp!==this.__op){this.__oo=bo;
this.__op=bp;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(a);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var f="mousedown",d="__uz",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__uz=[];
qx.event.Registration.addListener(document.documentElement,f,this.__uB,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__uz:null,add:function(g){{};
this.__uz.push(g);
this.__uA();
},remove:function(h){{};

if(this.__uz){qx.lang.Array.remove(this.__uz,h);
this.__uA();
}},hideAll:function(){if(this.__uz){for(var i=0;i<this.__uz.length;i++){this.__uz[i].exclude();
}}},__uA:function(){var j=1e7;

for(var i=0;i<this.__uz.length;i++){this.__uz[i].setZIndex(j++);
}},__uB:function(e){var l=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var m=this.__uz;

for(var i=0;i<m.length;i++){var k=m[i];

if(!k.getAutoHide()||l==k||qx.ui.core.Widget.contains(k,l)){continue;
}k.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__uB,this,true);
this._disposeArray(d);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__jP:null,_invalidChildrenCache:null,__jQ:null,invalidateLayoutCache:function(){this.__jP=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__jP){return this.__jP;
}return this.__jP=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__jQ;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__jQ.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__jQ){throw new Error("It is not possible to manually set the connected widget.");
}this.__jQ=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__jQ;
},_applyLayoutChange:function(){if(this.__jQ){this.__jQ.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__jQ.getLayoutChildren();
}},destruct:function(){this.__jQ=this.__jP=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var f,h,e,d;
for(var i=0,l=g.length;i<l;i++){f=g[i];
h=f.getSizeHint();
e=b;

if(e<h.minWidth){e=h.minWidth;
}else if(e>h.maxWidth){e=h.maxWidth;
}d=c;

if(d<h.minHeight){d=h.minHeight;
}else if(d>h.maxHeight){d=h.maxHeight;
}f.renderLayout(0,0,e,d);
}},_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,s;
var r=0,p=0;
var n=0,k=0;
var j=Infinity,m=Infinity;
for(var i=0,l=q.length;i<l;i++){o=q[i];
s=o.getSizeHint();
r=Math.max(r,s.width);
p=Math.max(p,s.height);
n=Math.max(n,s.minWidth);
k=Math.max(k,s.minHeight);
j=Math.min(j,s.maxWidth);
m=Math.min(m,s.maxHeight);
}return {width:r,height:p,minWidth:n,minHeight:k,maxWidth:j,maxHeight:m};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="bottom-left",s="top-left",r="top",q="right",p="_applyRich",n="_applyIcon",o="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(z,A){{};
qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(z!=null){this.setLabel(z);
}
if(A!=null){this.setIcon(A);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:p},icon:{check:f,apply:n,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:o,event:c},iconPosition:{init:e,check:[r,q,b,e,s,t],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(B,C){var D;

switch(B){case j:D=new qx.ui.basic.Label(this.getLabel());
D.setAnonymous(true);
D.setRich(this.getRich());
this._add(D);

if(this.getLabel()==null||this.getShow()===i){D.exclude();
}break;
case i:D=new qx.ui.basic.Image(this.getIcon());
D.setAnonymous(true);
this._addAt(D,0);

if(this.getIcon()==null||this.getShow()===j){D.exclude();
}break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(E,F){var G=this.getChildControl(j,true);

if(G){G.setValue(E);
}this._handleLabel();
},_applyRich:function(H,I){var J=this.getChildControl(j,true);

if(J){J.setRich(H);
}},_applyIcon:function(K,L){var M=this.getChildControl(i,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(P,Q){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(R,S){this._getLayout().setIconPosition(R);
},_applyCenter:function(T,U){this._getLayout().setCenter(T);
}}});
})();
(function(){var m="bottom",l="top",k="_applyLayoutChange",j="top-left",h="bottom-left",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",a="Integer",b="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:k},iconPosition:{check:[g,l,f,m,j,h],init:g,apply:k},center:{check:b,init:false,apply:k}},members:{verifyLayoutProperty:null,renderLayout:function(n,o){var x=qx.ui.layout.Util;
var q=this.getIconPosition();
var t=this._getLayoutChildren();
var length=t.length;
var I,top,H,r;
var C,w;
var A=this.getGap();
var F=this.getCenter();
if(q===m||q===f){var y=length-1;
var u=-1;
var s=-1;
}else{var y=0;
var u=length;
var s=1;
}if(q==l||q==m){if(F){var B=0;

for(var i=y;i!=u;i+=s){r=t[i].getSizeHint().height;

if(r>0){B+=r;

if(i!=y){B+=A;
}}}top=Math.round((o-B)/2);
}else{top=0;
}
for(var i=y;i!=u;i+=s){C=t[i];
w=C.getSizeHint();
H=Math.min(w.maxWidth,Math.max(n,w.minWidth));
r=w.height;
I=x.computeHorizontalAlignOffset(d,H,n);
C.renderLayout(I,top,H,r);
if(r>0){top+=r+A;
}}}else{var v=n;
var p=null;
var E=0;

for(var i=y;i!=u;i+=s){C=t[i];
H=C.getSizeHint().width;

if(H>0){if(!p&&C instanceof qx.ui.basic.Label){p=C;
}else{v-=H;
}E++;
}}
if(E>1){var D=(E-1)*A;
v-=D;
}
if(p){var w=p.getSizeHint();
var z=Math.max(w.minWidth,Math.min(v,w.maxWidth));
v-=z;
}
if(F&&v>0){I=Math.round(v/2);
}else{I=0;
}
for(var i=y;i!=u;i+=s){C=t[i];
w=C.getSizeHint();
r=Math.min(w.maxHeight,Math.max(o,w.minHeight));

if(C===p){H=z;
}else{H=w.width;
}var G=e;

if(q==j){G=l;
}else if(q==h){G=m;
}top=x.computeVerticalAlignOffset(G,w.height,o);
C.renderLayout(I,top,H,r);
if(H>0){I+=H+A;
}}}},_computeSizeHint:function(){var T=this._getLayoutChildren();
var length=T.length;
var L,R;
if(length===1){var L=T[0].getSizeHint();
R={width:L.width,height:L.height,minWidth:L.minWidth,minHeight:L.minHeight};
}else{var P=0,Q=0;
var M=0,O=0;
var N=this.getIconPosition();
var S=this.getGap();

if(N===l||N===m){var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
Q=Math.max(Q,L.width);
P=Math.max(P,L.minWidth);
if(L.height>0){O+=L.height;
M+=L.minHeight;
J++;
}}
if(J>1){var K=(J-1)*S;
O+=K;
M+=K;
}}else{var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
O=Math.max(O,L.height);
M=Math.max(M,L.minHeight);
if(L.width>0){Q+=L.width;
P+=L.minWidth;
J++;
}}
if(J>1){var K=(J-1)*S;
Q+=K;
P+=K;
}}R={minWidth:P,width:Q,minHeight:M,height:O};
}return R;
}}});
})();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(h,j,k){var n,r,m,s;
var o=j>k;
var t=Math.abs(j-k);
var u,p;
var q={};

for(r in h){n=h[r];
q[r]={potential:o?n.max-n.value:n.value-n.min,flex:o?n.flex:1/n.flex,offset:0};
}while(t!=0){s=Infinity;
m=0;

for(r in q){n=q[r];

if(n.potential>0){m+=n.flex;
s=Math.min(s,n.potential/n.flex);
}}if(m==0){break;
}s=Math.min(t,s*m)/m;
u=0;

for(r in q){n=q[r];

if(n.potential>0){p=Math.min(t,n.potential,Math.ceil(s*n.flex));
u+=p-s*n.flex;

if(u>=1){u-=1;
p-=1;
}n.potential-=p;

if(o){n.offset+=p;
}else{n.offset-=p;
}t-=p;
}}}return q;
},computeHorizontalAlignOffset:function(v,w,x,y,z){if(y==null){y=0;
}
if(z==null){z=0;
}var A=0;

switch(v){case e:A=y;
break;
case a:A=x-w-z;
break;
case d:A=Math.round((x-w)/2);
if(A<y){A=y;
}else if(A<z){A=Math.max(y,x-w-z);
}break;
}return A;
},computeVerticalAlignOffset:function(B,C,D,E,F){if(E==null){E=0;
}
if(F==null){F=0;
}var G=0;

switch(B){case c:G=E;
break;
case b:G=D-C-F;
break;
case g:G=Math.round((D-C)/2);
if(G<E){G=E;
}else if(G<F){G=Math.max(E,D-C-F);
}break;
}return G;
},collapseMargins:function(H){var I=0,K=0;

for(var i=0,l=arguments.length;i<l;i++){var J=arguments[i];

if(J<0){K=Math.min(K,J);
}else if(J>0){I=Math.max(I,J);
}}return I+K;
},computeHorizontalGaps:function(L,M,N){if(M==null){M=0;
}var O=0;

if(N){O+=L[0].getMarginLeft();

for(var i=1,l=L.length;i<l;i+=1){O+=this.collapseMargins(M,L[i-1].getMarginRight(),L[i].getMarginLeft());
}O+=L[l-1].getMarginRight();
}else{for(var i=1,l=L.length;i<l;i+=1){O+=L[i].getMarginLeft()+L[i].getMarginRight();
}O+=(M*(l-1));
}return O;
},computeVerticalGaps:function(P,Q,R){if(Q==null){Q=0;
}var S=0;

if(R){S+=P[0].getMarginTop();

for(var i=1,l=P.length;i<l;i+=1){S+=this.collapseMargins(Q,P[i-1].getMarginBottom(),P[i].getMarginTop());
}S+=P[l-1].getMarginBottom();
}else{for(var i=1,l=P.length;i<l;i+=1){S+=P[i].getMarginTop()+P[i].getMarginBottom();
}S+=(Q*(l-1));
}return S;
},computeHorizontalSeparatorGaps:function(T,U,V){var Y=qx.theme.manager.Decoration.getInstance().resolve(V);
var X=Y.getInsets();
var W=X.left+X.right;
var ba=0;

for(var i=0,l=T.length;i<l;i++){var bb=T[i];
ba+=bb.getMarginLeft()+bb.getMarginRight();
}ba+=(U+W+U)*(l-1);
return ba;
},computeVerticalSeparatorGaps:function(bc,bd,be){var bh=qx.theme.manager.Decoration.getInstance().resolve(be);
var bg=bh.getInsets();
var bf=bg.top+bg.bottom;
var bi=0;

for(var i=0,l=bc.length;i<l;i++){var bj=bc[i];
bi+=bj.getMarginTop()+bj.getMarginBottom();
}bi+=(bd+bf+bd)*(l-1);
return bi;
},arrangeIdeals:function(bk,bl,bm,bn,bo,bp){if(bl<bk||bo<bn){if(bl<bk&&bo<bn){bl=bk;
bo=bn;
}else if(bl<bk){bo-=(bk-bl);
bl=bk;
if(bo<bn){bo=bn;
}}else if(bo<bn){bl-=(bn-bo);
bo=bn;
if(bl<bk){bl=bk;
}}}
if(bl>bm||bo>bp){if(bl>bm&&bo>bp){bl=bm;
bo=bp;
}else if(bl>bm){bo+=(bl-bm);
bl=bm;
if(bo>bp){bo=bp;
}}else if(bo>bp){bl+=(bo-bp);
bo=bp;
if(bl>bm){bl=bm;
}}}return {begin:bl,end:bo};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="qx.dynlocale",j="Boolean",i="color",h="changeLocale",g="enabled",f="on",d="_applyTextAlign",c="qx.ui.core.Widget",b="nowrap",a="changeTextAlign",C="_applyWrap",B="A",A="changeContent",z="qx.ui.basic.Label",y="whiteSpace",x="_applyValue",w="center",v="_applyBuddy",u="String",t="textAlign",r="right",s="changeRich",p="normal",q="_applyRich",n="click",o="label",l="left",m="changeValue";
qx.Class.define(z,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(D){qx.ui.core.Widget.call(this);

if(D!=null){this.setValue(D);
}
if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:s,apply:q},wrap:{check:j,init:true,apply:C},value:{check:u,apply:x,event:m,nullable:true},buddy:{check:c,apply:v,nullable:true,init:null,dereference:true},textAlign:{check:[l,w,r],nullable:true,themeable:true,apply:d,event:a},appearance:{refine:true,init:o},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__sn:null,__so:null,__sp:null,__sq:null,_getContentHint:function(){if(this.__so){this.__sr=this.__ss();
delete this.__so;
}return {width:this.__sr.width,height:this.__sr.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(E){if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){if(E&&!this.isRich()){{};
return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,E);
},_getContentHeightForWidth:function(F){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__ss(F).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(G,H){this.getContentElement().setStyle(t,G);
},_applyTextColor:function(I,J){if(I){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(I));
}else{this.getContentElement().removeStyle(i);
}},__sr:{width:0,height:0},_applyFont:function(K,L){var M;

if(K){this.__sn=qx.theme.manager.Font.getInstance().resolve(K);
M=this.__sn.getStyles();
}else{this.__sn=null;
M=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(M);
this.__so=true;
qx.ui.core.queue.Layout.add(this);
},__ss:function(N){var R=qx.bom.Label;
var P=this.getFont();
var O=P?this.__sn.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||B;
var Q=this.getRich();
return Q?R.getHtmlSize(content,O,N):R.getTextSize(content,O);
},_applyBuddy:function(S,T){if(T!=null){T.removeBinding(this.__sp);
this.__sp=null;
this.removeListenerById(this.__sq);
this.__sq=null;
}
if(S!=null){this.__sp=S.bind(g,this,g);
this.__sq=this.addListener(n,function(){if(S.isFocusable()){S.focus.apply(S);
}},this);
}},_applyRich:function(U){this.getContentElement().setRich(U);
this.__so=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(V,W){if(V&&!this.isRich()){{};
}
if(this.isRich()){var X=V?p:b;
this.getContentElement().setStyle(y,X);
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(Y,ba){this.getContentElement().setValue(Y);
this.__so=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(A,Y,ba);
}},destruct:function(){if(qx.core.Variant.isSet(k,f)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}if(this.__sp!=null){var bb=this.getBuddy();

if(bb!=null&&!bb.isDisposed()){bb.removeBinding(this.__sp);
}}this.__sn=this.__sp=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__jw:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__jw;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__jw==h){return;
}this.__jw=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="div",i="inherit",h="text",g="qx.client",f="value",e="",d="hidden",c="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",b="nowrap",a="auto",z="0",y="ellipsis",x="normal",w="label",v="px",u="crop",t="gecko",s="end",r="100%",q="visible",o="qx.bom.Label",p="opera",m="mshtml",n="block",k="-1000px",l="absolute";
qx.Class.define(o,{statics:{__mh:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__mi:function(){var A=this.__mk(false);
document.body.insertBefore(A,document.body.firstChild);
return this._textElement=A;
},__mj:function(){var B=this.__mk(true);
document.body.insertBefore(B,document.body.firstChild);
return this._htmlElement=B;
},__mk:function(C){var D=qx.bom.Element.create(j);
var E=D.style;
E.width=E.height=a;
E.left=E.top=k;
E.visibility=d;
E.position=l;
E.overflow=q;

if(C){E.whiteSpace=x;
}else{E.whiteSpace=b;

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var F=document.createElementNS(c,w);
var E=F.style;
E.padding=z;

for(var G in this.__mh){E[G]=i;
}D.appendChild(F);
}}return D;
},__ml:function(H){var I={};

if(H){I.whiteSpace=x;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){I.display=n;
}else{I.overflow=d;
I.whiteSpace=b;
I.textOverflow=y;
if(qx.core.Variant.isSet(g,p)){I.OTextOverflow=y;
}}return I;
},create:function(content,J,K){if(!K){K=window;
}
if(J){var L=K.document.createElement(j);
L.useHtml=true;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var L=K.document.createElement(j);
var N=K.document.createElementNS(c,w);
var M=N.style;
M.cursor=i;
M.color=i;
M.overflow=d;
M.maxWidth=r;
M.padding=z;
for(var O in this.__mh){N.style[O]=i;
}N.setAttribute(u,s);
L.appendChild(N);
}else{var L=K.document.createElement(j);
qx.bom.element.Style.setStyles(L,this.__ml(J));
}
if(content){this.setValue(L,content);
}return L;
},setValue:function(P,Q){Q=Q||e;

if(P.useHtml){P.innerHTML=Q;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){P.firstChild.setAttribute(f,Q);
}else{qx.bom.element.Attribute.set(P,h,Q);
}},getValue:function(R){if(R.useHtml){return R.innerHTML;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){return R.firstChild.getAttribute(f)||e;
}else{return qx.bom.element.Attribute.get(R,h);
}},getHtmlSize:function(content,S,T){var U=this._htmlElement||this.__mj();
U.style.width=T!==undefined?T+v:a;
U.innerHTML=content;
return this.__mm(U,S);
},getTextSize:function(V,W){var X=this._textElement||this.__mi();

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){X.firstChild.setAttribute(f,V);
}else{qx.bom.element.Attribute.set(X,h,V);
}return this.__mm(X,W);
},__mm:function(Y,ba){var bb=this.__mh;

if(!ba){ba={};
}
for(var bc in bb){Y.style[bc]=ba[bc]||e;
}var bd=qx.bom.element.Dimension.getSize(Y);

if(qx.core.Variant.isSet(g,t)){if(!qx.bom.client.Platform.WIN){bd.width++;
}}if(qx.core.Variant.isSet(g,m)&&qx.bom.client.Engine.VERSION>=9){bd.width++;
}return bd;
}}});
})();
(function(){var i="0px",h="qx.client",g="mshtml",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="opera",b="paddingTop",a="paddingBottom";
qx.Class.define(f,{statics:{getWidth:qx.core.Variant.select(h,{"gecko":function(j){if(j.getBoundingClientRect){var k=j.getBoundingClientRect();
return Math.round(k.right)-Math.round(k.left);
}else{return j.offsetWidth;
}},"default":function(l){return l.offsetWidth;
}}),getHeight:qx.core.Variant.select(h,{"gecko":function(m){if(m.getBoundingClientRect){var n=m.getBoundingClientRect();
return Math.round(n.bottom)-Math.round(n.top);
}else{return m.offsetHeight;
}},"default":function(o){return o.offsetHeight;
}}),getSize:function(p){return {width:this.getWidth(p),height:this.getHeight(p)};
},__pF:{visible:true,hidden:true},getContentWidth:function(q){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(q);
var u=parseInt(s.get(q,d)||i,10);
var x=parseInt(s.get(q,e)||i,10);

if(this.__pF[t]){var w=q.clientWidth;

if(qx.core.Variant.isSet(h,c)){w=w-u-x;
}else{if(qx.dom.Node.isBlockNode(q)){w=w-u-x;
}}return w;
}else{if(q.clientWidth>=q.scrollWidth){return Math.max(q.clientWidth,q.scrollWidth)-u-x;
}else{var v=q.scrollWidth-u;
var r=qx.bom.client.Engine;

if(r.NAME===g&&r.VERSION==6){v-=x;
}return v;
}}},getContentHeight:function(y){var A=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getY(y);
var D=parseInt(A.get(y,b)||i,10);
var B=parseInt(A.get(y,a)||i,10);

if(this.__pF[C]){return y.clientHeight-D-B;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-D-B;
}else{var E=y.scrollHeight-D;
var z=qx.bom.client.Engine;

if(z.NAME===g&&z.VERSION==6){E-=B;
}return E;
}}},getContentSize:function(F){return {width:this.getContentWidth(F),height:this.getContentHeight(F)};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(g){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__tN",b="qx.ui.window.MDesktop",a="__tM";
qx.Mixin.define(b,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__tM:null,__tN:null,getWindowManager:function(){if(!this.__tN){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__tN;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__tN){this.__tN.setDesktop(null);
}j.setDesktop(this);
this.__tN=j;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._addWindow(m);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(f,this._onChangeActive,this);
p.removeListener(h,this._onChangeModal,this);
p.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__tM){this.__tM=[];
}return this.__tM;
}},destruct:function(){this._disposeArray(a);
this._disposeObjects(c);
}});
})();
(function(){var f="__uy",e="_applyBlockerColor",d="Number",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__uy=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:e,themeable:true},blockerOpacity:{check:d,init:1,apply:b,themeable:true}},members:{__uy:null,_applyBlockerColor:function(g,h){this.__uy.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__uy.setOpacity(i);
},block:function(){this.__uy.block();
},isBlocked:function(){return this.__uy.isBlocked();
},unblock:function(){this.__uy.unblock();
},forceUnblock:function(){this.__uy.forceUnblock();
},blockContent:function(k){this.__uy.blockContent(k);
},isContentBlocked:function(){return this.__uy.isContentBlocked();
},unblockContent:function(){this.__uy.unblockContent();
},forceUnblockContent:function(){this.__uy.forceUnblockContent();
},getBlocker:function(){return this.__uy;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__ux:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(q,r){},"default":function(s,t){var u=qx.bom.Stylesheet;
var v=this.__ux;

if(!v){this.__ux=v=u.createElement();
}u.removeAllRules(v);

if(s){u.addRule(v,a,qx.bom.element.Cursor.compile(s).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(w,x){if(w){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(y,z){if(z===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(y===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__ux=null;
},defer:function(A,B){qx.ui.core.MChildrenHandling.remap(B);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(o){this.__uf=qx.dom.Node.getWindow(o);
this.__ug=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__uf,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__uf:null,__ug:null,_createContainerElement:function(){var p=this.__ug;
if(qx.core.Variant.isSet(f,k)){if(!p.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var t=p.documentElement.style;
var q=p.body.style;
t.overflow=q.overflow=g;
t.padding=t.margin=q.padding=q.margin=l;
t.width=t.height=q.width=q.height=c;
var s=p.createElement(d);
p.body.appendChild(s);
var r=new qx.html.Root(s);
r.setStyle(m,b);
r.setAttribute(i,this.toHashCode());
return r;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__uf);
var v=qx.bom.Viewport.getHeight(this.__uf);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__uf=this.__ug=null;
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="__uk",w="__uo",v="opacity",u="interval",t="Tab",s="Color",r="qx.ui.root.Page",q="__um",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(r)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__up,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__uh=[];
this.__ui=[];
this.__uj=[];
},properties:{color:{check:s,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__uk:null,__ul:0,__um:null,__uj:null,__uh:null,__ui:null,__un:null,__uo:null,_isPageRoot:false,_widget:null,__up:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__uq(c,C);
},_applyOpacity:function(D,E){this.__uq(v,D);
},__uq:function(F,G){var H=[];
this.__uk&&H.push(this.__uk);
this.__um&&H.push(this.__um);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__uh.push(I.getActive());
this.__ui.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__uh.length;

if(L>0){var K=this.__uh[L-1];

if(K){qx.bom.Element.activate(K);
}this.__uh.pop();
}var J=this.__ui.length;

if(J>0){var K=this.__ui[J-1];

if(K){qx.bom.Element.focus(this.__ui[J-1]);
}this.__ui.pop();
}},__ur:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__uk){this.__uk=this.__ur();
this.__uk.setStyle(l,15);
this._widget.getContainerElement().add(this.__uk);
this.__uk.exclude();
}return this.__uk;
},block:function(){this.__ul++;

if(this.__ul<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__uw,this);
M.addListener(d,this.__uv,this);
M.addListener(j,this.__uv,this);
M.addListener(f,this.__uv,this);
}},isBlocked:function(){return this.__ul>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__ul--;

if(this.__ul<1){this.__us();
this.__ul=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__ul=0;
this.__us();
},__us:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__uw,this);
N.removeListener(d,this.__uv,this);
N.removeListener(j,this.__uv,this);
N.removeListener(f,this.__uv,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__um){this.__um=this.__ur();
this._widget.getContentElement().add(this.__um);
this.__um.exclude();
}return this.__um;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__uj.push(O);

if(this.__uj.length<2){P.include();

if(this._isPageRoot){if(!this.__uo){this.__uo=new qx.event.Timer(300);
this.__uo.addListener(u,this.__uu,this);
}this.__uo.start();
this.__uu();
}}},isContentBlocked:function(){return this.__uj.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__uj.pop();
var Q=this.__uj[this.__uj.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__uj.length<1){this.__ut();
this.__uj=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__uj=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__ut();
},__ut:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__uo.stop();
}},__uu:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__uv:function(e){if(e.getKeyIdentifier()==t){e.stop();
}},__uw:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__up,this);
}this._disposeObjects(q,x,w);
this.__un=this.__uh=this.__ui=this._widget=this.__uj=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if(qx.core.Variant.isSet(c,q)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,b,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__tO,this);
this.addListener(n,this.__tO,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__tO:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var k="keypress",j="focusout",h="activate",g="Tab",f="singleton",d="deactivate",c="__tP",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);
this.__tP={};
},members:{__tP:null,__tQ:null,__tR:null,__tS:null,connectTo:function(m){m.addListener(k,this.__tT,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(j,this._onFocusOut,this,true);
m.addListener(h,this._onActivate,this,true);
m.addListener(d,this._onDeactivate,this,true);
},addRoot:function(n){this.__tP[n.$$hash]=n;
},removeRoot:function(o){delete this.__tP[o.$$hash];
},getActiveWidget:function(){return this.__tQ;
},isActive:function(p){return this.__tQ==p;
},getFocusedWidget:function(){return this.__tR;
},isFocused:function(q){return this.__tR==q;
},isFocusRoot:function(r){return !!this.__tP[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__tQ=t;
var s=this.__tU(t);

if(s!=this.__tS){this.__tS=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__tQ==u){this.__tQ=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__tR){this.__tR=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__tR){this.__tR=null;
w.visualizeBlur();
}},__tT:function(e){if(e.getKeyIdentifier()!=g){return;
}
if(!this.__tS){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__tR;

if(!e.isShiftPressed()){var y=x?this.__tY(x):this.__tW();
}else{var y=x?this.__ua(x):this.__tX();
}if(y){y.tabFocus();
}},__tU:function(z){var A=this.__tP;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__tV:function(B,C){if(B===C){return 0;
}var E=B.getTabIndex()||0;
var D=C.getTabIndex()||0;

if(E!=D){return E-D;
}var J=B.getContainerElement().getDomElement();
var I=C.getContainerElement().getDomElement();
var H=qx.bom.element.Location;
var G=H.get(J);
var F=H.get(I);
if(G.top!=F.top){return G.top-F.top;
}if(G.left!=F.left){return G.left-F.left;
}var K=B.getZIndex();
var L=C.getZIndex();

if(K!=L){return K-L;
}return 0;
},__tW:function(){return this.__ud(this.__tS,null);
},__tX:function(){return this.__ue(this.__tS,null);
},__tY:function(M){var N=this.__tS;

if(N==M){return this.__tW();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__ub(N,M,O);
O.sort(this.__tV);
var P=O.length;
return P>0?O[0]:this.__tW();
},__ua:function(Q){var R=this.__tS;

if(R==Q){return this.__tX();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__uc(R,Q,S);
S.sort(this.__tV);
var T=S.length;
return T>0?S[T-1]:this.__tX();
},__ub:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__tV(U,X)<0){V.push(X);
}this.__ub(X,U,V);
}}},__uc:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__tV(Y,bc)>0){ba.push(bc);
}this.__uc(bc,Y,ba);
}}},__ud:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__tV(bf,bd)<0){bd=bf;
}}bd=this.__ud(bf,bd);
}}return bd;
},__ue:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__tV(bi,bg)>0){bg=bi;
}}bg=this.__ue(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(c);
this.__tR=this.__tQ=this.__tS=null;
}});
})();
(function(){var l="qx.client",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(m,n){if(!n){n=document;
}var o=n.createElement(b);
o.type=j;
o.rel=h;
o.href=qx.util.ResourceManager.getInstance().toUri(m);
var p=n.getElementsByTagName(k)[0];
p.appendChild(o);
},createElement:qx.core.Variant.select(l,{"mshtml":function(q){var r=document.createStyleSheet();

if(q){r.cssText=q;
}return r;
},"default":function(s){var t=document.createElement(a);
t.type=j;

if(s){t.appendChild(document.createTextNode(s));
}document.getElementsByTagName(k)[0].appendChild(t);
return t.sheet;
}}),addRule:qx.core.Variant.select(l,{"mshtml":function(u,v,w){u.addRule(v,w);
},"default":function(x,y,z){x.insertRule(y+e+z+g,x.cssRules.length);
}}),removeRule:qx.core.Variant.select(l,{"mshtml":function(A,B){var C=A.rules;
var D=C.length;

for(var i=D-1;i>=0;--i){if(C[i].selectorText==B){A.removeRule(i);
}}},"default":function(E,F){var G=E.cssRules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(l,{"mshtml":function(I){var J=I.rules;
var K=J.length;

for(var i=K-1;i>=0;i--){I.removeRule(i);
}},"default":function(L){var M=L.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.deleteRule(i);
}}}),addImport:qx.core.Variant.select(l,{"mshtml":function(O,P){O.addImport(P);
},"default":function(Q,R){Q.insertRule(f+R+d,Q.cssRules.length);
}}),removeImport:qx.core.Variant.select(l,{"mshtml":function(S,T){var U=S.imports;
var V=U.length;

for(var i=V-1;i>=0;i--){if(U[i].href==T){S.removeImport(i);
}}},"default":function(W,X){var Y=W.cssRules;
var ba=Y.length;

for(var i=ba-1;i>=0;i--){if(Y[i].href==X){W.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(l,{"mshtml":function(bb){var bc=bb.imports;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){bb.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(c,d){var q=this._getLayoutChildren();
var g,p,n;
var s,top,e,f,j,h;
var o,m,r,k;

for(var i=0,l=q.length;i<l;i++){g=q[i];
p=g.getSizeHint();
n=g.getLayoutProperties();
o=g.getMarginTop();
m=g.getMarginRight();
r=g.getMarginBottom();
k=g.getMarginLeft();
s=n.left!=null?n.left:n.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*c/100);
}e=n.right!=null?n.right:n.edge;

if(qx.lang.Type.isString(e)){e=Math.round(parseFloat(e)*c/100);
}top=n.top!=null?n.top:n.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*d/100);
}f=n.bottom!=null?n.bottom:n.edge;

if(qx.lang.Type.isString(f)){f=Math.round(parseFloat(f)*d/100);
}if(s!=null&&e!=null){j=c-s-e-k-m;
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}s+=k;
}else{j=n.width;

if(j==null){j=p.width;
}else{j=Math.round(parseFloat(j)*c/100);
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}}
if(e!=null){s=c-j-e-m-k;
}else if(s==null){s=k;
}else{s+=k;
}}if(top!=null&&f!=null){h=d-top-f-o-r;
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}top+=o;
}else{h=n.height;

if(h==null){h=p.height;
}else{h=Math.round(parseFloat(h)*d/100);
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}}
if(f!=null){top=d-h-f-r-o;
}else if(top==null){top=o;
}else{top+=o;
}}g.renderLayout(s,top,j,h);
}},_computeSizeHint:function(){var I=0,H=0;
var F=0,D=0;
var B,A;
var z,x;
var t=this._getLayoutChildren();
var w,G,v;
var J,top,u,y;

for(var i=0,l=t.length;i<l;i++){w=t[i];
G=w.getLayoutProperties();
v=w.getSizeHint();
var E=w.getMarginLeft()+w.getMarginRight();
var C=w.getMarginTop()+w.getMarginBottom();
B=v.width+E;
A=v.minWidth+E;
J=G.left!=null?G.left:G.edge;

if(J&&typeof J===b){B+=J;
A+=J;
}u=G.right!=null?G.right:G.edge;

if(u&&typeof u===b){B+=u;
A+=u;
}I=Math.max(I,B);
H=Math.max(H,A);
z=v.height+C;
x=v.minHeight+C;
top=G.top!=null?G.top:G.edge;

if(top&&typeof top===b){z+=top;
x+=top;
}y=G.bottom!=null?G.bottom:G.edge;

if(y&&typeof y===b){z+=y;
x+=y;
}F=Math.max(F,z);
D=Math.max(D,x);
}return {width:I,minWidth:H,height:F,minHeight:D};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__rf:null,__rg:null,__rh:null,__ri:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__rj:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__rf&&this.__rf.length!=length&&this.__rg&&this.__rf;
var u;
var t=r?this.__rf:new Array(length);
var v=r?this.__rg:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__rf=t;
this.__rg=v;
}this.__rh=s;
this.__ri=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__rj();
}var F=this.__ri;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__rf[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__rh&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__rg[i];

if(N>0){G=F[i].getSizeHint();
H[i]={min:G.minHeight,value:K[i],max:G.maxHeight,flex:N};
}}var D=P.computeFlexOffsets(H,y,Q);

for(i in D){R=D[i].offset;
K[i]+=R;
Q+=R;
}}var top=F[0].getMarginTop();
if(Q<y&&this.getAlignY()!=m){top=y-Q;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var G,U,L,B,I,M,E;
this._clearSeparators();
if(S){var T=qx.theme.manager.Decoration.getInstance().resolve(S).getInsets();
var z=T.top+T.bottom;
}for(i=0;i<length;i+=1){A=F[i];
B=K[i];
G=A.getSizeHint();
M=A.getMarginLeft();
E=A.getMarginRight();
L=Math.max(G.minWidth,Math.min(x-M-E,G.maxWidth));
U=P.computeHorizontalAlignOffset(A.getAlignX()||this.getAlignX(),L,x,M,E);
if(i>0){if(S){top+=I+O;
this._renderSeparator(S,{top:top,left:0,height:z,width:x});
top+=z+O+A.getMarginTop();
}else{top+=P.collapseMargins(O,I,A.getMarginTop());
}}A.renderLayout(U,top,L,B);
top+=B;
I=A.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__rj();
}var bc=qx.ui.layout.Util;
var bk=this.__ri;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__rg[i];
var Y=this.__rf[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__rf=this.__rg=this.__ri=null;
}});
})();
(function(){var w="visible",v="excluded",u="resize",t="qx.event.type.Data",s="both",r="qx.ui.menu.Menu",q="_applySpacing",p="showItem",o="Boolean",n="icon",d="label",m="qx.ui.core.Widget",h="_applyOverflowIndicator",c="_applyOverflowHandling",b="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",j="hideItem",a="toolbar",k="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__ig=[];
this.__ih=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__ig:null,__ih:null,_computeSizeHint:function(){var z=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

if(true&&this.getOverflowHandling()){var x=0;
var y=this.getOverflowIndicator();

if(y){x=y.getSizeHint().width+this.getSpacing();
}z.minWidth=x;
}return z;
},_onResize:function(e){this._recalculateOverflow(e.getData().width);
},_recalculateOverflow:function(A){if(!this.getOverflowHandling()){return;
}var C=this.getSizeHint().width;
var B=this.getOverflowIndicator();
var F=0;

if(B){F=B.getSizeHint().width;
}if(A<C){do{var G=this._getNextToHide();
if(!G){return;
}var H=G.getMarginLeft()+G.getMarginRight();
var E=G.getSizeHint().width+H;
this.__ij(G);
C-=E;
if(B&&B.getVisibility()!=w){B.setVisibility(w);
C+=F;
}}while(C>A);
}else{do{var I=this.__ig[0];
if(I){var H=I.getMarginLeft()+I.getMarginRight();
var D=I.getSizeHint().width+H;
if(A>C+D+this.getSpacing()||(this.__ig.length==1&&A>C+D-F+this.getSpacing())){this.__ii(I);
A+=D;
if(B&&this.__ig.length==0){B.setVisibility(v);
}}else{return;
}}}while(A>=C&&this.__ig.length>0);
}},__ii:function(J){J.setVisibility(w);
this.__ig.shift();
this.fireDataEvent(p,J);
},__ij:function(K){if(!K){return;
}this.__ig.unshift(K);
K.setVisibility(v);
this.fireDataEvent(j,K);
},_getNextToHide:function(){for(var i=this.__ih.length-1;i>=0;i--){var L=this.__ih[i];
if(L&&L.getVisibility&&L.getVisibility()==w){return L;
}}var M=this._getChildren();

for(var i=M.length-1;i>=0;i--){var N=M[i];
if(N==this.getOverflowIndicator()){continue;
}if(N.getVisibility&&N.getVisibility()==w){return N;
}}},setRemovePriority:function(O,P,Q){if(!Q&&this.__ih[P]!=undefined){throw new Error("Priority already in use!");
}this.__ih[P]=O;
},_applyOverflowHandling:function(R,S){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var U=this.getBounds();

if(U&&U.width){this._recalculateOverflow(U.width);
}if(R){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var T=this.getOverflowIndicator();

if(T){T.setVisibility(v);
}for(var i=0;i<this.__ig.length;i++){this.__ig[i].setVisibility(w);
}this.__ig=[];
}},_applyOverflowIndicator:function(V,W){if(W){this._remove(W);
}
if(V){if(this._indexOf(V)==-1){throw new Error("Widget must be child of the toolbar.");
}V.setVisibility(v);
}},__ik:false,_setAllowMenuOpenHover:function(X){this.__ik=X;
},_isAllowMenuOpenHover:function(){return this.__ik;
},_applySpacing:function(Y,ba){var bb=this._getLayout();
Y==null?bb.resetSpacing():bb.setSpacing(Y);
},addSpacer:function(){var bc=new qx.ui.core.Spacer;
this._add(bc,{flex:1});
return bc;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var be=this.getChildren();
var bd=[];
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];

if(bf instanceof qx.ui.menubar.Button){bd.push(bf);
}else if(bf instanceof qx.ui.toolbar.Part){bd.push.apply(bd,bf.getMenuButtons());
}}return bd;
}},destruct:function(){if(this.hasListener(u)){this.removeListener(u,this._onResize,this);
}}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__tH:null,__tI:null,__tJ:null,__tK:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__tL:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__tH&&this.__tH.length!=length&&this.__tI&&this.__tH;
var u;
var s=r?this.__tH:new Array(length);
var v=r?this.__tI:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__tH=s;
this.__tI=v;
}this.__tJ=t;
this.__tK=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__tL();
}var E=this.__tK;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__tH[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__tJ&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__tI[i];

if(L>0){G=E[i].getSizeHint();
H[i]={min:G.minWidth,value:P[i],max:G.maxWidth,flex:L};
}}var C=N.computeFlexOffsets(H,x,F);

for(i in C){O=C[i].offset;
P[i]+=O;
F+=O;
}}var U=E[0].getMarginLeft();
if(F<x&&this.getAlignX()!=m){U=x-F;

if(this.getAlignX()===k){U=Math.round(U/2);
}}var G,top,A,K,D,S,I;
var M=this.getSpacing();
this._clearSeparators();
if(Q){var R=qx.theme.manager.Decoration.getInstance().resolve(Q).getInsets();
var T=R.left+R.right;
}for(i=0;i<length;i+=1){z=E[i];
K=P[i];
G=z.getSizeHint();
S=z.getMarginTop();
I=z.getMarginBottom();
A=Math.max(G.minHeight,Math.min(y-S-I,G.maxHeight));
top=N.computeVerticalAlignOffset(z.getAlignY()||this.getAlignY(),A,y,S,I);
if(i>0){if(Q){U+=D+M;
this._renderSeparator(Q,{left:U,top:0,width:T,height:y});
U+=T+M+z.getMarginLeft();
}else{U+=N.collapseMargins(M,D,z.getMarginLeft());
}}z.renderLayout(U,top,K,A);
U+=K;
D=z.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__tL();
}var bc=qx.ui.layout.Util;
var bk=this.__tK;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__tI[i];
var X=this.__tH[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__tH=this.__tI=this.__tK=null;
}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){qx.ui.core.LayoutItem.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__lm:null,__ln:false,__lo:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__ln){this.__ln=false;
}else{this.__ln=true;
o.execute(this);
}}this.fireEvent(n);
},__lp:function(e){if(this.__ln){this.__ln=false;
return;
}this.__ln=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__lo);
}
if(p!=null){this.__lo=p.addListener(n,this.__lp,this);
}var t=this.__lm;

if(t==null){this.__lm=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__lm=null;
}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){qx.ui.basic.Atom.call(this,p,q);

if(r!=null){this.setCommand(r);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(o);
var t=this.hasState(n);

if(s){this.removeState(o);
}
if(t){this.removeState(n);
}else{this.addState(m);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(m,n,o){qx.ui.form.Button.call(this,m,n);
if(o!=null){this.setMenu(o);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(p,q){if(q){q.removeListener(j,this._onMenuChange,this);
q.resetOpener();
}
if(p){p.addListener(j,this._onMenuChange,this);
p.setOpener(this);
p.removeState(h);
p.removeState(f);
}},open:function(r){var s=this.getMenu();

if(s){qx.ui.menu.Manager.getInstance().hideAll();
s.setOpener(this);
s.open();
if(r){var t=s.getSelectables()[0];

if(t){s.setSelectedButton(t);
}}}},_onMenuChange:function(e){var u=this.getMenu();

if(u.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
var v=this.getMenu();

if(v){if(!v.isVisible()){this.open();
}else{v.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var w=this.getMenu();

if(w){if(!w.isVisible()){this.open();
}else{w.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){qx.ui.form.MenuButton.call(this,i,j,k);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){qx.ui.form.MenuButton.prototype.open.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var m=this.getMenu();
var menubar=this.getMenuBar();

if(m.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(m);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==m){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var n=this.getMenu();

if(n&&n.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var t="keypress",s="interval",r="keydown",q="mousedown",p="keyup",o="__ia",n="blur",m="Enter",l="Up",k="__hY",c="Escape",j="qx.ui.menu.Manager",g="Left",b="__ib",a="Down",f="Right",d="singleton",h="Space";
qx.Class.define(j,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hY=[];
var u=document.body;
var v=qx.event.Registration;
v.addListener(window.document.documentElement,q,this._onMouseDown,this,true);
v.addListener(u,r,this._onKeyUpDown,this,true);
v.addListener(u,p,this._onKeyUpDown,this,true);
v.addListener(u,t,this._onKeyPress,this,true);
if(!qx.bom.client.Feature.TOUCH){qx.bom.Element.addListener(window,n,this.hideAll,this);
}this.__ia=new qx.event.Timer;
this.__ia.addListener(s,this._onOpenInterval,this);
this.__ib=new qx.event.Timer;
this.__ib.addListener(s,this._onCloseInterval,this);
},members:{__ic:null,__id:null,__ia:null,__ib:null,__hY:null,_getChild:function(w,x,y,z){var A=w.getChildren();
var length=A.length;
var B;

for(var i=x;i<length&&i>=0;i+=y){B=A[i];

if(B.isEnabled()&&!B.isAnonymous()){return B;
}}
if(z){i=i==length?0:length-1;

for(;i!=x;i+=y){B=A[i];

if(B.isEnabled()&&!B.isAnonymous()){return B;
}}}return null;
},_isInMenu:function(C){while(C){if(C instanceof qx.ui.menu.Menu){return true;
}C=C.getLayoutParent();
}return false;
},_getMenuButton:function(D){while(D){if(D instanceof qx.ui.menu.AbstractButton){return D;
}D=D.getLayoutParent();
}return null;
},add:function(E){{};
var F=this.__hY;
F.push(E);
E.setZIndex(1e6+F.length);
},remove:function(G){{};
var H=this.__hY;

if(H){qx.lang.Array.remove(H,G);
}},hideAll:function(){var I=this.__hY;

if(I){for(var i=I.length-1;i>=0;i--){I[i].exclude();
}}},getActiveMenu:function(){var J=this.__hY;
return J.length>0?J[J.length-1]:null;
},scheduleOpen:function(K){this.cancelClose(K);
if(K.isVisible()){if(this.__ic){this.cancelOpen(this.__ic);
}}else if(this.__ic!=K){this.__ic=K;
this.__ia.restartWith(K.getOpenInterval());
}},scheduleClose:function(L){this.cancelOpen(L);
if(!L.isVisible()){if(this.__id){this.cancelClose(this.__id);
}}else if(this.__id!=L){this.__id=L;
this.__ib.restartWith(L.getCloseInterval());
}},cancelOpen:function(M){if(this.__ic==M){this.__ia.stop();
this.__ic=null;
}},cancelClose:function(N){if(this.__id==N){this.__ib.stop();
this.__id=null;
}},_onOpenInterval:function(e){this.__ia.stop();
this.__ic.open();
this.__ic=null;
},_onCloseInterval:function(e){this.__ib.stop();
this.__id.exclude();
this.__id=null;
},_onMouseDown:function(e){var O=e.getTarget();
O=qx.ui.core.Widget.getWidgetByElement(O,true);
if(O==null){this.hideAll();
return;
}if(O.getMenu&&O.getMenu()&&O.getMenu().isVisible()){return;
}if(this.__hY.length>0&&!this._isInMenu(O)){this.hideAll();
}},__ie:{"Enter":1,"Space":1},__if:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var P=this.getActiveMenu();

if(!P){return;
}var Q=e.getKeyIdentifier();

if(this.__if[Q]||(this.__ie[Q]&&P.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var R=this.getActiveMenu();

if(!R){return;
}var S=e.getKeyIdentifier();
var U=this.__if[S];
var T=this.__ie[S];

if(U){switch(S){case l:this._onKeyPressUp(R);
break;
case a:this._onKeyPressDown(R);
break;
case g:this._onKeyPressLeft(R);
break;
case f:this._onKeyPressRight(R);
break;
case c:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(T){var V=R.getSelectedButton();

if(V){switch(S){case m:this._onKeyPressEnter(R,V,e);
break;
case h:this._onKeyPressSpace(R,V,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(W){var X=W.getSelectedButton();
var Y=W.getChildren();
var bb=X?W.indexOf(X)-1:Y.length-1;
var ba=this._getChild(W,bb,-1,true);
if(ba){W.setSelectedButton(ba);
}else{W.resetSelectedButton();
}},_onKeyPressDown:function(bc){var bd=bc.getSelectedButton();
var bf=bd?bc.indexOf(bd)+1:0;
var be=this._getChild(bc,bf,1,true);
if(be){bc.setSelectedButton(be);
}else{bc.resetSelectedButton();
}},_onKeyPressLeft:function(bg){var bl=bg.getOpener();

if(!bl){return;
}if(bl instanceof qx.ui.menu.AbstractButton){var bi=bl.getLayoutParent();
bi.resetOpenedButton();
bi.setSelectedButton(bl);
}else if(bl instanceof qx.ui.menubar.Button){var bk=bl.getMenuBar().getMenuButtons();
var bh=bk.indexOf(bl);
if(bh===-1){return;
}var bm=null;
var length=bk.length;

for(var i=1;i<=length;i++){var bj=bk[(bh-i+length)%length];

if(bj.isEnabled()){bm=bj;
break;
}}
if(bm&&bm!=bl){bm.open(true);
}}},_onKeyPressRight:function(bn){var bp=bn.getSelectedButton();
if(bp){var bo=bp.getMenu();

if(bo){bn.setOpenedButton(bp);
var bv=this._getChild(bo,0,1);

if(bv){bo.setSelectedButton(bv);
}return;
}}else if(!bn.getOpenedButton()){var bv=this._getChild(bn,0,1);

if(bv){bn.setSelectedButton(bv);

if(bv.getMenu()){bn.setOpenedButton(bv);
}return;
}}var bt=bn.getOpener();
if(bt instanceof qx.ui.menu.Button&&bp){while(bt){bt=bt.getLayoutParent();

if(bt instanceof qx.ui.menu.Menu){bt=bt.getOpener();

if(bt instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bt){return;
}}if(bt instanceof qx.ui.menubar.Button){var bs=bt.getMenuBar().getMenuButtons();
var bq=bs.indexOf(bt);
if(bq===-1){return;
}var bu=null;
var length=bs.length;

for(var i=1;i<=length;i++){var br=bs[(bq+i)%length];

if(br.isEnabled()){bu=br;
break;
}}
if(bu&&bu!=bt){bu.open(true);
}}},_onKeyPressEnter:function(bw,bx,e){if(bx.hasListener(t)){var by=e.clone();
by.setBubbles(false);
by.setTarget(bx);
bx.dispatchEvent(by);
}this.hideAll();
},_onKeyPressSpace:function(bz,bA,e){if(bA.hasListener(t)){var bB=e.clone();
bB.setBubbles(false);
bB.setTarget(bA);
bA.dispatchEvent(bB);
}}},destruct:function(){var bD=qx.event.Registration;
var bC=document.body;
bD.removeListener(window.document.documentElement,q,this._onMouseDown,this,true);
bD.removeListener(bC,r,this._onKeyUpDown,this,true);
bD.removeListener(bC,p,this._onKeyUpDown,this,true);
bD.removeListener(bC,t,this._onKeyPress,this,true);
this._disposeObjects(o,b);
this._disposeArray(k);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__ld:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__ld(c);
},hasChildren:function(){return this.__ld(f);
},add:function(r,s){return this.__ld(j,r,s);
},remove:function(t){return this.__ld(a,t);
},removeAll:function(){return this.__ld(d);
},indexOf:function(u){return this.__ld(l,u);
},addAt:function(v,w,x){this.__ld(g,v,w,x);
},addBefore:function(y,z,A){this.__ld(i,y,z,A);
},addAfter:function(B,C,D){this.__ld(k,B,C,D);
},removeAt:function(E){this.__ld(e,E);
}}});
})();
(function(){var l="slidebar",k="Integer",j="resize",h="qx.ui.core.Widget",g="selected",f="visible",d="Boolean",c="mouseout",b="excluded",a="menu",A="_applySelectedButton",z="_applySpacingY",y="_blocker",x="_applyCloseInterval",w="_applyBlockerColor",v="_applyIconColumnWidth",u="mouseover",t="_applyArrowColumnWidth",s="qx.ui.menu.Menu",r="Color",p="Number",q="_applyOpenInterval",n="_applySpacingX",o="_applyBlockerOpacity",m="_applyOpenedButton";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(u,this._onMouseOver);
this.addListener(c,this._onMouseOut);
this.addListener(j,this._onResize,this);
B.addListener(j,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:a},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:b},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:k,apply:n,init:0,themeable:true},spacingY:{check:k,apply:z,init:0,themeable:true},iconColumnWidth:{check:k,init:0,themeable:true,apply:v},arrowColumnWidth:{check:k,init:0,themeable:true,apply:t},blockerColor:{check:r,init:null,nullable:true,apply:w,themeable:true},blockerOpacity:{check:p,init:1,apply:o,themeable:true},selectedButton:{check:h,nullable:true,apply:A},openedButton:{check:h,nullable:true,apply:m},opener:{check:h,nullable:true},openInterval:{check:k,themeable:true,init:250,apply:q},closeInterval:{check:k,themeable:true,init:250,apply:x},blockBackground:{check:d,themeable:true,init:false}},members:{__im:null,__in:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__ip();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__ip();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(C){this.placeToPoint(C);
this.__ip();
this.show();
this._placementTarget=C;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var D=[];
var E=this.getChildren();

for(var i=0;i<E.length;i++){if(E[i].isEnabled()){D.push(E[i]);
}}return D;
},_applyIconColumnWidth:function(F,G){this._getMenuLayout().setIconColumnWidth(F);
},_applyArrowColumnWidth:function(H,I){this._getMenuLayout().setArrowColumnWidth(H);
},_applySpacingX:function(J,K){this._getMenuLayout().setColumnSpacing(J);
},_applySpacingY:function(L,M){this._getMenuLayout().setSpacing(L);
},_applyVisibility:function(N,O){qx.ui.core.Widget.prototype._applyVisibility.call(this,N,O);
var P=qx.ui.menu.Manager.getInstance();

if(N===f){P.add(this);
var Q=this.getParentMenu();

if(Q){Q.setOpenedButton(this.getOpener());
}}else if(O===f){P.remove(this);
var Q=this.getParentMenu();

if(Q&&Q.getOpenedButton()==this.getOpener()){Q.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__io();
},__io:function(){if(this.isVisible()){if(this.getBlockBackground()){var R=this.getZIndex();
this._blocker.blockContent(R-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var S=this.getOpener();

if(!S||!(S instanceof qx.ui.menu.AbstractButton)){return null;
}
while(S&&!(S instanceof qx.ui.menu.Menu)){S=S.getLayoutParent();
}return S;
},_applySelectedButton:function(T,U){if(U){U.removeState(g);
}
if(T){T.addState(g);
}},_applyOpenedButton:function(V,W){if(W){W.getMenu().exclude();
}
if(V){V.getMenu().open();
}},_applyBlockerColor:function(X,Y){this._blocker.setColor(X);
},_applyBlockerOpacity:function(ba,bb){this._blocker.setOpacity(ba);
},getChildrenContainer:function(){return this.getChildControl(l,true)||this;
},_createChildControlImpl:function(bc,bd){var be;

switch(bc){case l:var be=new qx.ui.menu.MenuSlideBar();
var bg=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bf=be.getLayout();
be.setLayout(bg);
bf.dispose();
var bh=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bh.length;i++){be.add(bh[i]);
}this.removeListener(j,this._onResize,this);
be.getChildrenContainer().addListener(j,this._onResize,this);
this._add(be);
break;
}return be||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bc);
},_getMenuLayout:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__ip:function(){var bj=this._getMenuBounds();

if(!bj){this.addListenerOnce(j,this.__ip,this);
return;
}var bi=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var bk=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(bj.height+top);
this.moveTo(bk,0);
});
}else if(top+bj.height>bi){this._assertSlideBar(function(){this.setHeight(bi-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bl){if(this.hasChildControl(l)){return bl.call(this);
}this.__in=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(l);

if(this.__in){this.__in.call(this);
delete this.__in;
}},_onResize:function(){if(this.isVisible()){var bm=this._placementTarget;

if(!bm){return;
}else if(bm instanceof qx.ui.core.Widget){this.placeToWidget(bm);
}else if(bm.top!==undefined){this.placeToPoint(bm);
}else{throw new Error("Unknown target: "+bm);
}this.__ip();
}},_onMouseOver:function(e){var bo=qx.ui.menu.Manager.getInstance();
bo.cancelClose(this);
var bp=e.getTarget();

if(bp.isEnabled()&&bp instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bp);
var bn=bp.getMenu&&bp.getMenu();

if(bn){bn.setOpener(bp);
bo.scheduleOpen(bn);
this.__im=bn;
}else{var bq=this.getOpenedButton();

if(bq){bo.scheduleClose(bq.getMenu());
}
if(this.__im){bo.cancelOpen(this.__im);
this.__im=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var br=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bs=this.getOpenedButton();
bs?this.setSelectedButton(bs):this.resetSelectedButton();
if(bs){br.cancelClose(bs.getMenu());
}if(this.__im){br.cancelOpen(this.__im);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(j,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(y);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__il:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__il=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__il||null;
}},destruct:function(){this.__il=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true,dereference:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(u,v){var w;

switch(u){case t:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:0});
break;
case s:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:1});
break;
case q:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:2});
break;
case r:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:3});
break;
}return w||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,u);
},_forwardStates:{selected:1},getChildrenSizes:function(){var x=0,y=0,z=0,D=0;

if(this._isChildControlVisible(t)){var E=this.getChildControl(t);
x=E.getMarginLeft()+E.getSizeHint().width+E.getMarginRight();
}
if(this._isChildControlVisible(s)){var B=this.getChildControl(s);
y=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}
if(this._isChildControlVisible(q)){var A=this.getChildControl(q);
z=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}
if(this._isChildControlVisible(r)){var C=this.getChildControl(r);
D=C.getMarginLeft()+C.getSizeHint().width+C.getMarginRight();
}return [x,y,z,D];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var H=e.getData();

if(qx.core.Variant.isSet(o,m)){var F=e.getOldData();

if(!F){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!H){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var G=H!=null?H.toString():h;
this.getChildControl(q).setValue(G);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var I=this.getCommand();

if(I!=null){this.getChildControl(q).setValue(I.toString());
}},"off":null}),_applyIcon:function(J,K){if(J){this._showChildControl(t).setSource(J);
}else{this._excludeChildControl(t);
}},_applyLabel:function(L,M){if(L){this._showChildControl(s).setValue(L);
}else{this._excludeChildControl(s);
}},_applyMenu:function(N,O){if(O){O.resetOpener();
O.removeState(n);
}
if(N){this._showChildControl(r);
N.setOpener(this);
N.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var q=this._getLayoutChildren();
var p;
var g;
var h=[];

for(var i=0,l=q.length;i<l;i++){p=q[i];
g=p.getLayoutProperties().column;
h[g]=p;
}var o=this.__ir(q[0]);
var r=o.getColumnSizes();
var k=o.getSpacingX();
var j=qx.lang.Array.sum(r)+k*(r.length-1);

if(j<d){r[1]+=d-j;
}var s=0,top=0;
var m=qx.ui.layout.Util;

for(var i=0,l=r.length;i<l;i++){p=h[i];

if(p){var f=p.getSizeHint();
var top=m.computeVerticalAlignOffset(p.getAlignY()||c,f.height,e,0,0);
var n=m.computeHorizontalAlignOffset(p.getAlignX()||a,f.width,r[i],p.getMarginLeft(),p.getMarginRight());
p.renderLayout(s+n,top,f.width,f.height);
}s+=r[i]+k;
}},__ir:function(t){while(!(t instanceof qx.ui.menu.Menu)){t=t.getLayoutParent();
}return t;
},_computeSizeHint:function(){var w=this._getLayoutChildren();
var v=0;
var x=0;

for(var i=0,l=w.length;i<l;i++){var u=w[i].getSizeHint();
x+=u.width;
v=Math.max(v,u.height);
}return {width:x,height:v};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(r){qx.ui.core.Widget.call(this);
var s=this.getChildControl(p);
this._add(s,{flex:1});

if(r!=null){this.setOrientation(r);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(t,u){var v;

switch(t){case m:v=new qx.ui.form.RepeatButton;
v.addListener(k,this._onExecuteForward,this);
v.setFocusable(false);
this._addAt(v,2);
break;
case n:v=new qx.ui.form.RepeatButton;
v.addListener(k,this._onExecuteBackward,this);
v.setFocusable(false);
this._addAt(v,0);
break;
case l:v=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){v.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(v);
break;
case p:v=new qx.ui.core.scroll.ScrollPane();
v.addListener(d,this._onResize,this);
v.addListener(c,this._onScroll,this);
v.addListener(i,this._onScroll,this);
break;
}return v||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(w){var x=this.getChildControl(p);

if(this.getOrientation()===q){x.scrollByX(w);
}else{x.scrollByY(w);
}},scrollTo:function(y){var z=this.getChildControl(p);

if(this.getOrientation()===q){z.scrollToX(y);
}else{z.scrollToY(y);
}},_applyOrientation:function(A,B){var E=[this.getLayout(),this._getLayout()];
var D=this.getChildControl(m);
var C=this.getChildControl(n);
if(B==o){D.removeState(o);
C.removeState(o);
D.addState(q);
C.addState(q);
}else if(B==q){D.removeState(q);
C.removeState(q);
D.addState(o);
C.addState(o);
}
if(A==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(E[0]){E[0].dispose();
}
if(E[1]){E[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var F=this.getInnerSize();
var H=content.getBounds();
var G=(this.getOrientation()===q)?H.width>F.width:H.height>F.height;

if(G){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var J=this.getChildControl(p);

if(this.getOrientation()===q){var I=J.getScrollX();
var K=J.getScrollMaxX();
}else{var I=J.getScrollY();
var K=J.getScrollMaxY();
}this.getChildControl(n).setEnabled(I>0);
this.getChildControl(m).setEnabled(I<K);
},_showArrows:function(){this._showChildControl(m);
this._showChildControl(n);
},_hideArrows:function(){this._excludeChildControl(m);
this._excludeChildControl(n);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case c:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteForward,this);
this._addAt(i,2);
break;
case e:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteBackward,this);
this._addAt(i,0);
break;
}return i||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__uJ",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__uJ=new qx.event.AcceleratingTimer();
this.__uJ.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__uK:null,__uJ:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__uL();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__uK){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__uM();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__uM();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__uJ.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__uJ.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__uL();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__uK){this.execute();
}}this.__uM();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__uK){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__uM();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__uL();
}},_onInterval:function(e){this.__uK=true;
this.fireEvent(b);
},__uL:function(){this.fireEvent(g);
this.__uK=false;
this.__uJ.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__uM:function(){this.fireEvent(d);
this.__uJ.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__uN",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__uN=new qx.event.Timer(this.getInterval());
this.__uN.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__uN:null,__uO:null,start:function(){this.__uN.setInterval(this.getFirstInterval());
this.__uN.start();
},stop:function(){this.__uN.stop();
this.__uO=null;
},_onInterval:function(){this.__uN.stop();

if(this.__uO==null){this.__uO=this.getInterval();
}this.__uO=Math.max(this.getMinimum(),this.__uO-this.getDecrease());
this.__uN.setInterval(this.__uO);
this.__uN.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var m="resize",l="scrollY",k="update",j="scrollX",i="_applyScrollX",h="_applyScrollY",g="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",f="appear",d="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",c="qx.event.type.Event",a="qx.ui.core.scroll.ScrollPane",b="scroll";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(m,this._onUpdate);
var n=this.getContentElement();
n.addListener(b,this._onScroll,this);
n.addListener(f,this._onAppear,this);
},events:{update:c},properties:{scrollX:{check:g,apply:i,event:j,init:0},scrollY:{check:d,apply:h,event:l,init:0}},members:{add:function(o){var p=this._getChildren()[0];

if(p){this._remove(p);
p.removeListener(m,this._onUpdate,this);
}
if(o){this._add(o);
o.addListener(m,this._onUpdate,this);
}},remove:function(q){if(q){this._remove(q);
q.removeListener(m,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(k);
},_onScroll:function(e){var r=this.getContentElement();
this.setScrollX(r.getScrollX());
this.setScrollY(r.getScrollY());
},_onAppear:function(e){var v=this.getContentElement();
var s=this.getScrollX();
var t=v.getScrollX();

if(s!=t){v.scrollToX(s);
}var w=this.getScrollY();
var u=v.getScrollY();

if(w!=u){v.scrollToY(w);
}},getItemTop:function(z){var top=0;

do{top+=z.getBounds().top;
z=z.getLayoutParent();
}while(z&&z!==this);
return top;
},getItemBottom:function(A){return this.getItemTop(A)+A.getBounds().height;
},getItemLeft:function(B){var C=0;
var parent;

do{C+=B.getBounds().left;
parent=B.getLayoutParent();

if(parent){C+=parent.getInsets().left;
}B=parent;
}while(B&&B!==this);
return C;
},getItemRight:function(D){return this.getItemLeft(D)+D.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var F=this.getInnerSize();
var E=this.getScrollSize();

if(F&&E){return Math.max(0,E.width-F.width);
}return 0;
},getScrollMaxY:function(){var H=this.getInnerSize();
var G=this.getScrollSize();

if(H&&G){return Math.max(0,G.height-H.height);
}return 0;
},scrollToX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}this.setScrollX(I);
},scrollToY:function(K){var L=this.getScrollMaxY();

if(K<0){K=0;
}else if(K>L){K=L;
}this.setScrollY(K);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(M){this.getContentElement().scrollToX(M);
},_applyScrollY:function(N){this.getContentElement().scrollToY(N);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="__iq",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__iq=new qx.event.AcceleratingTimer();
this.__iq.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__iq:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__iq.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__iq.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__iq.stop();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(n,o){var p;

switch(n){case k:p=new qx.ui.basic.Image();
p.setAlignY(g);
this._add(p);
break;
case m:p=new qx.ui.toolbar.PartContainer;
this._add(p);
break;
}return p||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,n);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(q,r){var s=this.getChildControl(m).getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var u=this.getChildren();
var t=[];
var v;

for(var i=0,l=u.length;i<l;i++){v=u[i];

if(v instanceof qx.ui.menubar.Button){t.push(v);
}}return t;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){qx.ui.form.Button.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var k="pressed",j="abandoned",i="hovered",h="Boolean",g="Space",f="undetermined",d="Enter",c="checked",b="mousedown",a="_applyTriState",w="mouseout",v="changeValue",u="keydown",t="_applyGroup",s="button",r="execute",q="qx.ui.form.RadioGroup",p="_applyValue",o="qx.ui.form.ToggleButton",n="mouseover",l="keyup",m="mouseup";
qx.Class.define(o,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable,qx.ui.form.IRadioItem],construct:function(x,y){qx.ui.basic.Atom.call(this,x,y);
this.addListener(n,this._onMouseOver);
this.addListener(w,this._onMouseOut);
this.addListener(b,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(u,this._onKeyDown);
this.addListener(l,this._onKeyUp);
this.addListener(r,this._onExecute,this);
},properties:{appearance:{refine:true,init:s},focusable:{refine:true,init:true},value:{check:h,nullable:true,event:v,apply:p,init:false},group:{check:q,nullable:true,apply:t},triState:{check:h,apply:a,nullable:true,init:null}},members:{_applyGroup:function(z,A){if(A){A.remove(this);
}
if(z){z.add(this);
}},_applyValue:function(B,C){B?this.addState(c):this.removeState(c);

if(this.isTriState()){if(B===null){this.addState(f);
}else if(C===null){this.removeState(f);
}}},_applyTriState:function(D,E){this._applyValue(this.getValue());
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(i);

if(this.hasState(j)){this.removeState(j);
this.addState(k);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(i);

if(this.hasState(k)){if(!this.getValue()){this.removeState(k);
}this.addState(j);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(j);
this.addState(k);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(j)){this.removeState(j);
}else if(this.hasState(k)){this.execute();
}this.removeState(k);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.addState(k);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(k)){return;
}
switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.execute();
this.removeState(k);
e.stopPropagation();
}}}});
})();
(function(){var e="inherit",d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){qx.ui.form.ToggleButton.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var e="change",d="qx.event.type.Data",c="qx.ui.form.MModelSelection",b="__vP",a="changeSelection";
qx.Mixin.define(c,{construct:function(){this.__vP=new qx.data.Array();
this.__vP.addListener(e,this.__vS,this);
this.addListener(a,this.__vR,this);
},events:{changeModelSelection:d},members:{__vP:null,__vQ:false,__vR:function(){if(this.__vQ){return;
}var h=this.getSelection();
var f=[];

for(var i=0;i<h.length;i++){var k=h[i];
var g=k.getModel?k.getModel():null;

if(g!==null){f.push(g);
}}if(f.length===h.length){this.setModelSelection(f);
}},__vS:function(){this.__vQ=true;
var m=this.getSelectables(true);
var o=[];
var n=this.__vP.toArray();

for(var i=0;i<n.length;i++){var q=n[i];

for(var j=0;j<m.length;j++){var r=m[j];
var l=r.getModel?r.getModel():null;

if(q===l){o.push(r);
break;
}}}this.setSelection(o);
this.__vQ=false;
var p=this.getSelection();

if(!qx.lang.Array.equals(p,o)){this.__vR();
}},getModelSelection:function(){return this.__vP;
},setModelSelection:function(s){if(!s){this.__vP.removeAll();
return;
}{};
s.unshift(this.__vP.getLength());
s.unshift(0);
var t=this.__vP.splice.apply(this.__vP,s);
t.dispose();
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(e){return arguments.length==1;
}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="__uC",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__uC:null,getSelection:function(){var g=this.__uD().getSelected();

if(g){return [g];
}else{return [];
}},setSelection:function(h){switch(h.length){case 0:this.resetSelection();
break;
case 1:this.__uD().setSelected(h[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+h.length+" items!");
}},resetSelection:function(){this.__uD().resetSelected();
},isSelected:function(i){return this.__uD().isSelected(i);
},isSelectionEmpty:function(){return this.__uD().isSelectionEmpty();
},getSelectables:function(j){return this.__uD().getSelectables(j);
},_onChangeSelected:function(e){var l=e.getData();
var k=e.getOldData();
l==null?l=[]:l=[l];
k==null?k=[]:k=[k];
this.fireDataEvent(d,l,k);
},__uD:function(){if(this.__uC==null){var m=this;
this.__uC=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(n){if(m._isItemSelectable){return m._isItemSelectable(n);
}else{return n.isVisible();
}}});
this.__uC.addListener(c,this._onChangeSelected,this);
}this.__uC.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__uC;
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="__hS",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(s){qx.core.Object.call(this);
this.__hS=[];
this.addListener(b,this.__hT,this);

if(s!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__hS:null,getItems:function(){return this.__hS;
},add:function(t){var u=this.__hS;
var v;

for(var i=0,l=arguments.length;i<l;i++){v=arguments[i];

if(qx.lang.Array.contains(u,v)){continue;
}v.addListener(p,this._onItemChangeChecked,this);
u.push(v);
v.setGroup(this);
if(v.getValue()){this.setSelection([v]);
}}if(!this.isAllowEmptySelection()&&u.length>0&&!this.getSelection()[0]){this.setSelection([u[0]]);
}},remove:function(w){var x=this.__hS;

if(qx.lang.Array.contains(x,w)){qx.lang.Array.remove(x,w);
if(w.getGroup()===this){w.resetGroup();
}w.removeListener(p,this._onItemChangeChecked,this);
if(w.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__hS;
},_onItemChangeChecked:function(e){var y=e.getTarget();

if(y.getValue()){this.setSelection([y]);
}else if(this.getSelection()[0]==y){this.resetSelection();
}},_applyInvalidMessage:function(z,A){for(var i=0;i<this.__hS.length;i++){this.__hS[i].setInvalidMessage(z);
}},_applyValid:function(B,C){for(var i=0;i<this.__hS.length;i++){this.__hS[i].setValid(B);
}},_applyEnabled:function(D,E){var F=this.__hS;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(G,H){if(!G&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var I=this.getSelection()[0];
var K=this.__hS;
var J=K.indexOf(I);

if(J==-1){return;
}var i=0;
var length=K.length;
if(this.getWrap()){J=(J+1)%length;
}else{J=Math.min(J+1,length-1);
}
while(i<length&&!K[J].getEnabled()){J=(J+1)%length;
i++;
}this.setSelection([K[J]]);
},selectPrevious:function(){var L=this.getSelection()[0];
var N=this.__hS;
var M=N.indexOf(L);

if(M==-1){return;
}var i=0;
var length=N.length;
if(this.getWrap()){M=(M-1+length)%length;
}else{M=Math.max(M-1,0);
}
while(i<length&&!N[M].getEnabled()){M=(M-1+length)%length;
i++;
}this.setSelection([N[M]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__hT:function(e){var P=e.getData()[0];
var O=e.getOldData()[0];

if(O){O.setValue(false);
}
if(P){P.setValue(true);
}}},destruct:function(){this._disposeArray(d);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__vr,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__vr:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var l="change",k="add",j="remove",h="order",g="qx.event.type.Data",f="",e="qx.data.Array",d="?",c="changeBubble",b="number",a="changeLength";
qx.Class.define(e,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(m){qx.core.Object.call(this);
if(m==undefined){this.__vU=[];
}else if(arguments.length>1){this.__vU=[];

for(var i=0;i<arguments.length;i++){this.__vU.push(arguments[i]);
}}else if(typeof m==b){this.__vU=new Array(m);
}else if(m instanceof Array){this.__vU=qx.lang.Array.clone(m);
}else{this.__vU=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__vU.length;i++){this._applyEventPropagation(this.__vU[i],null,i);
}this.__vV();
},events:{"change":g,"changeLength":g},members:{__vU:null,concat:function(n){if(n){var o=this.__vU.concat(n);
}else{var o=this.__vU.concat();
}return new qx.data.Array(o);
},join:function(p){return this.__vU.join(p);
},pop:function(){var q=this.__vU.pop();
this.__vV();
this._applyEventPropagation(null,q,this.length-1);
this.fireDataEvent(l,{start:this.length-1,end:this.length-1,type:j,items:[q]},null);
return q;
},push:function(r){for(var i=0;i<arguments.length;i++){this.__vU.push(arguments[i]);
this.__vV();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(l,{start:this.length-1,end:this.length-1,type:k,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__vU.reverse();
this.fireDataEvent(l,{start:0,end:this.length-1,type:h,items:null},null);
},shift:function(){var s=this.__vU.shift();
this.__vV();
this._applyEventPropagation(null,s,this.length-1);
this.fireDataEvent(l,{start:0,end:this.length-1,type:j,items:[s]},null);
return s;
},slice:function(t,u){return new qx.data.Array(this.__vU.slice(t,u));
},splice:function(v,w,x){var D=this.__vU.length;
var A=this.__vU.splice.apply(this.__vU,arguments);
if(this.__vU.length!=D){this.__vV();
}var B=w>0;
var y=arguments.length>2;
var z=null;

if(B||y){if(this.__vU.length>D){var C=k;
}else if(this.__vU.length<D){var C=j;
z=A;
}else{var C=h;
}this.fireDataEvent(l,{start:v,end:this.length-1,type:C,items:z},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,v+i);
}this.fireDataEvent(c,{value:this,name:d,old:A});
for(var i=0;i<A.length;i++){this._applyEventPropagation(null,A[i],i);
}return (new qx.data.Array(A));
},sort:function(E){this.__vU.sort.apply(this.__vU,arguments);
this.fireDataEvent(l,{start:0,end:this.length-1,type:h,items:null},null);
},unshift:function(F){for(var i=arguments.length-1;i>=0;i--){this.__vU.unshift(arguments[i]);
this.__vV();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(l,{start:0,end:this.length-1,type:k,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__vU;
},getItem:function(G){return this.__vU[G];
},setItem:function(H,I){var J=this.__vU[H];
if(J===I){return;
}this.__vU[H]=I;
this._applyEventPropagation(I,J,H);
if(this.length!=this.__vU.length){this.__vV();
}this.fireDataEvent(l,{start:H,end:H,type:k,items:[I]},null);
},getLength:function(){return this.length;
},indexOf:function(K){return this.__vU.indexOf(K);
},toString:function(){if(this.__vU!=null){return this.__vU.toString();
}return f;
},contains:function(L){return this.__vU.indexOf(L)!==-1;
},copy:function(){return this.concat();
},insertAt:function(M,N){this.splice(M,0,N);
},insertBefore:function(O,P){var Q=this.indexOf(O);

if(Q==-1){this.push(P);
}else{this.splice(Q,0,P);
}},insertAfter:function(R,S){var T=this.indexOf(R);

if(T==-1||T==(this.length-1)){this.push(S);
}else{this.splice(T+1,0,S);
}},removeAt:function(U){return this.splice(U,1).getItem(0);
},removeAll:function(){for(var i=0;i<this.__vU.length;i++){this._applyEventPropagation(null,this.__vU[i],i);
}var W=this.getLength();
var V=this.__vU.concat();
this.__vU.length=0;
this.__vV();
this.fireDataEvent(l,{start:0,end:W-1,type:j,items:V},null);
},append:function(X){if(X instanceof qx.data.Array){X=X.toArray();
}{};
for(var i=0;i<X.length;i++){this._applyEventPropagation(X[i],null,this.__vU.length+i);
}Array.prototype.push.apply(this.__vU,X);
var Y=this.length;
this.__vV();
this.fireDataEvent(l,{start:Y,end:this.length-1,type:k,items:X},null);
},remove:function(ba){var bb=this.indexOf(ba);

if(bb!=-1){this.splice(bb,1);
return ba;
}},equals:function(bc){if(this.length!==bc.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bc.getItem(i)){return false;
}}return true;
},sum:function(){var bd=0;

for(var i=0;i<this.length;i++){bd+=this.getItem(i);
}return bd;
},max:function(){var be=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>be){be=this.getItem(i);
}}return be===undefined?null:be;
},min:function(){var bf=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bf){bf=this.getItem(i);
}}return bf===undefined?null:bf;
},forEach:function(bg,bh){for(var i=0;i<this.__vU.length;i++){bg.call(bh,this.__vU[i]);
}},__vV:function(){var bi=this.length;
this.length=this.__vU.length;
this.fireDataEvent(a,this.length,bi);
}},destruct:function(){for(var i=0;i<this.__vU.length;i++){this._applyEventPropagation(null,this.__vU[i],i);
}this.__vU=null;
}});
})();
(function(){var g="Boolean",f="qx.ui.core.SingleSelectionManager",e="__uG",d="__uF",c="changeSelected",b="__uE",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
{};
this.__uE=h;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:g,init:true,apply:e}},members:{__uF:null,__uE:null,getSelected:function(){return this.__uF;
},setSelected:function(j){if(!this.__uI(j)){throw new Error("Could not select "+j+", because it is not a child element!");
}this.__uH(j);
},resetSelected:function(){this.__uH(null);
},isSelected:function(k){if(!this.__uI(k)){throw new Error("Could not check if "+k+" is selected,"+" because it is not a child element!");
}return this.__uF===k;
},isSelectionEmpty:function(){return this.__uF==null;
},getSelectables:function(l){var m=this.__uE.getItems();
var n=[];

for(var i=0;i<m.length;i++){if(this.__uE.isItemSelectable(m[i])){n.push(m[i]);
}}if(!l){for(var i=n.length-1;i>=0;i--){if(!n[i].getEnabled()){n.splice(i,1);
}}}return n;
},__uG:function(o,p){if(!o){this.__uH(this.__uF);
}},__uH:function(q){var t=this.__uF;
var s=q;

if(s!=null&&t===s){return;
}
if(!this.isAllowEmptySelection()&&s==null){var r=this.getSelectables(true)[0];

if(r){s=r;
}}this.__uF=s;
this.fireDataEvent(c,s,t);
},__uI:function(u){var v=this.__uE.getItems();

for(var i=0;i<v.length;i++){if(v[i]===u){return true;
}}return false;
}},destruct:function(){if(this.__uE.toHashCode){this._disposeObjects(b);
}else{this.__uE=null;
}this._disposeObjects(d);
}});
})();
(function(){var k="slider",j="splitter",i="horizontal",h="px",g="vertical",f="knob",d="mousedown",c="mouseout",b="Integer",a="height",D="mousemove",C="move",B="maxHeight",A="resize",z="width",w="_applyOrientation",v="_applyOffset",u="splitpane",t="qx.ui.splitpane.Pane",s="top",q="minHeight",r="mouseup",o="minWidth",p="appear",m="losecapture",n="left",l="maxWidth";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(E){qx.ui.core.Widget.call(this);
this.__zX=[];
if(E){this.setOrientation(E);
}else{this.initOrientation();
}this.__Ag.addListener(d,this._onMouseDown,this);
this.__Ag.addListener(r,this._onMouseUp,this);
this.__Ag.addListener(D,this._onMouseMove,this);
this.__Ag.addListener(c,this._onMouseOut,this);
this.__Ag.addListener(m,this._onMouseUp,this);
},properties:{appearance:{refine:true,init:u},offset:{check:b,init:6,apply:v},orientation:{init:i,check:[i,g],apply:w}},members:{__zY:null,__Aa:false,__Ab:null,__Ac:null,__Ad:null,__Ae:null,__Af:null,__zX:null,__Ag:null,_createChildControlImpl:function(F,G){var H;

switch(F){case k:H=new qx.ui.splitpane.Slider(this);
H.exclude();
this._add(H,{type:F});
break;
case j:H=new qx.ui.splitpane.Splitter(this);
this._add(H,{type:F});
H.addListener(C,this.__Ah,this);
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},__Ah:function(e){this.__Aj(e.getData());
},__Ai:function(I){this.__Ag=new qx.ui.splitpane.Blocker(I);
this.getContentElement().add(this.__Ag);
var J=this.getChildControl(j);
var K=J.getWidth();

if(!K){J.addListenerOnce(p,function(){this.__Aj();
},this);
}J.addListener(A,function(e){var L=e.getData();

if(L.height==0||L.width==0){this.__Ag.hide();
}else{this.__Ag.show();
}},this);
},getBlocker:function(){return this.__Ag;
},_applyOrientation:function(M,N){var O=this.getChildControl(k);
var R=this.getChildControl(j);
this.__Ad=M===i;

if(!this.__Ag){this.__Ai(M);
}this.__Ag.setOrientation(M);
var Q=this._getLayout();

if(Q){Q.dispose();
}var P=M===g?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(P);
R.removeState(N);
R.addState(M);
R.getChildControl(f).removeState(N);
R.getChildControl(f).addState(M);
O.removeState(N);
O.addState(M);
qx.ui.core.queue.Manager.flush();
this.__Aj();
},_applyOffset:function(S,T){this.__Aj();
},__Aj:function(U){var V=this.getChildControl(j);
var ba=this.getOffset();
var bb=V.getBounds();
var Y=V.getContainerElement().getDomElement();
if(!Y){return;
}if(this.__Ad){var X=null;

if(U){X=U.width;
}else if(bb){X=bb.width;
}var bc=U&&U.left;

if(X){if(!bc){bc=qx.bom.element.Location.getPosition(Y).left;
}this.__Ag.setWidth(ba,X);
this.__Ag.setLeft(ba,bc);
}}else{var W=null;

if(U){W=U.height;
}else if(bb){W=bb.height;
}var top=U&&U.top;

if(W){if(!top){top=qx.bom.element.Location.getPosition(Y).top;
}this.__Ag.setHeight(ba,W);
this.__Ag.setTop(ba,top);
}}},add:function(bd,be){if(be==null){this._add(bd);
}else{this._add(bd,{flex:be});
}this.__zX.push(bd);
},remove:function(bf){this._remove(bf);
qx.lang.Array.remove(this.__zX,bf);
},getChildren:function(){return this.__zX;
},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}var bg=this.getChildControl(j);
var bi=bg.getContainerLocation();
var bh=this.getContentLocation();
this.__zY=this.__Ad?e.getDocumentLeft()-bi.left+bh.left:e.getDocumentTop()-bi.top+bh.top;
var bk=this.getChildControl(k);
var bj=bg.getBounds();
bk.setUserBounds(bj.left,bj.top,bj.width,bj.height);
bk.setZIndex(bg.getZIndex()+1);
bk.show();
this.__Aa=true;
this.__Ag.capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__Aa){this.__Ak();
var bl=this.getChildControl(k);
var bm=this.__Ae;

if(this.__Ad){bl.setDomLeft(bm);
this.__Ag.setStyle(n,(bm-this.getOffset())+h);
}else{bl.setDomTop(bm);
this.__Ag.setStyle(s,(bm-this.getOffset())+h);
}e.stop();
}},_onMouseOut:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
},_onMouseUp:function(e){if(!this.__Aa){return;
}this._finalizeSizes();
var bn=this.getChildControl(k);
bn.exclude();
this.__Aa=false;
this.releaseCapture();
e.stop();
},_finalizeSizes:function(){var br=this.__Ae;
var bo=this.__Af;

if(br==null){return;
}var bt=this._getChildren();
var bs=bt[2];
var bp=bt[3];
var bq=bs.getLayoutProperties().flex;
var bu=bp.getLayoutProperties().flex;
if((bq!=0)&&(bu!=0)){bs.setLayoutProperties({flex:br});
bp.setLayoutProperties({flex:bo});
}else{if(this.__Ad){bs.setWidth(br);
bp.setWidth(bo);
}else{bs.setHeight(br);
bp.setHeight(bo);
}}},__Ak:function(){if(this.__Ad){var bx=o,bE=z,by=l,bC=this.__Ab;
}else{var bx=q,bE=a,by=B,bC=this.__Ac;
}var bD=this._getChildren();
var bv=bD[2].getSizeHint();
var bA=bD[3].getSizeHint();
var bB=bD[2].getBounds()[bE]+bD[3].getBounds()[bE];
var bz=bC-this.__zY;
var bw=bB-bz;
if(bz<bv[bx]){bw-=bv[bx]-bz;
bz=bv[bx];
}else if(bw<bA[bx]){bz-=bA[bx]-bw;
bw=bA[bx];
}if(bz>bv[by]){bw+=bz-bv[by];
bz=bv[by];
}else if(bw>bA[by]){bz+=bw-bA[by];
bw=bA[by];
}this.__Ae=bz;
this.__Af=bw;
},_isActiveDragSession:function(){return this.__Aa;
},_setLastMousePosition:function(x,y){this.__Ab=x;
this.__Ac=y;
}},destruct:function(){this.__zX=null;
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case d:i=new qx.ui.basic.Image;
this._add(i);
break;
}return i||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var o="px",n="horizontal",m="top",l="height",k="width",j="left",i="100%",h="cursor",g="vertical",f="_applyOrientation",c="qx.ui.splitpane.Blocker",e="col-resize",d="row-resize",b="div",a="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(p){var q={position:a,zIndex:11};
qx.html.Element.call(this,b,q);
if(p){this.setOrientation(p);
}else{this.initOrientation();
}},properties:{orientation:{init:n,check:[n,g],apply:f}},members:{_applyOrientation:function(r,s){if(r==n){this.setStyle(l,i);
this.setStyle(h,e);
this.setStyle(m,null);
}else{this.setStyle(k,i);
this.setStyle(j,null);
this.setStyle(h,d);
}},setWidth:function(t,u){var v=u+2*t;
this.setStyle(k,v+o);
},setHeight:function(w,x){var y=x+2*w;
this.setStyle(l,y+o);
},setLeft:function(z,A){var B=A-z;
this.setStyle(j,B+o);
},setTop:function(C,D){var top=D-C;
this.setStyle(m,top+o);
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.VLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var r,u;
var g,f,p,h;

for(var i=0;i<length;i++){r=v[i];
u=r.getLayoutProperties().type;

if(u===b){f=r;
}else if(u===c){p=r;
}else if(!g){g=r;
}else{h=r;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var k=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(k==null){k=1;
}var w=g.getSizeHint();
var n=f.getSizeHint();
var o=h.getSizeHint();
var j=w.height;
var s=n.height;
var t=o.height;

if(x>0&&k>0){var l=x+k;
var m=e-s;
var j=Math.round((m/l)*x);
var t=m-j;
var q=qx.ui.layout.Util.arrangeIdeals(w.minHeight,j,w.maxHeight,o.minHeight,t,o.maxHeight);
j=q.begin;
t=q.end;
}else if(x>0){j=e-s-t;

if(j<w.minHeight){j=w.minHeight;
}
if(j>w.maxHeight){j=w.maxHeight;
}}else if(k>0){t=e-j-s;

if(t<o.minHeight){t=o.minHeight;
}
if(t>o.maxHeight){t=o.maxHeight;
}}g.renderLayout(0,0,d,j);
f.renderLayout(0,j,d,s);
h.renderLayout(0,j+s,d,t);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var B=0,D=0,C=0;
var E=0,F=0,y=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
B+=z.minHeight;
D+=z.height;
C+=z.maxHeight;

if(z.minWidth>E){E=z.minWidth;
}
if(z.width>F){F=z.width;
}
if(z.maxWidth>y){y=z.maxWidth;
}}return {minHeight:B,height:D,maxHeight:C,minWidth:E,width:F,maxWidth:y};
}}});
})();
(function(){var c="slider",b="splitter",a="qx.ui.splitpane.HLayout";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var v=this._getLayoutChildren();
var length=v.length;
var s,u;
var g,f,p,h;

for(var i=0;i<length;i++){s=v[i];
u=s.getLayoutProperties().type;

if(u===b){f=s;
}else if(u===c){p=s;
}else if(!g){g=s;
}else{h=s;
}}
if(g&&h){var x=g.getLayoutProperties().flex;
var j=h.getLayoutProperties().flex;

if(x==null){x=1;
}
if(j==null){j=1;
}var w=g.getSizeHint();
var m=f.getSizeHint();
var o=h.getSizeHint();
var t=w.width;
var r=m.width;
var q=o.width;

if(x>0&&j>0){var k=x+j;
var l=d-r;
var t=Math.round((l/k)*x);
var q=l-t;
var n=qx.ui.layout.Util.arrangeIdeals(w.minWidth,t,w.maxWidth,o.minWidth,q,o.maxWidth);
t=n.begin;
q=n.end;
}else if(x>0){t=d-r-q;

if(t<w.minWidth){t=w.minWidth;
}
if(t>w.maxWidth){t=w.maxWidth;
}}else if(j>0){q=d-t-r;

if(q<o.minWidth){q=o.minWidth;
}
if(q>o.maxWidth){q=o.maxWidth;
}}g.renderLayout(0,0,t,e);
f.renderLayout(t,0,r,e);
h.renderLayout(t+r,0,q,e);
}else{f.renderLayout(0,0,0,0);
if(g){g.renderLayout(0,0,d,e);
}else if(h){h.renderLayout(0,0,d,e);
}}},_computeSizeHint:function(){var H=this._getLayoutChildren();
var length=H.length;
var A,z,G;
var E=0,F=0,y=0;
var B=0,D=0,C=0;

for(var i=0;i<length;i++){A=H[i];
G=A.getLayoutProperties();
if(G.type===c){continue;
}z=A.getSizeHint();
E+=z.minWidth;
F+=z.width;
y+=z.maxWidth;

if(z.minHeight>B){B=z.minHeight;
}
if(z.height>D){D=z.height;
}
if(z.maxHeight>C){C=z.maxHeight;
}}return {minWidth:E,width:F,maxWidth:y,minHeight:B,height:D,maxHeight:C};
}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var k="scrollbar-y",j="scrollbar-x",i="pane",h="auto",g="corner",f="scrollbar-",d="on",c="_computeScrollbars",b="getDocument",a="changeVisibility",D="off",C="x",B="scroll",A="touchmove",z="scrollY",y="Left",x="mousewheel",w="scrollbarX",v="scrollarea",u="y",r="vertical",s="scrollX",p="touchstart",q="horizontal",n="qx.ui.core.scroll.AbstractScrollArea",o="abstract",l="update",m="scrollbarY",t="Top";
qx.Class.define(n,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:o,construct:function(){qx.ui.core.Widget.call(this);
var E=new qx.ui.layout.Grid();
E.setColumnFlex(0,1);
E.setRowFlex(0,1);
this._setLayout(E);
this.addListener(x,this._onMouseWheel,this);
if(qx.bom.client.Feature.TOUCH){this.addListener(A,this._onTouchMove,this);
this.addListener(p,function(){this.__vW={"x":0,"y":0};
},this);
this.__vW={};
this.__vX={};
}},properties:{appearance:{refine:true,init:v},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,d,D],init:h,themeable:true,apply:c},scrollbarY:{check:[h,d,D],init:h,themeable:true,apply:c},scrollbar:{group:[w,m]}},members:{__vW:null,__vX:null,_createChildControlImpl:function(F,G){var H;

switch(F){case i:H=new qx.ui.core.scroll.ScrollPane();
H.addListener(l,this._computeScrollbars,this);
H.addListener(s,this._onScrollPaneX,this);
H.addListener(z,this._onScrollPaneY,this);
this._add(H,{row:0,column:0});
break;
case j:H=this._createScrollBar(q);
H.setMinWidth(0);
H.exclude();
H.addListener(B,this._onScrollBarX,this);
H.addListener(a,this._onChangeScrollbarXVisibility,this);
this._add(H,{row:1,column:0});
break;
case k:H=this._createScrollBar(r);
H.setMinHeight(0);
H.exclude();
H.addListener(B,this._onScrollBarY,this);
H.addListener(a,this._onChangeScrollbarYVisibility,this);
this._add(H,{row:0,column:1});
break;
case g:H=new qx.ui.core.Widget();
H.setWidth(0);
H.setHeight(0);
H.exclude();
this._add(H,{row:1,column:1});
break;
}return H||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,F);
},getPaneSize:function(){return this.getChildControl(i).getInnerSize();
},getItemTop:function(I){return this.getChildControl(i).getItemTop(I);
},getItemBottom:function(J){return this.getChildControl(i).getItemBottom(J);
},getItemLeft:function(K){return this.getChildControl(i).getItemLeft(K);
},getItemRight:function(L){return this.getChildControl(i).getItemRight(L);
},scrollToX:function(M){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollTo(M);
},scrollByX:function(N){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollBy(N);
},getScrollX:function(){var O=this.getChildControl(j,true);
return O?O.getPosition():0;
},scrollToY:function(P){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollTo(P);
},scrollByY:function(Q){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollBy(Q);
},getScrollY:function(){var R=this.getChildControl(k,true);
return R?R.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(i).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(i).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var T=this._isChildControlVisible(j);
var U=this._isChildControlVisible(k);
var S=(U)?this.getChildControl(k,true):(T?this.getChildControl(j,true):null);

if(S){S.scrollBySteps(e.getWheelDelta());
e.stop();
}},_onTouchMove:function(e){this._onTouchMoveDirectional(C,e);
this._onTouchMoveDirectional(u,e);
e.stop();
},_onTouchMoveDirectional:function(V,e){var W=(V==C?y:t);
var Y=this.getChildControl(f+V,true);
var ba=this._isChildControlVisible(f+V);

if(ba&&Y){if(this.__vW[V]==0){var X=0;
}else{var X=-(e[b+W]()-this.__vW[V]);
}this.__vW[V]=e[b+W]();
Y.scrollBy(X);
if(this.__vX[V]){clearTimeout(this.__vX[V]);
this.__vX[V]=null;
}this.__vX[V]=setTimeout(qx.lang.Function.bind(function(bb){this.__vY(bb,V);
},this,X),100);
}},__vY:function(bc,bd){this.__vX[bd]=null;
var bf=this._isChildControlVisible(f+bd);

if(bc==0||!bf){return;
}if(bc>0){bc=Math.max(0,bc-3);
}else{bc=Math.min(0,bc+3);
}this.__vX[bd]=setTimeout(qx.lang.Function.bind(function(bg,bh){this.__vY(bg,bh);
},this,bc,bd),20);
var be=this.getChildControl(f+bd,true);
be.scrollBy(bc);
},_onChangeScrollbarXVisibility:function(e){var bi=this._isChildControlVisible(j);
var bj=this._isChildControlVisible(k);

if(!bi){this.scrollToX(0);
}bi&&bj?this._showChildControl(g):this._excludeChildControl(g);
},_onChangeScrollbarYVisibility:function(e){var bk=this._isChildControlVisible(j);
var bl=this._isChildControlVisible(k);

if(!bl){this.scrollToY(0);
}bk&&bl?this._showChildControl(g):this._excludeChildControl(g);
},_computeScrollbars:function(){var bs=this.getChildControl(i);
var content=bs.getChildren()[0];

if(!content){this._excludeChildControl(j);
this._excludeChildControl(k);
return;
}var bm=this.getInnerSize();
var br=bs.getInnerSize();
var bp=bs.getScrollSize();
if(!br||!bp){return;
}var bt=this.getScrollbarX();
var bu=this.getScrollbarY();

if(bt===h&&bu===h){var bq=bp.width>bm.width;
var bv=bp.height>bm.height;
if((bq||bv)&&!(bq&&bv)){if(bq){bv=bp.height>br.height;
}else if(bv){bq=bp.width>br.width;
}}}else{var bq=bt===d;
var bv=bu===d;
if(bp.width>(bq?br.width:bm.width)&&bt===h){bq=true;
}
if(bp.height>(bq?br.height:bm.height)&&bu===h){bv=true;
}}if(bq){var bo=this.getChildControl(j);
bo.show();
bo.setMaximum(Math.max(0,bp.width-br.width));
bo.setKnobFactor((bp.width===0)?0:br.width/bp.width);
}else{this._excludeChildControl(j);
}
if(bv){var bn=this.getChildControl(k);
bn.show();
bn.setMaximum(Math.max(0,bp.height-br.height));
bn.setKnobFactor((bp.height===0)?0:br.height/bp.height);
}else{this._excludeChildControl(k);
}}}});
})();
(function(){var m="qx.dynlocale",l="Boolean",k="changeLocale",j="changeInvalidMessage",i="on",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",a="changeRequired",b="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Variant.isSet(m,i)){qx.locale.Manager.getInstance().addListener(k,this.__uP,this);
}},properties:{valid:{check:l,init:true,apply:c,event:b},required:{check:l,init:false,event:a},invalidMessage:{check:h,init:f,event:j},requiredInvalidMessage:{check:h,nullable:true,event:j}},members:{_applyValid:function(n,o){n?this.removeState(g):this.addState(g);
},__uP:qx.core.Variant.select(m,{"on":function(e){var p=this.getInvalidMessage();

if(p&&p.translate){this.setInvalidMessage(p.translate());
}var q=this.getRequiredInvalidMessage();

if(q&&q.translate){this.setRequiredInvalidMessage(q.translate());
}},"off":null})},destruct:function(){if(qx.core.Variant.isSet(m,i)){qx.locale.Manager.getInstance().removeListener(k,this.__uP,this);
}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__jt:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__ju:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__ju[name];
s[t]();
}else{var u=this.__jt[name];
s[u](q);
}}}});
})();
(function(){var v="single",u="Boolean",t="one",s="changeSelection",r="mouseup",q="mousedown",p="losecapture",o="multi",n="_applyQuickSelection",m="mouseover",d="_applySelectionMode",l="_applyDragSelection",h="qx.ui.core.MMultiSelectionHandling",c="removeItem",b="keypress",g="__vT",f="qx.event.type.Data",j="addItem",a="additive",k="mousemove";
qx.Mixin.define(h,{construct:function(){var x=this.SELECTION_MANAGER;
var w=this.__vT=new x(this);
this.addListener(q,w.handleMouseDown,w);
this.addListener(r,w.handleMouseUp,w);
this.addListener(m,w.handleMouseOver,w);
this.addListener(k,w.handleMouseMove,w);
this.addListener(p,w.handleLoseCapture,w);
this.addListener(b,w.handleKeyPress,w);
this.addListener(j,w.handleAddItem,w);
this.addListener(c,w.handleRemoveItem,w);
w.addListener(s,this._onSelectionChange,this);
},events:{"changeSelection":f},properties:{selectionMode:{check:[v,o,a,t],init:v,apply:d},dragSelection:{check:u,init:false,apply:l},quickSelection:{check:u,init:false,apply:n}},members:{__vT:null,selectAll:function(){this.__vT.selectAll();
},isSelected:function(y){if(!qx.ui.core.Widget.contains(this,y)){throw new Error("Could not test if "+y+" is selected, because it is not a child element!");
}return this.__vT.isItemSelected(y);
},addToSelection:function(z){if(!qx.ui.core.Widget.contains(this,z)){throw new Error("Could not add + "+z+" to selection, because it is not a child element!");
}this.__vT.addItem(z);
},removeFromSelection:function(A){if(!qx.ui.core.Widget.contains(this,A)){throw new Error("Could not remove "+A+" from selection, because it is not a child element!");
}this.__vT.removeItem(A);
},selectRange:function(B,C){this.__vT.selectItemRange(B,C);
},resetSelection:function(){this.__vT.clearSelection();
},setSelection:function(D){for(var i=0;i<D.length;i++){if(!qx.ui.core.Widget.contains(this,D[i])){throw new Error("Could not select "+D[i]+", because it is not a child element!");
}}
if(D.length===0){this.resetSelection();
}else{var E=this.getSelection();

if(!qx.lang.Array.equals(E,D)){this.__vT.replaceSelection(D);
}}},getSelection:function(){return this.__vT.getSelection();
},getSortedSelection:function(){return this.__vT.getSortedSelection();
},isSelectionEmpty:function(){return this.__vT.isSelectionEmpty();
},getSelectionContext:function(){return this.__vT.getSelectionContext();
},_getManager:function(){return this.__vT;
},getSelectables:function(F){return this.__vT.getSelectables(F);
},invertSelection:function(){this.__vT.invertSelection();
},_getLeadItem:function(){var G=this.__vT.getMode();

if(G===v||G===t){return this.__vT.getSelectedItem();
}else{return this.__vT.getLeadItem();
}},_applySelectionMode:function(H,I){this.__vT.setMode(H);
},_applyDragSelection:function(J,K){this.__vT.setDrag(J);
},_applyQuickSelection:function(L,M){this.__vT.setQuick(L);
},_onSelectionChange:function(e){this.fireDataEvent(s,e.getData());
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="PageUp",g="under",f="Left",d="lead",c="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",E="click",D="above",v="left",w="Escape",t="A",u="Space",r="_applyMode",s="interval",p="changeSelection",q="qx.event.type.Data",x="quick",y="key",A="abstract",z="drag",C="qx.ui.core.selection.Abstract",B="__vv";
qx.Class.define(C,{type:A,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__vs={};
},events:{"changeSelection":q},properties:{mode:{check:[n,j,k,o],init:n,apply:r},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__vt:0,__vu:0,__vv:null,__vw:null,__vx:null,__vy:null,__vz:null,__vA:null,__vB:null,__vC:null,__vD:null,__vE:null,__vF:null,__vG:null,__vH:null,__vI:null,__vJ:null,__vs:null,__vK:null,__vL:null,_userInteraction:false,__vM:null,getSelectionContext:function(){return this.__vI;
},selectAll:function(){var N=this.getMode();

if(N==n||N==o){throw new Error("Can not select all items in selection mode: "+N);
}this._selectAllItems();
this._fireChange();
},selectItem:function(O){this._setSelectedItem(O);
var P=this.getMode();

if(P!==n&&P!==o){this._setLeadItem(O);
this._setAnchorItem(O);
}this._scrollItemIntoView(O);
this._fireChange();
},addItem:function(Q){var R=this.getMode();

if(R===n||R===o){this._setSelectedItem(Q);
}else{if(!this._getAnchorItem()){this._setAnchorItem(Q);
}this._setLeadItem(Q);
this._addToSelection(Q);
}this._scrollItemIntoView(Q);
this._fireChange();
},removeItem:function(S){this._removeFromSelection(S);

if(this.getMode()===o&&this.isSelectionEmpty()){var T=this._getFirstSelectable();

if(T){this.addItem(T);
}if(T==S){return;
}}
if(this.getLeadItem()==S){this._setLeadItem(null);
}
if(this._getAnchorItem()==S){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(U,V){var W=this.getMode();

if(W==n||W==o){throw new Error("Can not select multiple items in selection mode: "+W);
}this._selectItemRange(U,V);
this._setAnchorItem(U);
this._setLeadItem(V);
this._scrollItemIntoView(V);
this._fireChange();
},clearSelection:function(){if(this.getMode()==o){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(X){var Y=this.getMode();

if(Y==o||Y===n){if(X.length>1){throw new Error("Could not select more than one items in mode: "+Y+"!");
}
if(X.length==1){this.selectItem(X[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(X);
}},getSelectedItem:function(){var ba=this.getMode();

if(ba===n||ba===o){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__vs);
},getSortedSelection:function(){var bc=this.getSelectables();
var bb=qx.lang.Object.getValues(this.__vs);
bb.sort(function(a,b){return bc.indexOf(a)-bc.indexOf(b);
});
return bb;
},isItemSelected:function(bd){var be=this._selectableToHashCode(bd);
return this.__vs[be]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__vs);
},invertSelection:function(){var bg=this.getMode();

if(bg===n||bg===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bf=this.getSelectables();

for(var i=0;i<bf.length;i++){this._toggleInSelection(bf[i]);
}this._fireChange();
},_setLeadItem:function(bh){var bi=this.__vJ;

if(bi!==null){this._styleSelectable(bi,d,false);
}
if(bh!==null){this._styleSelectable(bh,d,true);
}this.__vJ=bh;
},getLeadItem:function(){return this.__vJ!==null?this.__vJ:null;
},_setAnchorItem:function(bj){var bk=this.__vK;

if(bk){this._styleSelectable(bk,J,false);
}
if(bj){this._styleSelectable(bj,J,true);
}this.__vK=bj;
},_getAnchorItem:function(){return this.__vK!==null?this.__vK:null;
},_isSelectable:function(bl){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bm=event.getTarget();
if(bm&&this._isSelectable(bm)){return bm;
}return null;
},_selectableToHashCode:function(bn){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bo,bp,bq){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(br){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bs){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bt,bu){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bv){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(bw){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bx,by){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bz,bA){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bB,bC){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bD,bE){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bD===o){var bF=this._getFirstSelectable();

if(bF){this._setSelectedItem(bF);
this._scrollItemIntoView(bF);
}}this._fireChange();
},handleMouseOver:function(event){if(this.__vM!=null&&this.__vM!=this._getScroll().top){this.__vM=null;
return;
}this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var bH=this.getMode();

if(bH!==o&&bH!==n){this._userInteraction=false;
return;
}var bG=this._getSelectableFromMouseEvent(event);

if(bG===null){this._userInteraction=false;
return;
}this._setSelectedItem(bG);
this._fireChange(x);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bJ=this._getSelectableFromMouseEvent(event);

if(bJ===null){this._userInteraction=false;
return;
}var bL=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bI=event.isShiftPressed();
if(this.isItemSelected(bJ)&&!bI&&!bL&&!this.getDrag()){this.__vL=bJ;
this._userInteraction=false;
return;
}else{this.__vL=null;
}this._scrollItemIntoView(bJ);
switch(this.getMode()){case n:case o:this._setSelectedItem(bJ);
break;
case k:this._setLeadItem(bJ);
this._setAnchorItem(bJ);
this._toggleInSelection(bJ);
break;
case j:this._setLeadItem(bJ);
if(bI){var bK=this._getAnchorItem();

if(bK===null){bK=this._getFirstSelectable();
this._setAnchorItem(bK);
}this._selectItemRange(bK,bJ,bL);
}else if(bL){this._setAnchorItem(bJ);
this._toggleInSelection(bJ);
}else{this._setAnchorItem(bJ);
this._setSelectedItem(bJ);
}break;
}var bM=this.getMode();

if(this.getDrag()&&bM!==n&&bM!==o&&!bI&&!bL){this.__vz=this._getLocation();
this.__vw=this._getScroll();
this.__vA=event.getDocumentLeft()+this.__vw.left;
this.__vB=event.getDocumentTop()+this.__vw.top;
this.__vC=true;
this._capture();
}this._fireChange(E);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var bQ=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bN=event.isShiftPressed();

if(!bQ&&!bN&&this.__vL){var bO=this._getSelectableFromMouseEvent(event);

if(bO===null||!this.isItemSelected(bO)){this._userInteraction=false;
return;
}var bP=this.getMode();

if(bP===k){this._removeFromSelection(bO);
}else{this._setSelectedItem(bO);

if(this.getMode()===j){this._setLeadItem(bO);
this._setAnchorItem(bO);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__vC){return;
}this.__vD=event.getDocumentLeft();
this.__vE=event.getDocumentTop();
this._userInteraction=true;
var bS=this.__vD+this.__vw.left;

if(bS>this.__vA){this.__vF=1;
}else if(bS<this.__vA){this.__vF=-1;
}else{this.__vF=0;
}var bR=this.__vE+this.__vw.top;

if(bR>this.__vB){this.__vG=1;
}else if(bR<this.__vB){this.__vG=-1;
}else{this.__vG=0;
}var location=this.__vz;

if(this.__vD<location.left){this.__vt=this.__vD-location.left;
}else if(this.__vD>location.right){this.__vt=this.__vD-location.right;
}else{this.__vt=0;
}
if(this.__vE<location.top){this.__vu=this.__vE-location.top;
}else if(this.__vE>location.bottom){this.__vu=this.__vE-location.bottom;
}else{this.__vu=0;
}if(!this.__vv){this.__vv=new qx.event.Timer(100);
this.__vv.addListener(s,this._onInterval,this);
}this.__vv.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var bT=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(bT);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__vC){return;
}if(this.__vH){this._fireChange(E);
}delete this.__vC;
delete this.__vx;
delete this.__vy;
this._releaseCapture();
if(this.__vv){this.__vv.stop();
}},_onInterval:function(e){this._scrollBy(this.__vt,this.__vu);
this.__vw=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cd=this._getDimension();
var bV=Math.max(0,Math.min(this.__vD-this.__vz.left,cd.width))+this.__vw.left;
var bU=Math.max(0,Math.min(this.__vE-this.__vz.top,cd.height))+this.__vw.top;
if(this.__vx===bV&&this.__vy===bU){return;
}this.__vx=bV;
this.__vy=bU;
var cf=this._getAnchorItem();
var bX=cf;
var cb=this.__vF;
var ce,bW;

while(cb!==0){ce=cb>0?this._getRelatedSelectable(bX,F):this._getRelatedSelectable(bX,v);
if(ce!==null){bW=this._getSelectableLocationX(ce);
if((cb>0&&bW.left<=bV)||(cb<0&&bW.right>=bV)){bX=ce;
continue;
}}break;
}var cc=this.__vG;
var ca,bY;

while(cc!==0){ca=cc>0?this._getRelatedSelectable(bX,g):this._getRelatedSelectable(bX,D);
if(ca!==null){bY=this._getSelectableLocationY(ca);
if((cc>0&&bY.top<=bU)||(cc<0&&bY.bottom>=bU)){bX=ca;
continue;
}}break;
}var cg=this.getMode();

if(cg===j){this._selectItemRange(cf,bX);
}else if(cg===k){if(this.isItemSelected(cf)){this._selectItemRange(cf,bX,true);
}else{this._deselectItemRange(cf,bX);
}this._setAnchorItem(bX);
}this._fireChange(z);
},__vN:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var cm,cl;
var co=event.getKeyIdentifier();
var cn=this.getMode();
var ci=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cj=event.isShiftPressed();
var ck=false;

if(co===t&&ci){if(cn!==n&&cn!==o){this._selectAllItems();
ck=true;
}}else if(co===w){if(cn!==n&&cn!==o){this._clearSelection();
ck=true;
}}else if(co===u){var ch=this.getLeadItem();

if(ch&&!cj){if(ci||cn===k){this._toggleInSelection(ch);
}else{this._setSelectedItem(ch);
}ck=true;
}}else if(this.__vN[co]){ck=true;

if(cn===n||cn==o){cm=this._getSelectedItem();
}else{cm=this.getLeadItem();
}
if(cm!==null){switch(co){case H:cl=this._getFirstSelectable();
break;
case I:cl=this._getLastSelectable();
break;
case M:cl=this._getRelatedSelectable(cm,D);
break;
case c:cl=this._getRelatedSelectable(cm,g);
break;
case f:cl=this._getRelatedSelectable(cm,v);
break;
case G:cl=this._getRelatedSelectable(cm,F);
break;
case h:cl=this._getPage(cm,true);
break;
case K:cl=this._getPage(cm,false);
break;
}}else{switch(co){case H:case c:case G:case K:cl=this._getFirstSelectable();
break;
case I:case M:case f:case h:cl=this._getLastSelectable();
break;
}}if(cl!==null){switch(cn){case n:case o:this._setSelectedItem(cl);
break;
case k:this._setLeadItem(cl);
break;
case j:if(cj){var cp=this._getAnchorItem();

if(cp===null){this._setAnchorItem(cp=this._getFirstSelectable());
}this._setLeadItem(cl);
this._selectItemRange(cp,cl,ci);
}else{this._setAnchorItem(cl);
this._setLeadItem(cl);

if(!ci){this._setSelectedItem(cl);
}}break;
}this.__vM=this._getScroll().top;
this._scrollItemIntoView(cl);
}}
if(ck){event.stop();
this._fireChange(y);
}this._userInteraction=false;
},_selectAllItems:function(){var cq=this.getSelectables();

for(var i=0,l=cq.length;i<l;i++){this._addToSelection(cq[i]);
}},_clearSelection:function(){var cr=this.__vs;

for(var cs in cr){this._removeFromSelection(cr[cs]);
}this.__vs={};
},_selectItemRange:function(ct,cu,cv){var cy=this._getSelectableRange(ct,cu);
if(!cv){var cx=this.__vs;
var cz=this.__vO(cy);

for(var cw in cx){if(!cz[cw]){this._removeFromSelection(cx[cw]);
}}}for(var i=0,l=cy.length;i<l;i++){this._addToSelection(cy[i]);
}},_deselectItemRange:function(cA,cB){var cC=this._getSelectableRange(cA,cB);

for(var i=0,l=cC.length;i<l;i++){this._removeFromSelection(cC[i]);
}},__vO:function(cD){var cF={};
var cE;

for(var i=0,l=cD.length;i<l;i++){cE=cD[i];
cF[this._selectableToHashCode(cE)]=cE;
}return cF;
},_getSelectedItem:function(){for(var cG in this.__vs){return this.__vs[cG];
}return null;
},_setSelectedItem:function(cH){if(this._isSelectable(cH)){var cI=this.__vs;
var cJ=this._selectableToHashCode(cH);

if(!cI[cJ]||qx.lang.Object.hasMinLength(cI,2)){this._clearSelection();
this._addToSelection(cH);
}}},_addToSelection:function(cK){var cL=this._selectableToHashCode(cK);

if(!this.__vs[cL]&&this._isSelectable(cK)){this.__vs[cL]=cK;
this._styleSelectable(cK,m,true);
this.__vH=true;
}},_toggleInSelection:function(cM){var cN=this._selectableToHashCode(cM);

if(!this.__vs[cN]){this.__vs[cN]=cM;
this._styleSelectable(cM,m,true);
}else{delete this.__vs[cN];
this._styleSelectable(cM,m,false);
}this.__vH=true;
},_removeFromSelection:function(cO){var cP=this._selectableToHashCode(cO);

if(this.__vs[cP]!=null){delete this.__vs[cP];
this._styleSelectable(cO,m,false);
this.__vH=true;
}},_replaceMultiSelection:function(cQ){var cT=false;
var cW,cV;
var cR={};

for(var i=0,l=cQ.length;i<l;i++){cW=cQ[i];

if(this._isSelectable(cW)){cV=this._selectableToHashCode(cW);
cR[cV]=cW;
}}var cX=cQ[0];
var cS=cW;
var cU=this.__vs;

for(var cV in cU){if(cR[cV]){delete cR[cV];
}else{cW=cU[cV];
delete cU[cV];
this._styleSelectable(cW,m,false);
cT=true;
}}for(var cV in cR){cW=cU[cV]=cR[cV];
this._styleSelectable(cW,m,true);
cT=true;
}if(!cT){return false;
}this._scrollItemIntoView(cS);
this._setLeadItem(cX);
this._setAnchorItem(cX);
this.__vH=true;
this._fireChange();
},_fireChange:function(cY){if(this.__vH){this.__vI=cY||null;
this.fireDataEvent(p,this.getSelection());
delete this.__vH;
}}},destruct:function(){this._disposeObjects(B);
this.__vs=this.__vL=this.__vK=null;
this.__vJ=null;
}});
})();
(function(){var f="vertical",e="under",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(g){qx.ui.core.selection.Abstract.call(this);
this.__vq=g;
},members:{__vq:null,_isSelectable:function(h){return this._isItemSelectable(h)&&h.getLayoutParent()===this.__vq;
},_selectableToHashCode:function(j){return j.$$hash;
},_styleSelectable:function(k,m,n){n?k.addState(m):k.removeState(m);
},_capture:function(){this.__vq.capture();
},_releaseCapture:function(){this.__vq.releaseCapture();
},_isItemSelectable:function(o){if(this._userInteraction){return o.isVisible()&&o.isEnabled();
}else{return o.isVisible();
}},_getWidget:function(){return this.__vq;
},_getLocation:function(){var p=this.__vq.getContentElement().getDomElement();
return p?qx.bom.element.Location.get(p):null;
},_getDimension:function(){return this.__vq.getInnerSize();
},_getSelectableLocationX:function(q){var r=q.getBounds();

if(r){return {left:r.left,right:r.left+r.width};
}},_getSelectableLocationY:function(s){var t=s.getBounds();

if(t){return {top:t.top,bottom:t.top+t.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(u,v){},_scrollItemIntoView:function(w){this.__vq.scrollChildIntoView(w);
},getSelectables:function(x){var y=false;

if(!x){y=this._userInteraction;
this._userInteraction=true;
}var B=this.__vq.getChildren();
var z=[];
var A;

for(var i=0,l=B.length;i<l;i++){A=B[i];

if(this._isItemSelectable(A)){z.push(A);
}}this._userInteraction=y;
return z;
},_getSelectableRange:function(C,D){if(C===D){return [C];
}var H=this.__vq.getChildren();
var E=[];
var G=false;
var F;

for(var i=0,l=H.length;i<l;i++){F=H[i];

if(F===C||F===D){if(G){E.push(F);
break;
}else{G=true;
}}
if(G&&this._isItemSelectable(F)){E.push(F);
}}return E;
},_getFirstSelectable:function(){var I=this.__vq.getChildren();

for(var i=0,l=I.length;i<l;i++){if(this._isItemSelectable(I[i])){return I[i];
}}return null;
},_getLastSelectable:function(){var J=this.__vq.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(K,L){var O=this.__vq.getOrientation()===f;
var N=this.__vq.getChildren();
var M=N.indexOf(K);
var P;

if((O&&L===d)||(!O&&L===b)){for(var i=M-1;i>=0;i--){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}else if((O&&L===e)||(!O&&L===a)){for(var i=M+1;i<N.length;i++){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}return null;
},_getPage:function(Q,R){if(R){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__vq=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(b){return this._isItemSelectable(b)&&b.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var c=this._getWidget();
return {left:c.getScrollX(),top:c.getScrollY()};
},_scrollBy:function(d,e){var f=this._getWidget();
f.scrollByX(d);
f.scrollByY(e);
},_getPage:function(g,h){var m=this.getSelectables();
var length=m.length;
var p=m.indexOf(g);
if(p===-1){throw new Error("Invalid lead item: "+g);
}var j=this._getWidget();
var r=j.getScrollY();
var innerHeight=j.getInnerSize().height;
var top,l,q;

if(h){var o=r;
var i=p;
while(1){for(;i>=0;i--){top=j.getItemTop(m[i]);
if(top<o){q=i+1;
break;
}}if(q==null){var s=this._getFirstSelectable();
return s==g?null:s;
}if(q>=p){o-=innerHeight+r-j.getItemBottom(g);
q=null;
continue;
}return m[q];
}}else{var n=innerHeight+r;
var i=p;
while(1){for(;i<length;i++){l=j.getItemBottom(m[i]);
if(l>n){q=i-1;
break;
}}if(q==null){var k=this._getLastSelectable();
return k==g?null:k;
}if(q<=p){n+=j.getItemTop(g)-r;
q=null;
continue;
}return m[q];
}}}}});
})();
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(f){var g=f.getBounds();

if(g){var top=this._getWidget().getItemTop(f);
return {top:top,bottom:top+g.height};
}},_isSelectable:function(h){return this._isItemSelectable(h)&&h instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(j){var m=false;

if(!j){m=this._userInteraction;
this._userInteraction=true;
}var l=this._getWidget();
var n=[];

if(l.getRoot()!=null){var k=l.getRoot().getItems(true,!!j,l.getHideRoot());

for(var i=0;i<k.length;i++){if(this._isSelectable(k[i])){n.push(k[i]);
}}}this._userInteraction=m;
return n;
},_getSelectableRange:function(o,p){if(o===p){return [o];
}var q=this.getSelectables();
var r=q.indexOf(o);
var s=q.indexOf(p);

if(r<0||s<0){return [];
}
if(r<s){return q.slice(r,s+1);
}else{return q.slice(s,r+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var t=this.getSelectables();

if(t.length>0){return t[t.length-1];
}else{return null;
}},_getRelatedSelectable:function(u,v){var w=this._getWidget();
var x=null;

switch(v){case d:x=w.getPreviousNodeOf(u,false);
break;
case b:x=w.getNextNodeOf(u,false);
break;
case c:case e:break;
}
if(!x){return null;
}
if(this._isSelectable(x)){return x;
}else{return this._getRelatedSelectable(x,v);
}}}});
})();
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="_applyOpenMode",c="Space",b="Left",a="Enter",z="changeOpenMode",y="_applyRootOpenClose",x="__eJ",w="changeSelection",v="qx.ui.tree.Tree",u="tree",t="_applyHideRoot",s="changeRoot",r="_applyRoot",q="keypress",o="none",p="pane",m="Right",n="qx.ui.tree.AbstractTreeItem";
qx.Class.define(v,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__eJ=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(p).add(this.__eJ);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(w,this._onChangeSelection,this);
this.addListener(q,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,o],init:l,apply:d,event:z,themeable:true},root:{check:n,init:null,nullable:true,event:s,apply:r},hideRoot:{check:j,init:false,apply:t},rootOpenClose:{check:j,init:false,apply:y},appearance:{refine:true,init:u},focusable:{refine:true,init:true}},members:{__eJ:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__eJ;
},_applyRoot:function(A,B){var C=this.getChildrenContainer();

if(B){C.remove(B);

if(B.hasChildren()){C.remove(B.getChildrenContainer());
}}
if(A){C.add(A);

if(A.hasChildren()){C.add(A.getChildrenContainer());
}A.setVisibility(this.getHideRoot()?h:g);
A.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(D,E){var F=this.getRoot();

if(!F){return;
}F.setVisibility(D?h:g);
F.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(G,H){var I=this.getRoot();

if(!I){return;
}I.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__eJ;
},getNextNodeOf:function(J,K){if((K!==false||J.isOpen())&&J.hasChildren()){return J.getChildren()[0];
}
while(J){var parent=J.getParent();

if(!parent){return null;
}var M=parent.getChildren();
var L=M.indexOf(J);

if(L>-1&&L<M.length-1){return M[L+1];
}J=parent;
}return null;
},getPreviousNodeOf:function(N,O){var parent=N.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==N){return null;
}}}else{if(N==this.getRoot()){return null;
}}var R=parent.getChildren();
var P=R.indexOf(N);

if(P>0){var Q=R[P-1];

while((O!==false||Q.isOpen())&&Q.hasChildren()){var S=Q.getChildren();
Q=S[S.length-1];
}return Q;
}else{return parent;
}},getNextSiblingOf:function(T){if(T==this.getRoot()){return null;
}var parent=T.getParent();
var U=parent.getChildren();
var V=U.indexOf(T);

if(V<U.length-1){return U[V+1];
}return null;
},getPreviousSiblingOf:function(W){if(W==this.getRoot()){return null;
}var parent=W.getParent();
var X=parent.getChildren();
var Y=X.indexOf(W);

if(Y>0){return X[Y-1];
}return null;
},getItems:function(ba,bb){if(this.getRoot()!=null){return this.getRoot().getItems(ba,bb,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(bc){while(bc){if(bc==this){return null;
}
if(bc instanceof qx.ui.tree.AbstractTreeItem){return bc;
}bc=bc.getLayoutParent();
}return null;
},_applyOpenMode:function(bd,be){if(be==k){this.removeListener(k,this._onOpen,this);
}else if(be==l){this.removeListener(l,this._onOpen,this);
}
if(bd==k){this.addListener(k,this._onOpen,this);
}else if(bd==l){this.addListener(l,this._onOpen,this);
}},_onOpen:function(e){var bf=this.getTreeItem(e.getTarget());

if(!bf||!bf.isOpenable()){return;
}bf.setOpen(!bf.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var bh=e.getData();
for(var i=0;i<bh.length;i++){var bg=bh[i];
while(bg.getParent()!=null){bg=bg.getParent();
bg.setOpen(true);
}}},_onKeyPress:function(e){var bi=this._getLeadItem();

if(bi!==null){switch(e.getKeyIdentifier()){case b:if(bi.isOpenable()&&bi.isOpen()){bi.setOpen(false);
}break;
case m:if(bi.isOpenable()&&!bi.isOpen()){bi.setOpen(true);
}break;
case a:case c:if(bi.isOpenable()){bi.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(x);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="qx.client",d="0",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="__uR",w="mousemove",v="_applyMaximum",u="_applyOrientation",t="appear",s="opera",r="PositiveInteger",q="mshtml",o="mouseup",p="Number",m="_applyPosition",n="scrollbar",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);

if(qx.core.Variant.isSet(f,s)){this.addListener(t,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[k,h],init:k,apply:u},maximum:{check:r,apply:v,init:100},position:{check:p,init:0,apply:m,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__uQ:null,__uR:null,_getScrollPaneElement:function(){if(!this.__uR){this.__uR=new qx.html.Element();
}return this.__uR;
},renderLayout:function(B,top,C,D){var E=qx.ui.core.Widget.prototype.renderLayout.call(this,B,top,C,D);
this._updateScrollBar();
return E;
},_getContentHint:function(){var F=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__uQ?100:F,maxWidth:this.__uQ?null:F,minWidth:this.__uQ?null:F,height:this.__uQ?F:100,maxHeight:this.__uQ?F:null,minHeight:this.__uQ?F:null};
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this._updateScrollBar();
},_applyMaximum:function(I){this._updateScrollBar();
},_applyPosition:function(J){var content=this.getContentElement();

if(this.__uQ){content.scrollToX(J);
}else{content.scrollToY(J);
}},_applyOrientation:function(K,L){var M=this.__uQ=K===k;
this.set({allowGrowX:M,allowShrinkX:M,allowGrowY:!M,allowShrinkY:!M});

if(M){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:M?i:c,overflowY:M?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var O=this.__uQ;
var P=this.getBounds();

if(!P){return;
}
if(this.isEnabled()){var Q=O?P.width:P.height;
var N=this.getMaximum()+Q;
}else{N=0;
}if(qx.core.Variant.isSet(f,q)){var P=this.getBounds();
this.getContentElement().setStyles({left:O?d:g,top:O?g:d,width:(O?P.width:P.width+1)+j,height:(O?P.height+1:P.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(O?N:1)+j,height:(O?1:N)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(S){this.scrollTo(this.getPosition()+S);
},scrollBySteps:function(T){var U=this.getSingleStep();
this.scrollBy(T*U);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__uQ?W.getScrollX():W.getScrollY();
this.setPosition(V);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(x);
}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="vertical",g="button-end",f="Integer",d="execute",c="right",b="left",a="down",z="up",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="PositiveInteger",p="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(s,this._onResizeSlider,this);
this._createChildControl(g);
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__uS:2,_createChildControlImpl:function(B,C){var D;

switch(B){case k:D=new qx.ui.core.scroll.ScrollSlider();
D.setPageStep(100);
D.setFocusable(false);
D.addListener(x,this._onChangeSliderValue,this);
this._add(D,{flex:1});
break;
case i:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteBegin,this);
this._add(D);
break;
case g:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteEnd,this);
this._add(D);
break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_applyMaximum:function(E){this.getChildControl(k).setMaximum(E);
},_applyPosition:function(F){this.getChildControl(k).setValue(F);
},_applyKnobFactor:function(G){this.getChildControl(k).setKnobFactor(G);
},_applyPageStep:function(H){this.getChildControl(k).setPageStep(H);
},_applyOrientation:function(I,J){var K=this._getLayout();

if(K){K.dispose();
}if(I===j){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(h,j);
this.getChildControl(i).replaceState(z,b);
this.getChildControl(g).replaceState(a,c);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(j,h);
this.getChildControl(i).replaceState(b,z);
this.getChildControl(g).replaceState(c,a);
}this.getChildControl(k).setOrientation(I);
},scrollTo:function(L){this.getChildControl(k).slideTo(L);
},scrollBy:function(M){this.getChildControl(k).slideBy(M);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.getChildControl(k).slideBy(N*O);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var P=this.getChildControl(k).getChildControl(u);
var S=P.getSizeHint();
var Q=false;
var R=this.getChildControl(k).getInnerSize();

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__uS){Q=true;
}}else{if(R.width<S.minWidth+this.__uS){Q=true;
}}
if(Q){P.exclude();
}else{P.show();
}}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="knob",j="horizontal",i="vertical",h="Integer",g="hovered",f="left",d="top",c="mouseup",b="pressed",a="px",V="changeValue",U="interval",T="mousemove",S="resize",R="slider",Q="mousedown",P="PageUp",O="mouseout",N='qx.event.type.Data',M="Left",r="Down",s="Up",p="dblclick",q="qx.ui.form.Slider",n="PageDown",o="mousewheel",l="_applyValue",m="_applyKnobFactor",t="End",u="height",B="Right",z="width",F="_applyOrientation",D="Home",I="mouseover",H="floor",w="_applyMinimum",L="click",K="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",J="keypress",v="ceil",x="losecapture",y="contextmenu",A="_applyMaximum",C="Number",E="changeMaximum",G="changeMinimum";
qx.Class.define(q,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(W){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(J,this._onKeyPress);
this.addListener(o,this._onMouseWheel);
this.addListener(Q,this._onMouseDown);
this.addListener(c,this._onMouseUp);
this.addListener(x,this._onMouseUp);
this.addListener(S,this._onUpdate);
this.addListener(y,this._onStopEvent);
this.addListener(L,this._onStopEvent);
this.addListener(p,this._onStopEvent);
if(W!=null){this.setOrientation(W);
}else{this.initOrientation();
}},events:{changeValue:N},properties:{appearance:{refine:true,init:R},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:F},value:{check:K,init:0,apply:l,nullable:true},minimum:{check:h,init:0,apply:w,event:G},maximum:{check:h,init:100,apply:A,event:E},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:C,apply:m,nullable:true}},members:{__uT:null,__uU:null,__uV:null,__uW:null,__uX:null,__uY:null,__va:null,__vb:null,__vc:null,__vd:null,__ve:null,__vf:null,_forwardStates:{invalid:true},_createChildControlImpl:function(X,Y){var ba;

switch(X){case k:ba=new qx.ui.core.Widget();
ba.addListener(S,this._onUpdate,this);
ba.addListener(I,this._onMouseOver);
ba.addListener(O,this._onMouseOut);
this._add(ba);
break;
}return ba||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,X);
},_onMouseOver:function(e){this.addState(g);
},_onMouseOut:function(e){this.removeState(g);
},_onMouseWheel:function(e){var bb=e.getWheelDelta()>0?1:-1;
this.slideBy(bb*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bd=this.getOrientation()===j;
var bc=bd?M:s;
var forward=bd?B:r;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bc:this.slideBack();
break;
case n:this.slidePageForward();
break;
case P:this.slidePageBack();
break;
case D:this.slideToBegin();
break;
case t:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__uW){return;
}var bg=this.__vh;
var be=this.getChildControl(k);
var bf=bg?f:d;
var bi=bg?e.getDocumentLeft():e.getDocumentTop();
var bj=this.__uT=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bf];
var bh=this.__uU=qx.bom.element.Location.get(be.getContainerElement().getDomElement())[bf];

if(e.getTarget()===be){this.__uW=true;

if(!this.__vd){this.__vd=new qx.event.Timer(100);
this.__vd.addListener(U,this._fireValue,this);
}this.__vd.start();
this.__uX=bi+bj-bh;
be.addState(b);
}else{this.__uY=true;
this.__va=bi<=bh?-1:1;
this.__vi(e);
this._onInterval();
if(!this.__vc){this.__vc=new qx.event.Timer(100);
this.__vc.addListener(U,this._onInterval,this);
}this.__vc.start();
}this.addListener(T,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__uW){this.releaseCapture();
delete this.__uW;
this.__vd.stop();
this._fireValue();
delete this.__uX;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bl;
var bm;
var bk;

if(this.__vh){bl=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__uT);
bk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bm=e.getDocumentTop()-(bk+this.getChildControl(k).getBounds().top);
}else{bl=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__uT);
bk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bm=e.getDocumentLeft()-(bk+this.getChildControl(k).getBounds().left);
}
if(bm<0||bm>this.__uV||bl<0||bl>this.__uV){this.getChildControl(k).removeState(g);
}}}else if(this.__uY){this.__vc.stop();
this.releaseCapture();
delete this.__uY;
delete this.__va;
delete this.__vb;
}this.removeListener(T,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__uW){var bo=this.__vh?e.getDocumentLeft():e.getDocumentTop();
var bn=bo-this.__uX;
this.slideTo(this._positionToValue(bn));
}else if(this.__uY){this.__vi(e);
}e.stopPropagation();
},_onInterval:function(e){var bp=this.getValue()+(this.__va*this.getPageStep());
if(bp<this.getMinimum()){bp=this.getMinimum();
}else if(bp>this.getMaximum()){bp=this.getMaximum();
}var bq=this.__va==-1;

if((bq&&bp<=this.__vb)||(!bq&&bp>=this.__vb)){bp=this.__vb;
}this.slideTo(bp);
},_onUpdate:function(e){var bs=this.getInnerSize();
var bt=this.getChildControl(k).getBounds();
var br=this.__vh?z:u;
this._updateKnobSize();
this.__vg=bs[br]-bt[br];
this.__uV=bt[br];
this._updateKnobPosition();
},__vh:false,__vg:0,__vi:function(e){var bu=this.__vh;
var bB=bu?e.getDocumentLeft():e.getDocumentTop();
var bD=this.__uT;
var bv=this.__uU;
var bF=this.__uV;
var bC=bB-bD;

if(bB>=bv){bC-=bF;
}var bz=this._positionToValue(bC);
var bw=this.getMinimum();
var bx=this.getMaximum();

if(bz<bw){bz=bw;
}else if(bz>bx){bz=bx;
}else{var bA=this.getValue();
var by=this.getPageStep();
var bE=this.__va<0?H:v;
bz=bA+(Math[bE]((bz-bA)/by)*by);
}if(this.__vb==null||(this.__va==-1&&bz<=this.__vb)||(this.__va==1&&bz>=this.__vb)){this.__vb=bz;
}},_positionToValue:function(bG){var bH=this.__vg;
if(bH==null||bH==0){return 0;
}var bJ=bG/bH;

if(bJ<0){bJ=0;
}else if(bJ>1){bJ=1;
}var bI=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bI*bJ);
},_valueToPosition:function(bK){var bL=this.__vg;

if(bL==null){return 0;
}var bM=this.getMaximum()-this.getMinimum();
if(bM==0){return 0;
}var bK=bK-this.getMinimum();
var bN=bK/bM;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}return Math.round(bL*bN);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bO){var bP=this.getChildControl(k).getContainerElement();

if(this.__vh){bP.setStyle(f,bO+a,true);
}else{bP.setStyle(d,bO+a,true);
}},_updateKnobSize:function(){var bR=this.getKnobFactor();

if(bR==null){return;
}var bQ=this.getInnerSize();

if(bQ==null){return;
}if(this.__vh){this.getChildControl(k).setWidth(Math.round(bR*bQ.width));
}else{this.getChildControl(k).setHeight(Math.round(bR*bQ.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bS){this.slideTo(this.getValue()+bS);
},slideTo:function(bT){if(bT<this.getMinimum()){bT=this.getMinimum();
}else if(bT>this.getMaximum()){bT=this.getMaximum();
}else{bT=this.getMinimum()+Math.round((bT-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bT);
},_applyOrientation:function(bU,bV){var bW=this.getChildControl(k);
this.__vh=bU===j;
if(this.__vh){this.removeState(i);
bW.removeState(i);
this.addState(j);
bW.addState(j);
bW.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(j);
bW.removeState(j);
this.addState(i);
bW.addState(i);
bW.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bX,bY){if(bX!=null){this._updateKnobSize();
}else{if(this.__vh){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ca,cb){if(ca!=null){this._updateKnobPosition();

if(this.__uW){this.__vf=[ca,cb];
}else{this.fireEvent(V,qx.event.type.Data,[ca,cb]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__vf){return;
}var cc=this.__vf;
this.__vf=null;
this.fireEvent(V,qx.event.type.Data,cc);
},_applyMinimum:function(cd,ce){if(this.getValue()<cd){this.setValue(cd);
}this._updateKnobPosition();
},_applyMaximum:function(cf,cg){if(this.getValue()>cf){this.setValue(cf);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var r="left",q="top",p="_applyLayoutChange",o="hAlign",n="flex",m="vAlign",h="Integer",g="minWidth",f="width",e="minHeight",b="qx.ui.layout.Grid",d="height",c="maxHeight",a="maxWidth";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(s,t){qx.ui.layout.Abstract.call(this);
this.__oK=[];
this.__oL=[];

if(s){this.setSpacingX(s);
}
if(t){this.setSpacingY(t);
}},properties:{spacingX:{check:h,init:0,apply:p},spacingY:{check:h,init:0,apply:p}},members:{__oM:null,__oK:null,__oL:null,__oN:null,__oO:null,__oP:null,__oQ:null,__oR:null,__oS:null,verifyLayoutProperty:null,__oT:function(){var B=[];
var A=[];
var C=[];
var w=-1;
var v=-1;
var E=this._getLayoutChildren();

for(var i=0,l=E.length;i<l;i++){var z=E[i];
var D=z.getLayoutProperties();
var F=D.row;
var u=D.column;
D.colSpan=D.colSpan||1;
D.rowSpan=D.rowSpan||1;
if(F==null||u==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+z+"' must be defined!");
}
if(B[F]&&B[F][u]){throw new Error("Cannot add widget '"+z+"'!. "+"There is already a widget '"+B[F][u]+"' in this cell ("+F+", "+u+")");
}
for(var x=u;x<u+D.colSpan;x++){for(var y=F;y<F+D.rowSpan;y++){if(B[y]==undefined){B[y]=[];
}B[y][x]=z;
v=Math.max(v,x);
w=Math.max(w,y);
}}
if(D.rowSpan>1){C.push(z);
}
if(D.colSpan>1){A.push(z);
}}for(var y=0;y<=w;y++){if(B[y]==undefined){B[y]=[];
}}this.__oM=B;
this.__oN=A;
this.__oO=C;
this.__oP=w;
this.__oQ=v;
this.__oR=null;
this.__oS=null;
delete this._invalidChildrenCache;
},_setRowData:function(G,H,I){var J=this.__oK[G];

if(!J){this.__oK[G]={};
this.__oK[G][H]=I;
}else{J[H]=I;
}},_setColumnData:function(K,L,M){var N=this.__oL[K];

if(!N){this.__oL[K]={};
this.__oL[K][L]=M;
}else{N[L]=M;
}},setSpacing:function(O){this.setSpacingY(O);
this.setSpacingX(O);
return this;
},setColumnAlign:function(P,Q,R){{};
this._setColumnData(P,o,Q);
this._setColumnData(P,m,R);
this._applyLayoutChange();
return this;
},getColumnAlign:function(S){var T=this.__oL[S]||{};
return {vAlign:T.vAlign||q,hAlign:T.hAlign||r};
},setRowAlign:function(U,V,W){{};
this._setRowData(U,o,V);
this._setRowData(U,m,W);
this._applyLayoutChange();
return this;
},getRowAlign:function(X){var Y=this.__oK[X]||{};
return {vAlign:Y.vAlign||q,hAlign:Y.hAlign||r};
},getCellWidget:function(ba,bb){if(this._invalidChildrenCache){this.__oT();
}var ba=this.__oM[ba]||{};
return ba[bb]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__oT();
}return this.__oP+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__oT();
}return this.__oQ+1;
},getCellAlign:function(bc,bd){var bj=q;
var bh=r;
var bi=this.__oK[bc];
var bf=this.__oL[bd];
var be=this.__oM[bc][bd];

if(be){var bg={vAlign:be.getAlignY(),hAlign:be.getAlignX()};
}else{bg={};
}if(bg.vAlign){bj=bg.vAlign;
}else if(bi&&bi.vAlign){bj=bi.vAlign;
}else if(bf&&bf.vAlign){bj=bf.vAlign;
}if(bg.hAlign){bh=bg.hAlign;
}else if(bf&&bf.hAlign){bh=bf.hAlign;
}else if(bi&&bi.hAlign){bh=bi.hAlign;
}return {vAlign:bj,hAlign:bh};
},setColumnFlex:function(bk,bl){this._setColumnData(bk,n,bl);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bm){var bn=this.__oL[bm]||{};
return bn.flex!==undefined?bn.flex:0;
},setRowFlex:function(bo,bp){this._setRowData(bo,n,bp);
this._applyLayoutChange();
return this;
},getRowFlex:function(bq){var br=this.__oK[bq]||{};
var bs=br.flex!==undefined?br.flex:0;
return bs;
},setColumnMaxWidth:function(bt,bu){this._setColumnData(bt,a,bu);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bv){var bw=this.__oL[bv]||{};
return bw.maxWidth!==undefined?bw.maxWidth:Infinity;
},setColumnWidth:function(bx,by){this._setColumnData(bx,f,by);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bz){var bA=this.__oL[bz]||{};
return bA.width!==undefined?bA.width:null;
},setColumnMinWidth:function(bB,bC){this._setColumnData(bB,g,bC);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bD){var bE=this.__oL[bD]||{};
return bE.minWidth||0;
},setRowMaxHeight:function(bF,bG){this._setRowData(bF,c,bG);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bH){var bI=this.__oK[bH]||{};
return bI.maxHeight||Infinity;
},setRowHeight:function(bJ,bK){this._setRowData(bJ,d,bK);
this._applyLayoutChange();
return this;
},getRowHeight:function(bL){var bM=this.__oK[bL]||{};
return bM.height!==undefined?bM.height:null;
},setRowMinHeight:function(bN,bO){this._setRowData(bN,e,bO);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bP){var bQ=this.__oK[bP]||{};
return bQ.minHeight||0;
},__oU:function(bR){var bV=bR.getSizeHint();
var bU=bR.getMarginLeft()+bR.getMarginRight();
var bT=bR.getMarginTop()+bR.getMarginBottom();
var bS={height:bV.height+bT,width:bV.width+bU,minHeight:bV.minHeight+bT,minWidth:bV.minWidth+bU,maxHeight:bV.maxHeight+bT,maxWidth:bV.maxWidth+bU};
return bS;
},_fixHeightsRowSpan:function(bW){var ck=this.getSpacingY();

for(var i=0,l=this.__oO.length;i<l;i++){var ca=this.__oO[i];
var cc=this.__oU(ca);
var cd=ca.getLayoutProperties();
var bY=cd.row;
var ci=ck*(cd.rowSpan-1);
var bX=ci;
var cf={};

for(var j=0;j<cd.rowSpan;j++){var cm=cd.row+j;
var cb=bW[cm];
var cl=this.getRowFlex(cm);

if(cl>0){cf[cm]={min:cb.minHeight,value:cb.height,max:cb.maxHeight,flex:cl};
}ci+=cb.height;
bX+=cb.minHeight;
}if(ci<cc.height){if(!qx.lang.Object.isEmpty(cf)){var cj=qx.ui.layout.Util.computeFlexOffsets(cf,cc.height,ci);

for(var k=0;k<cd.rowSpan;k++){var ce=cj[bY+k]?cj[bY+k].offset:0;
bW[bY+k].height+=ce;
}}else{var cg=ck*(cd.rowSpan-1);
var ch=cc.height-cg;
var cb=Math.floor(ch/cd.rowSpan);

for(var k=0;k<cd.rowSpan;k++){bW[bY+k].height=cb;
}}}if(bX<cc.minHeight){var cj=qx.ui.layout.Util.computeFlexOffsets(cf,cc.minHeight,bX);

for(var j=0;j<cd.rowSpan;j++){var ce=cj[bY+j]?cj[bY+j].offset:0;
bW[bY+j].minHeight+=ce;
}}}},_fixWidthsColSpan:function(cn){var cr=this.getSpacingX();

for(var i=0,l=this.__oN.length;i<l;i++){var co=this.__oN[i];
var cq=this.__oU(co);
var ct=co.getLayoutProperties();
var cp=ct.column;
var cz=cr*(ct.colSpan-1);
var cs=cz;
var cu={};
var cw;

for(var j=0;j<ct.colSpan;j++){var cA=ct.column+j;
var cy=cn[cA];
var cx=this.getColumnFlex(cA);
if(cx>0){cu[cA]={min:cy.minWidth,value:cy.width,max:cy.maxWidth,flex:cx};
}cz+=cy.width;
cs+=cy.minWidth;
}if(cz<cq.width){var cv=qx.ui.layout.Util.computeFlexOffsets(cu,cq.width,cz);

for(var j=0;j<ct.colSpan;j++){cw=cv[cp+j]?cv[cp+j].offset:0;
cn[cp+j].width+=cw;
}}if(cs<cq.minWidth){var cv=qx.ui.layout.Util.computeFlexOffsets(cu,cq.minWidth,cs);

for(var j=0;j<ct.colSpan;j++){cw=cv[cp+j]?cv[cp+j].offset:0;
cn[cp+j].minWidth+=cw;
}}}},_getRowHeights:function(){if(this.__oR!=null){return this.__oR;
}var cK=[];
var cD=this.__oP;
var cC=this.__oQ;

for(var cL=0;cL<=cD;cL++){var cE=0;
var cG=0;
var cF=0;

for(var cJ=0;cJ<=cC;cJ++){var cB=this.__oM[cL][cJ];

if(!cB){continue;
}var cH=cB.getLayoutProperties().rowSpan||0;

if(cH>1){continue;
}var cI=this.__oU(cB);

if(this.getRowFlex(cL)>0){cE=Math.max(cE,cI.minHeight);
}else{cE=Math.max(cE,cI.height);
}cG=Math.max(cG,cI.height);
}var cE=Math.max(cE,this.getRowMinHeight(cL));
var cF=this.getRowMaxHeight(cL);

if(this.getRowHeight(cL)!==null){var cG=this.getRowHeight(cL);
}else{var cG=Math.max(cE,Math.min(cG,cF));
}cK[cL]={minHeight:cE,height:cG,maxHeight:cF};
}
if(this.__oO.length>0){this._fixHeightsRowSpan(cK);
}this.__oR=cK;
return cK;
},_getColWidths:function(){if(this.__oS!=null){return this.__oS;
}var cQ=[];
var cN=this.__oQ;
var cP=this.__oP;

for(var cV=0;cV<=cN;cV++){var cT=0;
var cS=0;
var cO=Infinity;

for(var cW=0;cW<=cP;cW++){var cM=this.__oM[cW][cV];

if(!cM){continue;
}var cR=cM.getLayoutProperties().colSpan||0;

if(cR>1){continue;
}var cU=this.__oU(cM);

if(this.getColumnFlex(cV)>0){cS=Math.max(cS,cU.minWidth);
}else{cS=Math.max(cS,cU.width);
}cT=Math.max(cT,cU.width);
}var cS=Math.max(cS,this.getColumnMinWidth(cV));
var cO=this.getColumnMaxWidth(cV);

if(this.getColumnWidth(cV)!==null){var cT=this.getColumnWidth(cV);
}else{var cT=Math.max(cS,Math.min(cT,cO));
}cQ[cV]={minWidth:cS,width:cT,maxWidth:cO};
}
if(this.__oN.length>0){this._fixWidthsColSpan(cQ);
}this.__oS=cQ;
return cQ;
},_getColumnFlexOffsets:function(cX){var cY=this.getSizeHint();
var dd=cX-cY.width;

if(dd==0){return {};
}var db=this._getColWidths();
var da={};

for(var i=0,l=db.length;i<l;i++){var de=db[i];
var dc=this.getColumnFlex(i);

if((dc<=0)||(de.width==de.maxWidth&&dd>0)||(de.width==de.minWidth&&dd<0)){continue;
}da[i]={min:de.minWidth,value:de.width,max:de.maxWidth,flex:dc};
}return qx.ui.layout.Util.computeFlexOffsets(da,cX,cY.width);
},_getRowFlexOffsets:function(df){var dg=this.getSizeHint();
var dj=df-dg.height;

if(dj==0){return {};
}var dk=this._getRowHeights();
var dh={};

for(var i=0,l=dk.length;i<l;i++){var dl=dk[i];
var di=this.getRowFlex(i);

if((di<=0)||(dl.height==dl.maxHeight&&dj>0)||(dl.height==dl.minHeight&&dj<0)){continue;
}dh[i]={min:dl.minHeight,value:dl.height,max:dl.maxHeight,flex:di};
}return qx.ui.layout.Util.computeFlexOffsets(dh,df,dg.height);
},renderLayout:function(dm,dn){if(this._invalidChildrenCache){this.__oT();
}var dC=qx.ui.layout.Util;
var dq=this.getSpacingX();
var dw=this.getSpacingY();
var dH=this._getColWidths();
var dG=this._getColumnFlexOffsets(dm);
var dr=[];
var dJ=this.__oQ;
var dp=this.__oP;
var dI;

for(var dK=0;dK<=dJ;dK++){dI=dG[dK]?dG[dK].offset:0;
dr[dK]=dH[dK].width+dI;
}var dz=this._getRowHeights();
var dB=this._getRowFlexOffsets(dn);
var dQ=[];

for(var dx=0;dx<=dp;dx++){dI=dB[dx]?dB[dx].offset:0;
dQ[dx]=dz[dx].height+dI;
}var dR=0;

for(var dK=0;dK<=dJ;dK++){var top=0;

for(var dx=0;dx<=dp;dx++){var dE=this.__oM[dx][dK];
if(!dE){top+=dQ[dx]+dw;
continue;
}var ds=dE.getLayoutProperties();
if(ds.row!==dx||ds.column!==dK){top+=dQ[dx]+dw;
continue;
}var dP=dq*(ds.colSpan-1);

for(var i=0;i<ds.colSpan;i++){dP+=dr[dK+i];
}var dF=dw*(ds.rowSpan-1);

for(var i=0;i<ds.rowSpan;i++){dF+=dQ[dx+i];
}var dt=dE.getSizeHint();
var dN=dE.getMarginTop();
var dD=dE.getMarginLeft();
var dA=dE.getMarginBottom();
var dv=dE.getMarginRight();
var dy=Math.max(dt.minWidth,Math.min(dP-dD-dv,dt.maxWidth));
var dO=Math.max(dt.minHeight,Math.min(dF-dN-dA,dt.maxHeight));
var dL=this.getCellAlign(dx,dK);
var dM=dR+dC.computeHorizontalAlignOffset(dL.hAlign,dy,dP,dD,dv);
var du=top+dC.computeVerticalAlignOffset(dL.vAlign,dO,dF,dN,dA);
dE.renderLayout(dM,du,dy,dO);
top+=dQ[dx]+dw;
}dR+=dr[dK]+dq;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__oS=null;
this.__oR=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__oT();
}var dW=this._getColWidths();
var dY=0,ea=0;

for(var i=0,l=dW.length;i<l;i++){var eb=dW[i];

if(this.getColumnFlex(i)>0){dY+=eb.minWidth;
}else{dY+=eb.width;
}ea+=eb.width;
}var ec=this._getRowHeights();
var dU=0,dX=0;

for(var i=0,l=ec.length;i<l;i++){var ed=ec[i];

if(this.getRowFlex(i)>0){dU+=ed.minHeight;
}else{dU+=ed.height;
}dX+=ed.height;
}var dT=this.getSpacingX()*(dW.length-1);
var dS=this.getSpacingY()*(ec.length-1);
var dV={minWidth:dY+dT,width:ea+dT,minHeight:dU+dS,height:dX+dS};
return dV;
}},destruct:function(){this.__oM=this.__oK=this.__oL=this.__oN=this.__oO=this.__oS=this.__oR=null;
}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var m="open",k="icon",j="auto",h="middle",g="String",f="label",d="changeOpen",c="excluded",b="visible",a="opened",H="always",G="qx.ui.tree.AbstractTreeItem",F="_applyIconOpened",E="Boolean",D="__eO",C="__eK",B="Integer",A="_applyIndent",z="changeOpenSymbolMode",y="_applyOpenSymbolMode",t="resize",u="",r="removeItem",s="addItem",p="__eL",q="iconOpened",n="abstract",o="never",v="_applyIcon",w="_applyOpen",x="_applyLabel";
qx.Class.define(G,{extend:qx.ui.core.Widget,type:n,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__eK=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:E,init:false,event:d,apply:w},openSymbolMode:{check:[H,o,j],init:j,event:z,apply:y},indent:{check:B,init:19,apply:A,themeable:true},parent:{check:G,nullable:true},icon:{check:g,apply:v,nullable:true,themeable:true},iconOpened:{check:g,apply:F,nullable:true,themeable:true},label:{check:g,apply:x,init:u}},members:{__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(I,J){var K;

switch(I){case f:K=new qx.ui.basic.Label().set({alignY:h,value:this.getLabel()});
break;
case k:K=new qx.ui.basic.Image().set({alignY:h,source:this.getIcon()});
break;
case m:K=new qx.ui.tree.FolderOpenButton().set({alignY:h});
K.addListener(d,this._onChangeOpen,this);
K.addListener(t,this._updateIndent,this);
break;
}return K||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,I);
},getTree:function(){var M=this;

while(M.getParent()){M=M.getParent();
}var L=M.getLayoutParent()?M.getLayoutParent().getLayoutParent():0;

if(L&&L instanceof qx.ui.core.scroll.ScrollPane){return L.getLayoutParent();
}return null;
},addWidget:function(N,O){this._add(N,O);
},addSpacer:function(){if(!this.__eO){this.__eO=new qx.ui.core.Spacer();
}else{this._remove(this.__eO);
}this._add(this.__eO);
},addOpenButton:function(){this._add(this.getChildControl(m));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var P=this.getChildControl(k);

if(this.__eN){this._remove(P);
}this._add(P);
this.__eN=true;
},addLabel:function(Q){var R=this.getChildControl(f);

if(this.__eM){this._remove(R);
}
if(Q){this.setLabel(Q);
}else{R.setValue(this.getLabel());
}this._add(R);
this.__eM=true;
},addState:function(S){qx.ui.core.Widget.prototype.addState.call(this,S);
var U=this._getChildren();

for(var i=0,l=U.length;i<l;i++){var T=U[i];

if(T.addState){U[i].addState(S);
}}},removeState:function(V){qx.ui.core.Widget.prototype.removeState.call(this,V);
var X=this._getChildren();

for(var i=0,l=X.length;i<l;i++){var W=X[i];

if(W.addState){X[i].removeState(V);
}}},_applyIcon:function(Y,ba){if(!this.__eR()){this.__eS(Y);
}else if(!this.isOpen()){this.__eS(Y);
}},_applyIconOpened:function(bb,bc){if(this.isOpen()){if(this.__eQ()&&this.__eR()){this.__eS(bb);
}else if(!this.__eQ()&&this.__eR()){this.__eS(bb);
}}},_applyLabel:function(bd,be){var bf=this.getChildControl(f,true);

if(bf){bf.setValue(bd);
}},_applyOpen:function(bg,bh){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bg?b:c);
}var open=this.getChildControl(m,true);

if(open){open.setOpen(bg);
}var bi;
if(bg){bi=this.__eR()?this.getIconOpened():null;
}else{bi=this.getIcon();
}
if(bi){this.__eS(bi);
}bg?this.addState(a):this.removeState(a);
},__eQ:function(){return qx.util.PropertyUtil.getUserValue(this,k);
},__eR:function(){return qx.util.PropertyUtil.getUserValue(this,q);
},__eS:function(bj){var bk=this.getChildControl(k,true);

if(bk){bk.setSource(bj);
}},isOpenable:function(){var bl=this.getOpenSymbolMode();
return (bl===H||bl===j&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(m,true);

if(!open){return false;
}var bm=this.getTree();

if(!bm.getRootOpenClose()){if(bm.getHideRoot()){if(bm.getRoot()==this.getParent()){return false;
}}else{if(bm.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bn,bo){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bq=0;
var open=this.getChildControl(m,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bp=open.getBounds();

if(bp){bq=bp.width;
}else{return;
}}else{open.exclude();
}}
if(this.__eO){this.__eO.setWidth((this.getLevel()+1)*this.getIndent()-bq);
}},_applyIndent:function(br,bs){this._updateIndent();
},getLevel:function(){var bt=this.getTree();

if(!bt){return;
}var bu=this;
var bv=-1;

while(bu){bu=bu.getParent();
bv+=1;
}if(bt.getHideRoot()){bv-=1;
}
if(!bt.getRootOpenClose()){bv-=1;
}return bv;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__eL){this.__eL=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?b:c});
}return this.__eL;
},hasChildrenContainer:function(){return this.__eL;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__eK;
},hasChildren:function(){return this.__eK?this.__eK.length>0:false;
},getItems:function(bw,bx,by){if(by!==false){var bz=[];
}else{var bz=[this];
}var bC=this.hasChildren()&&(bx!==false||this.isOpen());

if(bC){var bB=this.getChildren();

if(bw===false){bz=bz.concat(bB);
}else{for(var i=0,bA=bB.length;i<bA;i++){bz=bz.concat(bB[i].getItems(bw,bx,false));
}}}return bz;
},recursiveAddToWidgetQueue:function(){var bD=this.getItems(true,true,false);

for(var i=0,l=bD.length;i<l;i++){qx.ui.core.queue.Widget.add(bD[i]);
}},__eT:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bE){var bF=this.getChildrenContainer();
var bI=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bJ=arguments[i];
var bH=bJ.getParent();

if(bH){bH.remove(bJ);
}bJ.setParent(this);
var bG=this.hasChildren();
bF.add(bJ);

if(bJ.hasChildren()){bF.add(bJ.getChildrenContainer());
}this.__eK.push(bJ);

if(!bG){this.__eT();
}
if(bI){bJ.recursiveAddToWidgetQueue();
bI.fireNonBubblingEvent(s,qx.event.type.Data,[bJ]);
}}
if(bI){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bK,bL){{};

if(bL==this.__eK.length){this.add(bK);
return;
}var bP=bK.getParent();

if(bP){bP.remove(bK);
}var bN=this.getChildrenContainer();
bK.setParent(this);
var bO=this.hasChildren();
var bM=this.__eK[bL];
bN.addBefore(bK,bM);

if(bK.hasChildren()){bN.addAfter(bK.getChildrenContainer(),bK);
}qx.lang.Array.insertAt(this.__eK,bK,bL);

if(!bO){this.__eT();
}
if(this.getTree()){bK.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bQ,bR){{};
var bS=bQ.getParent();

if(bS){bS.remove(bQ);
}this.addAt(bQ,this.__eK.indexOf(bR));
},addAfter:function(bT,bU){{};
var bV=bT.getParent();

if(bV){bV.remove(bT);
}this.addAt(bT,this.__eK.indexOf(bU)+1);
},addAtBegin:function(bW){this.addAt(bW,0);
},remove:function(bX){for(var i=0,l=arguments.length;i<l;i++){var cc=arguments[i];

if(this.__eK.indexOf(cc)==-1){this.warn("Cannot remove treeitem '"+cc+"'. It is not a child of this tree item.");
return;
}var bY=this.getChildrenContainer();

if(cc.hasChildrenContainer()){var cb=cc.getChildrenContainer();

if(bY.getChildren().indexOf(cb)>=0){bY.remove(cb);
}}qx.lang.Array.remove(this.__eK,cc);
cc.setParent(null);
bY.remove(cc);
}var ca=this.getTree();

if(ca){ca.fireNonBubblingEvent(r,qx.event.type.Data,[cc]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(cd){var ce=this.__eK[cd];

if(ce){this.remove(ce);
}},removeAll:function(){for(var i=this.__eK.length-1;i>=0;i--){this.remove(this.__eK[i]);
}}},destruct:function(){this._disposeArray(C);
this._disposeObjects(D,p);
}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){qx.ui.basic.Image.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(a,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:g,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var d="$$theme_",c="$$user_",b="$$init_",a="qx.util.PropertyUtil";
qx.Class.define(a,{statics:{getProperties:function(e){return e.$$properties;
},getAllProperties:function(f){var i={};
var j=f;
while(j!=qx.core.Object){var h=this.getProperties(j);

for(var g in h){i[g]=h[g];
}j=j.superclass;
}return i;
},getUserValue:function(k,l){return k[c+l];
},setUserValue:function(m,n,o){m[c+n]=o;
},deleteUserValue:function(p,q){delete (p[c+q]);
},getInitValue:function(r,s){return r[b+s];
},setInitValue:function(t,u,v){t[b+u]=v;
},deleteInitValue:function(w,x){delete (w[b+x]);
},getThemeValue:function(y,z){return y[d+z];
},setThemeValue:function(A,B,C){A[d+B]=C;
},deleteThemeValue:function(D,E){delete (D[d+E]);
},setThemed:function(F,G,H){var I=qx.core.Property.$$method.setThemed;
F[I[G]](H);
},resetThemed:function(J,K){var L=qx.core.Property.$$method.resetThemed;
J[L[K]]();
}}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="PUT",H="no-cache",G="Cache-Control",r="Content-Type",s="text/plain",p="application/xml",q="application/json",n="text/html",o="application/x-www-form-urlencoded",l="qx.io.remote.Exchange",m="Integer",t="X-Qooxdoo-Response-Type",u="HEAD",y="qx.io.remote.Request",x="_applyResponseType",A="_applyState",z="text/javascript",C="changeState",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(y,{extend:qx.core.Object,construct:function(Q,R,S){qx.core.Object.call(this);
this.__ee={};
this.__ef={};
this.__eg={};
this.__eh={};

if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this.__ei=++qx.io.remote.Request.__ei;
},events:{"created":j,"configured":j,"sending":j,"receiving":j,"completed":P,"aborted":j,"failed":P,"timeout":P},statics:{__ei:0,methodAllowsRequestBody:function(T){return (T==O)||(T==I);
}},properties:{url:{check:h,init:w},method:{check:[L,O,I,u,E],apply:F,init:L},asynchronous:{check:k,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:A,event:C},responseType:{check:[s,z,q,p,n],init:s,apply:x},timeout:{check:m,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:k,init:false},fileUpload:{check:k,init:false},transport:{check:l,nullable:true},useBasicHttpAuth:{check:k,init:false},parseJson:{check:k,init:true}},members:{__ee:null,__ef:null,__eg:null,__eh:null,__ei:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case g:case f:this.error("Aborting already sent request!");
case i:this.abort();
break;
}},isConfigured:function(){return this.getState()===N;
},isQueued:function(){return this.getState()===i;
},isSending:function(){return this.getState()===g;
},isReceiving:function(){return this.getState()===f;
},isCompleted:function(){return this.getState()===a;
},isAborted:function(){return this.getState()===d;
},isTimeout:function(){return this.getState()===M;
},isFailed:function(){return this.getState()===c;
},__ej:qx.event.GlobalError.observeMethod(function(e){var U=e.clone();
U.setTarget(this);
this.dispatchEvent(U);
}),_onqueued:function(e){this.setState(i);
this.__ej(e);
},_onsending:function(e){this.setState(g);
this.__ej(e);
},_onreceiving:function(e){this.setState(f);
this.__ej(e);
},_oncompleted:function(e){this.setState(a);
this.__ej(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__ej(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__ej(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__ej(e);
this.dispose();
},_applyState:function(V,W){{};
},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(b);
this.removeRequestHeader(K);
this.removeRequestHeader(G);
return;
}if(X!==J||this.getMethod()!=O){this.setParameter(b,new Date().valueOf());
}else{this.removeParameter(b);
}this.setRequestHeader(K,H);
this.setRequestHeader(G,H);
},_applyMethod:function(ba,bb){if(qx.io.remote.Request.methodAllowsRequestBody(ba)){this.setRequestHeader(r,o);
}else{this.removeRequestHeader(r);
}var bc=this.getProhibitCaching();
this._applyProhibitCaching(bc,bc);
},_applyResponseType:function(bd,be){this.setRequestHeader(t,bd);
},setRequestHeader:function(bf,bg){this.__ee[bf]=bg;
},removeRequestHeader:function(bh){delete this.__ee[bh];
},getRequestHeader:function(bi){return this.__ee[bi]||null;
},getRequestHeaders:function(){return this.__ee;
},setParameter:function(bj,bk,bl){if(bl){this.__eg[bj]=bk;
}else{this.__ef[bj]=bk;
}},removeParameter:function(bm,bn){if(bn){delete this.__eg[bm];
}else{delete this.__ef[bm];
}},getParameter:function(bo,bp){if(bp){return this.__eg[bo]||null;
}else{return this.__ef[bo]||null;
}},getParameters:function(bq){return (bq?this.__eg:this.__ef);
},setFormField:function(br,bs){this.__eh[br]=bs;
},removeFormField:function(bt){delete this.__eh[bt];
},getFormField:function(bu){return this.__eh[bu]||null;
},getFormFields:function(){return this.__eh;
},getSequenceNumber:function(){return this.__ei;
}},destruct:function(){this.setTransport(null);
this.__ee=this.__ef=this.__eg=this.__eh=null;
}});
})();
(function(){var b=".",a="qx.bom.client.Transport";
qx.Class.define(a,{statics:{getMaxConcurrentRequestCount:function(){var h;
var c=qx.bom.client.Engine;
var g=c.FULLVERSION.split(b);
var e=0;
var d=0;
var f=0;
if(g[0]){e=g[0];
}if(g[1]){d=g[1];
}if(g[2]){f=g[2];
}if(window.maxConnectionsPerServer){h=window.maxConnectionsPerServer;
}else if(c.OPERA){h=8;
}else if(c.WEBKIT){h=4;
}else if(c.GECKO&&((e>1)||((e==1)&&(d>9))||((e==1)&&(d==9)&&(f>=1)))){h=6;
}else{h=2;
}return h;
}}});
})();
(function(){var s="Integer",r="aborted",q="_onaborted",p="_on",o="_applyEnabled",n="Boolean",m="sending",l="interval",k="__dT",j="failed",c="qx.io.remote.RequestQueue",h="timeout",g="completed",b="queued",a="__dV",f="receiving",d="singleton";
qx.Class.define(c,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__dS=[];
this.__dT=[];
this.__dU=0;
this.__dV=new qx.event.Timer(500);
this.__dV.addListener(l,this._oninterval,this);
},properties:{enabled:{init:true,check:n,apply:o},maxTotalRequests:{check:s,nullable:true},maxConcurrentRequests:{check:s,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:s,init:5000}},members:{__dS:null,__dT:null,__dU:null,__dV:null,getRequestQueue:function(){return this.__dS;
},getActiveQueue:function(){return this.__dT;
},_debug:function(){var t;
{};
},_check:function(){this._debug();
if(this.__dT.length==0&&this.__dS.length==0){this.__dV.stop();
}if(!this.getEnabled()){return;
}if(this.__dS.length==0||(this.__dS[0].isAsynchronous()&&this.__dT.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__dU>=this.getMaxTotalRequests()){return;
}var u=this.__dS.shift();
var v=new qx.io.remote.Exchange(u);
this.__dU++;
this.__dT.push(v);
this._debug();
v.addListener(m,this._onsending,this);
v.addListener(f,this._onreceiving,this);
v.addListener(g,this._oncompleted,this);
v.addListener(r,this._oncompleted,this);
v.addListener(h,this._oncompleted,this);
v.addListener(j,this._oncompleted,this);
v._start=(new Date).valueOf();
v.send();
if(this.__dS.length>0){this._check();
}},_remove:function(w){qx.lang.Array.remove(this.__dT,w);
w.dispose();
this._check();
},__dW:0,_onsending:function(e){{};
e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){{};
var y=e.getTarget().getRequest();
var x=p+e.getType();
try{if(y[x]){y[x](e);
}}catch(z){this.error("Request "+y+" handler "+x+" threw an error: ",z);
try{if(y[q]){var event=qx.event.Registration.createEvent(r,qx.event.type.Event);
y[q](event);
}}catch(A){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var H=this.__dT;

if(H.length==0){this.__dV.stop();
return;
}var C=(new Date).valueOf();
var F;
var D;
var G=this.getDefaultTimeout();
var E;
var B;

for(var i=H.length-1;i>=0;i--){F=H[i];
D=F.getRequest();

if(D.isAsynchronous()){E=D.getTimeout();
if(E==0){continue;
}
if(E==null){E=G;
}B=C-F._start;

if(B>E){this.warn("Timeout: transport "+F.toHashCode());
this.warn(B+"ms > "+E+"ms");
F.timeout();
}}}},_applyEnabled:function(I,J){if(I){this._check();
}this.__dV.setEnabled(I);
},add:function(K){K.setState(b);

if(K.isAsynchronous()){this.__dS.push(K);
}else{this.__dS.unshift(K);
}this._check();

if(this.getEnabled()){this.__dV.start();
}},abort:function(L){var M=L.getTransport();

if(M){M.abort();
}else if(qx.lang.Array.contains(this.__dS,L)){qx.lang.Array.remove(this.__dS,L);
}}},destruct:function(){this._disposeArray(k);
this._disposeObjects(a);
this.__dS=null;
}});
})();
(function(){var o="failed",n="sending",m="completed",k="receiving",j="aborted",h="timeout",g="qx.event.type.Event",f="Connection dropped",d="qx.io.remote.Response",c="=",bp="configured",bo="&",bn="Unknown status code. ",bm="qx.io.remote.transport.XmlHttp",bl="qx.io.remote.transport.Abstract",bk="Request-URL too large",bj="MSHTML-specific HTTP status code",bi="Not available",bh="Precondition failed",bg="Server error",v="Moved temporarily",w="qx.io.remote.Exchange",t="Possibly due to a cross-domain request?",u="Bad gateway",r="Gone",s="See other",p="Partial content",q="Server timeout",B="qx.io.remote.transport.Script",C="HTTP version not supported",L="Unauthorized",I="Possibly due to application URL using 'file:' protocol?",T="Multiple choices",O="Payment required",bc="Not implemented",Y="Proxy authentication required",E="Length required",bf="_applyState",be="changeState",bd="Not modified",D="qx.io.remote.Request",G="Connection closed by server",H="Moved permanently",K="_applyImplementation",M="",P="Method not allowed",V="Forbidden",bb="Use proxy",x="Ok",y="Conflict",F="Not found",S="Not acceptable",R="Request time-out",Q="Bad request",X="No content",W="file:",N="qx.io.remote.transport.Iframe",U="Request entity too large",a="Unknown status code",ba="Unsupported media type",z="Gateway time-out",A="created",J="Out of resources",b="undefined";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bq){qx.core.Object.call(this);
this.setRequest(bq);
bq.setTransport(this);
},events:{"sending":g,"receiving":g,"completed":d,"aborted":g,"failed":d,"timeout":d},statics:{typesOrder:[bm,N,B],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(br,bs){qx.io.remote.Exchange.typesAvailable[bs]=br;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bu in qx.io.remote.Exchange.typesAvailable){var bt=qx.io.remote.Exchange.typesAvailable[bu];

if(bt.isSupported()){qx.io.remote.Exchange.typesSupported[bu]=bt;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bv,bw,bx){if(!qx.lang.Array.contains(bv.handles.responseTypes,bx)){return false;
}
for(var by in bw){if(!bv.handles[by]){return false;
}}return true;
},_nativeMap:{0:A,1:bp,2:n,3:k,4:m},wasSuccessful:function(bz,bA,bB){if(bB){switch(bz){case null:case 0:return true;
case -1:return bA<4;
default:return typeof bz===b;
}}else{switch(bz){case -1:{};
return bA<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bA!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bz>206&&bz<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bz+" ("+bA+")");
return false;
}}},statusCodeToString:function(bC){switch(bC){case -1:return bi;
case 0:var bD=window.location.href;
if(qx.lang.String.startsWith(bD.toLowerCase(),W)){return (bn+I);
}else{return (bn+t);
}break;
case 200:return x;
case 304:return bd;
case 206:return p;
case 204:return X;
case 300:return T;
case 301:return H;
case 302:return v;
case 303:return s;
case 305:return bb;
case 400:return Q;
case 401:return L;
case 402:return O;
case 403:return V;
case 404:return F;
case 405:return P;
case 406:return S;
case 407:return Y;
case 408:return R;
case 409:return y;
case 410:return r;
case 411:return E;
case 412:return bh;
case 413:return U;
case 414:return bk;
case 415:return ba;
case 500:return bg;
case 501:return bc;
case 502:return u;
case 503:return J;
case 504:return z;
case 505:return C;
case 12002:return q;
case 12029:return f;
case 12030:return f;
case 12031:return f;
case 12152:return G;
case 13030:return bj;
default:return a;
}}},properties:{request:{check:D,nullable:true},implementation:{check:bl,nullable:true,apply:K},state:{check:[bp,n,k,m,j,h,o],init:bp,event:be,apply:bf}},members:{send:function(){var bH=this.getRequest();

if(!bH){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bF=qx.io.remote.Exchange.typesOrder;
var bE=qx.io.remote.Exchange.typesSupported;
var bJ=bH.getResponseType();
var bK={};

if(bH.getAsynchronous()){bK.asynchronous=true;
}else{bK.synchronous=true;
}
if(bH.getCrossDomain()){bK.crossDomain=true;
}
if(bH.getFileUpload()){bK.fileUpload=true;
}for(var bI in bH.getFormFields()){bK.programaticFormFields=true;
break;
}var bL,bG;

for(var i=0,l=bF.length;i<l;i++){bL=bE[bF[i]];

if(bL){if(!qx.io.remote.Exchange.canHandle(bL,bK,bJ)){continue;
}
try{{};
bG=new bL;
this.setImplementation(bG);
bG.setUseBasicHttpAuth(bH.getUseBasicHttpAuth());
bG.send();
return true;
}catch(bM){this.error("Request handler throws error");
this.error(bM);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bH);
},abort:function(){var bN=this.getImplementation();

if(bN){{};
bN.abort();
}else{{};
this.setState(j);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){var bP=M;

for(var bO in bQ.getParameters()){bP+=bo+bO+c+bQ.getParameters()[bO];
}this.warn("Timeout: implementation "+bQ.toHashCode()+", "+bQ.getUrl()+" ["+bQ.getMethod()+"], "+bP);
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(h);
}this.__ds();
},__ds:function(){var bR=this.getRequest();

if(bR){bR.setTimeout(0);
}},_onsending:function(e){this.setState(n);
},_onreceiving:function(e){this.setState(k);
},_oncompleted:function(e){this.setState(m);
},_onabort:function(e){this.setState(j);
},_onfailed:function(e){this.setState(o);
},_ontimeout:function(e){this.setState(h);
},_applyImplementation:function(bS,bT){if(bT){bT.removeListener(n,this._onsending,this);
bT.removeListener(k,this._onreceiving,this);
bT.removeListener(m,this._oncompleted,this);
bT.removeListener(j,this._onabort,this);
bT.removeListener(h,this._ontimeout,this);
bT.removeListener(o,this._onfailed,this);
}
if(bS){var bV=this.getRequest();
bS.setUrl(bV.getUrl());
bS.setMethod(bV.getMethod());
bS.setAsynchronous(bV.getAsynchronous());
bS.setUsername(bV.getUsername());
bS.setPassword(bV.getPassword());
bS.setParameters(bV.getParameters(false));
bS.setFormFields(bV.getFormFields());
bS.setRequestHeaders(bV.getRequestHeaders());
if(bS instanceof qx.io.remote.transport.XmlHttp){bS.setParseJson(bV.getParseJson());
}var bY=bV.getData();

if(bY===null){var ca=bV.getParameters(true);
var bX=[];

for(var bU in ca){var bW=ca[bU];

if(bW instanceof Array){for(var i=0;i<bW.length;i++){bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW[i]));
}}else{bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW));
}}
if(bX.length>0){bS.setData(bX.join(bo));
}}else{bS.setData(bY);
}bS.setResponseType(bV.getResponseType());
bS.addListener(n,this._onsending,this);
bS.addListener(k,this._onreceiving,this);
bS.addListener(m,this._oncompleted,this);
bS.addListener(j,this._onabort,this);
bS.addListener(h,this._ontimeout,this);
bS.addListener(o,this._onfailed,this);
}},_applyState:function(cb,cc){{};

switch(cb){case n:this.fireEvent(n);
break;
case k:this.fireEvent(k);
break;
case m:case j:case h:case o:var ce=this.getImplementation();

if(!ce){break;
}this.__ds();

if(this.hasListener(cb)){var cf=qx.event.Registration.createEvent(cb,qx.io.remote.Response);

if(cb==m){var cd=ce.getResponseContent();
cf.setContent(cd);
if(cd===null){{};
cb=o;
}}else if(cb==o){cf.setContent(ce.getResponseContent());
}cf.setStatusCode(ce.getStatusCode());
cf.setResponseHeaders(ce.getResponseHeaders());
this.dispatchEvent(cf);
}this.setImplementation(null);
ce.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var cg=this.getImplementation();

if(cg){this.setImplementation(null);
cg.dispose();
}this.setRequest(null);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){{};
this.setState(l);
},timeout:function(){{};
this.setState(n);
},failed:function(){{};
this.setState(o);
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){{};

switch(u){case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case k:this.fireEvent(k);
break;
case i:this.fireEvent(i);
break;
case h:this.fireEvent(h);
break;
case l:this.fireEvent(l);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var l="=",k="",j="&",h="application/xml",g="application/json",f="text/html",d="qx.client",c="textarea",b="_data_",a="load",G="text/plain",F="text/javascript",E="completed",D="readystatechange",C="?",B="qx.io.remote.transport.Iframe",A="none",z="display",y="gecko",x="frame_",s="aborted",t="pre",q="javascript:void(0)",r="sending",o="form",p="failed",m="mshtml",n="form_",u="opera",v="timeout",w="qx/static/blank.gif";
qx.Class.define(B,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var H=(new Date).valueOf();
var I=x+H;
var J=n+H;
var K;

if(qx.core.Variant.isSet(d,m)){K=q;
}this.__dv=qx.bom.Iframe.create({id:I,name:I,src:K});
qx.bom.element.Style.set(this.__dv,z,A);
this.__dw=qx.bom.Element.create(o,{id:J,name:J,target:I});
qx.bom.element.Style.set(this.__dw,z,A);
qx.dom.Element.insertEnd(this.__dw,qx.dom.Node.getBodyElement(document));
this.__dx=qx.bom.Element.create(c,{id:b,name:b});
qx.dom.Element.insertEnd(this.__dx,this.__dw);
qx.dom.Element.insertEnd(this.__dv,qx.dom.Node.getBodyElement(document));
qx.event.Registration.addListener(this.__dv,a,this._onload,this);
this.__dy=qx.lang.Function.listener(this._onreadystatechange,this);
qx.bom.Event.addNativeListener(this.__dv,D,this.__dy);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[G,F,g,h,f]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__dx:null,__dz:0,__dw:null,__dv:null,__dy:null,send:function(){var M=this.getMethod();
var O=this.getUrl();
var S=this.getParameters(false);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){O+=(O.indexOf(C)>=0?j:C)+R.join(j);
}if(this.getData()===null){var S=this.getParameters(true);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){this.setData(R.join(j));
}}var L=this.getFormFields();

for(var N in L){var Q=document.createElement(c);
Q.name=N;
Q.appendChild(document.createTextNode(L[N]));
this.__dw.appendChild(Q);
}this.__dw.action=O;
this.__dw.method=M;
this.__dx.appendChild(document.createTextNode(this.getData()));
this.__dw.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(qx.bom.client.Engine.NAME==u&&this.getIframeHtmlContent()==k){return;
}
if(this.__dw.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__dv.readyState]);
}),_switchReadyState:function(T){switch(this.getState()){case E:case s:case p:case v:this.warn("Ignore Ready State Change");
return;
}while(this.__dz<T){this.setState(qx.io.remote.Exchange._nativeMap[++this.__dz]);
}},setRequestHeader:function(U,V){},getResponseHeader:function(W){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__dv);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__dv);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__dv);
},getIframeTextContent:function(){var X=this.getIframeBody();

if(!X){return null;
}
if(!X.firstChild){return k;
}if(X.firstChild.tagName&&X.firstChild.tagName.toLowerCase()==t){return X.firstChild.innerHTML;
}else{return X.innerHTML;
}},getIframeHtmlContent:function(){var Y=this.getIframeBody();
return Y?Y.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==E){{};
return null;
}{};
var ba=this.getIframeTextContent();

switch(this.getResponseType()){case G:{};
return ba;
break;
case f:ba=this.getIframeHtmlContent();
{};
return ba;
break;
case g:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?qx.util.Json.parse(ba,false):null;
}catch(bb){return this.error("Could not execute json: ("+ba+")",bb);
}case F:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?window.eval(ba):null;
}catch(bc){return this.error("Could not execute javascript: ("+ba+")",bc);
}case h:ba=this.getIframeDocument();
{};
return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,B);
},destruct:function(){if(this.__dv){qx.event.Registration.removeListener(this.__dv,a,this._onload,this);
qx.bom.Event.removeNativeListener(this.__dv,D,this.__dy);
if(qx.core.Variant.isSet(d,y)){this.__dv.src=qx.util.ResourceManager.getInstance().toUri(w);
}qx.dom.Element.remove(this.__dv);
}
if(this.__dw){qx.dom.Element.remove(this.__dw);
}this.__dv=this.__dw=this.__dx=null;
}});
})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(d){qx.event.Registration.fireEvent(d,b);
})},members:{canHandleEvent:function(e,f){return e.tagName.toLowerCase()===a;
},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){}},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var e="qx.client",d="webkit",c="body",b="iframe",a="qx.bom.Iframe";
qx.Class.define(a,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(f,g){var f=f?qx.lang.Object.clone(f):{};
var h=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var i in h){if(f[i]==null){f[i]=h[i];
}}return qx.bom.Element.create(b,f,g);
},getWindow:qx.core.Variant.select(e,{"mshtml|gecko":function(j){try{return j.contentWindow;
}catch(k){return null;
}},"default":function(l){try{var m=this.getDocument(l);
return m?m.defaultView:null;
}catch(n){return null;
}}}),getDocument:qx.core.Variant.select(e,{"mshtml":function(o){try{var p=this.getWindow(o);
return p?p.document:null;
}catch(q){return null;
}},"default":function(r){try{return r.contentDocument;
}catch(s){return null;
}}}),getBody:function(t){try{var u=this.getDocument(t);
return u?u.getElementsByTagName(c)[0]:null;
}catch(v){return null;
}},setSource:function(w,x){try{if(this.getWindow(w)&&qx.dom.Hierarchy.isRendered(w)){try{if(qx.core.Variant.isSet(e,d)&&qx.bom.client.Platform.MAC){var y=this.getContentWindow();

if(y){y.stop();
}}this.getWindow(w).location.replace(x);
}catch(z){w.src=x;
}}else{w.src=x;
}}catch(A){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(B){var C=this.getDocument(B);

try{if(C&&C.location){return C.location.href;
}}catch(D){}return null;
}}});
})();
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(c){return !!c.firstChild;
},hasChildElements:function(d){d=d.firstChild;

while(d){if(d.nodeType===1){return true;
}d=d.nextSibling;
}return false;
},getParentElement:function(e){return e.parentNode;
},isInDom:function(f,g){if(!g){g=window;
}var h=g.document.getElementsByTagName(f.nodeName);

for(var i=0,l=h.length;i<l;i++){if(h[i]===f){return true;
}}return false;
},insertAt:function(j,parent,k){var m=parent.childNodes[k];

if(m){parent.insertBefore(j,m);
}else{parent.appendChild(j);
}return true;
},insertBegin:function(n,parent){if(parent.firstChild){this.insertBefore(n,parent.firstChild);
}else{parent.appendChild(n);
}},insertEnd:function(o,parent){parent.appendChild(o);
},insertBefore:function(p,q){q.parentNode.insertBefore(p,q);
return true;
},insertAfter:function(r,s){var parent=s.parentNode;

if(s==parent.lastChild){parent.appendChild(r);
}else{return this.insertBefore(r,s.nextSibling);
}return true;
},remove:function(t){if(!t.parentNode){return false;
}t.parentNode.removeChild(t);
return true;
},removeChild:function(u,parent){if(u.parentNode!==parent){return false;
}parent.removeChild(u);
return true;
},removeChildAt:function(v,parent){var w=parent.childNodes[v];

if(!w){return false;
}parent.removeChild(w);
return true;
},replaceChild:function(x,y){if(!y.parentNode){return false;
}y.parentNode.replaceChild(x,y);
return true;
},replaceAt:function(z,A,parent){var B=parent.childNodes[A];

if(!B){return false;
}parent.replaceChild(z,B);
return true;
}}});
})();
(function(){var n=",",m="",k="string",j="null",h='"',g=':',f="qx.jsonDebugging",e='-',d='\\u00',c="new Date(Date.UTC(",N="__dP",M="__dO",L='\\\\',K='\\f',J='\\"',I='Z',H="))",G='T',F="__dF",E="}",u='(',v='.',s="{",t='\\r',q=":",r="__dH",o='\\t',p="]",w="qx.jsonEncodeUndefined",x="[",z="__dE",y='\\b',B="__dG",A="qx.util.Json",D=')',C='\\n';
qx.Class.define(A,{statics:{__dC:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__dD:{"function":z,"boolean":F,"number":B,"string":r,"object":M,"undefined":N},__dE:function(O,P){return String(O);
},__dF:function(Q,R){return String(Q);
},__dG:function(S,T){return isFinite(S)?String(S):j;
},__dH:function(U,V){var W;

if(/["\\\x00-\x1f]/.test(U)){W=U.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__dJ);
}else{W=U;
}return h+W+h;
},__dI:{'\b':y,'\t':o,'\n':C,'\f':K,'\r':t,'"':J,'\\':L},__dJ:function(a,b){var X=qx.util.Json.__dI[b];

if(X){return X;
}X=b.charCodeAt();
return d+Math.floor(X/16).toString(16)+(X%16).toString(16);
},__dK:function(Y,ba){var bc=[],bf=true,be,bb;
var bd=qx.util.Json.__dR;
bc.push(x);

if(bd){qx.util.Json.__dL+=qx.util.Json.BEAUTIFYING_INDENT;
bc.push(qx.util.Json.__dL);
}
for(var i=0,l=Y.length;i<l;i++){bb=Y[i];
be=this.__dD[typeof bb];

if(be){bb=this[be](bb,i+m);

if(typeof bb==k){if(!bf){bc.push(n);

if(bd){bc.push(qx.util.Json.__dL);
}}bc.push(bb);
bf=false;
}}}
if(bd){qx.util.Json.__dL=qx.util.Json.__dL.substring(0,qx.util.Json.__dL.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bc.push(qx.util.Json.__dL);
}bc.push(p);
return bc.join(m);
},__dM:function(bg,bh){if(!qx.util.Json.CONVERT_DATES){if(bg.toJSON&&!qx.bom.client.Engine.OPERA){return bg.toJSON();
}var bi=qx.util.format.NumberFormat.getInstance();
bi.setMinimumIntegerDigits(2);
var bk=bg.getUTCFullYear()+e+bi.format(bg.getUTCMonth()+1)+e+bi.format(bg.getUTCDate())+G+bi.format(bg.getUTCHours())+g+bi.format(bg.getUTCMinutes())+g+bi.format(bg.getUTCSeconds())+v;
bi.setMinimumIntegerDigits(3);
return bk+bi.format(bg.getUTCMilliseconds())+I;
}else{var bj=bg.getUTCFullYear()+n+bg.getUTCMonth()+n+bg.getUTCDate()+n+bg.getUTCHours()+n+bg.getUTCMinutes()+n+bg.getUTCSeconds()+n+bg.getUTCMilliseconds();
return c+bj+H;
}},__dN:function(bl,bm){var bp=[],br=true,bo,bn;
var bq=qx.util.Json.__dR;
bp.push(s);

if(bq){qx.util.Json.__dL+=qx.util.Json.BEAUTIFYING_INDENT;
bp.push(qx.util.Json.__dL);
}
for(var bm in bl){bn=bl[bm];
bo=this.__dD[typeof bn];

if(bo){bn=this[bo](bn,bm);

if(typeof bn==k){if(!br){bp.push(n);

if(bq){bp.push(qx.util.Json.__dL);
}}bp.push(this.__dH(bm),q,bn);
br=false;
}}}
if(bq){qx.util.Json.__dL=qx.util.Json.__dL.substring(0,qx.util.Json.__dL.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bp.push(qx.util.Json.__dL);
}bp.push(E);
return bp.join(m);
},__dO:function(bs,bt){if(bs){if(qx.lang.Type.isFunction(bs.toJSON)&&bs.toJSON!==this.__dC){return this.__dQ(bs.toJSON(bt),bt);
}else if(qx.lang.Type.isDate(bs)){return this.__dM(bs,bt);
}else if(qx.lang.Type.isArray(bs)){return this.__dK(bs,bt);
}else if(qx.lang.Type.isObject(bs)){return this.__dN(bs,bt);
}return m;
}return j;
},__dP:function(bu,bv){if(qx.core.Setting.get(w)){return j;
}},__dQ:function(bw,bx){return this[this.__dD[typeof bw]](bw,bx);
},stringify:function(by,bz){this.__dR=bz;
this.__dL=this.BEAUTIFYING_LINE_END;
var bA=this.__dQ(by,m);

if(typeof bA!=k){bA=null;
}if(qx.core.Setting.get(f)){qx.log.Logger.debug(this,"JSON request: "+bA);
}return bA;
},parse:function(bB,bC){if(bC===undefined){bC=true;
}
if(qx.core.Setting.get(f)){qx.log.Logger.debug(this,"JSON response: "+bB);
}
if(bC){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bB.replace(/"(\\.|[^"\\])*"/g,m))){throw new Error("Could not parse JSON string!");
}}
try{var bD=(bB&&bB.length>0)?eval(u+bB+D):null;
return bD;
}catch(bE){throw new Error("Could not evaluate JSON string: "+bE.message);
}}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bF){bF.__dC=Date.prototype.toJSON;
}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(u){qx.core.Object.call(this);
this.__hR=u;
},statics:{getIntegerInstance:function(){var v=qx.util.format.NumberFormat;

if(v._integerInstance==null){v._integerInstance=new v();
v._integerInstance.setMaximumFractionDigits(0);
}return v._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__hR:null,format:function(w){switch(w){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var A=(w<0);

if(A){w=-w;
}
if(this.getMaximumFractionDigits()!=null){var H=Math.pow(10,this.getMaximumFractionDigits());
w=Math.round(w*H)/H;
}var G=String(Math.floor(w)).length;
var x=t+w;
var D=x.substring(0,G);

while(D.length<this.getMinimumIntegerDigits()){D=q+D;
}
if(this.getMaximumIntegerDigits()!=null&&D.length>this.getMaximumIntegerDigits()){D=D.substring(D.length-this.getMaximumIntegerDigits());
}var C=x.substring(G+1);

while(C.length<this.getMinimumFractionDigits()){C+=q;
}
if(this.getMaximumFractionDigits()!=null&&C.length>this.getMaximumFractionDigits()){C=C.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var z=D;
D=t;
var F;

for(F=z.length;F>3;F-=3){D=t+qx.locale.Number.getGroupSeparator(this.__hR)+z.substring(F-3,F)+D;
}D=z.substring(0,F)+D;
}var B=this.getPrefix()?this.getPrefix():t;
var y=this.getPostfix()?this.getPostfix():t;
var E=B+(A?r:t)+D;

if(C.length>0){E+=t+qx.locale.Number.getDecimalSeparator(this.__hR)+C;
}E+=y;
return E;
},parse:function(I){var N=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__hR)+t);
var L=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__hR)+t);
var J=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+N+g+n+L+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var M=J.exec(I);

if(M==null){throw new Error("Number string '"+I+"' does not match the number format");
}var O=(M[1]==r);
var Q=M[2];
var P=M[3];
Q=Q.replace(new RegExp(N,m),t);
var K=(O?r:t)+Q;

if(P!=null&&P.length!=0){P=P.replace(new RegExp(L),t);
K+=h+P;
}return parseFloat(K);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__dX;

if(s>=2000000000){qx.io.remote.transport.Script.__dX=s=1;
}this.__dY=null;
this.__dX=s;
},statics:{__dX:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){{};
}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__ea:0,__dY:null,__dX:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__dX;
var A=this.getParameters();
var z=[];

for(var w in A){if(w.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var y=A[w];

if(y instanceof Array){for(var i=0;i<y.length;i++){z.push(encodeURIComponent(w)+q+encodeURIComponent(y[i]));
}}else{z.push(encodeURIComponent(w)+q+encodeURIComponent(y));
}}
if(z.length>0){x+=r+z.join(r);
}var v=this.getData();

if(v!=null){x+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(v);
}qx.io.remote.transport.Script._instanceRegistry[this.__dX]=this;
this.__dY=document.createElement(c);
this.__dY.charset=e;
this.__dY.src=x;
{};
document.body.appendChild(this.__dY);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__ea<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ea]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(E){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){{};
return null;
}{};

switch(this.getResponseType()){case m:case o:case l:{};
var F=this._responseContent;
return (F===0?0:(F||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__dY){delete qx.io.remote.transport.Script._instanceRegistry[this.__dX];
document.body.removeChild(this.__dY);
}this.__dY=this._responseContent=null;
}});
})();
(function(){var m="failed",k="completed",j="=",h="aborted",g="",f="sending",d="&",c="configured",b="timeout",a="application/xml",J="qx.io.remote.transport.XmlHttp",I="application/json",H="text/html",G="qx.client",F="receiving",E="text/plain",D="text/javascript",C="?",B="created",A="Boolean",u='Referer',v='Basic ',r="\n</pre>",t="string",p='Authorization',q="<pre>Could not execute json: \n",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=':',w="parseerror",x="file:",z="webkit",y="object";
qx.Class.define(J,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[E,D,I,a,H]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(G,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:A,init:true}},members:{__eb:false,__ec:0,__ed:null,getRequest:function(){if(this.__ed===null){this.__ed=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__ed.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__ed;
},send:function(){this.__ec=0;
var O=this.getRequest();
var K=this.getMethod();
var R=this.getAsynchronous();
var Q=this.getUrl();
var M=(window.location.protocol===x&&!(/^http(s){0,1}\:/.test(Q)));
this.__eb=M;
var U=this.getParameters(false);
var S=[];

for(var L in U){var P=U[L];

if(P instanceof Array){for(var i=0;i<P.length;i++){S.push(encodeURIComponent(L)+j+encodeURIComponent(P[i]));
}}else{S.push(encodeURIComponent(L)+j+encodeURIComponent(P));
}}
if(S.length>0){Q+=(Q.indexOf(C)>=0?d:C)+S.join(d);
}if(this.getData()===null){var U=this.getParameters(true);
var S=[];

for(var L in U){var P=U[L];

if(P instanceof Array){for(var i=0;i<P.length;i++){S.push(encodeURIComponent(L)+j+encodeURIComponent(P[i]));
}}else{S.push(encodeURIComponent(L)+j+encodeURIComponent(P));
}}
if(S.length>0){this.setData(S.join(d));
}}var T=function(V){var bb=n;
var bf=g;
var Y,X,W;
var bc,bd,be,ba;
var i=0;

do{Y=V.charCodeAt(i++);
X=V.charCodeAt(i++);
W=V.charCodeAt(i++);
bc=Y>>2;
bd=((Y&3)<<4)|(X>>4);
be=((X&15)<<2)|(W>>6);
ba=W&63;

if(isNaN(X)){be=ba=64;
}else if(isNaN(W)){ba=64;
}bf+=bb.charAt(bc)+bb.charAt(bd)+bb.charAt(be)+bb.charAt(ba);
}while(i<V.length);
return bf;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){O.open(K,Q,R);
O.setRequestHeader(p,v+T(this.getUsername()+o+this.getPassword()));
}else{O.open(K,Q,R,this.getUsername(),this.getPassword());
}}else{O.open(K,Q,R);
}}catch(bg){this.error("Failed with exception: "+bg);
this.failed();
return;
}if(!qx.core.Variant.isSet(G,z)){O.setRequestHeader(u,window.location.href);
}var N=this.getRequestHeaders();

for(var L in N){O.setRequestHeader(L,N[L]);
}try{{};
O.send(this.getData());
}catch(bh){if(M){this.failedLocally();
}else{this.error("Failed to send data: "+bh,"send");
this.failed();
}return;
}if(!R){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case k:case h:case m:case b:{};
return;
}var bi=this.getReadyState();

if(bi==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bi,this.__eb)){if(this.getState()===c){this.setState(f);
}this.failed();
return;
}}while(this.__ec<bi){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ec]);
}}),getReadyState:function(){var bj=null;

try{bj=this.getRequest().readyState;
}catch(bk){}return bj;
},setRequestHeader:function(bl,bm){this.getRequestHeaders()[bl]=bm;
},getResponseHeader:function(bn){var bo=null;

try{bo=this.getRequest().getResponseHeader(bn)||null;
}catch(bp){}return bo;
},getStringResponseHeaders:function(){var br=null;

try{var bq=this.getRequest().getAllResponseHeaders();

if(bq){br=bq;
}}catch(bs){}return br;
},getResponseHeaders:function(){var bv=this.getStringResponseHeaders();
var bw={};

if(bv){var bt=bv.split(/[\r\n]+/g);

for(var i=0,l=bt.length;i<l;i++){var bu=bt[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bu){bw[bu[1]]=bu[2];
}}}return bw;
},getStatusCode:function(){var bx=-1;

try{bx=this.getRequest().status;
}catch(by){}return bx;
},getStatusText:function(){var bz=g;

try{bz=this.getRequest().statusText;
}catch(bA){}return bz;
},getResponseText:function(){var bB=null;

try{bB=this.getRequest().responseText;
}catch(bC){bB=null;
}return bB;
},getResponseXml:function(){var bF=null;
var bD=this.getStatusCode();
var bE=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bD,bE,this.__eb)){try{bF=this.getRequest().responseXML;
}catch(bG){}}if(typeof bF==y&&bF!=null){if(!bF.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,g);
bF.loadXML(s);
}if(!bF.documentElement){throw new Error("Missing Document Element!");
}
if(bF.documentElement.tagName==w){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bF;
},getFetchedLength:function(){var bH=this.getResponseText();
return typeof bH==t?bH.length:0;
},getResponseContent:function(){var bI=this.getState();

if(bI!==k&&bI!=m){{};
return null;
}{};
var bK=this.getResponseText();

if(bI==m){{};
return bK;
}
switch(this.getResponseType()){case E:case H:{};
return bK;
case I:{};

try{if(bK&&bK.length>0){var bJ;

if(this.getParseJson()){bJ=qx.util.Json.parse(bK,false);
bJ=(bJ===0?0:(bJ||null));
}else{bJ=bK;
}return bJ;
}else{return null;
}}catch(bL){this.error("Could not execute json: ["+bK+"]",bL);
return q+bK+r;
}case D:{};

try{if(bK&&bK.length>0){var bJ=window.eval(bK);
return (bJ===0?0:(bJ||null));
}else{return null;
}}catch(bM){this.error("Could not execute javascript: ["+bK+"]",bM);
return null;
}case a:bK=this.getResponseXml();
{};
return (bK===0?0:(bK||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bN,bO){{};

switch(bN){case B:this.fireEvent(B);
break;
case c:this.fireEvent(c);
break;
case f:this.fireEvent(f);
break;
case F:this.fireEvent(F);
break;
case k:this.fireEvent(k);
break;
case m:this.fireEvent(m);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
case b:this.getRequest().abort();
this.fireEvent(b);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,J);
},destruct:function(){var bP=this.getRequest();

if(bP){bP.onreadystatechange=qx.lang.Function.empty;
switch(bP.readyState){case 1:case 2:case 3:bP.abort();
}}this.__ed=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){qx.ui.tree.AbstractTreeItem.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":c,"metaDataChanged":b,"sorted":c},members:{getRowCount:function(){},getRowData:function(d){},getColumnCount:function(){},getColumnId:function(e){},getColumnIndexById:function(f){},getColumnName:function(g){},isColumnEditable:function(h){},isColumnSortable:function(i){},sortByColumn:function(j,k){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(l,m){},getValue:function(n,o){},getValueById:function(p,q){},setValue:function(r,s,t){},setValueById:function(u,v,w){}}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__fQ=[];
this.__fR=[];
this.__fS={};
},members:{__fQ:null,__fR:null,__fS:null,__fT:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__fQ.length;
},getColumnIndexById:function(y){return this.__fS[y];
},getColumnId:function(z){return this.__fQ[z];
},getColumnName:function(A){return this.__fR[A];
},setColumnIds:function(B){this.__fQ=B;
this.__fS={};

for(var i=0;i<B.length;i++){this.__fS[B[i]]=i;
}this.__fR=new Array(B.length);
if(!this.__fT){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__fQ.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__fQ.length+" != "+C.length);
}this.__fR=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__fR=new Array(this.__fQ.length);

for(var i=0;i<this.__fQ.length;++i){this.__fR[i]=D[this.__fQ[i]];
}},setColumns:function(E,F){var G=this.__fQ.length==0||F;

if(F==null){if(this.__fQ.length==0){F=E;
}else{F=this.__fQ;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__fT=true;
this.setColumnIds(F);
this.__fT=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__fQ=this.__fR=this.__fS=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__fK=[];
this.__fL=-1;
this.__fM=[];
this.__fN=null;
},properties:{caseSensitiveSorting:{check:b,init:true}},statics:{_defaultSortComparatorAscending:function(f,g){var h=f[arguments.callee.columnIndex];
var k=g[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(h)&&qx.lang.Type.isNumber(k)){var l=isNaN(h)?isNaN(k)?0:1:isNaN(k)?-1:null;

if(l!=null){return l;
}}return (h>k)?1:((h==k)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(m,n){var o=(m[arguments.callee.columnIndex].toLowerCase?m[arguments.callee.columnIndex].toLowerCase():m[arguments.callee.columnIndex]);
var p=(n[arguments.callee.columnIndex].toLowerCase?n[arguments.callee.columnIndex].toLowerCase():n[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(o)&&qx.lang.Type.isNumber(p)){var q=isNaN(o)?isNaN(p)?0:1:isNaN(p)?-1:null;

if(q!=null){return q;
}}return (o>p)?1:((o==p)?0:-1);
},_defaultSortComparatorDescending:function(r,s){var t=r[arguments.callee.columnIndex];
var u=s[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(t)&&qx.lang.Type.isNumber(u)){var v=isNaN(t)?isNaN(u)?0:1:isNaN(u)?-1:null;

if(v!=null){return v;
}}return (t<u)?1:((t==u)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(w,x){var y=(w[arguments.callee.columnIndex].toLowerCase?w[arguments.callee.columnIndex].toLowerCase():w[arguments.callee.columnIndex]);
var z=(x[arguments.callee.columnIndex].toLowerCase?x[arguments.callee.columnIndex].toLowerCase():x[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(y)&&qx.lang.Type.isNumber(z)){var A=isNaN(y)?isNaN(z)?0:1:isNaN(z)?-1:null;

if(A!=null){return A;
}}return (y<z)?1:((y==z)?0:-1);
}},members:{__fK:null,__fN:null,__fO:null,__fM:null,__fL:null,__fP:null,getRowData:function(B){var C=this.__fK[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__fK[D];

if(F!=null){var E={};
for(var G=0;G<this.getColumnCount();G++){E[this.getColumnId(G)]=F[G];
}
if(F.originalData!=null){for(var H in F.originalData){if(E[H]==undefined){E[H]=F.originalData[H];
}}}return E;
}return (F&&F.originalData)?F.originalData:null;
},getDataAsMapArray:function(){var J=this.getRowCount();
var I=[];

for(var i=0;i<J;i++){I.push(this.getRowDataAsMap(i));
}return I;
},setEditable:function(K){this.__fN=[];

for(var L=0;L<this.getColumnCount();L++){this.__fN[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__fN==null){this.__fN=[];
}this.__fN[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__fN?(this.__fN[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__fO==null){this.__fO=[];
}this.__fO[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__fO?(this.__fO[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__fM[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__fK.sort(W);
this.__fL=S;
this.__fP=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__fM[X]=ba;
},getSortMethods:function(bd){return this.__fM[bd];
},clearSorting:function(){if(this.__fL!=-1){this.__fL=-1;
this.__fP=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__fL;
},_setSortColumnIndex:function(be){this.__fL=be;
},isSortAscending:function(){return this.__fP;
},_setSortAscending:function(bf){this.__fP=bf;
},getRowCount:function(){return this.__fK.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__fK.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__fK.length+")");
}return this.__fK[bh][bg];
},setValue:function(bi,bj,bk){if(this.__fK[bj][bi]!=bk){this.__fK[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__fL){this.clearSorting();
}}},setData:function(bm,bn){this.__fK=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__fK;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__fK.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__fK,bs);
var bv={firstRow:bt,lastRow:this.__fK.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__fK,bA);
var bD={firstRow:bB,lastRow:this.__fK.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__fK.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__fK.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
this.fireDataEvent(e,bL);

if(bK!==false){this.clearSorting();
}},_mapArray2RowArr:function(bM,bN){var bR=bM.length;
var bO=this.getColumnCount();
var bQ=new Array(bR);
var bP;

for(var i=0;i<bR;++i){bP=[];

if(bN){bP.originalData=bM[i];
}
for(var j=0;j<bO;++j){bP[j]=bM[i][this.getColumnId(j)];
}bQ[i]=bP;
}return bQ;
}},destruct:function(){this.__fK=this.__fN=this.__fM=this.__fO=null;
}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(g){var h=this._createEditor();
h.originalValue=g.value;

if(g.value===null||g.value===undefined){g.value=f;
}h.setValue(f+g.value);
h.addListener(b,function(){h.selectAllText();
});
return h;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(j){k=j(k,i.originalValue);
}
if(typeof i.originalValue==c){k=parseFloat(k);
}return k;
}}});
})();
(function(){var c="number",b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{getCellEditorValue:function(d){var f=d.getValue();
var e=this.getValidationFunction();

if(e){f=e(f,d.originalValue);
}
if(typeof d.originalValue==c){if(f!=null){f=parseFloat(f);
}}return f;
},_createEditor:function(){var g=new qx.ui.form.TextField();
g.setAppearance(a);
return g;
}}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(c,d);
return d;
},updateHeaderCell:function(e,f){var g=qx.ui.table.headerrenderer.Default;
if(e.name&&e.name.translate){f.setLabel(e.name.translate());
}else{f.setLabel(e.name);
}var h=f.getToolTip();

if(this.getToolTip()!=null){if(h==null){h=new qx.ui.tooltip.ToolTip(this.getToolTip());
f.setToolTip(h);
qx.util.DisposeUtil.disposeTriggeredBy(h,f);
}else{h.setLabel(this.getToolTip());
}}e.sorted?f.addState(g.STATE_SORTED):f.removeState(g.STATE_SORTED);
e.sortedAscending?f.addState(g.STATE_SORTED_ASCENDING):f.removeState(g.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f='" ',e="nowrap",d="default",c="qx.client",b="}",a="width:",H=".qooxdoo-table-cell-right { text-align:right } ",G="0px 6px",F='<div class="',E="0px",D="height:",C="1px solid ",B=".qooxdoo-table-cell-bold { font-weight:bold } ",A="table-row-line",z="String",y='>',q="mshtml",r='</div>',o="ellipsis",p="content-box",m='left:',n="qx.ui.table.cellrenderer.Abstract",k='" style="',l="abstract",s="none",t="hidden",v="} ",u='px;',x=".qooxdoo-table-cell-italic { font-style:italic} ",w="absolute";
qx.Class.define(n,{type:l,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var I=qx.ui.table.cellrenderer.Abstract;

if(!I.__eV){var K=qx.theme.manager.Color.getInstance();
I.__eV=this.self(arguments);
var J=h+
qx.bom.element.Style.compile({position:w,top:E,overflow:t,whiteSpace:e,borderRight:C+K.resolve(A),padding:G,cursor:d,textOverflow:o,userSelect:s})+v+H+x+B;

if(!qx.core.Variant.isSet(c,q)){J+=h+qx.bom.element.BoxSizing.compile(p)+b;
}I.__eV.stylesheet=qx.bom.Stylesheet.createElement(J);
}},properties:{defaultCellStyle:{init:null,check:z,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(L){return g;
},_getCellStyle:function(M){return M.style||j;
},_getCellAttributes:function(N){return j;
},_getContentHtml:function(O){return O.value||j;
},_getCellSizeStyle:function(P,Q,R,S){var T=j;

if(qx.bom.client.Feature.CONTENT_BOX){P-=R;
Q-=S;
}T+=a+Math.max(P,0)+i;
T+=D+Math.max(Q,0)+i;
return T;
},createDataCellHtml:function(U,V){V.push(F,this._getCellClass(U),k,m,U.styleLeft,u,this._getCellSizeStyle(U.styleWidth,U.styleHeight,this._insetX,this._insetY),this._getCellStyle(U),f,this._getCellAttributes(U),y+this._getContentHtml(U),r);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}return 0;
},_getCellClass:function(j){var k=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,j);

if(!k){return h;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=c;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=b;
}return k;
},_getContentHtml:function(m){return qx.bom.String.escape(this._formatValue(m));
},_formatValue:function(n){var p=n.value;
var o;

if(p==null){return h;
}
if(typeof p==a){return p;
}else if(typeof p==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var k="qx.event.type.Data",j="visibilityChanged",h="orderChanged",g="visibilityChangedPre",f="__fB",e="__fA",d="widthChanged",c="qx.ui.table.columnmodel.Basic",b="__fz",a="headerCellRendererChanged";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__fu=[];
this.__fv=[];
},events:{"widthChanged":k,"visibilityChangedPre":k,"visibilityChanged":k,"orderChanged":k,"headerCellRendererChanged":k},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__fw:null,__fx:null,__fv:null,__fu:null,__fy:null,__fz:null,__fA:null,__fB:null,init:function(l,m){{};
this.__fy=[];
var q=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var r=this.__fz||(this.__fz=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var o=this.__fA||(this.__fA=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var n=this.__fB||(this.__fB=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__fu=[];
this.__fv=[];
var t;
if(m){t=m.getInitiallyHiddenColumns();
}t=t||[];

for(var u=0;u<l;u++){this.__fy[u]={width:q,headerRenderer:r,dataRenderer:o,editorFactory:n};
this.__fu[u]=u;
this.__fv[u]=u;
}this.__fx=null;
this.__fw=true;

for(var s=0;s<t.length;s++){this.setColumnVisible(t[s],false);
}this.__fw=false;

for(u=0;u<l;u++){var p={col:u,visible:this.isColumnVisible(u)};
this.fireDataEvent(g,p);
this.fireDataEvent(j,p);
}},getVisibleColumns:function(){return this.__fv!=null?this.__fv:[];
},setColumnWidth:function(v,w,y){{};
var A=this.__fy[v].width;

if(A!=w){this.__fy[v].width=w;
var z={col:v,newWidth:w,oldWidth:A,isMouseAction:y||false};
this.fireDataEvent(d,z);
}},getColumnWidth:function(B){{};
return this.__fy[B].width;
},setHeaderCellRenderer:function(C,D){{};
var E=this.__fy[C].headerRenderer;

if(E!==this.__fz){E.dispose();
}this.__fy[C].headerRenderer=D;
this.fireDataEvent(a,{col:C});
},getHeaderCellRenderer:function(F){{};
return this.__fy[F].headerRenderer;
},setDataCellRenderer:function(G,H){{};
this.__fy[G].dataRenderer=H;
var I=this.__fy[G].dataRenderer;

if(I!==this.__fA){return I;
}return null;
},getDataCellRenderer:function(J){{};
return this.__fy[J].dataRenderer;
},setCellEditorFactory:function(K,L){{};
var M=this.__fy[K].headerRenderer;

if(M!==this.__fB){M.dispose();
}this.__fy[K].editorFactory=L;
},getCellEditorFactory:function(N){{};
return this.__fy[N].editorFactory;
},_getColToXPosMap:function(){if(this.__fx==null){this.__fx={};

for(var Q=0;Q<this.__fu.length;Q++){var P=this.__fu[Q];
this.__fx[P]={overX:Q};
}
for(var O=0;O<this.__fv.length;O++){var P=this.__fv[O];
this.__fx[P].visX=O;
}}return this.__fx;
},getVisibleColumnCount:function(){return this.__fv!=null?this.__fv.length:0;
},getVisibleColumnAtX:function(R){{};
return this.__fv[R];
},getVisibleX:function(S){{};
return this._getColToXPosMap()[S].visX;
},getOverallColumnCount:function(){return this.__fu.length;
},getOverallColumnAtX:function(T){{};
return this.__fu[T];
},getOverallX:function(U){{};
return this._getColToXPosMap()[U].overX;
},isColumnVisible:function(V){{};
return (this._getColToXPosMap()[V].visX!=null);
},setColumnVisible:function(W,X){{};

if(X!=this.isColumnVisible(W)){if(X){var be=this._getColToXPosMap();
var bb=be[W].overX;

if(bb==null){throw new Error("Showing column failed: "+W+". The column is not added to this TablePaneModel.");
}var bc;

for(var x=bb+1;x<this.__fu.length;x++){var bd=this.__fu[x];
var Y=be[bd].visX;

if(Y!=null){bc=Y;
break;
}}if(bc==null){bc=this.__fv.length;
}this.__fv.splice(bc,0,W);
}else{var ba=this.getVisibleX(W);
this.__fv.splice(ba,1);
}this.__fx=null;
if(!this.__fw){var bf={col:W,visible:X};
this.fireDataEvent(g,bf);
this.fireDataEvent(j,bf);
}}},moveColumn:function(bg,bh){{};
this.__fw=true;
var bk=this.__fu[bg];
var bi=this.isColumnVisible(bk);

if(bi){this.setColumnVisible(bk,false);
}this.__fu.splice(bg,1);
this.__fu.splice(bh,0,bk);
this.__fx=null;

if(bi){this.setColumnVisible(bk,true);
}this.__fw=false;
var bj={col:bk,fromOverXPos:bg,toOverXPos:bh};
this.fireDataEvent(h,bj);
},setColumnsOrder:function(bl){{};

if(bl.length==this.__fu.length){this.__fw=true;
var bo=new Array(bl.length);

for(var bm=0;bm<this.__fu.length;bm++){var bn=this.isColumnVisible(bm);
bo[bm]=bn;

if(bn){this.setColumnVisible(bm,false);
}}this.__fu=qx.lang.Array.clone(bl);
this.__fx=null;
for(var bm=0;bm<this.__fu.length;bm++){if(bo[bm]){this.setColumnVisible(bm,true);
}}this.__fw=false;
this.fireDataEvent(h);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__fu.length+", got "+bl.length);
}}},destruct:function(){for(var i=0;i<this.__fy.length;i++){this.__fy[i].headerRenderer.dispose();
this.__fy[i].dataRenderer.dispose();
this.__fy[i].editorFactory.dispose();
}this.__fu=this.__fv=this.__fy=this.__fx=null;
this._disposeObjects(b,e,f);
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){qx.ui.table.columnmodel.Basic.call(this);
this.__fH=false;
this.__fI=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__fI:null,__fH:null,__fJ:null,_applyBehavior:function(p,q){if(q!=null){q.dispose();
q=null;
}p._setNumColumns(this.getOverallColumnCount());
p.setTableColumnModel(this);
},init:function(r,s){qx.ui.table.columnmodel.Basic.prototype.init.call(this,r,s);

if(this.__fJ==null){this.__fJ=s;
s.addListener(n,this._onappear,this);
s.addListener(l,this._onTableWidthChanged,this);
s.addListener(k,this._onverticalscrollbarchanged,this);
s.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(r);
},getTable:function(){return this.__fJ;
},_addResetColumnWidthButton:function(event){var v=event.getData();
var u=v.columnButton;
var t=v.menu;
var o;
o=u.factory(g);
t.add(o);
o=u.factory(d,{text:this.tr(e)});
t.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__fH){return ;
}this.__fH=true;
{};
this.getBehavior().onAppear(event,event.getType()!==n);
this.__fJ._updateScrollerWidths();
this.__fJ._updateScrollBarVisibility();
this.__fH=false;
this.__fI=true;
},_onTableWidthChanged:function(event){if(this.__fH||!this.__fI){return ;
}this.__fH=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__fH=false;
},_onverticalscrollbarchanged:function(event){if(this.__fH||!this.__fI){return ;
}this.__fH=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__fJ&&!this.__fJ.isDisposed()){this.__fJ._updateScrollerWidths();
this.__fJ._updateScrollBarVisibility();
}},this,0);
this.__fH=false;
},_oncolumnwidthchanged:function(event){if(this.__fH||!this.__fI){return ;
}this.__fH=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__fH=false;
},_onvisibilitychanged:function(event){if(this.__fH||!this.__fI){return ;
}this.__fH=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__fH=false;
}},destruct:function(){this.__fJ=null;
}});
})();
(function(){var k="showingPlaceholder",j="",i="none",h="qx.dynlocale",g="Boolean",f="qx.client",d="color",c="qx.event.type.Data",b="readonly",a="placeholder",bc="input",bb="focusin",ba="visibility",Y="focusout",X="changeLocale",W="hidden",V="on",U="absolute",T="readOnly",S="text",r="_applyTextAlign",s="px",p="RegExp",q=")",n="syncAppearance",o="changeValue",l="A",m="change",v="textAlign",w="focused",E="center",C="visible",K="disabled",G="url(",O="off",M="String",y="resize",R="qx.ui.form.AbstractField",Q="transparent",P="spellcheck",x="false",A="right",B="PositiveInteger",D="mshtml",F="abstract",H="block",L="webkit",N="_applyReadOnly",t="_applyPlaceholder",u="left",z="qx/static/blank.gif",J="text-placeholder",I="changeReadOnly";
qx.Class.define(R,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:F,construct:function(bd){qx.ui.core.Widget.call(this);
this.__jl=!qx.bom.client.Feature.PLACEHOLDER;

if(bd!=null){this.setValue(bd);
}this.getContentElement().addListener(m,this._onChangeContent,this);
if(this.__jl){this.addListener(n,this._syncPlaceholder,this);
}if(qx.core.Variant.isSet(h,V)){qx.locale.Manager.getInstance().addListener(X,this._onChangeLocale,this);
}},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[u,E,A],nullable:true,themeable:true,apply:r},readOnly:{check:g,apply:N,event:I,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:B,init:Infinity},liveUpdate:{check:g,init:false},placeholder:{check:M,nullable:true,apply:t},filter:{check:p,nullable:true,init:null}},members:{__jm:true,__jn:null,__jo:null,__jp:null,__jl:true,getFocusElement:function(){var be=this.getContentElement();

if(be){return be;
}},_createInputElement:function(){return new qx.html.Input(S);
},renderLayout:function(bf,top,bg,bh){var bi=this._updateInsets;
var bm=qx.ui.core.Widget.prototype.renderLayout.call(this,bf,top,bg,bh);
if(!bm){return;
}var bk=bm.size||bi;
var bn=s;

if(bk||bm.local||bm.margin){var bj=this.getInsets();
var innerWidth=bg-bj.left-bj.right;
var innerHeight=bh-bj.top-bj.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bl=this.getContentElement();
if(bi&&this.__jl){this.__js().setStyles({"left":bj.left+bn,"top":bj.top+bn});
}
if(bk){if(this.__jl){this.__js().setStyles({"width":innerWidth+bn,"height":innerHeight+bn});
}bl.setStyles({"width":innerWidth+bn,"height":innerHeight+bn});
this._renderContentElement(innerHeight,bl);
}},_renderContentElement:function(innerHeight,bo){},_createContentElement:function(){var bp=this._createInputElement();
bp.setStyles({"border":i,"padding":0,"margin":0,"display":H,"background":Q,"outline":i,"appearance":i,"position":U,"autoComplete":O});
bp.setSelectable(this.getSelectable());
bp.setEnabled(this.getEnabled());
bp.addListener(bc,this._onHtmlInput,this);
bp.setAttribute(P,x);
if(qx.core.Variant.isSet(f,L)){bp.setStyle(y,i);
}if(qx.core.Variant.isSet(f,D)){bp.setStyles({backgroundImage:G+qx.util.ResourceManager.getInstance().toUri(z)+q});
}return bp;
},_applyEnabled:function(bq,br){qx.ui.core.Widget.prototype._applyEnabled.call(this,bq,br);
this.getContentElement().setEnabled(bq);

if(this.__jl){if(bq){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bs=this.getContentElement();
bs.setAttribute(a,bq?this.getPlaceholder():j);
}},__jq:{width:16,height:16},_getContentHint:function(){return {width:this.__jq.width*10,height:this.__jq.height||16};
},_applyFont:function(bt,bu){var bv;

if(bt){var bw=qx.theme.manager.Font.getInstance().resolve(bt);
bv=bw.getStyles();
}else{bv=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bv);
if(this.__jl){this.__js().setStyles(bv);
}if(bt){this.__jq=qx.bom.Label.getTextSize(l,bv);
}else{delete this.__jq;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bx,by){if(bx){this.getContentElement().setStyle(d,qx.theme.manager.Color.getInstance().resolve(bx));
}else{this.getContentElement().removeStyle(d);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__jq;
},_onHtmlInput:function(e){var bC=e.getData();
var bB=true;
this.__jm=false;
if(this.getFilter()!=null){var bD=j;
var bz=bC.search(this.getFilter());
var bA=bC;

while(bz>=0){bD=bD+(bA.charAt(bz));
bA=bA.substring(bz+1,bA.length);
bz=bA.search(this.getFilter());
}
if(bD!=bC){bB=false;
bC=bD;
this.getContentElement().setValue(bC);
}}if(bC.length>this.getMaxLength()){var bB=false;
this.getContentElement().setValue(bC.substr(0,this.getMaxLength()));
}if(bB){this.fireDataEvent(bc,bC,this.__jp);
this.__jp=bC;
if(this.getLiveUpdate()){this.__jr(bC);
}}},__jr:function(bE){var bF=this.__jo;
this.__jo=bE;

if(bF!=bE){this.fireNonBubblingEvent(o,qx.event.type.Data,[bE,bF]);
}},setValue:function(bG){if(bG===null){if(this.__jm){return bG;
}bG=j;
this.__jm=true;
}else{this.__jm=false;
if(this.__jl){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bG)){var bI=this.getContentElement();

if(bG.length>this.getMaxLength()){bG=bG.substr(0,this.getMaxLength());
}
if(bI.getValue()!=bG){var bJ=bI.getValue();
bI.setValue(bG);
var bH=this.__jm?null:bG;
this.__jo=bJ;
this.__jr(bH);
}if(this.__jl){this._showPlaceholder();
}return bG;
}throw new Error("Invalid value type: "+bG);
},getValue:function(){var bK=this.getContentElement().getValue();
return this.__jm?null:bK;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__jm=e.getData()===null;
this.__jr(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bL,bM){this.getContentElement().setTextSelection(bL,bM);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bO=this.getValue()||j;
var bN=this.getPlaceholder();

if(bN!=null&&bO==j&&!this.hasState(w)&&!this.hasState(K)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__js().setStyle(ba,W);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__js().setStyle(ba,C);
}},__js:function(){if(this.__jn==null){this.__jn=new qx.html.Label();
var bP=qx.theme.manager.Color.getInstance();
this.__jn.setStyles({"visibility":W,"zIndex":6,"position":U,"color":bP.resolve(J)});
this.getContainerElement().add(this.__jn);
}return this.__jn;
},_onChangeLocale:qx.core.Variant.select(h,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bQ,bR){if(this.__jl){this.__js().setValue(bQ);

if(bQ!=null){this.addListener(bb,this._removePlaceholder,this);
this.addListener(Y,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bb,this._removePlaceholder,this);
this.removeListener(Y,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(a,bQ);
}}},_applyTextAlign:function(bS,bT){this.getContentElement().setStyle(v,bS);
},_applyReadOnly:function(bU,bV){var bW=this.getContentElement();
bW.setAttribute(T,bU);

if(bU){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__jn=null;

if(qx.core.Variant.isSet(h,V)){qx.locale.Manager.getInstance().removeListener(X,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,c){}}});
})();
(function(){var k="wrap",j="value",i="textarea",h="none",g="qx.client",f="",e="input",d="qx.html.Input",c="select",b="disabled",a="read-only";
qx.Class.define(d,{extend:qx.html.Element,construct:function(l,m,n){if(l===c||l===i){var o=l;
}else{o=e;
}qx.html.Element.call(this,o,m,n);
this.__jh=l;
},members:{__jh:null,__ji:null,__jj:null,_createDomElement:function(){return qx.bom.Input.create(this.__jh);
},_applyProperty:function(name,p){qx.html.Element.prototype._applyProperty.call(this,name,p);
var q=this.getDomElement();

if(name===j){qx.bom.Input.setValue(q,p);
}else if(name===k){qx.bom.Input.setWrap(q,p);
}},setEnabled:qx.core.Variant.select(g,{"webkit":function(r){this.__jj=r;

if(!r){this.setStyles({"userModify":a,"userSelect":h});
}else{this.setStyles({"userModify":null,"userSelect":this.__ji?null:h});
}},"default":function(s){this.setAttribute(b,s===false);
}}),setSelectable:qx.core.Variant.select(g,{"webkit":function(t){this.__ji=t;
qx.html.Element.prototype.setSelectable.call(this,this.__jj&&t);
},"default":function(u){qx.html.Element.prototype.setSelectable.call(this,u);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(j,v);
}return this;
},getValue:function(){var x=this.getDomElement();

if(x){return qx.bom.Input.getValue(x);
}return this._getProperty(j)||f;
},setWrap:function(y){if(this.__jh===i){this._setProperty(k,y);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__jh===i){return this._getProperty(k);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var w="change",v="input",u="qx.client",t="text",s="password",r="checkbox",q="radio",p="textarea",n="keypress",m="opera",d="propertychange",k="blur",h="keydown",c="keyup",b="select-multiple",g="checked",f="value",j="select",a="qx.event.handler.Input";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(u,m)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__jb:false,__jc:null,__jd:null,canHandleEvent:function(x,y){var z=x.tagName.toLowerCase();

if(y===v&&(z===v||z===p)){return true;
}
if(y===w&&(z===v||z===p||z===j)){return true;
}return false;
},registerEvent:qx.core.Variant.select(u,{"mshtml":function(A,B,C){if(!A.__je){var D=A.tagName.toLowerCase();
var E=A.type;

if(E===t||E===s||D===p||E===r||E===q){qx.bom.Event.addNativeListener(A,d,this._onPropertyWrapper);
}
if(E!==r&&E!==q){qx.bom.Event.addNativeListener(A,w,this._onChangeValueWrapper);
}
if(E===t||E===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,A);
qx.bom.Event.addNativeListener(A,n,this._onKeyPressWrapped);
}A.__je=true;
}},"default":function(F,G,H){if(G===v){this.__jf(F);
}else if(G===w){if(F.type===q||F.type===r){qx.bom.Event.addNativeListener(F,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(F,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(u,m)){if(F.type===t||F.type===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,F);
qx.bom.Event.addNativeListener(F,n,this._onKeyPressWrapped);
}}}}}),__jf:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(I){var J=I.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&J==p){qx.bom.Event.addNativeListener(I,n,this._onInputWrapper);
}qx.bom.Event.addNativeListener(I,v,this._onInputWrapper);
},"opera":function(K){qx.bom.Event.addNativeListener(K,c,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(K,h,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(K,k,this._onBlurWrapper);
qx.bom.Event.addNativeListener(K,v,this._onInputWrapper);
},"default":function(L){qx.bom.Event.addNativeListener(L,v,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(u,{"mshtml":function(M,N){if(M.__je){var O=M.tagName.toLowerCase();
var P=M.type;

if(P===t||P===s||O===p||P===r||P===q){qx.bom.Event.removeNativeListener(M,d,this._onPropertyWrapper);
}
if(P!==r&&P!==q){qx.bom.Event.removeNativeListener(M,w,this._onChangeValueWrapper);
}
if(P===t||P===s){qx.bom.Event.removeNativeListener(M,n,this._onKeyPressWrapped);
}
try{delete M.__je;
}catch(Q){M.__je=null;
}}},"default":function(R,S){if(S===v){this.__jf(R);
}else if(S===w){if(R.type===q||R.type===r){qx.bom.Event.removeNativeListener(R,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(R,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(u,m)){if(R.type===t||R.type===s){qx.bom.Event.removeNativeListener(R,n,this._onKeyPressWrapped);
}}}}),__jg:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(T){var U=T.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&U==p){qx.bom.Event.removeNativeListener(T,n,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(T,v,this._onInputWrapper);
},"opera":function(V){qx.bom.Event.removeNativeListener(V,c,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(V,h,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(V,k,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(V,v,this._onInputWrapper);
},"default":function(W){qx.bom.Event.removeNativeListener(W,v,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(u,{"mshtml|opera":function(e,X){if(e.keyCode===13){if(X.value!==this.__jd){this.__jd=X.value;
qx.event.Registration.fireEvent(X,w,qx.event.type.Data,[X.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__jb=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__jb=false;
}},"default":null}),_onBlur:qx.core.Variant.select(u,{"opera":function(e){if(this.__jc){window.clearTimeout(this.__jc);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var Y=qx.bom.Event.getTarget(e);
if(!this.__jb){if(qx.core.Variant.isSet(u,m)){this.__jc=window.setTimeout(function(){qx.event.Registration.fireEvent(Y,v,qx.event.type.Data,[Y.value]);
},0);
}else{qx.event.Registration.fireEvent(Y,v,qx.event.type.Data,[Y.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var bb=qx.bom.Event.getTarget(e);
var ba=bb.value;

if(bb.type===b){var ba=[];

for(var i=0,o=bb.options,l=o.length;i<l;i++){if(o[i].selected){ba.push(o[i].value);
}}}qx.event.Registration.fireEvent(bb,w,qx.event.type.Data,[ba]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);

if(bc.type===q){if(bc.checked){qx.event.Registration.fireEvent(bc,w,qx.event.type.Data,[bc.value]);
}}else{qx.event.Registration.fireEvent(bc,w,qx.event.type.Data,[bc.checked]);
}}),_onProperty:qx.core.Variant.select(u,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bd=qx.bom.Event.getTarget(e);
var be=e.propertyName;

if(be===f&&(bd.type===t||bd.type===s||bd.tagName.toLowerCase()===p)){if(!bd.$$inValueSet){qx.event.Registration.fireEvent(bd,v,qx.event.type.Data,[bd.value]);
}}else if(be===g){if(bd.type===r){qx.event.Registration.fireEvent(bd,w,qx.event.type.Data,[bd.checked]);
}else if(bd.checked){qx.event.Registration.fireEvent(bd,w,qx.event.type.Data,[bd.value]);
}}}),"default":function(){}})},defer:function(bf){qx.event.Registration.addHandler(bf);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="textarea",p="wrap",o="text",n="mshtml",m="number",d="checkbox",k="select-one",g="input",c="option",b="value",f="radio",e="qx.bom.Input",h="nowrap",a="auto",j="normal";
qx.Class.define(e,{statics:{__jk:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){{};
var x=x?qx.lang.Object.clone(x):{};
var z;

if(w===q||w===u){z=w;
}else{z=g;
x.type=w;
}return qx.bom.Element.create(z,x,y);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===m){B+=v;
}
if((D===d||D===f)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===u){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(b);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if((D===o||D===q)&&qx.core.Variant.isSet(r,n)){A.$$inValueSet=true;
A.value=B;
A.$$inValueSet=null;
}else{A.value=B;
}},getValue:function(J){var P=J.nodeName.toLowerCase();

if(P===c){return (J.attributes.value||{}).specified?J.value:J.text;
}
if(P===u){var K=J.selectedIndex;
if(K<0){return null;
}var Q=[];
var S=J.options;
var R=J.type==k;
var O=qx.bom.Input;
var N;
for(var i=R?K:0,M=R?K+1:S.length;i<M;i++){var L=S[i];

if(L.selected){N=O.getValue(L);
if(R){return N;
}Q.push(N);
}}return Q;
}else{return (J.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(T,U){T.wrap=U?t:s;
},"gecko|webkit":function(V,W){var Y=W?t:s;
var X=W?v:a;
V.setAttribute(p,Y);
V.style.overflow=X;
},"default":function(ba,bb){ba.style.whiteSpace=bb?j:h;
}})}});
})();
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var j=new qx.ui.layout.Grid();
j.setRowFlex(0,1);
j.setColumnFlex(1,1);
j.setColumnFlex(2,1);
this.setLayout(j);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(k,l){if(k){this._showChildControl(h).setValue(k);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(m,n){if(m){this._showChildControl(f).setSource(m);
}else{this._excludeChildControl(f);
}},_applyIcon:function(o,p){if(o){this._showChildControl(i).setSource(o);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(q,r){var s;

switch(q){case h:s=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:1});
break;
case f:s=new qx.ui.basic.Image(this.getSortIcon());
s.setAnonymous(true);
this._add(s,{row:0,column:2});
break;
case i:s=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:0});
break;
}return s||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,q);
}}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(k){var l={"  ":e,"\n":d};
return l[k]||k;
});
},toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(n){if(n.indexOf(f)===0){return b;
}else if(n.length>0&&n.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(o){o.FROM_CHARCODE=qx.lang.Object.invert(o.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(h,j){var m,o=d;

for(var i=0,l=h.length;i<l;i++){var n=h.charAt(i);
var k=n.charCodeAt(0);

if(j[k]){m=f+j[k]+g;
}else{if(k>0x7F){m=b+k+g;
}else{m=n;
}}o+=m;
}return o;
},unescape:function(p,q){return p.replace(/&[#\w]+;/gi,function(r){var s=r;
var r=r.substring(1,r.length-1);
var t=q[r];

if(t){s=String.fromCharCode(t);
}else{if(r.charAt(0)==c){if(r.charAt(1).toUpperCase()==e){t=r.substring(2);
if(t.match(/^[0-9A-Fa-f]+$/gi)){s=String.fromCharCode(parseInt(t,16));
}}else{t=r.substring(1);
if(t.match(/^\d+$/gi)){s=String.fromCharCode(parseInt(t,10));
}}}}return s;
});
}}});
})();
(function(){var bD="(\\d\\d?)",bC="format",bB="",bA="abbreviated",bz="wide",by="(",bx=")",bw="|",bv="stand-alone",bu="wildcard",bj="default",bi="literal",bh="'",bg="hour",bf="(\\d\\d?\\d?)",be="ms",bd="narrow",bc="-",bb="quoted_literal",ba='a',bK="HH:mm:ss",bL="+",bI="HHmmss",bJ="long",bG='z',bH="0",bE="sec",bF="day",bM='Z',bN=" ",bn="min",bm="mm",bp="(\\d+)",bo="h",br="KK",bq='L',bt="Z",bs="(\\d\\d+)",bl="EEEE",bk="^",a=":",b='y',c="K",d="a",e="([\\+\\-]\\d\\d:?\\d\\d)",f="GMT",g="dd",h="qx.util.format.DateFormat",j="yyy",k="H",bR="YYYY",bQ="y",bP="HH",bO="EE",bV='h',bU="S",bT='s',bS='A',bX="yyyyyy",bW="kk",J="ss",K='H',H='S',I="MMMM",N='c',O="d",L="([a-zA-Z]+)",M='k',F="m",G='Y',s='D',r="yyyyy",u='K',t="hh",o="SSS",n="MM",q="yy",p="(\\d\\d\\d\\d\\d\\d+)",m="yyyy-MM-dd HH:mm:ss",l="(\\d\\d\\d\\d\\d+)",T="short",U='d',V="unkown",W='m',P="(\\d\\d\\d\\d)",Q="(\\d\\d\\d+)",R="k",S='M',X="(\\d\\d\\d\\d+)",Y="SS",C="MMM",B="s",A="M",z='w',y="EEE",x="$",w="?",v='E',E="z",D="yyyy";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(bY,ca){qx.core.Object.call(this);

if(!ca){this.__hz=qx.locale.Manager.getInstance().getLocale();
}else{this.__hz=ca;
}
if(bY!=null){this.__hA=bY.toString();
}else{this.__hA=qx.locale.Date.getDateFormat(bJ,this.__hz)+bN+qx.locale.Date.getDateTimeFormat(bI,bK,this.__hz);
}},statics:{getDateTimeInstance:function(){var cc=qx.util.format.DateFormat;
var cb=qx.locale.Date.getDateFormat(bJ)+bN+qx.locale.Date.getDateTimeFormat(bI,bK);

if(cc._dateInstance==null||cc._dateInstance.__hA!=cb){cc._dateTimeInstance=new cc();
}return cc._dateTimeInstance;
},getDateInstance:function(){var ce=qx.util.format.DateFormat;
var cd=qx.locale.Date.getDateFormat(T)+bB;

if(ce._dateInstance==null||ce._dateInstance.__hA!=cd){ce._dateInstance=new ce(cd);
}return ce._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:m,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__hz:null,__hA:null,__hB:null,__hC:null,__hD:null,__hE:function(cf,cg){var ch=bB+cf;

while(ch.length<cg){ch=bH+ch;
}return ch;
},__hF:function(ci){var cj=new Date(ci.getTime());
var ck=cj.getDate();

while(cj.getMonth()!=0){cj.setDate(-1);
ck+=cj.getDate()+1;
}return ck;
},__hG:function(cl){return new Date(cl.getTime()+(3-((cl.getDay()+6)%7))*86400000);
},__hH:function(cm){var co=this.__hG(cm);
var cp=co.getFullYear();
var cn=this.__hG(new Date(cp,0,4));
return Math.floor(1.5+(co.getTime()-cn.getTime())/86400000/7);
},format:function(cq){if(cq==null){return null;
}var cw=qx.util.format.DateFormat;
var cx=this.__hz;
var cH=cq.getFullYear();
var cB=cq.getMonth();
var cJ=cq.getDate();
var cr=cq.getDay();
var cC=cq.getHours();
var cy=cq.getMinutes();
var cD=cq.getSeconds();
var cF=cq.getMilliseconds();
var cI=cq.getTimezoneOffset();
var cu=cI>0?1:-1;
var cs=Math.floor(Math.abs(cI)/60);
var cz=Math.abs(cI)%60;
this.__hI();
var cG=bB;

for(var i=0;i<this.__hD.length;i++){var cE=this.__hD[i];

if(cE.type==bi){cG+=cE.text;
}else{var cv=cE.character;
var cA=cE.size;
var ct=w;

switch(cv){case b:case G:if(cA==2){ct=this.__hE(cH%100,2);
}else{ct=cH+bB;

if(cA>ct.length){for(var i=ct.length;i<cA;i++){ct=bH+ct;
}}}break;
case s:ct=this.__hE(this.__hF(cq),cA);
break;
case U:ct=this.__hE(cJ,cA);
break;
case z:ct=this.__hE(this.__hH(cq),cA);
break;
case v:if(cA==2){ct=qx.locale.Date.getDayName(bd,cr,cx,bC);
}else if(cA==3){ct=qx.locale.Date.getDayName(bA,cr,cx,bC);
}else if(cA==4){ct=qx.locale.Date.getDayName(bz,cr,cx,bC);
}break;
case N:if(cA==2){ct=qx.locale.Date.getDayName(bd,cr,cx,bv);
}else if(cA==3){ct=qx.locale.Date.getDayName(bA,cr,cx,bv);
}else if(cA==4){ct=qx.locale.Date.getDayName(bz,cr,cx,bv);
}break;
case S:if(cA==1||cA==2){ct=this.__hE(cB+1,cA);
}else if(cA==3){ct=qx.locale.Date.getMonthName(bA,cB,cx,bC);
}else if(cA==4){ct=qx.locale.Date.getMonthName(bz,cB,cx,bC);
}break;
case bq:if(cA==1||cA==2){ct=this.__hE(cB+1,cA);
}else if(cA==3){ct=qx.locale.Date.getMonthName(bA,cB,cx,bv);
}else if(cA==4){ct=qx.locale.Date.getMonthName(bz,cB,cx,bv);
}break;
case ba:ct=(cC<12)?qx.locale.Date.getAmMarker(cx):qx.locale.Date.getPmMarker(cx);
break;
case K:ct=this.__hE(cC,cA);
break;
case M:ct=this.__hE((cC==0)?24:cC,cA);
break;
case u:ct=this.__hE(cC%12,cA);
break;
case bV:ct=this.__hE(((cC%12)==0)?12:(cC%12),cA);
break;
case W:ct=this.__hE(cy,cA);
break;
case bT:ct=this.__hE(cD,cA);
break;
case H:ct=this.__hE(cF,cA);
break;
case bG:if(cA==1){ct=f+((cu>0)?bc:bL)+this.__hE(Math.abs(cs))+a+this.__hE(cz,2);
}else if(cA==2){ct=cw.MEDIUM_TIMEZONE_NAMES[cs];
}else if(cA==3){ct=cw.FULL_TIMEZONE_NAMES[cs];
}break;
case bM:ct=((cu>0)?bc:bL)+this.__hE(Math.abs(cs),2)+this.__hE(cz,2);
break;
}cG+=ct;
}}return cG;
},parse:function(cK){this.__hJ();
var cQ=this.__hB.regex.exec(cK);

if(cQ==null){throw new Error("Date string '"+cK+"' does not match the date format: "+this.__hA);
}var cL={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var cM=1;

for(var i=0;i<this.__hB.usedRules.length;i++){var cO=this.__hB.usedRules[i];
var cN=cQ[cM];

if(cO.field!=null){cL[cO.field]=parseInt(cN,10);
}else{cO.manipulator(cL,cN);
}cM+=(cO.groups==null)?1:cO.groups;
}var cP=new Date(cL.year,cL.month,cL.day,(cL.ispm)?(cL.hour+12):cL.hour,cL.min,cL.sec,cL.ms);

if(cL.month!=cP.getMonth()||cL.year!=cP.getFullYear()){throw new Error("Error parsing date '"+cK+"': the value for day or month is too large");
}return cP;
},__hI:function(){if(this.__hD!=null){return;
}this.__hD=[];
var cV;
var cT=0;
var cX=bB;
var cR=this.__hA;
var cU=bj;
var i=0;

while(i<cR.length){var cW=cR.charAt(i);

switch(cU){case bb:if(cW==bh){if(i+1>=cR.length){i++;
break;
}var cS=cR.charAt(i+1);

if(cS==bh){cX+=cW;
i++;
}else{i++;
cU=V;
}}else{cX+=cW;
i++;
}break;
case bu:if(cW==cV){cT++;
i++;
}else{this.__hD.push({type:bu,character:cV,size:cT});
cV=null;
cT=0;
cU=bj;
}break;
default:if((cW>=ba&&cW<=bG)||(cW>=bS&&cW<=bM)){cV=cW;
cU=bu;
}else if(cW==bh){if(i+1>=cR.length){cX+=cW;
i++;
break;
}var cS=cR.charAt(i+1);

if(cS==bh){cX+=cW;
i++;
}i++;
cU=bb;
}else{cU=bj;
}
if(cU!=bj){if(cX.length>0){this.__hD.push({type:bi,text:cX});
cX=bB;
}}else{cX+=cW;
i++;
}break;
}}if(cV!=null){this.__hD.push({type:bu,character:cV,size:cT});
}else if(cX.length>0){this.__hD.push({type:bi,text:cX});
}},__hJ:function(){if(this.__hB!=null){return ;
}var dc=this.__hA;
this.__hK();
this.__hI();
var di=[];
var de=bk;

for(var da=0;da<this.__hD.length;da++){var dj=this.__hD[da];

if(dj.type==bi){de+=qx.lang.String.escapeRegexpChars(dj.text);
}else{var db=dj.character;
var df=dj.size;
var dd;

for(var dk=0;dk<this.__hC.length;dk++){var dg=this.__hC[dk];

if(db==dg.pattern.charAt(0)&&df==dg.pattern.length){dd=dg;
break;
}}if(dd==null){var dh=bB;

for(var i=0;i<df;i++){dh+=db;
}throw new Error("Malformed date format: "+dc+". Wildcard "+dh+" is not supported");
}else{di.push(dd);
de+=dd.regex;
}}}de+=x;
var cY;

try{cY=new RegExp(de);
}catch(dl){throw new Error("Malformed date format: "+dc);
}this.__hB={regex:cY,"usedRules":di,pattern:de};
},__hK:function(){var dw=qx.util.format.DateFormat;
var dz=qx.lang.String;

if(this.__hC!=null){return ;
}var dx=this.__hC=[];
var dn=qx.locale.Date.getAmMarker(this.__hz).toString()||dw.AM_MARKER;
var dE=qx.locale.Date.getPmMarker(this.__hz).toString()||dw.PM_MARKER;
var ds=function(dI,dJ){dJ=parseInt(dJ,10);

if(dJ<dw.ASSUME_YEAR_2000_THRESHOLD){dJ+=2000;
}else if(dJ<100){dJ+=1900;
}dI.year=dJ;
};
var du=function(dK,dL){dK.month=parseInt(dL,10)-1;
};
var dq=function(dM,dN){var dO=qx.locale.Date.getPmMarker(this.__hz).toString()||dw.PM_MARKER;
dM.ispm=(dN==dO);
};
var dG=function(dP,dQ){dP.hour=parseInt(dQ,10)%24;
};
var dp=function(dR,dS){dR.hour=parseInt(dS,10)%12;
};
var dB=function(dT,dU){return;
};
var dH=qx.locale.Date.getMonthNames(bA,this.__hz,bC);

for(var i=0;i<dH.length;i++){dH[i]=dz.escapeRegexpChars(dH[i].toString());
}var dr=function(dV,dW){dW=dz.escapeRegexpChars(dW);
dV.month=dH.indexOf(dW);
};
var dy=qx.locale.Date.getMonthNames(bz,this.__hz,bC);

for(var i=0;i<dy.length;i++){dy[i]=dz.escapeRegexpChars(dy[i].toString());
}var dC=function(dX,dY){dY=dz.escapeRegexpChars(dY);
dX.month=dy.indexOf(dY);
};
var dm=qx.locale.Date.getDayNames(bd,this.__hz,bC);

for(var i=0;i<dm.length;i++){dm[i]=dz.escapeRegexpChars(dm[i].toString());
}var dF=function(ea,eb){eb=dz.escapeRegexpChars(eb);
ea.month=dm.indexOf(eb);
};
var dD=qx.locale.Date.getDayNames(bA,this.__hz,bC);

for(var i=0;i<dD.length;i++){dD[i]=dz.escapeRegexpChars(dD[i].toString());
}var dt=function(ec,ed){ed=dz.escapeRegexpChars(ed);
ec.month=dD.indexOf(ed);
};
var dA=qx.locale.Date.getDayNames(bz,this.__hz,bC);

for(var i=0;i<dA.length;i++){dA[i]=dz.escapeRegexpChars(dA[i].toString());
}var dv=function(ee,ef){ef=dz.escapeRegexpChars(ef);
ee.month=dA.indexOf(ef);
};
dx.push({pattern:bR,regex:P,manipulator:ds});
dx.push({pattern:bQ,regex:bp,manipulator:ds});
dx.push({pattern:q,regex:bs,manipulator:ds});
dx.push({pattern:j,regex:Q,manipulator:ds});
dx.push({pattern:D,regex:X,manipulator:ds});
dx.push({pattern:r,regex:l,manipulator:ds});
dx.push({pattern:bX,regex:p,manipulator:ds});
dx.push({pattern:A,regex:bD,manipulator:du});
dx.push({pattern:n,regex:bD,manipulator:du});
dx.push({pattern:C,regex:by+dH.join(bw)+bx,manipulator:dr});
dx.push({pattern:I,regex:by+dy.join(bw)+bx,manipulator:dC});
dx.push({pattern:g,regex:bD,field:bF});
dx.push({pattern:O,regex:bD,field:bF});
dx.push({pattern:bO,regex:by+dm.join(bw)+bx,manipulator:dF});
dx.push({pattern:y,regex:by+dD.join(bw)+bx,manipulator:dt});
dx.push({pattern:bl,regex:by+dA.join(bw)+bx,manipulator:dv});
dx.push({pattern:d,regex:by+dn+bw+dE+bx,manipulator:dq});
dx.push({pattern:bP,regex:bD,field:bg});
dx.push({pattern:k,regex:bD,field:bg});
dx.push({pattern:bW,regex:bD,manipulator:dG});
dx.push({pattern:R,regex:bD,manipulator:dG});
dx.push({pattern:br,regex:bD,field:bg});
dx.push({pattern:c,regex:bD,field:bg});
dx.push({pattern:t,regex:bD,manipulator:dp});
dx.push({pattern:bo,regex:bD,manipulator:dp});
dx.push({pattern:bm,regex:bD,field:bn});
dx.push({pattern:F,regex:bD,field:bn});
dx.push({pattern:J,regex:bD,field:bE});
dx.push({pattern:B,regex:bD,field:bE});
dx.push({pattern:o,regex:bf,field:be});
dx.push({pattern:Y,regex:bf,field:be});
dx.push({pattern:bU,regex:bf,field:be});
dx.push({pattern:bt,regex:e,manipulator:dB});
dx.push({pattern:E,regex:L,manipulator:dB});
}},destruct:function(){this.__hD=this.__hB=this.__hC=null;
}});
})();
(function(){var k="_",j="format",h="thu",g="sat",f="cldr_day_",e="cldr_month_",d="wed",c="fri",b="tue",a="mon",B="sun",A="short",z="HH:mm",y="HHmmsszz",x="HHmm",w="HHmmss",v="cldr_date_format_",u="HH:mm:ss zz",t="full",s="cldr_pm",q="long",r="medium",o="cldr_am",p="qx.locale.Date",m="cldr_date_time_format_",n="cldr_time_format_",l="HH:mm:ss";
qx.Class.define(p,{statics:{__hy:qx.locale.Manager.getInstance(),getAmMarker:function(C){return this.__hy.localize(o,[],C);
},getPmMarker:function(D){return this.__hy.localize(s,[],D);
},getDayNames:function(length,E,F){var F=F?F:j;
{};
var H=[B,a,b,d,h,c,g];
var I=[];

for(var i=0;i<H.length;i++){var G=f+F+k+length+k+H[i];
I.push(this.__hy.localize(G,[],E));
}return I;
},getDayName:function(length,J,K,L){var L=L?L:j;
{};
var N=[B,a,b,d,h,c,g];
var M=f+L+k+length+k+N[J];
return this.__hy.localize(M,[],K);
},getMonthNames:function(length,O,P){var P=P?P:j;
{};
var R=[];

for(var i=0;i<12;i++){var Q=e+P+k+length+k+(i+1);
R.push(this.__hy.localize(Q,[],O));
}return R;
},getMonthName:function(length,S,T,U){var U=U?U:j;
{};
var V=e+U+k+length+k+(S+1);
return this.__hy.localize(V,[],T);
},getDateFormat:function(W,X){{};
var Y=v+W;
return this.__hy.localize(Y,[],X);
},getDateTimeFormat:function(ba,bb,bc){var be=m+ba;
var bd=this.__hy.localize(be,[],bc);

if(bd==be){bd=bb;
}return bd;
},getTimeFormat:function(bf,bg){{};
var bi=n+bf;
var bh=this.__hy.localize(bi,[],bg);

if(bh!=bi){return bh;
}
switch(bf){case A:case r:return qx.locale.Date.getDateTimeFormat(x,z);
case q:return qx.locale.Date.getDateTimeFormat(w,l);
case t:return qx.locale.Date.getDateTimeFormat(y,u);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bj){var bk={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bl=qx.locale.Date._getTerritory(bj);
return bk[bl]!=null?bk[bl]:1;
},getWeekendStart:function(bm){var bo={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bn=qx.locale.Date._getTerritory(bm);
return bo[bn]!=null?bo[bn]:6;
},getWeekendEnd:function(bp){var bq={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var br=qx.locale.Date._getTerritory(bp);
return bq[br]!=null?bq[br]:0;
},isWeekend:function(bs,bt){var bv=qx.locale.Date.getWeekendStart(bt);
var bu=qx.locale.Date.getWeekendEnd(bt);

if(bu>bv){return ((bs>=bv)&&(bs<=bu));
}else{return ((bs>=bv)||(bs<=bu));
}},_getTerritory:function(bw){if(bw){var bx=bw.split(k)[1]||bw;
}else{bx=this.__hy.getTerritory()||this.__hy.getLanguage();
}return bx.toUpperCase();
}}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){qx.ui.core.LayoutItem.call(this);
this.setColumnWidth(e);
},members:{__gQ:null,renderLayout:function(f,top,g,h){this.__gQ=g;
},getComputedWidth:function(){return this.__gQ;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(i,j){var j=j||0;
var k=null;

if(typeof i==c){this.setWidth(i);
}else if(typeof i==d){if(i==e){j=1;
}else{var l=i.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(l){if(l[1]==b){j=parseFloat(i);
}else{k=i;
}}}}this.setLayoutProperties({flex:j,width:k});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var b="qx.ui.table.columnmodel.resizebehavior.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,members:{_setNumColumns:function(c){throw new Error("_setNumColumns is abstract");
},onAppear:function(event,d){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(){var f=this.getTableColumnModel();
var i=f.getTable();
var e=i._getPaneScrollerArr();

if(!e[0]||!e[0].getLayoutParent().getBounds()){return null;
}var h=e[0].getLayoutParent().getBounds().width;
var g=e[e.length-1];
h-=g.getPaneInsetRight();
return h;
}}});
})();
(function(){var j="Function",h="Boolean",g="minWidth",f="width",e="qx.ui.table.columnmodel.Resize",d="qx.ui.table.columnmodel.resizebehavior.Default",c="__fq",b="maxWidth",a="__fp";
qx.Class.define(d,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){qx.ui.table.columnmodel.resizebehavior.Abstract.call(this);
this.__fo=[];
this.__fp=new qx.ui.layout.HBox();
this.__fp.connectToWidget(this);
this.__fq=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:j,init:function(k){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:h,init:false},tableColumnModel:{check:e}},members:{__fp:null,__fr:null,__fo:null,__fq:null,__fs:false,setWidth:function(m,n,o){if(m>=this.__fo.length){throw new Error("Column number out of range");
}this.__fo[m].setColumnWidth(n,o);
this.__fq.schedule();
},setMinWidth:function(p,q){if(p>=this.__fo.length){throw new Error("Column number out of range");
}this.__fo[p].setMinWidth(q);
this.__fq.schedule();
},setMaxWidth:function(r,s){if(r>=this.__fo.length){throw new Error("Column number out of range");
}this.__fo[r].setMaxWidth(s);
this.__fq.schedule();
},set:function(t,u){for(var v in u){switch(v){case f:this.setWidth(t,u[v]);
break;
case g:this.setMinWidth(t,u[v]);
break;
case b:this.setMaxWidth(t,u[v]);
break;
default:throw new Error("Unknown property: "+v);
}}},onAppear:function(event,w){if(w===true||!this.__fs||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__fs=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var x=event.getData();
if(x.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(y){var z=this.__fo;
if(y<=z.length){z.splice(y,z.length);
return;
}for(var i=z.length;i<y;i++){z[i]=this.getNewResizeBehaviorColumnData()();
z[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__fr;
},_computeColumnsFlexWidth:function(){this.__fq.cancel();
var E=this._getAvailableWidth();

if(E===null){return;
}var A=this.getTableColumnModel();
var C=A.getVisibleColumns();
var D=C.length;
var B=this.__fo;
var i,l;

if(D===0){return;
}var G=[];

for(i=0;i<D;i++){G.push(B[C[i]]);
}this.__fr=G;
this.__ft();
this.__fp.renderLayout(E,100);
for(i=0,l=G.length;i<l;i++){var F=G[i].getComputedWidth();
A.setColumnWidth(C[i],F);
}},__ft:function(){this.__fp.invalidateChildrenCache();
var H=this.__fr;

for(var i=0,l=H.length;i<l;i++){H[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var M=this.getTableColumnModel();
var P=event.getData();
var K=M.getVisibleColumns();
var J=this._getAvailableWidth();
var I=K.length;
if(P.newWidth>P.oldWidth){return ;
}var i;
var L;
var O=0;

for(i=0;i<I;i++){O+=M.getColumnWidth(K[i]);
}if(O<J){for(i=0;i<K.length;i++){if(K[i]==P.col){L=K[i+1];
break;
}}
if(L){var N=(J-(O-M.getColumnWidth(L)));
M.setColumnWidth(L,N);
}}},_extendLastColumn:function(event){var T=this.getTableColumnModel();
var X=event.getData();
if(X.visible){return;
}var S=T.getVisibleColumns();
if(S.length==0){return;
}var R=this._getAvailableWidth(T);
var Q=S.length;
var i;
var V;
var W=0;

for(i=0;i<Q;i++){W+=T.getColumnWidth(S[i]);
}if(W<R){V=S[S.length-1];
var U=(R-(W-T.getColumnWidth(V)));
T.setColumnWidth(V,U);
}},_getResizeColumnData:function(){return this.__fo;
}},destruct:function(){this.__fo=this.__fr=null;
this._disposeObjects(a,c);
}});
})();
(function(){var o="Boolean",n="column-button",m="Function",k="qx.event.type.Data",j="statusbar",h="qx.ui.table.pane.CellEvent",g="function",f="PageUp",e="dataChanged",d='"',bF="changeLocale",bE="changeSelection",bD="qx.dynlocale",bC="__hi",bB="Enter",bA="metaDataChanged",bz="on",by="_applyStatusBarVisible",bx="columnVisibilityMenuCreateStart",bw="blur",v="qx.ui.table.Table",w="columnVisibilityMenuCreateEnd",t="changeVisible",u="_applyResetSelectionOnHeaderClick",r="_applyMetaColumnCounts",s="focus",p="changeDataRowRenderer",q="changeHeaderCellHeight",E="Escape",F="A",X="changeSelectionModel",T="Left",bg="Down",bb="Integer",bs="__gY",bm="_applyHeaderCellHeight",M="visibilityChanged",bv="qx.ui.table.ITableModel",bu="orderChanged",bt="_applySelectionModel",K="menu-button",P="menu",R="_applyAdditionalStatusBarText",V="_applyFocusCellOnMouseMove",Y="table",bc="_applyColumnVisibilityButtonVisible",bi="changeTableModel",bo="qx.event.type.Event",y="__gX",z="tableWidthChanged",O="__hh",bf="_applyHeaderCellsVisible",be="Object",bd="_applyShowCellFocusIndicator",bk="resize",bj="verticalScrollBarChanged",ba="changeScrollY",bh="_applyTableModel",a="End",bn="_applyKeepFirstVisibleRowComplete",A="widthChanged",B="one of one row",U="Home",b="_applyRowHeight",c="F2",J="appear",C="Up",D="__hg",I="%1 rows",W="qx.ui.table.selection.Model",bq="one row",bp="PageDown",Q="%1 of %2 rows",br="keypress",L="changeRowHeight",bl="Number",G="header",H="qx.ui.table.IRowRenderer",N="Right",S="Space";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(bG,bH){qx.ui.core.Widget.call(this);
if(!bH){bH={};
}
if(bH.initiallyHiddenColumns){this.setInitiallyHiddenColumns(bH.initiallyHiddenColumns);
}
if(bH.selectionManager){this.setNewSelectionManager(bH.selectionManager);
}
if(bH.selectionModel){this.setNewSelectionModel(bH.selectionModel);
}
if(bH.tableColumnModel){this.setNewTableColumnModel(bH.tableColumnModel);
}
if(bH.tablePane){this.setNewTablePane(bH.tablePane);
}
if(bH.tablePaneHeader){this.setNewTablePaneHeader(bH.tablePaneHeader);
}
if(bH.tablePaneScroller){this.setNewTablePaneScroller(bH.tablePaneScroller);
}
if(bH.tablePaneModel){this.setNewTablePaneModel(bH.tablePaneModel);
}
if(bH.columnMenu){this.setNewColumnMenu(bH.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__gX=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__gX,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__gY=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bG||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(br,this._onKeyPress);
this.addListener(s,this._onFocusChanged);
this.addListener(bw,this._onFocusChanged);
var bI=new qx.ui.core.Widget().set({height:0});
this._add(bI);
bI.addListener(bk,this._onResize,this);
this.__ha=null;
this.__hb=null;
if(qx.core.Variant.isSet(bD,bz)){qx.locale.Manager.getInstance().addListener(bF,this._onChangeLocale,this);
}this.initStatusBarVisible();
bG=this.getTableModel();

if(bG.init&&typeof (bG.init)==g){bG.init(this);
}},events:{"columnVisibilityMenuCreateStart":k,"columnVisibilityMenuCreateEnd":k,"tableWidthChanged":bo,"verticalScrollBarChanged":k,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"dataEdited":k},statics:{__hc:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:Y},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:W,apply:bt,event:X},tableModel:{check:bv,apply:bh,event:bi},rowHeight:{check:bl,init:20,apply:b,event:L},forceLineHeight:{check:o,init:true},headerCellsVisible:{check:o,init:true,apply:bf},headerCellHeight:{check:bb,init:16,apply:bm,event:q,nullable:true},statusBarVisible:{check:o,init:true,apply:by},additionalStatusBarText:{nullable:true,init:null,apply:R},columnVisibilityButtonVisible:{check:o,init:true,apply:bc},metaColumnCounts:{check:be,apply:r},focusCellOnMouseMove:{check:o,init:false,apply:V},rowFocusChangeModifiesSelection:{check:o,init:true},showCellFocusIndicator:{check:o,init:true,apply:bd},keepFirstVisibleRowComplete:{check:o,init:true,apply:bn},alwaysUpdateCells:{check:o,init:false},resetSelectionOnHeaderClick:{check:o,init:true,apply:u},dataRowRenderer:{check:H,init:null,nullable:true,event:p},modalCellEditorPreOpenFunction:{check:m,init:null,nullable:true},newColumnMenu:{check:m,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:m,init:function(bJ){return new qx.ui.table.selection.Manager(bJ);
}},newSelectionModel:{check:m,init:function(bK){return new qx.ui.table.selection.Model(bK);
}},newTableColumnModel:{check:m,init:function(bL){return new qx.ui.table.columnmodel.Basic(bL);
}},newTablePane:{check:m,init:function(bM){return new qx.ui.table.pane.Pane(bM);
}},newTablePaneHeader:{check:m,init:function(bN){return new qx.ui.table.pane.Header(bN);
}},newTablePaneScroller:{check:m,init:function(bO){return new qx.ui.table.pane.Scroller(bO);
}},newTablePaneModel:{check:m,init:function(bP){return new qx.ui.table.pane.Model(bP);
}}},members:{__ha:null,__hb:null,__gX:null,__gY:null,__hd:null,__he:null,__hf:null,__hg:null,__hh:null,__hi:null,_createChildControlImpl:function(bQ,bR){var bS;

switch(bQ){case j:bS=new qx.ui.basic.Label();
bS.set({allowGrowX:true});
this._add(bS);
break;
case n:bS=this.getNewColumnMenu()();
bS.set({focusable:false});
var bT=bS.factory(P,{table:this});
bT.addListener(J,this._initColumnMenu,this);
break;
}return bS||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bQ);
},_applySelectionModel:function(bU,bV){this.__gY.setSelectionModel(bU);

if(bV!=null){bV.removeListener(bE,this._onSelectionChanged,this);
}bU.addListener(bE,this._onSelectionChanged,this);
},_applyRowHeight:function(bW,bX){var bY=this._getPaneScrollerArr();

for(var i=0;i<bY.length;i++){bY[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(ca,cb){var cc=this._getPaneScrollerArr();

for(var i=0;i<cc.length;i++){cc[i]._excludeChildControl(G);
}},_applyHeaderCellHeight:function(cd,ce){var cf=this._getPaneScrollerArr();

for(var i=0;i<cf.length;i++){cf[i].getHeader().setHeight(cd);
}},getEmptyTableModel:function(){if(!this.__hi){this.__hi=new qx.ui.table.model.Simple();
this.__hi.setColumns([]);
this.__hi.setData([]);
}return this.__hi;
},_applyTableModel:function(cg,ch){this.getTableColumnModel().init(cg.getColumnCount(),this);

if(ch!=null){ch.removeListener(bA,this._onTableModelMetaDataChanged,this);
ch.removeListener(e,this._onTableModelDataChanged,this);
}cg.addListener(bA,this._onTableModelMetaDataChanged,this);
cg.addListener(e,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,cg.getRowCount(),0,cg.getColumnCount());
this._onTableModelMetaDataChanged();
if(ch&&cg.init&&typeof (cg.init)==g){cg.init(this);
}},getTableColumnModel:function(){if(!this.__hh){var cl=this.__hh=this.getNewTableColumnModel()(this);
cl.addListener(M,this._onColVisibilityChanged,this);
cl.addListener(A,this._onColWidthChanged,this);
cl.addListener(bu,this._onColOrderChanged,this);
var ck=this.getTableModel();
cl.init(ck.getColumnCount(),this);
var ci=this._getPaneScrollerArr();

for(var i=0;i<ci.length;i++){var cj=ci[i];
var cm=cj.getTablePaneModel();
cm.setTableColumnModel(cl);
}}return this.__hh;
},_applyStatusBarVisible:function(cn,co){if(cn){this._showChildControl(j);
}else{this._excludeChildControl(j);
}
if(cn){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cp,cq){this.__hd=cp;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(cr,cs){if(cr){this._showChildControl(n);
}else{this._excludeChildControl(n);
}},_applyMetaColumnCounts:function(ct,cu){var cB=ct;
var cv=this._getPaneScrollerArr();
var cz={};

if(ct>cu){var cD=qx.event.Registration.getManager(cv[0]);

for(var cE in qx.ui.table.Table.__hc){cz[cE]={};
cz[cE].capture=cD.getListeners(cv[0],cE,true);
cz[cE].bubble=cD.getListeners(cv[0],cE,false);
}}this._cleanUpMetaColumns(cB.length);
var cA=0;

for(var i=0;i<cv.length;i++){var cF=cv[i];
var cC=cF.getTablePaneModel();
cC.setFirstColumnX(cA);
cC.setMaxColumnCount(cB[i]);
cA+=cB[i];
}if(cB.length>cv.length){var cy=this.getTableColumnModel();

for(var i=cv.length;i<cB.length;i++){var cC=this.getNewTablePaneModel()(cy);
cC.setFirstColumnX(cA);
cC.setMaxColumnCount(cB[i]);
cA+=cB[i];
var cF=this.getNewTablePaneScroller()(this);
cF.setTablePaneModel(cC);
cF.addListener(ba,this._onScrollY,this);
for(cE in qx.ui.table.Table.__hc){if(!cz[cE]){break;
}
if(cz[cE].capture&&cz[cE].capture.length>0){var cw=cz[cE].capture;

for(var i=0;i<cw.length;i++){var cx=cw[i].context;

if(!cx){cx=this;
}else if(cx==cv[0]){cx=cF;
}cF.addListener(cE,cw[i].handler,cx,true);
}}
if(cz[cE].bubble&&cz[cE].bubble.length>0){var cH=cz[cE].bubble;

for(var i=0;i<cH.length;i++){var cx=cH[i].context;

if(!cx){cx=this;
}else if(cx==cv[0]){cx=cF;
}cF.addListener(cE,cH[i].handler,cx,false);
}}}var cG=(i==cB.length-1)?1:0;
this.__gX.add(cF,{flex:cG});
cv=this._getPaneScrollerArr();
}}for(var i=0;i<cv.length;i++){var cF=cv[i];
var cI=(i==(cv.length-1));
cF.getHeader().setHeight(this.getHeaderCellHeight());
cF.setTopRightWidget(cI?this.getChildControl(n):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(n);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cJ,cK){var cL=this._getPaneScrollerArr();

for(var i=0;i<cL.length;i++){cL[i].setFocusCellOnMouseMove(cJ);
}},_applyShowCellFocusIndicator:function(cM,cN){var cO=this._getPaneScrollerArr();

for(var i=0;i<cO.length;i++){cO[i].setShowCellFocusIndicator(cM);
}},_applyKeepFirstVisibleRowComplete:function(cP,cQ){var cR=this._getPaneScrollerArr();

for(var i=0;i<cR.length;i++){cR[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(cS,cT){var cU=this._getPaneScrollerArr();

for(var i=0;i<cU.length;i++){cU[i].setResetSelectionOnHeaderClick(cS);
}},getSelectionManager:function(){return this.__gY;
},_getPaneScrollerArr:function(){return this.__gX.getChildren();
},getPaneScroller:function(cV){return this._getPaneScrollerArr()[cV];
},_cleanUpMetaColumns:function(cW){var cX=this._getPaneScrollerArr();

if(cX!=null){for(var i=cX.length-1;i>=cW;i--){cX[i].destroy();
}}},_onChangeLocale:function(cY){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(da){var db=this._getPaneScrollerArr();

for(var i=0;i<db.length;i++){db[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dc){var dd=this._getPaneScrollerArr();

for(var i=0;i<dd.length;i++){dd[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(de){var df=de.getData();
this._updateTableData(df.firstRow,df.lastRow,df.firstColumn,df.lastColumn,df.removeStart,df.removeCount);
},_updateTableData:function(dg,dh,di,dj,dk,dl){var dm=this._getPaneScrollerArr();
if(dl){this.getSelectionModel().removeSelectionInterval(dk,dk+dl);
if(this.__hb>=dk&&this.__hb<(dk+dl)){this.setFocusedCell();
}}
for(var i=0;i<dm.length;i++){dm[i].onTableModelDataChanged(dg,dh,di,dj);
}var dn=this.getTableModel().getRowCount();

if(dn!=this.__he){this.__he=dn;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(dp){if(!this.__hf){this.__hf=true;
var dq=this._getPaneScrollerArr();

for(var i=0;i<dq.length;i++){dq[i].setScrollY(dp.getData());
}this.__hf=false;
}},_onKeyPress:function(dr){if(!this.getEnabled()){return;
}var dy=this.__hb;
var dv=true;
var dz=dr.getKeyIdentifier();

if(this.isEditing()){if(dr.getModifiers()==0){switch(dz){case bB:this.stopEditing();
var dy=this.__hb;
this.moveFocusedCell(0,1);

if(this.__hb!=dy){dv=this.startEditing();
}break;
case E:this.cancelEditing();
this.focus();
break;
default:dv=false;
break;
}}}else{if(dr.isCtrlPressed()){dv=true;

switch(dz){case F:var dw=this.getTableModel().getRowCount();

if(dw>0){this.getSelectionModel().setSelectionInterval(0,dw-1);
}break;
default:dv=false;
break;
}}else{switch(dz){case S:this.__gY.handleSelectKeyDown(this.__hb,dr);
break;
case c:case bB:this.startEditing();
dv=true;
break;
case U:this.setFocusedCell(this.__ha,0,true);
break;
case a:var dw=this.getTableModel().getRowCount();
this.setFocusedCell(this.__ha,dw-1,true);
break;
case T:this.moveFocusedCell(-1,0);
break;
case N:this.moveFocusedCell(1,0);
break;
case C:this.moveFocusedCell(0,-1);
break;
case bg:this.moveFocusedCell(0,1);
break;
case f:case bp:var du=this.getPaneScroller(0);
var dx=du.getTablePane();
var dt=this.getRowHeight();
var ds=(dz==f)?-1:1;
dw=dx.getVisibleRowCount()-1;
du.setScrollY(du.getScrollY()+ds*dw*dt);
this.moveFocusedCell(0,ds*dw);
break;
default:dv=false;
}}}
if(dy!=this.__hb&&this.getRowFocusChangeModifiesSelection()){this.__gY.handleMoveKeyDown(this.__hb,dr);
}
if(dv){dr.preventDefault();
dr.stopPropagation();
}},_onFocusChanged:function(dA){var dB=this._getPaneScrollerArr();

for(var i=0;i<dB.length;i++){dB[i].onFocusChanged();
}},_onColVisibilityChanged:function(dC){var dD=this._getPaneScrollerArr();

for(var i=0;i<dD.length;i++){dD[i].onColVisibilityChanged();
}var dE=dC.getData();

if(this.__hg!=null&&dE.col!=null&&dE.visible!=null){this.__hg[dE.col].setVisible(dE.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){var dH=dF.getData();
dG[i].setColumnWidth(dH.col,dH.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(dI){var dJ=this._getPaneScrollerArr();

for(var i=0;i<dJ.length;i++){dJ[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(dK){var dL=this._getMetaColumnAtPageX(dK);
return (dL!=-1)?this.getPaneScroller(dL):null;
},setFocusedCell:function(dM,dN,dO){if(!this.isEditing()&&(dM!=this.__ha||dN!=this.__hb)){if(dM===null){dM=0;
}this.__ha=dM;
this.__hb=dN;
var dP=this._getPaneScrollerArr();

for(var i=0;i<dP.length;i++){dP[i].setFocusedCell(dM,dN);
}
if(dM!==null&&dO){this.scrollCellVisible(dM,dN);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__ha;
},getFocusedRow:function(){return this.__hb;
},highlightFocusedRow:function(dQ){this.getDataRowRenderer().setHighlightFocusRow(dQ);
},clearFocusedRowHighlight:function(dR){if(dR){var dT=dR.getRelatedTarget();

if(dT instanceof qx.ui.table.pane.Pane||dT instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dS=this._getPaneScrollerArr();

for(var i=0;i<dS.length;i++){dS[i].onFocusChanged();
}},moveFocusedCell:function(dU,dV){var ea=this.__ha;
var eb=this.__hb;

if(ea===null||eb===null){return;
}
if(dU!=0){var dY=this.getTableColumnModel();
var x=dY.getVisibleX(ea);
var dX=dY.getVisibleColumnCount();
x=qx.lang.Number.limit(x+dU,0,dX-1);
ea=dY.getVisibleColumnAtX(x);
}
if(dV!=0){var dW=this.getTableModel();
eb=qx.lang.Number.limit(eb+dV,0,dW.getRowCount()-1);
}this.setFocusedCell(ea,eb,true);
},scrollCellVisible:function(ec,ed){var ee=this.getTableColumnModel();
var x=ee.getVisibleX(ec);
var ef=this._getMetaColumnAtColumnX(x);

if(ef!=-1){this.getPaneScroller(ef).scrollCellVisible(ec,ed);
}},isEditing:function(){if(this.__ha!=null){var x=this.getTableColumnModel().getVisibleX(this.__ha);
var eg=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(eg).isEditing();
}return false;
},startEditing:function(){if(this.__ha!=null){var x=this.getTableColumnModel().getVisibleX(this.__ha);
var ei=this._getMetaColumnAtColumnX(x);
var eh=this.getPaneScroller(ei).startEditing();
return eh;
}return false;
},stopEditing:function(){if(this.__ha!=null){var x=this.getTableColumnModel().getVisibleX(this.__ha);
var ej=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ej).stopEditing();
}},cancelEditing:function(){if(this.__ha!=null){var x=this.getTableColumnModel().getVisibleX(this.__ha);
var ek=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ek).cancelEditing();
}},updateContent:function(){var el=this._getPaneScrollerArr();

for(var i=0;i<el.length;i++){el[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var em=this._getPaneScrollerArr();

for(var i=0;i<em.length;i++){em[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(n).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var en=this._getPaneScrollerArr();

for(var i=0;i<en.length;i++){en[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(n).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(eo){var ep=this._getPaneScrollerArr();

for(var i=0;i<ep.length;i++){var eq=ep[i].getContainerLocation();

if(eo>=eq.left&&eo<=eq.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(er){var et=this.getMetaColumnCounts();
var eu=0;

for(var i=0;i<et.length;i++){var es=et[i];
eu+=es;

if(es==-1||er<eu){return i;
}}return -1;
},_updateStatusBar:function(){var ev=this.getTableModel();

if(this.getStatusBarVisible()){var ew=this.getSelectionModel().getSelectedCount();
var ey=ev.getRowCount();
var ex;

if(ey>=0){if(ew==0){ex=this.trn(bq,I,ey,ey);
}else{ex=this.trn(B,Q,ey,ew,ey);
}}
if(this.__hd){if(ex){ex+=this.__hd;
}else{ex=this.__hd;
}}
if(ex){this.getChildControl(j).setValue(ex);
}}},_updateScrollerWidths:function(){var ez=this._getPaneScrollerArr();

for(var i=0;i<ez.length;i++){var eB=(i==(ez.length-1));
var eC=ez[i].getTablePaneModel().getTotalWidth();
ez[i].setPaneWidth(eC);
var eA=eB?1:0;
ez[i].setLayoutProperties({flex:eA});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var eG=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eJ=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eD=this._getPaneScrollerArr();
var eF=false;
var eI=false;

for(var i=0;i<eD.length;i++){var eK=(i==(eD.length-1));
var eE=eD[i].getNeededScrollBars(eF,!eK);

if(eE&eG){eF=true;
}
if(eK&&(eE&eJ)){eI=true;
}}for(var i=0;i<eD.length;i++){var eK=(i==(eD.length-1));
var eH;
eD[i].setHorizontalScrollBarVisible(eF);
if(eK){eH=eD[i].getVerticalScrollBarVisible();
}eD[i].setVerticalScrollBarVisible(eK&&eI);
if(eK&&eI!=eH){this.fireDataEvent(bj,eI);
}}},_initColumnMenu:function(){var eN=this.getTableModel();
var eO=this.getTableColumnModel();
var eP=this.getChildControl(n);
eP.empty();
var eM=eP.getMenu();
var eQ={table:this,menu:eM,columnButton:eP};
this.fireDataEvent(bx,eQ);
this.__hg={};

for(var eR=0,l=eN.getColumnCount();eR<l;eR++){var eL=eP.factory(K,{text:eN.getColumnName(eR),column:eR,bVisible:eO.isColumnVisible(eR)});
qx.core.Assert.assertInterface(eL,qx.ui.table.IColumnMenuItem);
eL.addListener(t,this._createColumnVisibilityCheckBoxHandler(eR),this);
this.__hg[eR]=eL;
}eQ={table:this,menu:eM,columnButton:eP};
this.fireDataEvent(w,eQ);
},_createColumnVisibilityCheckBoxHandler:function(eS){return function(eT){var eU=this.getTableColumnModel();
eU.setColumnVisible(eS,eT.getData());
};
},setColumnWidth:function(eV,eW){this.getTableColumnModel().setColumnWidth(eV,eW);
},_onResize:function(){this.fireEvent(z);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(eX,eY,self,fa){if(this.self(arguments).__hc[eX]){var fc=[eX];

for(var i=0,fb=this._getPaneScrollerArr();i<fb.length;i++){fc.push(fb[i].addListener.apply(fb[i],arguments));
}return fc.join(d);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,eX,eY,self,fa);
}},removeListener:function(fd,fe,self,ff){if(this.self(arguments).__hc[fd]){for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fg[i].removeListener.apply(fg[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fd,fe,self,ff);
}},removeListenerById:function(fh){var fl=fh.split(d);
var fk=fl.shift();

if(this.self(arguments).__hc[fk]){var fj=true;

for(var i=0,fi=this._getPaneScrollerArr();i<fi.length;i++){fj=fi[i].removeListenerById.call(fi[i],fl[i])&&fj;
}return fj;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fh);
}},destroy:function(){this.getChildControl(n).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(bD,bz)){qx.locale.Manager.getInstance().removeListener(bF,this._onChangeLocale,this);
}var fn=this.getSelectionModel();

if(fn){fn.dispose();
}var fm=this.getDataRowRenderer();

if(fm){fm.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(bs,y,bC,bC,O);
this._disposeMap(D);
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var t="",s="table-row-background-even",r="table-row-background-selected",q="table-row",p="background-color:",o="table-row-background-focused",n=';border-bottom: 1px solid ',m=';color:',l="table-row-selected",k="table-row-background-odd",d="default",j="table-row-background-focused-selected",g="qx.ui.table.rowrenderer.Default",c="table-row-line",b="'",f="height:",e=";",h="px;",a="1px solid ",i="Boolean";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__gR=t;
this.__gR={};
this.__gS={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(d));
var u=qx.theme.manager.Color.getInstance();
this.__gS.bgcolFocusedSelected=u.resolve(j);
this.__gS.bgcolFocused=u.resolve(o);
this.__gS.bgcolSelected=u.resolve(r);
this.__gS.bgcolEven=u.resolve(s);
this.__gS.bgcolOdd=u.resolve(k);
this.__gS.colSelected=u.resolve(l);
this.__gS.colNormal=u.resolve(q);
this.__gS.horLine=u.resolve(c);
},properties:{highlightFocusRow:{check:i,init:true}},members:{__gS:null,__gT:null,__gR:null,_insetY:1,_renderFont:function(v){if(v){this.__gT=v.getStyles();
this.__gR=qx.bom.element.Style.compile(this.__gT);
this.__gR=this.__gR.replace(/"/g,b);
}else{this.__gR=t;
this.__gT=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(w,x){var z=this.__gT;
var y=x.style;
qx.bom.element.Style.setStyles(x,z);

if(w.focusedRow&&this.getHighlightFocusRow()){y.backgroundColor=w.selected?this.__gS.bgcolFocusedSelected:this.__gS.bgcolFocused;
}else{if(w.selected){y.backgroundColor=this.__gS.bgcolSelected;
}else{y.backgroundColor=(w.row%2==0)?this.__gS.bgcolEven:this.__gS.bgcolOdd;
}}y.color=w.selected?this.__gS.colSelected:this.__gS.colNormal;
y.borderBottom=a+this.__gS.horLine;
},getRowHeightStyle:function(A){if(qx.bom.client.Feature.CONTENT_BOX){A-=this._insetY;
}return f+A+h;
},createRowStyle:function(B){var C=[];
C.push(e);
C.push(this.__gR);
C.push(p);

if(B.focusedRow&&this.getHighlightFocusRow()){C.push(B.selected?this.__gS.bgcolFocusedSelected:this.__gS.bgcolFocused);
}else{if(B.selected){C.push(this.__gS.bgcolSelected);
}else{C.push((B.row%2==0)?this.__gS.bgcolEven:this.__gS.bgcolOdd);
}}C.push(m);
C.push(B.selected?this.__gS.colSelected:this.__gS.colNormal);
C.push(n,this.__gS.horLine);
return C.join(t);
},getRowClass:function(D){return t;
},getRowAttributes:function(E){return t;
}},destruct:function(){this.__gS=this.__gT=this.__gR=null;
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__fU=new qx.ui.core.Blocker(this);
},members:{__fV:null,__fU:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
this.setMenu(j);
return j;
case f:var m=new qx.ui.table.columnmenu.MenuItem(h.text);
m.setVisible(h.bVisible);
this.getMenu().add(m);
return m;
case c:var k=new qx.ui.menu.Button(h.text);
k.set({appearance:e});
return k;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+g);
}},getBlocker:function(){return this.__fU;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__fU.dispose();
}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var h="checked",g="menu-checkbox",f="Boolean",d="_applyValue",c="changeValue",b="qx.ui.menu.CheckBox",a="execute";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(i,j){qx.ui.menu.AbstractButton.call(this);
if(i!=null){if(i.translate){this.setLabel(i.translate());
}else{this.setLabel(i);
}}
if(j!=null){this.setMenu(j);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:f,init:false,apply:d,event:c,nullable:true}},members:{_applyValue:function(k,l){k?this.addState(h):this.removeState(h);
},_onExecute:function(e){this.toggleValue();
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__gL:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__fC:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__fC=true;
}else{this.__fC=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__fC){this._handleSelectEvent(f,g);
}},handleClick:function(h,i){},handleSelectKeyDown:function(j,k){this._handleSelectEvent(j,k);
},handleMoveKeyDown:function(l,m){var o=this.getSelectionModel();

switch(m.getModifiers()){case 0:o.setSelectionInterval(l,l);
break;
case qx.event.type.Dom.SHIFT_MASK:var n=o.getAnchorSelectionIndex();

if(n==-1){o.setSelectionInterval(l,l);
}else{o.setSelectionInterval(n,l);
}break;
}},_handleSelectEvent:function(p,q){var t=this.getSelectionModel();
var r=t.getLeadSelectionIndex();
var s=t.getAnchorSelectionIndex();

if(q.isShiftPressed()){if(p!=r||t.isSelectionEmpty()){if(s==-1){s=p;
}
if(q.isCtrlOrCommandPressed()){t.addSelectionInterval(s,p);
}else{t.setSelectionInterval(s,p);
}}}else if(q.isCtrlOrCommandPressed()){if(t.isSelectedIndex(p)){t.removeSelectionInterval(p,p);
}else{t.addSelectionInterval(p,p);
}}else{t.setSelectionInterval(p,p);
}}}});
})();
(function(){var l="]",k="..",h="changeSelection",g="_applySelectionMode",f='ie',d="qx.event.type.Event",c="Ranges:",b="qx.ui.table.selection.Model",a=" [";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__fD=[];
this.__fE=-1;
this.__fF=-1;
this.hasBatchModeRefCount=0;
this.__fG=false;
},events:{"changeSelection":d},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:g}},members:{__fG:null,__fE:null,__fF:null,__fD:null,_applySelectionMode:function(m){this.resetSelection();
},setBatchMode:function(n){if(n){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__fG){this.__fG=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__fE;
},_setAnchorSelectionIndex:function(o){this.__fE=o;
},getLeadSelectionIndex:function(){return this.__fF;
},_setLeadSelectionIndex:function(p){this.__fF=p;
},_getSelectedRangeArr:function(){return this.__fD;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__fD.length==0;
},getSelectedCount:function(){var r=0;

for(var i=0;i<this.__fD.length;i++){var q=this.__fD[i];
r+=q.maxIndex-q.minIndex+1;
}return r;
},isSelectedIndex:function(s){for(var i=0;i<this.__fD.length;i++){var t=this.__fD[i];

if(s>=t.minIndex&&s<=t.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var u=[];

for(var i=0;i<this.__fD.length;i++){u.push({minIndex:this.__fD[i].minIndex,maxIndex:this.__fD[i].maxIndex});
}return u;
},iterateSelection:function(v,w){for(var i=0;i<this.__fD.length;i++){for(var j=this.__fD[i].minIndex;j<=this.__fD[i].maxIndex;j++){v.call(w,j);
}}},setSelectionInterval:function(x,y){var z=this.self(arguments);

switch(this.getSelectionMode()){case z.NO_SELECTION:return;
case z.SINGLE_SELECTION:if(this.isSelectedIndex(y)){return;
}x=y;
break;
case z.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=x;i<=y;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){if(qx.bom.client.Browser.NAME==f&&qx.bom.client.Browser.VERSION<=7){this.setBatchMode(false);
}throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(x,y);
this._fireChangeSelection();
},addSelectionInterval:function(A,B){var C=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case C.NO_SELECTION:return;
case C.MULTIPLE_INTERVAL_SELECTION:case C.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(A,B);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(A,B);
break;
}},removeSelectionInterval:function(D,E){this.__fE=D;
this.__fF=E;
var F=Math.min(D,E);
var H=Math.max(D,E);
for(var i=0;i<this.__fD.length;i++){var J=this.__fD[i];

if(J.minIndex>H){break;
}else if(J.maxIndex>=F){var K=(J.minIndex>=F)&&(J.minIndex<=H);
var I=(J.maxIndex>=F)&&(J.maxIndex<=H);

if(K&&I){this.__fD.splice(i,1);
i--;
}else if(K){J.minIndex=H+1;
}else if(I){J.maxIndex=F-1;
}else{var G={minIndex:H+1,maxIndex:J.maxIndex};
this.__fD.splice(i+1,0,G);
J.maxIndex=F-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__fD=[];
this.__fE=-1;
this.__fF=-1;
},_addSelectionInterval:function(L,M){this.__fE=L;
this.__fF=M;
var N=Math.min(L,M);
var P=Math.max(L,M);
var O=0;

for(;O<this.__fD.length;O++){var Q=this.__fD[O];

if(Q.minIndex>N){break;
}}this.__fD.splice(O,0,{minIndex:N,maxIndex:P});
var R=this.__fD[0];

for(var i=1;i<this.__fD.length;i++){var Q=this.__fD[i];

if(R.maxIndex+1>=Q.minIndex){R.maxIndex=Math.max(R.maxIndex,Q.maxIndex);
this.__fD.splice(i,1);
i--;
}else{R=Q;
}}},_dumpRanges:function(){var S=c;

for(var i=0;i<this.__fD.length;i++){var T=this.__fD[i];
S+=a+T.minIndex+k+T.maxIndex+l;
}this.debug(S);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__fG=true;
}else{this.fireEvent(h);
}}},destruct:function(){this.__fD=null;
}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__fd=F;
this.__fe=0;
this.__ff=0;
this.__fg=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__ff:null,__fe:null,__fd:null,__fh:null,__fi:null,__fj:null,__fg:null,__fk:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__fd;
},getTable:function(){return this.__fd.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__fj||L!=this.__fi){var N=this.__fi;
this.__fj=K;
this.__fi=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__fl();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__fk>=W&&W!==-1){this.__fl();
}},__fl:function(){this.__fg=[];
this.__fk=0;
},__fm:function(Y,ba,bb){if(!ba&&!bb&&this.__fg[Y]){return this.__fg[Y];
}else{return null;
}},__fn:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__fg[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__fg[bc]=bd;
this.__fk+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__fl();
}if(bi&&Math.abs(bi)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bi);
}else if(bk&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bj);
}else{this._updateAllRows();
}},_updateRowStyles:function(bl){var bp=this.getContentElement().getDomElement();

if(!bp||!bp.firstChild){this._updateAllRows();
return;
}var bt=this.getTable();
var bn=bt.getSelectionModel();
var bq=bt.getTableModel();
var bu=bt.getDataRowRenderer();
var bo=bp.firstChild.childNodes;
var bs={table:bt};
var bv=this.getFirstVisibleRow();
var y=0;
var bm=bo.length;

if(bl!=null){var br=bl-bv;

if(br>=0&&br<bm){bv=bl;
y=br;
bm=br+1;
}else{return;
}}
for(;y<bm;y++,bv++){bs.row=bv;
bs.selected=bn.isSelectedIndex(bv);
bs.focusedRow=(this.__fi==bv);
bs.rowData=bq.getRowData(bv);
bu.updateDataRowElement(bs,bo[y]);
}},_getRowsHtml:function(bw,bx){var bD=this.getTable();
var bG=bD.getSelectionModel();
var bA=bD.getTableModel();
var bB=bD.getTableColumnModel();
var bV=this.getPaneScroller().getTablePaneModel();
var bL=bD.getDataRowRenderer();
bA.prefetchRows(bw,bw+bx-1);
var bS=bD.getRowHeight();
var bU=bV.getColumnCount();
var bC=0;
var bz=[];
for(var x=0;x<bU;x++){var bY=bV.getColumnAtX(x);
var bF=bB.getColumnWidth(bY);
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__fj==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__fi==bE);
var bP=this.__fm(bE,bH,bK);

if(bP){bX.push(bP);
continue;
}var by=[];
var bR={table:bD};
bR.styleHeight=bS;
bR.row=bE;
bR.selected=bH;
bR.focusedRow=bK;
bR.rowData=bA.getRowData(bE);

if(!bR.rowData){ca=true;
}by.push(q);
var bO=bL.getRowAttributes(bR);

if(bO){by.push(bO);
}var bN=bL.getRowClass(bR);

if(bN){by.push(r,bN,g);
}var bM=bL.createRowStyle(bR);
bM+=m+bL.getRowHeightStyle(bS)+s;

if(bM){by.push(D,bM,g);
}by.push(v);
var bW=false;

for(x=0;x<bU&&!bW;x++){var bI=bz[x];

for(var bT in bI){bR[bT]=bI[bT];
}var bY=bR.col;
bR.value=bA.getValue(bY,bE);
var bJ=bB.getDataCellRenderer(bY);
bR.style=bJ.getDefaultCellStyle();
bW=bJ.createDataCellHtml(bR,by)||false;
}by.push(h);
var bQ=by.join(k);
this.__fn(bE,bQ,bH,bK);
bX.push(bQ);
}this.fireDataEvent(a,ca);
return bX.join(k);
},_scrollContent:function(cb){var cc=this.getContentElement().getDomElement();

if(!(cc&&cc.firstChild)){this._updateAllRows();
return;
}var cl=cc.firstChild;
var cd=cl.childNodes;
var cj=this.getVisibleRowCount();
var ci=this.getFirstVisibleRow();
var cg=this.getTable().getTableModel();
var cm=0;
cm=cg.getRowCount();
if(ci+cj>cm){this._updateAllRows();
return;
}var cn=cb<0?cj+cb:0;
var ce=cb<0?0:cj-cb;

for(i=Math.abs(cb)-1;i>=0;i--){var ch=cd[cn];

try{cl.removeChild(ch);
}catch(co){break;
}}if(!this.__fh){this.__fh=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__fh.innerHTML=ck;
var cf=this.__fh.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__fi!==null){this._updateRowStyles(this.__fi-cb);
this._updateRowStyles(this.__fi);
}this.fireEvent(f);
},_updateAllRows:function(){var cs=this.getContentElement().getDomElement();

if(!cs){this.addListenerOnce(t,arguments.callee,this);
return;
}var cy=this.getTable();
var cv=cy.getTableModel();
var cx=this.getPaneScroller().getTablePaneModel();
var cw=cx.getColumnCount();
var cp=cy.getRowHeight();
var ct=this.getFirstVisibleRow();
var cq=this.getVisibleRowCount();
var cz=cv.getRowCount();

if(ct+cq>cz){cq=Math.max(0,cz-ct);
}var cr=cx.getTotalWidth();
var cu;
if(cq>0){cu=[l,A,(cy.getForceLineHeight()?u+cp+p:k),c,n,this._getRowsHtml(ct,cq),d];
}else{cu=[];
}var cA=cu.join(k);
cs.innerHTML=cA;
this.setWidth(cr);
this.__fe=cw;
this.__ff=cq;
this.fireEvent(f);
}},destruct:function(){this.__fh=this.__fd=this.__fg=null;
}});
})();
(function(){var c="hovered",b="__gN",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(d){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__gM=new qx.ui.core.Blocker(this);
this.__gN=d;
},members:{__gN:null,__gO:null,__gP:null,__gM:null,getPaneScroller:function(){return this.__gN;
},getTable:function(){return this.__gN.getTable();
},getBlocker:function(){return this.__gM;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(e,f,g){var h=this.getHeaderWidgetAtColumn(e);

if(h!=null){h.setWidth(f);
}},setMouseOverColumn:function(i){if(i!=this.__gP){if(this.__gP!=null){var j=this.getHeaderWidgetAtColumn(this.__gP);

if(j!=null){j.removeState(c);
}}
if(i!=null){this.getHeaderWidgetAtColumn(i).addState(c);
}this.__gP=i;
}},getHeaderWidgetAtColumn:function(k){var l=this.getPaneScroller().getTablePaneModel().getX(k);
return this._getChildren()[l];
},showColumnMoveFeedback:function(m,x){var q=this.getContainerLocation();

if(this.__gO==null){var v=this.getTable();
var n=this.getPaneScroller().getTablePaneModel().getX(m);
var p=this._getChildren()[n];
var r=v.getTableModel();
var t=v.getTableColumnModel();
var u={xPos:n,col:m,name:r.getColumnName(m),table:v};
var s=t.getHeaderCellRenderer(m);
var o=s.createHeaderCell(u);
var w=p.getBounds();
o.setWidth(w.width);
o.setHeight(w.height);
o.setZIndex(1000000);
o.setOpacity(0.8);
o.setLayoutProperties({top:q.top});
this.getApplicationRoot().add(o);
this.__gO=o;
}this.__gO.setLayoutProperties({left:q.left+x});
this.__gO.show();
},hideColumnMoveFeedback:function(){if(this.__gO!=null){this.__gO.destroy();
this.__gO=null;
}},isShowingColumnMoveFeedback:function(){return this.__gO!=null;
},_updateContent:function(y){var I=this.getTable();
var C=I.getTableModel();
var F=I.getTableColumnModel();
var H=this.getPaneScroller().getTablePaneModel();
var K=this._getChildren();
var D=H.getColumnCount();
var G=C.getSortColumnIndex();
if(y){this._cleanUpCells();
}var z={};
z.sortedAscending=C.isSortAscending();

for(var x=0;x<D;x++){var B=H.getColumnAtX(x);

if(B===undefined){continue;
}var J=F.getColumnWidth(B);
var E=F.getHeaderCellRenderer(B);
z.xPos=x;
z.col=B;
z.name=C.getColumnName(B);
z.editable=C.isColumnEditable(B);
z.sorted=(B==G);
z.table=I;
var A=K[x];
if(A==null){A=E.createHeaderCell(z);
A.set({width:J});
this._add(A);
}else{E.updateHeaderCell(z,A);
}}},_cleanUpCells:function(){var M=this._getChildren();

for(var x=M.length-1;x>=0;x--){var L=M[x];
L.destroy();
}}},destruct:function(){this.__gM.dispose();
this._disposeObjects(b);
}});
})();
(function(){var m="Boolean",l="resize-line",k="mousedown",j="qx.event.type.Data",i="mouseup",h="qx.ui.table.pane.CellEvent",g="scroll",d="focus-indicator",c="excluded",b="scrollbar-y",bm="table-scroller-focus-indicator",bl="visible",bk="mousemove",bj="header",bi="editing",bh="click",bg="modelChanged",bf="scrollbar-x",be="cellClick",bd="pane",t="__fX",u="mouseout",r="__ge",s="changeHorizontalScrollBarVisible",p="bottom",q="_applyScrollTimeout",n="changeScrollX",o="_applyTablePaneModel",z="Integer",A="dblclick",I="__gd",G="dataEdited",Q="__gg",L="mousewheel",Y="interval",V="qx.ui.table.pane.Scroller",C="__gb",bc="_applyShowCellFocusIndicator",bb="resize",ba="__fY",B="vertical",E="changeScrollY",F="appear",H="__gc",J="__ga",M="table-scroller",S="beforeSort",X="cellDblclick",v="__gf",w="horizontal",D="losecapture",P="contextmenu",O="col-resize",N="disappear",U="_applyVerticalScrollBarVisible",T="_applyHorizontalScrollBarVisible",K="cellContextmenu",R="close",a="changeTablePaneModel",W="qx.ui.table.pane.Model",y="changeVerticalScrollBarVisible";
qx.Class.define(V,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(bn){qx.ui.core.Widget.call(this);
this.__fW=bn;
var bo=new qx.ui.layout.Grid();
bo.setColumnFlex(0,1);
bo.setRowFlex(1,1);
this._setLayout(bo);
this.__fX=this._showChildControl(bf);
this.__fY=this._showChildControl(b);
this.__ga=this._showChildControl(bj);
this.__gb=this._showChildControl(bd);
this.__gc=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__gc,{row:0,column:0,colSpan:2});
this.__gd=new qx.ui.table.pane.Clipper();
this.__gd.add(this.__ga);
this.__gd.addListener(D,this._onChangeCaptureHeader,this);
this.__gd.addListener(bk,this._onMousemoveHeader,this);
this.__gd.addListener(k,this._onMousedownHeader,this);
this.__gd.addListener(i,this._onMouseupHeader,this);
this.__gd.addListener(bh,this._onClickHeader,this);
this.__gc.add(this.__gd,{flex:1});
this.__ge=new qx.ui.table.pane.Clipper();
this.__ge.add(this.__gb);
this.__ge.addListener(L,this._onMousewheel,this);
this.__ge.addListener(bk,this._onMousemovePane,this);
this.__ge.addListener(k,this._onMousedownPane,this);
this.__ge.addListener(i,this._onMouseupPane,this);
this.__ge.addListener(bh,this._onClickPane,this);
this.__ge.addListener(P,this._onContextMenu,this);
this.__ge.addListener(A,this._onDblclickPane,this);
this.__ge.addListener(bb,this._onResizePane,this);
this._add(this.__ge,{row:1,column:0});
this.__gf=this.getChildControl(d);
this.initShowCellFocusIndicator();
this.getChildControl(l).hide();
this.addListener(u,this._onMouseout,this);
this.addListener(F,this._onAppear,this);
this.addListener(N,this._onDisappear,this);
this.__gg=new qx.event.Timer();
this.__gg.addListener(Y,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":j,"changeScrollX":j,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"beforeSort":j},properties:{horizontalScrollBarVisible:{check:m,init:true,apply:T,event:s},verticalScrollBarVisible:{check:m,init:true,apply:U,event:y},tablePaneModel:{check:W,apply:o,event:a},liveResize:{check:m,init:false},focusCellOnMouseMove:{check:m,init:false},selectBeforeFocus:{check:m,init:false},showCellFocusIndicator:{check:m,init:true,apply:bc},resetSelectionOnHeaderClick:{check:m,init:true},scrollTimeout:{check:z,init:100,apply:q},appearance:{refine:true,init:M}},members:{__gh:null,__fW:null,__gi:null,__gj:null,__gk:null,__gl:null,__gm:null,__gn:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:false,__gv:null,__gw:null,__gx:null,__gy:null,__gz:null,__gA:null,__gB:null,__gC:null,__fX:null,__fY:null,__ga:null,__gd:null,__gb:null,__ge:null,__gf:null,__gc:null,__gg:null,getPaneInsetRight:function(){var bq=this.getTopRightWidget();
var br=bq&&bq.isVisible()&&bq.getBounds()?bq.getBounds().width:0;
var bp=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(br,bp);
},setPaneWidth:function(bs){if(this.isVerticalScrollBarVisible()){bs+=this.getPaneInsetRight();
}this.setWidth(bs);
},_createChildControlImpl:function(bt,bu){var bv;

switch(bt){case bj:bv=(this.getTable().getNewTablePaneHeader())(this);
break;
case bd:bv=(this.getTable().getNewTablePane())(this);
break;
case d:bv=new qx.ui.table.pane.FocusIndicator(this);
bv.setUserBounds(0,0,0,0);
bv.setZIndex(1000);
bv.addListener(i,this._onMouseupFocusIndicator,this);
this.__ge.add(bv);
bv.show();
bv.setDecorator(null);
break;
case l:bv=new qx.ui.core.Widget();
bv.setUserBounds(0,0,0,0);
bv.setZIndex(1000);
this.__ge.add(bv);
break;
case bf:bv=this._createScrollBar(w).set({minWidth:0,alignY:p});
bv.addListener(g,this._onScrollX,this);
this._add(bv,{row:2,column:0});
break;
case b:bv=this._createScrollBar(B);
bv.addListener(g,this._onScrollY,this);
this._add(bv,{row:1,column:1});
break;
}return bv||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bt);
},_applyHorizontalScrollBarVisible:function(bw,bx){this.__fX.setVisibility(bw?bl:c);
},_applyVerticalScrollBarVisible:function(by,bz){this.__fY.setVisibility(by?bl:c);
},_applyTablePaneModel:function(bA,bB){if(bB!=null){bB.removeListener(bg,this._onPaneModelChanged,this);
}bA.addListener(bg,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bC,bD){if(bC){this.__gf.setDecorator(bm);
this._updateFocusIndicator();
}else{if(this.__gf){this.__gf.setDecorator(null);
}}},getScrollY:function(){return this.__fY.getPosition();
},setScrollY:function(scrollY,bE){this.__fY.scrollTo(scrollY);

if(bE){this._updateContent();
}},getScrollX:function(){return this.__fX.getPosition();
},setScrollX:function(scrollX){this.__fX.scrollTo(scrollX);
},getTable:function(){return this.__fW;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bF,bG){this.__ga.setColumnWidth(bF,bG);
this.__gb.setColumnWidth(bF,bG);
var bH=this.getTablePaneModel();
var x=bH.getX(bF);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__ga.onColOrderChanged();
this.__gb.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bI,bJ,bK,bL){this.__gb.onTableModelDataChanged(bI,bJ,bK,bL);
var bM=this.getTable().getTableModel().getRowCount();

if(bM!=this.__gh){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bM){if(bM==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bM-1);
}}this.__gh=bM;
}},onSelectionChanged:function(){this.__gb.onSelectionChanged();
},onFocusChanged:function(){this.__gb.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__ga.onTableModelMetaDataChanged();
this.__gb.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__ga.onPaneModelChanged();
this.__gb.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__ga._updateContent();
this.__fW._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bQ=this.__ge.getInnerSize();

if(!bQ){return ;
}var bO=this.getTablePaneModel().getTotalWidth();
var bP=this.__fX;

if(bQ.width<bO){var bN=Math.max(0,bO-bQ.width);
bP.setMaximum(bN);
bP.setKnobFactor(bQ.width/bO);
var bR=bP.getPosition();
bP.setPosition(Math.min(bR,bN));
}else{bP.setMaximum(0);
bP.setKnobFactor(1);
bP.setPosition(0);
}},updateVerScrollBarMaximum:function(){var ca=this.__ge.getInnerSize();

if(!ca){return ;
}var bX=this.getTable().getTableModel();
var bT=bX.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bT+=1;
}var bS=this.getTable().getRowHeight();
var bV=bT*bS;
var bY=this.__fY;

if(ca.height<bV){var bU=Math.max(0,bV-ca.height);
bY.setMaximum(bU);
bY.setKnobFactor(ca.height/bV);
var bW=bY.getPosition();
bY.setPosition(Math.min(bW,bU));
}else{bY.setMaximum(0);
bY.setKnobFactor(1);
bY.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var cb=e.getData();
this.fireDataEvent(n,cb,e.getOldData());
this.__gd.scrollToX(cb);
this.__ge.scrollToX(cb);
},_onScrollY:function(e){this.fireDataEvent(E,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var cc=this.getTable();

if(!cc.getEnabled()){return;
}var ce=qx.bom.client.Engine.GECKO?1:3;
var cd=this.__fY.getPosition()+((e.getWheelDelta()*ce)*cc.getRowHeight());
this.__fY.scrollTo(cd);
if(this.__gw&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__gw,this.__gx);
}e.stop();
},__gD:function(cf){var ck=this.getTable();
var cl=this.__ga.getHeaderWidgetAtColumn(this.__gq);
var cg=cl.getSizeHint().minWidth;
var ci=Math.max(cg,this.__gs+cf-this.__gr);

if(this.getLiveResize()){var ch=ck.getTableColumnModel();
ch.setColumnWidth(this.__gq,ci,true);
}else{this.__ga.setColumnWidth(this.__gq,ci,true);
var cj=this.getTablePaneModel();
this._showResizeLine(cj.getColumnLeft(this.__gq)+ci);
}this.__gr+=ci-this.__gs;
this.__gs=ci;
},__gE:function(cm){var cn=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__ga.isShowingColumnMoveFeedback()||cm>this.__gp+cn||cm<this.__gp-cn){this.__gm+=cm-this.__gp;
this.__ga.showColumnMoveFeedback(this.__gl,this.__gm);
var co=this.__fW.getTablePaneScrollerAtPageX(cm);

if(this.__go&&this.__go!=co){this.__go.hideColumnMoveFeedback();
}
if(co!=null){this.__gn=co.showColumnMoveFeedback(cm);
}else{this.__gn=null;
}this.__go=co;
this.__gp=cm;
}},_onMousemoveHeader:function(e){var cv=this.getTable();

if(!cv.getEnabled()){return;
}var cw=false;
var cp=null;
var ct=e.getDocumentLeft();
var cu=e.getDocumentTop();
this.__gw=ct;
this.__gx=cu;

if(this.__gq!=null){this.__gD(ct);
cw=true;
e.stopPropagation();
}else if(this.__gl!=null){this.__gE(ct);
e.stopPropagation();
}else{var cq=this._getResizeColumnForPageX(ct);

if(cq!=-1){cw=true;
}else{var cs=cv.getTableModel();
var cx=this._getColumnForPageX(ct);

if(cx!=null&&cs.isColumnSortable(cx)){cp=cx;
}}}var cr=cw?O:null;
this.getApplicationRoot().setGlobalCursor(cr);
this.setCursor(cr);
this.__ga.setMouseOverColumn(cp);
},_onMousemovePane:function(e){var cy=this.getTable();

if(!cy.getEnabled()){return;
}var cA=e.getDocumentLeft();
var cB=e.getDocumentTop();
this.__gw=cA;
this.__gx=cB;
var cz=this._getRowForPagePos(cA,cB);

if(cz!=null&&this._getColumnForPageX(cA)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cA,cB);
}}this.__ga.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cD=e.getDocumentLeft();
var cE=this._getResizeColumnForPageX(cD);

if(cE!=-1){this._startResizeHeader(cE,cD);
e.stop();
}else{var cC=this._getColumnForPageX(cD);

if(cC!=null){this._startMoveHeader(cC,cD);
e.stop();
}}},_startResizeHeader:function(cF,cG){var cH=this.getTable().getTableColumnModel();
this.__gq=cF;
this.__gr=cG;
this.__gs=cH.getColumnWidth(this.__gq);
this.__gd.capture();
},_startMoveHeader:function(cI,cJ){this.__gl=cI;
this.__gp=cJ;
this.__gm=this.getTablePaneModel().getColumnLeft(cI);
this.__gd.capture();
},_onMousedownPane:function(e){var cN=this.getTable();

if(!cN.getEnabled()){return;
}
if(cN.isEditing()){cN.stopEditing();
}var cK=e.getDocumentLeft();
var cM=e.getDocumentTop();
var cP=this._getRowForPagePos(cK,cM);
var cO=this._getColumnForPageX(cK);

if(cP!==null){this.__gt={row:cP,col:cO};
this.__gu=false;
var cL=this.getSelectBeforeFocus();

if(cL){cN.getSelectionManager().handleMouseDown(cP,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cK,cM);
}
if(!cL){cN.getSelectionManager().handleMouseDown(cP,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__gt&&!this.__gu&&!this.isEditing()&&this.__gf.getRow()==this.__gt.row&&this.__gf.getColumn()==this.__gt.col){this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,this.__gt.row,this.__gt.col],true);
this.__gu=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__gq!=null){this._stopResizeHeader();
}
if(this.__gl!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cQ=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cQ.setColumnWidth(this.__gq,this.__gs,true);
}this.__gq=null;
this.__gd.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cR=this.__gA.getBounds().height;
this.__gA.setUserBounds(0,0,this.__gs,cR);
}},_stopMoveHeader:function(){var cW=this.getTable().getTableColumnModel();
var cX=this.getTablePaneModel();
this.__ga.hideColumnMoveFeedback();

if(this.__go){this.__go.hideColumnMoveFeedback();
}
if(this.__gn!=null){var da=cX.getFirstColumnX()+cX.getX(this.__gl);
var cV=this.__gn;

if(cV!=da&&cV!=da+1){var cY=cW.getVisibleColumnAtX(da);
var cU=cW.getVisibleColumnAtX(cV);
var cT=cW.getOverallX(cY);
var cS=(cU!=null)?cW.getOverallX(cU):cW.getOverallColumnCount();

if(cS>cT){cS--;
}cW.moveColumn(cT,cS);
this._updateFocusIndicator();
}}this.__gl=null;
this.__gn=null;
this.__gd.releaseCapture();
},_onMouseupPane:function(e){var db=this.getTable();

if(!db.getEnabled()){return;
}var dc=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(dc!=-1&&dc!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){db.getSelectionManager().handleMouseUp(dc,e);
}},_onMouseupHeader:function(e){var dd=this.getTable();

if(!dd.getEnabled()){return;
}
if(this.__gq!=null){this._stopResizeHeader();
this.__gv=true;
e.stop();
}else if(this.__gl!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__gv){this.__gv=false;
return;
}var di=this.getTable();

if(!di.getEnabled()){return;
}var dg=di.getTableModel();
var dh=e.getDocumentLeft();
var df=this._getResizeColumnForPageX(dh);

if(df==-1){var dl=this._getColumnForPageX(dh);

if(dl!=null&&dg.isColumnSortable(dl)){var de=dg.getSortColumnIndex();
var dj=(dl!=de)?true:!dg.isSortAscending();
var dk={column:dl,ascending:dj,clickEvent:e};

if(this.fireDataEvent(S,dk,null,true)){dg.sortByColumn(dl,dj);

if(this.getResetSelectionOnHeaderClick()){di.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dm=this.getTable();

if(!dm.getEnabled()){return;
}var dq=e.getDocumentLeft();
var dr=e.getDocumentTop();
var dn=this._getRowForPagePos(dq,dr);
var dp=this._getColumnForPageX(dq);

if(dn!=null&&dp!=null){dm.getSelectionManager().handleClick(dn,e);

if(this.__gf.isHidden()||(this.__gt&&!this.__gu&&!this.isEditing()&&dn==this.__gt.row&&dp==this.__gt.col)){this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,dn,dp],true);
this.__gu=true;
}}},_onContextMenu:function(e){var dv=e.getDocumentLeft();
var dw=e.getDocumentTop();
var dt=this._getRowForPagePos(dv,dw);
var du=this._getColumnForPageX(dv);

if(this.__gf.isHidden()||(this.__gt&&dt==this.__gt.row&&du==this.__gt.col)){this.fireEvent(K,qx.ui.table.pane.CellEvent,[this,e,dt,du],true);
var ds=this.getTable().getContextMenu();

if(ds){if(ds.getChildren().length>0){ds.openAtMouse(e);
}else{ds.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dy=e.getDocumentLeft();
var dz=e.getDocumentTop();
this._focusCellAtPagePos(dy,dz);
this.startEditing();
var dx=this._getRowForPagePos(dy,dz);

if(dx!=-1&&dx!=null){this.fireEvent(X,qx.ui.table.pane.CellEvent,[this,e,dx],true);
}},_onMouseout:function(e){var dA=this.getTable();

if(!dA.getEnabled()){return;
}if(this.__gq==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__ga.setMouseOverColumn(null);
},_showResizeLine:function(x){var dC=this._showChildControl(l);
var dB=dC.getWidth();
var dD=this.__ge.getBounds();
dC.setUserBounds(x-Math.round(dB/2),0,dB,dD.height);
},_hideResizeLine:function(){this._excludeChildControl(l);
},showColumnMoveFeedback:function(dE){var dN=this.getTablePaneModel();
var dM=this.getTable().getTableColumnModel();
var dH=this.__gb.getContainerLocation().left;
var dL=dN.getColumnCount();
var dI=0;
var dG=0;
var dQ=dH;

for(var dF=0;dF<dL;dF++){var dJ=dN.getColumnAtX(dF);
var dO=dM.getColumnWidth(dJ);

if(dE<dQ+dO/2){break;
}dQ+=dO;
dI=dF+1;
dG=dQ-dH;
}var dK=this.__ge.getContainerLocation().left;
var dP=this.__ge.getBounds().width;
var scrollX=dK-dH;
dG=qx.lang.Number.limit(dG,scrollX+2,scrollX+dP-1);
this._showResizeLine(dG);
return dN.getFirstColumnX()+dI;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dR,dS){var dU=this._getRowForPagePos(dR,dS);

if(dU!=-1&&dU!=null){var dT=this._getColumnForPageX(dR);
this.__fW.setFocusedCell(dT,dU);
}},setFocusedCell:function(dV,dW){if(!this.isEditing()){this.__gb.setFocusedCell(dV,dW,this.__gj);
this.__gy=dV;
this.__gz=dW;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__gy;
},getFocusedRow:function(){return this.__gz;
},scrollCellVisible:function(dX,dY){var ej=this.getTablePaneModel();
var ea=ej.getX(dX);

if(ea!=-1){var eg=this.__ge.getInnerSize();

if(!eg){return;
}var eh=this.getTable().getTableColumnModel();
var ed=ej.getColumnLeft(dX);
var ek=eh.getColumnWidth(dX);
var eb=this.getTable().getRowHeight();
var el=dY*eb;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var ei=Math.min(ed,ed+ek-eg.width);
var ef=ed;
this.setScrollX(Math.max(ei,Math.min(ef,scrollX)));
var ec=el+eb-eg.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){ec+=eb;
}var ee=el;
this.setScrollY(Math.max(ec,Math.min(ee,scrollY)),true);
}},isEditing:function(){return this.__gA!=null;
},startEditing:function(){var eq=this.getTable();
var eo=eq.getTableModel();
var es=this.__gy;

if(!this.isEditing()&&(es!=null)&&eo.isColumnEditable(es)){var et=this.__gz;
var em=this.getTablePaneModel().getX(es);
var en=eo.getValue(es,et);
this.__gB=eq.getTableColumnModel().getCellEditorFactory(es);
var ep={col:es,row:et,xPos:em,value:en,table:eq};
this.__gA=this.__gB.createCellEditor(ep);
if(this.__gA===null){return false;
}else if(this.__gA instanceof qx.ui.window.Window){this.__gA.setModal(true);
this.__gA.setShowClose(false);
this.__gA.addListener(R,this._onCellEditorModalWindowClose,this);
var f=eq.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__gA,ep);
}this.__gA.open();
}else{var er=this.__gf.getInnerSize();
this.__gA.setUserBounds(0,0,er.width,er.height);
this.__gf.addListener(k,function(e){this.__gt={row:this.__gz,col:this.__gy};
e.stopPropagation();
},this);
this.__gf.add(this.__gA);
this.__gf.addState(bi);
this.__gf.setKeepActive(false);
this.__gf.setDecorator(bm);
this.__gA.focus();
this.__gA.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__gf.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var ev=this.__gB.getCellEditorValue(this.__gA);
var eu=this.getTable().getTableModel().getValue(this.__gy,this.__gz);
this.getTable().getTableModel().setValue(this.__gy,this.__gz,ev);
this.__fW.focus();
this.__fW.fireDataEvent(G,{row:this.__gz,col:this.__gy,oldValue:eu,value:ev});
}},cancelEditing:function(){if(this.isEditing()&&!this.__gA.pendingDispose){if(this._cellEditorIsModalWindow){this.__gA.destroy();
this.__gA=null;
this.__gB=null;
this.__gA.pendingDispose=true;
}else{this.__gf.removeState(bi);
this.__gf.setKeepActive(true);
this.__gA.destroy();
this.__gA=null;
this.__gB=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(ew){var ez=this.getTable().getTableColumnModel();
var eA=this.getTablePaneModel();
var ey=eA.getColumnCount();
var eC=this.__ga.getContainerLocation().left;

for(var x=0;x<ey;x++){var ex=eA.getColumnAtX(x);
var eB=ez.getColumnWidth(ex);
eC+=eB;

if(ew<eC){return ex;
}}return null;
},_getResizeColumnForPageX:function(eD){var eH=this.getTable().getTableColumnModel();
var eI=this.getTablePaneModel();
var eG=eI.getColumnCount();
var eK=this.__ga.getContainerLocation().left;
var eE=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eG;x++){var eF=eI.getColumnAtX(x);
var eJ=eH.getColumnWidth(eF);
eK+=eJ;

if(eD>=(eK-eE)&&eD<=(eK+eE)){return eF;
}}return -1;
},_getRowForPagePos:function(eL,eM){var eN=this.__gb.getContentLocation();

if(eL<eN.left||eL>eN.right){return null;
}
if(eM>=eN.top&&eM<=eN.bottom){var eO=this.getTable().getRowHeight();
var scrollY=this.__fY.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eO)*eO;
}var eR=scrollY+eM-eN.top;
var eT=Math.floor(eR/eO);
var eS=this.getTable().getTableModel();
var eP=eS.getRowCount();
return (eT<eP)?eT:null;
}var eQ=this.__ga.getContainerLocation();

if(eM>=eQ.top&&eM<=eQ.bottom&&eL<=eQ.right){return -1;
}return null;
},setTopRightWidget:function(eU){var eV=this.__gC;

if(eV!=null){this.__gc.remove(eV);
}
if(eU!=null){this.__gc.add(eU);
}this.__gC=eU;
},getTopRightWidget:function(){return this.__gC;
},getHeader:function(){return this.__ga;
},getTablePane:function(){return this.__gb;
},getVerticalScrollBarWidth:function(){var eW=this.__fY;
return eW.isVisible()?(eW.getSizeHint().width||0):0;
},getNeededScrollBars:function(eX,eY){var ff=this.__fY.getSizeHint().width;
var fg=this.__ge.getInnerSize();
var fa=fg?fg.width:0;

if(this.getVerticalScrollBarVisible()){fa+=ff;
}var fj=fg?fg.height:0;

if(this.getHorizontalScrollBarVisible()){fj+=ff;
}var fd=this.getTable().getTableModel();
var fh=fd.getRowCount();
var fk=this.getTablePaneModel().getTotalWidth();
var fi=this.getTable().getRowHeight()*fh;
var fc=false;
var fl=false;

if(fk>fa){fc=true;

if(fi>fj-ff){fl=true;
}}else if(fi>fj){fl=true;

if(!eY&&(fk>fa-ff)){fc=true;
}}var fe=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var fb=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((eX||fc)?fe:0)|((eY||!fl)?0:fb);
},getPaneClipper:function(){return this.__ge;
},_applyScrollTimeout:function(fm,fn){this._startInterval(fm);
},_startInterval:function(fo){this.__gg.setInterval(fo);
this.__gg.start();
},_stopInterval:function(){this.__gg.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__gj&&!this.__gb._layoutPending){this.__gj=false;
this._updateContent();
}}),_updateContent:function(){var ft=this.__ge.getInnerSize();

if(!ft){return;
}var fw=ft.height;
var scrollX=this.__fX.getPosition();
var scrollY=this.__fY.getPosition();
var fq=this.getTable().getRowHeight();
var fr=Math.floor(scrollY/fq);
var fv=this.__gb.getFirstVisibleRow();
this.__gb.setFirstVisibleRow(fr);
var fs=Math.ceil(fw/fq);
var fp=0;
var fu=this.getTable().getKeepFirstVisibleRowComplete();

if(!fu){fs++;
fp=scrollY%fq;
}this.__gb.setVisibleRowCount(fs);

if(fr!=fv){this._updateFocusIndicator();
}this.__ge.scrollToX(scrollX);
if(!fu){this.__ge.scrollToY(fp);
}},_updateFocusIndicator:function(){var fx=this.getTable();

if(!fx.getEnabled()){return;
}this.__gf.moveToCell(this.__gy,this.__gz);
}},destruct:function(){this._stopInterval();
var fy=this.getTablePaneModel();

if(fy){fy.dispose();
}this.__gt=this.__gC=this.__fW=null;
this._disposeObjects(t,ba,I,r,v,J,C,H,Q);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__fc=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__fc:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__fc.getShowCellFocusIndicator()&&!this.__fc.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__fc.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__fc.getTable();
var o=q.getTableColumnModel();
var p=this.__fc.getTablePaneModel();
var n=this.__fc.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__fc=null;
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);

if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(g){var h=qx.event.type.Mouse.prototype.clone.call(this,g);
h.set({row:this.getRow(),column:this.getColumn()});
return h;
}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(b,c,d){return b>=c&&b<=d;
},isBetweenRange:function(e,f,g){return e>f&&e<g;
},limit:function(h,i,j){if(j!=null&&h>j){return j;
}else if(i!=null&&h<i){return i;
}else{return h;
}}}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);
}}});
})();
(function(){var b="qx.ui.window.Manager",a="__ja";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__ja:null,setDesktop:function(c){this.__ja=c;
this.updateStack();
},getDesktop:function(){return this.__ja;
},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);
d.setActive(true);
}
if(e){e.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__ja.forceUnblockContent();
var f=this.__ja.getWindows();
var h=this._minZIndex;
var m=h+f.length*2;
var j=h+f.length*4;
var k=null;

for(var i=0,l=f.length;i<l;i++){var g=f[i];
if(!g.isVisible()){continue;
}k=k||g;
if(g.isModal()){g.setZIndex(j);
this.__ja.blockContent(j-1);
j+=2;
k=g;
}else if(g.isAlwaysOnTop()){g.setZIndex(m);
m+=2;
}else{g.setZIndex(h);
h+=2;
}if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;
}}this.__ja.setActiveWindow(k);
},bringToFront:function(n){var o=this.__ja.getWindows();
var p=qx.lang.Array.remove(o,n);

if(p){o.push(n);
this.updateStack();
}},sendToBack:function(q){var r=this.__ja.getWindows();
var s=qx.lang.Array.remove(r,q);

if(s){r.unshift(q);
this.updateStack();
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){this.addListener(i,this.__iU,this,true);
this.addListener(q,this.__iV,this);
this.addListener(x,this.__iX,this);
this.addListener(s,this.__iY,this);
this.addListener(o,this.__iW,this);
var A=this.getContainerElement().getDomElement();

if(A==null){A=window;
}this.__iI=qx.event.Registration.getManager(A).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__iI:null,__iJ:null,__iK:null,__iL:null,__iM:null,__iN:null,__iO:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__iP:function(){var B=this.__iJ;

if(!B){B=this.__iJ=new qx.ui.core.Widget();
B.setAppearance(p);
B.exclude();
qx.core.Init.getApplication().getRoot().add(B);
}return B;
},__iQ:function(){var D=this.__iN;
var C=this.__iP();
C.setUserBounds(D.left,D.top,D.width,D.height);
C.show();
C.setZIndex(this.getZIndex()+1);
},__iR:function(e){var F=this.__iK;
var G=this.getSizeHint();
var J=this.__iO;
var I=this.__iN;
var E=I.width;
var H=I.height;
var L=I.left;
var top=I.top;
var K;

if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){K=Math.max(J.top,Math.min(J.bottom,e.getDocumentTop()))-this.__iM;

if(F&this.RESIZE_TOP){H-=K;
}else{H+=K;
}
if(H<G.minHeight){H=G.minHeight;
}else if(H>G.maxHeight){H=G.maxHeight;
}
if(F&this.RESIZE_TOP){top+=I.height-H;
}}
if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){K=Math.max(J.left,Math.min(J.right,e.getDocumentLeft()))-this.__iL;

if(F&this.RESIZE_LEFT){E-=K;
}else{E+=K;
}
if(E<G.minWidth){E=G.minWidth;
}else if(E>G.maxWidth){E=G.maxWidth;
}
if(F&this.RESIZE_LEFT){L+=I.width-E;
}}return {viewportLeft:L,viewportTop:top,parentLeft:I.bounds.left+L-I.left,parentTop:I.bounds.top+top-I.top,width:E,height:H};
},__iS:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__iT:function(e){var O=this.getContentLocation();
var M=this.getResizeSensitivity();
var Q=e.getDocumentLeft();
var P=e.getDocumentTop();
var N=0;

if(this.getResizableTop()&&Math.abs(O.top-P)<M){N+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(O.bottom-P)<M){N+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(O.left-Q)<M){N+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(O.right-Q)<M){N+=this.RESIZE_RIGHT;
}this.__iK=N;
},__iU:function(e){if(!this.__iK){return;
}this.addState(j);
this.__iL=e.getDocumentLeft();
this.__iM=e.getDocumentTop();
var location=this.getContainerLocation();
var T=this.getBounds();
this.__iN={top:location.top,left:location.left,width:T.width,height:T.height,bounds:qx.lang.Object.clone(T)};
var parent=this.getLayoutParent();
var R=parent.getContentLocation();
var S=parent.getBounds();
this.__iO={left:R.left,top:R.top,right:R.left+S.width,bottom:R.top+S.height};
if(this.getUseResizeFrame()){this.__iQ();
}this.capture();
e.stop();
},__iV:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this.__iP().exclude();
}var U=this.__iR(e);
this.setWidth(U.width);
this.setHeight(U.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:U.parentLeft,top:U.parentTop});
}this.__iK=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__iW:function(e){if(!this.__iK){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this.__iP().exclude();
}},__iX:function(e){if(this.hasState(j)){var Y=this.__iR(e);
if(this.getUseResizeFrame()){var W=this.__iP();
W.setUserBounds(Y.viewportLeft,Y.viewportTop,Y.width,Y.height);
}else{this.setWidth(Y.width);
this.setHeight(Y.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:Y.parentLeft,top:Y.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)&&!this.__iI.isSessionActive()){this.__iT(e);
var ba=this.__iK;
var X=this.getApplicationRoot();

if(ba){var V=this.__iS[ba];
this.setCursor(V);
X.setGlobalCursor(V);
}else if(this.getCursor()){this.resetCursor();
X.resetGlobalCursor();
}}},__iY:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__iJ!=null&&!qx.core.ObjectRegistry.inShutDown){this.__iJ.destroy();
this.__iJ=null;
}this.__iI=null;
}});
})();
(function(){var l="move",k="Boolean",j="__is",i="mouseup",h="mousedown",g="losecapture",f="qx.ui.core.MMovable",d="mousemove",c="maximized",b="__it",a="move-frame";
qx.Mixin.define(f,{properties:{movable:{check:k,init:true},useMoveFrame:{check:k,init:false}},members:{__is:null,__it:null,__iu:null,__iv:null,__iw:null,__ix:null,__iy:null,__iz:false,__iA:null,__iB:0,_activateMoveHandle:function(m){if(this.__is){throw new Error("The move handle could not be redefined!");
}this.__is=m;
m.addListener(h,this._onMoveMouseDown,this);
m.addListener(i,this._onMoveMouseUp,this);
m.addListener(d,this._onMoveMouseMove,this);
m.addListener(g,this.__iF,this);
},__iC:function(){var n=this.__it;

if(!n){n=this.__it=new qx.ui.core.Widget();
n.setAppearance(a);
n.exclude();
qx.core.Init.getApplication().getRoot().add(n);
}return n;
},__iD:function(){var location=this.getContainerLocation();
var p=this.getBounds();
var o=this.__iC();
o.setUserBounds(location.left,location.top,p.width,p.height);
o.show();
o.setZIndex(this.getZIndex()+1);
},__iE:function(e){var r=this.__iu;
var u=Math.max(r.left,Math.min(r.right,e.getDocumentLeft()));
var t=Math.max(r.top,Math.min(r.bottom,e.getDocumentTop()));
var q=this.__iv+u;
var s=this.__iw+t;
return {viewportLeft:q,viewportTop:s,parentLeft:q-this.__ix,parentTop:s-this.__iy};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(c)){return;
}var parent=this.getLayoutParent();
var w=parent.getContentLocation();
var x=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__iA=parent.getBlockerColor();
this.__iB=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
this.__iz=true;
}}this.__iu={left:w.left,top:w.top,right:w.left+x.width,bottom:w.top+x.height};
var v=this.getContainerLocation();
this.__ix=w.left;
this.__iy=w.top;
this.__iv=v.left-e.getDocumentLeft();
this.__iw=v.top-e.getDocumentTop();
this.addState(l);
this.__is.capture();
if(this.getUseMoveFrame()){this.__iD();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;
}var y=this.__iE(e);

if(this.getUseMoveFrame()){this.__iC().setDomPosition(y.viewportLeft,y.viewportTop);
}else{this.setDomPosition(y.parentLeft,y.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__iz){parent.unblockContent();
parent.setBlockerColor(this.__iA);
parent.setBlockerOpacity(this.__iB);
this.__iA=null;
this.__iB=0;
this.__iz=false;
}}this.__is.releaseCapture();
var z=this.__iE(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__iC().exclude();
}e.stopPropagation();
},__iF:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
if(this.getUseMoveFrame()){this.__iC().exclude();
}}},destruct:function(){this._disposeObjects(b,j);
this.__iu=null;
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="captionbar",h="_applyCaptionBarChange",g="maximize-button",f="restore-button",d="minimize-button",c="close-button",b="maximized",a="execute",Q="pane",P="title",O="icon",N="statusbar-text",M="statusbar",L="String",K="normal",J="active",I="beforeClose",H="beforeMinimize",r="mousedown",s="changeStatus",p="changeIcon",q="excluded",n="dblclick",o="_applyActive",l="beforeRestore",m="minimize",t="changeModal",u="changeAlwaysOnTop",z="_applyShowStatusbar",y="_applyStatus",B="qx.ui.window.Window",A="changeCaption",D="focusout",C="beforeMaximize",w="maximize",G="restore",F="window",E="close",v="changeActive",x="minimized";
qx.Class.define(B,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(R,S){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(i);
this._createChildControl(Q);
if(S!=null){this.setIcon(S);
}
if(R!=null){this.setCaption(R);
}this._updateCaptionBar();
this.addListener(r,this._onWindowMouseDown,this,true);
this.addListener(D,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":j,"close":j,"beforeMinimize":j,"minimize":j,"beforeMaximize":j,"maximize":j,"beforeRestore":j,"restore":j},properties:{appearance:{refine:true,init:F},visibility:{refine:true,init:q},focusable:{refine:true,init:true},active:{check:k,init:false,apply:o,event:v},alwaysOnTop:{check:k,init:false,event:u},modal:{check:k,init:false,event:t},caption:{apply:h,event:A,nullable:true},icon:{check:L,nullable:true,apply:h,event:p,themeable:true},status:{check:L,nullable:true,apply:y,event:s},showClose:{check:k,init:true,apply:h,themeable:true},showMaximize:{check:k,init:true,apply:h,themeable:true},showMinimize:{check:k,init:true,apply:h,themeable:true},allowClose:{check:k,init:true,apply:h},allowMaximize:{check:k,init:true,apply:h},allowMinimize:{check:k,init:true,apply:h},showStatusbar:{check:k,init:false,apply:z}},members:{__iG:null,__iH:null,getChildrenContainer:function(){return this.getChildControl(Q);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(T,U){var V;

switch(T){case M:V=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(V);
V.add(this.getChildControl(N));
break;
case N:V=new qx.ui.basic.Label();
V.setValue(this.getStatus());
break;
case Q:V=new qx.ui.container.Composite();
this._add(V,{flex:1});
break;
case i:var X=new qx.ui.layout.Grid();
X.setRowFlex(0,1);
X.setColumnFlex(1,1);
V=new qx.ui.container.Composite(X);
this._add(V);
V.addListener(n,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(V);
break;
case O:V=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(i).add(V,{row:0,column:0});
break;
case P:V=new qx.ui.basic.Label(this.getCaption());
V.setWidth(0);
V.setAllowGrowX(true);
var W=this.getChildControl(i);
W.add(V,{row:0,column:1});
break;
case d:V=new qx.ui.form.Button();
V.setFocusable(false);
V.addListener(a,this._onMinimizeButtonClick,this);
this.getChildControl(i).add(V,{row:0,column:2});
break;
case f:V=new qx.ui.form.Button();
V.setFocusable(false);
V.addListener(a,this._onRestoreButtonClick,this);
this.getChildControl(i).add(V,{row:0,column:3});
break;
case g:V=new qx.ui.form.Button();
V.setFocusable(false);
V.addListener(a,this._onMaximizeButtonClick,this);
this.getChildControl(i).add(V,{row:0,column:4});
break;
case c:V=new qx.ui.form.Button();
V.setFocusable(false);
V.addListener(a,this._onCloseButtonClick,this);
this.getChildControl(i).add(V,{row:0,column:6});
break;
}return V||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,T);
},_updateCaptionBar:function(){var ba;
var bb=this.getIcon();

if(bb){this.getChildControl(O).setSource(bb);
this._showChildControl(O);
}else{this._excludeChildControl(O);
}var Y=this.getCaption();

if(Y){this.getChildControl(P).setValue(Y);
this._showChildControl(P);
}else{this._excludeChildControl(P);
}
if(this.getShowMinimize()){this._showChildControl(d);
ba=this.getChildControl(d);
this.getAllowMinimize()?ba.resetEnabled():ba.setEnabled(false);
}else{this._excludeChildControl(d);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(f);
this._excludeChildControl(g);
}else{this._showChildControl(g);
this._excludeChildControl(f);
}ba=this.getChildControl(g);
this.getAllowMaximize()?ba.resetEnabled():ba.setEnabled(false);
}else{this._excludeChildControl(g);
this._excludeChildControl(f);
}
if(this.getShowClose()){this._showChildControl(c);
ba=this.getChildControl(c);
this.getAllowClose()?ba.resetEnabled():ba.setEnabled(false);
}else{this._excludeChildControl(c);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(I,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(E);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bd=parent.getBounds();

if(bd){var be=this.getSizeHint();
var bc=Math.round((bd.width-be.width)/2);
var top=Math.round((bd.height-be.height)/2);

if(top<0){top=0;
}this.moveTo(bc,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(C,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bf=this.getLayoutProperties();
this.__iH=bf.left===undefined?0:bf.left;
this.__iG=bf.top===undefined?0:bf.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(b);
this._updateCaptionBar();
this.fireEvent(w);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(H,qx.event.type.Event,[false,true])){var bg=this.getLayoutProperties();
this.__iH=bg.left===undefined?0:bg.left;
this.__iG=bg.top===undefined?0:bg.top;
this.removeState(b);
this.hide();
this.fireEvent(m);
}},restore:function(){if(this.getMode()===K){return;
}
if(this.fireNonBubblingEvent(l,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bh=this.__iH;
var top=this.__iG;
this.setLayoutProperties({edge:null,left:bh,top:top});
this.removeState(b);
this._updateCaptionBar();
this.fireEvent(G);
}},moveTo:function(bi,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bi,top:top});
},isMaximized:function(){return this.hasState(b);
},getMode:function(){if(!this.isVisible()){return x;
}else{if(this.isMaximized()){return b;
}else{return K;
}}},_applyActive:function(bj,bk){if(bk){this.removeState(J);
}else{this.addState(J);
}},_getContentPaddingTarget:function(){return this.getChildControl(Q);
},_applyShowStatusbar:function(bl,bm){if(bl){this._showChildControl(M);
}else{this._excludeChildControl(M);
}},_applyCaptionBarChange:function(bn,bo){this._updateCaptionBar();
},_applyStatus:function(bp,bq){var br=this.getChildControl(N,true);

if(br){br.setValue(bp);
}},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bs=e.getRelatedTarget();

if(bs!=null&&!qx.ui.core.Widget.contains(this,bs)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(d).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(f).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(g).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(c).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__gJ:null,__gK:null,_applyFirstColumnX:function(j,k){this.__gJ=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__gJ=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__gK){this.__gK.removeListener(g,this._onColVisibilityChanged,this);
this.__gK.removeListener(h,this._onColVisibilityChanged,this);
}this.__gK=n;
this.__gK.addListener(g,this._onColVisibilityChanged,this);
this.__gK.addListener(h,this._onHeaderCellRendererChanged,this);
this.__gJ=null;
},_onColVisibilityChanged:function(o){this.__gJ=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__gJ==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__gK.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__gJ=r-q;
}else{this.__gJ=s;
}}return this.__gJ;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__gK.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__gK.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__gK.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__gK.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__gK){this.__gK.removeListener(g,this._onColVisibilityChanged,this);
this.__gK.removeListener(h,this._onColVisibilityChanged,this);
}this.__gK=null;
}});
})();
(function(){var s="",r="==",q=">",p="between",o="<",n="regex",m="!between",l=">=",k="!=",j="<=",c="font-weight",h=";",f="text-align",b='g',a=":",e="qx.ui.table.cellrenderer.Conditional",d="color",g="font-style";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Default,construct:function(t,u,v,w){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[r,k,q,o,l,j];
this.betweenAllowed=[p,m];
this.conditions=[];
this.__eW=t||s;
this.__eX=u||s;
this.__eY=v||s;
this.__fa=w||s;
},members:{__eW:null,__eX:null,__eY:null,__fa:null,__fb:function(x,y){if(x[1]!=null){y[f]=x[1];
}
if(x[2]!=null){y[d]=x[2];
}
if(x[3]!=null){y[g]=x[3];
}
if(x[4]!=null){y[c]=x[4];
}},addNumericCondition:function(z,A,B,C,D,E,F){var G=null;

if(qx.lang.Array.contains(this.numericAllowed,z)){if(A!=null){G=[z,B,C,D,E,A,F];
}}
if(G!=null){this.conditions.push(G);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(H,I,J,K,L,M,N,O){if(qx.lang.Array.contains(this.betweenAllowed,H)){if(I!=null&&J!=null){var P=[H,K,L,M,N,I,J,O];
}}
if(P!=null){this.conditions.push(P);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(Q,R,S,T,U,V){if(Q!=null){var W=[n,R,S,T,U,Q,V];
}
if(W!=null){this.conditions.push(W);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(X){if(!this.conditions.length){return X.style||s;
}var bd=X.table.getTableModel();
var i;
var bf;
var Y;
var bb={"text-align":this.__eW,"color":this.__eX,"font-style":this.__eY,"font-weight":this.__fa};

for(i in this.conditions){bf=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}
switch(this.conditions[i][0]){case r:if(Y==this.conditions[i][5]){bf=true;
}break;
case k:if(Y!=this.conditions[i][5]){bf=true;
}break;
case q:if(Y>this.conditions[i][5]){bf=true;
}break;
case o:if(Y<this.conditions[i][5]){bf=true;
}break;
case l:if(Y>=this.conditions[i][5]){bf=true;
}break;
case j:if(Y<=this.conditions[i][5]){bf=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][7],X.row);
}
switch(this.conditions[i][0]){case p:if(Y>=this.conditions[i][5]&&Y<=this.conditions[i][6]){bf=true;
}break;
case m:if(Y<this.conditions[i][5]&&Y>this.conditions[i][6]){bf=true;
}break;
}}else if(this.conditions[i][0]==n){if(this.conditions[i][6]==null){Y=X.value;
}else{Y=bd.getValueById(this.conditions[i][6],X.row);
}var ba=new RegExp(this.conditions[i][5],b);
bf=ba.test(Y);
}if(bf==true){this.__fb(this.conditions[i],bb);
}}var be=[];

for(var bc in bb){if(bb[bc]){be.push(bc,a,bb[bc],h);
}}return be.join(s);
}},destruct:function(){this.numericAllowed=this.betweenAllowed=this.conditions=null;
}});
})();
(function(){var g="String",f="qx.ui.embed.AbstractIframe",e="name",d="",c="_applySource",b="qx.event.type.Event",a="_applyFrameName";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(h){qx.ui.core.Widget.call(this);

if(h){this.setSource(h);
}},events:{"load":b},properties:{source:{check:g,apply:c,nullable:true},frameName:{check:g,init:d,apply:a}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(i,j){this._getIframeElement().setSource(i);
},_applyFrameName:function(k,l){this._getIframeElement().setAttribute(e,k);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
}}});
})();
(function(){var k="qx.client",j="mousedown",i="load",h="help",g="mouseup",f="losecapture",d="contextmenu",c="none",b="display",a="no",G="Boolean",F="px",E="url(",D=")",C="gecko",B="repeat",A="div",z="auto",y="_applyScrollbar",x="DOMNodeInserted",r="_applyNativeHelp",s="yes",p="scrolling",q="/",n="__zW",o="appear",l="mshtml",m="block",t="qx.ui.embed.Iframe",u="iframe",w="qx/static/blank.gif",v="absolute";
qx.Class.define(t,{extend:qx.ui.embed.AbstractIframe,construct:function(H){if(H!=null){this.__zV=H;
}qx.ui.embed.AbstractIframe.call(this,H);
qx.event.Registration.addListener(document.body,j,this.block,this,true);
qx.event.Registration.addListener(document.body,g,this.release,this,true);
qx.event.Registration.addListener(document.body,f,this.release,this,true);
this.__zW=this._createBlockerElement();
this.getContainerElement().add(this.__zW);

if(qx.core.Variant.isSet(k,C)){this.addListenerOnce(o,function(e){var I=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(I,x,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:u},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:G,init:false,apply:r},scrollbar:{check:[z,a,s],nullable:true,themeable:true,apply:y}},members:{__zV:null,__zW:null,renderLayout:function(J,top,K,L){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,J,top,K,L);
var N=F;
var M=this.getInsets();
this.__zW.setStyles({"left":M.left+N,"top":M.top+N,"width":(K-M.left-M.right)+N,"height":(L-M.top-M.bottom)+N});
},_createContentElement:function(){var O=new qx.html.Iframe(this.__zV);
O.addListener(i,this._onIframeLoad,this);
return O;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var P=new qx.html.Element(A);
P.setStyles({"zIndex":20,"position":v,"display":c});
if(qx.core.Variant.isSet(k,l)){P.setStyles({backgroundImage:E+qx.util.ResourceManager.getInstance().toUri(w)+D,backgroundRepeat:B});
}return P;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(i);
},block:function(){this.__zW.setStyle(b,m);
},release:function(){this.__zW.setStyle(b,c);
},_applyNativeContextMenu:function(Q,R){if(Q!==false&&R!==false){return;
}var S=this.getDocument();

if(!S){return;
}
try{var T=S.documentElement;
}catch(e){return ;
}
if(R===false){qx.event.Registration.removeListener(T,d,this._onNativeContextMenu,this,true);
}
if(Q===false){qx.event.Registration.addListener(T,d,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(k,{"mshtml":function(U,V){var document=this.getDocument();

if(!document){return;
}
try{if(V===false){qx.bom.Event.removeNativeListener(document,h,qx.lang.Function.returnFalse);
}
if(U===false){qx.bom.Event.addNativeListener(document,h,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var X=this.getContentElement().getDomElement();
var W=X.src;
if(W.charAt(W.length-1)==q){W=W.substring(0,W.length-1);
}
if(W!=this.getSource()){qx.bom.Iframe.getWindow(X).stop();
X.src=this.getSource();
}},_applyScrollbar:function(Y){this.getContentElement().setAttribute(p,Y);
}},destruct:function(){this._disposeObjects(n);
qx.event.Registration.removeListener(document.body,j,this.block,this,true);
qx.event.Registration.removeListener(document.body,g,this.release,this,true);
qx.event.Registration.removeListener(document.body,f,this.release,this,true);
}});
})();
(function(){var e="source",d="name",c="qx.html.Iframe",b="qx.event.type.Event",a="iframe";
qx.Class.define(c,{extend:qx.html.Element,construct:function(f,g,h){qx.html.Element.call(this,a,g,h);
this._setProperty(e,f);
},events:{"load":b},members:{_applyProperty:function(name,i){qx.html.Element.prototype._applyProperty.call(this,name,i);

if(name==e){var j=this.getDomElement();
qx.bom.Iframe.setSource(j,i);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var k=this.getDomElement();

if(k){return qx.bom.Iframe.getWindow(k);
}else{return null;
}},getDocument:function(){var l=this.getDomElement();

if(l){return qx.bom.Iframe.getDocument(l);
}else{return null;
}},getBody:function(){var m=this.getDomElement();

if(m){return qx.bom.Iframe.getBody(m);
}else{return null;
}},setSource:function(n){this._setProperty(e,n);
return this;
},getSource:function(){return this._getProperty(e);
},setName:function(name){this.setAttribute(d,name);
return this;
},getName:function(){return this.getAttribute(d);
},reload:function(){var p=this.getDomElement();

if(p){var o=this.getSource();
this.setSource(null);
this.setSource(o);
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="jslint_toolkit.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__wd:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__wd=null;
},getInsets:function(){if(this.__wd){return this.__wd;
}var j=this._getDefaultInsets();
return this.__wd={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__wd=null;
}},destruct:function(){this.__wd=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px",d="px ",c="dotted",b="_applyWidth",a="dashed",E="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleLeft",y="widthLeft",x="widthBottom",w="styleTop",v="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="border-top",k="border-left",l="border-right",s="qx.ui.decoration.Single",t="border-bottom",u="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(F,G,H){qx.ui.decoration.Abstract.call(this);
if(F!=null){this.setWidth(F);
}
if(G!=null){this.setStyle(G);
}
if(H!=null){this.setColor(H);
}},properties:{widthTop:{check:E,init:0,apply:b},widthRight:{check:E,init:0,apply:b},widthBottom:{check:E,init:0,apply:b},widthLeft:{check:E,init:0,apply:b},styleTop:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleRight:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,c,a,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[y,z,o]},right:{group:[r,A,p]},top:{group:[B,w,m]},bottom:{group:[x,q,v]},width:{group:[B,r,x,y],mode:C},style:{group:[w,A,q,z],mode:C},color:{group:[m,p,v,o],mode:C}},members:{__we:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__we;
},getMarkup:function(I){if(this.__we){return this.__we;
}var J=qx.theme.manager.Color.getInstance();
var K={};
var M=this.getWidthTop();

if(M>0){K[n]=M+d+this.getStyleTop()+D+(J.resolve(this.getColorTop())||g);
}var M=this.getWidthRight();

if(M>0){K[l]=M+d+this.getStyleRight()+D+(J.resolve(this.getColorRight())||g);
}var M=this.getWidthBottom();

if(M>0){K[t]=M+d+this.getStyleBottom()+D+(J.resolve(this.getColorBottom())||g);
}var M=this.getWidthLeft();

if(M>0){K[k]=M+d+this.getStyleLeft()+D+(J.resolve(this.getColorLeft())||g);
}{};
K.position=u;
K.top=0;
K.left=0;
var L=this._generateBackgroundMarkup(K);
return this.__we=L;
},resize:function(N,O,P){var Q=this.getInsets();
O-=Q.left+Q.right;
P-=Q.top+Q.bottom;
if(O<0){O=0;
}
if(P<0){P=0;
}N.style.width=O+e;
N.style.height=P+e;
N.style.left=(parseInt(N.style.left,10)+Q.left-this.getWidthLeft())+e;
N.style.top=(parseInt(N.style.top,10)+Q.top-this.getWidthTop())+e;
},tint:function(R,S){var T=qx.theme.manager.Color.getInstance();

if(S==null){S=this.getBackgroundColor();
}R.style.backgroundColor=T.resolve(S)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__we=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(g){qx.ui.decoration.Abstract.call(this);

if(g!=null){this.setBackgroundColor(g);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__yN:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__yN;
},getMarkup:function(){if(this.__yN){return this.__yN;
}var h={position:a,top:0,left:0};
var i=this._generateBackgroundMarkup(h);
return this.__yN=i;
},resize:function(j,k,l){var m=this.getInsets();
j.style.width=(k-m.left-m.right)+f;
j.style.height=(l-m.top-m.bottom)+f;
j.style.left=-m.left+f;
j.style.top=-m.top+f;
},tint:function(n,o){var p=qx.theme.manager.Color.getInstance();

if(o==null){o=this.getBackgroundColor();
}n.style.backgroundColor=p.resolve(o)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__yN=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(w,x,y){qx.ui.decoration.Abstract.call(this);
if(w!=null){this.setOuterColor(w);
}
if(x!=null){this.setInnerColor(x);
}
if(y!=null){this.setInnerOpacity(y);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__zg:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__zg;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__zg){return this.__zg;
}var z=qx.theme.manager.Color.getInstance();
var A=[];
var D=d+z.resolve(this.getOuterColor())+b;
var C=d+z.resolve(this.getInnerColor())+b;
A.push(k);
A.push(f);
A.push(e,D);
A.push(qx.bom.element.Opacity.compile(0.35));
A.push(i);
A.push(n);
A.push(q,D);
A.push(r,D);
A.push(qx.bom.element.Opacity.compile(1));
A.push(i);
A.push(f);
A.push(m);
A.push(p,D);
A.push(s,D);
A.push(qx.bom.element.Opacity.compile(1));
A.push(i);
var B={position:l,top:g,left:g,opacity:1};
A.push(this._generateBackgroundMarkup(B));
A.push(t);
A.push(e,C);
A.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
A.push(i);
A.push(v);
return this.__zg=A.join(c);
},resize:function(E,F,G){if(F<4){F=4;
}
if(G<4){G=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=F-2;
var outerHeight=G-2;
var M=outerWidth;
var L=outerHeight;
var innerWidth=F-4;
var innerHeight=G-4;
}else{var outerWidth=F;
var outerHeight=G;
var M=F-2;
var L=G-2;
var innerWidth=M;
var innerHeight=L;
}var O=a;
var K=E.childNodes[0].style;
K.width=outerWidth+O;
K.height=outerHeight+O;
var J=E.childNodes[1].style;
J.width=outerWidth+O;
J.height=L+O;
var I=E.childNodes[2].style;
I.width=M+O;
I.height=outerHeight+O;
var H=E.childNodes[3].style;
H.width=M+O;
H.height=L+O;
var N=E.childNodes[4].style;
N.width=innerWidth+O;
N.height=innerHeight+O;
},tint:function(P,Q){var R=qx.theme.manager.Color.getInstance();

if(Q==null){Q=this.getBackgroundColor();
}P.childNodes[3].style.backgroundColor=R.resolve(Q)||c;
}},destruct:function(){this.__zg=null;
}});
})();
(function(){var o="_applyStyle",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(p,q,r){qx.ui.decoration.Abstract.call(this);
if(p!=null){this.setWidth(p);
}
if(q!=null){this.setStyle(q);
}
if(r!=null){this.setColor(r);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__zf:null,_getDefaultInsets:function(){var s=this.getWidth();
return {top:s,right:s,bottom:s,left:s};
},_isInitialized:function(){return !!this.__zf;
},getMarkup:function(){if(this.__zf){return this.__zf;
}var t={position:a,top:0,left:0};
var u=this.getWidth();
{};
var w=qx.theme.manager.Color.getInstance();
t.border=u+c+this.getStyle()+e+(w.resolve(this.getColor())||n);
var v=this._generateBackgroundMarkup(t);
return this.__zf=v;
},resize:function(x,y,z){var B=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(B||qx.bom.client.Feature.CONTENT_BOX){var A=this.getWidth()*2;
y-=A;
z-=A;
if(y<0){y=0;
}
if(z<0){z=0;
}}x.style.width=y+l;
x.style.height=z+l;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__zf=null;
}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(n,o){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__xH=new qx.ui.decoration.css3.BorderImage();

if(n){this.__xI(n);
}}else{this.__xH=new qx.ui.decoration.GridDiv(n);
}
if(o!=null){this.__xH.setInsets(o);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__xH:null,getMarkup:function(){return this.__xH.getMarkup();
},resize:function(p,q,r){this.__xH.resize(p,q,r);
},tint:function(s,t){},getInsets:function(){return this.__xH.getInsets();
},_applyInsets:function(u,v,name){var w=f+qx.lang.String.firstUp(name);
this.__xH[w](u);
},_applyBaseImage:function(x,y){if(this.__xH instanceof qx.ui.decoration.GridDiv){this.__xH.setBaseImage(x);
}else{this.__xI(x);
}},__xI:function(z){var B,D;
this.__xH.setBorderImage(z);
var F=qx.util.AliasManager.getInstance().resolve(z);
var G=/(.*)(\.[a-z]+)$/.exec(F);
var C=G[1];
var E=G[2];
var A=qx.util.ResourceManager.getInstance();
var H=A.getImageHeight(C+d+E);
var I=A.getImageWidth(C+k+E);
{};
this.__xH.setSlice([H,I]);
}},destruct:function(){this.__xH=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-input",bt="border-disabled",bs="decoration/table/header-cell.png",br="decoration/form/input.png",bq="#f8f8f8",bp="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bo="#b6b6b6",bn="background-pane",bm="repeat-y",bl="decoration/form/input-focused.png",bk="#33508D",t="decoration/selection.png",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="black",p="decoration/group-item.png",q="decoration/form/button-c.png",n="decoration/scrollbar/scrollbar-bg-vertical.png",o="decoration/form/button.png",B="decoration/form/button-checked.png",C="decoration/tabview/tab-button-left-inactive.png",O="decoration/groupbox/groupbox.png",K="#FAFAFA",W="decoration/pane/pane.png",R="dotted",bg="decoration/toolbar/toolbar-part.gif",bc="decoration/tabview/tab-button-top-inactive.png",G="decoration/menu/bar-background.png",bj="center",bi="decoration/tabview/tab-button-bottom-active.png",bh="decoration/form/button-hovered.png",F="decoration/form/tooltip-error-arrow.png",I="decoration/window/captionbar-inactive.png",J="qx/decoration/Modern",M="decoration/menu/background.png",P="decoration/window/statusbar.png",S="border-focused",Y="table-focus-indicator",be="#F2F2F2",v="decoration/form/button-checked-c.png",w="decoration/scrollbar/scrollbar-bg-horizontal.png",H="qx.theme.modern.Decoration",V="#f4f4f4",U="decoration/shadow/shadow-small.png",T="decoration/app-header.png",bb="decoration/tabview/tabview-pane.png",ba="decoration/form/tooltip-error.png",Q="decoration/form/button-focused.png",X="decoration/tabview/tab-button-bottom-inactive.png",a="decoration/form/button-disabled.png",bd="decoration/tabview/tab-button-right-active.png",x="decoration/form/button-pressed.png",y="no-repeat",L="decoration/window/captionbar-active.png",b="decoration/tabview/tab-button-left-active.png",c="background-splitpane",E="decoration/form/button-checked-focused.png",z="#C5C5C5",A="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",N="#b8b8b8",bf="decoration/shadow/shadow.png";
qx.Theme.define(H,{aliases:{decoration:J},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:t,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:t,backgroundRepeat:l,bottom:[2,m,bk]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bk]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:W,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:R}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:ba,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:F,backgroundPositionY:bj,backgroundRepeat:y,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:bf,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:U,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:w,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:n,backgroundRepeat:bm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bp,backgroundRepeat:l,outerColor:bt,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:bt,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:o,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:a,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:Q,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bh,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:x,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:B,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:E,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:S,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bl,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bt,innerColor:j,innerOpacity:0.5,backgroundImage:br,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:A,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:q,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bo,innerColor:bq,backgroundImage:v,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:N,colorRight:V,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bg,backgroundRepeat:bm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bi}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:X}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:b}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:C}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bn,width:3,color:c,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bn,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:L}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:I}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:Y,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bs,backgroundRepeat:l,widthRight:1,colorRight:be,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:M,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:z,widthBottom:1,colorBottom:K}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:G,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:T,backgroundRepeat:l}},"progressbar":{decorator:qx.ui.decoration.Single,style:{width:1,color:d}},"group-item":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:l}}}});
})();
(function(){var a="jslint_toolkit.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});
})();
(function(){var dN="button-frame",dM="atom",dL="widget",dK="main",dJ="button",dI="bold",dH="text-selected",dG="image",dF="middle",dE="selected",co="background-light",cn="cell",cm="text-disabled",cl="groupbox",ck="decoration/arrows/down.png",cj="label",ci="border-invalid",ch="input",cg="white",cf="input-disabled",dU="menu-button",dV="input-focused-invalid",dS="toolbar-button",dT="spinner",dQ="input-focused",dR="popup",dO="tooltip",dP="list",dW="tree-item",dX="treevirtual-contract",dk="scrollbar",dj="datechooser/nav-button",dm="text-hovered",dl="center",dp="treevirtual-expand",dn="textfield",dr="decoration/arrows/right.png",dq="background-application",di="radiobutton",dh="invalid",k="combobox",l="right-top",m="checkbox",n="text-title",o="icon/16/places/folder-open.png",p="qx/static/blank.gif",q="scrollbar/button",r="right",s="combobox/button",t="icon/16/places/folder.png",em="text-label",el="decoration/tree/closed.png",ek="scrollbar-slider-horizontal",ej="checkbox-checked",eq="decoration/arrows/left.png",ep="button-focused",eo="text-light",en="menu-slidebar-button",es="checkbox-undetermined",er="text-input",bm="slidebar/button-forward",bn="background-splitpane",bk=".png",bl="decoration/tree/open.png",bq="default",br="decoration/arrows/down-small.png",bo="datechooser",bp="slidebar/button-backward",bi="selectbox",bj="treevirtual-folder",N="shadow-popup",M="icon/16/mimetypes/office-document.png",P="background-medium",O="icon/32/places/folder-open.png",J="icon/22/places/folder-open.png",I="table",L="decoration/arrows/up.png",K="decoration/form/",H="",G="-invalid",bx="button-checked",by="decoration/window/maximize-active-hovered.png",bz="radiobutton-hovered",bA="keyboard-focus",bt="group-item",bu="decoration/cursors/",bv="slidebar",bw="tooltip-error-arrow",bB="table-scroller-focus-indicator",bC="move-frame",bb="nodrop",ba="decoration/table/boolean-true.png",Y="table-header-cell",X="menu",W="app-header",V="row-layer",U="text-inactive",T="move",bf="radiobutton-checked-focused",be="decoration/window/restore-active-hovered.png",bD="shadow-window",bE="table-column-button",bF="right.png",bG="checkbox-undetermined-hovered",bH="tabview-page-button-bottom-inactive",bI="tooltip-error",bJ="window-statusbar",bK="button-hovered",bL="decoration/scrollbar/scrollbar-",bM="background-tip",cw="scrollbar-slider-horizontal-disabled",cv="table-scroller-header",cu="button-pressed",ct="table-pane",cA="decoration/window/close-active.png",cz="native",cy="checkbox-hovered",cx="button-invalid-shadow",cE="decoration/window/minimize-active-hovered.png",cD="menubar",dc="icon/16/actions/dialog-cancel.png",dd="tabview-page-button-top-inactive",da="tabview-page-button-left-inactive",db="menu-slidebar",cX="toolbar-button-checked",cY="decoration/tree/open-selected.png",cV="radiobutton-checked",cW="decoration/window/minimize-inactive.png",de="icon/16/apps/office-calendar.png",df="group",dv="tabview-page-button-right-inactive",du="decoration/window/minimize-active.png",dx="decoration/window/restore-inactive.png",dw="checkbox-checked-focused",dz="splitpane",dy="combobox/textfield",dB="button-preselected-focused",dA="decoration/window/close-active-hovered.png",dt="qx/icon/Tango/16/actions/window-close.png",ds="checkbox-pressed",ef="button-disabled",eg="selected-dragover",eh="border-separator",ei="decoration/window/maximize-inactive.png",eb="dragover",ec="scrollarea",ed="scrollbar-vertical",ee="decoration/menu/checkbox-invert.gif",dY="decoration/toolbar/toolbar-handle-knob.gif",ea="icon/22/mimetypes/office-document.png",j="button-preselected",i="button-checked-focused",h="up.png",g="best-fit",f="decoration/tree/closed-selected.png",e="qx.theme.modern.Appearance",d="text-active",c="toolbar-button-hovered",b="progressive-table-header",a="decoration/table/select-column-order.png",w="decoration/menu/radiobutton.gif",x="decoration/arrows/forward.png",u="decoration/table/descending.png",v="progressbar",A="window-captionbar-active",B="checkbox-checked-hovered",y="scrollbar-slider-vertical",z="toolbar",D="alias",E="decoration/window/restore-active.png",cI="decoration/table/boolean-false.png",cC="icon/32/mimetypes/office-document.png",cP="radiobutton-checked-disabled",cL="tabview-pane",cr="decoration/arrows/rewind.png",cp="checkbox-focused",R="top",cs="icon/16/actions/dialog-ok.png",bd="radiobutton-checked-hovered",bc="table-header-cell-hovered",bW="window",bX="text-gray",bY="decoration/menu/radiobutton-invert.gif",ca="text-placeholder",cb="slider",cc="keep-align",cd="down.png",ce="tabview-page-button-top-active",bT="icon/22/places/folder.png",bU="decoration/window/maximize-active.png",cq="checkbox-checked-pressed",cO="decoration/window/close-inactive.png",cN="tabview-page-button-left-active",cM="toolbar-part",cT="decoration/splitpane/knob-vertical.png",cS=".gif",cR="radiobutton-checked-pressed",cQ="table-statusbar",cK="radiobutton-pressed",cJ="window-captionbar-inactive",C="copy",bh="radiobutton-focused",bg="decoration/arrows/down-invert.png",cB="decoration/menu/checkbox.gif",bs="decoration/splitpane/knob-horizontal.png",cH="icon/32/places/folder.png",cG="toolbar-separator",cF="tabview-page-button-bottom-active",Q="decoration/arrows/up-small.png",cU="decoration/table/ascending.png",F="decoration/arrows/up-invert.png",S="small",bN="tabview-page-button-right-active",bO="-disabled",bP="scrollbar-horizontal",bQ="checkbox-undetermined-focused",bR="progressive-table-header-cell",bS="menu-separator",dg="pane",bV="decoration/arrows/right-invert.png",dD="left.png",dC="icon/16/actions/view-refresh.png";
qx.Theme.define(e,{appearances:{"widget":{},"root":{style:function(et){return {backgroundColor:dq,textColor:em,font:bq};
}},"label":{style:function(eu){return {textColor:eu.disabled?cm:undefined};
}},"move-frame":{style:function(ev){return {decorator:dK};
}},"resize-frame":bC,"dragdrop-cursor":{style:function(ew){var ex=bb;

if(ew.copy){ex=C;
}else if(ew.move){ex=T;
}else if(ew.alias){ex=D;
}return {source:bu+ex+cS,position:l,offset:[2,16,2,6]};
}},"image":{style:function(ey){return {opacity:!ey.replacement&&ey.disabled?0.3:1};
}},"atom":{},"atom/label":cj,"atom/icon":dG,"popup":{style:function(ez){return {decorator:dK,backgroundColor:co,shadow:N};
}},"button-frame":{alias:dM,style:function(eA){var eC,eB;

if(eA.checked&&eA.focused&&!eA.inner){eC=i;
eB=undefined;
}else if(eA.disabled){eC=ef;
eB=undefined;
}else if(eA.pressed){eC=cu;
eB=dm;
}else if(eA.checked){eC=bx;
eB=undefined;
}else if(eA.hovered){eC=bK;
eB=dm;
}else if(eA.preselected&&eA.focused&&!eA.inner){eC=dB;
eB=dm;
}else if(eA.preselected){eC=j;
eB=dm;
}else if(eA.focused&&!eA.inner){eC=ep;
eB=undefined;
}else{eC=dJ;
eB=undefined;
}return {decorator:eC,textColor:eB,shadow:eA.invalid&&!eA.disabled?cx:undefined};
}},"button-frame/image":{style:function(eD){return {opacity:!eD.replacement&&eD.disabled?0.5:1};
}},"button":{alias:dN,include:dN,style:function(eE){return {padding:[2,8],center:true};
}},"hover-button":{alias:dM,include:dM,style:function(eF){return {decorator:eF.hovered?dE:undefined,textColor:eF.hovered?dH:undefined};
}},"splitbutton":{},"splitbutton/button":dJ,"splitbutton/arrow":{alias:dJ,include:dJ,style:function(eG){return {icon:ck,padding:2,marginLeft:1};
}},"checkbox":{alias:dM,style:function(eH){var eJ;
if(eH.checked){if(eH.disabled){eJ=ej;
}else if(eH.focused){eJ=dw;
}else if(eH.pressed){eJ=cq;
}else if(eH.hovered){eJ=B;
}else{eJ=ej;
}}else if(eH.undetermined){if(eH.disabled){eJ=es;
}else if(eH.focused){eJ=bQ;
}else if(eH.hovered){eJ=bG;
}else{eJ=es;
}}else if(!eH.disabled){if(eH.focused){eJ=cp;
}else if(eH.pressed){eJ=ds;
}else if(eH.hovered){eJ=cy;
}}eJ=eJ||m;
var eI=eH.invalid&&!eH.disabled?G:H;
return {icon:K+eJ+eI+bk,gap:6};
}},"radiobutton":{alias:dM,style:function(eK){var eM;

if(eK.checked&&eK.focused){eM=bf;
}else if(eK.checked&&eK.disabled){eM=cP;
}else if(eK.checked&&eK.pressed){eM=cR;
}else if(eK.checked&&eK.hovered){eM=bd;
}else if(eK.checked){eM=cV;
}else if(eK.focused){eM=bh;
}else if(eK.pressed){eM=cK;
}else if(eK.hovered){eM=bz;
}else{eM=di;
}var eL=eK.invalid&&!eK.disabled?G:H;
return {icon:K+eM+eL+bk,gap:6};
}},"textfield":{style:function(eN){var eS;
var eQ=!!eN.focused;
var eR=!!eN.invalid;
var eO=!!eN.disabled;

if(eQ&&eR&&!eO){eS=dV;
}else if(eQ&&!eR&&!eO){eS=dQ;
}else if(eO){eS=cf;
}else if(!eQ&&eR&&!eO){eS=ci;
}else{eS=ch;
}var eP;

if(eN.disabled){eP=cm;
}else if(eN.showingPlaceholder){eP=ca;
}else{eP=er;
}return {decorator:eS,padding:[2,4,1],textColor:eP};
}},"textarea":{include:dn,style:function(eT){return {padding:4};
}},"spinner":{style:function(eU){var eY;
var eW=!!eU.focused;
var eX=!!eU.invalid;
var eV=!!eU.disabled;

if(eW&&eX&&!eV){eY=dV;
}else if(eW&&!eX&&!eV){eY=dQ;
}else if(eV){eY=cf;
}else if(!eW&&eX&&!eV){eY=ci;
}else{eY=ch;
}return {decorator:eY};
}},"spinner/textfield":{style:function(fa){return {marginRight:2,padding:[2,4,1],textColor:fa.disabled?cm:er};
}},"spinner/upbutton":{alias:dN,include:dN,style:function(fb){return {icon:Q,padding:fb.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:dN,include:dN,style:function(fc){return {icon:br,padding:fc.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":k,"datefield/button":{alias:s,include:s,style:function(fd){return {icon:de,padding:[0,3],decorator:undefined};
}},"datefield/textfield":dy,"datefield/list":{alias:bo,include:bo,style:function(fe){return {decorator:undefined};
}},"groupbox":{style:function(ff){return {legendPosition:R};
}},"groupbox/legend":{alias:dM,style:function(fg){return {padding:[1,0,1,4],textColor:fg.invalid?dh:n,font:dI};
}},"groupbox/frame":{style:function(fh){return {padding:12,decorator:df};
}},"check-groupbox":cl,"check-groupbox/legend":{alias:m,include:m,style:function(fi){return {padding:[1,0,1,4],textColor:fi.invalid?dh:n,font:dI};
}},"radio-groupbox":cl,"radio-groupbox/legend":{alias:di,include:di,style:function(fj){return {padding:[1,0,1,4],textColor:fj.invalid?dh:n,font:dI};
}},"scrollarea":{style:function(fk){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(fl){return {backgroundColor:dq};
}},"scrollarea/pane":dL,"scrollarea/scrollbar-x":dk,"scrollarea/scrollbar-y":dk,"scrollbar":{style:function(fm){if(fm[cz]){return {};
}return {width:fm.horizontal?undefined:16,height:fm.horizontal?16:undefined,decorator:fm.horizontal?bP:ed,padding:1};
}},"scrollbar/slider":{alias:cb,style:function(fn){return {padding:fn.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:dN,style:function(fo){var fp=fo.horizontal?ek:y;

if(fo.disabled){fp+=bO;
}return {decorator:fp,minHeight:fo.horizontal?undefined:9,minWidth:fo.horizontal?9:undefined};
}},"scrollbar/button":{alias:dN,include:dN,style:function(fq){var fr=bL;

if(fq.left){fr+=dD;
}else if(fq.right){fr+=bF;
}else if(fq.up){fr+=h;
}else{fr+=cd;
}
if(fq.left||fq.right){return {padding:[0,0,0,fq.left?3:4],icon:fr,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:fr,width:14,height:15};
}}},"scrollbar/button-begin":q,"scrollbar/button-end":q,"slider":{style:function(fs){var fw;
var fu=!!fs.focused;
var fv=!!fs.invalid;
var ft=!!fs.disabled;

if(fu&&fv&&!ft){fw=dV;
}else if(fu&&!fv&&!ft){fw=dQ;
}else if(ft){fw=cf;
}else if(!fu&&fv&&!ft){fw=ci;
}else{fw=ch;
}return {decorator:fw};
}},"slider/knob":{include:dN,style:function(fx){return {decorator:fx.disabled?cw:ek,shadow:undefined,height:14,width:14};
}},"list":{alias:ec,style:function(fy){var fC;
var fA=!!fy.focused;
var fB=!!fy.invalid;
var fz=!!fy.disabled;

if(fA&&fB&&!fz){fC=dV;
}else if(fA&&!fB&&!fz){fC=dQ;
}else if(fz){fC=cf;
}else if(!fA&&fB&&!fz){fC=ci;
}else{fC=ch;
}return {backgroundColor:co,decorator:fC};
}},"list/pane":dL,"listitem":{alias:dM,style:function(fD){var fE;

if(fD.dragover){fE=fD.selected?eg:eb;
}else{fE=fD.selected?dE:undefined;
}return {padding:fD.dragover?[4,4,2,4]:4,textColor:fD.selected?dH:undefined,decorator:fE};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dN,include:dN,style:function(fF){return {padding:5,center:true,icon:fF.vertical?ck:dr};
}},"slidebar/button-backward":{alias:dN,include:dN,style:function(fG){return {padding:5,center:true,icon:fG.vertical?L:eq};
}},"tabview":{style:function(fH){return {contentPadding:16};
}},"tabview/bar":{alias:bv,style:function(fI){var fJ={marginBottom:fI.barTop?-1:0,marginTop:fI.barBottom?-4:0,marginLeft:fI.barRight?-3:0,marginRight:fI.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(fI.barTop||fI.barBottom){fJ.paddingLeft=5;
fJ.paddingRight=7;
}else{fJ.paddingTop=5;
fJ.paddingBottom=7;
}return fJ;
}},"tabview/bar/button-forward":{include:bm,alias:bm,style:function(fK){if(fK.barTop||fK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bp,alias:bp,style:function(fL){if(fL.barTop||fL.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(fM){return {decorator:cL,minHeight:100,marginBottom:fM.barBottom?-1:0,marginTop:fM.barTop?-1:0,marginLeft:fM.barLeft?-1:0,marginRight:fM.barRight?-1:0};
}},"tabview-page":dL,"tabview-page/button":{alias:dM,style:function(fN){var fT,fP=0;
var fS=0,fO=0,fQ=0,fR=0;

if(fN.checked){if(fN.barTop){fT=ce;
fP=[6,14];
fQ=fN.firstTab?0:-5;
fR=fN.lastTab?0:-5;
}else if(fN.barBottom){fT=cF;
fP=[6,14];
fQ=fN.firstTab?0:-5;
fR=fN.lastTab?0:-5;
}else if(fN.barRight){fT=bN;
fP=[6,13];
fS=fN.firstTab?0:-5;
fO=fN.lastTab?0:-5;
}else{fT=cN;
fP=[6,13];
fS=fN.firstTab?0:-5;
fO=fN.lastTab?0:-5;
}}else{if(fN.barTop){fT=dd;
fP=[4,10];
fS=4;
fQ=fN.firstTab?5:1;
fR=1;
}else if(fN.barBottom){fT=bH;
fP=[4,10];
fO=4;
fQ=fN.firstTab?5:1;
fR=1;
}else if(fN.barRight){fT=dv;
fP=[4,10];
fR=5;
fS=fN.firstTab?5:1;
fO=1;
fQ=1;
}else{fT=da;
fP=[4,10];
fQ=5;
fS=fN.firstTab?5:1;
fO=1;
fR=1;
}}return {zIndex:fN.checked?10:5,decorator:fT,padding:fP,marginTop:fS,marginBottom:fO,marginLeft:fQ,marginRight:fR,textColor:fN.checked?d:U};
}},"tabview-page/button/label":{alias:cj,style:function(fU){return {padding:[0,1,0,1],margin:fU.focused?0:1,decorator:fU.focused?bA:undefined};
}},"tabview-page/button/close-button":{alias:dM,style:function(fV){return {icon:dt};
}},"toolbar":{style:function(fW){return {decorator:z,spacing:2};
}},"toolbar/part":{style:function(fX){return {decorator:cM,spacing:2};
}},"toolbar/part/container":{style:function(fY){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(ga){return {source:dY,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:dM,style:function(gb){return {marginTop:2,marginBottom:2,padding:(gb.pressed||gb.checked||gb.hovered)&&!gb.disabled||(gb.disabled&&gb.checked)?3:5,decorator:gb.pressed||(gb.checked&&!gb.hovered)||(gb.checked&&gb.disabled)?cX:gb.hovered&&!gb.disabled?c:undefined};
}},"toolbar-menubutton":{alias:dS,include:dS,style:function(gc){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dG,include:dG,style:function(gd){return {source:br};
}},"toolbar-splitbutton":{style:function(ge){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:dS,include:dS,style:function(gf){return {icon:ck,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:dS,include:dS,style:function(gg){if(gg.pressed||gg.checked||(gg.hovered&&!gg.disabled)){var gh=1;
}else{var gh=3;
}return {padding:gh,icon:ck,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(gi){return {decorator:cG,margin:7};
}},"tree":dP,"tree-item":{style:function(gj){return {padding:[2,6],textColor:gj.selected?dH:undefined,decorator:gj.selected?dE:undefined};
}},"tree-item/icon":{include:dG,style:function(gk){return {paddingRight:5};
}},"tree-item/label":cj,"tree-item/open":{include:dG,style:function(gl){var gm;

if(gl.selected&&gl.opened){gm=cY;
}else if(gl.selected&&!gl.opened){gm=f;
}else if(gl.opened){gm=bl;
}else{gm=el;
}return {padding:[0,5,0,2],source:gm};
}},"tree-folder":{include:dW,alias:dW,style:function(gn){var gp,go;

if(gn.small){gp=gn.opened?o:t;
go=o;
}else if(gn.large){gp=gn.opened?O:cH;
go=O;
}else{gp=gn.opened?J:bT;
go=J;
}return {icon:gp,iconOpened:go};
}},"tree-file":{include:dW,alias:dW,style:function(gq){return {icon:gq.small?M:gq.large?cC:ea};
}},"treevirtual":I,"treevirtual-folder":{style:function(gr){return {icon:gr.opened?o:t};
}},"treevirtual-file":{include:bj,alias:bj,style:function(gs){return {icon:M};
}},"treevirtual-line":{style:function(gt){return {icon:p};
}},"treevirtual-contract":{style:function(gu){return {icon:bl,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(gv){return {icon:el,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":dX,"treevirtual-only-expand":dp,"treevirtual-start-contract":dX,"treevirtual-start-expand":dp,"treevirtual-end-contract":dX,"treevirtual-end-expand":dp,"treevirtual-cross-contract":dX,"treevirtual-cross-expand":dp,"treevirtual-end":{style:function(gw){return {icon:p};
}},"treevirtual-cross":{style:function(gx){return {icon:p};
}},"tooltip":{include:dR,style:function(gy){return {backgroundColor:bM,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dM,"tooltip-error":{include:dO,style:function(gz){return {textColor:dH,placeMethod:dL,offset:[0,0,0,14],marginTop:-2,position:l,showTimeout:100,hideTimeout:10000,decorator:bI,shadow:bw,font:dI};
}},"tooltip-error/atom":dM,"window":{style:function(gA){return {shadow:bD,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(gB){return {decorator:bW};
}},"window/captionbar":{style:function(gC){return {decorator:gC.active?A:cJ,textColor:gC.active?cg:bX,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(gD){return {margin:[5,0,3,6]};
}},"window/title":{style:function(gE){return {alignY:dF,font:dI,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:dM,style:function(gF){return {icon:gF.active?gF.hovered?cE:du:cW,margin:[4,8,2,0]};
}},"window/restore-button":{alias:dM,style:function(gG){return {icon:gG.active?gG.hovered?be:E:dx,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:dM,style:function(gH){return {icon:gH.active?gH.hovered?by:bU:ei,margin:[4,8,2,0]};
}},"window/close-button":{alias:dM,style:function(gI){return {icon:gI.active?gI.hovered?dA:cA:cO,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(gJ){return {padding:[2,6],decorator:bJ,minHeight:18};
}},"window/statusbar-text":{style:function(gK){return {font:S};
}},"iframe":{style:function(gL){return {decorator:dK};
}},"resizer":{style:function(gM){return {decorator:dg};
}},"splitpane":{style:function(gN){return {decorator:dz};
}},"splitpane/splitter":{style:function(gO){return {width:gO.horizontal?3:undefined,height:gO.vertical?3:undefined,backgroundColor:bn};
}},"splitpane/splitter/knob":{style:function(gP){return {source:gP.horizontal?bs:cT};
}},"splitpane/slider":{style:function(gQ){return {width:gQ.horizontal?3:undefined,height:gQ.vertical?3:undefined,backgroundColor:bn};
}},"selectbox":{alias:dN,include:dN,style:function(gR){return {padding:[2,8]};
}},"selectbox/atom":dM,"selectbox/popup":dR,"selectbox/list":{alias:dP},"selectbox/arrow":{include:dG,style:function(gS){return {source:ck,paddingLeft:5};
}},"datechooser":{style:function(gT){var gX;
var gV=!!gT.focused;
var gW=!!gT.invalid;
var gU=!!gT.disabled;

if(gV&&gW&&!gU){gX=dV;
}else if(gV&&!gW&&!gU){gX=dQ;
}else if(gU){gX=cf;
}else if(!gV&&gW&&!gU){gX=ci;
}else{gX=ch;
}return {padding:2,decorator:gX,backgroundColor:co};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:dN,alias:dN,style:function(gY){var ha={padding:[2,4],shadow:undefined};

if(gY.lastYear){ha.icon=cr;
ha.marginRight=1;
}else if(gY.lastMonth){ha.icon=eq;
}else if(gY.nextYear){ha.icon=x;
ha.marginLeft=1;
}else if(gY.nextMonth){ha.icon=dr;
}return ha;
}},"datechooser/last-year-button-tooltip":dO,"datechooser/last-month-button-tooltip":dO,"datechooser/next-year-button-tooltip":dO,"datechooser/next-month-button-tooltip":dO,"datechooser/last-year-button":dj,"datechooser/last-month-button":dj,"datechooser/next-month-button":dj,"datechooser/next-year-button":dj,"datechooser/month-year-label":{style:function(hb){return {font:dI,textAlign:dl,textColor:hb.disabled?cm:undefined};
}},"datechooser/date-pane":{style:function(hc){return {textColor:hc.disabled?cm:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(hd){return {textColor:hd.disabled?cm:hd.weekend?eo:undefined,textAlign:dl,paddingTop:2,backgroundColor:P};
}},"datechooser/week":{style:function(he){return {textAlign:dl,padding:[2,4],backgroundColor:P};
}},"datechooser/day":{style:function(hf){return {textAlign:dl,decorator:hf.disabled?undefined:hf.selected?dE:undefined,textColor:hf.disabled?cm:hf.selected?dH:hf.otherMonth?eo:undefined,font:hf.today?dI:undefined,padding:[2,4]};
}},"combobox":{style:function(hg){var hk;
var hi=!!hg.focused;
var hj=!!hg.invalid;
var hh=!!hg.disabled;

if(hi&&hj&&!hh){hk=dV;
}else if(hi&&!hj&&!hh){hk=dQ;
}else if(hh){hk=cf;
}else if(!hi&&hj&&!hh){hk=ci;
}else{hk=ch;
}return {decorator:hk};
}},"combobox/popup":dR,"combobox/list":{alias:dP},"combobox/button":{include:dN,alias:dN,style:function(hl){var hm={icon:ck,padding:2};

if(hl.selected){hm.decorator=ep;
}return hm;
}},"combobox/textfield":{include:dn,style:function(hn){return {decorator:undefined};
}},"menu":{style:function(ho){var hp={decorator:X,shadow:N,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:ho.submenu||ho.contextmenu?g:cc};

if(ho.submenu){hp.position=l;
hp.offset=[-2,-3];
}return hp;
}},"menu/slidebar":db,"menu-slidebar":dL,"menu-slidebar-button":{style:function(hq){return {decorator:hq.hovered?dE:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:en,style:function(hr){return {icon:hr.hovered?F:L};
}},"menu-slidebar/button-forward":{include:en,style:function(hs){return {icon:hs.hovered?bg:ck};
}},"menu-separator":{style:function(ht){return {height:0,decorator:bS,margin:[4,2]};
}},"menu-button":{alias:dM,style:function(hu){return {decorator:hu.selected?dE:undefined,textColor:hu.selected?dH:undefined,padding:[4,6]};
}},"menu-button/icon":{include:dG,style:function(hv){return {alignY:dF};
}},"menu-button/label":{include:cj,style:function(hw){return {alignY:dF,padding:1};
}},"menu-button/shortcut":{include:cj,style:function(hx){return {alignY:dF,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dG,style:function(hy){return {source:hy.selected?bV:dr,alignY:dF};
}},"menu-checkbox":{alias:dU,include:dU,style:function(hz){return {icon:!hz.checked?undefined:hz.selected?ee:cB};
}},"menu-radiobutton":{alias:dU,include:dU,style:function(hA){return {icon:!hA.checked?undefined:hA.selected?bY:w};
}},"menubar":{style:function(hB){return {decorator:cD};
}},"menubar-button":{alias:dM,style:function(hC){return {decorator:(hC.pressed||hC.hovered)&&!hC.disabled?dE:undefined,textColor:hC.pressed||hC.hovered?dH:undefined,padding:[3,8]};
}},"colorselector":dL,"colorselector/control-bar":dL,"colorselector/control-pane":dL,"colorselector/visual-pane":cl,"colorselector/preset-grid":dL,"colorselector/colorbucket":{style:function(hD){return {decorator:dK,width:16,height:16};
}},"colorselector/preset-field-set":cl,"colorselector/input-field-set":cl,"colorselector/preview-field-set":cl,"colorselector/hex-field-composite":dL,"colorselector/hex-field":dn,"colorselector/rgb-spinner-composite":dL,"colorselector/rgb-spinner-red":dT,"colorselector/rgb-spinner-green":dT,"colorselector/rgb-spinner-blue":dT,"colorselector/hsb-spinner-composite":dL,"colorselector/hsb-spinner-hue":dT,"colorselector/hsb-spinner-saturation":dT,"colorselector/hsb-spinner-brightness":dT,"colorselector/preview-content-old":{style:function(hE){return {decorator:dK,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hF){return {decorator:dK,backgroundColor:co,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(hG){return {decorator:dK,margin:5};
}},"colorselector/brightness-field":{style:function(hH){return {decorator:dK,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dL,"colorselector/hue-saturation-handle":dL,"colorselector/brightness-pane":dL,"colorselector/brightness-handle":dL,"colorpopup":{alias:dR,include:dR,style:function(hI){return {padding:5,backgroundColor:dq};
}},"colorpopup/field":{style:function(hJ){return {decorator:dK,margin:2,width:14,height:14,backgroundColor:co};
}},"colorpopup/selector-button":dJ,"colorpopup/auto-button":dJ,"colorpopup/preview-pane":cl,"colorpopup/current-preview":{style:function(hK){return {height:20,padding:4,marginLeft:4,decorator:dK,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hL){return {height:20,padding:4,marginRight:4,decorator:dK,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dJ,include:dJ,style:function(hM){return {icon:cs};
}},"colorpopup/colorselector-cancelbutton":{alias:dJ,include:dJ,style:function(hN){return {icon:dc};
}},"table":{alias:dL,style:function(hO){return {decorator:I};
}},"table-header":{},"table/statusbar":{style:function(hP){return {decorator:cQ,padding:[0,2]};
}},"table/column-button":{alias:dN,style:function(hQ){return {decorator:bE,padding:3,icon:a};
}},"table-column-reset-button":{include:dU,alias:dU,style:function(){return {icon:dC};
}},"table-scroller":dL,"table-scroller/scrollbar-x":dk,"table-scroller/scrollbar-y":dk,"table-scroller/header":{style:function(hR){return {decorator:cv};
}},"table-scroller/pane":{style:function(hS){return {backgroundColor:ct};
}},"table-scroller/focus-indicator":{style:function(hT){return {decorator:bB};
}},"table-scroller/resize-line":{style:function(hU){return {backgroundColor:eh,width:2};
}},"table-header-cell":{alias:dM,style:function(hV){return {minWidth:13,minHeight:20,padding:hV.hovered?[3,4,2,4]:[3,4],decorator:hV.hovered?bc:Y,sortIcon:hV.sorted?(hV.sortedAscending?cU:u):undefined};
}},"table-header-cell/label":{style:function(hW){return {minWidth:0,alignY:dF,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(hX){return {alignY:dF,alignX:r};
}},"table-header-cell/icon":{style:function(hY){return {minWidth:0,alignY:dF,paddingRight:5};
}},"table-editor-textfield":{include:dn,style:function(ia){return {decorator:undefined,padding:[2,2],backgroundColor:co};
}},"table-editor-selectbox":{include:bi,alias:bi,style:function(ib){return {padding:[0,2],backgroundColor:co};
}},"table-editor-combobox":{include:k,alias:k,style:function(ic){return {decorator:undefined,backgroundColor:co};
}},"progressive-table-header":{alias:dL,style:function(id){return {decorator:b};
}},"progressive-table-header-cell":{alias:dM,style:function(ie){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:bR};
}},"app-header":{style:function(ig){return {font:dI,textColor:dH,padding:[8,12],decorator:W};
}},"virtual-list":dP,"virtual-list/row-layer":V,"row-layer":{style:function(ih){return {colorEven:cg,colorOdd:cg};
}},"group-item":{include:cj,alias:cj,style:function(ii){return {padding:4,decorator:bt,textColor:cg,font:dI};
}},"column-layer":dL,"cell":{style:function(ij){return {textColor:ij.selected?dH:em,padding:[3,6],font:bq};
}},"cell-string":cn,"cell-number":{include:cn,style:function(ik){return {textAlign:r};
}},"cell-image":cn,"cell-boolean":{include:cn,style:function(il){return {iconTrue:ba,iconFalse:cI};
}},"cell-atom":cn,"cell-date":cn,"cell-html":cn,"htmlarea":{"include":dL,style:function(im){return {backgroundColor:cg};
}},"progressbar":{style:function(io){return {decorator:v,padding:[1],backgroundColor:cg};
}},"progressbar/progress":{style:function(ip){return {decorator:dE};
}}}});
})();
(function(){var a="jslint_toolkit.theme.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var a="jslint_toolkit.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});
})();
(function(){var a="jslint_toolkit.theme.Theme";
qx.Theme.define(a,{meta:{color:jslint_toolkit.theme.Color,decoration:jslint_toolkit.theme.Decoration,font:jslint_toolkit.theme.Font,icon:qx.theme.icon.Tango,appearance:jslint_toolkit.theme.Appearance}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(z,A){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setBorderImage(z);
}
if(A!=null){this.setSlice(A);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__wu:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__wu;
},getMarkup:function(){if(this.__wu){return this.__wu;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__wu=[x,qx.bom.element.Style.compile({"borderImage":o+B+p+C.join(f)+f+D,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:C.join(b)+g}),y].join(q);
return this.__wu;
},resize:function(E,F,G){E.style.width=F+g;
E.style.height=G+g;
},tint:function(H,I){},_applyStyle:function(){{};
},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__wu=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="qx.ui.decoration.GridDiv",k="-c",l="mshtml";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(y,z){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setBaseImage(y);
}
if(z!=null){this.setInsets(z);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__wv:null,__ww:null,__wx:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__wv;
},getMarkup:function(){if(this.__wv){return this.__wv;
}var A=qx.bom.element.Decoration;
var B=this.__ww;
var C=this.__wx;
var D=[];
D.push(s);
D.push(A.create(B.tl,g,{top:0,left:0}));
D.push(A.create(B.t,f,{top:0,left:C.left+j}));
D.push(A.create(B.tr,g,{top:0,right:0}));
D.push(A.create(B.bl,g,{bottom:0,left:0}));
D.push(A.create(B.b,f,{bottom:0,left:C.left+j}));
D.push(A.create(B.br,g,{bottom:0,right:0}));
D.push(A.create(B.l,e,{top:C.top+j,left:0}));
D.push(A.create(B.c,a,{top:C.top+j,left:C.left+j}));
D.push(A.create(B.r,e,{top:C.top+j,right:0}));
D.push(b);
return this.__wv=D.join(o);
},resize:function(E,F,G){var H=this.__wx;
var innerWidth=F-H.left-H.right;
var innerHeight=G-H.top-H.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}E.style.width=F+j;
E.style.height=G+j;
E.childNodes[1].style.width=innerWidth+j;
E.childNodes[4].style.width=innerWidth+j;
E.childNodes[7].style.width=innerWidth+j;
E.childNodes[6].style.height=innerHeight+j;
E.childNodes[7].style.height=innerHeight+j;
E.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(x,l)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(F%2==1){E.childNodes[2].style.marginRight=h;
E.childNodes[5].style.marginRight=h;
E.childNodes[8].style.marginRight=h;
}else{E.childNodes[2].style.marginRight=i;
E.childNodes[5].style.marginRight=i;
E.childNodes[8].style.marginRight=i;
}
if(G%2==1){E.childNodes[3].style.marginBottom=h;
E.childNodes[4].style.marginBottom=h;
E.childNodes[5].style.marginBottom=h;
}else{E.childNodes[3].style.marginBottom=i;
E.childNodes[4].style.marginBottom=i;
E.childNodes[5].style.marginBottom=i;
}}}},tint:function(I,J){},_applyBaseImage:function(K,L){{};

if(K){var P=this._resolveImageUrl(K);
var Q=/(.*)(\.[a-z]+)$/.exec(P);
var O=Q[1];
var N=Q[2];
var M=this.__ww={tl:O+u+N,t:O+v+N,tr:O+d+N,bl:O+m+N,b:O+q+N,br:O+w+N,l:O+c+N,c:O+k+N,r:O+t+N};
this.__wx=this._computeEdgeSizes(M);
}},_resolveImageUrl:function(R){return qx.util.AliasManager.getInstance().resolve(R);
},_computeEdgeSizes:function(S){var T=qx.util.ResourceManager.getInstance();
return {top:T.getImageHeight(S.t),bottom:T.getImageHeight(S.b),left:T.getImageWidth(S.l),right:T.getImageWidth(S.r)};
}},destruct:function(){this.__wv=this.__ww=this.__wx=null;
}});
})();


qx.$$loader.init();

