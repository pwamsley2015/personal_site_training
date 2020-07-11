import React from "react";
import Button from "react-bootstrap/Button";
import "../index.css";

const COACHING_LABEL = "Coaching";
const COACHING_LINK = "#coaching";
const COACHING_TOOLTIP = "Needing some help?";
const LOG_LABEL = "Training Log";
const LOG_LINK = "#log";
const POSTS_LABEL = "Posts";
const POSTS_LINK = "#posts";
const OPENPOWER_LABEL = "Open Powerlifting";
const OPENPOWER_LINK = "https://www.openpowerlifting.org/u/patrickwamsley";
const INSTA_TOOLTIP = "This feels obligatory...";
const INSTA_LINK = "https://www.instagram.com/patrick_wamsley/";
const GITHUB_TOOLTIP = "I built this website with React. See the code.";

export default class Links extends React.Component {
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
        <Button>{COACHING_LABEL}</Button>
        <Button>{LOG_LABEL}</Button>
        <Button>{POSTS_LABEL}</Button>
        <Button>{OPENPOWER_LABEL}</Button>
      </div>
    );
  }
}
