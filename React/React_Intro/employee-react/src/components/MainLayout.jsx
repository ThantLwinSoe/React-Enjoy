import { Menu } from '@mui/icons-material'
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
        
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                    size='large' edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{mr:2}}>
                    
                    <Menu></Menu>

                    </IconButton>
                    <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                        Employees
                    </Typography>
                   <Button href='employees' color='inherit'>Employee</Button>
                </Toolbar>
            </AppBar>
            <Container sx={{marginTop:'2rem'}}>
                <Outlet></Outlet>
            </Container>
          

    </div>
  )
}
