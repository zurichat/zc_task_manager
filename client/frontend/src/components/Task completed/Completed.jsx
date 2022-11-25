import React from 'react'
import check from '../Task completed/check.jpg'
import '../Task completed/completed.css'
const Completed = ({closeModal}) => {
  return (
    <div className='completed-modal'>
      <div className="completed-overlay" ></div>
        <div className="completed-card">
          <img src={check} alt="" />
          <div className="completed-text">
              <span big-Completed-text>Task Completed</span>
              <span>Your “Design System for Mixed Reality Applications” tasks has been submitted</span>
          </div>
          <div className="completed-buttons">
              <button className="completed-edit" onClick={closeModal}>
              Edit Submission
              </button>
              <button className="completed-submit" onClick={closeModal}>
              Continue
              </button>
          </div>
        </div>
    </div>
  )
}

export default Completed