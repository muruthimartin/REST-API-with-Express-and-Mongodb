const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());
//import Routes
const PostsRoute = require('./routes/posts');
app.use('/posts', PostsRoute);

app.get("/", (req,res)=>{
    res.send("We are home");
})

//connect database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser:true, useUnifiedTopology:true});
}

app.listen(3000, ()=>{
    console.log('Server running on port 3000');
})