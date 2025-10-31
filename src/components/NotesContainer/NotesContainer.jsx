import Notes from "../Notes/Notes";
import "./NotesContainer.css";
function NotesContainer({ notes }) {
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
      <div className="notes">
        {notes.map((note) => (
          <Notes key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
}

export default NotesContainer;
