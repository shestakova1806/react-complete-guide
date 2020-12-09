import React, { Component } from "react";
import "./App.css";
import { Person } from "./Person/Person";

export class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Sasha", age: 23 },
      { id: "2", name: "Masha", age: 24 },
      { id: "3", name: "Kristina", age: 28 },
    ],
    otherState: "some other value",
    showPersons: false,
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePesonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePesonsHandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}
