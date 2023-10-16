import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import { selectCounterValue } from "../../store/selectors/counter";
import { decrement, increment } from "../../store/reducers/counterSlice";

export default function Counter() {
  const value = useAppSelector(selectCounterValue);
  const dispatch = useAppDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}
