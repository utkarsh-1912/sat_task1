import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <div className="content">
        Title:
        <input
          type="text"
          name="title"
          id=""
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        Description:
        <textarea
          name="description"
          id=""
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default CreatePost;
