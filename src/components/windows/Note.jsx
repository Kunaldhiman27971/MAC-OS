import React, { useEffect, useState } from 'react';
import './note.scss';
import MacWindow from './MacWindow';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = () => {
  const [markdown, setMarkDown] = useState("");

  useEffect(() => {
    fetch("/Note.txt")
      .then(res => res.text())
      .then(text => setMarkDown(text));
  }, []);

  return (
    <MacWindow>
      <div className="note-window">
        {markdown ?<SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</ SyntaxHighlighter> : <p>Loading...</p>}
      </div>
    </MacWindow>
  );
};

export default Note;
