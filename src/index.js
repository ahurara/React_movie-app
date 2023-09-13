import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appp from './Appp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './assets/pages/SearchPage';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Appp/>} />
        <Route path='/search/:post' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  </>
  ,document.getElementById('root')
)