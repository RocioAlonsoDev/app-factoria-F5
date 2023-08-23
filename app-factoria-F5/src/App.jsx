import { useState } from 'react'
import React from 'react';  
import './App.css';
import ButtonAtom from './components/atoms/ButtonAtom/ButtonAtom';
import NavbarAtom from './components/atoms/NavbarAtom/NavbarAtom';
import AccesAcount from './views/Acces/Acces';
import FooterAtom from './components/atoms/FooterAtom/FooterAtom'
import BootcampCardAtom from './components/atoms/BootcampCardAtom/BootcampCardAtom';
import PostulantesCardAtom from './components/atoms/PostulantesCardAtom/PostuantesCardAtom';
//import { Routes,rout, link } from "react-router-dom";
import Router from './configuration/Router';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
       <NavbarAtom /> 
       <Router />
       <BootcampCardAtom
       title="FemCoders"
       date="Octubre 2024"
       /> 
       {/* <AccesAcount /> */}
       {/* <PostulantesCardAtom */}
          {/* title="postulantes" */}
          {/* option1="ver todos los postulantes" */}
          {/* option2="crear ficha de postulantes"/> */}
       {/* <PostulantesCardAtom  */}
          {/* title="bootcamps"  */}
          {/* option1="Femcoders P2"  */}
          {/* option2="Dgital Academy P3"/> */}
       <FooterAtom /> 
  
    </div>
  );
}

export default App;
