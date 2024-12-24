import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const Matieres = ({ data }) => {
  return (
    <TableContainer
      component={Paper}
      style={{ margin: "20px 0", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <Typography
        variant="h6"
        component="div"
        style={{ textAlign: "center", padding: "10px", fontWeight: "bold" }}
      >
        List of Students
      </Typography>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#f5f5f5" }}>
            <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Course</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((element, index) => (
            <TableRow
              key={element?.unique_id}
              style={{
                backgroundColor: index % 2 === 0 ? "#fafafa" : "white",
              }}
            >
              <TableCell>{element?.unique_id}</TableCell>
              <TableCell>{element?.course}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Matieres;
