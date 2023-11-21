import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <nav className="navbar">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="img-logo"
          alt="emoji logo"
        />
        <h1 className="emoji-game">Emoji Game</h1>
        {isGameInProgress && (
          <div className="score">
            <p className="text-score">Score: {currentScore}</p>
            <p className="text-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
