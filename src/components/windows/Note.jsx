import React, { useEffect, useState } from 'react';
import './note.scss';
import MacWindow from './MacWindow';

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
        {markdown ? <pre>{markdown}</pre> : <p>Loading...</p>}
      </div>
    </MacWindow>
  );
};

export default Note;
