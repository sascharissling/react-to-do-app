import React from "react";
import styled from "@emotion/styled";
import theme from "../utils/themes";

const Form = styled.form`
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;
  width: 80vw;
`;

const TodoInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  border-radius: 15px;
  padding: 5px;
  background: ${props => props.theme.mywhite};
`;

export default function TodoForm({ addToDo }) {
  const [value, setValue] = React.useState("");

  function onChange(event) {
    localStorage.setItem("todo", event.target.value);
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TodoInput
        type="text"
        className="input"
        value={value}
        placeholder="add todo..."
        onChange={onChange}
      />
    </Form>
  );
}
