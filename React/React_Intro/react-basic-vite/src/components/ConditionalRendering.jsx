import React, { useState } from 'react'

export default function ConditionalRendering() {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

   
    function changeState() {
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    
    <div>
        {isLoggedIn}
        {
            isLoggedIn ? <h1>Welcome to our project</h1>
            : <h2>You cannot access this Project!</h2>
        }
        <button onClick={()=> changeState()}>Change State</button>
 
    </div>
  )
}
