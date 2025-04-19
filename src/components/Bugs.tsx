import React, { useState } from "react";

const Bugs = () => {
  const [bugs, setBugs] = useState([
    { id: 1, titile: "Bug1", Size: "10mm", Color: "Yellow" },
    { id: 2, title: "Bug2", Size: "20mm", Color: "Pink" },
  ]);
  const handleClick = () => {
    setBugs(
      bugs.map((bug) => (bug.id == 2 ? { ...bug, Color: "White" } : bug))
    );
  };
  return (
    <div>
      <h1>{bugs.map((bug) => bug.Color)}</h1>
      <button onClick={handleClick}>Change bug1 color</button>
    </div>
  );
};

export default Bugs;
