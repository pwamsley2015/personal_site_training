import React from "react";
import "../index.css";

const BTW = "I'm a nerdy Powerlifter.";
const ABOUT =
  "This is my training website. Here lives a public log of my training, as well as some training-related rambles. I hope you find something interesting--thanks for stopping by!";
const PRs = "Current PRs#: Squat 500 | Bench 286 | Deadlift 600";

export default class Banner extends React.Component {
  render() {
    return (
      <div
        style={{
          zIndex: "99",
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
          width: "auto",
          paddingLeft: "50px",
          paddingRight: "50px",
          textAlign: "center",
        }}
      >
        <p>
          {BTW}
          <br />
          {PRs}
        </p>

        <p>{ABOUT}</p>
      </div>
    );
  }
}
