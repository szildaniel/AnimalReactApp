import React, { useState } from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimalSlider = props => {

  const [isMoreLifeCycle, setIsMoreLifeCycle] = useState(true);
  const [cycleNumber, setCycleNumber] = useState(0);

  const [inProp, setInProp] = useState(false);

  const nextCycle = () => {

    setInProp(!inProp);

    const name = props.name.toLowerCase();
    const lifeCycleArrLength = props.data[name].lifecycle.length;

    if (cycleNumber + 1 < lifeCycleArrLength) {
      setCycleNumber(cycleNumber + 1);
      console.log(isMoreLifeCycle, lifeCycleArrLength, cycleNumber);
    } else {
      setCycleNumber(cycleNumber);
      setIsMoreLifeCycle(!isMoreLifeCycle);
    }

    if (!isMoreLifeCycle) props.history.push("/App");
  };

  const prevCycle = () => {
    cycleNumber > 0
      ? setCycleNumber(cycleNumber - 1)
      : setCycleNumber(cycleNumber);
    const name = props.name.toLowerCase();
    const lifeCycleArrLength = props.data[name].lifecycle.length;

    if (cycleNumber < lifeCycleArrLength && !isMoreLifeCycle) {
      setIsMoreLifeCycle(!isMoreLifeCycle);
    }
  };

  const name = props.name.toLowerCase();
  const index = cycleNumber;

  const animal = props.data[name];

  return (
    <React.Fragment>
      <TransitionGroup>
        <CSSTransition in={inProp} timeout={1000} classNames="animal">
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
        </CSSTransition>
      </TransitionGroup>

      <div className="btnContainer">
        <button
          onClick={prevCycle}
          className="btnLifeCycle btnNav left"
          disabled={cycleNumber === 0}
        >
          <FontAwesomeIcon icon="arrow-left" />
        </button>
        <button onClick={nextCycle} className="btnLifeCycle right btnNav">
          {isMoreLifeCycle ? (
            <FontAwesomeIcon icon="arrow-right" />
          ) : (
            "Back to App"
          )}
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(AnimalSlider);
