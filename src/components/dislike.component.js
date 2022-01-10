import React, { Component } from "react";

class Dislike extends React.Component {
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
    const { isDisliked } = this.props;
    const { isHovered } = this.state;
    let className = isDisliked
      ? "bi bi-hand-thumbs-down-fill"
      : "bi bi-hand-thumbs-down";
    className += isHovered ? " text-primary" : "";
    return className;
  };

  handleToggleDislike = () => {
    this.props.handleToggleDislike(this.props.postID);
  };

  render() {
    return (
      <>
        <i
          onMouseOver={this.handleHover}
          onMouseOut={this.handleOut}
          onClick={this.handleToggleDislike}
          className={this.getClassName()}
        ></i>
      </>
    );
  }
}

export default Dislike;
