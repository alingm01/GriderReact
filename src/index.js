import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

  const el = document.getElementById('root')
  const root = ReactDom.createRoot(el);

root.render(<App />)