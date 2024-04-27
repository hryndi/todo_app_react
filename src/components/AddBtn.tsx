import Button from "@mui/material/Button";
interface AddBtnProps {
  addHandler: () => void;
}
const AddBtn = ({ addHandler }: AddBtnProps) => {
  return (
    <Button onClick={addHandler} variant="contained">
      +
    </Button>
  );
};

export default AddBtn;
