import React from "react";
import "../index.css";

export default class Posts extends React.Component {
  render() {
    return (
      <div
        style={{
          zIndex: "99",
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
          height: "500px",
          width: "auto",
          paddingLeft: "50px",
          paddingRight: "50px",
          textAlign: "center",
        }}
      >
        Posts down here
      </div>
    );
  }
}
