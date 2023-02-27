import React from "react";
import { Card, Button } from "react-bootstrap";

const truncateString = (str, num) => {
  if (str.length <= num - 3) {
    return str;
  }
  return str.slice(0, num) + "...";
};

const stripHtml = (htmlStr) => htmlStr.replace(/<[^>]+>/g, "");

const PostCard = ({ post }) => {
  return (
    <Card
      className="post-card"
      style={{
        width: "18rem",
        marginBottom: "20px",
        maxHeight: "400px",
        minHeight: "400px",
        margin: "30px",
      }}
    >
      <Card.Img
        variant="top"
        src={post.jetpack_featured_media_url}
        height={150}
        width={150}
        className="post-card-img"
      />
      <Card.Body>
        <Card.Title>
          {truncateString(stripHtml(post.title.rendered), 50)}
        </Card.Title>
        <Card.Text>
          {truncateString(stripHtml(post.excerpt.rendered), 100)}
        </Card.Text>
        <Button variant="primary" href={post.link}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
