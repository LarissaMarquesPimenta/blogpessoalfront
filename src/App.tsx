import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div  style={{ minHeight: '78vh' }}>
        <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/cadastro' element={<CadastroUsuario/>}></Route>
      
      </Routes>

      </div>
      <Footer />
    </Router>
    </>
  );
}


export default App;