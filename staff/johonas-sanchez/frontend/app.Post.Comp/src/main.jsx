import React from 'react';
import ReactDOM from 'react-dom/client.js';
import App from './App.jsx';
import './index.css';
import './data/populate';

window.sessionUserId = null

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
