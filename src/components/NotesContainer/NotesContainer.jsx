import Filternotes from "../FilterNotes/FilterNotes";
import Notes from "../Notes/Notes";
import "./NotesContainer.css";
function NotesContainer({ notes, setNotes }) {
  return (
    <section className="notes-section">
      <header className="notes-header">
        <div className="sort-dropdown">
          <label>Sort By:</label>
          <select id="sort-by" name="sort">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
          <h1>
            Notes Count: <span>{notes.length}</span>
          </h1>
        </div>
      </header>
      <Filternotes />
      <hr />
      <div className="notes">
          {notes.length ? notes.map((note) => (
          <Notes
            key={note.id}
            note={note}
            setNotes={setNotes}
            notes={notes}
          />
        )) : <p className="text">No note yet...</p>}
      </div>
    </section>
  );
}

export default NotesContainer;
