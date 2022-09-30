import './App.css'
import {useState} from 'react'
import Counter  from './Counter';
function App() {
  const [count,setCount] = useState(0);
  const addCount = ()=>{
    setCount(count + 1);
  } 
  const obj = {
    title:'1st Counter', count,place:'Thrissur'
  }
  return (
    <div>
      <button onClick={addCount}>Add</button>
      <Counter {...obj}/>
      <Counter title='2nd Counter' count={count} place='Tvm'/>
    </div>
  );
}
 
export default App;


  