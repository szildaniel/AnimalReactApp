import React from "react";
import Tile from "./Tile";

class App extends React.Component {
  goTo = animalName => {
    this.props.history.push(`animal/${animalName}`);
  }
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Tile name="Frog" uClass="tileFrog" goTo={this.goTo} />
          <Tile name="Ladybug" uClass="titleLadybug" goTo={this.goTo} />
          <Tile name="Butterfly" uClass="tileButterfly" goTo={this.goTo} />
          <Tile name="Bee" uClass="titleBee" goTo={this.goTo} />
          <Tile name="Bat" uClass="tileBat" goTo={this.goTo} />
        </div>
      </div>
    );
  }
}

export default App;
