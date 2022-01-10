import React, { Component } from "react";

class Navbar extends React.Component {
  render() {
    const { totalNumberOfLikes, totalNumberOfDislikes } = this.props;
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <div className="d-flex justify-content-between">
            <a className="navbar-brand p-3" href="#">
              Facebook
            </a>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <p className="m-3">
                Like{" "}
                <span className="badge alert-danger">{totalNumberOfLikes}</span>
              </p>
            </div>
            <div>
              <p className="m-3">
                Dislike{" "}
                <span className="badge alert-danger">
                  {totalNumberOfDislikes}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
