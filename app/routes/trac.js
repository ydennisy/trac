//wrap script to ensure no issues with variable names
(function(){
   function postStaticData (ts, queryS, cookies, ua, focus, scripts, images, words, urlloc){
    var url = "/api";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify( {"timestamp": ts, "query": queryS, "cookies": cookies, "ua": ua, "focus": focus, "scripts": scripts, "images": images, "words": words, "url": urlloc} ));
    }
    
    var getBrowserTimestamp = function(){
        if (!Date.now) {
           return Date.now = function() { 
               return new Date().getTime(); 
           };
        }
        return Math.floor(Date.now() / 1000);
    };
    
    var queryString = function(){
        return (document.referrer);
    };
    
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
    
    var scriptsCount = function(){
        return (document.getElementsByTagName("SCRIPT").length);
    };
    
    var imageCount = function (){
        return (document.getElementsByTagName('IMG').length);
    };
    
    var wordCount = function(){
        return (document.body.innerHTML.length);
    };
    
    // check to see if function is being passed, then check to see if page in loaded if not set event handler
   function ready (fn) {
      if (typeof fn !== 'function') {
         return;
      }
      if (document.readyState === 'complete') {
         return fn();
      }
      document.addEventListener('DOMContentLoaded', fn, false);
   };
   
   // fire function with all parameters
   ready( 
       postStaticData.bind(null, getBrowserTimestamp(), queryString(), checkCookies(), getUserAgent(), tabStateOnLoad(), scriptsCount(), imageCount(), wordCount(), url())
       );
})();