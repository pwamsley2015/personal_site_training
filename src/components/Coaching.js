import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
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
    const pStyle = {
      backgroundColor: "DarkSlateGray",
      fontSize: "6vw",
      lineSpacing: "150%",
      borderStyle: "solid",
      borderRadius: "3px",
      borderColor: "SlateGray",
    };
    return (
      <div
        style={{
          color: "white",
          textAlign: "center",
          width: "80%",
          margin: "auto",
          padding: "1vw",
        }}
      >
        <h1 style={{ fontSize: "11vw" }}>Need a coach?</h1>
        <hr />
        <p style={pStyle}>{myOffer}</p>
        <p style={pStyle}>{myProgramming}</p>
        <p style={pStyle}>{myPhilosophy}</p>
        <hr />
        <Button
          variant="secondary"
          size="lg"
          href="https://forms.gle/XjwL4DDavFszQRZW9"
          target="_blank"
          style={{
            fontSize: "9vw",
            borderRadius: "1vw",
            borderStyle: "solid",
            borderColor: "DarkSlateGray",
          }}
        >
          Get in touch &#8594;
        </Button>
      </div>
    );
  }
}
