import { Radio } from '@mui/material'
import React from 'react'

function AddressCard() {

    const handlechabge=(event:any)=>{
        console.log(event.target.checked)
    }
  return (
    <div className='p-5 border rounded-md flex'>
        <div  className=''>
            <Radio
            checked
            onChange={handlechabge}
            value=""
            name='radio-button'
            
            />
        </div>

        <div>
            <h1> Zosh </h1>
             <p> 
             Ahemndabad C404 chandkheda -382424

             </p>
             <p>
                <strong>Mobile No:</strong>+91 6351108442
             </p>

        </div>
    </div>
  )
}

export default AddressCard