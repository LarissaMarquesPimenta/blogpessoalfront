import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {Button} from '@material-ui/core'
import { useSelector } from 'react-redux';
import { Postagem } from '../../../models/Postagem';
import { busca } from '../../../services/Services';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaPostagens() {

  const [postagens, setPostagens] = useState<Postagem[]>([])
  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  
  function getPostagens() {
    console.log(token);
    busca('/postagens', setPostagens, {
      headers: {
        Authorization: token
      }
    })
  }
  
  useEffect(() => {
    getPostagens()
  }, [])

  useEffect(() => {
    if(token === ''){ 
      alert('Faça login para continuar!')
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Grid container my={2} px={4}>
      <Box display='flex' flexWrap={'wrap'} width={'100%'} gap={2}>
          {postagens.map((post) => (
            <Grid item xs={3} border={1} borderRadius={2} borderColor={'lightgray'} p={2}>
            <Typography>Postagem:</Typography>
            <Typography>{post.titulo}</Typography>
            <Typography>{post.texto}</Typography>
            <Typography>{new Intl.DateTimeFormat('pt-br', {
              dateStyle: 'full'
            }).format(new Date(post.data))}</Typography>
            <Typography>Tema: {post.tema?.descricao}</Typography>
            <Box display={'flex'} gap={4}>
              <Button fullWidth variant='contained' color='primary'>editar</Button>
              <Button fullWidth variant='contained' color='secondary'>apagar</Button>
            </Box>
          </Grid>
          ))}
        </Box>
      </Grid>
    </>
  )
}

export default ListaPostagens