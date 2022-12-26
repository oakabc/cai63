const express = require("express");
const app = express();

app.get("/about", (request, response)=> {
    response.send('<h1 style = "background-color:blue;">This is about page.</h1>');
});

app.get("/my-json-api3", (req,res)=>{
    res.json({"University":"PIM"});
});

app.get("/user2", (req, res)=>{
    res.json([
        {
          id: 1,
          firstname: 'Somchai',
          lastname: 'Jaidee',
        },
        {
          id: 2,
          firstname: 'Tony',
          lastname: 'Stark',
        },
     ]
     );
})

app.listen (3000, () => {
    console.log("server started");
});