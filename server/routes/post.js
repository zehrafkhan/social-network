//Server/routes/post.js
import express from "express";
import mongoose from "mongoose";
import { requireLogin } from "../milddleware/requireLogin.js";
import "../models/post.js";

const routerPost = express.Router();
const Post = mongoose.model("Post");

routerPost.post('/createpost',requireLogin,(req,res)=>{
   const {title,body,pic} = req.body;
   console.log(title,body,pic);
   if(!title || !body || !pic){
    return res.status(422).json({error:"Please add all fields"});
   }
   const post = new Post({
    title,
    body,
    photo:pic,
    postedBy:req.payload._id
   })
   post.save().then(result=>{
    res.json({post:result})
   })
   .catch(err=>{
    console.log(err)
   })
})

routerPost.get("/allpost",requireLogin,(req,res)=>{
   Post.find()
   .populate([{ path: "postedBy", strictPopulate: false }])
   .populate("postedBy","_id name")
   .then(posts=>{
      res.json({posts})
   })
   .catch(err=>{
      console.log(err)
     })
})

routerPost.get('/mypost',requireLogin,(req,res)=>{
   Post.find({postedBy:req.payload._id})
   .populate([{ path: "postedBy", strictPopulate: false }])
   .populate("postedBy","_id name")
   .then(mypost=>{
      res.json({mypost})
   })
   .catch(err=>{
      console.log(err)
     })
})

export default routerPost;