import React from "react";
import './Home.css';
import { Grid, Paper } from "@material-ui/core";
function Home() {
    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs = {12} sm = {8} >
                    <Paper style={{height: "100vh", background: "#C0FDFF"}}/>
                </Grid>
                <Grid item container spacing={2} direction="column" xs = {12} sm = {4}> 
                    <Grid item>
                        <Paper style={{height: "49vh", background: "#FFCBF2"}}/> 
                    </Grid>
                    <Grid item>
                        <Paper style={{height: "49vh", background: "#E2AFFF"}}/> 
                    </Grid>
                </Grid>

            </Grid>
        </>
    
    );
}

export default Home; 