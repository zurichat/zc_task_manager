import { useState } from "react"
import { RiArrowDownSLine } from "react-icons/ri"
import AssignedModal from "../../components/AssignedModal/AssignedModal"
import AssignerDeleteTask from "../../components/AssignerDeleteTask/AssignerDeleteTask"
import useFetch from "../../hooks/useFetch"

import classes from "./TableRow.module.css"

const TableRow = ({ row1, row2, row3, row4, row5 }) => {
  const [show, setShow] = useState(false)
  const [descModal, setDescModal] = useState(false)

  const { fetchRequest: updateRequest } = useFetch()

  // Update the task status handler
  const updateHandler = () => {
    updateRequest({
      url: "http://localhost:5000/api/tasks/update",
      method: "PATCH",
      body: {
        id: row1,
        status: "Assigned"
      },
      errorMessage: "Could not update task"
    })
  }

  const deleteHandler = () => {
    updateRequest({
      url: `http://localhost:5000/api/tasks/${id}`,
      method: "DELETE"
    })
  }

  return (
    <tr className={classes.tr}>
      <td className={`${classes.td} ${classes.td1}`}>
        <p className={classes.p}>{row1}</p>
        <RiArrowDownSLine
          className={classes.svg}
          onClick={() => setDescModal(true)}
        />
        {descModal && <AssignedModal closeModal={() => setDescModal(false)} />}
      </td>
      <td className={`${classes.td} ${classes.td2}`}>{row2}</td>
      <td className={`${classes.td} ${classes.td3}`}>{row3}</td>
      <td className={`${classes.td} ${classes.td4}`}>{row4}</td>
      <td className={`${classes.td} ${classes.td5}`}>
        <span className={classes.a} onClick={updateHandler}>
          {row5[0]}
        </span>
        <span className={classes.b} onClick={() => setShow(true)}>
          {row5[1]}
        </span>
      </td>
      {show && (
        <AssignerDeleteTask
          closeModal={() => setShow(false)}
          onDelete={deleteHandler}
        />
      )}
    </tr>
  )
}
export default TableRow
