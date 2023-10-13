import {useEffect, useState} from 'react'
import axios  from 'axios';
import {Link, useParams} from "react-router-dom"

const EditUser = () => {
  // const navigate = useNavigate;
  const [inputs, setInputs] = useState([]);

const {id} = useParams();

 function getUser() {
  axios.get(`http://localhost:80/api/user/${id}`,).then(function(response){
    console.log(response.data);
    setInputs(response.data);
 })
 }

 useEffect(() => {
  getUser();
 }, [])
const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs( values => ({...values, [name]: value}))
}
const handleSubmit = (event) => {
  event.preventDefault();
  axios.put(`http://localhost:80/api/user/${id}/edit`, inputs).then(function (response){
    console.log(response.data);
    Link('/');
  });
}
  return (
     <div className="text-center">
     <p>Edit User</p>
     <form className="py-10 flex flex-col gap-7" onSubmit={handleSubmit} >
       <div className="flex gap-10 ">
      <p>Name: </p>
      <input type="text" value={inputs.name} name="name" className="border p-2 " onChange={handleChange}/>
       </div>
       <div className="flex gap-10 ">
      <p>Email:   </p>
      <input type="email" value={inputs.email} name="email"  className="border p-2 " onChange={handleChange} />
       </div>
       <div className="flex gap-10 ">
      <p>Mobile: </p>
      <input type="phone" value={inputs.mobile} name="mobile" className="border p-2 " onChange={handleChange}/>
       </div>
      <button type="submit"  name="Update" className="p-2 px-5 rounded-md text-white bg-blue-400">Update</button>
     </form>
     
     </div> 
  )
}

export default EditUser
