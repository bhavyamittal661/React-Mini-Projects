import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(4)
  const [symbol, setSymbol] = useState(true)
  const [num, setNum] = useState(false)
  const [password, setPassword] = useState("")

  const handleGenerate = () => {
    const pass = generatePassword(length, { num, symbol })
    setPassword(pass)
  }

  function generatePassword(length, options) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const syms = "!@#$%^&*()";
    let pool = chars
    if (options.num) pool += nums
    if (options.symbol) pool += syms
    return Array.from({ length }, () => pool[Math.floor(Math.random() * pool.length)]).join('')
  }

  return (
    <div className='app'>
      <div className="card">
        <h1>Password Generator</h1>
        <div className='control'>
          <label>
            Length : {length}
            <input type="range" min={4} max={12} value={length} onChange={(e) => setLength(Number(e.target.value))} />
          </label>
        </div>
        <div className='toggle'>
          <label>
            <input type="checkbox" checked={symbol} onChange={(e) => setSymbol(e.target.checked)} />
            Include Symbols
          </label>
        </div>
        <div className='toggle'>
          <label>
            <input type="checkbox" checked={num} onChange={(e) => setNum(e.target.checked)} />
            Include Numbers
          </label>
        </div>
        <button onClick={handleGenerate}>Generate Password</button>
        {
          password &&
          <p>
            <strong>Password :</strong> {password}
          </p>
        }
      </div>
    </div>
  )
}

export default App