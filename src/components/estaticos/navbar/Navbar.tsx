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
        <AppBar  position="static">
            <Toolbar className="fundo-navbar" variant="dense"> 
                <Box className="cursor">
                    <Typography variant="h5" color='inherit'>
                        BlogPessoal
                    </Typography>
                </Box>

                <Box display='flex' justifyContent='start'>
                            <Link to='/home' className="decorator-none">
                            <Box mx = {1} className="cursor">
                                <Typography variant="h6">
                        <Button color="inherit">Home</Button> </Typography>
                        </Box>
                            </Link>
                            
                        <Box mx = {1}  className="cursor">
                            <Typography variant="h6">
                            <Button color="inherit">Postagens</Button>
                            </Typography>
                        </Box>
                        <Box mx = {1}  className="cursor">
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button color="inherit">Temas</Button>
                            </Typography>
                        </Box>
                        <Box mx = {1}  className="cursor">
                            <Typography variant="h6">
                            <Button color="inherit">Cadastrar temas</Button>
                            </Typography>
                        </Box>
                        <Link to = '/login' className="decorator-none">
                        <Box mx = {1} > 
                            <Typography variant="h6" className="cursor">
                            <Button color="inherit">Login</Button>
                            </Typography>
                        </Box>
                        </Link>
                </Box>
                </Toolbar>
                </AppBar>

        </>
    )

}

export default Navbar;