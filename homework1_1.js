const express = require("express");
const app = express();

const fs = require("fs");

let temp = "";

fs.readFile("head.txt", "utf8", (err, data) => {
    if (!err) console.log(data);
    temp += data+ "\n"; 
    fs.readFile("body.txt", "utf8", (err, data) => {
        if (!err) console.log(data);
        temp += data + "\n"; 
        fs.readFile("leg.txt", "utf8", (err, data) => {
            if (!err) console.log(data);
            temp += data+ "\n"; 
            fs.readFile("feet.txt", "utf8", (err, data) => {
                if (!err) console.log(data);
                temp += data+ "\n"; 
                fs.writeFile("robot.txt", temp, "utf8", (err)=>{
                    if (!err) console.log("write file success");
                });
            });
        });
    });
});

app.listen(3000, ()=> {
    console.log("server started");
});