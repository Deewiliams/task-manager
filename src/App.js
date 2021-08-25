import './App.css';
import { TaskList } from './component/TaskList';
import {TaskInput } from './component/TaskInput'
import {TaskListContextProvider} from './context/TaskListContext'

function App() {
  return (
    <TaskListContextProvider>
    <div className="App">
      <TaskInput />
    <TaskList />
    </div>
    </TaskListContextProvider>
  );
}

export default App;
