//PATH = client/src/Home.js
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../App';
import M from 'materialize-css';


function Home() {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.posts);
      });
  }, []);

  const likePost = (id) => {
    fetch("/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map(item => {
          if (item._id === result._id)
            return result;
          else
            return item
        })
        setData(newData)
      }).catch(err => {
        console.log(err);
      });
  };

  const unlikePost = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map(item => {
          if (item._id === result._id)
            return result;
          else
            return item
        })
        setData(newData)
      }).catch(err => {
        console.log(err);
      });
  };

  const makeComment = (text,postId)=>{
    fetch("/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId,
        text
      }),
    }).then((res) => res.json())
    .then((result) => {
      console.log(result);
      const newData = data.map((item) => {
        if (item._id === result._id) 
          return result;
        else
return item;
      });
      setData(newData);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const deletePost = (postid) => {
    fetch(`/deletepost/${postid}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then(data=>{
        if(data.message){
          M.toast({html: data.message,classes:"#b71c1c red darken-4" })
        }
      })
      .then((result) => {
        console.log(result);
        const newData =data.filter(item=>{
              return item._id !== result._id
        })
        setData(newData)
        
      }).catch((err) => {
        console.log(err);
      });
      setTimeout(()=>{
        window.location.reload();
      },500);
  };

  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card">
            <h5>{item?.postedBy?.name}
            {item?.postedBy?._id === state._id &&  <i className="material-icons" style={{float:"right"}}
                onClick={()=>{
                  deletePost(item._id)
                }
               }>delete</i> }
            </h5>
            
            <div className="card-image">
              <img
                src={item.photo} alt="pic"
              />
            </div>
            <div className="card-content">
              {item.likes.includes(state._id) ? (
                <i className="material-icons" onClick={() => { unlikePost(item._id) }} >thumb_down</i>
              ) : (<i className="material-icons" onClick={() => { likePost(item._id) }} >thumb_up</i>)}


              <h6>{item.likes.length} likes</h6>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              {item.comments.map((record) => {
                return (
                  <h6>
                    <span style={{fontWeight:"600"}}>{record.postedBy.name}</span>
                    <span style={{marginLeft:'5px'}}>{record.text}</span>
                  </h6>
                );
              })}
              <form onSubmit={(e)=>{
                  e.preventDefault();
                  console.log(e.target[0].value, item._id )
                  makeComment(e.target[0].value, item._id )
              }}>
                <input type="text" placeholder="add a comment" />
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
