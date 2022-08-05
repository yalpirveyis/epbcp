import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function FilterItem() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl style={{ padding: 5, width: "90%" }}>
        <InputLabel id="demo-simple-select-label">Sunucu</InputLabel>
        <Select
          //  multiple={true}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Sunucu"
          onChange={handleChange}
          style={{ borderColor: "red", borderWidth: 1 }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <TextField id="outlined-basic" label="Tablo Adı" variant="outlined" />
        <TextField id="outlined-basic" label="Tablo Adı" variant="outlined" />
        <TextField id="outlined-basic" label="Tablo Adı" variant="outlined" />
        <TextField id="outlined-basic" label="Tablo Adı" variant="outlined" />
        <TextField id="outlined-basic" label="Tablo Adı" variant="outlined" />
      </FormControl>
    </div>
  );
}
