import { InputAdornment, TextField } from "@mui/material";

const OutlinedInput = ({
  placeholder,
  onInputChange,
  name,
  value,
  sx,
  onKeyDown,
  disabled,
  startAdornment,
  multiline,
}) => {
  return (
    <>
      <TextField
        name={name}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
        sx={sx}
        onKeyDown={onKeyDown}
        disabled={disabled}
        InputProps={{
          startAdornment: startAdornment && (
            <InputAdornment position="start">
              {typeof startAdornment === "string" ? (
                <img
                  src={startAdornment}
                  alt="icon"
                  style={{ width: 24, height: 24 }}
                />
              ) : (
                startAdornment
              )}
            </InputAdornment>
          ),
        }}
        multiline={multiline}
      />
    </>
  );
};

export default OutlinedInput;
