import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import TaskAsignedPage from "./components/TaskAsigned/TaskAsigned"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TaskAsignedPage />} />
        <Route path="/notification" element={<div>Notification</div>} />
      </Routes>
    </>
  )
}
export default App
