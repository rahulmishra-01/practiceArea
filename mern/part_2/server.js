//In this part_2 i learn router 
//Router provide us clean structure way of routing
//for routing we have to make a folder call router 
//and make a file auth_router.js 
//then require express and make a variable call router using express.Router()
//now we can use router.get("/") method but
//we use router.route("/").get() this is better way to define routes
//because now we can use "GET", "POST", "PUT" on same route 
//like router.route("/").get().post.put()....

const express = require("express");
const app = express();
const PORT = 5000;
const router = require("./router/auth_router")

app.use("/api/auth",router);

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});