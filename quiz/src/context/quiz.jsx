import { act, createContext, useReducer } from "react";
import questions from "../data/questions"

const STARGES = ["Start", "Playing", "End"]

const initialState = {
    gamesStage: STARGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false
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

            case "CHECK_ANSWER":
                if(state.answerSelected) return state

                const answer = action.payload.answer
                const option = action.payload.optino
                let correctAnswer = 0

                if(answer === option) correctAnswer = 1

                return {
                    ...state,
                    score: state.score + correctAnswer,
                    answerSelected: option
                }
        default:
            return state
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {

    const value = useReducer(quizReducer, initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}