import {Component} from 'react'
import {v4} from 'uuid'
import MyTasksButton from '../MyTasksButton'
import './index.css'
import MyTasksList from '../MyTasksList'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    inputWords: '',
    inputOption: tagsList[0].optionId,
    updatedTaskList: [],
    activeTaskId: '',
  }

  onClickOptionButtonTrigger = id => {
    const {activeTaskId} = this.state
    if (activeTaskId === id) {
      this.setState({activeTaskId: ''})
    } else {
      this.setState({activeTaskId: id})
    }
  }

  onChangeInputOptions = event => {
    this.setState({inputOption: event.target.value})
  }

  onChangeInputWords = event => {
    this.setState({inputWords: event.target.value})
  }

  onSubmitAddButton = event => {
    event.preventDefault()
    const {inputOption, inputWords} = this.state
    const newTask = {
      id: v4(),
      newTaskWord: inputWords,
      newTaskOption: inputOption,
    }
    this.setState(prevState => ({
      updatedTaskList: [...prevState.updatedTaskList, newTask],
      inputWords: '',
      inputOption: tagsList[0].displayText,
    }))
  }

  getRefineUpdated = () => {
    const {updatedTaskList, activeTaskId} = this.state
    if (activeTaskId === '') {
      return updatedTaskList
    }
    const refineUpdated = updatedTaskList.filter(
      eachUpdated => eachUpdated.newTaskOption.toUpperCase() === activeTaskId,
    )
    return refineUpdated
  }

  render() {
    const {inputWords, inputOption, activeTaskId} = this.state
    const refineUpdated = this.getRefineUpdated()
    return (
      <div className="bg-container">
        <form className="left-container" onSubmit={this.onSubmitAddButton}>
          <h1 className="task-heading">Create a task!</h1>
          <div className="input-container">
            <label className="label-heading" htmlFor="input">
              Task
            </label>
            <br />
            <input
              className="input-slide"
              id="input"
              placeholder="Enter the task here"
              value={inputWords}
              onChange={this.onChangeInputWords}
            />
          </div>
          <div className="input-container">
            <label className="label-heading" htmlFor="select">
              Tags
            </label>
            <br />
            <select
              className="input-slide"
              value={inputOption}
              onChange={this.onChangeInputOptions}
              id="select"
            >
              {tagsList.map(eachTags => (
                <option
                  key={eachTags.optionId}
                  value={eachTags.optionId}
                  className="select-option"
                >
                  {eachTags.displayText}
                </option>
              ))}
            </select>
          </div>
          <button className="add-task" type="submit">
            Add Task
          </button>
        </form>
        <div className="right-container">
          <h1 className="tag-heading">Tags</h1>
          <ul className="unOrder-list-button">
            {tagsList.map(eachTagButton => (
              <MyTasksButton
                key={eachTagButton.optionId}
                eachTagButton={eachTagButton}
                onClickOptionButtonTrigger={this.onClickOptionButtonTrigger}
                activeTaskIdNumber={activeTaskId === eachTagButton.optionId}
              />
            ))}
          </ul>
          <h1 className="tag-heading">Tasks</h1>
          {refineUpdated.length > 0 ? (
            <ul className="unOrder-task-list">
              {refineUpdated.map(eachUpdatedTask => (
                <MyTasksList
                  key={eachUpdatedTask.id}
                  eachUpdatedTask={eachUpdatedTask}
                />
              ))}
            </ul>
          ) : (
            <div className="not-container">
              <p className="not-paragraph">No Tasks Added Yet</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MyTasks
