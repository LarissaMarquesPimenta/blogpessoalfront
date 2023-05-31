import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
const token = useSelector<TokenState, TokenState["tokens"]>(
(state) => state.tokens
);

var footerComponent;

if (token !== "") {
footerComponent = (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    >
    <Grid alignItems="center" item xs={12}>
        <Box className="box1">
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
        </Box>
    </Grid>
    </Grid>
);
}
return <>{footerComponent}</>;
}

export default Footer;