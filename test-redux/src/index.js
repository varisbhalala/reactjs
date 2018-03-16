import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import { createStore, combineReducers,applyMiddleware } from "redux";
import logger from "redux-logger"
import {thunkMiddleware} from "redux-thunk"
const mathReducer = (state = {
    result :1 ,
    lastValues : []
} , action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      
      break;
    case "SUBTRACT":
        state = {
            ...state,
            result: state.result - action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
        
      break;
  }
  return state;
};
const userReducer = (state = {
    name :"Varis" , age: 21 
} , action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name:action.payload
      };
      
      break;
    case "SET_AGE":
        state = {
            ...state,
            age:action.payload
        };
        
      break;
  }
  return state;
};
const myMiddleware = (store) => (next) => (action) => {
    console.log("Logged Action: " , action);
    next(action);
}
const store = createStore(combineReducers({math: mathReducer,user :userReducer}), {}, applyMiddleware(myMiddleware,logger));
store.subscribe(() => {
  console.log("Store updated " , store.getState());  
});

// store.dispatch({
//   type: "ADD",
//   payload:100 
// });
// store.dispatch({
//     type: "SUBTRACT",
//     payload:80
//   });
// store.dispatch({
//     type: "SET_NAME",
//     payload:"varis"
// });
// store.dispatch({
//     type: "SET_AGE",
//     payload:21
// });



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();