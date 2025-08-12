import { useEffect, useState } from 'react'
import './App.css'
import { fetchHealth } from './api'

function App() {
  const [status, setStatus] = useState<string>('checking...')

  useEffect(() => {
    fetchHealth()
      .then((d) => setStatus(d.status))
      .catch(() => setStatus('unreachable'))
  }, [])

  return (
    <>
      <h1>Campus Connect</h1>
      <p>Backend status: {status}</p>
    </>
  )
}

export default App
