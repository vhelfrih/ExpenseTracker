import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#03045e",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableCellLast = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0096c7",
    color: theme.palette.common.black,
    fontSize: 15
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#00b4d8",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, balance, expiry) {
  return { name, balance, expiry };
}

const rows = [
  createData("Szállás", 159000, 6),
  createData("Vendéglátás", 237000, 9),
  createData("Szabadidő", 262000, 16),
];

export default function Balance() {
  return (
    <Container maxWidth="md" back>
      <TableContainer
        component={Paper}
        sx={{ bgcolor: "#0096c7", height: "100%", mt: 2 }}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#0096c7" }}>
              <StyledTableCell>SZÉP kártya</StyledTableCell>
              <StyledTableCell align="right">Egyenleg</StyledTableCell>
              <StyledTableCell align="right">Idén lejáró</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.balance}</StyledTableCell>
                <StyledTableCell align="right">{row.expiry}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableHead>
            <TableRow sx={{ bgcolor: "#0096c7" }}>
              <StyledTableCellLast>Bankszámla</StyledTableCellLast>
              <StyledTableCellLast align="right">2344345</StyledTableCellLast>
              <StyledTableCellLast align="right"></StyledTableCellLast>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Container>
  );
}

// const Balance = () => {
//   return (
//     <>
//       <h4>
//         SZÉP kártya egyenleg
//       </h4>
//       <div className="orsi">
//         <h2>Orsi</h2>
//         <div className="szallas"></div>
//         <div className="szallas-lejaro">0 Ft</div>
//         <div className="vendeglatas"></div>
//         <div className="vendeglatas-lejaro">0 Ft</div>
//         <div className="szabadido"></div>
//         <div className="szabadido-lejaro">0 Ft</div>
//       </div>
//       <div className="viktor">
//         <h2>Viktor</h2>
//         <div className="szallas"></div>
//         <div className="szallas-lejaro">0 Ft</div>
//         <div className="vendeglatas"></div>
//         <div className="vendeglatas-lejaro">0 Ft</div>
//         <div className="szabadido"></div>
//         <div className="szabadido-lejaro">0 Ft</div>
//       </div>
//     </>
//   );
// };

// export default Balance;
