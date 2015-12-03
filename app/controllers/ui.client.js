"use strict";

(function (){
    var countApiUrl = "http://ec2-54-76-141-248.eu-west-1.compute.amazonaws.com/api/count";
    var countSpan = document.getElementById("count-nbr");
    var getCountButton = document.getElementById("getCount");

    function ready (fn) {
        if (typeof fn !== "function"){
            return;
        }
        if (document.readyState === "complete"){
            return fn();
        }
        document.addEventListener("DOMContentLoaded", fn, false);
    }
    
    function ajaxRequest (method, url, callback){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
                callback(xmlhttp.response);
            }
        };
        xmlhttp.open(method, url, true);
        xmlhttp.send();
    }
    
    function updateCount (data){
        var impsCount = JSON.parse(data);
        countSpan.innerHTML = impsCount;
    }
    
    ready(ajaxRequest("GET", countApiUrl, updateCount));
    
    getCountButton.addEventListener("click", function(){
        ajaxRequest("GET", countApiUrl, updateCount);
    })
})();