import React from "react";
import InstagramEmbed from "react-instagram-embed";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";

const POSTS = [
  {
    title: "Hello World",
    url: "https://www.instagram.com/p/B53qLjjAVDpfYg6K8UWZNIjHe-aA8khceh85fY0/",
    text: "Ted Talk here",
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
        }}
      >
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
                maxWidth={600}
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
