

const defaultState={
    messages:[{text:"hi there.It`s ffuturesenior portfolio.Input <help> into command line to see avaible commands",isComand:false}]
}

const Write_inputedCommand="write_inputedCommand"


const text1='Hello.I`m nameless creature from Ukraine.'
const text2='I`m intrested in web developing(mostly front-end),and want to become a useful worker in your company.'
const text3='I know the modern technologies like a:React.js,Redux,mongoDB,express framework on node.js,Async js.'
const text4='I learning web dev for more than 1year.During 1 year i created social-media app,and 1 static site for testing of css knowlege.'
const text5='Also i studying in colleauge on software engineer for 3 years.'
const text6='I hope,that i will be a grerat part of your company.'
const text7='gitHub: https://github.com/ffuturesenior'
const tg='tg: @Yo5wiwjt'
const forSocial=[
    {text:"(social-media app) front-----> https://github.com/ffuturesenior/abobasocial",isComand:false},
    {text:"____________________________________________________________________________________",isComand:false},
    ]
const forShop=[
    {text:"(shop+sell statistic) code-----> https://github.com/ffuturesenior/shop",isComand:false},
    {text:"____________________________________________________________________________________",isComand:false},
]

const forStaticSite=[
    {text:"(static site)-----> https://ffuturesenior.github.io/protfSite1",isComand:false},
    {text:"____________________________________________________________________________________",isComand:false},
]

const forCalendar=[
    {text:"(todo-calendar)-----> https://ffuturesenior-calendar-zutand-ts.netlify.app/",isComand:false},
    {text:"____________________________________________________________________________________",isComand:false},
]



export const consoleOutputReducer=(state=defaultState,action)=>{
    switch (action.type) {
    case "write_inputedCommand":
        return {...state,messages:[...state.messages,action.payload]}
        break;
    case "help":
        return {...state,messages:[...state.messages,{text:"<pages>(all avaible pages)",isComand:false},{text:"<dir <page_name>>(check page)",isComand:false},{text:"<help>(commands list)",isComand:false},{text:"<clr>(clear console)",isComand:false},{text:"<how to get>(recieve instruction,how to get data from server)",isComand:false}]}
        break;
    case "pages":
        return {...state,messages:[...state.messages,{text:"portfolio_works",isComand:false},{text:"aboutme",isComand:false},{text:"socials",isComand:false}]}
        break;
    case "dir portfolio_works":
        return {...state,messages:[...state.messages,...forStaticSite,...forShop,...forSocial,...forCalendar]}
        break;
    case "dir aboutme":
        
        return {...state,messages:[...state.messages,{text:text1,isComand:false},{text:text2,isComand:false},{text:text3,isComand:false},{text:text4,isComand:false},{text:text5,isComand:false},{text:text6,isComand:false}]}
        break;
    case "dir socials":
        return {...state,messages:[...state.messages,{text:"telegram:@Yo5wiwjt",isComand:false},{text:"gmail:shamray.ruslan068@gmail.com",isComand:false}]}
        break;
    case "how to get":
        return {...state,messages:[...state.messages,{text:"1st step: input 'get' to console to activate special input field for link",isComand:false},{text:"2nd step: input link to recieve data by this link from server",isComand:false},{text:"please,input links ONLY from public servers!",isComand:false},{text:"Links from browser pages doesnt working",isComand:false},{text:"For example,use:https://jsonplaceholder.typicode.com/users",isComand:false}]}
        break;
    case 'output_res':
        return{...state,messages:[...state.messages,{text:action.payload,isComand:false}]}
        break;
    case 'res_err':
        return{...state,messages:[...state.messages,{text:'err',isComand:false}]}
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
export const OutputRes=(payload)=>({type:'output_res',payload})