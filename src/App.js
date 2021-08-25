import './App.css';
import { TaskList } from './component/TaskList';
import { Task } from './component/Task';
import {TaskListContextProvider} from './context/TaskListContext'

function App() {
  return (
    <TaskListContextProvider>
    <div className="App">
    {/* <TaskList /> */}
    <Task />
    </div>
    </TaskListContextProvider>
  );
}

export default App;
