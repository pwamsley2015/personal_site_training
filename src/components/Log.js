import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Line } from "react-chartjs-2";
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
  week: {
    days: ["Day 1", "Day 2", "Day 3", "Day 4"],
    stress: "Low",
    song: "https://www.youtube.com/watch?v=cxkdIFOJAhw",
  },
};

const bwChartOptions = {
  title: {
    display: true,
    text: "Body Weight",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          // suggestedMin: 150,
          // suggestedMax: 300,
        },
      },
    ],
  },
};

function getToday(log) {
  const dates = Object.keys(log);
  return log[dates[dates.length - 1]];
}

function parseLog(log) {
  const dates = Object.keys(log);
  let result = [];
  dates.forEach((date) => result.push([date, log[date]]));

  return { labels: Object.keys(log), datasets: [{ data: Object.values(log) }] };
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
                Weekly Running Average: {this.props.wra}
              </p>
              <p className="widget_boxed_text">
                &Delta;BW&frasl;&Delta;t &#8776; {this.props.dwdt}
              </p>
              <hr />
              <p className="widget_boxed_text">
                Currently {this.props.doing} weight.
              </p>
            </Col>
            {/* Graph */}
            <Col>
              <Line data={parseLog(this.props.log)} options={bwChartOptions} />
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
      bw_wra: 0,
      bw_dwdt: 0,
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child("users");
    const weightLog = rootRef.child("weight_log");
    const doing = rootRef.child("bw_doing");
    const bw_wra = rootRef.child("bw_wra");
    const bw_dwdt = rootRef.child("bw_dwdt");
    doing.on("value", (snap) => {
      this.setState({ doing: snap.val() });
    });
    weightLog.on("value", (snap) => {
      console.log(snap.val());
      this.setState({
        bwLog: snap.val(),
      });
    });
    bw_wra.on("value", (snap) => {
      this.setState({
        bw_wra: snap.val(),
      });
    });

    bw_dwdt.on("value", (snap) => {
      this.setState({
        bw_dwdt: snap.val(),
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
        <BodyWeightWidget
          doing={this.state.doing}
          log={this.state.bwLog}
          wra={this.state.bw_wra}
          dwdt={this.state.bw_dwdt}
        />
      </div>
    );
  }
}
