import './App.css'
import Counter from './Counter';
import {useState} from 'react'
function App() {
  const [state,setState] = useState()
  return (
    <div>
      <h1 onClick={()=>{setState(!state)}}>View hidden </h1>
      {/* { state ? <Counter/> : null} */}
      {/* easy method below */}
      { state && <Counter/>}
    </div>
  );
}
 
export default App;


  