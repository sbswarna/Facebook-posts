import React, { Component } from "react";
import Dislike from "./dislike.component";
import Like from "./like.component";

class Post extends React.Component {
  render() {
    const { post_id, date_posted, time_posted, is_liked, is_disliked, img } =
      this.props.post;

    const {
      handleToggleLike,
      handleToggleDislike,
      removePost,
      increaseTotalNumberofLikes,
      decreaseTotalNumberofLikes,
      increaseTotalNumberofDislikes,
      decreaseTotalNumberofDislikes,
    } = this.props;

    return (
      <>
        <div className="card" style={{ width: "25rem" }}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="card-title">Post-{post_id}</h5>
              </div>
              <div>
                <h6 style={{ fontSize: "small" }}>
                  {time_posted}, {date_posted}
                </h6>
              </div>
            </div>
            <hr />

            <img src={img} className="img-fluid" alt="image" />
            <p className="card-text">Post Body</p>
            <hr/>
            
            <div className="d-flex justify-content-between">
              <div>
                <textarea
                  className="form-control"
                  placeholder="Write your comment..."
                ></textarea>
              </div>

              <div>
                <Like
                  handleToggleLike={handleToggleLike}
                  increaseTotalNumberofLikes={increaseTotalNumberofLikes}
                  decreaseTotalNumberofLikes={decreaseTotalNumberofLikes}
                  isLiked={is_liked}
                  postID={post_id}
                />
              </div>

              <div>
                <Dislike
                  handleToggleDislike={handleToggleDislike}
                  increaseTotalNumberofDislikes={increaseTotalNumberofDislikes}
                  decreaseTotalNumberofDislikes={decreaseTotalNumberofDislikes}
                  isDisliked={is_disliked}
                  postID={post_id}
                />
              </div>
            </div>
            <br/>
            <div>
              <button
                className="btn btn-outline-primary"
                style={{ fontSize: "medium", width: "100%" }}
                onClick={() => removePost(post_id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Post;
