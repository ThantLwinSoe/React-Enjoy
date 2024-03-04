import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function EmployeeTables() {
    
       const [employees] = useLoaderData();

        console.log(employees);

  return (
    <div>
        <TableContainer component={Paper}  >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead >
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>   
            </TableHead>
            <TableBody>
                {
                    employees.map( emp => (
                        <TableRow key={emp.id}>
                            <TableCell key={emp.id}>{emp.id}</TableCell>
                            <TableCell key={emp.id}>{emp.firstName}</TableCell>
                            <TableCell key={emp.id}>{emp.lastName}</TableCell>
                            <TableCell key={emp.id}>{emp.email}</TableCell>
                            <TableCell>
                                <Button href={`employees/${emp.id}`}>Details</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
