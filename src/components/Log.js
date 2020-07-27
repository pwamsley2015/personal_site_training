import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Chart } from "react-charts";
import "../index.css";
const db = { bw: [180, 181, 182, 181, 180] };

// array of dict {x:<x>, y:<y>}
function getBWData() {
  return db.bw.map((bw, i) => ({ x: bw, y: i }));
}

const data = [
  {
    label: "Weekly Running Average Body Weight",
    data: getBWData(),
  },
];
const axes = [
  { type: "linear", position: "bottom" },
  { primary: true, type: "linear", position: "left" },
];

class BodyWeightWidget extends React.Component {
  render() {
    return (
      <div className="widget">
        <Container>
          <Row>
            <h3 className="overlay_text_small">Body Weight</h3>
          </Row>
          <Row>
            {/* Text */}
            <Col>
              <p className="boxed_text">Today:</p>
              <p className="boxed_text">Weekly Running Average:</p>
              <p className="boxed_text">&Delta; :</p>
              <hr />
              <p className="boxed_text">Currently maintaining weight.</p>
            </Col>
            {/* Graph */}
            <Col>
              <Chart data={data} axes={axes} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class TrainingBlockWidget extends React.Component {
  render() {
    return (
      <div className="widget">
        <Container>
          <Row>
            <h3 className="overlay_text_small">Current Training Block</h3>
          </Row>
          <Row>
            {/* Deltas */}
            <Col>
              <p className="boxed_text">&Delta;Squat</p>
              <p className="boxed_text">&Delta;Bench</p>
              <p className="boxed_text">&Delta;Deadlift</p>
            </Col>
            {/* Graphs */}
            <Col>Graphs</Col>
            {/* Summary */}
            <Col>
              <p className="boxed_text">Type:</p>
              <p className="boxed_text">Week n of m</p>
              <p className="boxed_text">No meet coming up.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class TrainingWeekWidget extends React.Component {
  render() {
    return (
      <div className="widget">
        <Container>
          <Row>
            <h3 className="overlay_text_small">Current Training Week</h3>
          </Row>
          <Row>
            {/* Summary */}
            <Col>
              <p className="boxed_text">Stress</p>
              <p className="boxed_text">Song of the week:</p>
            </Col>
          </Row>
          <Row>Cal view</Row>
        </Container>
      </div>
    );
  }
}

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
        <h1 className="header">The Dashboard</h1>
        <p className="header_smaller">
          This page is currently under development.
        </p>

        <TrainingBlockWidget />
        <TrainingWeekWidget />
        <BodyWeightWidget />
      </div>
    );
  }
}
