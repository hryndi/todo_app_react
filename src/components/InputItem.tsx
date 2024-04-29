import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
const StyledInput = styled(TextField)(() => ({
  marginInline: "auto",
  width: "200px",
  "@media all and (min-width: 600px)": {
    width: "400px",
  },
  "&.InputLabel": {
    textAlign: "center",
  },
  "& label": {
    width: "100%",
    textAlign: "center",
    transformOrigin: "center",
  },
  "& .MuiFormControl-root.MuiTextField-root.css-1q20dmu-MuiFormControl-root-MuiTextField-root":
    {
      maxWidth: "300px !important",
    },
  "& .MuiInputBase-input.MuiInput-input.MuiInputBase-inputTypeSearch": {
    textAlign: "center",
  },
  "& .css-10ypl9g-MuiFormControl-root-MuiTextField-root": {
    maxWidth: "300px",
    marginInline: "5rem",
  },
}));

interface InputItemProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
}

const InputItem = ({ setInput, inputValue }: InputItemProps) => {
  return (
    <StyledInput
      onChange={(e) => setInput(e.target.value)}
      value={inputValue}
      id="standard-search"
      label="Add Item"
      type="search"
      variant="standard"
    />
  );
};

export default InputItem;
