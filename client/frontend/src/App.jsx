import { Route, Routes } from "react-router-dom"
import TaskAsignedPage from "./Pages/TaskAssigner/TaskAsigned"
import AddTask from "./Pages/AddTask/AddTask"
import TaskHistory from "./Pages/TaskHistory/TaskHistory"
import Notification from "./Pages/TaskNotification/Notification"

import "./App.css"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskAsignedPage />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/taskhistory" element={<TaskHistory />} />
      </Routes>
    </>
  )
}
export default App
