import React from 'react';
import ReactDom from 'react-dom';
import ProfileCard from './ProfileCard';

  const el = document.getElementById('root')
  const root = ReactDom.createRoot(el);

export default function App() {
  return (
    <>
    <ProfileCard title="Asana" handle="@alexa99"/>
    <ProfileCard title="Cortana" handle="@cortana32"/>
    <ProfileCard title="Siri"  handle="@siri01"/>
    </>
  )
}

root.render(<App />)