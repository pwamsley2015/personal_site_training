import React from "react";
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
import "../index.css";
import CoachingImg from "../images/Coaching.jpeg";
import PostsImg from "../images/Posts.png";
import LogImg from "../images/Log.png";
import InstaImg from "../images/insta.png";
import GithubImg from "../images/github.png";
const COACHING_LABEL = "Coaching";
const COACHING_LINK = "#coaching";
const COACHING_TEXT = "Needing some help?";
const LOG_LABEL = "Training Log";
const LOG_LINK = "#log";
const LOG_ABOUT = "My training log...";
const POSTS_LABEL = "Posts";
const POSTS_LINK = "#posts";
const POSTS_ABOUT = "Posts....";
const OPENPOWER_LABEL = "Open Powerlifting";
const OPENPOWER_LINK = "https://www.openpowerlifting.org/u/patrickwamsley";
const INSTA_TOOLTIP = "This feels obligatory...";
const INSTA_LINK = "https://www.instagram.com/patrick_wamsley/";
const INSTA_LABEL = "Instragram";
const GITHUB_TOOLTIP = "I built this website with React. See the code.";
const GITHUB_LINK = "https://github.com/pwamsley2015/personal_site_training";
const NO_IMAGE = "";

const LINKS = [
  {
    name: OPENPOWER_LABEL,
    link: OPENPOWER_LINK,
    img: NO_IMAGE,
    tooltip: OPENPOWER_TOOLTIP_F,
  },
  {
    name: "Instagram",
    link: INSTA_LINK,
    img: InstaImg,
    tooltip: INSTA_TOOLTIP_F,
  },
  {
    name: "Github",
    link: GITHUB_LINK,
    img: GithubImg,
    tooltip: GITHUB_TOOLTIP_F,
  },
];

function OPENPOWER_TOOLTIP_F(props) {
  return <Tooltip {...props}>My OpenPowerlifting Listing</Tooltip>;
}

function GITHUB_TOOLTIP_F(props) {
  return <Tooltip {...props}>{GITHUB_TOOLTIP}</Tooltip>;
}
function INSTA_TOOLTIP_F(props) {
  return <Tooltip {...props}>{INSTA_TOOLTIP}</Tooltip>;
}

export default class Links extends React.Component {
  render() {
    return (
      <div
        style={{
          zIndex: "99",
          backgroundColor: "SlateGray",
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
          width: "auto",
          paddingLeft: "50px",
          paddingRight: "50px",
          textAlign: "center",
          paddingTop: "4vw",
          paddingBottom: "5vw",
        }}
      >
        <Container fluid>
          {/* One Row w/ two columns: card group and quick links */}
          <Row className="justify-content-md-center">
            {/* Cards */}
            <Col md="auto">
              <CardDeck>
                {/* Coaching Card */}
                <Card
                  style={{
                    paddingLeft: "2vw",
                    paddingRight: "2vw",
                    width: "25vw",
                  }}
                >
                  <Card.Img variant="top" src={CoachingImg} />
                  <Card.Body>
                    <Card.Title>{COACHING_LABEL}</Card.Title>
                    <Card.Text>{COACHING_TEXT}</Card.Text>
                    <Button variant="primary">Find out more.</Button>
                  </Card.Body>
                </Card>
                {/* Log Card */}
                <Card
                  style={{
                    paddingLeft: "2vw",
                    paddingRight: "2vw",
                  }}
                >
                  <Card.Img variant="top" src={LogImg} />
                  <Card.Body>
                    <Card.Title>{LOG_LABEL}</Card.Title>
                    <Card.Text>{LOG_ABOUT}</Card.Text>
                    <Button variant="primary">Training Log</Button>
                  </Card.Body>
                </Card>
                {/* Posts Card */}
                <Card
                  style={{
                    paddingLeft: "2vw",
                    paddingRight: "2vw",
                  }}
                >
                  <Card.Img variant="top" src={PostsImg} />
                  <Card.Body>
                    <Card.Title>{POSTS_LABEL}</Card.Title>
                    <Card.Text>{POSTS_ABOUT}</Card.Text>
                    <Button variant="primary">Posts</Button>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
            {/* Links */}
            <Col md="auto">
              {LINKS.map((thing, i) => (
                <OverlayTrigger
                  placement="bottom"
                  overlay={thing.tooltip}
                  delay={{ show: 250, hide: 400 }}
                >
                  <div
                    style={{
                      padding: "3vw",
                    }}
                  >
                    <a
                      href={thing.link}
                      target="_blank"
                      style={{
                        color: "inherit",
                        textDecoration: "inherit",
                      }}
                    >
                      {thing.img === NO_IMAGE ? (
                        <span
                          style={{
                            fontSize: "2vw",
                            fontWeight: "400",
                          }}
                        >
                          {thing.name} &#8594;
                        </span>
                      ) : (
                        <Image
                          style={{ width: "200px", height: "150px" }}
                          src={thing.img}
                        />
                      )}
                    </a>
                  </div>
                </OverlayTrigger>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
