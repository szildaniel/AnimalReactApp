import React from "react";
import Tile from "./Tile";
import Welcome from "./Welcome";

class Starter extends React.Component {
    startApp = () => {
        this.props.history.push(`/App`);
    }
  render() {
    return (
      <React.Fragment>
        <Welcome startApp={this.startApp}/>
        <div className="wrapper gray">
          <div className="container">
            <Tile name="Frog" uClass="tileFrog" />
            <Tile name="Ladybug" uClass="titleLadybug" />
            <Tile name="Butterfly" uClass="tileButterfly" />
            <Tile name="Bee" uClass="titleBee" />
            <Tile name="Bat" uClass="tileBat" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Starter;
