import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

const AnimalSlider = props => {
  const name = props.name.toLowerCase();
  const cycleLength = props.data[name].lifecycle.length;

  const [isMoreLifeCycle, setIsMoreLifeCycle] = useState(true);
  const [cycleNumber, setCycleNumber] = useState(0);
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    if (cycleNumber === cycleLength - 1) {
      setIsMoreLifeCycle(!isMoreLifeCycle);
    }
    return () => {
      console.log("comp unmounted");
    };
  }, [cycleNumber]);


  const nextCycle = () => {
    

    !inProp ? setInProp(!inProp) : setInProp(inProp);

    if(cycleNumber < cycleLength - 1){
      setCycleNumber(cycleNumber + 1);
    }
      else {
        setCycleNumber(cycleNumber);
        // setIsMoreLifeCycle(!isMoreLifeCycle)
      }
    if (!isMoreLifeCycle) props.history.push("/App");
    console.log(cycleNumber, cycleLength, isMoreLifeCycle);

  };

  const prevCycle = () => {
    cycleNumber > 0
      ? setCycleNumber(cycleNumber - 1)
      : setCycleNumber(cycleNumber);

    if (cycleNumber < cycleLength && !isMoreLifeCycle) {
      setIsMoreLifeCycle(!isMoreLifeCycle);
    }
    console.log(cycleNumber, cycleLength, isMoreLifeCycle);

  };

  const index = cycleNumber;
  const animal = props.data[name];
  return (
    <React.Fragment>
      <TransitionGroup>
        <CSSTransition
          in={inProp}
          key={uuid.v4()}
          appear={false}
          timeout={1000}
          classNames="animal"
        >
          <div className="animal">
            <h1 className="bangersFont"> {name} Life cycle!</h1>
            <figure>
              <img
                src={animal.lifecycle[index].image}
                className="cycleImg"
                alt={name}
                key={uuid.v4()}
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
