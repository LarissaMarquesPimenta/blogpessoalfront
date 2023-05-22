import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="caixa1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className = "texto">Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/larissa-aparecida-marques-pimenta-santos-04a28a19b/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a href="https://github.com/LarissaMarquesPimenta" target="_blank" >
                                <GitHubIcon className='redes'/>
                            </a>
                            
                        </Box>
                    </Box>
                    <Box className="caixa2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto'>© 2023 Copyright:</Typography>
                        </Box>
                        <Box className="caixa2">
                            <a target="_blank" href="https://github.com/LarissaMarquesPimenta/blogpessoalfront">
                                <Typography variant="subtitle2" gutterBottom  align="center" className='texto' >Por Larissa Pimenta</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;