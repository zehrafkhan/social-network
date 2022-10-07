import mongoose from "mongoose";
// import { ObjectId } from "mongoose.Schema.type";
const Schema = mongoose.Schema;
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    postedBy:{
    //  type: ObjectId,
    type: Schema.Types.ObjectId,
     ref: "user"
    }
});

mongoose.model("Post",postSchema);