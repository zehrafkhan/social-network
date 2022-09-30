import React from 'react';

function Profile() {
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
          <h4>zehra khan</h4>
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
      <div className="gallary">
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=1" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=2" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=3" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=4" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=5" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=6" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=7" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=8" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=9" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=10" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=11" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=12" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=13" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=14" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=15" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=16" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=17" alt="gallary pic" />
        <img className='item' src="https://source.unsplash.com/random/200x200?sig=18" alt="gallary pic" />
      </div>
    </div>
  );
}

export default Profile;