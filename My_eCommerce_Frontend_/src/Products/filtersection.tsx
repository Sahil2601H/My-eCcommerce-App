import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { teal } from '@mui/material/colors';
import React, { useState } from 'react';
import colors from '../Filteres/color';
import { discount } from "../Filteres/Discount";
import { priceRanges } from "../Filteres/Price"; // ✅ Correct


function FilterSection() {
  const [showMoreColors, setShowMoreColors] = useState(false);
  const [showMoreDiscounts, setShowMoreDiscounts] = useState(false);
  const [showMorePrices, setShowMorePrices] = useState(false);

  // Reusable function for filters
  const renderFilterSection = (label: string, data: any[], showMore: boolean, setShowMore: React.Dispatch<React.SetStateAction<boolean>>) => (
    <section>
      <FormControl>
        <FormLabel
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            color: teal[500],
            pb: "15px"
          }}
          className='text-2xl font-semibold'
          id={label}
        >
          {label}
        </FormLabel>
        
        <RadioGroup aria-labelledby={label} defaultValue="" name={label}>
          {data.slice(0, showMore ? data.length : 5).map((item, index) => (
            <FormControlLabel
              key={index}
              value={item.name}
              control={<Radio />}
              label={
                <div className='flex items-center gap-3'>
                  <p>{item.name}</p>
                  {item.hex && (
                    <p
                      style={{ backgroundColor: item.hex }}
                      className={`h-5 w-5 rounded-full ${item.name === "white" ? "border" : ""}`}
                    ></p>
                  )}
                </div>
              }
            />
          ))}
        </RadioGroup>

        {/* Show More / Show Less Button */}
        {data.length > 5 && (
          <Button
            onClick={() => setShowMore(!showMore)}
            size="small"
            className="text-teal-600 cursor-pointer font-semibold mt-2"
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        )}
      </FormControl>
    </section>
  );

  return (
    <div className='-z-50 space-y-5 bg-white'>
      {/* Header Section */}
      <div className='flex items-center justify-between'>
        <p className='text-lg font-semibold'>Filters</p>
        <Button size='small' className='text-teal-600 cursor-pointer font-semibold'>
          Clear All
        </Button>
      </div>

      <Divider />

      {/* Filters for Colors, Discounts, and Price */}
      {renderFilterSection("Colors", colors, showMoreColors, setShowMoreColors)}
      {renderFilterSection("Discount", discount, showMoreDiscounts, setShowMoreDiscounts)}
      {renderFilterSection("Price", priceRanges, showMorePrices, setShowMorePrices)}
    </div>
  );
}

export default FilterSection;
