import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {Button} from '@material-ui/core'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Postagem } from '../../../models/Postagem';
import { buscaId } from '../../../services/Services';
import { TokenState } from '../../../store/tokens/tokensReducer';



function DeletarPostagem() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens

    );

const navigate = useNavigate();

const { id } = useParams<{ id: string }>();


const [post, setPost] = useState<Postagem>({
id: 0,
titulo: '',
texto: '',
data: '',
tema: null,
});

async function getById(id: string) {
await buscaId(`/postagens/${id}`, setPost, {
    headers: {
    Authorization: token,
    },
});
}

useEffect(() => {
    if(token === ''){ 
    alert('Faça login para continuar!')
    navigate('./login')

    }
}, [])

useEffect(() => {
if (id !== undefined) {
    getById(id);
}
}, []);

return (
<>
    <Grid container justifyContent={'center'} my={2}>
    <Grid item xs={4}>
        <Typography variant="h5" align="center">
        Tem certeza de que quer apagar a postagem?
        </Typography>
        <Grid
        item
        xs={12}
        border={1}
        borderRadius={2}
        borderColor={'lightgray'}
        p={2}
        >
        <Typography>Postagem:</Typography>
        <Typography>{post.titulo}</Typography>
        <Typography>{post.texto}</Typography>
        {/* <Typography>{new Intl.DateTimeFormat('pt-br', {
            dateStyle: 'full'
        }).format(new Date(post.data))}</Typography> */}
        <Typography>Tema: {post.tema?.descricao}</Typography>

        <Box display={'flex'} gap={4}>
            <Button fullWidth variant="contained" color="primary">
            cancelar
            </Button>
            <Button fullWidth variant="contained" color="secondary">
            apagar
            </Button>
        </Box>
        </Grid>
    </Grid>
    </Grid>
</>
);
}

export default DeletarPostagem;