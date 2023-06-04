import TodoList from "../components/To do/TodoList";

export const App = () => {
  return (
    <div className="todo-app">
      <a
        href="https://github.com/Gulxumor/my-react-project/tree/for/src"
        target={"blank"}
        style={{ marginTop: "20px" }}
      >
        Source code
      </a>
      <TodoList />
    </div>
  );
};
