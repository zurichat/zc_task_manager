import React, { useState } from "react"
import Header from "../../components/Header/Header"
import style from "./AddTask.module.css"

const AddTask = () => {
  const [value, setValue] = useState({
    taskTitle: "",
    taskDescription: "",
    submissionDate: "",
    submissionTime: ""
  })

  const onChangeInput = e => {
    let name = e.target.name
    let val = e.target.value

    setValue({
      ...value,
      [name]: val
    })
  }
  return (
    <div style={{ width: "100%", padding: "2rem 3rem 1.5rem" }}>
      <Header 
      link=''
      />
      <div className={style.addTaskContainer}>
        <form>
          <div>
            <label className={style.label}>Task Title</label>
            <br />
            <input
              type="text"
              placeholder="Enter info here"
              className={
                value.taskTitle === "" ? style.bigInput : style.activeBigInput
              }
              value={value.taskTitle}
              name="taskTitle"
              onChange={onChangeInput}
            />
          </div>
          <div>
            <label className={style.label}>Task Description</label>
            <br />
            <input
              type="text"
              placeholder="Enter info here"
              className={
                value.taskDescription === ""
                  ? style.bigInput
                  : style.activeBigInput
              }
              value={value.taskDescription}
              name="taskDescription"
              onChange={onChangeInput}
            />
          </div>
          <div className={style.smallInputContainer}>
            <div>
              <label className={style.label}>Submission Date</label>
              <br />
              <input
                type="date"
                placeholder="Enter info here"
                className={
                  value.submissionDate === ""
                    ? style.smallInput
                    : style.activeSmallInput
                }
                value={value.submissionDate}
                name="submissionDate"
                onChange={onChangeInput}
              />
            </div>
            <div>
              <label className={style.label}>Submission Time</label>
              <br />
              <input
                type="time"
                placeholder="Select Time"
                className={
                  value.submissionTime === ""
                    ? style.smallInput
                    : style.activeSmallInput
                }
                value={value.submissionTime}
                name="submissionTime"
                onChange={onChangeInput}
              />
            </div>
          </div>

          <button className={style.submitBtn}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask
