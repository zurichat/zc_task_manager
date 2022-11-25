import Header from "./components/Header/Header"
import TaskHistory from "./components/TaskHistory/TaskHistory"
import AssignerDeleteTask from "./components/AssignerDeleteTask/AssignerDeleteTask"

export default function Root() {
  return (
    <>
      <Header />
      <TaskHistory />
      <AssignerDeleteTask />
    </>
  )
}
