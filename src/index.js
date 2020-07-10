import React from "react";
import ReactDOM from "react-dom";
import Parallax from "react-springy-parallax";
import "./index.css";
import PreBenchImg from "./images/PreBench.png";

const HELLO = "Hi, I'm Patrick";
const BTW = "I'm a nerdy Powerlifter";
const ABOUT =
  "I started training seriously (began my first decent program) early 2018. I've made some progress and learned a few things since then...";
const PRS = "Current PRS:";
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
            speed={1}
            style={{
              backgroundImage: "url(" + PreBenchImg + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <Parallax.Layer
            offset={1}
            speed={1}
            style={{ backgroundColor: "#243B4a" }}
          ></Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={1}
            style={{ backgroundColor: "#243BFF" }}
          ></Parallax.Layer>
          {/* Content */}
          <Parallax.Layer offset={0.65} speed={0.5}></Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

ReactDOM.render(<HomeScreen />, document.getElementById("root"));
