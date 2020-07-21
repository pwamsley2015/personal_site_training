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
    const imgStyle = {
      objectFit: "contain",
      maxWidth: "50vw",
      maxHeight: "50vw",
    };
    return (
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          width: "100%",
          height: "80vw",
          padding: "2.5vw",
        }}
      >
        <h1 className="header">Training Log</h1>
        <p className="header_smaller">
          This page is currently under development.
        </p>
        <p className="header_smaller">...here's some pictures instead.</p>
        <hr />
        <Carousel>
          <Carousel.Item>
            <Image src={IMG_1} style={imgStyle} />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={IMG_2} style={imgStyle} />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={IMG_3} style={imgStyle} />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
