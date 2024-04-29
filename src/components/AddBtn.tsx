import Button from "@mui/material/Button";
interface AddBtnProps {
  addHandler: () => void;
  children: string;
}
const AddBtn = ({ addHandler, children }: AddBtnProps) => {
  return (
    <Button
      style={{ borderRadius: "3.333rem", fontSize: "1rem" }}
      onClick={addHandler}
      variant="contained"
    >
      {children}
    </Button>
  );
};

export default AddBtn;
