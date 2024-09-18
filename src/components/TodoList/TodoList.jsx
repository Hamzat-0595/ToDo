import React from "react";
import { useSelector } from "react-redux";
import DeleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { DELETE_TODO } from "../../store/constants";
import "./TodoList.scss";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const removeTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };
  if (!todos || !todos.length) {
    return <p>NO TODOS</p>;
  }
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <li key={todo.id} className="TodoList__item">
          <div>{todo.label}</div>
          <div>
            <img
              src={DeleteLogo}
              alt="delete"
              className="TodoList__delete-btn"
              onClick={(e) => removeTodo(todo.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
