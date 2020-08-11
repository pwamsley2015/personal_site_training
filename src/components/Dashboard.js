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
    display: false,
    text: "Body Weight",
  },
  scales: {
    xAxes: [
      {
        // type: "time",
        // time: {
        //   unit: "day",
        // },
      },
    ],
    yAxes: [
      {
        ticks: {
          // suggestedMin: 170,
          // suggestedMax: 200,
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

  return {
    labels: Object.keys(log).map((day) => "Day " + day),
    datasets: [
      {
        label: "Raw Body Weight, #",
        data: Object.values(log),
        fill: false,
        backgroundColor: "darkslategray",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
      },
    ],
  };
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
            <Col>
              <h3 className="overlay_text_small">Body Weight</h3>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <p className="widget_boxed_text">
              Today: {getToday(this.props.log)} #
            </p>
            <p className="widget_boxed_text">{this.props.doing}</p>
            <p className="widget_boxed_text">
              On track?{" "}
              {this.props.onTrack ? (
                <span>&#x1f44d;</span>
              ) : (
                <span>&#x1f44e;</span>
              )}
            </p>
          </Row>
          <Row>
            <Col>
              {/* Graph */}
              <div className="chart">
                <Line
                  style={{ padding: "10px" }}
                  className="chart"
                  data={parseLog(this.props.log)}
                  options={bwChartOptions}
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <p className="widget_boxed_text">
              Weekly Running Average: {this.props.wra} #
            </p>
            <p className="widget_boxed_text">
              &Delta;BW &frasl; &Delta;t &#8776; {this.props.dwdt} # &frasl;
              week
            </p>
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
          <Row className="justify-content-md-center">
            This widget is currently under developement.
          </Row>
          {/* <Row>
            Deltas
            <Col>
              <p className="widget_boxed_text">&Delta;Squat</p>
              <p className="widget_boxed_text">&Delta;Bench</p>
              <p className="widget_boxed_text">&Delta;Deadlift</p>
            </Col>
            <Col>Graphs</Col>
            <Col>
              <p className="widget_boxed_text">Type:</p>
              <p className="widget_boxed_text">Week n of m</p>
              <p className="widget_boxed_text">No meet coming up.</p>
            </Col>
          </Row> */}
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
          <Row className="justify-content-md-center">
            This widget is currently under developement.
          </Row>
          {/* <Row>
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
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default class Dashboard extends React.Component {
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
    const rootRef = firebase.database().ref().child("users").child("primary");
    const bw = rootRef.child("bw");
    const weightLog = bw.child("log");
    const bwMeta = bw.child("meta");
    const doing = bwMeta.child("doing");
    const bw_wra = bwMeta.child("wra");
    const bw_dwdt = bwMeta.child("dwdt");
    const bw_track = bwMeta.child("onTrack");
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

    bw_track.on("value", (snap) => {
      this.setState({
        bw_onTrack: snap.val(),
      });
    });
  }

  render() {
    return (
      <div className="justify-content-md-center">
        <h1 className="header">The Dashboard</h1>

        <TrainingBlockWidget />
        <TrainingWeekWidget />
        <BodyWeightWidget
          doing={this.state.doing}
          log={this.state.bwLog}
          wra={this.state.bw_wra}
          dwdt={this.state.bw_dwdt}
          onTrack={this.state.bw_onTrack}
        />
      </div>
    );
  }
}
