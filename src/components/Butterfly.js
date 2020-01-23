import React from 'react';

class Butterfly extends React.Component{
    state = {
        cycleNumber: 0,
        isMoreLifecycle: true
      };
    
      nextCycle = () => {
        const lifeCycleArrLength = this.props.location.state.butterfly.lifecycle.length;
    
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
    
        const lifeCycleArrLength = this.props.location.state.butterfly.lifecycle.length;
    
        if (this.state.cycleNumber < lifeCycleArrLength) {
          this.setState({ isMoreLifecycle: true });
        }
      };
    
      render() {
        const butterfly = this.props.location.state.butterfly;
        const index = this.state.cycleNumber;
        return (
          <React.Fragment>
            <div className="animal">
              <h1 className="bangersFont"> Butterfly Life cycle!</h1>
              <figure>
                <img
                  src={butterfly.lifecycle[index].image}
                  className="cycleImg"
                  alt={butterfly.name}
                />
                <figcaption>{butterfly.lifecycle[index].cycleName}</figcaption>
              </figure>
    
              <p>{butterfly.lifecycle[index].desc}</p>
    
            </div>
    
            <div className="btnContainer">
                <button onClick={this.prevCycle} className="btnLifeCycle btnNav">
                  Prev
                </button>
                <button onClick={this.nextCycle} className="btnLifeCycle btnNav">
                  {this.state.isMoreLifecycle ? "Next" : "Back to App"}
                </button>
              </div>
          </React.Fragment>
        );
      }
}

export default Butterfly;