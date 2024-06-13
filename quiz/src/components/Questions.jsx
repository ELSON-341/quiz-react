import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Option from "./Option"

import './Questions.css'

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]
  console.log(currentQuestion.options);

  return <div id="question">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
    <h2>{currentQuestion.question}</h2>
    <div id="options-container">
      {currentQuestion.options.map((optino) => (
        <Option optino={optino} key={optino}/>
        ))}
    </div>
    <button type="button" onClick={() => dispatch({type : "CHANGE_QUESTION"})}>Continuar</button>
  </div>
}

export default Questions