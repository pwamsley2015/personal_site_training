import React from "react";
import Carousel from "react-bootstrap/Carousel";
import InstagramEmbed from "react-instagram-embed";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../index.css";

const POSTS = [
  {
    title: "Hello World",
    url:
      "https://www.instagram.com/p/B53qLjjAVDp/?utm_source=ig_embed&amp;utm_campaign=loading",
    text: "More posts coming soon!",
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
        <Carousel>
          {POSTS.map((post, i) => (
            <Carousel.Item>
              <h1 className="header_smaller">{post.title}</h1>
              <InstagramEmbed
                url={post.url}
                maxWidth={800}
                containerTagName="div"
                injectScript
                protocol=""
                hideCaption={false}
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
              <hr />
              <h3 className="boxed_text" style={{ maxWidth: "60vw" }}>
                {post.text}
              </h3>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
