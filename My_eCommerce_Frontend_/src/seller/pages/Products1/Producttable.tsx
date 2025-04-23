import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Table, TableBody, TableCell, tableCellClasses,
  TableContainer, TableHead, TableRow, Paper,
  Button, IconButton
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import { fetchSellerProduct } from '../../../State/seller/sellerProductSlice';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { Product } from '../../../types/productType';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: theme.spacing(1),
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

export default function Producttable() {
  const dispatch = useAppDispatch();
  const { sellerProduct } = useAppSelector(store => store);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      dispatch(fetchSellerProduct(jwt));
    }
  }, [dispatch]);

  return (
    <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 3 }}>
      <Table sx={{ minWidth: 800 }} aria-label="seller product table">
      <TableHead
  sx={{
    position: 'sticky',
    top: 0,
    zIndex: 1,
    background: 'linear-gradient(to right, #1a1a1a, #000000)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
  }}
>
  <TableRow>
    <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Image</TableCell>
    <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Title</TableCell>
    <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }} align="right">MRP</TableCell>
    <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }} align="right">Selling Price</TableCell>
    <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }} align="right">Color</TableCell>
    <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }} align="right">Update Stock</TableCell>
    <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }} align="right">Edit</TableCell>
  </TableRow>
</TableHead>

        <TableBody>
          {sellerProduct.products.map((item: Product) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {item.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="product"
                      style={{ width: 60, height: 60, borderRadius: 6, objectFit: 'cover' }}
                    />
                  ))}
                </div>
              </StyledTableCell>
              <StyledTableCell>{item.title}</StyledTableCell>
              <StyledTableCell align="right">₹{item.mrpPrice}</StyledTableCell>
              <StyledTableCell align="right">₹{item.sellingPrice}</StyledTableCell>
              <StyledTableCell align="right">{item.color}</StyledTableCell>
              <StyledTableCell align="right">
                <Button size="small" variant="contained" color="success">
                  In Stock
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton size="small" color="primary">
                  <Edit />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
