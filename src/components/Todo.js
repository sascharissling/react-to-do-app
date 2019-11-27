import React from "react";
import styled from "@emotion/styled";

//STYLE Start
const TodoItem = styled.div`
  background: ${props => props.theme.backdrop};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-radius: 15px;
  margin: 10px 5px 10px 5px;
  align-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Task = styled.h3`
  color: black;
`;

const CompleteButton = styled.div`
  background: ${props => props.theme.mywhite};
  border-radius: 15px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.primary};
  }
`;
const DeleteButton = styled.div`
  background: ${props => props.theme.action};
  border-radius: 15px;
  margin-right: 10px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.primary};
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 5px;
`;
//STYLE End

export default function Todo({ todo, index, completeToDo, deleteToDo }) {
  return (
    <TodoItem>
      <Task style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.task}
      </Task>

      <Buttons>
        <DeleteButton onClick={() => completeToDo(index)}>done</DeleteButton>
        <CompleteButton onClick={() => deleteToDo(index)}>
          delete
        </CompleteButton>
      </Buttons>
    </TodoItem>
  );
}
