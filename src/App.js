import './App.css'
import Employee from './Employee';
function App() {
  
 let emp = [{name:'Aswin',age:26},
 {name:'Abhi',age:24},
 {name:'Abinav',age:22}]
  return (
    <div>
      {
        emp.map((obj,index)=>{
          return(
            <Employee key={index} {...obj} />
          )
        })
      }
    </div>
  );
}
 
export default App;


  