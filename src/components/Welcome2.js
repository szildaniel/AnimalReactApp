import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <div className="info">
          <h1>Welcome in my Animal App</h1>
          <h2>Explore the beauty of Nature</h2>
          <h2>Choose Animal and see how his life cycle looks like!</h2>

          <button
            onClick={this.props.startApp}
            className="btnLifeCycle welcome-btn"
          >
            Start
          </button>
        </div>
      </div>
    );
  }
}

export default Welcome;
