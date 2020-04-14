const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // lets us grab form data from html site. 

// Addition calculator
app.get('/', function(req, res){
    res.sendFile(__dirname.concat('/index.html'));
});
app.post("/", function(req, res){
    var num1  = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send('the result of '+num1+ ' plus ' +num2+ ' is ' +result);
    //res.sendFile(__dirname+'/success.html');
    
    
})


// BMI calculator
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmicalculator.html");
})

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight/(height*height);

    res.send("your bmi is "+bmi);
})

app.listen(3000, function(){
    console.log('server started on port 3000');
})