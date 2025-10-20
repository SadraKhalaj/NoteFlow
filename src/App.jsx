import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import NotesContainer from "./components/NotesContainer/NotesContainer";

function App() {
  return (
    <>
      <div className="container">
        <AddNote />
        <NotesContainer />
      </div>
    </>
  );
}

export default App;
