import React from "react";
import Carousel from "react-bootstrap/Carousel";
import InstagramEmbed from "react-instagram-embed";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../index.css";

const POSTS = [
  {
    title: "Hello World",
    url: "https://www.instagram.com/p/B53qLjjAVDpfYg6K8UWZNIjHe-aA8khceh85fY0/",
    text:
      "Ted Talk here. This should be a few sentences, maybe even longer. One could argue this could take up a solid paragraph. It won't be too long though, because I'm too lazy to write that much. Actually, I don't mind writing a lot if it's something I care about... and I care about training... so...?",
  },
  {
    title: "Finishing a cut",
    url: "https://www.instagram.com/p/B53qLjjAVDpfYg6K8UWZNIjHe-aA8khceh85fY0/",
    text: "Ted Talk 2.0 here",
  },
];

export default class Posts extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: "auto",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          width: "fit-content",
          color: "white",
          flexDirection: "column",
        }}
      >
        <Jumbotron
          style={{
            // backgroundImage: "url(" + BG_IMG + ")",
            backgroundColor: "DarkSlateGray",
            width: "80vw",
            height: "auto",
            margin: "auto",
            color: "white",
            padding: "10px",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
          }}
        >
          <h1 style={{ fontSize: "15vw" }}>Posts</h1>
        </Jumbotron>
        <hr />
        <Carousel>
          {POSTS.map((post, i) => (
            <Carousel.Item>
              <h1
                style={{
                  backgroundColor: "SlateGray",
                  width: "fit-content",
                  margin: "auto",
                  padding: "5px",
                }}
              >
                {post.title}
              </h1>
              <InstagramEmbed
                url={post.url}
                maxWidth={1000}
                hideCaption={true}
                containerTagName="div"
                injectScript
                protocol=""
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
              <h3
                style={{
                  backgroundColor: "DarkSlateGray",
                  maxWidth: "1000px",
                  width: "fit-content",
                }}
              >
                {post.text}
              </h3>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
