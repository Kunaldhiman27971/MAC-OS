import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/windows/MacWindow'
function App() {

  return (
    <main>
      <Dock />
      <Nav />
      <MacWindow>
      <h1>Hello</h1>  
      </MacWindow>
        </main>
  )
}

export default App
