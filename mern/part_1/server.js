//In this part_1 i learn express i made app variable using express and made some routes like
//home page("/"), register("/register"), about("/about"), contact("/contact")
//and created a live server using app.listen
//in app.listen there are two properties first one is port and second one is callback
//app.listen(PORT,() => {});
//and for route propertis like we have to assign route like home("/"), about("/about") and more
//after that a callback where we have two params "req" and "res"
//app.get("/",(req,res) => {});

const express = require("express");
const app = express();
const PORT = 5000;

app.get("/",(req,res) => {
    res.status(200).send("This is our home page directory");
});

app.get("/register",(req,res) => {
    res.status(200).send("This is our register page directory");
});

app.get("/about",(req,res) => {
    res.status(200).send("This is our about page directory");
});

app.get("/contact",(req,res) => {
    res.status(200).send("This is our contact us page");
});

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});
