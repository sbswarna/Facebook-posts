import React, { Component } from "react";

class Like extends React.Component {
  state = {
    isHovered: false,
  };

  handleHover = () => {
    this.setState({ isHovered: true });
  };

  handleOut = () => {
    this.setState({ isHovered: false });
  };

  getClassName = () => {
    const { isLiked } = this.props;
    const { isHovered } = this.state;
    let className = isLiked
      ? "bi bi-hand-thumbs-up-fill"
      : "bi bi-hand-thumbs-up";
    className += isHovered ? " text-primary" : "";
    return className;
  };

  handleToggleLike = () => {
    this.props.handleToggleLike(this.props.postID);
  };

  render() {
    return (
      <>
        <i
          onMouseOver={this.handleHover}
          onMouseOut={this.handleOut}
          onClick={this.handleToggleLike}
          className={this.getClassName()}
        ></i>
      </>
    );
  }
}

export default Like;
