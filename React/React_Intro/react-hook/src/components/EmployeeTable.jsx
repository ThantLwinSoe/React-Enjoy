import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EmployeeTable() {

    const [employee,setEmployee] = useState([]);

    useEffect(
        () => {
            axios.get("http://localhost:8080/api/employess")
            .then((res)=>{
                console.log(res);
                setEmployee(res.data);
            }).catch( (err) => console.log(err))},[])

  return (
    <div>
        <div className='container'>
            <table className='table table-auto min-w-sm bg-white border-collapse'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>Id</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>FirstName</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>LastName</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>Email</th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>Salary</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {employee.map((emp)=>(
                    <tr key={emp.id}>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>{emp.id}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>{emp.first_name}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>{emp.last_name}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>{emp.email}</td>
                        <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>{emp.salary}</td>
                    </tr>
                    ))}           
                </tbody>
            </table>
        </div>
    </div>
  )
}
