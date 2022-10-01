import React, { useState } from "react";

function Createpost() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("")

const postDetails= ()=>{

}

    return (
        <div className="card input-field"
            style={
                {
                    margin: "30px auto",
                    maxWidth: "500px",
                    padding: "20px",
                    textAlign: "center"
                }
            }
        >
            <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

            <input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)} />

            <div className="file-field input-field">
                <div className="btn">
                    <span>UPLOAD IMAGE</span>

                    <input type="file"
                    onChange={(e)=>setImage(e.target.files[0])}
                    />

                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>

            </div>
            <button class="btn waves-effect waves-light #2196f3 blue" 
            onClick={()=>postDetails}>SUBMIT POST</button>
        </div>
    )
}

export default Createpost