const bodyParser = require("body-parser"); 
const cors = require('cors')
const express = require('express');  
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');


const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


let cn = new MongoClient("mongodb+srv://sameer:sameer@cluster0.tjjip.mongodb.net/NamePass?retryWrites=true&w=majority")

cn.connect()
const db = cn.db("NamePass")
const User = db.collection("NamePass")

app.post("/login", async (req, res)=> {
    const { username, password} = req.body
    console.log(req.body);
    let result = await User.findOne({username:req.body.username})
    if(result){
      if(req.body.password === result.password ) {
                res.send({message: "Login Successfull", user: result.username })
            } else {
                res.send({ message: "Password didn't match"})
            }
    }
    else{
      res.send({message: "User not found :( "})
    }
      
}) 


const port = process.env.PORT || 5000; 
app.listen(5000, () => console.log("Server up and running !"));

