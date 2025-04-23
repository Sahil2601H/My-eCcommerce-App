import { Slider } from '@mui/material'
import React from 'react'
import Progression_rating from "./progression_rating"
function ReviewProduct() {

    function valuetext(value: number) {
        return `${value}°C`;
      }
      
  return (

    <div className='p-5 lg:px-20 flex flex-col lg:flex-row gap-20'>
        
        <section className='w-full md:w-1/2 lg:w-[30%] space-y-2'>

        <img
           className="w-[300px] h-[450px] object-cover " // Adjust size
           src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdewZcvQ61ESBDu6VkZrINEvu2wUKQUX6uLYjXthTn0_HLmVxXM3SQ79o4bGvj_ylL4eicO3ZKS4TxUtw3cLAcZ4YC9-KTsq9hOsWr1TBmYn7ux2aKrwfm&usqp=CAc'
           alt="Banarasi Sari"
        />
   
        <div>
          <p className="font-bold text-lg">Raam Clothing</p>
          <p className="text-gray-500 font-medium">Banarasi Sari</p>
        </div>
        <div className='price flex item-center gap-3 mt-2.5 text-2xl'>
    <span className='font-sans text-gray-800'>
        Rs 400

    </span>
    <span className='line-through text-gray-400'>
        Rs 999

    </span>
    <span className='font-semibold text-primary-color'>
        60% off

    </span>
    
  </div>
   
        </section>

        <section>
        <div  className=' h-[200%] overflow-hidden bg-transparent'>
        <Progression_rating/>
        </div>
        </section>
        
    </div>
  )
}

export default ReviewProduct
