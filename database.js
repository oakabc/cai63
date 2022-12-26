const express = require("express");
const app = express();

// jdbc:mysql://127.0.0.1:3306/?user=root
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root', 
    password:'12345678',
    database:'bookstore',
    port: 3306
});
connection.connect();

// Query-0
connection.query("select bname from books where bname like '%mar%'", (err, rows, fields)=>{
    if (!err) console.log(rows);
    rows.forEach(row => {
        console.log(row.bname);
    })
});

// Query-1
connection.query("select bname, isbn from books where bname like '%o%' limit 2", (err, rows, fields)=>{
    if (!err) console.log(rows);
    rows.forEach(row => {
        console.log(row.bname + " " + row.isbn);
    })
});

// Query-2 
connection.query("select sum(amount) as total from sell_histories", (err, rows, fields)=>{
    if (!err) { 
        console.log(rows[0]["sum(amount)"]); 
        console.log(rows[0].total);
}
    // rows.forEach(row => {
    //     console.log(row.bname);
    // })
});

// Query-3 

connection.query("select distinct isbn from sell_histories", (err, rows, fields)=>{
    if (!err) { 
        console.log(rows);
}
    rows.forEach(row => {
        console.log(row.isbn);
    })

    for (var i = 0 ; i < rows.length ; i++) {
        console.log(rows[i].isbn);
    }
});

/// select sum( amount*price ) as sell_total from sell_histories
// Query - 4
connection.query("select sum( amount*price ) as sell_total from sell_histories", (err, rows, fields)=>{
    if (!err) console.log(rows[0]["sell_total"]);
}
);

app.get("/query-1", (req, res)=>{
    connection.query("select bname, isbn from books where bname like '%o%' limit 2", (err, rows, fields)=>{
        if (err) console.log(err);
        console.log(rows);
        res.json(rows);
    });
});
app.get("/query-2", (req, res)=>{
    connection.query("select sum(amount) as total from sell_histories", (err, rows, fields)=>{
        if (err) console.log(err);
        console.log(rows);
        res.json(rows);
    });
});
app.get("/query-3", (req, res)=>{
    connection.query("select distinct isbn from sell_histories", (err, rows, fields)=>{
        if (err) console.log(err);
        console.log(rows);
        res.json(rows);
    });
});
app.get("/query-4", (req, res)=>{
    connection.query("select sum( amount*price ) as sell_total from sell_histories", (err, rows, fields)=>{
        if (err) console.log(err);
        console.log(rows);
        res.json(rows);
    });
});

app.listen(3000, ()=>{
    console.log("Server started");
});