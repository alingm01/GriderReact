import React from 'react';
import ReactDom from 'react-dom';


  const el = document.getElementById('root')
  const root = ReactDom.createRoot(el);

export default function App() {
  return <h1>Hi There</h1>
}

root.render(<App />)