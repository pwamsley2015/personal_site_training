import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Coaching from "./components/Coaching";
import Posts from "./components/Posts";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Coaching />
      <Posts />
    </div>
  );
}

export default App;
