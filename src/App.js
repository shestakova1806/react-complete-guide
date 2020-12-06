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

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Alexandra", age: 23 },
        { name: "Masha", age: 24 },
        { name: "Kristina", age: 30 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
