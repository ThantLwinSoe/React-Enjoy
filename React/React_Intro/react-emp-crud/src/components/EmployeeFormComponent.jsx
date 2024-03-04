import {useEffect, useState} from "react";
import {createEmployee, getEmployeeById, updateEmployee} from '../services/EmployeeService.js';
import {useNavigate, useParams} from "react-router-dom";

export const EmployeeFormComponent = () => {

    const [firstName,setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email,setEmail] = useState("")
    const [errors,setErrors] = useState(
        {
            firstName: '',
            lastName: '',
            email: ''
        }
    )

    const {id} = useParams();




    const firstNameHandler = (e) => setFirstName(e.target.value);
    const lastNameHandler = (e) => setLastName(e.target.value);

    const emailHandler = (e) => setEmail(e.target.value);

    const navigate = useNavigate();

    function validateForm() {
        let valid = true;
        const errorsCopy = {...errors};

        if(firstName.trim()){
            errorsCopy.firstName = '';
        }else {
            errorsCopy.firstName = 'first Name is required';
            valid = false;
        }

        if( lastName.trim()) {
            errorsCopy.lastName = '';

        }else {
            errorsCopy.lastName = 'Last Name is required'
            valid = false;
        }

        if(email.trim()) {
            errorsCopy.email = '';

        }else {
            errorsCopy.email = 'Email is required'
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }


    function pageTitle() {

        if(id){
            return <h2 className="text-center">Update Employee</h2>
        }else {
            return <h2 className="text-center">Add Employee</h2>
        }
    }



    const saveAndUpdateEmployee = (e) => {

        e.preventDefault();

        if(validateForm()){

            const employee = {firstName,lastName,email};

            if(id){
                updateEmployee(id,employee)
                    .then( (res) => console.log(res))
                    .catch( (err) => console.log(err));
                navigate('/employees')
            } else {
                createEmployee(employee)
                    .then( (emp) => console.log(emp))
                    .catch((err) => console.log(err));
                navigate('/employees')
            }



            createEmployee(employee)
                .then( emp => console.log(emp))
                .catch( error => console.error(error));

            navigate('/employees');
        }


    }

    useEffect(() => {
        if(id) {
            getEmployeeById(id)
                .then( (res) => {
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setEmail(res.data.email);
                }).catch( (err) => console.log(err))
        }
    }, [id]);


    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            {
                                pageTitle()
                            }
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input type="text" name="firstName"
                                           className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                           value={firstName}
                                           onChange={firstNameHandler}/>
                                    {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" name="lastName"
                                           className={`form-control ${errors.lastName ? 'is-invalid' : ''}` }
                                           value={lastName}
                                           onChange={lastNameHandler}/>
                                    {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email"
                                           className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                           value={email}
                                           onChange={emailHandler}/>
                                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                                </div>
                                <button className="btn btn-primary"
                                        onClick={saveAndUpdateEmployee}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}