import React, { useState } from 'react'

export default function ObjectAsState() {
    const [employee,setEmployee] = useState({name:"",country:""})

  return (
    <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={employee.name} 
        onChange={ (e)=> setEmployee({...employee,name : e.target.value}) }/>
        <br />

        <label htmlFor="country">Country</label>
        <input type="text" value={employee.country} 
        onChange={ (e)=> setEmployee({...employee,country : e.target.value}) }/>
        <br />
        <hr />
        <div>
            <p>My Name is {employee.name}
            </p>      
            <p>I am from {employee.country}</p>
           
           
        </div>


    </div>
  )
}
