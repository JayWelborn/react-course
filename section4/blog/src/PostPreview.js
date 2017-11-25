import React from 'react';


function PostPreviews(props){
  const posts = props.posts.map((post) =>
    <div>
      <PostPreview title={post.title} subtitle={post.subtitle} date={post.date} />
      <hr />
    </div>
  )
  console.log(posts)
  return(posts)
}


function PostPreview(props) {
  return(
    <div className="post-preview">
      <a href="post.html">
        <h2 className="post-title">
          {props.title}
        </h2>
        <SubTitle subtitle={props.subtitle} />
      </a>
      <p className="post-meta">Posted by
        <a href="#"> Start Bootstrap </a>
        on {props.date}</p>
    </div>
  );
}


function SubTitle(props){
  if (props.subtitle){
    return (
      <h3 className="post-subtitle">
        {props.subtitle}
      </h3>
    )
  } else {
    return null
  }
}

export default PostPreviews
