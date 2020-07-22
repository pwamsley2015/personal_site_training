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
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Deadlift Image -- coaching section */}
          <Parallax.Layer
            offset={1}
            speed={0}
            style={{
              backgroundImage: "url(" + DeadliftFace + ")",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          ></Parallax.Layer>

          <Parallax.Layer offset={2} speed={0}>
            <div id="log">
              <Log style={{ maxHeight: "100%" }} />
            </div>
          </Parallax.Layer>

          <Parallax.Layer offset={3} speed={0}>
            <div id="posts">
              <Posts />
            </div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={4}
            speed={2}
            style={{
              backgroundImage: "url(" + SquatImg + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Parallax.Layer>
          <Parallax.Layer
            offset={4.8}
            speed={15}
            style={{ textAlign: "center" }}
          >
            <span className="overlay_text">You hit depth.</span>
          </Parallax.Layer>

          {/* Overlays */}

          {/* Hi, I'm Patrick */}
          <Parallax.Layer offset={0.35} speed={0.3}>
            <h1 className="overlay_header">{HELLO}</h1>
          </Parallax.Layer>

          <Parallax.Layer offset={0.9} speed={2}>
            <Banner />
          </Parallax.Layer>

          <Parallax.Layer offset={1.03} speed={-0.5}>
            <Links style={{ position: "fixed", zIndex: "9999" }} />
          </Parallax.Layer>

          <Parallax.Layer offset={1.1} speed={0.5}>
            <div id="coaching">
              <Coaching />
            </div>
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

ReactDOM.render(<HomeScreen />, document.getElementById("root"));
