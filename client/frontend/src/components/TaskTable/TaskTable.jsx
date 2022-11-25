import React from 'react'
import './TaskTable.css';
import Shape from '../../assets/Shape.png'

const TaskTable = () => {
  return (
    <div className='main'>
        <table>
              <tr>
                  <th>Task Name</th>
                  <th>Start Date</th>
                  <th>Deadline</th>
                  <th>Time</th>
                  <th>Submission Format <img src={Shape} alt="shape" /></th>
              </tr>

              <tr>
                  <td>Post the design task for the week. <img src={Shape} alt="shape" /></td>
                  <td>22/08/22</td>
                  <td>13/03/22</td>
                  <td>5:00 pm</td>
                  <td className='submission'>View Submissions</td>
              </tr>

              <tr>
                  <td>Come up with 5 different design task <img src={Shape} alt="shape" /></td>
                  <td>22/08/22</td>
                  <td>13/03/22</td>
                  <td>5:00 pm</td>
                  <td className='submission'>View Submissions</td>
              </tr>

              <tr>
                  <td>Come up with 5 different design task <img src={Shape} alt="shape" /></td>
                  <td className='danger'>22/08/22</td>
                  <td className='danger'>13/03/22</td>
                  <td className='danger'>5:00 pm</td>
                  <td className='submission'>View Submissions</td>
              </tr>

              <tr>
                  <td>Come up with 5 different design task <img src={Shape} alt="shape" /></td>
                  <td className='danger'>22/08/22</td>
                  <td className='danger'>13/03/22</td>
                  <td className='danger'>5:00 pm</td>
                  <td className='submission'>View Submissions</td>
              </tr>
        </table>
    </div>
  )
}

export default TaskTable