import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import TaskAsignedPage from "./components/TaskAsigned/TaskAsigned"
import AssignerNotification from "./components/AssignerNotification/AssignerNotification"
import TaskAsignedPage from "./Pages/TaskAssigner/TaskAsigned"
import AddTask from "./Pages/AddTask/AddTask"
import TaskHistory from "./Pages/TaskHistory/TaskHistory"
import AssigneeTaskHistory from "./components/AssigneeTaskHistory/assignee-task-history"

import "./App.css"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskAsignedPage />} />
        <Route path="/notification" element={<div>Notification</div>} />
        <Route path="/notification" element={<AssignerNotification />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/taskhistory" element={<TaskHistory />} />
        <Route path="/assignee-task-history" element={<AssigneeTaskHistory />} />
      </Routes>
    </>
  )
}
export default App
