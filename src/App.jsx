// import React from React;
import { Routes, Route, Link} from 'react-router-dom';
import ListUser from './components/ListUser';

import CreateUser from './components/CreateUsers';
import EditUser from './components/EditUser';


function App() {
  
  return (
    <>
    <div className='max-w-screen-xl mx-auto flex flex-col gap-12 py-16'>
    <h5 className='text-xl text-center'>React CRUD operations using PHP API and MYSQL</h5>
    <div className='flex mx-auto gap-5 '>
    
    <Link to="/" className='text-lg underline text-blue-600 text-center'>List Users</Link>
   <Link to="user/create" className='text-lg underline text-blue-600'>Create Users</Link>
   <Routes>
  <Route index element={<ListUser/>}/> 
  <Route path='user/create' element={<CreateUser/>}/> 
  <Route path='user/:id/edit' element={<EditUser/>}/>
  </Routes>
  {/* <ListUser/> */}
  {/* <CreateUser/> */}
    </div>
 </div>
    </>
  )
}
export default App;