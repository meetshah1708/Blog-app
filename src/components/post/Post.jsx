/* eslint-disable react/prop-types*/
import { NavLink } from 'react-router-dom';
import './post.css'
export default function Post({post}) {
  const img = "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  return (
    <div className="post">
      {post.photo && <img src={img + post.photo} alt="" className="postimg" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => {
            
          <span className="postCat">{c.name}</span>
          })}
         
        </div>
      </div>
      <div className="postDate">{new Date(post.createdAt).toDateString()}</div>
      <hr />
      <NavLink to= {`/post/${post._id}`}><div className="postTitle">Lorem ipsum dolor </div></NavLink>
      <div className="postDesc">
        {post.desc}
      </div>
    </div>
  );
}
