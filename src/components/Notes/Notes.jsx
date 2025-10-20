import "./Notes.css";

function Notes() {
  return (
    <ul class="note-list">
      <li class="note-item">
        <div class="note-item-group">
          <span class="note-title">Title</span>
          <span class="note-date">09/2/11</span>
        </div>
        <button class="delete-button" aria-label="Delete note">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </ul>
  );
}

export default Notes;
