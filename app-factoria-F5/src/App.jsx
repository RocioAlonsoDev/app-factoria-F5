import { useState } from 'react'
import './App.css'
import ButtonAtom from './components/atoms/ButtonAtom/ButtonAtom'
 

function App() {
  const [count, setCount] = useState(0)

  return (<ButtonAtom label={"inscripción"} color={"orangered"}></ButtonAtom>)
}
export default App
