import React from "react";

function CreatePost() {
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <input type="text" placeholder="タイトル" />
        </div>
        <div className="inputPost">
          <textarea placeholder="本文" />
        </div>
        <div className="inputPost">
          <button className="postButton">投稿</button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
