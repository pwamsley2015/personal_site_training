import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../index.css";

const LINKS = [
  {
    name: "Dashboard",
    isPageLink: true,
    link: "#log",
    tooltip: LOG_TOOLTIP_F,
    handleClick: LOG_CLICKED,
  },
  {
    name: "Posts",
    isPageLink: true,
    link: "#posts",
    tooltip: POSTS_TOOLTIP_F,
    handleClick: POSTS_CLICKED,
  },
  {
    name: "OpenPowerlifting Listing",
    isPageLink: false,
    link: "https://www.openpowerlifting.org/u/patrickwamsley",
    tooltip: OPENPOWER_TOOLTIP_F,
  },
  {
    name: "Instagram",
    isPageLink: false,
    link: "https://www.instagram.com/patrick_wamsley/",
    tooltip: INSTA_TOOLTIP_F,
  },
  {
    name: "Code",
    isPageLink: false,
    link: "https://github.com/pwamsley2015/personal_site_training",
    tooltip: GITHUB_TOOLTIP_F,
  },
];
function POSTS_TOOLTIP_F(props) {
  return <Tooltip {...props}>Some thoughts on training.</Tooltip>;
}
function LOG_TOOLTIP_F(props) {
  return <Tooltip {...props}>Check out my training log.</Tooltip>;
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

function handleClick(link) {
  let section = document.querySelector(link);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function POSTS_CLICKED() {
  handleClick("#posts");
}

function LOG_CLICKED() {
  handleClick("#log");
}

export default class Links extends React.Component {
  render() {
    const aStyle = {
      color: "inherit",
      textDecoration: "inherit",
      borderColor: "DarkSlateGrey",
    };

    return (
      <div
        style={{
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
            {!thing.isPageLink ? (
              <a href={thing.link} target="_blank" style={aStyle}>
                <div className="button">{thing.name}&#8594;</div>
              </a>
            ) : (
              <div className="button" onClick={thing.handleClick}>
                {thing.name}&#8594;
              </div>
            )}
          </OverlayTrigger>
        ))}
      </div>
    );
  }
}
