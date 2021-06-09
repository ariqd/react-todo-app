import { useState } from "react";
import logo from "./logo.svg";
// import "./App.css";
import styled from "styled-components";
import TodoItem from "./components/TodoItem";
import FormInput from "./components/FormInput";
import EditModal from "./components/EditModal";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Membaca buku",
    },
    {
      id: 2,
      title: "Bermain tic tac toe",
    },
    {
      id: 3,
      title: "Minum coklat hangat",
    },
  ]);
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState({
    id: "",
    title: "",
  });

  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const addTask = (data) => {
    const id = todos.length;

    // console.log(id);

    const newData = {
      id: id + 1,
      title: data,
    };

    setTodos([...todos, newData]);
  };

  const openEditModal = (id, data) => {
    setIsEdit(true);

    setEdit({
      id,
      title: data,
    });
  };

  const closeEditModal = () => {
    setIsEdit(false);
  };

  const editTask = (e) => {
    setEdit({ ...edit, title: e.target.value });
  };

  const updateTask = () => {
    const { id, title } = edit;

    const newData = { id, title };

    const newTodos = todos;

    newTodos.splice(id - 1, 1, newData);

    setTodos(newTodos);
    setIsEdit(false);
    setEdit({
      id: "",
      title: "",
    });
  };

  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        <h3>Todo List</h3>
      </Logo>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTask={deleteTask}
          openEditModal={openEditModal}
        />
      ))}

      <FormInput addTask={addTask} />

      {isEdit && (
        <EditModal
          closeEditModal={closeEditModal}
          edit={edit}
          editTask={editTask}
          updateTask={updateTask}
        />
      )}
    </Container>
  );
}

const Container = styled.section`
  width: 40%;
  margin: 0 auto;
  height: 100vh;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  img {
    width: 100px;
  }

  h3 {
    color: #2da4fd;
  }
`;

export default App;
