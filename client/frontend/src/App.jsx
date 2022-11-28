import { Navigate, Route, Routes } from "react-router-dom"
import TaskAsignedPage from "./Pages/TaskAssigner/TaskAsigned"
import AddTask from "./Pages/AddTask/AddTask"
import TaskHistory from "./Pages/TaskHistory/TaskHistory"
import AssigneeTaskHistory from "./Pages/AssigneeTaskHistory/assignee-task-history"

import "./App.css"
import AssigneeOne from "./Pages/Assigneeone/AssigneeOne"
import NotificationPage from "./Pages/NotificationPage/NotificationPage"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to='byme' />} />
        <Route path="/byme" element={<TaskAsignedPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/taskhistory" element={<TaskHistory />} />
        <Route path="/feature" element={<AssigneeOne />} />
        <Route path="/assignee-task-history" element={<AssigneeTaskHistory />} />
      </Routes>
    </>
  )
}
export default App;
