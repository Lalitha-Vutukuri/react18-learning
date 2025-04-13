import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New york", "Paris", "London", "Mexico", "England"];
  const heading = "Cities";
  const handleSelect = (item: String) => {
    console.log(item);
  };
  return (
    <div className="App">
      <ListGroup items={items} heading={heading} onSelectItem={handleSelect} />
    </div>
  );
}

export default App;
