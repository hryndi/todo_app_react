import TextField from "@mui/material/TextField";

interface InputItemProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
}

const InputItem = ({ setInput, inputValue }: InputItemProps) => {
  return (
    <TextField
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
