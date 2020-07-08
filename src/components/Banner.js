import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import BANNER_IMG from "../images/pre_bench.jpg";
import "../App.css";

export default class Banner extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeOnScroll);
  }

  resizeOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      banner = document.getElementById("#banner");

    if (distanceY > shrinkOn) {
      banner.classList.add("smaller");
    }
  }

  render() {
    return <div className="banner" id="#banner"></div>;
  }
}
