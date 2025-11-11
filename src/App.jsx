import { useEffect, useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import NotesContainer from "./components/NotesContainer/NotesContainer";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes" , JSON.stringify(notes));
  }, [notes]);

  console.log(notes);
  return (
    <>
      <div className="container">
        <AddNote setNotes={setNotes} />
        <NotesContainer notes={notes} setNotes={setNotes} />
      </div>
    </>
  );
}

export default App;
