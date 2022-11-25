import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import img from "../Header/assets/pic.png"
import { RiArrowDownSLine } from "react-icons/ri"

import "./Header.css"

const Header = () => {
  const [show, setShow] = useState(false)
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
          <button className="assignment__button-1">
            <p
              className="assignment__p"
              onClick={() => {
                navigate("/")
                setShow(false)
              }}
            >
              Assigned
            </p>
            <RiArrowDownSLine
              className="assignment__svg"
              onClick={() => setShow(true)}
            />
          </button>
          {show && (
            <ul className="assignment__lists">
              {["By me", "For me", "Task history"].map((item, index) => (
                <li key={index} onClick={() => setShow(false)}>
                  <Link to={`/${item.toLowerCase().replace(" ", "")}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <p onClick={() => navigate("/notification")}>Notification</p>
        </div>
        <button
          className="assignment__button"
          onClick={() => navigate("/addtask")}
        >
          Create Task
        </button>
      </div>
    </header>
  )
}

export default Header
