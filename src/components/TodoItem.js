import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import TodoButton from "./TodoButton";

const TodoItem = ({ todo, deleteTask, openEditModal }) => {
  return (
    <StyledCard>
      <StyledCardContent style={{ padding: "0.5rem 1rem" }}>
        <p>{todo.title}</p>
        <div>
          <TodoButton
            text="Edit"
            color="default"
            onClick={() => openEditModal(todo.id, todo.title)}
          />
          <TodoButton
            text="Delete"
            color="secondary"
            onClick={() => deleteTask(todo.id)}
          />
        </div>
      </StyledCardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  margin-bottom: 0.5rem;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2da4f8;
  color: #fff;
`;

export default TodoItem;
