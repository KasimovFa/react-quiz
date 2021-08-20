import axios from "../../axios/axios-quiz";
import { CREATE_QUIZ_QUESTTION, RESET_QUIZ_CREATION } from "./actionType";

export function createQuizQuestion(item) {
  return {
      type:CREATE_QUIZ_QUESTTION,
      item
  }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export function finishCreateQuiz() {
    return async (dispatch, getState) => {
        await  axios.post('/quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation)
    }
}