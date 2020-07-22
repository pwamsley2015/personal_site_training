import React from "react";
import { Carousel, Image } from "react-bootstrap";
import IMG_2 from "../images/logB.png";
import IMG_3 from "../images/logD.png";
import IMG_1 from "../images/logS.png";
import "../index.css";
export default class Log extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          padding: "30px",
        }}
      >
        <h1 className="header">Training Log</h1>
        <p className="header_smaller">
          This page is currently under development.
        </p>
        <p className="header_smaller">...here's some pictures instead.</p>
        <hr />
        <Carousel>
          <Carousel.Item style={{ maxHeight: "500px" }}>
            <Image src={IMG_1} fluid />
          </Carousel.Item>
          <Carousel.Item style={{ maxHeight: "500px" }}>
            <Image src={IMG_2} fluid />
          </Carousel.Item>
          <Carousel.Item style={{ maxHeight: "500px" }}>
            <Image src={IMG_3} fluid />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
