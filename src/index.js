import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header/Header';
import Storefront from './Components/Storefront/Storefront';
import reportWebVitals from './reportWebVitals';
import Finance from './Components/Finance/Finance';
import PokemonDance from './Components/Dancing Pokemon/PokemonDance';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Storefront />
    <Finance />
    <PokemonDance />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
