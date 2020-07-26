import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../index.css";
const BTW = "I'm a nerdy Powerlifter.";
const ABOUT =
  "This is my training site. Here lives a public log of my training, as well as some training-related rambles. I hope you find something interesting--thanks for stopping by!";
const PRs = "Current PRs: 227.5kg Squat | 130kg Bench | 272.5kg Deadlift";
const btwOverlay =
  "...and a software engineer looking for employment. Checkout my portfolio";
const port = "https://pwamsley2015.github.io/portfolio";

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
          <div className="overlay_text">{BTW}</div>
        </OverlayTrigger>

        <div>
          <OverlayTrigger
            placement="right"
            overlay={kgToLbsTooltip}
            delay={{ show: 100, hide: 1000 }}
          >
            <div className="overlay_text_small">{PRs}</div>
          </OverlayTrigger>
        </div>
        <hr />
        <div className="boxed_text">{ABOUT}</div>
      </div>
    );
  }
}
