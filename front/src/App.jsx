import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const texxt=()=>{
    const res=fetch('http://localhost:3000/')
    .then(res=>res.text())
    .then(data=>setText(data)) 
  }
  return (
    <>
    <button onClick={texxt}>Fetch Message</button>
    <h1>{text}</h1>
    </>
  )
}

export default App
