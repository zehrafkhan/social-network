import express from "express";
import mongoose from "mongoose";
import { requireLogin } from "../milddleware/requireLogin.js";
import "../models/post.js";

const routerPost = express.Router();
const Post = mongoose.model("Post");

routerPost.post('/createpost',requireLogin,(req,res)=>{
 const {title,body,pic} = req.body;
 if(!title || !body || !pic){
    res.status(422).json({error: "please add all details"});
 }

 const post =new post({
    title:title,
    body:body,
    photo:pic,
    postedBy:req.user
 })
 post.save().then(result=>{
    res.json({post:result})
 })
 .catch(err=>{
    console.log(err)
 })
})

routerPost.get('/allpost',requireLogin,(req,res)=>{
Post.find()
.populate("posted","_id name")
.then(posts=>{
res.json({posts})
})
.catch(err=>{
    console.log(err)
 })
})
routerPost.get("/mypost",requireLogin,(req,res)=>{
    Post.find({postedBy:req.user_id})
    .then(mypost=>{
        req.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})
export default routerPost;
