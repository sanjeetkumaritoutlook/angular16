//redux outside React application- asynchronous application to get data from emp.json
//next integrate Readux in React application (emps) -High Order function use
const redux=require("redux");
const reduxLogger=require("redux-logger");
const createStore = redux.createStore;
const combineReducers=redux.combineReducers;
const applyMiddleware= redux.applyMiddleware;
const logger=reduxLogger.createLogger();
const thunk= require("redux-thunk").default
const axios=require("axios");
//----Initial State----
let initialState={
    emps:[],
    emp:{},
    empError:"",
    loading:false
}
//------declare action items--
const FETCH_EMP_REQUEST="FETCH_EMP_REQUEST";
const FETCH_EMP_SUCCESS="FETCH_EMP_SUCCESS";
const FETCH_EMP_FAILURE="FETCH_EMP_FAILURE";
const ADD_EMP_REQUEST="ADD_EMP_REQUEST";
const ADD_EMP_SUCCESS="ADD_EMP_SUCCESS";
const ADD_EMP_FAILURE="ADD_EMP_FAILURE";
//------define action creations---
//parameterized action creator
let fetchEmpRequest=(loading)=>{
    return {type:FETCH_EMP_REQUEST,payload:"Loading:"+loading }
}

let fetchEmpSuccess=(emps)=>{
    return {type:FETCH_EMP_SUCCESS,payload:emps }
}

let fetchEmpFailure=(empError)=>{
    return {type:FETCH_EMP_FAILURE,payload:empError }
}

//------define reducers only one here in emps outside React app---
let empFetchReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_EMP_REQUEST:
            return {...state,loading:action.payload};
    
        case FETCH_EMP_SUCCESS:
           return {...state,emps:action.payload};
       case FETCH_EMP_FAILURE:
         return {...state,empError:action.payload};   
        default:return state;
}
}

//------combined both  reducers---
let rootReducer= combineReducers({empFetchR:empFetchReducer});
//---create store
let store=createStore(rootReducer,applyMiddleware(logger,thunk));
//-----dispatch actions--
function fetchEmp(){

    return(dispatch)=>{ dispatch(fetchEmpRequest(true))
        axios.get("http://localhost:3000/emps")
        .then((empRes)=>{dispatch(fetchEmpSuccess(empRes.data));})
        .catch((empErr)=>{dispatch(fetchEmpFailure(empErr));})
    }
}
console.log("intial state:"+store.getState());
store.dispatch(fetchEmp());