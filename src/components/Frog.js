import React from "react";

class Frog extends React.Component {
  render() {
    const frog = this.props.location.state.frog;
    console.log(frog.name);

    return (
      <div className="animal">
        <h1>That's {frog.one.cycleName} of {frog.name}</h1>
        <img src={frog.one.image} alt=""/>
        <p>{frog.one.desc}</p>
      </div>
    );
  }
}

export default Frog;
