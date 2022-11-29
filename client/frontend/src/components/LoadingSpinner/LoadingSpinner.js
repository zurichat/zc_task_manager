import { ImSpinner10 } from "react-icons/im"
import classes from "./LoadingSpinner.module.css"

const LoadingSpinner = () => {
  return (
    <div className={classes.spinner__box}>
      <ImSpinner10 className={classes.spinner} />
      <h2 className={classes.h2}>Loading...</h2>
    </div>
  )
}
export default LoadingSpinner
