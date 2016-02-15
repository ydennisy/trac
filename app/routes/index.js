"use strict";

var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function (app, db) {

    var _ = require("underscore");
    var fs = require("fs");
    var path = require("path");
    var wstream = fs.createWriteStream(process.cwd() + '/logs/log-file.txt');

    var clickHandler = new ClickHandler(db);
    
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.route("/")
        .get(function(req, res){
            res.sendFile(process.cwd() + "/public/index.html");
        });
        
    app.route("/script")
        .get(function(req, res){
            res.sendFile('/trac.js', {root: path.join(__dirname, '../../script')}, function(err){
                if (err) {
                    console.log(err);
                    res.status(err.status).end();
                } else {
                    console.log('sent JS script');
                }
            });
     });
     
    app.route("/script-test")
        .get(function(req, res){
            res.send('<script type="text/javascript" src="/script/trac.js"></script>');
    });

    app.route("/api")
        .post(function(req, res){
            // prep the incoming data
            var dataToInsert = {};
            _.extend(dataToInsert, req.body);
            
            //write data to mongodb
            db.collection("imps").insert(dataToInsert, function (err){
                if (err) { throw err }
            });

            // write data to a logfile
            wstream.write(JSON.stringify(dataToInsert));
            wstream.on('error', function (err) {
                console.error('valueStream.on error ' + err.message);
            });
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