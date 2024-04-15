import React from 'react';

const FinancialCard = ({ title }) => {
  return (
    <div className="bg-[#4472c4] py-5 pl-4 pr-5 text-white min-h-[300px]">
      <div className="flex justify-between items-start">
        <h2 className="">{title}</h2>
        <div className="mb-4">
          <h2 className="pb-3">Date Range</h2>
          <h2 className="">Pull Down Menu</h2>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <h2 className="">$ 0000.00</h2>
        <div>
          <p>Today Date</p>
          <p>Monthly</p>
          <p>Annual</p>
          <p>Custom Date</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialCard;
