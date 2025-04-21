import "./App.css";
import Alert from "./components/Alert";
import Bugs from "./components/Bugs";
import Button from "./components/Button";
import Customer from "./components/Customer";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Game from "./components/Game";
import Pizza from "./components/Pizza";
import Expandable from "./components/Expandable";

function App() {
  //const items = ["New york", "Paris", "London", "Mexico", "England"];
  const heading = "Cities";
  const handleSelect = (item: String) => {
    console.log(item);
  };
  const [alertVisibility, setAlertvisibility] = useState([
    "product1",
    "product2",
  ]);
  const [cartItems, setCartitems] = useState(["Product1", "Product2"]);
  const handleClick = () => {
    setCartitems([]);
  };
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const addQuantity = () => {
    setCart({
      ...cart,
      items: cart.items.map((product) =>
        product.id === 1 ? { ...product, quantity: 2 } : product
      ),
    });
  };
  return (
    <div className="App">
      <Expandable maxChar={250}>
        Once upon a time in a peaceful forest a proud and speedy rabbit
        constantly boasted about how fast he could run. Tired of his arrogance,
        a calm and steady tortoise challenged him to a race. Amused, the rabbit
        accepted, confident he would win easily. When the race began, the rabbit
        sprinted ahead and soon left the tortoise far behind. Feeling sure of
        his victory, he decided to take a nap midway. Meanwhile, the tortoise
        kept moving slowly but steadily, never stopping. By the time the rabbit
        woke up and dashed toward the finish line, the tortoise was already
        there, having won the race. All the animals cheered for the tortoise,
        and the rabbit learned an important lesson: slow and steady wins the
        race.
      </Expandable>
      {/*{cart.items.map((item) => (
        <p>
          {item.title} : {item.quantity}
        </p>
      ))}
      <button onClick={addQuantity}>Add Quantity</button>*/}
      {/*{alertVisibility && (
        <Alert onClose={() => setAlertvisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertvisibility(true)}>My Button</Button>*/}
      {/* Updating nested objects using Customer Component  <Customer /> */}

      {/* Updated an array of objects <Bugs />*/}

      {/*<ListGroup items={items} heading={heading} onSelectItem={handleSelect} />*/}
      {/*<Navbar cartlength={cartItems.length} />
      <Cart onClick={handleClick} cartItems={cartItems} /> */}
      {/*<Game />
      <Pizza /> */}
    </div>
  );
}

export default App;
