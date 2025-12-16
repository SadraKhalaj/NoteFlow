import { useState } from "react";
import Filternotes from "../FilterNotes/FilterNotes";
import Notes from "../Notes/Notes";
import "./NotesContainer.css";


const data = [
  { title: "All", id: 1 },
  { title: "Complete", id: 2 },
  { title: "UnComplete", id: 3 },
];




function NotesContainer({ notes, setNotes }) {
  const [active, setActive] = useState(1);
  const [sortOrder ,setSortOrder ] = useState("Latest");

  const handleactive = (id) => {
    setActive(id);
  };

  const changeHandler = (e) => {
    setSortOrder(e.target.value);
  };


  let filteredNotes;

  switch (active) {
    case 1:
      filteredNotes = notes;
      break;

    case 2:
      filteredNotes = notes.filter((note) => note.isCompleted);
      break;

    case 3:
      filteredNotes = notes.filter((note) => !note.isCompleted);
      break;
    default:
      break;
  };


  const sortNotes = [...filteredNotes].sort((a , b) => {
    if(sortOrder === "latest"){
      return new Date(b.createdTime) - new Date(a.createdTime);
    } else{
      return new Date(a.createdTime) - new Date(b.createdTime);
    }
  });
  console.log(sortNotes)



  return (
    <section className="notes-section">
      <header className="notes-header">
        <div className="sort-dropdown">
          <label>Sort By:</label>
          <select id="sort-by" name="sort" value={sortOrder} onChange={changeHandler}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
          <h1>
            Notes Count: <span>{notes.length}</span>
          </h1>
        </div>
      </header>
      <Filternotes data={data} handleactive={handleactive} active={active}/>
      <hr />
      <div className="notes">
          {sortNotes.length ? sortNotes.map((note) => (
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
