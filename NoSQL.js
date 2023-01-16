const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://chanakarn:12345678Oak@cluster0.ueqgbuk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// Check DB connection
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  if (err) console.log(err);
  else console.log("Database Connect Successfully!");
  client.close();
});

// Create DB and Collection
MongoClient.connect(uri, (err, db)=>{
    var dbo = db.db("Employees"); // Create Database
    // dbo.createCollection("Profile", (err, res)=>{ // Create Table 
    //     if (err) console.log(err);
    //     else console.log("create successfully");
    //     db.close();
    // });

    // Insert One Data
    // var myObj = {name:"Chanakarn", id: "624", hobby : "travel", study : "PIM"}; // Data to be inserted
    // dbo.collection("Profile").insertOne(myObj, (err, res)=>{
    //     if (err) console.log(err);
    //     if (res) console.log ("insert data successfully");
    // });
    // Insert Many Data
    // var myObjArr = [
    //     {name:"Hayate", position:"Carry"}, 
    //     {name:"Thane", position: "Tank"},
    //     {id:555, address:"Thailand"}
    // ];
    // dbo.collection("Profile").insertMany(myObjArr, (err, res)=>{
    //     if (err) console.log(err);
    //     if (res) console.log("Insert Many Successfully!");
    // });

    // Query One (Find One)

    dbo.collection("Profile").findOne({}, (err, res) => { // select * from profile limit 1
        console.log("Result from Find One is : ");
        console.log(res);
        console.log(res["hobby"]);
    });

    // Find Many 
    dbo.collection("Profile").find({}).toArray((err, res) => { // select * from profile
        console.log("Result from Find Many");
        console.log(res);
    }); 
    // Find with condition 
    var condition = {name: "Chanakarn"};
    dbo.collection("Profile").find(condition).toArray((err, res) => {
        console.log("Result from Condition:");
        console.log(res);
    });
});