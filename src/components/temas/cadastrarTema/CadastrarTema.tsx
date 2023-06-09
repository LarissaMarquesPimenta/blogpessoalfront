    import { Box, Button, Grid, TextField, Typography } from '@mui/material';
    import { useState, ChangeEvent, useEffect } from 'react';
    import { Tema } from '../../../models/Tema';
    import { buscaId, post, put } from '../../../services/Services';
    import { useNavigate, useParams } from 'react-router-dom';
    import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
    

    function CadastrarTema() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
    );

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    // iniciando a variavel para armazenar o tema digitado
    const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
    });

    async function getById(id: string) {
    try {
        await buscaId(`/temas/${id}`, setTema, {
        headers: {
            Authorization: token,
        },
        });
    } catch (error) {
        alert('O tema não existe');
    }
    }

    useEffect(() => {
    if (id !== undefined) {
        getById(id);
    }
    }, [id]);

    useEffect(() => {
    if(token === ''){ 
        alert('Faça login para continuar')
        navigate('/login')
    }
    }, [])

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setTema({
        ...tema,
        [event.target.name]: event.target.value,
    });
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
        try {
        await put('/temas', tema, setTema, {
            headers: {
            Authorization: token,
            },
        });
        alert('atualizado!');
        back();
        } catch (error) {
        alert('Não foi... tente novamente');
        }
    } else {
        try {
        await post('/temas', tema, setTema, {
            headers: {
            Authorization: token,
            },
        });
        alert('Deu bom!');
        back();
        } catch (error) {
        alert('Não foi...tente novamente');
        }
    }
    }

    function back() {
    navigate('/temas');
    }

    return (
    <>
        <Grid container justifyContent={'center'} my={2}>
        <Grid item xs={10} md={4}>
            <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection={'column'} gap={2}>
                <Typography variant="h4" align="center">
                Formulário de
                {id !== undefined ? ' atualização ' : ' cadastro '}
                de tema
                </Typography>
                <TextField
                label="Descrição do tema"
                name="descricao"
                value={tema.descricao}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                }
                />
                <Button
                type="submit"
                variant="contained"
                disabled={tema.descricao.length < 2}
                >
                {id !== undefined ? 'Atualizar tema' : 'Cadastrar Tema'}
                </Button>
            </Box>
            </form>
        </Grid>
        </Grid>
    </>
    );
    }

    export default CadastrarTema;