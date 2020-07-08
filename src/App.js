import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Coaching from "./components/Coaching";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <About />
      <Coaching />
      <Posts />
    </div>
  );
}

export default App;
