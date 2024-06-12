import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Quiz from "../img/quiz.svg"

import "./Welcome.css"

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)


  return (
    <div id="welcome">
        <h2>Seja bem-vido</h2>
        <p>Clique no botão abixo para começar</p>
        <button type="button" onClick={() => dispatch({type: "CHEGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome