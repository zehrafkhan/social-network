//server/routes/user.js

import express from "express";
import mongoose from "mongoose";
import { requireLogin } from "../milddleware/requireLogin.js";

const routerUser = express.Router();
const Post = mongoose.model("Post");
const User = mongoose.model("User");

routerUser.get("/user/:id", requireLogin, (req, res) => {
  User.findOne({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      Post.findOne({ _id: req.params.id })
        .populate("postedBy", "_id")
        .exec((err, posts) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.json({ user, posts });
        });
    })
    .catch((err) => {
      return res.status(404).json({ erorr: "User not found" });
    });
});

export default routerUser;
