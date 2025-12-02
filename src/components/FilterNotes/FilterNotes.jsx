import { useState } from "react";
import "./FilterNotes.css"
import Button from "../Button/Button";

const data = [
  { title: "All", id: 1 },
  { title: "Complete", id: 2 },
  { title: "UnComplete", id: 3 },
];
function Filternotes() {
  const [active, setActive] = useState(1);
  const handleactive = (id) => {
    setActive(id);
  };
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
