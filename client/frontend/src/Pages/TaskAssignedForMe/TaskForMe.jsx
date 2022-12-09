import Header from "../../components/Header/Header"
import Pagination from "../../components/Pagination/Pagination"
import Common from "../TaskAssigner/Common"
import Table from "../TaskAssigner/Table"

import "../TaskAssigner/Taskassigned.css"
const TaskAsignedPage = () => {
  return (
    <section style={{ width: "100%", padding: "2rem 3rem 1.5rem" }}>
      <Header
        link='Task'
      />
      <Common title={'For me'} />
      <Table />
      <Pagination />
    </section>
  )
}
export default TaskAsignedPage