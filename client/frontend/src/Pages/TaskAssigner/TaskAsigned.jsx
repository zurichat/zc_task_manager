import Header from "../../components/Header/Header"
import Common from "./Common"
import Table from "./Table"

import "./Taskassigned.css"
const TaskAsignedPage = () => {
  return (
    <section style={{ width: "100%", padding: "2rem 3rem 1.5rem" }}>
      <Header
      link='Task'
      />
      <Common />
      <Table />
    </section>
  )
}
export default TaskAsignedPage
