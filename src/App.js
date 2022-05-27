//import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import User from './User'
import './New.css';
import Classcomp from './Classcomp'
let name = 'Rahul panchal';
function App() {

  const [data,setData]=useState('rahul')
  function updateData()
  {
    setData('panchal');
   
  }



  function apple()
  {
    let data = 'name';
    alert("data");
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <User />
      <Classcomp />
      <button onClick={apple}>Click Me</button>
      <h1>{data}</h1>
     <button onClick={updateData}>Update Data</button>

    </div>


  

    
  );
}

export default App;
