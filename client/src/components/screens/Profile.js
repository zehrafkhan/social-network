import React, { useEffect, useState,useContext } from 'react';
import {UserContext} from '../../App'

function Profile() {
  const [mypics, setmyPics] = useState([]);
  const {state,dispatch} = useContext(UserContext)
  useEffect(() => {
    fetch("/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      }
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setmyPics(result.mypost)
      }).catch((err)=>console.log(err));
  }, []);

  return (
    <div style={
      {
        maxWidth: "550px",
        margin: "0px auto"
      }
    }>
      <div
        style={
          {
            display: "flex",
            justifyContent: "space-around",
            margin: "15px 0px",
            borderBottom: "1px solid grey"
          }
        }
      >
        <div>
          <img
            style={
              {
                width: "115px",
                height: "115px",
                borderRadius: "60px"
              }
            }
            src="https://images.unsplash.com/profile-1660153530491-55264fe83675image?ixlib=imgixjs-3.3.2&crop=faces&fit=crop&w=200&h=200" alt="profile pic" />

        </div>
        <div>
          <h4>{state.name}</h4>
          <div
            style={
              {
                display: "flex",
                justifyContent: "space-between",
                width: "110%"
              }
            }>
            <h5>50 posts</h5>
            <h5>15k followers</h5>
            <h5>50 followings</h5>
          </div>
        </div>
      </div>
      <div className="gallary">{
        mypics.map((item) => {
          return <img className='item' src={item.photo} alt={item.title} />
        })
      }
      </div>
    </div>
  );
}

export default Profile;