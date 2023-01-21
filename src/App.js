import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getDataReq } from './redux/asyncFunctions.js/getAnyData';
import { activateAnyComand, WriteInputedCommand } from './redux/store/consoleOutputReducer';
import { activateToggleCommand } from './redux/store/getDataReducer';

function App() {

  const [actionType,setActionType]=useState('')
  const [getLink,setGetLink]=useState()
  const messages=useSelector(state=>state.consoleOutput.messages)
  const dispatch=useDispatch()
  const getToggle=useSelector(state=>state.getData.toggle)

  function completeAction(e){
    if(e.key=='Enter'){
      if(actionType=='get'){
        dispatch(activateToggleCommand(actionType.toLowerCase().trim()))
        setActionType('')
        setGetLink('')
      }
      dispatch(WriteInputedCommand({text:actionType,isComand:true}))
      dispatch(activateAnyComand(actionType.toLowerCase().trim()))
      setActionType('')
    }
    //setActionType('')
  }

  function getData(e){
    if(e.key=='Enter'){
      dispatch(getDataReq(getLink))
      setGetLink('')
    }
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
      {getToggle?
        <><div style={{display:'flex'}}><p>enter_link$</p><input value={getLink} onKeyDown={(e)=>getData(e)} onChange={(e)=>setGetLink(e.target.value)}/></div></>
        :
        <><div style={{display:'flex'}}><p>$</p><input value={actionType} onKeyDown={(e)=>completeAction(e)} onChange={(e)=>setActionType(e.target.value)}/></div></>
      }
    </div>
  );
}

export default App;
