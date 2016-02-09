module.exports = function(req, res,next){
    //Check if origin header is present in incoming request
    // and match it with a list of allowed domains.
    var origin = req.header('Origin');
    if(origin){
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Content-Type");
       res.header("Access-Control-Allow-Methods", "HEAD, GET, POST, PUT, DELETE, OPTIONS");
    }
    if ('OPTIONS' == req.method) return res.send(200);
       next();
}