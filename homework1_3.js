const express = require("express");
const app = express();
const fs = require("fs");


app.get("/read-users", (req, res)=>{

    fs.readFile("users.json", "utf8", (err, data) => {
        res.send(data);
    });
});

app.listen(3000, ()=> {
    console.log("Server started");
});