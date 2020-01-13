import React from "react";

class Button extends React.Component {
  openLifecycle = () => {
    const animalName = this.props.name;
    console.log(animalName);
    this.props.goTo(animalName);
  } 
  render() {
    return (
      <button
        type="button"
        onClick={this.openLifecycle}
        className="btnLifeCycle"
      >
        Life cycle
      </button>
    );
  }
}

export default Button;
