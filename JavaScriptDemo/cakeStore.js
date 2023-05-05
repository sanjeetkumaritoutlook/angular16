const redux=require("redux");
const reduxLogger=require("redux-logger");
const createStore = redux.createStore;
const combineReducers=redux.combineReducers;
const applyMiddleware= redux.applyMiddleware;
const logger=reduxLogger.createLogger();
//----Initial State----
let initialState={
    noOfCakes:20,
    noOfIceCream:30
}
//------declare action items--
const BUY_CAKE="BUY_CAKE";
const BAKE_CAKE="BAKE_CAKE";
const BUY_ICECREAM="BUY_ICECREAM";
const MAKE_ICECREAM="MAKE_ICECREAM";
//------define action creations---
let buyCake=()=>{
    return {type:BUY_CAKE,payload:"Initial quantiyu of cake:20" }
}

let buyIcream=()=>{
    return {type:BUY_ICECREAM,payload:"Initial quantiyu of icecream:30" }
}
//------define reducers---
let cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {...state,noOfCakes:state.noOfCakes-1};
    
        case BAKE_CAKE:
           return {...state,noOfCakes:state.noOfCakes+1};
        default:return state;
}
}

//----another reducer
let icecreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {...state,noOfIceCream:state.noOfIceCream-1};
    
        case MAKE_ICECREAM:
           return {...state,noOfIceCream:state.noOfIceCream+1};
        default:return state;
}
}
//------combined both  reducers---
let rootReducer= combineReducers({cakeR:cakeReducer,iceR:icecreamReducer});
//---create store
let store=createStore(rootReducer,applyMiddleware(logger));
//-----dispatch actions--
console.log("intial state:"+store.getState());
//buy 3 cakes 2 ice cream- Actions on  store using dispatch()
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcream());
store.dispatch(buyIcream());
