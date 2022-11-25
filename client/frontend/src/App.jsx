import { Route, Routes } from "react-router-dom"
import TaskAsignedPage from "./Pages/TaskAssigner/TaskAsigned"
import AddTask from "./Pages/AddTask/AddTask"
import TaskHistory from "./Pages/TaskHistory/TaskHistory"

import "./App.css"
import AssigneeOne from "./Pages/Assigneeone/AssigneeOne"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskAsignedPage />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/notification" element={<div>Notification</div>} />
        <Route path="/taskhistory" element={<TaskHistory />} />
        <Route path="/feature" element={<AssigneeOne />} />
      </Routes>
    </>
  )
}
export default App;
