import React from 'react';
import ReactDOM from 'react-dom/client';
import { Relog } from './Relog';
import './styles.css';
// import {test} from './shared/utils';

// const App = () => console.log('prueba react');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Relog hora={0} min={0} tiempo="AM"/> */}
    <Relog hora={11} min={59} tiempo='PM' />
  </React.StrictMode>
);
