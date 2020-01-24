import React from "react";

class Button extends React.Component {
  openLifecycle = () => {
    const animalName = this.props.name;
    const animals = this.props.animals;
    
    this.props.goTo(animalName, animals);
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
