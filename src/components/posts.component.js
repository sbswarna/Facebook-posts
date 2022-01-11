import React, { Component } from "react";
import Navbar from "./navbar.component";
import Post from "./post.component";

class Posts extends React.Component {
  state = {
    totalNumberOfLikes: 0,
    totalNumberOfDislikes: 0,
    posts: [
      {
        post_id: 1,
        date_posted: "01 January 2022",
        time_posted: "12:01 PM",
        img: require("../images/img1.jpeg"),
        is_liked: false,
        is_disliked: false,
      },
      {
        post_id: 2,
        date_posted: "07 October 2021",
        time_posted: "10:41 AM",
        img: require("../images/img2.jpeg"),
        is_liked: false,
        is_disliked: false,
      },
      {
        post_id: 3,
        date_posted: "10 June 2021",
        time_posted: "04:01 PM",
        img: require("../images/img3.jpeg"),
        is_liked: false,
        is_disliked: false,
      },
      {
        post_id: 4,
        date_posted: "23 April 2020",
        time_posted: "11:01 AM",
        img: require("../images/img4.jpeg"),
        is_liked: false,
        is_disliked: false,
      },
      {
        post_id: 5,
        date_posted: "01 May 2019",
        time_posted: "09:17 PM",
        img: require("../images/img5.jpeg"),
        is_liked: false,
        is_disliked: false,
      },
    ],
  };

  removePost = (postID) => {
    postID = parseInt(postID);
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.post_id === postID);

    if (post.is_liked === true) this.decreaseTotalNumberofLikes();
    if (post.is_disliked === true) this.decreaseTotalNumberofDislikes();

    const updatedPosts = posts.filter((post) => {
      return post.post_id === postID ? false : true;
    }, postID);
    this.setState({ posts: updatedPosts });
  };

  addNewPost = () => {
    console.log('Post Added')
  };

  increaseTotalNumberofLikes = () => {
    this.setState({ totalNumberOfLikes: this.state.totalNumberOfLikes + 1});
  };

  decreaseTotalNumberofLikes = () => {
    this.setState({ totalNumberOfLikes: this.state.totalNumberOfLikes - 1 });
  };

  increaseTotalNumberofDislikes = () => {
    this.setState({ totalNumberOfDislikes: this.state.totalNumberOfDislikes + 1 });
  };

  decreaseTotalNumberofDislikes = () => {
    this.setState({ totalNumberOfDislikes: this.state.totalNumberOfDislikes - 1});
  };

  handleToggleLike = (postID) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.post_id === postID);
    post.is_liked = !post.is_liked;
    if (post.is_liked === true) this.increaseTotalNumberofLikes();
    else this.decreaseTotalNumberofLikes();
    if (post.is_disliked === true) {
      this.decreaseTotalNumberofDislikes();
      post.is_disliked = !post.is_disliked;
    }
    this.setState({ posts });
  };

  handleToggleDislike = (postID) => {
    const posts = [...this.state.posts];
    const post = posts.find((post) => post.post_id === postID);
    post.is_disliked = !post.is_disliked;
    if (post.is_disliked === true) this.increaseTotalNumberofDislikes();
    else this.decreaseTotalNumberofDislikes();
    if (post.is_liked === true) {
      this.decreaseTotalNumberofLikes();
      post.is_liked = !post.is_liked;
    }
    this.setState({ posts });
  };

  render() {
    return (
      <>
        <Navbar
          totalNumberOfLikes={this.state.totalNumberOfLikes}
          totalNumberOfDislikes={this.state.totalNumberOfDislikes}
        />

        <div>
          <button
            className="btn btn-outline-primary mx-4 mt-4"
            onClick={this.addNewPost}
          >
            Add New Post
          </button>
        </div>

        <div className="d-flex flex-wrap justify-content-left">
          {this.state.posts.map((post, index) => {
            return (
              <>
                <div className="m-4">
                  <Post
                    key={index}
                    post={post}
                    postID={post.post_id}
                    removePost={this.removePost}
                    handleToggleLike={this.handleToggleLike}
                    handleToggleDislike={this.handleToggleDislike}
                    increaseTotalNumberofDislikes={
                      this.increaseTotalNumberofDislikes
                    }
                    decreaseTotalNumberofDislikes={
                      this.decreaseTotalNumberofDislikes
                    }
                    increaseTotalNumberofLikes={this.increaseTotalNumberofLikes}
                    decreaseTotalNumberofLikes={this.decreaseTotalNumberofLikes}
                  />
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default Posts;
