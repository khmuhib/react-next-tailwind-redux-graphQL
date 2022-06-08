import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../store/counterSlice";

function Increment() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
        className="bg-green-500 px-5 py-2 rounded-sm m-5"
      >
        Increment
      </button>
    </div>
  );
}

export default Increment;
