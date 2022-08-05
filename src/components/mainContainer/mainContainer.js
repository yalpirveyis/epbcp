import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FilterItem from "../FilterItem";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Paper from "@mui/material/Paper";

export const Item = ({ children }) => {
  return <div>{children}</div>;
};
export default function MainContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Grid
      style={{ padding: 15, backgroundColor: "grey" }}
      container
      spacing={2}
    >
      <Grid xs={isOpen == true ? 1 : 2}>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </Grid>
      <Grid xs={isOpen == true ? 11 : 10} p={2}>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Stack direction="row" md={12} p={1} spacing={2}>
          <Grid md={4}>
            <Box component={Paper} style={{ margin: 5 }}>
              <FilterItem />
            </Box>
          </Grid>
          <Grid md={8}>
            <Box component={Paper} style={{ margin: 5, padding: 15 }}>
              Burada icon olan butonlar olacak{" "}
            </Box>
            <Box component={Paper} style={{ margin: 5 }}>
              <Main />
            </Box>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
