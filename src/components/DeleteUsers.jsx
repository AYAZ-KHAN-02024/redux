import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllUsers } from '../store/UserSlice';

function DeleteUsers() {
  const dispatch =useDispatch();
  
  function DltAllUsers(){
   dispatch(deleteAllUsers())
  }
  
  return (
    <div>
      <button onClick={DltAllUsers}>Delete all user</button>
    </div>
  )
}

export default DeleteUsers
