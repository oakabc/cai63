const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    //console.log(__dirname);
   res.status(200).sendFile(__dirname+"/index.html");
});

app.get('/error', (req, res) => {
    res.status(500).send('This is error page.');
 });

 
 app.get("/test-1", (req, res) => {
    res.status(200).send({ "status": "success" })
})

app.get("/test-2", (req, res) => {
    res.status(401).send({ "authorizationResult": "Access Denied" })
})

app.post("/", (req, res)=>{
    console.log(req.body.n1);
    console.log(req.body.n2);

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;

    res.send("ผลลัพธ์จากการคำนวณคือ " + result);
});

app.get("/bmiCalculator", (req, res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res)=>{
    var weight = req.body.weight;
    var height = req.body.height;
    var BMI = weight/(height*height);

    var type = ""; 
    if (BMI > 30) type = "อ้วนมาก";
    else if (BMI >= 25) type = "อ้วน";
    else if (BMI >= 23) type = "น้ำหนักเกิน";
    else if (BMI >= 18.6) type = "น้ำหนักปกติ เหมาะสม";
    else type = "ผอมเกินไป";

    res.send("คุณมีค่า BMI = " + BMI + " คุณอยู่ในประเภท = " + type);

});

const students = [
    { name: 'sonter', age: 19 },
    { name: 'nat', age: 30 },
    { name: 'tle', age: 14 },
    {name: 'oak', age: 18}
  ];

  app.get ("/student/:id", (req,res) =>{
    console.log(req.params.id);
    if (req.params.id == 0) res.send(students[0]);
    else if (req.params.id == 1) res.send(students[1]);
    else if (req.params.id == 2) res.send(students[2]);
    else if (req.params.id == 3) res.send(students[3]);
    else  res.status(404).send({ message: 'User not found' });


  });
  





// app.use((req, res) => {
//     res.type('text/plain');
//     res.status(404);
//     res.send('404 - Not Found คุณเข้าในเส้นทางที่ไม่ได้ระบุเอาไว้ !');
// });

app.listen(3000, () => {
    console.log("เซอเวอร์เปิดแล้ว ณ พอร์ท 3000");
});