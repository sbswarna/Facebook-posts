import React, { useState } from "react";

function NewPostForm(props) {
  const [post, setPost] = useState({});

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setPost((values) => ({ ...values, [fieldName]: fieldValue }));
  };

  const handleSubmit = (e) => {
    props.addNewPost(post);
    e.preventDefault();
  };

  return (
    <div className="card m-4" style={{ width: "25rem" }}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group m-2">
            <label htmlFor="date_posted">Date</label>
            <input
              type="date"
              className="form-control"
              name="date_posted"
              value={post.date_posted || ""}
              placeholder="Enter date"
              onChange={ (e) => handleChange(e) }
              required
            />
          </div>

          <div className="form-group m-2">
            <label htmlFor="time_posted">Time</label>
            <input
              type="time"
              className="form-control"
              name="time_posted"
              value={post.time_posted || ""}
              placeholder="Enter Time"
              min="00:00" 
              max="23:59"
              onChange={ (e) => handleChange(e) }
              required
            />
          </div>

          <div className="form-group m-2">
            <label htmlFor="post_body">Write post</label>
            <textarea
              className="form-control"
              placeholder="Write post..."
              name="post_body"
              value={post.post_body || ""}
              onChange={ (e) => handleChange(e) }
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary m-2">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPostForm;