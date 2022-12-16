import React, { useState, useContext } from "react"
import Header from "../../components/Header/Header"
import style from "./AddTask.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select'
import { useGetCategoriesQuery } from "../../api/TaskApi";
import { AppCredentialsContext } from "../../context/AppCredentialsContext";
import { PaginationContext } from "../../context/PaginationContext";

const AddTask = () => {
  const [value, setValue] = useState({
    taskTitle: "",
    taskDescription: "",
    submissionDate: "",
    submissionTime: "",
    taskCategory: ""
  })
  const { organization_id } = useContext(AppCredentialsContext)
  const { currentPage } = useContext(PaginationContext)
  const { data: categories } = useGetCategoriesQuery(organization_id)

  const onChangeInput = e => {
    let name = e.target.name
    let val = e.target.value

    setValue({
      ...value,
      [name]: val
    })
  }

  const handleChange = (selected) => {
    setValue({ ...value, taskCategory: selected.value })
  }

  let onSubmit = (e) => {
    e.preventDefault();
    console.log('love')
    const { taskTitle, taskDescription, submissionDate, submissionTime, taskCategory } = value
    if (!taskTitle || !taskDescription || !submissionDate || !submissionTime || !taskCategory) {
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
    else {
      // team sandpaper backend refused to turn up
      fetch('https://task2.zuri.chat/api/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...value, organization_id, page: currentPage }),
      })
        .then((response) => response.json())
        .then((data) => {
          toast.success('Task created successfully', {
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

  const options = []
  categories?.data?.map((item, index) => (
    options.push({ value: item.category_name, label: item.category_name })
  ))

  console.log(options, value)

  return (
    <div style={{ width: "100%", padding: "2rem 3rem 1.5rem" }}>
      <ToastContainer />
      <Header
        link=''
      />
      <div className={style.addTaskContainer}>
        <form onSubmit={onSubmit}>
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
          <div>
            <label className={style.label}>Select category</label>
            <Select options={options} onChange={handleChange} />
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
