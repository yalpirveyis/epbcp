import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    ColumnName: "Username",
    Kavram: "Kullanıcı Adı",
    DataType: "VARCHAR(50)",
    checkbox1: "true",
    checkbox2: "false",
    checkbox3: "true",
    checkbox4: "true",
    ColumnCount: 4,
  },
  {
    ColumnName: "Username",
    Kavram: "Bank Account",
    DataType: "VARCHAR(50)",
    checkbox1: "true",
    checkbox2: "false",
    checkbox3: "true",
    checkbox4: "true",
    ColumnCount: 4,
  },
  {
    ColumnName: "Username",
    Kavram: "Kullanıcı Adı",
    DataType: "VARCHAR(50)",
    checkbox1: "true",
    checkbox2: "false",
    checkbox3: "true",
    checkbox4: "true",
    ColumnCount: 4,
  },
];

export default function AcccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <caption>KAvram Listesi işlemleri</caption>
        <TableHead>
          <TableRow>
            <TableCell>Sütun Adı</TableCell>
            <TableCell align="right">KAvram</TableCell>
            <TableCell align="right">Veri Tipi</TableCell>
            <TableCell align="right">Birincil Anahtar</TableCell>
            <TableCell align="right">Referans Kolon</TableCell>
            <TableCell align="right">Null olaiblirmi ?</TableCell>
            <TableCell align="right">Null olaiblirmi ?</TableCell>
            <TableCell align="right">İşlem</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.ColumnName}</TableCell>
              <TableCell align="right">{row.Kavram}</TableCell>
              <TableCell align="right">{row.DataType}</TableCell>
              <TableCell align="right">{row.checkbox1}</TableCell>
              <TableCell align="right">{row.checkbox2}</TableCell>
              <TableCell align="right">{row.checkbox3}</TableCell>
              <TableCell align="right">{row.checkbox4}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  onClick={() => alert(row.Kavram + " Silindi")}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
