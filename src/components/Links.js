import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../index.css";
const NO_IMAGE = "";

const LINKS = [
  {
    name: "Coaching",
    link: "#coaching",
    img: NO_IMAGE,
    tooltip: COACHING_TOOLTIP_F,
  },
  {
    name: "Training Log",
    link: "#log",
    img: NO_IMAGE,
    tooltip: LOG_TOOLTIP_F,
  },
  {
    name: "Posts",
    link: "#posts",
    img: NO_IMAGE,
    tooltip: POSTS_TOOLTIP_F,
  },
  {
    name: "OpenPowerlifting Listing",
    link: "https://www.openpowerlifting.org/u/patrickwamsley",
    img: NO_IMAGE,
    tooltip: OPENPOWER_TOOLTIP_F,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/patrick_wamsley/",
    img: NO_IMAGE,
    tooltip: INSTA_TOOLTIP_F,
  },
  {
    name: "Code",
    link: "https://github.com/pwamsley2015/personal_site_training",
    img: NO_IMAGE,
    tooltip: GITHUB_TOOLTIP_F,
  },
];
function POSTS_TOOLTIP_F(props) {
  return <Tooltip {...props}>Some thoughts on training.</Tooltip>;
}
function LOG_TOOLTIP_F(props) {
  return <Tooltip {...props}>Check out my training log.</Tooltip>;
}
function COACHING_TOOLTIP_F(props) {
  return (
    <Tooltip {...props}>Need help reaching your goals? Get some help.</Tooltip>
  );
}

function OPENPOWER_TOOLTIP_F(props) {
  return <Tooltip {...props}>My OpenPowerlifting Listing</Tooltip>;
}

function GITHUB_TOOLTIP_F(props) {
  return (
    <Tooltip {...props}>
      I built this website in React. Check out the code.
    </Tooltip>
  );
}
function INSTA_TOOLTIP_F(props) {
  return <Tooltip {...props}>I'm thinking about posting more...</Tooltip>;
}

export default class Links extends React.Component {
  render() {
    return (
      <div
        style={{
          // backgroundColor: "DarkSlateGray",
          margin: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {LINKS.map((thing, i) => (
          <OverlayTrigger
            placement="bottom"
            overlay={thing.tooltip}
            delay={{ show: 250, hide: 400 }}
          >
            <a
              href={thing.link}
              target="_blank"
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            >
              <div
                style={{
                  fontSize: "2vw",
                  fontWeight: "400",
                  color: "white",
                  backgroundColor: "SlateGray",
                  padding: "1vw",
                  margin: "1vw",
                  borderRadius: "1.5vw",
                  borderStyle: "solid",
                  borderColor: "DarkSlateGray",
                }}
              >
                {thing.name}&#8594;
              </div>
            </a>
          </OverlayTrigger>
        ))}
      </div>
    );
  }
}
