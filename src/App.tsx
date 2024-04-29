import DateInfo from "./components/DateInfo";
import ItemsList from "./components/ItemsList";
import InputItem from "./components/InputItem";
import AddBtn from "./components/AddBtn";
import styled from "@emotion/styled";
import { styled as muiStyled } from "@mui/material";
import Box from "@mui/material/Box";
import { useTodo } from "./hooks/useTodo";

const MainWrapp = styled.div``;
const ContentWrapp = muiStyled(Box)(() => ({
  padding: "2rem",
  paddingBlock: "3rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "space-between",
  background: "radial-gradient(circle, #63a3bf 0%, #8cc3a9 100%)",
  textAlign: "center",
  // border: "1px black solid",
  borderRadius: "15px",
  "@media all and (max-width: 600px)": {
    minWidth: "100vw",
    minHeight: "100vh",
  },
  "@media all and (min-width: 600px)": {
    width: "600px",
    height: "700px",
  },
}));
const GroupWrapp = styled.div`
  display: flex;
  flex-direction: column;
  &.gap-1_5 {
    gap: 1rem;
  }
`;

function App() {
  const {
    addHandler,
    task,
    setTask,
    itemLi,
    checkBoxHandler,
    editHandler,
    deleteHandler,
    itemId,
  } = useTodo();
  return (
    <MainWrapp>
      <ContentWrapp boxShadow={6}>
        <GroupWrapp>
          <DateInfo />
          <h1>Dima`s Todo App</h1>
        </GroupWrapp>

        <ItemsList
          deleteHandler={deleteHandler}
          editHandler={editHandler}
          checkboxHandler={checkBoxHandler}
          itemLi={itemLi}
        />
        <GroupWrapp className="gap-1_5">
          <InputItem inputValue={task} setInput={setTask} />
          {itemId === "" ? (
            <AddBtn addHandler={addHandler}> + Add Item</AddBtn>
          ) : (
            <AddBtn addHandler={addHandler}>Edit Item</AddBtn>
          )}
        </GroupWrapp>
      </ContentWrapp>
    </MainWrapp>
  );
}

export default App;
