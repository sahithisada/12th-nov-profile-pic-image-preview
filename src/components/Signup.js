import React, { useState } from 'react';

function Signup() {
    let [profilepic, setProfilepic]=useState("./images/download.jpeg");
  return (
    <div className='App'>
      <form>
        <h1>Signup Page</h1>
        <div>
          <label>Profile Pic</label>
          <input type="file" multiple onChange={(e)=>{
          console.log(e.target.files)
           let selectedImage=  URL.createObjectURL(e.target.files[0])
          setProfilepic(selectedImage)
          }}></input>
        </div>
        <div>
            <img src={profilepic} alt=""></img>
        </div>

        <div>
          <label>First Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Age</label>
          <input type="number"></input>
        </div>
        <div>
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div>
          <label>Mobile No.</label>
          <input type="number"></input>
        </div>
        <div>
          <button type="button">Signup</button>
        </div>
      </form>
      <br></br>
      <br></br>
    </div>
  );
}

export default Signup;
