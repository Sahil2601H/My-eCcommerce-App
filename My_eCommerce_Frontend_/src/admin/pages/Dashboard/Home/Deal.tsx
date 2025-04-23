import { Button } from '@mui/material';
import React, { useState } from 'react';
import DealTable from './DealTable';
import DealTableCategory from './DealTableCategory';
import CreateDeal from './CreateDealForm'; // Make sure to import your CreateDeal component

const tabs = ["Deals", "Category", "Create Deal"];

function Deal() {
  const [activeTab, setActiveTab] = useState("Deals");

  return (
    <>
      <div>
        <div className='flex gap-4'>
          {tabs.map((item) => {
            const isActive = activeTab === item;
            return (
              <Button
                key={item}
                onClick={() => setActiveTab(item)}
                variant={isActive ? "contained" : "outlined"}
                className={`py-2 px-6 rounded-md shadow-md transition-all duration-300 normal-case ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800'
                    : 'hover:bg-blue-50'
                }`}
                disableElevation
                sx={{
                  '&.MuiButton-outlined': {
                    borderColor: '#3b82f6', // blue-500
                    color: '#1d4ed8' // blue-700
                  }
                }}
              >
                {item}
              </Button>
            );
          })}
        </div>
      </div>

      <div className='mt-6'>
        {activeTab === "Deals" && <DealTable />}
        {activeTab === "Category" && <DealTableCategory />}
        {activeTab === "Create Deal" && <CreateDeal />}
      </div>
    </>
  );
}

export default Deal;