import './index.css'

// Write your code here.

const EmojiCard = props => {
  const {emojiCardDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiCardDetails

  const onClickEmojiBtn = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-button" onClick={onClickEmojiBtn} type="button">
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
