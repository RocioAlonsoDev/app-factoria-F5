import { useState } from 'react'
import './App.css'
import ButtonAtom from './components/atoms/ButtonAtom/ButtonAtom'
import NavbarAtom from './components/NavbarAtom/NavbarAtom'
 

function App() {
  const [count, setCount] = useState(0)

  return (<NavbarAtom></NavbarAtom>)
}
export default App
