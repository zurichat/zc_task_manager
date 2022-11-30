import TableRow from "./TableRow"
import classes from "./Table.module.css"
import { useGetTasksQuery } from "../../api/TaskApi"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
const Table = () => {
  const organization_id = "61db3b27eba8adb50ca1399b"
  const {
    data: tasks,
    isLoading,
    isError
  } = useGetTasksQuery(9, organization_id)
  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.tr}>
          <th className={`${classes.th} ${classes.th1}`}>Task Name</th>
          <th className={`${classes.th} ${classes.th2}`}>Date Created</th>
          <th className={`${classes.th} ${classes.th3}`}>Deadline</th>
          <th className={`${classes.th} ${classes.th4}`}>Time</th>
          <th className={`${classes.th} ${classes.th5}`}>Others</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && <LoadingSpinner />}
        {isError && <h1 className={classes.h1}>Could not fetch tasks</h1>}
        {tasks?.data.map((item, index) => (
          <TableRow
            key={index}
            row1={item.taskTitle}
            row2={
              item.created_at
                ? new Date(item.created_at).toLocaleString()
                : "2/ 2/22"
            }
            row3={
              item.created_at
                ? new Date(item.created_at).toLocaleString()
                : "2020 - 01 - 01"
            }
            row4={
              item.created_at
                ? new Date(item.created_at).toLocaleTimeString()
                : "10:00"
            }
            row5={["Update", "Delete"]}
          />
        ))}
      </tbody>
    </table>
  )
}
export default Table
