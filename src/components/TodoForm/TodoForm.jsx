import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SAVE_TODO } from "../../store/constants";
import "./TodoForm.scss";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: SAVE_TODO,
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });
    setNewTodo("");
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="Form__input"
        value={newTodo}
        onChange={handleChange}
        type="text"
        placeholder="here your todo..."
      />
      <button className="Form__button" type="submit">
        Save todo
      </button>
    </form>
  );
};

export default TodoForm;
