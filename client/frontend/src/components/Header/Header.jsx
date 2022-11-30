import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import img from "../Header/assets/pic.png"
import { RiArrowDownSLine } from "react-icons/ri"
import style from "./Header.module.css"

const Header = ({ link }) => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const allMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const now = new Date()
  const day = now.getDate()
  const month = now.getMonth()
  const year = now.getFullYear()
  const formattedDate = `${day}th ${allMonth[+month]}, ${year}`

  return (
    <header className={style.assignment__header}>
      <div className={style.profile}>
        <img src={img} alt="" />
        <p className={style.design__mentor}>Design mentor</p>
      </div>
      <div className={style.assignment_details_grp}>
        <div className={style.assignment_details}>
          <span>
            <p className={style.assigned_number}>00</p>
            <p className={style.assigned_title}>Task Assigned</p>
          </span>
          <span>
            <p className={style.assigned_number}>00</p>
            <p className={style.assigned_title}>Admin tasks</p>
          </span>
          <span>
            <p className={style.assigned_number}>00</p>
            <p className={style.assigned_title}>Assignees</p>
          </span>
          <span>
            <p className={style.assigned_number}>00</p>
            <p className={style.assigned_title}>Notification</p>
          </span>
        </div>
        <p>{formattedDate}</p>
      </div>
      <div className={style.action_grp}>
        <div className={style.task_notif}>
          <button
            className={
              link === "Task"
                ? style.assignment__button_1
                : style.noAssignment_btn
            }
          >
            <span
              className={style.assignment__p}
              onClick={() => {
                navigate("/")
                setShow(false)
              }}
            >
              Assigned Task
            </span>
            <RiArrowDownSLine
              className={style.assignment__svg}
              style={{ color: "#B0AFB0" }}
              onClick={() => setShow(true)}
            />
          </button>
          {show && (
            <button>
              <ul className={style.assignment__lists}>
                {["By me", "For me", "Task history"].map((item, index) => (
                  <li key={index} onClick={() => setShow(false)}>
                    <Link to={`/${item.toLowerCase().replace(" ", "")}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </button>
          )}
          <button
            className={
              link === "notification"
                ? style.assignment__button_1
                : style.noAssignment_btn
            }
            onClick={() => navigate("/notification")}
          >
            Notification
          </button>
        </div>
        <button
          className={style.assignment__button}
          onClick={() => navigate("/addtask")}
        >
          Create Task
        </button>
      </div>
    </header>
  )
}

export default Header
