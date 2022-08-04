import "./App.scss";
import NewTask from "./components/NewTask.jsx";
import TodoList from "./components/TodoList.jsx";
function App() {
  return (
    <div className="App">
      <NewTask />
      <TodoList />
    </div>
  );
}

export default App;
