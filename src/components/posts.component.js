import React, { Component } from "react";
import NewPostForm from "./new-post-form.component";
import Post from "./post.component";

class Posts extends React.Component {
  state = {
    displayForm: false,
    posts: [
      {
        post_id: 1,
        date_posted: "2022-01-01",
        time_posted: "12:01 AM",
        img: require("../images/img1.jpeg"),
        post_body: "Post Body",
        is_liked: false,
        is_disliked: false,
      },
      {
        post_id: 2,
        date_posted: "2021-10-07",
        time_posted: "10:41 PM",
        img: require("../images/img1.jpeg"),
        post_body: "Post Body",
        is_liked: false,
        is_disliked: false,
      },
      {
        post_id: 3,
        date_posted: "2021-06-10",
        time_posted: "04:01 PM",
        img: require("../images/img1.jpeg"),
        post_body: "Post Body",
        is_liked: false,
        is_disliked: false,
      },
      {
        post_id: 4,
        date_posted: "2020-04-23",
        time_posted: "11:01 AM",
        img: require("../images/img1.jpeg"),
        post_body: "Post Body",
        is_liked: false,
        is_disliked: false,
      },
      {
        post_id: 5,
        date_posted: "2019-05-01",
        time_posted: "09:17 AM",
        img: require("../images/img1.jpeg"),
        post_body: "Post Body",
        is_liked: false,
        is_disliked: false,
      },
    ],
  };

  removePost = (postID) => {
    postID = parseInt(postID);
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.post_id === postID);

    if (post.is_liked === true) this.props.decreaseTotalLikes();
    if (post.is_disliked === true) this.props.decreaseTotalDislikes();

    const updatedPosts = posts.filter((post) => {
      return post.post_id === postID ? false : true;
    }, postID);
    this.setState({ posts: updatedPosts });
  };

  addNewPost = (newPost) => {
    this.displayPostForm();
    
    const time = newPost.time_posted.split(":");
    let hours, minutes, meridian;
    hours = time[0];
    minutes = time[1];
    if (hours > 12) {
      meridian = "PM";
      hours -= 12;
    } else if (hours < 12) {
      meridian = "AM";
      if (hours === 0) {
        hours = 12;
      }
    } else {
      meridian = "PM";
    }
    
    const posts = [...this.state.posts];
    const post = {
      post_id: posts.length > 0 ? posts[posts.length - 1].post_id + 1 : 1,
      date_posted: newPost.date_posted,
      time_posted: hours + ":" + minutes + " " + meridian,
      img: require("../images/img1.jpeg"),
      post_body: newPost.post_body,
      is_liked: newPost.is_liked,
      is_disliked: newPost.is_disliked,
    };
    posts.push(post);
    this.setState({ posts });
  };

  displayPostForm = () => {
    this.setState({ displayForm: !this.state.displayForm });
  };

  handleToggleLike = (postID) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.post_id === postID);
    post.is_liked = !post.is_liked;

    if (post.is_liked === true) this.props.increaseTotalLikes();
    else this.props.decreaseTotalLikes();

    if (post.is_disliked === true) {
      this.props.increaseTotalDislikes();
      post.is_disliked = !post.is_disliked;
    }

    this.setState({ posts });
  };

  handleToggleDislike = (postID) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.post_id === postID);
    post.is_disliked = !post.is_disliked;

    if (post.is_disliked === true) this.props.increaseTotalDislikes();
    else this.props.decreaseTotalDislikes();

    if (post.is_liked === true) {
      this.props.decreaseTotalLikes();
      post.is_liked = !post.is_liked;
    }

    this.setState({ posts });
  };

  render() {
    return (
      <>
        <div>
          <button
            className="btn btn-outline-primary mx-4 mt-4"
            onClick={this.displayPostForm}
          >
            Add New Post
          </button>
          {this.state.displayForm === true ? (
            <NewPostForm addNewPost={this.addNewPost} />
          ) : (
            ""
          )}
        </div>

        <div className="d-flex flex-wrap justify-content-left">
          {this.state.posts.map((post, index) => {
            return (
              <React.Fragment key={index}>
                <div className="m-4">
                  <Post
                    post={post}
                    postID={post.post_id}
                    removePost={this.removePost}
                    handleToggleLike={this.handleToggleLike}
                    handleToggleDislike={this.handleToggleDislike}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </>
    );
  }
}

export default Posts;
