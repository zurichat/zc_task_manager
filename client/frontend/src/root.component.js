import Header from "./components/Header/Header"
import TaskHistory from "./components/TaskHistory/TaskHistory"
import AssignerDeleteTask from "./components/AssignerDeleteTask/AssignerDeleteTask"

export default function Root() {
  return (
    <>
      <Header />
      <TaskHistory />
      {/* The below AssignerDeleteTask should be moved into the Assigner/ Candidate Task Assigned page and be toggled from there and closed with prop close_modal */}
      {/* <AssignerDeleteTask /> */}
    </>
  )
}
