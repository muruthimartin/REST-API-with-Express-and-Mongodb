const express = require('express');
const { updateOne } = require('../models/Posts');
const router = express.Router();


//create a post in the DB. First import the Post model
const Post = require('../models/Posts');

//get all the posts
router.get("/", async (req, res)=>{
   try {
       const posts = await Post.find();
       res.json(posts)

   } catch (error) {
       res.json({message:error})
   } 
});


//get a specific post
router.get("/:postId", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
})

//inserts a new post into the database
router.post("/",async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }

});
//delete a post
router.delete("/:postId", async (req,res)=>{
    try {
        const removedPost = await Post.remove({ _id: req.params.postId});
        res.json(removedPost);
    } catch (error) {
        res.json({message: error});
    }
});
//update a post(Patch)
router.patch("/:postId", async (req,res)=>{
    try {
        const updatedPost = await  Post.updateOne({_id: req.params.postId}, 
            {$set: { title: req.body.title } });
        res.json(updatedPost);
        
    } catch (err) {
       res.json({message: err});
    }
   
});

module.exports = router;