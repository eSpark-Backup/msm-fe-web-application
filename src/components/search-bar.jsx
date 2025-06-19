import { IconButton, InputAdornment, TextField } from "@mui/material";
import { search } from "../assets";

const SearchBar = ({ name, placeholder, onInputChange, value }) => {
  return (
    <TextField
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onInputChange}
      value={value}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={search} alt="icon" style={{ width: 30, height: 30 }} />
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          background: "transparent",
          border: "1px solid #999797",
          color: "#A1A1AA",
          fontSize: "15.5px",
          fontWeight: "500",
          height: "50px",
          width: { xs: "100%", md: "320px" },
        },
        "& .MuiOutlinedInput-input": {
          // Optional: set padding or override input style
        },
      }}
    />
  );
};

export default SearchBar;
