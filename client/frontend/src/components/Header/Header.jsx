import React from "react"
import { useNavigate } from "react-router-dom"
import img from "../Header/assets/pic.png"
import "./Header.css"

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="assignment__header">
      <div className="profile">
        <img src={img} alt="" />
        <p className="design__mentor">Design mentor</p>
      </div>
      <div className="assignment-details-grp">
        <div className="assignment-details">
          <span>
            <p className="assigned_number">09</p>
            <p className="assigned_title">Task Assigned</p>
          </span>
          <span>
            <p className="assigned_number">05</p>
            <p className="assigned_title">Admin tasks</p>
          </span>
          <span>
            <p className="assigned_number">24</p>
            <p className="assigned_title">Assignees</p>
          </span>
          <span>
            <p className="assigned_number">13</p>
            <p className="assigned_title">Notification</p>
          </span>
        </div>
        <p>6th december, 2022</p>
      </div>
      <div className="action-grp">
        <div className="task-notif">
          <button className="assignment__button-1">Task Assigned </button>
          <p onClick={() => navigate("/notification")}>Notification</p>
        </div>
        <button className="assignment__button">Create Task</button>
      </div>
    </header>
  )
}

export default Header
