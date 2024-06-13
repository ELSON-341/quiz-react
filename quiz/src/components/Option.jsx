import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Option.css"


const Option = ({optino}) => {
    const [quizState, dispatch] = useContext(QuizContext)
  
    return (
    <div className="option">
        <p>{optino}</p>
    </div>
  )
}

export default Option