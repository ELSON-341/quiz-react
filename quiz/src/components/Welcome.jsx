import Quiz from "../img/quiz.svg"
import "./Welcome.css"

const Welcome = () => {
  return (
    <div id="welcome">
        <h2>Seja bem-vido</h2>
        <p>Clique no botão abixo para começar</p>
        <button type="button">Iniciar</button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome