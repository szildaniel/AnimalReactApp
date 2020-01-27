import React from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class AnimalSlider extends React.Component {
  state = { cycleNumber: 0, isMoreLifecycle: true };
  nextCycle = () => {
    const name = this.props.name.toLowerCase();
    const lifeCycleArrLength = this.props.data[name].lifecycle.length;

    if (this.state.cycleNumber + 1 < lifeCycleArrLength) {
      this.setState({ cycleNumber: this.state.cycleNumber + 1 });
    } else {
      this.setState({
        cycleNumber: this.state.cycleNumber,
        isMoreLifecycle: false
      });
    }
    if (!this.state.isMoreLifecycle) this.props.history.push("/App");
  };

  prevCycle = () => {
    this.state.cycleNumber > 0
      ? this.setState({ cycleNumber: this.state.cycleNumber - 1 })
      : this.setState({ cycleNumber: this.state.cycleNumber });
    const name = this.props.name.toLowerCase();
    const lifeCycleArrLength = this.props.data[name].lifecycle.length;

    if (this.state.cycleNumber < lifeCycleArrLength) {
      this.setState({ isMoreLifecycle: true });
    }
  };

  render() {
    const name = this.props.name.toLowerCase();
    const index = this.state.cycleNumber;

    const animal = this.props.data[name];

    return (
      
      <React.Fragment>
        <div className="animal">
          <h1 className="bangersFont"> {name} Life cycle!</h1>
          <figure>
          

            <img
              src={animal.lifecycle[index].image}
              className="cycleImg"
              alt={name}
            />
            <figcaption>{animal.lifecycle[index].cycleName}</figcaption>
          </figure>

          <p>{animal.lifecycle[index].desc}</p>
        </div>
        <div className="btnContainer">
          <button
            onClick={this.prevCycle}
            className="btnLifeCycle btnNav left"
            disabled={this.state.cycleNumber === 0}
          >
            <FontAwesomeIcon icon="arrow-left" />
          </button>
          <button
            onClick={this.nextCycle}
            className="btnLifeCycle right btnNav"
          >
            {this.state.isMoreLifecycle ? (
              <FontAwesomeIcon icon="arrow-right" />
            ) : (
              "Back to App"
            )}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(AnimalSlider);
