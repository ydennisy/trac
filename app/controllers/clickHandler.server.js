"use strict";

function clickHandler (db) {

    var imps = db.collection("imps");

    // method to return the number of records in the collection "imps"
    this.getCount = function (req, res){
        imps.count({}, function(err, result){
            if (err) {
                throw err;
            }
            res.json(result);
        });
    };
    
    this.getResult = function (req, res){
        imps.findOne({}, function(err, result){
            if (err) {
                throw err;
            }
            res.json(result);
        });
    };


}

module.exports = clickHandler;
