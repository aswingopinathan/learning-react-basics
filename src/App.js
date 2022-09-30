import './App.css'
import Header from './Component/Header' 
function App() {
  const data1="Aswin";
  return (
    <div>
      <Header data={data1}/>
      <p>This is sample description in p tag.</p>
      <p>The name is {data1}</p>
    </div>
  );
}
 
export default App;


 