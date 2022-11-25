import React from 'react'
import check from '../Task completed/check.svg'
import '../Task completed/completed.css'
const Completed = ({closeModal}) => {
  return (
    <div className='completed-modal'>
        <img src={check} alt="" />
        <div className="completed-text">
            <span big-Completed-text>Task Completed</span>
            <span>Your “Design System for Mixed Reality Applications” tasks has been submitted</span>
        </div>
        <div className="completed-buttons">
            <button className="completed-edit">
            Edit Submission
            </button>
            <button className="completed-submit" onClick={closeModal}>
            Continue
            </button>
        </div>
    </div>
  )
}

export default Completed