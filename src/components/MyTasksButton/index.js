import './index.css'

const MyTasksButton = props => {
  const {eachTagButton, onClickOptionButtonTrigger, activeTaskIdNumber} = props
  const {displayText, optionId} = eachTagButton
  const onClickOptionButton = () => {
    onClickOptionButtonTrigger(optionId)
  }
  const currentStatus = activeTaskIdNumber ? 'current-button' : 'option-button'
  return (
    <li className="button-list-item">
      <button
        className={currentStatus}
        type="button"
        onClick={onClickOptionButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default MyTasksButton
