import React from "react"
import tasks from "./Tasks.json"
import "./style.css"
import Header from "../../components/Header/Header"
import { RiArrowDownSLine } from "react-icons/ri"
import { CiFilter } from 'react-icons/ci'

const TaskHistory = () => {
  const columns = [
    { heading: "Task Name", value: "name" },
    { heading: "Task type", value: "type" },
    { heading: "Date Created", value: "date" }
  ]
  return (
    <div style={{ width: "100%", padding: "2rem 3rem 1.5rem" }}>
      <Header />
      <div className="task__history">
        <div className="task-history-header">
          <h1>Task history</h1>
          <div className="filter">
            <p>Yesterday</p>
            <span className="filter-icon-grp">
              <p>Filter</p>
              <CiFilter />
            </span>
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
              {tasks.map((item, index) => (
                <tr key={index}>
                  {columns.map((column, index) => {
                    if (item[`${column.value}`] === "By me") {
                      return (
                        <td className="task-type-a" key={index}>
                          {item[`${column.value}`]}
                        </td>
                      )
                    }
                    if (item[`${column.value}`] === "For me") {
                      return (
                        <td className="task-type-b" key={index}>
                          {item[`${column.value}`]}
                        </td>
                      )
                    }

                    if (column.value === "name") {
                      return (
                        <td key={index}>
                          {item[`${column.value}`]}
                          <RiArrowDownSLine className="arrow-svg" />
                        </td>
                      )
                    }
                    return <td key={index}>{item[`${column.value}`]}</td>
                  })}
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
