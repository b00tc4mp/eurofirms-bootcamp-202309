/* Importamos las bibliotecas necesarias de React para crear y renderizar la aplicación */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

/* Importamos el componente principal de nuestra aplicación */
import App from './App.jsx';

/* Importamos los estilos globales de nuestra aplicación */
import './index.css';

/* 
   Creamos un "root" de ReactDOM utilizando el método createRoot y lo asignamos al elemento con el ID 'root' en el documento HTML.
   Este root se utilizará para renderizar la aplicación React.
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  /* 
     Englobamos nuestra aplicación dentro del componente BrowserRouter de React Router.
     Este componente proporciona las capacidades de enrutamiento a nuestra aplicación.
  */
  <BrowserRouter>
    {/* Renderizamos el componente principal de nuestra aplicación, que contiene toda la lógica de la interfaz de usuario */}
    <App />
  </BrowserRouter>
);
