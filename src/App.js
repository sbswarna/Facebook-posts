import React, { Component } from 'react';
import Navbar from './components/navbar.component';
import Posts from './components/posts.component';

class App extends Component {
  state = { 
    totalNumberOfLikes: 0,
    totalNumberOfDislikes: 0
  } 

  increaseTotalLikes = () => {
    this.setState({ totalNumberOfLikes: this.state.totalNumberOfLikes + 1 });
  }

  decreaseTotalLikes = () => {
    this.setState({ totalNumberOfLikes: this.state.totalNumberOfLikes - 1 });
  }

  increaseTotalDislikes = () => {
    this.setState({ totalNumberOfDislikes: this.state.totalNumberOfDislikes + 1 });
  }

  decreaseTotalDislikes = () => {
    this.setState({ totalNumberOfDislikes: this.state.totalNumberOfDislikes - 1 });
  }

  render() { 
    return (
      <>
        <Navbar
          totalNumberOfLikes={this.state.totalNumberOfLikes}
          totalNumberOfDislikes={this.state.totalNumberOfDislikes}
        />
        <Posts 
          increaseTotalLikes={this.increaseTotalLikes}
          decreaseTotalLikes={this.decreaseTotalLikes}
          increaseTotalDislikes={this.increaseTotalDislikes}
          decreaseTotalDislikes={this.decreaseTotalDislikes}
        />
      </>
    );
  }
}
 
export default App;