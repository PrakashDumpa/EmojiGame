import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    emojiShuffledList: [],
    count: 0,
    idList: [],
    gameStatus: false,
    countList: [0],
  }

  onClickingEmojiButton = id => {
    const {idList, count} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    if (idList.includes(id)) {
      this.setState(prevState => ({
        count: prevState.count,
        gameStatus: true,
        countList: [...prevState.countList, count],
      }))
    } else {
      idList.push(id)
      this.setState(prevState => ({
        emojiShuffledList: shuffledEmojisList(),
        count: prevState.count + 1,
        idList: prevState.idList,
      }))
      if (idList.length === 12) {
        this.setState(prevState => ({
          count: prevState.count,
          gameStatus: true,
          countList: [...prevState.countList, count + 1],
        }))
      }
    }
  }

  onPlayAgain = () => {
    this.setState({
      emojiShuffledList: [],
      idList: [],
      gameStatus: false,
      count: 0,
    })
  }

  render() {
    const {emojisList} = this.props
    let {emojiShuffledList} = this.state
    const {count, gameStatus, countList} = this.state
    console.log('count', count)
    console.log('countList', countList)

    if (emojiShuffledList.length === 0) {
      emojiShuffledList = emojisList
    }

    return (
      <div className="bg_container">
        <NavBar count={count} countList={countList} gameStatus={gameStatus} />
        {gameStatus === false ? (
          <div className="emoji-Main_container pt-5 mt-5 pb-5">
            <ul className="emoji_cards_container list-unstyled">
              {emojiShuffledList.map(eachEmoji => (
                <EmojiCard
                  eachEmoji={eachEmoji}
                  key={eachEmoji.id}
                  onClickingEmojiButton={this.onClickingEmojiButton}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="win_or_lose_container  pt-5 mt-5">
            <WinOrLoseCard count={count} onPlayAgain={this.onPlayAgain} />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
