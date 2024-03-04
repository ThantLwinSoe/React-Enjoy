import axios from "axios";

const EMPLOYEE_REST_BACKEND_URL = "http://localhost:8080/api/employees";

export const getAllEmployees = () => axios.get(EMPLOYEE_REST_BACKEND_URL);

export const createEmployee = (employee) => axios.post(EMPLOYEE_REST_BACKEND_URL,employee);

export const getEmployeeById = (id) => axios.get(EMPLOYEE_REST_BACKEND_URL+'/'+id);


export const updateEmployee = (id, employee) => axios.put(EMPLOYEE_REST_BACKEND_URL+'/'+id,employee);


export const deleteEmployee = (id) => axios.delete(EMPLOYEE_REST_BACKEND_URL+'/'+id);