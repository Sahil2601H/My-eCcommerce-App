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
  Paper
} from '@mui/material';

const accountStatus = [
  { status: 'ACTIVE', title: 'active', description: 'User account is currently active and has full access.' },
  { status: 'INACTIVE', title: 'inactive', description: 'User account is inactive and cannot log in.' },
  { status: 'PENDING', title: 'pending', description: 'User account is awaiting approval or activation.' },
  { status: 'SUSPENDED', title: 'suspended', description: 'User account is temporarily suspended due to policy violations.' },
  { status: 'BANNED', title: 'banned', description: 'User account has been permanently banned from the platform.' },
  { status: 'DEACTIVATED', title: 'deactivated', description: 'User account was deactivated either by admin or the user.' },
  { status: 'VERIFIED', title: 'verified', description: 'User account has been verified successfully.' },
  { status: 'UNVERIFIED', title: 'unverified', description: 'User account has not yet been verified.' }
];

// Sample data for table
const rows = [
  {
    sellerName: 'John Doe',
    email: 'johndoe@example.com',
    mobileNumber: '+1 123 456 7890',
    gstin: 'GSTIN123456789',
    businessName: 'Doe Electronics',
    status: 'Active'
  },
  {
    sellerName: 'Jane Smith',
    email: 'janesmith@example.com',
    mobileNumber: '+1 987 654 3210',
    gstin: 'GSTIN987654321',
    businessName: 'Smith Gadgets',
    status: 'Pending'
  },
  {
    sellerName: 'Michael Brown',
    email: 'michaelbrown@example.com',
    mobileNumber: '+1 456 789 1234',
    gstin: 'GSTIN456789123',
    businessName: 'Brown Tech Solutions',
    status: 'Inactive'
  }
];


function SellerTable() {
  const [selectedStatus, setSelectedStatus] = useState<string>('ACTIVE');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <>
      <div className="pb-5 w-60">
        <FormControl fullWidth>
          <InputLabel id="account-status-label">Account Status</InputLabel>
          <Select
            labelId="account-status-label"
            id="account-status-select"
            value={selectedStatus}
            label="Account Status"
            onChange={handleChange}
          >
            {accountStatus.map((item) => (
              <MenuItem key={item.status} value={item.status}>
                {item.status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden', maxWidth: '100%', marginTop: 3 }}>
  <Table sx={{ minWidth: 700, backgroundColor: '#fff' }} aria-label="seller table">
    <TableHead>
      <TableRow sx={{ backgroundColor: '#000' }}>
        <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Seller Name</TableCell>
        <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Email</TableCell>
        <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Mobile Number</TableCell>
        <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>GSTIN</TableCell>
        <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Business Name</TableCell>
        <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={row.sellerName} sx={{ backgroundColor: index % 2 === 0 ? '#fafafa' : '#fff' }}>
          <TableCell>{row.sellerName}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.mobileNumber}</TableCell>
          <TableCell>{row.gstin}</TableCell>
          <TableCell>{row.businessName}</TableCell>
          <TableCell>{row.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


    </>
  );
}

export default SellerTable;
