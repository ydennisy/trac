{"changed":true,"filter":false,"title":"index.js","tooltip":"/app/routes/index.js","value":"\"use strict\";\n\nvar ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');\n\nmodule.exports = function (app, db) {\n\n    var qs = require(\"querystring\");\n    var _ = require(\"underscore\");\n    var fs = require(\"fs\");\n\n    var clickHandler = new ClickHandler(db);\n\n    app.route(\"/\")\n        .get(function(req, res){\n            res.sendFile(process.cwd() + \"/public/index.html\");\n        });\n        \n    app.route('/file')\n        .post(function(req, res) {\n            var logger = require('express-logger');\n            app.use(logger({path: \"/path/to/logfile.txt\"}));\n        })\n        \n    app.route(\"/script\")\n        .get(function(req, res){\n            res.send(\"<script type='text/javascript' src='/script/trac.js'></script>\");\n        });\n\n    app.route(\"/api\")\n        .post(function(req, res){\n            var str = req.url.split(\"?\")[1];\n            console.log(str);\n            var parsedQuery = qs.parse(str);\n            console.log(\"trying to parse....\"+ parsedQuery.advid);\n\n            var dataToInsert = {};\n            _.extend(dataToInsert, req.body, str);\n\n            db.collection(\"imps\").insert(dataToInsert, function (err){\n                if (err) { throw err }\n            });\n            console.log(dataToInsert);\n            res.end();\n        })\n        .get(function(req, res){\n            console.log(\"getting data\");\n            db.collection(\"imps\").find({}).toArray(function(err, result){\n                if (err) throw err;\n                res.send(result);\n            });\n        });\n\n    app.route(\"/api/count\")\n        .get(clickHandler.getCount);\n        \n    \n};","undoManager":{"mark":10,"position":100,"stack":[[{"start":{"row":20,"column":58},"end":{"row":20,"column":59},"action":"insert","lines":["h"],"id":59}],[{"start":{"row":20,"column":59},"end":{"row":20,"column":60},"action":"insert","lines":["t"],"id":60}],[{"start":{"row":20,"column":60},"end":{"row":20,"column":61},"action":"insert","lines":["t"],"id":61}],[{"start":{"row":20,"column":61},"end":{"row":20,"column":62},"action":"insert","lines":["p"],"id":62}],[{"start":{"row":20,"column":62},"end":{"row":20,"column":63},"action":"insert","lines":[":"],"id":63}],[{"start":{"row":20,"column":63},"end":{"row":20,"column":64},"action":"insert","lines":["/"],"id":64}],[{"start":{"row":20,"column":64},"end":{"row":20,"column":65},"action":"insert","lines":["/"],"id":65}],[{"start":{"row":20,"column":58},"end":{"row":20,"column":82},"action":"remove","lines":["http://\"+req.hostname+\"/"],"id":66}],[{"start":{"row":20,"column":57},"end":{"row":20,"column":58},"action":"remove","lines":["'"],"id":67}],[{"start":{"row":20,"column":57},"end":{"row":20,"column":58},"action":"insert","lines":["'"],"id":68}],[{"start":{"row":20,"column":58},"end":{"row":20,"column":59},"action":"insert","lines":["/"],"id":69}],[{"start":{"row":50,"column":36},"end":{"row":51,"column":0},"action":"insert","lines":["",""],"id":70},{"start":{"row":51,"column":0},"end":{"row":51,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":51,"column":8},"end":{"row":52,"column":0},"action":"insert","lines":["",""],"id":71},{"start":{"row":52,"column":0},"end":{"row":52,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":52,"column":4},"end":{"row":52,"column":8},"action":"remove","lines":["    "],"id":72}],[{"start":{"row":16,"column":8},"end":{"row":17,"column":0},"action":"remove","lines":["",""],"id":73}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":8},"action":"remove","lines":["    "],"id":74}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"remove","lines":["    "],"id":75}],[{"start":{"row":15,"column":8},"end":{"row":16,"column":0},"action":"remove","lines":["",""],"id":76}],[{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"insert","lines":[";"],"id":77}],[{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"remove","lines":[";"],"id":78}],[{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"insert","lines":[","],"id":79}],[{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"remove","lines":[","],"id":80}],[{"start":{"row":22,"column":33},"end":{"row":23,"column":0},"action":"remove","lines":["",""],"id":81}],[{"start":{"row":36,"column":10},"end":{"row":37,"column":0},"action":"remove","lines":["",""],"id":82}],[{"start":{"row":14,"column":11},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":83},{"start":{"row":15,"column":0},"end":{"row":15,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":15,"column":8},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":84},{"start":{"row":16,"column":0},"end":{"row":16,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":8},"action":"remove","lines":["    "],"id":85}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["A"],"id":86}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["p"],"id":87}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"remove","lines":["p"],"id":88}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"remove","lines":["A"],"id":89}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":5},"action":"insert","lines":["a"],"id":90}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["p"],"id":91}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["p"],"id":92}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["."],"id":93}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["r"],"id":94}],[{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":["o"],"id":95}],[{"start":{"row":16,"column":10},"end":{"row":16,"column":11},"action":"insert","lines":["i"],"id":96}],[{"start":{"row":16,"column":10},"end":{"row":16,"column":11},"action":"remove","lines":["i"],"id":97}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":10},"action":"remove","lines":["ro"],"id":98},{"start":{"row":16,"column":8},"end":{"row":16,"column":15},"action":"insert","lines":["route()"]}],[{"start":{"row":16,"column":14},"end":{"row":16,"column":16},"action":"insert","lines":["''"],"id":99}],[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"insert","lines":["/"],"id":100}],[{"start":{"row":16,"column":16},"end":{"row":16,"column":17},"action":"insert","lines":["f"],"id":101}],[{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"insert","lines":["i"],"id":102}],[{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"insert","lines":["l"],"id":103}],[{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"insert","lines":["e"],"id":104}],[{"start":{"row":16,"column":22},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":105},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":8},"action":"insert","lines":["    "],"id":106}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["."],"id":107}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["p"],"id":108}],[{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["o"],"id":109}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["s"],"id":110}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["t"],"id":111}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":15},"action":"insert","lines":["()"],"id":112}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["f"],"id":113}],[{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["u"],"id":114}],[{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":["n"],"id":115}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":17},"action":"remove","lines":["fun"],"id":116},{"start":{"row":17,"column":14},"end":{"row":19,"column":9},"action":"insert","lines":["function(req, res) {","            ","        }"]}],[{"start":{"row":7,"column":34},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":117},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["v"],"id":118}],[{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["a"],"id":119}],[{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["r"],"id":120}],[{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"insert","lines":[" "],"id":121}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["f"],"id":122}],[{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["s"],"id":123}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":[" "],"id":124}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["-"],"id":125}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":[" "],"id":126}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"remove","lines":[" "],"id":127}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"remove","lines":["-"],"id":128}],[{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["="],"id":129}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":[" "],"id":130}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["r"],"id":131}],[{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["e"],"id":132}],[{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["q"],"id":133}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["u"],"id":134}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":17},"action":"remove","lines":["requ"],"id":135},{"start":{"row":8,"column":13},"end":{"row":8,"column":24},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["f"],"id":136}],[{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["s"],"id":137}],[{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"insert","lines":[";"],"id":138}],[{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"insert","lines":["f"],"id":139}],[{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"remove","lines":["f"],"id":140}],[{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"insert","lines":["f"],"id":141}],[{"start":{"row":19,"column":13},"end":{"row":19,"column":14},"action":"insert","lines":["i"],"id":142}],[{"start":{"row":19,"column":14},"end":{"row":19,"column":15},"action":"insert","lines":["l"],"id":143}],[{"start":{"row":19,"column":15},"end":{"row":19,"column":16},"action":"insert","lines":["e"],"id":144}],[{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"insert","lines":["s"],"id":145}],[{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"remove","lines":["s"],"id":146}],[{"start":{"row":19,"column":12},"end":{"row":19,"column":16},"action":"remove","lines":["file"],"id":147},{"start":{"row":19,"column":12},"end":{"row":20,"column":51},"action":"insert","lines":["var logger = require('express-logger');","server.use(logger({path: \"/path/to/logfile.txt\"}));"]}],[{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "],"id":148}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":8},"action":"insert","lines":["    "],"id":149}],[{"start":{"row":20,"column":8},"end":{"row":20,"column":12},"action":"insert","lines":["    "],"id":150}],[{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"remove","lines":["r"],"id":151}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"remove","lines":["e"],"id":152}],[{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"remove","lines":["v"],"id":153}],[{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"remove","lines":["r"],"id":154}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"remove","lines":["e"],"id":155}],[{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"remove","lines":["s"],"id":156}],[{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["a"],"id":157}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["p"],"id":158}],[{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["p"],"id":159}],[{"start":{"row":33,"column":18},"end":{"row":33,"column":19},"action":"insert","lines":["d"],"id":166}],[{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"insert","lines":["s"],"id":165}],[{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["i"],"id":164}],[{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["n"],"id":163}],[{"start":{"row":33,"column":14},"end":{"row":33,"column":15},"action":"insert","lines":["n"],"id":162}],[{"start":{"row":33,"column":13},"end":{"row":33,"column":14},"action":"insert","lines":["e"],"id":161}],[{"start":{"row":33,"column":12},"end":{"row":33,"column":66},"action":"remove","lines":["console.log(\"trying to parse....\"+ parsedQuery.advid);"],"id":160},{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"insert","lines":["d"]}]]},"ace":{"folds":[],"scrolltop":37.33335876464844,"scrollleft":0,"selection":{"start":{"row":24,"column":32},"end":{"row":24,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1454502037000}