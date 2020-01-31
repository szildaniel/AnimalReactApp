import React, { useState, useReducer } from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const initialState = {
  i: 0,
};

function reducer(state, action) {
  if (action.type === "increment") {
    if (state.i < state.length-1) {
      return { ...state, i: state.i + 1 };
    } 
    else { 
      return {
        ...state
      };
    }
  }
  if (action.type === "decrement") {
    return { ...state, i: state.i - 1 };
  }
}

const AnimalSlider = props => {
  const name = props.name.toLowerCase();
  const cycleLength = props.data[name].lifecycle.length;

  function newState() {
    return {
      i: 0,
      name: name,
      length: cycleLength,
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState, newState);

  const [inProp, setInProp] = useState(false);

  const { image, cycleName, desc } = props.data[name].lifecycle[state.i];

  return (
    <React.Fragment>
      <TransitionGroup>
        <CSSTransition
          in={inProp}
          key={state.i}
          appear={false}
          timeout={1000}
          classNames="animal"
        >
          <div className="animal">
            <h1 className="bangersFont"> {name} Life cycle!</h1>
            <figure>
              <img src={image} className="cycleImg" alt={name}/>
              <figcaption>{cycleName}</figcaption>
            </figure>

            <p>{desc}</p>
          </div>
        </CSSTransition>
      </TransitionGroup>

      <div className="btnContainer">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="btnLifeCycle btnNav left"
          disabled={state.i === 0}
        >
          <FontAwesomeIcon icon="arrow-left" />
        </button>

        {(state.i !== state.length-1) ?
          <button onClick={() => dispatch({ type: "increment" })}
                  className="btnLifeCycle right btnNav">
            <FontAwesomeIcon icon="arrow-right" />
          </button>
          :
          <button
          onClick={() => props.history.push('/App')}
          className="btnLifeCycle right btnNav">
            Back to App
          </button>
         }
      </div>
    </React.Fragment>
  );
};

export default withRouter(AnimalSlider);
