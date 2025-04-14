import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const items = ["New york", "Paris", "London", "Mexico", "England"];
  const heading = "Cities";
  const handleSelect = (item: String) => {
    console.log(item);
  };
  const [alertVisibility, setAlertvisibility] = useState(false);
  return (
    <div className="App">
      {alertVisibility && (
        <Alert onClose={() => setAlertvisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertvisibility(true)}>My Button</Button>
      {/*<ListGroup items={items} heading={heading} onSelectItem={handleSelect} />*/}
    </div>
  );
}

export default App;
