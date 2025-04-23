import { Button, Card, Divider } from '@mui/material'
import React from 'react'
import Transection from './Transection'

function Payment() {
  return (
    <div >
   
      <Card className='rounded-md space-y-4 p-5'>
        <h1> Total Earning</h1>
        <h1 className='font-bold text-xl pb-1'>9803</h1>
        <Divider/>
         
        <Button 
          variant="contained" 
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
        >
          Transaction
        </Button>
        
        <Transection/>
        
      </Card>

    </div>
  )
}

export default Payment