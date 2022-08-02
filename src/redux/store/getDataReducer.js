const defaultState={
    toggle:false
}

const get='get'
const res_recieved='res recieved'

export const getDataReducer=(state=defaultState,action)=>{
    switch (action.type) {
    case "get":
        return {...state,toggle:true}
        break;
    case "res recieved":
        return {...state,toggle:false}
        break;
    default:
        return state;
    }
}


export const activateToggleCommand=(payload)=>({type:payload})
//export const res_recievedCaller=(payload)=>({type:res_recieved,payload})

//export const activateAnyComand=(payload)=>({type:payload})