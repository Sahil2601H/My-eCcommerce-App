import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Deal {
  id: number;
  name: string;
  image: string;
  images: string[];
  category: string;
  discount: number;
}

const createDeal = (
  id: number,
  name: string,
  image: string,
  images: string[],
  category: string,
  discount: number
): Deal => {
  return { id, name, image, images, category, discount };
};

const deals: Deal[] = [
  createDeal(1, 'Summer Special', '/summer.jpg', ['/summer1.jpg', '/summer2.jpg'], 'Seasonal', 20),
  createDeal(2, 'Winter Collection', '/winter.jpg', ['/winter1.jpg', '/winter2.jpg'], 'Clothing', 15),
  createDeal(3, 'Tech Bundle', '/tech.jpg', ['/tech1.jpg', '/tech2.jpg'], 'Electronics', 25),
  createDeal(4, 'Home Essentials', '/home.jpg', ['/home1.jpg', '/home2.jpg'], 'Home', 10),
  createDeal(5, 'Fitness Package', '/fitness.jpg', ['/fitness1.jpg', '/fitness2.jpg'], 'Sports', 30),
];

export default function DealTables() {
  const handleEdit = (id: number) => {
    console.log('Edit deal:', id);
    // Add edit functionality here
  };

  const handleDelete = (id: number) => {
    console.log('Delete deal:', id);
    // Add delete functionality here
  };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
      <Table sx={{ minWidth: 700 }} aria-label="deals table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NO</StyledTableCell>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Images</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Discount (%)</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deals.map((deal, index) => (
            <StyledTableRow key={deal.id}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell>
                <img 
                  src={deal.image} 
                  alt={deal.name} 
                  style={{ width: 50, height: 50, objectFit: 'cover' }} 
                />
              </StyledTableCell>
              <StyledTableCell>
                <div style={{ display: 'flex', gap: 8 }}>
                  {deal.images.map((img, i) => (
                    <img 
                      key={i}
                      src={img} 
                      alt={`${deal.name} ${i + 1}`} 
                      style={{ width: 40, height: 40, objectFit: 'cover' }} 
                    />
                  ))}
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">{deal.category}</StyledTableCell>
              <StyledTableCell align="right">{deal.discount}%</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton 
                  color="primary" 
                  onClick={() => handleEdit(deal.id)}
                  sx={{ mr: 1 }}
                >
                  <Edit />
                </IconButton>
                <IconButton 
                  color="error" 
                  onClick={() => handleDelete(deal.id)}
                >
                  <Delete />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}