import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {Button} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Postagem } from '../../../models/Postagem';
import { busca } from '../../../services/Services';

function ListaPostagem() {

  const [postagens, setPostagem] = useState<Postagem[]>([])
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  
  function getPostagem() {
    busca('/postagens', setPostagem, {
      headers: {
        Authorization: token
      }
    })
  }
  
  useEffect(() => {
    getPostagem()
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
        <Box display='flex' flexWrap={'wrap'} width={'100%'}>
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

export default ListaPostagem