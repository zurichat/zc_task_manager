import { RiArrowDownSLine } from "react-icons/ri"

import classes from "./TableRow.module.css"

const TableRow = ({ row1, row2, row3, row4, row5 }) => {
  return (
    <tr className={classes.tr}>
      <td className={`${classes.td} ${classes.td1}`}>
        <p className={classes.p}>{row1}</p>
        <RiArrowDownSLine className={classes.svg} />
      </td>
      <td className={`${classes.td} ${classes.td2}`}>{row2}</td>
      <td className={`${classes.td} ${classes.td3}`}>{row3}</td>
      <td className={`${classes.td} ${classes.td4}`}>{row4}</td>
      <td className={`${classes.td} ${classes.td5}`}>
        <span className={classes.a}>{row5[0]}</span>
        <span className={classes.b}>{row5[1]}</span>
      </td>
    </tr>
  )
}
export default TableRow
