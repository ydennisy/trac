"use strict";

var express = require("express");
var http = require('http');
var url = require('url');
var bodyParser = require("body-parser");
var mongo = require("mongodb").MongoClient;
var routes = require("./app/routes/index.js");

var app = express();

mongo.connect("mongodb://localhost:27017/trac", function (err, db){
    if (err) {throw new Error("Connection to db failed"); }
    else { console.log("mongoDB connected successfully on port 27017"); }
    
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());


    app.post("/api", function(req, res){
        if (err) throw new Error;
        console.log(req.url);
        console.log(req.body);
        db.collection("seconds").insert(req.body, function (err){
            if (err) { throw err };
        });
    });
    
    app.get("/", function(req, res){
        if (err) throw new Error;
        res.sendFile(process.cwd() + "/public/index.html");
    });
    
    app.get("/api/ui", function(req, res){
        if (err) throw new Error;
        db.collection("seconds").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
    
    app.use("/public", express.static(process.cwd() + "/public"));
    app.use("/client", express.static(process.cwd() + "/client"));
    app.use(bodyParser.json());
    
    app.listen(8080, function(){
        console.log("TRAC server listening on port 8080");
    });

});