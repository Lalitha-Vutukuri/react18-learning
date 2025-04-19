import { useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Domino's",
    topping: ["Mushrooms"],
  });
  const handleClick = () => {
    setPizza({ ...pizza, topping: [...pizza.topping, "Chilly"] });
  };
  return (
    <div>
      <h1>
        {pizza.topping.map((item) => (
          <p>{item}</p>
        ))}
      </h1>
      <button onClick={handleClick}>Add Topping</button>
    </div>
  );
};

export default Pizza;
