import "./Notes.css";

function Notes({ note , notes , setNotes }) {

  const clickHandeler = (id) => {
   const newList = notes.filter((note) => note.id !== id)

    setNotes(() => newList);
  }
  return (
    <ul className="note-list">
      <li className="note-item">
        <div className="note-item-group">
          <span classNmae="note-title">{note.Title}</span>
          <span classNmae="note-date">{note.id}</span>
          <h1>{note.Description}</h1>
        </div>
        <button onClick={() => clickHandeler(note.id)} class="delete-button" aria-label="Delete note">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </ul>
  );
}

export default Notes;
