import classes from './Counter.module.css';
import {useSelector} from 'react-redux'
import store, { increase, decrease, toggle } from '../store/index'

const Counter = () => {
  const counter = useSelector(store => store.counter.value);
  const showCounter = useSelector(store => store.counter.showCounter);
 
  const toggleCounterHandler = () => { store.dispatch(toggle())};
  const increaseCounterHandler = () => { store.dispatch(increase())};
  const decreaseCounterHandler = () => { store.dispatch(decrease())};

  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&  <div className={classes.value}>{counter}</div>}
      <button onClick={increaseCounterHandler}>Increase</button>
      <button onClick={decreaseCounterHandler}>Decrease</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
