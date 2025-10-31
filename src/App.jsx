import { useState } from "react";
import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import NotesContainer from "./components/NotesContainer/NotesContainer";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <>
      <div className="container">
        <AddNote setNotes={setNotes} />
        <NotesContainer notes={notes} />
      </div>
    </>
  );
}

export default App;
