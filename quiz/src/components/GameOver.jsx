import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import WellDone from "../img/welldone.svg"

import './GameOver.css'

const GameOver = () => {
  return (
    <div id="gameover">
        <h2>Fim de jogo</h2>
        <p>Pontução: x</p>
        <p>Você acertou y de z perguntas.</p>
        <img src={WellDone} alt="Fim do jogo" />
        <button type="button">Reniciar</button>
    </div>
  )
}

export default GameOver