import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Option.css"


const Option = ({ optino, selectedOption, anwer, hide }) => {
    const [quizState, dispatch] = useContext(QuizContext)
  
    return (
    <div className={`option ${quizState.answerSelected && optino === anwer ? "correct" : ""} ${quizState.answerSelected && optino !== anwer ? "wrong" : ""} ${hide ? 'hide' : ''}`} onClick={() => selectedOption()}>
        <p>{optino}</p>
    </div>
  )
}

export default Option