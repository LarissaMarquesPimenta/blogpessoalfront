import React, { useState, ChangeEvent, useEffect } from "react";
import "./Login.css";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Services";
import UsuarioLogin from "../../models/UsuarioLogin";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addId, addToken } from "../../store/tokens/action";

function Login() {
let navigate = useNavigate();
const dispatch = useDispatch();
const [token, setToken] = useState("");

const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
id: 0,
nome: "",
usuario: "",
senha: "",
foto: "",
token: "",
});

const [respUsuarioLogin, setRespUsuarioLogin] = useState<UsuarioLogin>({
id: 0,
nome: "",
usuario: "",
senha: "",
foto: "",
token: "",
});

function updatedModel(event: ChangeEvent<HTMLInputElement>) {
setUsuarioLogin({
    ...usuarioLogin,
    [event.target.name]: event.target.value,
});
}

async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
event.preventDefault();
try {
    await login(`/usuarios/logar`, usuarioLogin, setRespUsuarioLogin);
    toast.success("Usuário logado com sucesso", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
} catch (error) {
    toast.error("Usuário e/ou senha incorretos!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
}
}

useEffect(() => {
if (respUsuarioLogin.token !== "") {
    dispatch(addToken(respUsuarioLogin.token));
    dispatch(addId(respUsuarioLogin.id.toString()));
    navigate("/home");
}
}, [respUsuarioLogin.token]);
return (
<Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    className="fullfill-vh-color"
>
    <Grid xs={6} alignItems="center">
    <Box paddingX={20}>
        <form onSubmit={onSubmit}>
        <Typography
            variant="h3"
            gutterBottom
            color="textprimary"
            component="h3"
            align="center"
            className="text-bold"
        >
            Entrar
        </Typography>
        <TextField
            value={usuarioLogin.usuario}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updatedModel(event)
            }
            id="usuario"
            label="Usuário"
            variant="outlined"
            name="usuario"
            margin="normal"
            fullWidth
        
        ></TextField>
        <TextField
            value={usuarioLogin.senha}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updatedModel(event)
            }
            id="senha"
            label="Senha"
            variant="outlined"
            name="senha"
            margin="normal"
            type="password"
            fullWidth
        ></TextField>
        <Box marginTop={2} textAlign="center">
            <Button
            type="submit"
            variant="contained"
            className="botao"
            >
            Enviar
            </Button>
        </Box>
        </form>
        <Box display="flex" justifyContent="center" marginTop={2}>
        <Box marginRight={1}>
            <Typography
            variant="subtitle1"
            gutterBottom
            align="center"
            style={{ color: 'darkblue' }}
            >
            Não tem um cadastro?
            </Typography>
        </Box>
        <Link to="/cadastro" className="text-decorator-none">
            <Typography
            variant="subtitle1"
            gutterBottom
            align="center"
            style={{ color: "orange", fontWeight: "bold", cursor: "pointer" }}
            >
            {" "}
            Cadastre-se
            </Typography>
        </Link>
        </Box>
    </Box>
    </Grid>
    <Grid xs={6} className="imagem"></Grid>
</Grid>
);
}

export default Login;