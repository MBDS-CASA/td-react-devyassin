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

const Etudiants = ({ data }) => {
  return (
    <TableContainer component={Paper} style={{ margin: "20px 0", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
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
            <TableCell style={{ fontWeight: "bold" }}>First Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((element, index) => (
            <TableRow
              key={element?.student.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#fafafa" : "white",
              }}
            >
              <TableCell>{element?.student.id}</TableCell>
              <TableCell>{element?.student.firstname}</TableCell>
              <TableCell>{element?.student.lastname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Etudiants;
