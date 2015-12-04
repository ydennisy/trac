"use strict";

var express = require("express");
var http = require('http');
var url = require('url');
var morgan   = require('morgan');
var qs = require("querystring");
var mongo = require("mongodb").MongoClient;
var route = require("./app/routes/index.js");
var app = express();
var bodyParser = require("body-parser");

mongo.connect("mongodb://localhost:27017/trac", function (err, db){
    if (err) {throw new Error("Connection to db failed"); }
    else {console.log("mongoDB connected successfully on port 27017"); }

    app.use(bodyParser());
    app.use("/public", express.static(process.cwd() + "/public"));
    app.use("/script", express.static(process.cwd() + "/script"));
    app.use("/app", express.static(process.cwd() + "/app"));
    app.use(morgan('dev')); // log every request to the console

    route(app, db);

    app.listen(3000, function(){
        console.log("TRAC server listening on port 3000"+ process.cwd());
    });

});