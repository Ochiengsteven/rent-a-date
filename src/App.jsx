import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/reducers/counterSlice";
import Home from "./pages/home";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Home />
      <p className="text-red-500">app</p>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
