"use strict";

var express = require("express");
var http = require('http');
var url = require('url');
var qs = require("querystring");
var mongo = require("mongodb").MongoClient;
var route = require("./app/routes/index.js");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");

mongo.connect("mongodb://localhost:27017/trac", function (err, db){
    if (err) {throw new Error("Connection to db failed"); }
    else {console.log("mongoDB connected successfully on port 27017"); }

    app.use(morgan('dev'));
    app.use(bodyParser());
    app.use(require("./app/controllers/cors-filter.js"));
    app.use("/public", express.static(process.cwd() + "/public"));
    app.use("/script", express.static(process.cwd() + "/script"));
    app.use("/app", express.static(process.cwd() + "/app"));
    route(app, db);

    app.listen(80, function(){
        console.log("TRAC server listening on port: " + 80 + " cwd: " + process.cwd());
    });
});