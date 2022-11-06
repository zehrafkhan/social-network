//PATH = client/src/components/UserProfile.js
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";

function Profile() {
  const [mypics, setmyPics] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();
  console.log(userid);
  useEffect(() => {
    fetch(`/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // setmyPics(result.mypost);
      });
  }, []);
  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "0px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "80px",
            }}
            src="https://images.unsplash.com/profile-fb-1651933751-bfc4a73df887.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt="profile pic"
          />
        </div>
        <div>
          <h4>{state.name}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "110%",
            }}
          >
            <h5>40 posts</h5>
            <h5>500 followers</h5>
            <h5>25 following</h5>
          </div>
        </div>
      </div>

      <div className="gallary">
        {mypics.map((item) => {
          return <img className="item" src={item.photo} alt={item.title} />;
        })}
      </div>
    </div>
  );
}

export default Profile;
