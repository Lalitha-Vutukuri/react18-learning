import { useState } from "react";
interface Props {
  items: String[];
  heading: string;
  onSelectItem: (item: String) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <h1>No Items Found</h1>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
