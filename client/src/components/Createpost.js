import React from "react";

function Createpost() {
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
            <input type="text" placeholder="title" />
            <input type="text" placeholder="body" />
            <div className="file-field input-field">
                <div className="btn">
                    <span>UPLOAD IMAGE</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
                
            </div>
            <button class="btn waves-effect waves-light #2196f3 blue" type="submit" name="action">SUBMIT POST</button>
        </div>
    )
}

export default Createpost