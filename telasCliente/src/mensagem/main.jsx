import React from 'react';
import ReactDOM from 'react-dom/client';
import Mensagem from './mensagem.jsx';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Mensagem />
  </React.StrictMode>
);