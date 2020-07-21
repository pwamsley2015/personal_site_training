import React from "react";
import "../index.css";
import "./Coaching.css";

const myOffer =
  "As your coach, I provide online programming, weekly+ checkins, lifting technique reviews, and nutrition information and strategies.";
const myProgramming =
  "My programs are individualized: each taylored to your goals and your training history. They're auto-regulated, so you can make the most of both good and bad days, and they're data-driven, so they get better over time and you make undeniable progress.";
const myPhilosophy =
  "My job is to help you reach your goals. Those goals can be to compete in powerlifting, to get jacked, or simply to improve your quality of life and health. Regardless, together we find an entry point for you to get started, and then we build from there by being consistent. I want you to enjoy training and to feel enpowered and in control of your fitness.";

export default class Coaching extends React.Component {
  render() {
    return (
      <div>
        <h1 className="overlay_header">Need a coach?</h1>
        <hr />
        <p className="boxed_text">{myOffer}</p>
        <p className="boxed_text">{myProgramming}</p>
        <p className="boxed_text">{myPhilosophy}</p>
        <hr />

        <a href="https://forms.gle/XjwL4DDavFszQRZW9" target="_blank">
          <div
            className="button"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Get in touch&#8594;
          </div>
        </a>
      </div>
    );
  }
}
