const express = require("express");
const router = express.Router();

router.route("/").get((req,res) => {
    res.status(200).send("This is home directory using router");
});

router.route("/about").get((req,res) => {
    res.status(200).send("This is our about us page");
});

router.route("/contact").get((req,res) => {
    res.status(200).send("This is our contact us page");
});

router.route("/products").get((req,res) => {
    res.status(200).send("This is our products page");
});

module.exports = router;
