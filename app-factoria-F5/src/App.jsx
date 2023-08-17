import { useState } from 'react'
import './App.css'
import ButtonAtom from './components/atoms/ButtonAtom/ButtonAtom'
import NavbarAtom from './components/atoms/NavbarAtom/NavbarAtom'

 

function App() {
  const [count, setCount] = useState(0)

  return (
  <><NavbarAtom /><ButtonAtom label={"inscripción"} color={"orangered"}></ButtonAtom>
 </>)
}




export default App;