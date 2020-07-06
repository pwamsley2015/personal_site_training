import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import BANNER_IMG from "../images/pre_bench.jpg";
export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="transition_image">
          <Image fluid src={BANNER_IMG}></Image>
        </div>
        <div>
          <h1>Patrick Wamsley</h1>
          <br />
          <h3>500 Squat 286 Bench 600 Deadlift</h3>
          <br />
          Coaching Log Rambles OpenPower Insta Code
        </div>
      </div>
    );
  }
}
