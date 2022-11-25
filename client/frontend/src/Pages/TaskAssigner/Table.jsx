import TableRow from "./TableRow"
import classes from "./Table.module.css"
const dummy_data = [
  {
    name: "Design a Mixed Reality Application",
    date: "2020-01-01",
    deadline: "2020-01-01",
    time: "10:00",
    others: ["Update", "Delete"]
  },
  {
    name: "Design a Mixed Reality Application",
    date: "2020-01-01",
    deadline: "2020-01-01",
    time: "10:00",
    others: ["Udate", "Delete"]
  },
  {
    name: "Design a Mixed Reality Application",
    date: "2020-01-01",
    deadline: "2020-01-01",
    time: "10:00",
    others: ["Update", "Delete"]
  },
  {
    name: "Design a Mixed Reality Application",
    date: "2020-01-01",
    deadline: "2020-01-01",
    time: "10:00",
    others: ["Update", "Delete"]
  },
  {
    name: "Design a Mixed Reality Application",
    date: "2020-01-01",
    deadline: "2020-01-01",
    time: "10:00",
    others: ["Update", "Delete"]
  },
  {
    name: "Design a Mixed Reality Application",
    date: "2020-01-01",
    deadline: "2020-01-01",
    time: "10:00",
    others: ["Update", "Delete"]
  },
  {
    name: "Design a Mixed Reality Application",
    date: "2020-01-01",
    deadline: "2020-01-01",
    time: "10:00",
    others: ["Update", "Delete"]
  },
  {
    name: "Design a Mixed Reality Application",
    date: "2020-01-01",
    deadline: "2020-01-01",
    time: "10:00",
    others: ["Update", "Delete"]
  },
  {
    name: "Design a Mixed Reality Application",
    date: "2020-01-01",
    deadline: "2020-01-01",
    time: "10:00",
    others: ["Update", "Delete"]
  }
]
const Table = () => {
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
        {dummy_data.map((item, index) => (
          <TableRow
            key={index}
            row1={item.name}
            row2={item.date}
            row3={item.deadline}
            row4={item.time}
            row5={item.others}
          />
        ))}
      </tbody>
    </table>
  )
}
export default Table
