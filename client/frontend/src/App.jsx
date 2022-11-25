import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import TaskAsignedPage from "./components/TaskAsigned/TaskAsigned"
import AddTask from "./Pages/AddTask/AddTask"
import TaskHistory from "./components/TaskHistory/TaskHistory"

import "./App.css"
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TaskAsignedPage />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/notification" element={<div>Notification</div>} />
        <Route path="/taskhistory" element={<TaskHistory />} />
      </Routes>
    </>
  )
}
export default App
