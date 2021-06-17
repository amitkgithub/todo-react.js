import React, { Component } from "react";
import TodoItems from "./TodoItems";
 
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
 
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
 
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a} 
            <input placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }

addItem(e) {
  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   
    this._inputElement.value = "";
  }
   
  console.log(this.state.items);
     
  e.preventDefault();
}
var newItem = {
  text: this._inputElement.value,
  key: Date.now()
};
this.setState((prevState) => {
  return { 
    items: prevState.items.concat(newItem) 
  };
});
e.preventDefault();