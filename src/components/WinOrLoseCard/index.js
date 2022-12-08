// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {count, onPlayAgain} = props
  const playAgainButton = () => {
    onPlayAgain()
  }

  return count === 12 ? (
    <div className="win_container">
      <div className="text-light text_container">
        <h1>You Won</h1>
        <p className="h2">Best Score</p>
        <p className="h2 text-primary">{count}/12</p>
        <button
          type="button"
          className="btn btn-warning play_again-button"
          onClick={playAgainButton}
        >
          Play Again
        </button>
      </div>
      <div className="image">
        <img
          className="w-75"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  ) : (
    <div className="win_container">
      <div className="text-light text_container">
        <h1>You Lose</h1>
        <p className="h2">Score</p>
        <p className="h2 text-primary">{count}/12</p>
        <button
          type="button"
          className="btn btn-warning play_again-button"
          onClick={playAgainButton}
        >
          Play Again
        </button>
      </div>
      <div className="image">
        <img
          className="w-75"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      </div>
    </div>
  )
}
export default WinOrLoseCard
