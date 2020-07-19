import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Parallax from "react-springy-parallax";
import Banner from "./components/Banner";
import Coaching from "./components/Coaching";
import Links from "./components/Links";
import Log from "./components/Log";
import Posts from "./components/Posts";
import DeadliftFace from "./images/DeadliftFace.jpg";
import PreBenchImg from "./images/PreBench.png";
import SquatImg from "./images/Squat.png";
import "./index.css";
const HELLO = "Hi, I'm Patrick";
const BTW = "I'm a nerdy Powerlifter.";
const ABOUT =
  "This is my deadlift face. I started training seriously (began my first decent program) early 2018. I've made some progress and learned a few things since then...";
const PRS = "Current PRs:";
const SQUAT = "500";
const BENCH = "286";
const DEADLIFT = "600";
const WHY = "This website exists because...";

class HomeScreen extends React.Component {
  render() {
    const styles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    return (
      <div>
        <Parallax ref="parallax" pages={5}>
          {/* FIRST, NON-OVERLAPS - Images, Log Section, Posts Section */}

          {/* Bench Image -- Under Hello and Banner */}
          <Parallax.Layer
            offset={0}
            speed={0}
            style={{
              backgroundImage: "url(" + PreBenchImg + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // height: "100%",
            }}
          />

          {/* Deadlift Image -- coaching section */}
          <Parallax.Layer
            offset={1}
            speed={0}
            style={{
              backgroundImage: "url(" + DeadliftFace + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // height: "100%",
            }}
          ></Parallax.Layer>

          <Parallax.Layer offset={2} speed={0.5}>
            <Log />
          </Parallax.Layer>

          <Parallax.Layer offset={3} speed={0}>
            <Posts />
          </Parallax.Layer>

          <Parallax.Layer
            offset={4}
            speed={0}
            style={{
              backgroundImage: "url(" + SquatImg + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Parallax.Layer>

          {/* Content */}

          {/* Hi, I'm Patrick */}
          <Parallax.Layer offset={0.5} speed={5}>
            <h1
              style={{
                fontWeight: "400",
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "11vw",
                padding: "5px",
                margin: "5px",
                WebkitTextStroke: "2px",
                WebkitTextStrokeColor: "black",
              }}
            >
              {HELLO}
            </h1>
          </Parallax.Layer>

          <Parallax.Layer offset={0.9} speed={5}>
            <Banner />
          </Parallax.Layer>

          <Parallax.Layer offset={1} speed={0.15}>
            <Links />
          </Parallax.Layer>

          <Parallax.Layer offset={1.25} speed={1.5}>
            <Coaching />
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

ReactDOM.render(<HomeScreen />, document.getElementById("root"));
