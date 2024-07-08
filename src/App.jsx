import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'bg-amber-300 p-3 h-screen flex justify-center items-center'}>
      <Card/>
    </div>
  )
}

export default App
