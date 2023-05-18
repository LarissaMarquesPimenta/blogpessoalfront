import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar () {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} justifyContent='start'>
                <AppBar position="static">
                <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit">Home</Button>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit">Postagens</Button>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit">Temas</Button>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit">Cadastrar temas</Button>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit">Login</Button>
                    </Typography>
                    <Link to = '/login' className="decorator-none">
                    <Box mx = {1} style = {{cursor: 'pointer', color: "white"}}> 
                        <Typography variant="h6"  color = 'inherit'>
                        <Button color="inherit">Logout</Button>
                        </Typography>
                    </Box>
                    </Link> 
                </Toolbar>
                </AppBar>
            </Box>

        </>
    )

}

export default Navbar;