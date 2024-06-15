import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Category from "../img/category.svg"

import "./PickCategory.css"

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  const chooseCategoryReorderQuestions = (categoria) => {
    dispatch({type: "START_GAME", payload: categoria})

    dispatch({type: "REODER_QUESTIONS"})
  }

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As pergunta serão referentes a uma das linguagens abaixo:</p>
      <div>
        {quizState.questions.map((question) => (
          <button onClick={() => chooseCategoryReorderQuestions(question.category)} key={question.category}>{question.category}</button>
        ))}
      </div>
      <img src={Category} alt="Cagorias do Quiz" />
    </div>
  )
}

export default PickCategory