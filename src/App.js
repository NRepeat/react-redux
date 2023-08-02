import React from "react";
import { connect } from "react-redux";
import "./App.css";
import * as ActionCreators from "./redux/actions/actionCreaters";

function App(props) {
  const { counter, dispatch, step } = props;
  const decrement = () => {
    const decrementAction = ActionCreators.decrement();

    dispatch(decrementAction);
  };

  const increment = () => {
    const incrementtAction = ActionCreators.increment();

    dispatch(incrementtAction);
  };
  const changeStep = ({ target: { value } }) => {
    const setStepAction = ActionCreators.increasStep(Number(value));

    dispatch(setStepAction);
  };
  return (
    <div>
      <p>Current count is {counter}</p>
      <div>
        <label>
          Step is <input value={step} onChange={changeStep} />
        </label>
      </div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    step: state.step,
  };
}

export default connect(mapStateToProps)(App);
