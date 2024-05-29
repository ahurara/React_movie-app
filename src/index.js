import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './assets/pages/SearchPage';
import MovieDetails from './assets/pages/MovieDetail';
import Appp from './App';
import {Provider} from 'react-redux'
import { store } from './redux/store';

ReactDOM.render(
  <>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Appp/>} />
        <Route path='/search/:post' element={<SearchPage />} />
        <Route path='/movieDetail/:id'  element={<MovieDetails/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </>
  ,document.getElementById('root')
)