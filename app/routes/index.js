"use strict";

var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function (app, db) {

    var qs = require("querystring");
    var _ = require("underscore");

    var clickHandler = new ClickHandler(db);

    app.route("/")
        .get(function(req, res){
            res.sendFile(process.cwd() + "/public/index.html");
        });
        
        

    app.route("/script")
        .get(function(req, res){
            res.send("<script type='text/javascript' src='/script/trac.js'></script>");
        });

    app.route("/api")
        .post(function(req, res){

            var str = req.url.split("?")[1];
            console.log(str);
            var parsedQuery = qs.parse(str);
            console.log("trying to parse...."+ parsedQuery.advid);

            var dataToInsert = {};
            _.extend(dataToInsert, req.body, str);

            db.collection("imps").insert(dataToInsert, function (err){
                if (err) { throw err }
            });
            console.log(dataToInsert);
            res.end();
        })

        .get(function(req, res){
            console.log("getting data");
            db.collection("imps").find({}).toArray(function(err, result){
                if (err) throw err;
                res.send(result);
            });
        });

    app.route("/api/count")
        .get(clickHandler.getCount);
};