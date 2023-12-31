import './index.css'

const MyTasksList = props => {
  const {eachUpdatedTask} = props
  const {newTaskOption, newTaskWord} = eachUpdatedTask
  const first = newTaskOption.slice(0, 1).toUpperCase()
  const second = newTaskOption.slice(1).toLowerCase()
  return (
    <li className="list-container">
      <p className="left-paragraph">{newTaskWord}</p>
      <div className="paragraph-container">
        <p className="right-paragraph">
          {first}
          {second}
        </p>
      </div>
    </li>
  )
}

export default MyTasksList
