import React from 'react';
import ReactDOM from 'react-dom/client';
// import './App.scss';
import App from './task1 Questions/w';
import MainF from '../src/task1 Questions/main';
import reportWebVitals from './reportWebVitals';
import MainF2 from './task1 Questions/Qcsv';
import W from './task1 Questions/w';
import DB from './task1 Questions/db';
import AddQ from './task1 Questions/addq';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <AddQ />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
