import axios from 'axios'
import {dispatch} from 'redux-thunk'
import { activateAnyComand, OutputRes } from '../store/consoleOutputReducer'
import { activateToggleCommand } from '../store/getDataReducer'



export const getDataReq=(link)=>{
    return async function(dispatch){
        try{
            const res=await axios.get(link)
            dispatch(OutputRes(JSON.stringify(res.data))) 
            console.log(res.data)
            dispatch(activateToggleCommand('res recieved'))
        }catch(e){
            dispatch(activateAnyComand('res_err'))
            dispatch(activateToggleCommand('res recieved'))
        }
        
    }
}