import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import TaskAsignedPage from "./components/TaskAsigned/TaskAsigned"
import AssignerNotification from "./components/AssignerNotification/AssignerNotification"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TaskAsignedPage />} />
        <Route path="/notification" element={<AssignerNotification />} />
         
      </Routes>
    </>
  )
}
export default App
