import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function EmployeeDetail() {
    const {employee} = useLoaderData();

    console.log("=======================",employee)

  return (
    <div>
        <Grid2 container spacing={2}>
            <Grid xs={4}>
                <img src="https://picsum.photos/200/300"></img>
            </Grid>
            <Grid xs={8}>
                <Card sx={{minWidth:'400'}}>
                    <CardContent >
                        <Typography sx={{fontSize:16}} color='text.secondary'>
                            ID: {employee.id}
                        </Typography>

                        <Typography sx={{fontSize:16}} color='text.secondary'>
                            First Name: {employee.firstName}
                        </Typography>

                        <Typography sx={{fontSize:16}} color='text.secondary'>
                            Last Name: {employee.lastName}
                        </Typography>

                        <Typography sx={{fontSize:16}} color='text.secondary'>
                            Email: {employee.EmployeeDetail}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid2>
    </div>
  )
}
