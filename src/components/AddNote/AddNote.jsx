import "./AddNote.css";

function AddNote() {
  return (
    <div class="input-container">
      <h1 className="read">Add Note</h1>

      <input
        className="title-input"
        type="text"
        id="title-input"
        placeholder="Add a new title..."
      />

      <input
        className="Discription-input"
        type="text"
        id="Discription-input"
        placeholder="Add discription..."
      />
      <button className="note-btn">Add Note</button>
    </div>
  );
}

export default AddNote;
