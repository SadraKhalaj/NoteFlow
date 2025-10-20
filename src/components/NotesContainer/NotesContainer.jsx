import Notes from "../Notes/Notes";
import "./NotesContainer.css";
function NotesContainer() {
  return (
    <section class="notes-section">
      <header class="notes-header">
        <div class="sort-dropdown">
          <select id="sort-by" name="sort">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
          <h1>Notes Count:</h1>
        </div>
      </header>
      <Notes />
    </section>
  );
}

export default NotesContainer;
