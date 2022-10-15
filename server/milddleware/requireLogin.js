import jwt from 'jsonwebtoken';
import { SecretValues } from "../keys.js";
import mongoose from "mongoose";
import "../models/user.js";


const User = mongoose.model("User");

export const requireLogin = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "From Authtn: You must be logged in!" })
  }
  const token = authorization.replace("Bearer ", "")
  jwt.verify(token, SecretValues, async (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "From JWT: You must be logged in !" });
    }
    req.payload =payload
    next()
  })
}