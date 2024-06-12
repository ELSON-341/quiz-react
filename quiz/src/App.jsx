// react, componentes, estáticos
import { useContext } from "react"
import { QuizContext } from "./context/quiz"

import Welcome from './components/Welcome'
import Questtions from './components/Questions'

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="app">
      <h1>Quiz de Programacão</h1>
      {quizState.gamesStage === "Start" && <Welcome/>}
      {quizState.gamesStage === "Playing" && <Questtions/>}
    </div>
  )
}

export default App
