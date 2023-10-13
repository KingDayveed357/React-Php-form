// import React from 'react'
import { useState } from "react";
import axios from "axios";
// import { NavLink } from "react-router-dom";

const CreateUsers = () => {
const [inputs, setInputs] = useState({});

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs( values => ({...values, [name]: value}))
  
}
const handleSubmit = (event) => {
  event.preventDefault();

  axios.post("http://localhost:80/api/user/save", inputs).then(function (response){
    console.log(response.data);
    // if (response.data === true) {
    //     window.location.replace('/');
    // }
    // else{window.location.replace('/user/create');
    // }
  });
}
  return (
    <>
     <div className="text-center">
      <p>Create User</p>
      <form className="py-10 flex flex-col gap-7" onSubmit={handleSubmit} >
        <div className="flex gap-10 ">
       <p>Name: </p>
       <input type="text" name="name" className="border " onChange={handleChange}/>
        </div>
        <div className="flex gap-10 ">
       <p>Email:   </p>
       <input type="email" name="email"  className="border " onChange={handleChange} />
        </div>
        <div className="flex gap-10 ">
       <p>Mobile: </p>
       <input type="phone" name="mobile" className="border " onChange={handleChange}/>
        </div>
       <button type="submit" name="save" className="p-2 px-5 rounded-md text-white bg-blue-400">Save</button>
      </form>
     
      </div> 
    </>
  )
}

export default CreateUsers
