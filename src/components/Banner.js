import React from "react";
import "../index.css";
import Badge from "react-bootstrap/Badge";

const BTW = "I'm a nerdy Powerlifter.";
const ABOUT =
  "This is my training site. Here lives a public log of my training, as well as some training-related rambles. I hope you find something interesting--thanks for stopping by!";
const PRs = "Current Bests: Squat 500 | Bench 286 | Deadlift 600";

export default class Banner extends React.Component {
  render() {
    return (
      <div
        style={{
          zIndex: "99",
          alignItems: "center",
          justifyContent: "center",
          width: "auto",
          height: "auto",
          fontWeight: "500",
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: "5vw",
          // display: "inline-block",
        }}
      >
        <div
          style={{
            fontSize: "5vw",
            verticalAlign: "middle",
            overflow: "visible",
            display: "inline-block",
            backgroundColor: "SlateGray",
            margin: "1vw",
            marginBottom: "3vw",
          }}
        >
          <span
            style={{
              margin: "1.5vw",
              paddingTop: "1vw",
              paddingBottom: "1vw",
            }}
          >
            {BTW}
          </span>
        </div>

        <div
          style={{
            fontSize: "3vw",
            verticalAlign: "middle",
            overflow: "visible",
            display: "inline-block",
            backgroundColor: "SlateGray",
            margin: "1vw",
            marginBottom: "5vw",
          }}
        >
          <span
            style={{
              margin: "1.5vw",
              paddingTop: "1vw",
              paddingBottom: "1vw",
            }}
          >
            {PRs}
          </span>
        </div>

        <div
          style={{
            fontSize: "2.5vw",
            width: "60vw",
            display: "inline-block",
            backgroundColor: "DarkSlateGray",
          }}
        >
          <span
            style={{
              margin: "1.5vw",
              paddingTop: "1vw",
              paddingBottom: "1vw",
            }}
          >
            {ABOUT}
          </span>
        </div>
      </div>
    );
  }
}
