import React, { useState } from "react"
import Header from "../../components/Header/Header"
import style from "./AddTask.module.css"
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    let onSubmit = (e) => {
        e.preventDefault();
        console.log('love')
        const {taskTitle, taskDescription, submissionDate, submissionTime} = value
        if(!taskTitle || !taskDescription || !submissionDate || !submissionTime){
            console.log('killer')
            toast.error('please, fill all fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else{
            // team sandpaper backend refused to turn up
            fetch('https://nobackend/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(value),
            })
            .then((response) => response.json())
            .then((data) => {
                toast.success('please, fill all fields', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            })
            .catch((error) => {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            });
        }


    }
  
  return (
    <div style={{ width: "100%", padding: "2rem 3rem 1.5rem" }}>
        <ToastContainer />
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

          <button 
          className={style.submitBtn}
          onClick={onSubmit}
          >Send</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask
