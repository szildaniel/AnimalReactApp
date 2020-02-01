import React from "react";

class Starter extends React.Component {
  state = {
    showBubble: false,
    cursorActive: false
  };

  startApp = () => {
    this.props.history.push(`/App`);
  };

  componentDidMount() {
    this.bubbleDelay = setTimeout(() => {
      const showBubble = this.state.showBubble;
      this.setState({ showBubble: !showBubble });
    }, 1200);
  }
  componentWillUnmount() {
    window.clearTimeout(this.bubbleDelay);
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
          Have you ever wonder how larva transform to beautiful butterfly ?
          Click Start App choose animal and discover fascinating facts about them.
        </p>
        <button onClick={this.startApp} className="btnStart">
          Start App
        </button>
      </div>
    );
  }
}

export default Starter;
