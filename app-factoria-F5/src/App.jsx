import { useState } from 'react'
import React from 'react';  
import './App.css';
import ButtonAtom from './components/atoms/ButtonAtom/ButtonAtom';
import NavbarAtom from './components/atoms/NavbarAtom/NavbarAtom';
import AccesAcount from './views/Acces/Acces';
import FooterAtom from './components/atoms/FooterAtom/FooterAtom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavbarAtom />
      <AccesAcount />
      <FooterAtom />
    </div>
  );
}

export default App;
