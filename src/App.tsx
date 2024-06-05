import './App.css';
import {useCountStore} from './store/bearStore';

function App() {
  const {count, increment, decrement} = useCountStore();
  return (
    <div className='container'>
      <h4>bear:{count}</h4>
      <button onClick={()=>increment(1)}>increment</button>
      <button onClick={()=>decrement(1)}>decrement</button>
    </div>
  )
}

export default App;
