import React, { Component } from "react";
import "./App.css";
import { Person } from "./Person/Person";

export class App extends Component {
  state = {
    persons: [
      { name: "Sasha", age: 23 },
      { name: "Masha", age: 24 },
      { name: "Kristina", age: 28 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Masha", age: 24 },
        { name: "Kristina", age: 30 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Sasha", age: 23 },
        { name: event.target.value, age: 24 },
        { name: "Kristina", age: 28 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("Alexandra!!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Sasha!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}
