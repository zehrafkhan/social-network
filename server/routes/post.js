import express from "express";
import mongoose from "mongoose";
import { requireLogin } from "../milddleware/requireLogin";
import "../models/post.js";

const router = express.Router();
const Post = mongoose.model("Post");

router.post('/createpost',requireLogin,(req,res)=>{
 const {title,body} = req.body;
 if(!title || !body){
    res.status(422).json({error: "please add all details"});
 }

 const post =new post({
    title:title,
    body:body,
    postedBy:req.user
 })
 post.save().then(result=>{
    res.json({post:result})
 })
 .catch(err=>{
    console.log(err)
 })
})

router.get('/allpost',requireLogin,(req,res)=>{
Post.find()
.populate("posted","_id name")
.then(posts=>{
res.json({posts})
})
.catch(err=>{
    console.log(err)
 })
})
router.get("/mypost",requireLogin,(req,res)=>{
    Post.find({postedBy:req.user_id})
    .then(mypost=>{
        req.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})