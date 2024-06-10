// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from './Form';
import Details from './Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
