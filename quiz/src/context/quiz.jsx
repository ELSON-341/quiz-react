import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STARGES = ["Start", "Playing", "End"]

const initialState = {
    gamesStage: STARGES[0],
    questions,
    currentQuestion: 0,
    score: 0
}

const quizReducer = (state, action) => {
    // console.log(state, action)

    switch(action.type) {
        case "CHEGE_STATE":
            return {
                ...state,
                gamesStage: STARGES[1]
            }

        case 'RAORDER_QUESTIONS':
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5
            })
            return {
                ...state,
                questions: reorderedQuestions
            }

            case 'CHANGE_QUESTION':
                const nextQuestion = state.currentQuestion + 1
                let endGame = false

                if(!questions[nextQuestion]) {
                    endGame = true
                }

                return {
                    ...state,
                    currentQuestion: nextQuestion,
                    gamesStage: endGame ? STARGES[2] : state.gamesStage
                }

            case "NEW_GAME":
                return initialState
        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {

    const value = useReducer(quizReducer, initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}