import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material'
import React from 'react'

function ReviewCard() {
  return (
    <div>
    <div>
        <div className="flex items-center gap-3">
      <Avatar sx={{ width: 56, height: 56, bgcolor: "#9155FD", color: "white" }}>
        S
      </Avatar>
      <p className="font-semibold">Sahil</p>
      
    </div>
    <Rating
    readOnly
    value={4}
    precision={1}
    />
        </div>
        <IconButton>
            <Delete/>
        </IconButton>
    
    </div>
    
  )
}

export default ReviewCard
