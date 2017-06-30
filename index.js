var express = require("express");
var u = require("url");
var moment = require("moment");
var app = express();

app.use(express.static(__dirname));

 /* serves main page */
 app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
 });


/* serves all api requests */
app.get("/:timestamp", function(req, res) {
    var timestamp = moment(req.params.timestamp, 'MMMM DD, YYYY', true);
    var content;
    // if timestamp is not human readable check if it's in the unix format
    if (!timestamp.isValid()){
        timestamp = moment.unix(req.params.timestamp);
    }

    if (!timestamp.isValid()){
        content = {unix: null, natural: null};
    } else{
        content = {unix: timestamp.format("X"),natural: timestamp.format("MMMM DD, YYYY")};
    }

    res.json(content);
 });


var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });