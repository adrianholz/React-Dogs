import React, { useState } from "react";
import Enviar from "../../Assets/enviar.svg?react";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../Api";
import Error from "../Helper/Error";
import "./PhotoCommentsForm.scss";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`commentForm ${single ? "single" : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className="commentTextarea"
        id="commend"
        name="commend"
        placeholder="Comente algo..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className="commentButton">
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
