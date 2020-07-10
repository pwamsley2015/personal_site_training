import React from "react";
import ReactDOM from "react-dom";
import Parallax from "react-springy-parallax";
import "./index.css";

class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <Parallax ref="parallax" pages={3}>
          <Parallax.Layer offset={0} speed={0.5}>
            Layer 0 Image
          </Parallax.Layer>
          <Parallax.Layer offset={0.5} speed={0.5}>
            Layer 1 Hi I'm Patrick
          </Parallax.Layer>
          <Parallax.Layer offset={1} speed={0.5}>
            Layer 2 Links
          </Parallax.Layer>
          <Parallax.Layer offset={1.5} speed={0.5}>
            Layer 3 Coaching
          </Parallax.Layer>
          <Parallax.Layer offset={2} speed={0.5}>
            Layer 4 Ted Talks
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

ReactDOM.render(<HomeScreen />, document.getElementById("root"));
