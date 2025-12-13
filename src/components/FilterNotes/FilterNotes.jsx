import { useState } from "react";
import "./FilterNotes.css"
import Button from "../Button/Button";


function Filternotes({active , data , handleactive}) {
  

  return (
    <div className="filter">
      {data.map((item) => (
        <Button
          key={item.id}
          text={item.title}
          isactive={item.id == active ? true : false}
          onClick={() => handleactive(item.id)}
        />
      ))}
    </div>
  );
}
export default Filternotes;
