import { Route, Routes } from "react-router-dom"
import AssigneeTaskHistory from "./components/AssigneeTaskHistory/assignee-task-history"
import Header from "./components/Header/Header"
import TaskAsignedPage from "./components/TaskAsigned/TaskAsigned"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TaskAsignedPage />} />
        <Route path="/notification" element={<div>Notification</div>} />
        <Route path="/assignee-task-history" element={<AssigneeTaskHistory />} />
      </Routes>
    </>
  )
}
export default App
