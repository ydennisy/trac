"use strict";

module.exports = function (app, db) {
    
    app.route("/")
        .get(function(req, res){
            res.sendFile(process.cwd() + "/public/index.html");
        });
        
    app.route("/script")
        .get(function(req, res){
            res.send("<script type='text/javascript' src='https://trac-server-ydennisy-1.c9users.io/script/trac.js'></script>");
        });
    
    app.route("/api")
        .post(function(req, res){
            console.log(req.url);
            console.log(req.body);
            db.collection("seconds").insert(req.body, function (err){
                if (err) { throw err }
            });
            res.end();
        })
        
        .get(function(req, res){
            console.log("getting data");
            db.collection("seconds").find({}).toArray(function(err, result){
                if (err) throw err;
                res.send(result);
            });
        });
};