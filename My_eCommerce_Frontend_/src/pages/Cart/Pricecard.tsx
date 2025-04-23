import { Divider } from '@mui/material'
import React from 'react'

function Pricecard() {
  return (
    <div  className='space-y-3 p-5 '>
        <div  className='flex justify-between item-center'>
            <span>Subtotal</span>
            <span>
                7990
            </span>

        </div>

        <div  className='flex justify-between item-center'>
            <span>Discount</span>
            <span>
                700
            </span>

        </div>

        <div  className='flex justify-between item-center'>
            <span>Shipping</span>
            <span>
             ₹ 50
            </span>

        </div>

        <div  className='flex justify-between item-center'>
            <span>Platform Fee</span>
            <span>
             50
            </span>

        </div>

        <Divider/>

        <div  className='flex justify-between item-center'>
            <span><strong>Total</strong></span>
            <span>
            ₹ 6990
            </span>

        </div>


    </div>
  )
}

export default Pricecard