import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => { };
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);
  const increment = () => {
    dispatch({ type: 'increment' });
  }
  const decrement = () => {
    dispatch({ type: 'decrement' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment}>Increment 5</button>
        <button onClick={decrement}>Decrement 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
