import React from "react";
import Button from "./Button";

class Tile extends React.Component {
    state = {
        isActive: false,
        showButton: false,
      };


  clickHandler = () => {
    const currentState = this.state.isActive;
    this.setState({ isActive: !currentState });
  };

  toggleOpenActive = (event) => {
    console.log(event);
    const theState = this.state.showButton;
    this.setState({ showButton: !theState})
    console.log('transitionEnd')
  }
  render() {
    return (
      <div
        onTransitionEnd={this.toggleOpenActive}
        onClick={this.clickHandler}

         className={
          this.state.isActive
            ? `tile open ${this.props.uClass}`
            : `tile ${this.props.uClass}`}
    
      > 
        <p>That is</p>
        <p>{this.props.name}</p>
        <Button />
      </div>
    );
  }
}

export default Tile;
