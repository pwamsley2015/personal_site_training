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

class HomeScreen extends React.Component {
  render() {
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

          <Parallax.Layer offset={3.2} speed={0}>
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

          <Parallax.Layer offset={0.85} speed={2}>
            <Banner />
          </Parallax.Layer>

          <Parallax.Layer offset={1.05} speed={0}>
            <Links style={{ position: "fixed", zIndex: "9999" }} />
          </Parallax.Layer>

          <Parallax.Layer offset={1.15} speed={3}>
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
