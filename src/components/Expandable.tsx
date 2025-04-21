import React, { useState } from "react";

interface Props {
  children: String;
  maxChar?: number;
}

const Expandable = ({ children, maxChar = 100 }: Props) => {
  const [textExpanded, setTextExpandable] = useState(false);
  if (children.length < maxChar) return <p>{children}</p>;
  const text = children.substring(0, maxChar) + "...";
  const btn = textExpanded ? "less" : "More";
  return (
    <div>
      {textExpanded ? children : text}
      <button onClick={() => setTextExpandable(!textExpanded)}>{btn}</button>
    </div>
  );
};

export default Expandable;
