import React from "react";
// import Tile from "./Tile";
// import Welcome from "./Welcome";

class Starter extends React.Component {
  startApp = () => {
    this.props.history.push(`/App`);
  };
  render() {
    return (
      <div className="welcome-container">
        <p className="speech bottom-left">Hey welcome in my React App!</p>
        <p className="speech top-right">
          Want to see how beautiful Nature made me? Click Start App and choose
          me or one of my collegue and discover our life cycle from begining.
        </p>
        <button className="btnStart">Start App</button>
      </div>
    );
  }
}

export default Starter;
