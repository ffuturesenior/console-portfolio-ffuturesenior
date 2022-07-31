import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { activateAnyComand, WriteInputedCommand } from './redux/store/consoleOutputReducer';

function App() {

  const [actionType,setActionType]=useState('')
  const messages=useSelector(state=>state.consoleOutput.messages)
  const dispatch=useDispatch()
  

  function completeAction(e){
    if(e.key=='Enter'){
      dispatch(WriteInputedCommand({text:actionType,isComand:true}))
      dispatch(activateAnyComand(actionType))
      setActionType('')
    }
    //setActionType('')
  }


  return (
    <div className="App">
      {messages.map((p,i)=>
        <div key={i}>
        {p.isComand?
            <div>
              <p>{`>`}{p.text}</p>
            </div>
          :
            <div style={{padding:"0px 10px"}}>
              <p>{p.text}</p>
            </div>
        }
        </div>
        
        
      )}
     <div style={{display:'flex'}}> <p>$</p><input value={actionType} onKeyDown={(e)=>completeAction(e)} onChange={(e)=>setActionType(e.target.value)}/></div>
    </div>
  );
}

export default App;
