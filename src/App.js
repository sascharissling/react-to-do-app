import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./utils/themes";

//function imports
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
//function imports

//STYLE Start
const ToDoList = styled.div`
  background: ${props => props.theme.primary};
  width: 80vw;
  height: 80vh;
  margin: 20px;
  border-radius: 15px;
  overflow: auto;
`;
const AppContainer = styled.div`
  background: transparent;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;
//STYLE End

export default function App() {
  const [todos, setToDos] = React.useState([]);

  function addToDo(task) {
    const newToDos = [...todos, { task }];
    setToDos(newToDos);
  }

  function completeToDo(index) {
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setToDos(newToDos);
  }

  function deleteToDo(index) {
    const newToDos = [...todos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyles />
        <h1>wat t0 deux ¯\(°_o)/¯ </h1>
        <ToDoList>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeToDo={completeToDo}
              deleteToDo={deleteToDo}
            />
          ))}
        </ToDoList>
        <TodoForm addToDo={addToDo} />
      </AppContainer>
    </ThemeProvider>
  );
}
