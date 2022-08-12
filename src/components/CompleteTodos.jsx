import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      {todos.map((completeTodo, index) => {
        return (
          <ul key="completeTodo" className="list-row">
            <li>{completeTodo}</li>
            <button onClick={() => onClickBack(index)}>戻す</button>
          </ul>
        );
      })}
    </div>
  );
};
