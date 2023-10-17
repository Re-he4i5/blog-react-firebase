import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const navigate = useNavigate();

  const createPost = async () => {
    // console.log(title, body);
    await addDoc(collection(db, "posts"), {
      title: title,
      body: body,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <input
            type="text"
            placeholder="タイトル"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <textarea
            placeholder="本文"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <button className="postButton" onClick={createPost}>
            投稿
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
