// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onClickingEmojiButton} = props
  const {emojiName, emojiUrl, id} = eachEmoji

  const emojiButton = () => {
    onClickingEmojiButton(id)
  }

  return (
    <li className="emojiCard m-3">
      <button type="button" className="button" onClick={emojiButton}>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
