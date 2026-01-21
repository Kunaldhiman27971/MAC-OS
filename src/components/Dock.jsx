import React from 'react'
import './dock.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Note from './windows/Note'
import Spotify from './windows/Spotify'
const Dock = ({ windowState, setWindowState }) => {
  return (
    <footer className='dock'>
      <div
        onClick={() => { setWindowState(state => ({ ...state, github: true })) }}
        className="icon github"><img src="/doc-icons/github.svg" alt="" /></div>


      <div
        onClick={() => { setWindowState(state => ({ ...state, note: true })) }}
        className="icon note"><img src="/doc-icons/note.svg" alt="" /></div>


      <div
        onClick={() => { setWindowState(state => ({ ...state, resume: true })) }}
        className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>


      <div
        onClick={() => { window.open("https://calendar.google.com/calendar/u/0/r", "_blank") }}
        className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>


      <div
        onClick={() => { setWindowState(state => ({ ...state, spotify: true })) }}
        className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>


      <div
  onClick={() => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=kunaldhiman27971@gmail.com.com",
      "_blank"
    )
  }}
  className="icon mail"
>
  <img src="/doc-icons/mail.svg" alt="mail" />
</div>




      <div
        onClick={() => { window.open("https://www.linkedin.com/in/kunal-dhiman-0558b425b/ ", "_blank") }}
        className="icon link"><img src="/doc-icons/link.svg" alt="" /></div>


      <div
        onClick={() => { setWindowState(state => ({ ...state, cli: true })) }}
        className="icon cli"><img src="/doc-icons/cli.svg" alt="" /></div>


    </footer>
  )
}

export default Dock
