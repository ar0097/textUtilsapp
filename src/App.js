import './App.css';
import React,{useState} from 'react'
import Textnav from './Components/Textnav';
import Textarea from './Components/Textarea';

function App() {
  
  const [mode, setMode] = useState({
    color:"black",
    backgroundColor:"white"
  })
  const onchange = ()=>{
    if(mode.color === "black"){
      setMode({
        color:"white",
        backgroundColor:"Navy"
      })
      
    }
    else{
      setMode({
        color:"black",
        backgroundColor:"white"
      })
      
    }
  }
  return (
    <>
    <div style={mode}>
    <Textnav onchange={onchange} title="MyTextutils" mode={mode} home="Home"/>
    <Textarea heading="Enter the Text to analyze below" />
    </div>
    </>
  );
}

export default App;