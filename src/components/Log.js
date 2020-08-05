import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Chart } from "react-charts";
import "../index.css";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVxWrRq-2t41ru4L3TmAW-EOYvX-sEOUY",
  authDomain: "friday-4eeac.firebaseio.com",
  databaseURL: "https://friday-4eeac.firebaseio.com",
  storageBucket: "friday-4eeac.firebaseio.com",
};
firebase.initializeApp(firebaseConfig);
const db = {
  bw: [180, 181, 182, 181, 180],
  bwInfo: { today: 180, wra: 181, delta: 0 },
  week: {
    days: ["Day 1", "Day 2", "Day 3", "Day 4"],
    stress: "Low",
    song: "https://www.youtube.com/watch?v=cxkdIFOJAhw",
  },
};

function getBWData(log) {
  const keys = Object.keys(log);
  const xy = keys.map((date, i) => ({ x: date, y: log[date] }));
  console.log("xy " + xy);
  return {
    label: "Body Weight",
    data: xy,
  };
}

const axes = [
  { type: "linear", position: "bottom" },
  { primary: true, type: "linear", position: "left" },
];

function getToday(log) {
  const dates = Object.keys(log);
  console.log(dates);
  return log[dates[dates.length - 1]];
}

class BodyWeightWidget extends React.Component {
  //props={doing: <gaining/cutting/maintaining>, log: {date:weight}}
  constructor(props) {
    super(props);
  }

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
              {/* <p className="widget_boxed_text">Today: {db.bwInfo.today}</p> */}
              <p className="widget_boxed_text">
                Today: {getToday(this.props.log)}
              </p>
              <p className="widget_boxed_text">
                Weekly Running Average: {db.bwInfo.wra}
              </p>
              <p className="widget_boxed_text">
                &Delta;BW&frasl;&Delta;t &#8776; {db.bwInfo.delta}
              </p>
              <hr />
              <p className="widget_boxed_text">
                Currently {this.props.doing} weight.
              </p>
            </Col>
            {/* Graph */}
            <Col>
              <div
                style={{ width: "600px", height: "300px", maxWidth: "70vw" }}
              >
                <Chart data={getBWData(this.props.log)} axes={axes} />
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
              <Col key={i}>
                <span key={i + 100}>{day}</span>
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
    this.state = {
      bwLog: 0,
      bwDoing: "",
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child("users");
    const weightLog = rootRef.child("weight_log");
    const doing = rootRef.child("bw_doing");
    doing.on("value", (snap) => {
      this.setState({ doing: snap.val() });
    });
    weightLog.on("value", (snap) => {
      console.log(snap.val());
      this.setState({
        bwLog: snap.val(),
      });
    });
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

        <TrainingBlockWidget />
        <TrainingWeekWidget />
        <BodyWeightWidget doing={this.state.doing} log={this.state.bwLog} />
      </div>
    );
  }
}
