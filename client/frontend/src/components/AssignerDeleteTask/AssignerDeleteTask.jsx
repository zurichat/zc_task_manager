import React from "react"
import style from "./AssignerDeleteTask.module.css"

function AssignerDeleteTask({ onDelete, close_Modal }) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <button onClick={close_Modal} className={style.close_btn}>
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.25 7.75L7.75 23.25"
              stroke="#F40101"
              stroke-width="1.22693"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.75 7.75L23.25 23.25"
              stroke="#F40101"
              stroke-width="1.22693"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div className={style.confirmation_msg}>
          <h2>Delete Task</h2>
          <p>
            Are you sure you want to delete the “Design System for Mixed Reality
            Applications”?
          </p>
        </div>

        <button onClick={onDelete} className={style.delete_btn}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default AssignerDeleteTask
