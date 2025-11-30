import toast from "react-hot-toast";
import "./Notes.css";

function Notes({ note , notes , setNotes }) {

  const clickHandeler = (id) => {
   const newList = notes.filter((note) => note.id !== id)

    setNotes(() => newList);

    toast("Note Successfully Deleted.", {
      icon: "🗑️",
    });
  }

  const checkHandeler = (id) => {
    const result = notes.map((note) => {
      return note.id == id ? {...note , isCompleted:!note.isCompleted} : note;
    });

    console.log(result);
    setNotes(result);
  }

  return (
    <ul className={`note-list ${note.isCompleted ? "complete" : ""}`}>
      <li className={`note-item ${note.isCompleted ? "completed" : ""}`}>
        <div className="note-item-group">
          <span classNmae="note-title">{note.Title}</span>
          <span classNmae="note-date">{note.id}</span>
          <h1>{note.Description}</h1>
        </div>
        <button
          onClick={() => clickHandeler(note.id)}
          class="delete-button"
          aria-label="Delete note"
        >
          <i className="fas fa-trash"></i>
        </button>
        <button
          onClick={() => checkHandeler(note.id)}
          class="check-button"
          aria-label="Delete note"
        >
          <i className="fas fa-check"></i>
        </button>
      </li>
    </ul>
  );
}

export default Notes;
