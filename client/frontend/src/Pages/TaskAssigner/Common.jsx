import { useState } from "react"
import { CiFilter } from "react-icons/ci"
import Filter from "../../components/filter/Filter"

import classes from "./Common.module.css"
const Common = () => {
  const [show, setShow] = useState(false)
  return (
    <section className={classes.task}>
      <div className={classes.left}>By me</div>
      <div className={classes.right}>
        <div className={classes.yes}>Yesterday</div>
        <div className={classes.fil}>
          <p className={classes.p} onClick={() => setShow(prev => !prev)}>
            Filter
          </p>
          <CiFilter className={classes.svg} />
          {show && (
            <div className={classes.div}>
              <Filter closeModal={() => setShow(false)} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default Common
