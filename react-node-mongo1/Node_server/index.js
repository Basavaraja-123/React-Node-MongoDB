 // Node Express web server framework .                                             npm init -y
const express = require('express');   //  we need to install express js .     npm install express
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');             // ofter installing  mongoose , we need to import  

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('Connected to MongoDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({

    // image: File,
    name: String,
    email: String,
    phoneNumber: String,
    password: String,
    newPassword: String
 // it is filter the data and modify the data
    // Schema is a template With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens.
  });

  const User = mongoose.model('User', userSchema);   //A model is a class with which we construct documents. In this case, each document will be a user with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:
// user is variable but it is work like a class. model is created User

const server = express();              // it  will create a  instance in server 

server.use(cors());                      // when we .use it is like middleware.
server.use(bodyParser.json());  

server.post("/demo", async(req,res)=>{         // request  is function then  we will get response . request means when will get data from front end so we will get through it. response mense to send back to front end  

    let user = new User();                     // to save user details in database. it is creating new object. using this object name we can modify user data
user.image = req.body.profilePicture;               
user.name = req.body.name;               
// user.name is defainung it is username.  req.body.name is comming request from front end.    
user.email = req.body.email; 
user.phoneNumber = req.body.phoneNumber; 
user.password = req.body.password; 
user.newPassword = req.body.newPassword; 

 const doc = await user.save();        // to save in mongo db  . doc means we tell document in mondo db for data  

    console.log(doc)  // sending data to db
    res.json(doc); 
})  

server.get("/demo", async(req,res)=>{
  const docs= await User.find({})
  res.json(docs);
})


server.listen(3030,()=>{                    
    // listen is  listener  ever running command . 8080 is port number it will open virtual port in our computer  ,
    // our server will run on port 5000, if get requst it will listening on port 8080
    console.log('Server started on port 3030');    // server is ever running prosess
})