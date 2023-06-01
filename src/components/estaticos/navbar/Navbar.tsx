import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Navbar.css';
import { addToken } from '../../../store/tokens/action';
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado',{
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined, 
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent =
            <AppBar className='AppBar' position="static">
                <Toolbar className='Toolbar' variant="dense">
                    <Box className='Box'>
                        <Typography className='Typography Typography:hover' variant="h5" color="inherit">
                            <Link to='/home' >BlogPessoal</Link>
                        </Typography>
                    </Box>

                    <Box className='Box' display="flex" justifyContent="start">
                        <Box className='Box' mx={1}>
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                                <Link to='/home' >Home</Link>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                                <Link to='/posts' >Postagens</Link>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                                <Link to='/temas' >Temas</Link>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                                <Link to='/formularioTema' >Cadastrar Tema</Link>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} onClick={goLogout} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
    }


    return (
        <>
        {navbarComponent}
        </>
    )
}

export default Navbar;