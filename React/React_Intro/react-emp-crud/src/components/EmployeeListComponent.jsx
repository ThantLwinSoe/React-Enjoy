import {useEffect, useState} from "react";
import {deleteEmployee, getAllEmployees} from "../services/EmployeeService.js";
import {redirect, useNavigate} from "react-router-dom";

export const EmployeeListComponent = () => {

    const [employees,setEmployees] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees().then( (res) => {setEmployees(res.data)} )
    }, []);

    const toEmployeeForm =  (e) => navigate('/employee-form');

    const  updateEmployee = (id) =>{
        navigate(`/update-employee/${id}`)
    }

    const deleteEmployeeById = (id) =>{
        deleteEmployee(id)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        redirect("/employees")
    }


    return (
        <>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary mb-3" onClick={toEmployeeForm}>Create Employee</button>
                    <div className="card">
                        <h3>Employee Table</h3>
                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            employees.map( (emp) => (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.email}</td>
                                    <td>

                                        <button className="btn btn-primary" onClick={() => updateEmployee(emp.id)}>Update</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary" onClick={ () => deleteEmployeeById(emp.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}