import { createContext, useReducer } from "react";
import questions from "../data/questions_complete"

const STARGES = ["Start", "Category", "Playing", "End"]

const initialState = {
    gamesStage: STARGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    help: false
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
            const reorderedQuestions = state.questions.sort(() => {
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
                    gamesStage: endGame ? STARGES[3] : state.gamesStage,
                    answerSelected: false
                }

            case "NEW_GAME":
                return initialState

            case "CHECK_ANSWER":
                if(state.answerSelected) return state

                const answer = action.payload.answer
                const option = action.payload.optino
                let correctAnswer = 0

                if(answer === option) correctAnswer += 1
                
                return {
                    ...state,
                    score: state.score + correctAnswer,
                    answerSelected: option
                }

            case "START_GAME":
                let quizQuestions = null
                state.questions.forEach((question) => {
                    if(question.category === action.payload) {
                        quizQuestions = question.questions
                    }
                })

                return {
                    ...state,
                    questions: quizQuestions,
                    gamesStage: STARGES[2]
                }

                case "SHOW_TIP":
                    return {
                        ...state,
                        help: "tip",
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