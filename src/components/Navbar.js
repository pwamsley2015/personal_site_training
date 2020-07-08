import React, { Component } from "react";
import "../index.css";
import "../App.css";

import Bar from "react-bootstrap/NavBar";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            display: "block",
            fontWeight: 700,
            fontSize: "6vw",
          }}
        >
          Patrick Wamsley
        </h1>
        <br />
        <h3>Squat Bench Deadlift</h3>
      </div>
    );
  }
}
