import styled from "@emotion/styled";
import { styled as muiStyled } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const Ul = styled.ul``;
const Li = styled.li``;
const StyledCheckBox = muiStyled(Checkbox)(() => ({}));

interface ItemListProps {
  itemLi: { id: string; content: string; isDone: boolean }[];
  checkboxHandler: (id: string) => void;
  editHandler: (id: string) => void;
}

const ItemList = ({ itemLi, checkboxHandler, editHandler }: ItemListProps) => {
  return (
    <Ul>
      {itemLi.map((item) => (
        <Li key={item.id} style={{ textDecoration: item.isDone ? "line-through" : undefined }}>
          {item.content}
          <StyledCheckBox onClick={() => checkboxHandler(item.id)} checked={item.isDone} />
          <IconButton onClick={() => editHandler(item.id)}>
            <DriveFileRenameOutlineIcon />
          </IconButton>
        </Li>
      ))}
    </Ul>
  );
};

export default ItemList;
