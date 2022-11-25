import { CiFilter } from "react-icons/ci"

import classes from "./Common.module.css"
const Common = () => {
  return (
    <section className={classes.task}>
      <div className={classes.left}>By me</div>
      <div className={classes.right}>
        <div className={classes.yes}>Yesterday</div>
        <div className={classes.fil}>
          <p className={classes.p}>Filter </p>
          <CiFilter className={classes.svg} />
        </div>
      </div>
    </section>
  )
}
export default Common
