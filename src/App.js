import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Top from './pages/top';
import Detail from './pages/detail';

function App() {
  return (
    <>
      <Routes>
        <>
          <Route exact path='/' element={<Top />} />
          <Route exact path='/detail' element={<Detail />} />
        </>
      </Routes>
    </>
  );
}

export default App;
