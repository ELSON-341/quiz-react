import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Option from "./Option"

import './Questions.css'

const Questions = (optino) => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion]

  const onSelectOption = (optino) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: currentQuestion.answer, optino}
    })
  }


  return <div id="question">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
    <h2>{currentQuestion.question}</h2>
    <div id="options-container">
      {currentQuestion.options.map((optino) => (
        <Option optino={optino} key={optino} anwer={currentQuestion.answer} selectedOption={() => onSelectOption(optino)}/>
        ))}
    </div>
    {
      !quizState.answerSelected && (
        <>
        {/* {currentQuestion.tip && <button onClick={dispatch({type: "SHOW_TIP"})}>Dica</button>} */}
        {quizState.help === 'tip' && <p>{currentQuestion.tip}</p>}
        </>
      )
    }
     {quizState.answerSelected && <button type="button" onClick={() => dispatch({type : "CHANGE_QUESTION"})}>Continuar</button>}
  </div>
}

export default Questions