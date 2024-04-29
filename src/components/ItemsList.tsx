import styled from "@emotion/styled";
import { styled as muiStyled } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Ul = styled.ul`
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 6px 6px,
    rgba(0, 0, 0, 0.07) 0px 10px 22px, rgba(0, 0, 0, 0.07) 0px 22px 64px;
  padding: 2.5rem;
  border-radius: 10px;
  /* border: #cdcdcd 2px solid; */
  list-style-type: circle;
  background: linear-gradient(
    70deg,
    rgba(131, 58, 180, 0.25) 0%,
    rgba(205, 152, 77, 0.25) 40%,
    rgba(156, 240, 109, 0.25) 100%
  );
  height: 400px;
  overflow-y: auto;
`;
const Li = styled.li`
  font-weight: 500;
  font-size: 1.1em;
  position: relative;
  &.isDone {
    color: #1a01ff2f;
    background-clip: text;

    text-decoration: line-through;
    position: relative;
  }
  &.isDone::after {
    content: "";
    position: absolute;

    left: 0;
    top: 50%;
    height: 1px;
    background: #1d29706b;
    width: 100%;
    display: block;
  }
`;

const StyledCheckBox = muiStyled(Checkbox)(() => ({}));

interface ItemListProps {
  itemLi: { id: string; content: string; isDone: boolean }[];
  checkboxHandler: (id: string) => void;
  editHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
}

const ItemList = ({
  itemLi,
  checkboxHandler,
  editHandler,
  deleteHandler,
}: ItemListProps) => {
  return (
    <Ul>
      {itemLi.map((item) => (
        <Li key={item.id} className={item.isDone ? "isDone" : undefined}>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              wordBreak: "break-all",
            }}
          >
            {item.content}

            <div>
              <StyledCheckBox
                onClick={() => checkboxHandler(item.id)}
                checked={item.isDone}
              />

              <IconButton onClick={() => editHandler(item.id)}>
                <DriveFileRenameOutlineIcon />
              </IconButton>
              <IconButton onClick={() => deleteHandler(item.id)}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </div>
        </Li>
      ))}
    </Ul>
  );
};

export default ItemList;
