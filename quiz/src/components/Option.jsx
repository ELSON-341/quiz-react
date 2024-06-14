import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Option.css"


const Option = ({ optino, selectedOption, anwer }) => {
    const [quizState, dispatch] = useContext(QuizContext)
  
    return (
    <div className="option" onClick={selectedOption}>
        <p>{optino}</p>
    </div>
  )
}

export default Option