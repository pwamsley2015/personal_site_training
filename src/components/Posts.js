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
          flexDirection: "column",
        }}
      >
        <h1 className="header">Posts</h1>

        <hr />
        <Carousel>
          {POSTS.map((post, i) => (
            <Carousel.Item>
              <h1 className="header_smaller">{post.title}</h1>
              <InstagramEmbed
                url={post.url}
                maxWidth={1000}
                containerTagName="div"
                injectScript
                protocol=""
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
              <hr />
              <h3 className="boxed_text">{post.text}</h3>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
