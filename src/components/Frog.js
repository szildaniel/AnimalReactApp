import React from "react";

class Frog extends React.Component {
  state = {
    cycleNumber: 1,
  }
  nextCycle = () => {
    console.log('there gonna be function')
  }
  render() {
    const frog = this.props.location.state.butterfly;
    console.log(frog.name);

    return (
      <React.Fragment>
        <div className="animal">
          <h1>
            {frog.four.cycleName}
          </h1>
          <img src={frog.four.image} className="cycleImg" alt={frog.name} />
          <p>{frog.four.desc}</p>
          <button onClick={this.nextCycle} className="btnLifeCycle">Next</button>

        </div>
      </React.Fragment>
    );
  }
}

export default Frog;
