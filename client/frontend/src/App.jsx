import { Route, Routes } from "react-router-dom"
import AsssigneeOne from "./components/Assigneeone/AssigneeOne"
import Header from "./components/Header/Header"
import TaskAsignedPage from "./components/TaskAsigned/TaskAsigned"

const App = () => {
  return (
    <>
      <Header />  
      <Routes>
        <Route path="/" element={<TaskAsignedPage />} />
        <Route path="/notification" element={<div>Notification</div>} />
        <Route path ="/assigneeone" element= {<AsssigneeOne />} />
      </Routes>
    </>
  )
}
export default App
