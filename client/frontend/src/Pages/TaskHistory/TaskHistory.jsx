import React, { useState, useEffect } from "react"
import tasks from "./Tasks.json"
import "./style.css"
import Header from "../../components/Header/Header"
import { RiArrowDownSLine } from "react-icons/ri"
import { CiFilter } from 'react-icons/ci'
import Filter from "../../components/filter/Filter"

const TaskHistory = () => {
  const [historyData, setHistoryData] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect((() => {
    fetch('https:/dummydata/history') /* fake api waiting for backend endpoint*/
      .then((response) => response.json())
      .then((data) => setHistoryData(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }), [])

  /* Once the history endpoint is ready HistoryData will be used to display data instead of tasks json */

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
