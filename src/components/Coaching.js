import React from "react";
import Button from "react-bootstrap/Button";
import "../index.css";

export default class Coaching extends React.Component {
  render() {
    return (
      <div
        style={{
          zIndex: "99",
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
          height: "500px",
          width: "auto",
          paddingLeft: "50px",
          paddingRight: "50px",
          textAlign: "center",
        }}
      >
        This is my deadlift face. Clever transition... Something of a coaching
        resume
        <p>Powerlifting </p>
        <p>Pain/injury </p>
        <p>Training philosophy</p>
        <p>Health/fitness</p>
      </div>
    );
  }
}
