import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STARGES = ["Start", "Playing", "End"]

const initialState = {
    gamesStage: STARGES[0],
    questions,
}

const quizReducer = (state, action) => {
    console.log(state, action)

    switch(action.type) {
        case "CHEGE_STATE":
            console.log('caiu');
            return state
        
        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {

    const value = useReducer(quizReducer, initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}