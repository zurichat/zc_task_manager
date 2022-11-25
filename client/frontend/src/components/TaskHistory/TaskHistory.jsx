import React from 'react'
import tasks from './Tasks.json'
import './style.css'

const TaskHistory = () => {


    const columns = [
        { heading: 'Task Name', value: 'name' },
        { heading: 'Task type', value: 'type' },
        { heading: 'Date Created', value: 'date' }
    ]
    return (
        <div className='task-history'>
            <div className='task-history-header'>
                <h1 clas>Task history</h1>
                <div className='filter'>
                    <p>Yesterday</p>
                    <p>Filter</p>
                </div>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th>{column.heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((item) => (
                        <tr>
                            {columns.map((column) => (
                                <td>{item[`${column.value}`]}</td>
                            ))}
                            <button className='goto-btn'>Go to task</button>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskHistory