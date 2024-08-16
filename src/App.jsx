import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/reducers/counterSlice"
import test-demo.jsx from "./pages"

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p className="text-red-500">app</p>
      <div>
        <test-demo/>
      </div>
    </div>
  );
};

export default App;
