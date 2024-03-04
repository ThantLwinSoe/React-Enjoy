function EmployeeFactory(props) {

    const emp = [
        {   
            id: 1,
            name: "thant",
            age: 23
        },
        {
            id: 2,
            name: "lwin",
            age: 24
        },
        {
            id: 3,
            name: "soe",
            age: 25
        }
    ]

    // const name = "Hello Everone"

   

    // const onHandler2 = (emp) => emp.map( emp => 
        
    //         <div>{emp.name}</div>
    //     )

    // const onHandler = (greet) => console.log(`${greet} thant`)

    // const detail = show.map( show => <li>{show.name}</li>)

    const clickHandler = (e) => {
        console.log(e)
        e.target.textContent = "Ohh my god you clicked me!!!"
    }

    const doubleClickHandler = (e) => {
        e.target.textContent = "Conglatulation you clicked double!!!"
    }

    return(
        <div>
            <button onClick={(e) => clickHandler(e)}>View Employees</button>
            <button onDoubleClick={(e) => doubleClickHandler(e)}>Double Click Employees</button>
            <h1>{props.doSay}</h1>
        </div>
    );
}

export default EmployeeFactory