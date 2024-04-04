const express = require("express");
const app = express();
const port = 8088;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username : "John Doe",
        content :"Abhi Khela hobe!!",
    },
    {
        username : "Alpha Cyrus",
        content :"Abhi Khela hobe na",
    },
    {
        username : "Romeo walter",
        content :"Abhi amake khele k mann noi korichhin",
    },
]

app.get("/posts", (req, res) => {
    // res.send("Posts:");
    res.render("index.ejs", {posts});
});                 //first API ever created ....but not working somehow.....Now it is working as I made a silly mistake by not following the proper naming conversion//

app.get("/posts/new",(req, res)=>{
    res.render("new.ejs");
});

app.post("/posts", ( req,res) =>{
    let {username,content} = req.body;              //getting data from user inputs to show in body
    posts.push({username,content});               //pushing data in the active screen
    console.log(req.body);
    // res.send("post request working");               //now redirecting the same to  home page after submitting form
    res.redirect("/posts");                       //after submitting form it will redirect on this page
});

app.listen(port, () =>{
    console.log(`listening the port :${port}`);
});

//get method