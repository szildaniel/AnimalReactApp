import React from "react";
import Tile from "./Tile";

class App extends React.Component {
  handleClick = () => {
    this.props.history.push("/monkey");
  };
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Tile name="Frog" uClass="tileFrog" />
          <Tile name="Butterfly" uClass="tileButterfly" />
          <Tile name="Bat" uClass="tileBat" />
        </div>
      </div>
    );
  }
}

export default App;
