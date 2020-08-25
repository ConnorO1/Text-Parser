
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, function() {
  console.log("Server started sucessfully");
});

app.use(bodyParser.urlencoded({
  extended: true
}));

function stringClean(string) {
  return string.replace('<*>', '');
}


app.get("/", function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.post("/", function(req, res){
  const text = req.body.textInput;
  res.send(stringClean(text));
})
