"use strict";

var express = require("express");
var http = require('http');
var url = require('url');
var bodyParser = require("body-parser");
var mongo = require("mongodb").MongoClient;
var route = require("./app/routes/index.js");
var app = express();

mongo.connect("mongodb://localhost:27017/trac", function (err, db){
    if (err) {throw new Error("Connection to db failed"); }
    else {console.log("mongoDB connected successfully on port 27017"); }
    
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());
    app.use("/public", express.static(process.cwd() + "/public"));
    app.use("/client", express.static(process.cwd() + "/client"));
    app.use("/script", express.static(process.cwd() + "/script"));
    app.use(bodyParser.json());
    
    route(app, db);
    
    app.listen(8080, function(){
        console.log("TRAC server listening on port 8080");
    });

});