import { React, useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        {incompleteTodos.map((todo) => {
          return (
            <ul key="todo" className="list-row">
              <li>{todo}</li>
              <button>完了</button>
              <button>削除</button>
            </ul>
          );
        })}
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        {completeTodos.map(() => {
          return (
            <ul className="list-row">
              <li>完了ものが入ります。</li>
              <button>戻す</button>
            </ul>
          );
        })}
      </div>
    </>
  );
};
