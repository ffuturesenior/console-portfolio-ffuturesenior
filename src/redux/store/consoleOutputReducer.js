const defaultState={
    messages:[{text:"hi there.It`s ffuturesenior portfolio.Input <help> into command line to see avaible commands",isComand:false}]
}

const Write_inputedCommand="Write_inputedCommand"




export const consoleOutputReducer=(state=defaultState,action)=>{
    switch (action.type) {
    case "Write_inputedCommand":
        return {...state,messages:[...state.messages,action.payload]}
        break;
    case "help":
        return {...state,messages:[...state.messages,{text:"<pages>(all avaible pages)",isComand:false},{text:"<dir page_name>(check page)",isComand:false}]}
        break;
    case "pages":
        return {...state,messages:[...state.messages,{text:"portfolio_works",isComand:false},{text:"other page",isComand:false}]}
        break;
    case "dir portfolio_works":
        return {...state,messages:[...state.messages,{text:"https://abobasocial.netlify.app (social-media app)",isComand:false},{text:"https://ffuturesenior.github.io/protfSite1 (static site)",isComand:false}]}
        break;
    case "dir other_page":
        return {...state,messages:[...state.messages,{text:"nothing there",isComand:false}]}
        break;
    case "clr":
        return {...state,messages:[{text:"hi there.It`s ffuturesenior portfolio.Input <help> into command line to see avaible commands",isComand:false}]}
        break;
    default:
        return state;
    }
}


export const WriteInputedCommand=(payload)=>({type:Write_inputedCommand,payload})
export const activateAnyComand=(payload)=>({type:payload})
