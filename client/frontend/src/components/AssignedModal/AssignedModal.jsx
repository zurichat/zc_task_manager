import React from "react"
import style from "./AssignedModal.module.css"

function AssignedModal({ taskMessage, closeModal }) {
  return (
    <div className={style.container}>
      <div onClick={closeModal} className={style.dark_overlay}></div>
      <div className={style.card}>
        <p>
          An agency has just hired you to make a design system for mixed reality
          applications. It will be used for training new employees for factories
          or in the medical industry. You can choose between both, each
          application will have it's own constraints so choose carefully. Design
          systems require utmost attention to detail which is why attention to
          detail will be the most important grading criteria for this task.
          <br />
          <br />
          From the way you choose the elements of your design to the way you
          name your file, every detail matters. The deliverables include the
          design system itself and a demo page/screen/UI showing the usage of
          the design system in a real world application.
          <br />
          <br />
          Also note that you will need to submit a presentation which presents
          your work and not just the design system. Always think of this as a
          real client project, which means aesthetics matter. Make things
          pretty, present your work as a presentation, convince ys that your
          work is the best out of all the submissions.
        </p>

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
