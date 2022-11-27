import React, { useState, useEffect } from "react"
// import tasks from "./Tasks.json"
import "./style.css"
import Header from "../../components/Header/Header"
import { RiArrowDownSLine } from "react-icons/ri"
import { CiFilter } from 'react-icons/ci'
import Filter from "../../components/filter/Filter"
import { useGetTasksQuery } from "../../api/TaskApi"

const TaskHistory = () => {
  const organization_id = '61db3b27eba8adb50ca1399b'
  const { data: tasks, isLoading } = useGetTasksQuery(9, organization_id)


  const [show, setShow] = useState(false)

  const columns = [
    { heading: "Task Name", value: "name" },
    { heading: "Task type", value: "type" },
    { heading: "Date Created", value: "date" }
  ]
  return (
    <div style={{ width: "100%", padding: "2rem 3rem 1.5rem" }}>
      <Header
        link='Task'
      />
      <div className="task__history">
        <div className="task-history-header">
          <h1>Task history</h1>
          <div className="filter">
            <p>Yesterday</p>
            <span
              onClick={() => setShow(prev => !prev)}
              className="filter-icon-grp">
              <p>Filter</p>
              <CiFilter />
            </span>
            {show && (
              <div className='filter-modal'>
                <Filter closeModal={() => setShow(false)} />
              </div>
            )}
          </div>
        </div>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                {columns.map((column, index) => {
                  return <th key={index}>{column.heading}</th>
                })}
              </tr>
            </thead>
            <tbody className="tasks-rows">
              {isLoading && <h1 style={{ margin: 'auto' }}>Loading..</h1>}
              {tasks?.data?.map((item, index) => (
                <tr key={index}>
                  <td key={index}>
                    {item.taskTitle}
                    <RiArrowDownSLine className="arrow-svg" />
                  </td>
                  <td className="task-type-a" key={index}> By me</td>
                  <td key={index}>{item.created_at ? new Date(item.created_at).toLocaleString() : '2 / 2 / 22'}</td>
                  <button className="goto-btn">Go to task</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TaskHistory
