import Post from "../post/Post";
import "./posts.css";
/* eslint-disable react/prop-types*/


export default function Posts({ posts }) {

  return (
    <div className="posts col-sm-9">
      {posts.map((p) => {
        <Post post={p} />
      })}
    </div>
  );
}
