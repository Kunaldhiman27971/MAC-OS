import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import GitHub from './components/windows/Github'
import Note from './components/windows/Note'
function App() {

  return (
    <main>
      <Dock />
      <Nav />
      <GitHub />
      <Note />
    </main>
  )
}

export default App
