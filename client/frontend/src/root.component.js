import Header from "./components/Header/Header";
import TaskHistory from './components/TaskHistory/TaskHistory'
import TaskTable from './components/TaskTable/TaskTable';

export default function Root() {
  return (
    <>
      <Header />
      <TaskHistory />
      <TaskTable />
    </>

  )
}
