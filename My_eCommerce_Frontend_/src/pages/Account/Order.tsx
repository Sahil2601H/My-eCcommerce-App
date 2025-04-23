import React from 'react'
import OrderItem from './orderItem'


function Order() {
  return (
    <div className='text -sm min-h-screen'>
          <div className='pb-5'>
          <h1 className="font-bold text-center">
   All Your Order
</h1> 
            <p>  </p>

          </div>

          <div className="space-y-2  justify-end w-full max-w-[600px]">
           {[1].map((item)=>(<OrderItem/>))}
             
          </div>


    </div>
  )
}

export default Order