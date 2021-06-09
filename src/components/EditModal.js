import TextField from "@material-ui/core/TextField";
import TodoButton from "./TodoButton";
import styled from "styled-components";

const EditModal = ({ closeEditModal, edit, editTask, updateTask }) => {
  return (
    <ModalContainer>
      <ModalBox>
        <h3>Edit Task</h3>
        <TextField
          label="Ketikkan todo di sini"
          variant="outlined"
          size="small"
          className="input"
          defaultValue={edit.title}
          onChange={editTask}
        />

        <ModalButtons>
          <TodoButton color="primary" text="Submit" onClick={updateTask} />
          <TodoButton
            color="secondary"
            text="Cancel"
            onClick={closeEditModal}
          />
        </ModalButtons>
      </ModalBox>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalBox = styled.div`
  width: 40%;
  height: 10rem;
  background: #fff;
  position: absolute;
  top: 40%;
  left: 50%;
  padding: 25px;
  text-align: center;
  transform: translate(-50%, -50%);
  border-radius: 5px;

  h3 {
    color: #2da4f8;
  }

  .input {
    width: 80%;
    height: 2rem;
    margin: 0.5rem 0;
    padding: 0 0.5rem;
  }
`;

const ModalButtons = styled.div`
  margin: 1rem 0;
`;

export default EditModal;
