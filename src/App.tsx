import React from 'react';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastrarTema from './components/temas/cadastrarTema/CadastrarTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/postagens/deletarPostagens/DeletarPostagem';
import ListaTemas from './components/temas/listatema/ListaTema';
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Navbar />
      <div  style={{ minHeight: '78vh' }}>
        <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home />} ></Route>
          <Route path='/cadastro' element={<CadastroUsuario />} ></Route>
          <Route path='/postagens' element={<ListaPostagens />}></Route>
          <Route path='/formularioPostagem' element={<FormularioPostagem />} ></Route>
          <Route path='/formularioPostagem/:id' element={<FormularioPostagem />} ></Route>
          <Route path='/apagarPostagem/:id' element={<DeletarPostagem />} />
          <Route path='/temas' element={<ListaTemas />} ></Route>
          <Route path='/cadastrarTema' element={<CadastrarTema />} ></Route>
          <Route path='/deletarTema/:id' element={<DeletarTema />} ></Route>
          <Route path='/formularioTema' element={<CadastrarTema />} ></Route>
          <Route path='/formularioTema/:id' element={<CadastrarTema />} ></Route>
          <Route path='/apagarTema/:id' element={<DeletarTema />} ></Route>
    
      </Routes>

      </div>
      <Footer />
      </BrowserRouter>
    </Provider>
    </>
  );
}
export default App;