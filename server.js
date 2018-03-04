const express = require("express");
const app = express();
const path = require("path");
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(19000, function(){
    console.log("Server is Started!");
});