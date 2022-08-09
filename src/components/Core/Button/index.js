import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Button({ children }) {
  return (
    <button onClick={() => alert(children + "işlemi yapıldı")}>
      <Box component={Paper} style={{ margin: 5, padding: 15 }}>
        <div>{children}</div>
      </Box>
    </button>
  );
}
