import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FilterItem from "../FilterItem";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

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
              <Button
                style={{ margin: 3, color: "green", borderColor: "green" }}
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Gönder
              </Button>
              <Button
                style={{ margin: 3 }}
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Düzenle
              </Button>
              <Button
                style={{ margin: 3 }}
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Tekrar İşle
              </Button>
              <Button
                style={{ margin: 3 }}
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Durdur
              </Button>
              <Button
                style={{ margin: 3 }}
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Kopyala
              </Button>
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
