import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('2025-04-01', 'Sahil Halpati (sahil@example.com)', 'Ahmedabad, Gujarat, 380001', 5, 159),
  createData('2025-04-02', 'Sahil Halpati (maheshhalpti19976@gmail.com)', 'Ahmedabad, Gujarat, 380001', 3, 237),
  createData('2025-04-03', 'Sahil Halpati (maheshhalpti19975@gmail.com)', 'Ahmedabad, Gujarat, 380001', 8, 262),
  createData('2025-04-04', 'Sahil Halpati (sahil4@example.com)', 'Ahmedabad, Gujarat, 380001', 2, 305),
  createData('2025-04-05', 'Sahil Halpati (sh2748607@gmail.com)', 'Ahmedabad, Gujarat, 380001', 4, 356),
  createData('2025-04-06', 'Sahil Halpati (halpatisahil91@gmail)', 'Ahmedabad, Gujarat, 380001', 6, 322),
];

export default function CustomizedTables() {
  return (
<>
    <h1><h1  className='font-bold mb-5 text-2xl'> Transection</h1></h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Customer Details</StyledTableCell>
            <StyledTableCell align="right">Shipping Address</StyledTableCell>
            <StyledTableCell align="right">Orders</StyledTableCell>
            <StyledTableCell align="right">Ammount </StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>
  );
}
