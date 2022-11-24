import React from 'react'
import img from '../Header/assets/pic.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='profile'>
                <img src={img} alt='' />
                <p>Design mentor</p>
            </div>
            <div className='assignment-details-grp'>
                <div className='assignment-details'>
                    <span>
                        <p>09</p>
                        <p>Task Assigned</p>
                    </span>
                    <span>
                        <p>05</p>
                        <p>Admin tasks</p>
                    </span>
                    <span>
                        <p>24</p>
                        <p>Assignees</p>
                    </span>
                    <span>
                        <p>13</p>
                        <p>Notification</p>
                    </span>
                </div>
                <p>6th december, 2022</p>
            </div>
            <div className='action-grp'>
                <div className='task-notif'>
                    <button>Task Assigned </button>
                    <p>Notification</p>
                </div>
                <button>Add Task</button>
            </div>
        </div>
    )
}

export default Header