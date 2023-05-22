import React from "react";
import './Home.css';
import { Grid, Paper, Box, Button, Typography } from "@material-ui/core";
function Home() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="img">
                <Grid alignItems="center" item xs={5}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo" >expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao-home">Ver Postagens</Button>
                    </Box>

                </Grid>
                <Grid xs={12} className="caixa">
                </Grid>
            </Grid>
        </>
    
    );
}

export default Home; 