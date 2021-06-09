import { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import TodoButton from "./TodoButton";

const FormInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (task !== "") {
      addTask(task);
    }

    setTask("")
  };

  return (
    <StyledForm onSubmit={(e) => submitForm(e)}>
      {/* <input type="text" placeholder="Ketikkan todo di sini" /> */}
      <TextField
        id="outlined-basic"
        label="Ketikkan todo di sini"
        variant="outlined"
        size="small"
        className="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <TodoButton text="Add" color="primary" type="submit" />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  background-color: #fff;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 3rem; */
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;

  .input {
    width: 70%;
  }
`;

export default FormInput;
