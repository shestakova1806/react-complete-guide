import React, { useState } from "react";
import "./App.css";
import { Person } from "./Person/Person";

export const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Sasha", age: 23 },
      { name: "Masha", age: 24 },
      { name: "Kristina", age: 28 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Alexandra", age: 23 },
        { name: "Masha", age: 24 },
        { name: "Kristina", age: 30 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};
