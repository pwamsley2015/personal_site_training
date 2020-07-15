import React from "react";
import "../index.css";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardDeck,
  Image,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
const BTW = "I'm a nerdy Powerlifter.";
const ABOUT =
  "This is my training site. Here lives a public log of my training, as well as some training-related rambles. I hope you find something interesting--thanks for stopping by!";
const PRs = "Current bests: Squat 227.5kg | Bench 130kg | Deadlift 272.5kg";
const btwOverlay =
  "...and a software engineer looking for employment. Checkout my portfolio";
const port = "pwamsley2015.github.io/portfolio";

function btwTooltip(props) {
  return (
    <Tooltip {...props}>
      {btwOverlay}
      <a href={port} target="_blank">
        <span> &#8594; </span>
      </a>
    </Tooltip>
  );
}

function kgToLbsTooltip(props) {
  return (
    <Tooltip {...props}>
      500
      <span role="img" aria-label="flag-us">
        🇺🇸
      </span>{" "}
      286
      <span role="img" aria-label="flag-us">
        🇺🇸
      </span>{" "}
      600
      <span role="img" aria-label="flag-us">
        🇺🇸
      </span>{" "}
    </Tooltip>
  );
}

export default class Banner extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "auto",
          height: "auto",
          // fontWeight: "500",
          textAlign: "center",
          color: "#FFFFFF",
          fontSize: "5vw",
          // margin: "auto",
          padding: "auto",
          display: "block",
        }}
      >
        <OverlayTrigger
          placement="top"
          overlay={btwTooltip}
          delay={{ show: 100, hide: 1000 }}
        >
          {/* <div
            style={{
              fontSize: "5vw",
              verticalAlign: "middle",
              display: "block",
              backgroundColor: "SlateGray",
              margin: "1vw",
              marginBottom: "3vw",
            }}
          > */}
          <span
            style={{
              padding: "1vw",
              backgroundColor: "SlateGray",
            }}
          >
            {BTW}
          </span>
        </OverlayTrigger>

        <div
          style={{
            fontSize: "2vw",
            borderRadius: "10px",
            margin: "3vw",
          }}
        >
          <OverlayTrigger
            placement="right"
            overlay={kgToLbsTooltip}
            delay={{ show: 100, hide: 1000 }}
          >
            <span
              style={{
                padding: "1vw",
                backgroundColor: "SlateGray",
              }}
            >
              {PRs}
            </span>
          </OverlayTrigger>
        </div>

        <div
          style={{
            fontSize: "2.5vw",
            borderRadius: "10px",
            margin: "3vw",
          }}
        >
          <span
            style={{
              padding: "1vw",
              backgroundColor: "DarkSlateGray",
            }}
          >
            {ABOUT}
          </span>
        </div>
      </div>
    );
  }
}
