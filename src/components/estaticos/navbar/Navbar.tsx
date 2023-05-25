import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import useLocalStorage from "react-use-localstorage";



function Navbar () {

    const [token, setToken] = useLocalStorage('token');
const navigate = useNavigate();

function logout() {
    alert('Usuário deslogado com sucesso');
    setToken('');
    navigate('/login');
}

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
                        <Link to="/postagens">    
                        <Box mx = {1}  className="cursor">
                            <Typography variant="h6">
                            <Button color="inherit">Postagens</Button>
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/temas">
                        <Box mx = {1}  className="cursor">
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button color="inherit">Temas</Button>
                            </Typography>
                        </Box>
                        </Link>
                        <Link to="/formularioTema">
                        <Box mx = {1}  className="cursor">
                            <Typography variant="h6">
                            <Button color="inherit">Cadastrar temas</Button>
                            </Typography>
                        </Box>
                        </Link>
                        <Link to = '/login' className="cursor">
                        <Box mx = {1} > 
                            <Typography variant="h6" className="cursor">
                            <Button color="inherit">Login</Button>
                            </Typography>
                        </Box>
                        </Link>
                        <Typography onClick={logout} variant="h6" className="cursor">
                            <Button color="inherit">Logout</Button>
                            </Typography>
                </Box>

                </Toolbar>
                </AppBar>
    
        </>
    )

}

export default Navbar;