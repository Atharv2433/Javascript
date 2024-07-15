import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import './App.css';
import Todolist from './todolist';

import SendIcon from '@mui/icons-material/Send';

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if (inputList.trim() !== "") {
      setItems((oldItems) => [...oldItems, inputList]);
      setInputList(""); // Clear input after adding item
    }
  };

  const deleteItem = (index) => {
    setItems((oldItems) => oldItems.filter((item, i) => i !== index));
  };

  return (
    <div className="App">
      <header>
        <h1>Comments ....</h1>
      </header>

      <main>
        <ul>
          {items.map((itemVal, index) => (
            <Todolist key={index} text={itemVal} onDelete={deleteItem} index={index} />
          ))}
        </ul>
      </main>

      <footer>
        <div className="section">
          <label>
            <AccountBoxIcon />
          </label>
          <input
            className="input"
            placeholder="Add Comments"
            value={inputList}
            onChange={itemEvent}
          />
          <Button className="submit_button" onClick={listOfItems}>
            <SendIcon />
          </Button>
        </div>
      </footer>
    </div>
  );
}

export default App;
