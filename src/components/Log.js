import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Chart } from "react-charts";
import "../index.css";
const db = {
  bw: [180, 181, 182, 181, 180],
  bwInfo: { today: 180, wra: 181, delta: 0 },
  week: {
    days: ["Day 1", "Day 2", "Day 3", "Day 4"],
    stress: "Low",
    song: "https://www.youtube.com/watch?v=cxkdIFOJAhw",
  },
};

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
      <div>
        <Container className="widget">
          <Row>
            <h3 className="overlay_text_small">Body Weight</h3>
          </Row>
          <Row>
            {/* Text */}
            <Col xs={4}>
              <p className="widget_boxed_text">Today: {db.bwInfo.today}</p>
              <p className="widget_boxed_text">
                Weekly Running Average: {db.bwInfo.wra}
              </p>
              <p className="widget_boxed_text">
                &Delta;BW&frasl;&Delta;t &#8776; {db.bwInfo.delta}
              </p>
              <hr />
              <p className="widget_boxed_text">Currently maintaining weight.</p>
            </Col>
            {/* Graph */}
            <Col>
              <div
                style={{ width: "600px", height: "300px", maxWidth: "70vw" }}
              >
                <Chart data={data} axes={axes} />
              </div>
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
      <div>
        <Container className="widget">
          <Row>
            <h3 className="overlay_text_small">Current Training Block</h3>
          </Row>
          <Row>
            {/* Deltas */}
            <Col>
              <p className="widget_boxed_text">&Delta;Squat</p>
              <p className="widget_boxed_text">&Delta;Bench</p>
              <p className="widget_boxed_text">&Delta;Deadlift</p>
            </Col>
            {/* Graphs */}
            <Col>Graphs</Col>
            {/* Summary */}
            <Col>
              <p className="widget_boxed_text">Type:</p>
              <p className="widget_boxed_text">Week n of m</p>
              <p className="widget_boxed_text">No meet coming up.</p>
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
      <div>
        <Container className="widget">
          <Row>
            <h3 className="overlay_text_small">Current Training Week</h3>
          </Row>
          <Row>
            {/* Summary */}
            <Col>
              <p className="widget_boxed_text">Stress: {db.week.stress}</p>
            </Col>
          </Row>
          <Row>
            {db.week.days.map((day, i) => (
              <Col>
                <span>{day}</span>
              </Col>
            ))}
          </Row>
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
