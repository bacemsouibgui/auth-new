import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';

function Dashboard() {

  const user= useSelector((state)=>state.authReducer.user)
  console.log(user)

  if(!user) {
    return(
      //spinner:
      <div>
         <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      </div>
    )
  }
  return (
    // if there is user
    <div>
      <h1>{user.name} {user.lastName}</h1>
      <h3>{user.email}</h3>
     
      </div>
  )
}

export default Dashboard