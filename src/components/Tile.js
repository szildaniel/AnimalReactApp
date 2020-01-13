import React from "react";
import Button from "./Button";
import { randomAdj, adjectives } from "../helper";

class Tile extends React.Component {
  state = {
    isActive: false,
    isOpenActive: false
  };
 
  toggleActive = () => {
    const currentState = this.state.isActive;
    this.setState({ isActive: !currentState });
    // console.log(currentState);
  };

  toggleOpenActive = event => {
    // I have two transition font-size and flex-grow, when both
    //  of them fires up, state is changing twice, so i decide to choose one
    if (event.propertyName === "flex-grow") {
      const currentState = this.state.isOpenActive;
      this.setState({ isOpenActive: !currentState });
    }
  };
  render() {
    return (
      <div
        onTransitionEnd={this.toggleOpenActive}
        onClick={this.toggleActive}
        className={
          this.state.isActive && !this.state.isOpenActive
            ? `tile open ${this.props.uClass}`
            : this.state.isActive && this.state.isOpenActive
            ? `tile open open-active ${this.props.uClass}`
            : `tile ${this.props.uClass}`
        }
      >
        <p> {randomAdj(adjectives)} </p>
        <p>{this.props.name}</p>
        <p>
          <Button name={this.props.name} goTo={this.props.goTo}/>
        </p>
      </div>
    );
  }
}

export default Tile;
