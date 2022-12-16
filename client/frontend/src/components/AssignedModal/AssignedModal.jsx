import React from "react"
import style from "./AssignedModal.module.css"

function AssignedModal({ taskMessage, closeModal }) {
  return (
    <div className={style.container}>
      <div onClick={closeModal} className={style.dark_overlay}></div>
      <div className={style.card}>
        <p>{taskMessage}</p>
        <button onClick={closeModal} className={style.closeBtn}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1L1 15"
              stroke="#1D1C1D"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M1 1L15 15"
              stroke="#1D1C1D"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default AssignedModal
