import "./App.scss";
import NewTask from "./components/NewTask.jsx";
import TodoList from "./components/TodoList.jsx";
function App() {
  return (
    <div className="App">
      <div className="container">
        <NewTask />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
