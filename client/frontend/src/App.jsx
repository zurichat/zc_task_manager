import { Route, Routes } from "react-router-dom"
import AssignerNotification from "./components/AssignerNotification/AssignerNotification"
import TaskAsignedPage from "./Pages/TaskAssigner/TaskAsigned"
import AddTask from "./Pages/AddTask/AddTask"
import TaskHistory from "./Pages/TaskHistory/TaskHistory"
import AssigneeTaskHistory from "./Pages/AssigneeTaskHistory/assignee-task-history"

import "./App.css"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskAsignedPage />} />
        <Route path="/notification" element={<AssignerNotification />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/taskhistory" element={<TaskHistory />} />
        <Route path="/assignee-task-history" element={<AssigneeTaskHistory />} />
      </Routes>
    </>
  )
}
export default App
