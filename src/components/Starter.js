import React from "react";

class Starter extends React.Component {
  state = {
    showBubble: false,
    cursorActive: false,
  };

  startApp = () => {
    this.props.history.push(`/App`);
  };

  cursorAnimation = () => {
    const cursorActive = this.state.cursorActive;
    this.setState({cursorActive: !cursorActive})
  }
 
  componentDidMount() {
    const bubbleDelay = setTimeout(() => {
      const showBubble = this.state.showBubble;
      this.setState({ showBubble: !showBubble });
    }, 1000);

    const cursorInterval = setInterval(this.cursorAnimation, 400);
  }

  render() {
    return (
      <div className="welcome-container">
        <p className="speech bottom-left">Hey welcome in my React App!</p>
        <p
          className={
            this.state.showBubble
              ? "speech top-right"
              : "speech top-right active"
          }
        >
          <span>
            Want to see curious life cycle of different animals? Click Start App
            and see how beatiful nature made us!{" "}
            <span className={
              this.state.cursorActive
              ? "cursor active"
              : "cursor"
            }>{` |`}</span>
          </span>
        </p>
        <button onClick={this.startApp} className="btnStart">
          Start App
        </button>
      </div>
    );
  }
}

export default Starter;
