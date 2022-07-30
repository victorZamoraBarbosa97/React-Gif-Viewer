import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  /*  El modo estricto solo se aplica en modo de desarrollo
    es el causante de que los componentes se renderisen dos veces*/
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode> 
)
