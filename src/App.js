//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ListItems from "./components/ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends React.Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  };
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem]; //Destructuring Assignment
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };
  deleteItem = (key) => {
    const filteredList = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredList,
    });
  };
  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          {/* <label>
            <strong>TO-DO List</strong>
          </label> */}
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Text"
              onChange={this.handleInput}
              value={this.state.currentItem.text}
            />
            <button type="submit">Add</button>
          </form>
          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </header>
      </div>
    );
  }
}

export default App;
