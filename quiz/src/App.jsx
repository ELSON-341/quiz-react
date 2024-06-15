// react, componentes, estáticos
import { useContext, useEffect } from "react"
import { QuizContext } from "./context/quiz"

import Welcome from './components/Welcome'
import Questtions from './components/Questions'
import GameOver from "./components/GameOver"
import PickCategory from "./components/PickCategory"

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  

  return (
    <div className="app">
      <h1>Quiz de Programacão</h1>
      {quizState.gamesStage === "Start" && <Welcome/>}
      {quizState.gamesStage === "Category" && <PickCategory/>}
      {quizState.gamesStage === "Playing" && <Questtions/>}
      {quizState.gamesStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
