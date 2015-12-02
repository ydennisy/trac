document.write("script loaded");
document.write(document.referrer);

function postStaticData (ts, queryS, cookies, ua, focus, urlloc, scripts){
    var url = "https://trac-ydennisy.c9users.io/api";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify( {"timestamp": ts, "query": queryS, "cookies": cookies, "ua": ua, "focus": focus, "url": urlloc, "scripts": scripts} ));
}

var getBrowserTimestamp = function(){
    if (!Date.now) {
       return Date.now = function() { return new Date().getTime(); }
    }
    return Math.floor(Date.now() / 1000);
};

var queryString = function(){
    return (document.referrer);
}

var checkCookies = function(){
    return (navigator.cookieEnabled);
};

var getUserAgent = function(){
    return (navigator.userAgent);
};

var tabStateOnLoad = function(){
    return (document.visibilityState);
};

var url = function(){
    var urlloc = (window.location != window.parent.location)
            ? document.referrer
            : document.location;
    return urlloc;
};

var scriptsOnPage = function(){
    return (document.getElementsByTagName("SCRIPT").length);
};

postStaticData(getBrowserTimestamp(), queryString(), checkCookies(), getUserAgent(), tabStateOnLoad(), url(), scriptsOnPage());
