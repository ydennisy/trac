"use strict";

(function (){
    var countApiUrl = "api/count";
    var oneResultUrl = 'api/result';
    var countSpan = document.getElementById("count-nbr");
    var getCountButton = document.getElementById("getCount");
    var dataSpan = document.getElementById('data-span');
    var oneResultButton = document.getElementById('get-one-result');

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
    
    function getOneResult (data){
        var oneResult = JSON.stringify(data, null, '\t');
        dataSpan.innerHTML = ' ';
        dataSpan.innerHTML = oneResult;
    }
    
    ready(ajaxRequest("GET", countApiUrl, updateCount));
    
    getCountButton.addEventListener("click", function(){
        ajaxRequest("GET", countApiUrl, updateCount);
    });
    
    oneResultButton.addEventListener('click', function(){
        ajaxRequest('GET', oneResultUrl, getOneResult);
    });
    
})();