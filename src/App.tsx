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
  display: "flex",
  flexDirection: "column",

  border: "1px black solid",
  width: "100svw",
  height: "100svh",
}));

function App() {
  const { addHandler, task, setTask, itemLi, checkBoxHandler, editHandler } = useTodo();
  return (
    <MainWrapp>
      <ContentWrapp>
        <DateInfo />
        <h1>Dima`s Todo App</h1>
        <ItemsList editHandler={editHandler} checkboxHandler={checkBoxHandler} itemLi={itemLi} />
        <InputItem inputValue={task} setInput={setTask} />
        <AddBtn addHandler={addHandler} />
      </ContentWrapp>
    </MainWrapp>
  );
}

export default App;
