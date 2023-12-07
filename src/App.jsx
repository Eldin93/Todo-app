import React, { useState, useEffect } from "react";
import "./styles.css";
import Content from "./Content";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const capitalizeItem =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      setItems([...items, capitalizeItem]);
      setInputValue(""); // Clear the input field
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  return (
    <div className="main-container">
      <div className="title">
        <h1>DAILY TASKS</h1>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Type new item"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <Content items={items} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
