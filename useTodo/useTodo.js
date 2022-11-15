import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
const estadoInicial = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const accion = {
      type: "[TODO]Add Todo",
      payload: todo,
    };
    dispatch(accion);
  };
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO]Remove Todo",
      payload: id,
    });
  };
  const handleTodo = (id) => {
    dispatch({
      type: "[TODO]Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleDeleteTodo,
    handleNewTodo,
    handleTodo,
  };
};
