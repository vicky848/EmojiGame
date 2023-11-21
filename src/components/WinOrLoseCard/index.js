import './index.css'

const IMAGE_LOSE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const IMAGE_WON = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props

  const imageUrl = isWon ? IMAGE_WON : IMAGE_LOSE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-card">
      <div className="details-section">
        <h1 className="game-heading-statue">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          className="play-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img className="win-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
