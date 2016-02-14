{"changed":true,"filter":false,"title":"server.js","tooltip":"/server.js","value":"\"use strict\";\n\nvar express = require(\"express\");\nvar http = require('http');\nvar url = require('url');\nvar qs = require(\"querystring\");\nvar mongo = require(\"mongodb\").MongoClient;\n\nvar route = require(\"./app/routes/index.js\");\nvar app = express();\nvar bodyParser = require(\"body-parser\");\n\nmongo.connect(\"mongodb://localhost:27017/trac\", function (err, db){\n    if (err) {throw new Error(\"Connection to db failed\"); }\n    else {console.log(\"mongoDB connected successfully on port 27017\"); }\n\n    app.use(bodyParser());\n    app.use(require(\"./app/controllers/cors-filter.js\"));\n    app.use(\"/public\", express.static(process.cwd() + \"/public\"));\n    app.use(\"/script\", express.static(process.cwd() + \"/script\"));\n    app.use(\"/app\", express.static(process.cwd() + \"/app\"));\n    route(app, db);\n\n    app.listen(80, function(){\n        console.log(\"TRAC server listening on port: \" + 80 + \" cwd: \" + process.cwd());\n    });\n});","undoManager":{"mark":99,"position":100,"stack":[[{"start":{"row":25,"column":76},"end":{"row":25,"column":77},"action":"insert","lines":[":"],"id":402}],[{"start":{"row":25,"column":77},"end":{"row":25,"column":78},"action":"insert","lines":[" "],"id":403}],[{"start":{"row":25,"column":51},"end":{"row":25,"column":52},"action":"insert","lines":[" "],"id":404}],[{"start":{"row":25,"column":73},"end":{"row":25,"column":74},"action":"insert","lines":["+"],"id":405}],[{"start":{"row":25,"column":74},"end":{"row":25,"column":75},"action":"insert","lines":[" "],"id":406}],[{"start":{"row":25,"column":76},"end":{"row":25,"column":77},"action":"insert","lines":[" "],"id":407}],[{"start":{"row":12,"column":25},"end":{"row":12,"column":34},"action":"remove","lines":["localhost"],"id":408},{"start":{"row":12,"column":25},"end":{"row":12,"column":72},"action":"insert","lines":["ec2-52-18-3-176.eu-west-1.compute.amazonaws.com"]}],[{"start":{"row":12,"column":25},"end":{"row":12,"column":72},"action":"remove","lines":["ec2-52-18-3-176.eu-west-1.compute.amazonaws.com"],"id":409},{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"insert","lines":["l"]}],[{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":["o"],"id":410}],[{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":["c"],"id":411}],[{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":["a"],"id":412}],[{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"insert","lines":["l"],"id":413}],[{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":["h"],"id":414}],[{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"insert","lines":["o"],"id":415}],[{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"insert","lines":["s"],"id":416}],[{"start":{"row":12,"column":33},"end":{"row":12,"column":34},"action":"insert","lines":["t"],"id":417}],[{"start":{"row":24,"column":15},"end":{"row":24,"column":31},"action":"remove","lines":["process.env.PORT"],"id":418},{"start":{"row":24,"column":15},"end":{"row":24,"column":16},"action":"insert","lines":["8"]}],[{"start":{"row":24,"column":16},"end":{"row":24,"column":17},"action":"insert","lines":["0"],"id":419}],[{"start":{"row":24,"column":17},"end":{"row":24,"column":18},"action":"insert","lines":["8"],"id":420}],[{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"insert","lines":["0"],"id":421}],[{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"remove","lines":["0"],"id":422}],[{"start":{"row":24,"column":17},"end":{"row":24,"column":18},"action":"remove","lines":["8"],"id":423}],[{"start":{"row":16,"column":26},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":424},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["a"],"id":425}],[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["p"],"id":426}],[{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"insert","lines":["p"],"id":427}],[{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"insert","lines":["."],"id":428}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["u"],"id":429}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["s"],"id":430}],[{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["e"],"id":431}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["`"],"id":432}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["`"],"id":433}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"remove","lines":["`"],"id":434}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"remove","lines":["`"],"id":435}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":13},"action":"insert","lines":["()"],"id":436}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["r"],"id":437}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["e"],"id":438}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":14},"action":"remove","lines":["re"],"id":439},{"start":{"row":17,"column":12},"end":{"row":17,"column":23},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["c"],"id":440}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["o"],"id":441}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":["o"],"id":442}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"remove","lines":["c"],"id":443}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["."],"id":444}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["/"],"id":445}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["a"],"id":446}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["p"],"id":447}],[{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["p"],"id":448}],[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["/"],"id":449}],[{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":["c"],"id":450}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["o"],"id":451}],[{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["n"],"id":452}],[{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["t"],"id":453}],[{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["r"],"id":454}],[{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":["o"],"id":455}],[{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["l"],"id":456}],[{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["l"],"id":457}],[{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"insert","lines":["e"],"id":458}],[{"start":{"row":17,"column":36},"end":{"row":17,"column":37},"action":"insert","lines":["r"],"id":459}],[{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":["s"],"id":460}],[{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["/"],"id":461}],[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":["c"],"id":462}],[{"start":{"row":17,"column":40},"end":{"row":17,"column":41},"action":"insert","lines":["o"],"id":463}],[{"start":{"row":17,"column":41},"end":{"row":17,"column":42},"action":"insert","lines":["r"],"id":464}],[{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"insert","lines":["s"],"id":465}],[{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"insert","lines":["-"],"id":466}],[{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"insert","lines":["f"],"id":467}],[{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":["i"],"id":468}],[{"start":{"row":17,"column":46},"end":{"row":17,"column":47},"action":"insert","lines":["l"],"id":469}],[{"start":{"row":17,"column":47},"end":{"row":17,"column":48},"action":"insert","lines":["t"],"id":470}],[{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"insert","lines":["e"],"id":471}],[{"start":{"row":17,"column":49},"end":{"row":17,"column":50},"action":"insert","lines":["r"],"id":472}],[{"start":{"row":17,"column":50},"end":{"row":17,"column":51},"action":"insert","lines":["."],"id":473}],[{"start":{"row":17,"column":51},"end":{"row":17,"column":52},"action":"insert","lines":["j"],"id":474}],[{"start":{"row":17,"column":52},"end":{"row":17,"column":53},"action":"insert","lines":["s"],"id":475}],[{"start":{"row":17,"column":56},"end":{"row":17,"column":57},"action":"insert","lines":[";"],"id":476}],[{"start":{"row":10,"column":40},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":477}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"insert","lines":["v"],"id":478}],[{"start":{"row":11,"column":1},"end":{"row":11,"column":2},"action":"insert","lines":["a"],"id":479}],[{"start":{"row":11,"column":2},"end":{"row":11,"column":3},"action":"insert","lines":["r"],"id":480}],[{"start":{"row":11,"column":3},"end":{"row":11,"column":4},"action":"insert","lines":[" "],"id":481}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["c"],"id":482}],[{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"insert","lines":["o"],"id":483}],[{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"insert","lines":["r"],"id":484}],[{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"insert","lines":["s"],"id":485}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":[" "],"id":486}],[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["="],"id":487}],[{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":[" "],"id":488}],[{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["r"],"id":489}],[{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["e"],"id":490}],[{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["q"],"id":491}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["var cors = req",""],"id":492}],[{"start":{"row":10,"column":40},"end":{"row":11,"column":0},"action":"remove","lines":["",""],"id":493}],[{"start":{"row":10,"column":40},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":494}],[{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"remove","lines":["        console.log(process.env);",""],"id":495},{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"remove","lines":["",""],"id":496}],[{"start":{"row":26,"column":56},"end":{"row":26,"column":72},"action":"remove","lines":["process.env.PORT"],"id":497},{"start":{"row":26,"column":56},"end":{"row":26,"column":57},"action":"insert","lines":["8"]}],[{"start":{"row":26,"column":57},"end":{"row":26,"column":58},"action":"insert","lines":["0"],"id":498}],[{"start":{"row":21,"column":0},"end":{"row":22,"column":0},"action":"remove","lines":["    app.use(morgan('dev')); // log every request to the console",""],"id":499}],[{"start":{"row":20,"column":60},"end":{"row":21,"column":0},"action":"remove","lines":["",""],"id":500}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"remove","lines":["var morgan   = require('morgan');",""],"id":501}],[{"start":{"row":6,"column":43},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":502}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":0},"end":{"row":7,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1455474171938}