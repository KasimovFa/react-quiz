import { combineReducers } from "redux";
import authReducer from "./auth";
import createReducer from "./creare";
import quizReducer from "./quiz";

export default combineReducers( {
  //создаем новый state
   quiz: quizReducer,
   create: createReducer,
   auth:authReducer
})