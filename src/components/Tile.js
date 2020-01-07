import React from "react";

class Tile extends React.Component {
    state = {
        isActive: false
      };
  clickHandler = () => {
    const currentState = this.state.isActive;
    this.setState({ isActive: !currentState });

  };
  render() {
    return (
      <div
        onClick={this.clickHandler}
        // className={`tile ${this.props.uClass}`}>
         className={
          this.state.isActive
            ? `tile open ${this.props.uClass}`
            : `tile ${this.props.uClass}`}
    
      > 
        <p>That</p>
        <p>is</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Tile;
