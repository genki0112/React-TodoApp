import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      {todos.map((incompleteTodo, index) => {
        return (
          <ul key="incompleteTodo" className="list-row">
            <li>{incompleteTodo}</li>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </ul>
        );
      })}
    </div>
  );
};
