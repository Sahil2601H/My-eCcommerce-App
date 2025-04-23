import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const couponStatuses = ['Active', 'Expired', 'Upcoming', 'Disabled'];

// Sample coupon data
const rows = [
  {
    code: 'SAVE20',
    startDate: '2025-04-01',
    endDate: '2025-04-30',
    minOrderValue: 100,
    discount: '20%',
    status: 'Active'
  },
  {
    code: 'FREESHIP',
    startDate: '2025-03-01',
    endDate: '2025-03-31',
    minOrderValue: 50,
    discount: 'Free Shipping',
    status: 'Expired'
  },
  {
    code: 'NEWUSER10',
    startDate: '2025-04-10',
    endDate: '2025-05-10',
    minOrderValue: 200,
    discount: '10%',
    status: 'Upcoming'
  }
];

function Coupens() {
  const [selectedStatus, setSelectedStatus] = useState<string>('Active');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <>
      <div className="pb-5 w-60">
        <FormControl fullWidth>
          <InputLabel id="status-label">Coupon Status</InputLabel>
          <Select
            labelId="status-label"
            id="status-select"
            value={selectedStatus}
            label="Coupon Status"
            onChange={handleChange}
          >
            {couponStatuses.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden', maxWidth: '100%', marginTop: 3 }}>
        <Table sx={{ minWidth: 700, backgroundColor: '#fff' }} aria-label="coupon table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#000' }}>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Coupon Code</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Start Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>End Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Min Order Value</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Discount</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Delete</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Change Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .filter((row) => row.status === selectedStatus || selectedStatus === '')
              .map((row, index) => (
                <TableRow key={row.code} sx={{ backgroundColor: index % 2 === 0 ? '#fafafa' : '#fff' }}>
                  <TableCell>{row.code}</TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                  <TableCell>${row.minOrderValue}</TableCell>
                  <TableCell>{row.discount}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <IconButton color="error" size="small">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Coupens;
