import React, { Component } from "react";
import { Aux } from "../../../hoc/Aux";
import { withClass } from "../../../hoc/withClass";
import classes from "./Person.css";

class person extends Component {
  render() {
    console.log("[Person.js] rendering...");

    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export const Person = withClass(person, classes.Person);
