export const todoReducer = (estadoInicial, accion) => {
  switch (accion.type) {
    case "[TODO]Add Todo":
      return [...estadoInicial, accion.payload];

    case "[TODO]Remove Todo":
      return estadoInicial.filter((todo) => todo.id !== accion.payload);
    case "[TODO]Toggle Todo":
      return estadoInicial.map((todo) => {
        if (todo.id === accion.payload) {
          // id

          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    default:
      return estadoInicial;
  }
};
