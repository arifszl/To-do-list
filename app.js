const express=require("express");

//FOR TAKING DATA FROM HTML(Eg.--taking name from from)
const bodyParser=require("body-parser");
var items=[];
const app=express();

app.use(express.static("public"));
//to use bodyParser we have to use it

app.use(bodyParser.urlencoded({extended:true}));

//setting ejs to use
app.set("view engine","ejs"); 

app.get("/",function(req,res){
   var today=new Date();
     var options={
        weekday:"long",
        day:"numeric",
        month:"long"

    };
    var day=today.toLocaleDateString("en-US",options);

//to serve html page and sending values to html page using key pair
   res.render("index",{kindofday:day,newListItems:items});
})

//to serving post request
app.post("/",function(req,res){
    //taking newItem data from the body
    var item=req.body.newItem;
    items.push(item);

    //redirect to app.get
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("listening at 3000");
})