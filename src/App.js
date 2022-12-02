import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './paginas/Header';
import PaginaInicio from './paginas/PaginaInicio';
import PaginaUsuario from './paginas/PaginaUsuario';

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<PaginaInicio/>} />
      <Route path="/:nombre" element={<PaginaUsuario />} />
    </Routes>
    </>
    
  );
}
