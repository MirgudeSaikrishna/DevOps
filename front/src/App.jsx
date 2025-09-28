import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const texxt=()=>{
    const res=fetch('http://localhost:3000/')
    .then(res=>res.text())
    .then(data=>setText(data)) 
  }
  return (
    <>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
    <button onClick={texxt}>Fetch Message</button>
    <h1>{text}{name}</h1>
    </>
  )
}

export default App
