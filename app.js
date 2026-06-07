const express = require("express");

const app = express();

app.get("/", (req, res) => {
    // res.send("Node.js Application - Version 1.0");
    res.send("Node.js Application - Version 2.0");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});