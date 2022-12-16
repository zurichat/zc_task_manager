import React, { useState, useContext } from "react"
// import tasks from "./Tasks.json"
import "./style.css"
import Header from "../../components/Header/Header"
import { RiArrowDownSLine } from "react-icons/ri"
import { CiFilter } from "react-icons/ci"
import Filter from "../../components/filter/Filter"
import { useGetTasksQuery } from "../../api/TaskApi"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import Pagination from "../../components/Pagination/Pagination"
import { PaginationContext } from "../../context/PaginationContext"
import AssignedModal from "../../components/AssignedModal/AssignedModal"
import { AppCredentialsContext } from "../../context/AppCredentialsContext"

const TaskHistory = () => {

  const [show, setShow] = useState(false)
  const [descModal, setDescModal] = useState(false)
  const { currentPage } = useContext(PaginationContext)
  const { organization_id } = useContext(AppCredentialsContext)
  const {
    data: tasks,
    isLoading,
    isError
  } = useGetTasksQuery({ organization_id, page: currentPage })

  const columns = [
    { heading: "Task Name", value: "name" },
    { heading: "Task type", value: "type" },
    { heading: "Date Created", value: "date" }
  ]
  if (!isLoading) { console.log({ tasks, currentPage }) }


  return (
    <div style={{ width: "100%", padding: "2rem 3rem 1.5rem" }}>
      <Header link="Task" />
      <div className="task__history">
        <div className="task-history-header">
          <h1>Task history</h1>
          <div className="filter">
            <p>Yesterday</p>
            <span
              onClick={() => setShow(prev => !prev)}
              className="filter-icon-grp"
            >
              <p>Filter</p>
              <CiFilter />
            </span>
            {show && (
              <div className="filter-modal">
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
              {isLoading && <LoadingSpinner />}
              {isError && (
                <h1 className="history__not--found">
                  Could not load tasks history
                </h1>
              )}
              {tasks?.data.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item?.task_title || item?.taskTitle}
                    <RiArrowDownSLine
                      className="arrow-svg"
                      onClick={() => setDescModal(true)}
                    />
                    {descModal && <AssignedModal taskMessage={item?.task_description || item?.taskDescription} closeModal={() => setDescModal(false)} />}
                  </td>
                  <td className="task-type-a">
                    {" "}
                    By me
                  </td>
                  <td>
                    {item.created_at
                      ? new Date(item.created_at).toLocaleString()
                      : "2 / 2 / 22"}
                  </td>
                  <button className="goto-btn">Go to task</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default TaskHistory
