import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  number: state
});

const CounterContainer = ({number, dispatch }) => (
  <div>
    <p>{number}</p>
    <p id="render-store"></p>
   <button id="add" onClick={() => dispatch({ type: 'ADD' })} >+</button>
   <button id="remove" onClick={() => dispatch({ type: 'REMOVE' })}>-</button>
   <button id="add10" onClick={() => dispatch({ type: 'ADD10' })}>+10</button>
   <button id="remove10"onClick={() => dispatch({ type: 'REMOVE10' })}>-10</button>
   <button id="reset" onClick={() => dispatch({ type: 'RESET' })}>reset</button>
  </div>
);

export default connect(
  mapStateToProps
)(CounterContainer);