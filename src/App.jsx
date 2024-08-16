import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/reducers/counterSlice";
import Home from "./pages/home";
const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p className="text-red-500">app</p>
      <div>
       <Home/>
      </div>
    </div>
  );
};

export default App;
