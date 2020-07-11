import React from "react";
import ReactDOM from "react-dom";
import Parallax from "react-springy-parallax";
import "./index.css";
import PreBenchImg from "./images/PreBench.png";
import SquatImg from "./images/Squat.png";
import DeadliftFace from "./images/DeadliftFace.jpg";
import Banner from "./components/Banner";
import Links from "./components/Links";
import Coaching from "./components/Coaching";
import Posts from "./components/Posts";
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
        <Parallax ref="parallax" pages={3}>
          {/* Backgrounds */}
          <Parallax.Layer
            offset={0}
            speed={0}
            style={{
              backgroundImage: "url(" + PreBenchImg + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Parallax.Layer
            offset={1}
            speed={0}
            style={{
              backgroundImage: "url(" + DeadliftFace + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0}
            style={{
              backgroundImage: "url(" + SquatImg + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Parallax.Layer>

          {/* Content */}

          <Parallax.Layer offset={0} speed={1}>
            <h1
              style={{
                fontWeight: "400",
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "10vw",
              }}
            >
              {HELLO}
            </h1>
            <Banner />
          </Parallax.Layer>

          <Parallax.Layer offset={0.5} speed={1}>
            <Links />
          </Parallax.Layer>

          <Parallax.Layer offset={1.5} speed={1}>
            <Coaching />
          </Parallax.Layer>

          <Parallax.Layer offset={2.2} speed={1}>
            <Posts />
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

ReactDOM.render(<HomeScreen />, document.getElementById("root"));
