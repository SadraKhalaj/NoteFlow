import { useState } from "react";
import "./AddNote.css";
import toast from "react-hot-toast";

function AddNote({ setNotes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newNote = {
      Title: title,
      Description: description,
      id: new Date().toISOString(),
      createdTime: new Date(),
      isCompleted: false,
    };

    

    setNotes((prevnote) => [...prevnote, newNote]);

    toast.success("Note Added Successfully.");

    setTitle("");
    setDescription("");
  };

  return (
    <div className="input-container">
      <h1 className="read">Add Note</h1>
      <form action="" onSubmit={submitHandler}>
        <input
          className="title-input"
          type="text"
          id="title-input"
          placeholder="Add a new title..."
          onChange={(e) => setTitle(() => e.target.value)}
          value={title}
        />

        <input
          className="Discription-input"
          type="text"
          id="Discription-input"
          placeholder="Add discription..."
          onChange={(e) => setDescription(() => e.target.value)}
          value={description}
          style={{ height: "100px" }}
        />
        <button className="note-btn">Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;
