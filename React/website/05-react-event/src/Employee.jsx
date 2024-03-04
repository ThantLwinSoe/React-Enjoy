import EmployeeFactory from "./EmployeeFactory";

function Employee(props) {


    return(
        <div>
            <EmployeeFactory doSay={props.saySomething}/>
        </div>
    );

}

export default Employee