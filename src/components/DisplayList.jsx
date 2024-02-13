import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUsers } from '../store/UserSlice';

const DisplayList = () => {
  
  //useselctor ke andr jab hum state likhte hai matlab complete store ka state, access hoga
  const data = useSelector((state) => {
    return state.users; //ye users store vala users
  })
  


  const dispatch = useDispatch();

  function DeleteOneUser(id /*parameter*/ ){

    dispatch(removeUsers(id))

  }

  return (
    <>
      {
        data.map((user, index) => {

          return <li key={index}>
            {user}
            
            <i className="fa-solid fa-trash dlt-btn" 
            onClick={()=>DeleteOneUser(index  /*argument*/)}></i>
            </li>

           

        })

      }
    </>
  )
}

export default DisplayList

