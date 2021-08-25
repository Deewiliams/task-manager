import "./App.css";
import { TaskList } from "./Component/TaskList";
import { TaskInput } from "./Component/TaskInput";
import { TaskListContextProvider } from "./Context/TaskListContext";

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
