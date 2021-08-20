import { CREATE_QUIZ_QUESTTION, RESET_QUIZ_CREATION } from "../actions/actionType"

const initialState = {
    quiz:[]
}

export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_QUIZ_QUESTTION:
            return {
                ...state, 
                quiz:[...state.quiz, action.item] //исходному массиву добавляем новый элемент

            }
        case RESET_QUIZ_CREATION:
                return {
                    ...state, 
                    quiz:[]
    
                }
        default:
            return state
    }
}