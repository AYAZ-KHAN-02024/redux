import React from 'react'
import DeleteUsers from './DeleteUsers'
import { api } from '../api/Api'
import { useDispatch } from 'react-redux'
import { addUsers } from '../store/UserSlice'
import DisplayList from './DisplayList'

function UserDetails() {
  const dispatch = useDispatch();
  // dispatch function ek aisa function hai jo Redux store mein actions ko bhejta hai. 


   function ChangeState(){
  
       const data = api();
       dispatch(addUsers(data))
       //data is action.payload for userSlice, in adduser

   
  }

  return (
    <>
    <div className='all-user'>
      <h1>list of all user</h1><button onClick={()=> ChangeState()}>add user</button>
    </div>
    
    <div className="user-list">
        <ul>
           <DisplayList/>
        </ul>
    </div>
   
    <DeleteUsers/>
    </>
  )
}

export default UserDetails

