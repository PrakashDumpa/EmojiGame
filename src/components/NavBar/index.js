// Write your code here.
import './index.css'

const NavBar = props => {
  const {count, countList, gameStatus} = props

  const maximum = Math.max(...countList)
  console.log('Radhe', countList)
  console.log(maximum)
  return (
    <nav className="nav_container p-2 fixed-top">
      <div className="emoji_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="h2 m-0 text-light nav_heading">Emoji Game</h1>
      </div>

      {gameStatus === false && (
        <div className="scores_container">
          <p className="m-0">Score: {count}</p>
          <p className="m-0">Top Score: {maximum}</p>
        </div>
      )}
    </nav>
  )
}
export default NavBar
