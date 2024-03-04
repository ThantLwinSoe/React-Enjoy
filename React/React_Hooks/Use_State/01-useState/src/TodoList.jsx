

import React, { useState } from "react";

export const TodoList = () => {

    const person = {
        id : 1,
        name : 'Thant',
        department : 'Software'
    };

   // let uid = 1;
    let tempName = '';
    let tempDepartment = '';

    const [employee,setEmployee] = useState([person]);
    const [counting,setCounting] = useState(2);

    function handleName(event) {
       tempName = event.target.value;
    }

    function handleDepartment(event) {
        tempDepartment = event.target.value;
    }

    function addPerson() {

        setCounting(counting + 1);

        const newPerson = {
            id : counting, 
            name : tempName,
            department : tempDepartment
        }

        setEmployee([...employee,newPerson]);
        console.log(uid)
        
    }

    return(
        <>
            <div>Hello To Do List</div>
            <div>
                <input type="text" placeholder="Something name ..." onChange={handleName}/>
                <input type="text" placeholder="Something Department ..." onChange={handleDepartment} />
                <button onClick={addPerson}>Add Person List</button>
            </div>
            <div>
                <ul>
                    {
                        employee.map( emp => (
                            <li key={emp.id}>
                                ID : {emp.id} , Name : {emp.name} , Department : {emp.department}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}