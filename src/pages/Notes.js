import React, { useEffect, useState } from "react";

const Note = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      {
        <ul>
          {notes.map((note) => (
            <li key={note.id}>{note.title}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Note;
