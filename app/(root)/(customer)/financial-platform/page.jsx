import FinancialCard from '@/components/financial-card';
import React from 'react';

const FinancialPlatform = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="col-span-12 md:col-span-1"></div>
        <div className="col-span-12 md:col-span-10">
          <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="col-span-12 md:col-span-4">
              <FinancialCard title="Concierge Revenue." />
              <div className="bg-[#4472c4] px-3 py-4 flex mt-8 justify-between text-white items-center">
                <h2 className="text-lg">Tags Issued.</h2>
                <h2 className="text-lg">300</h2>
              </div>
              <div className="bg-[#4472c4] px-3 py-4 flex mt-4 justify-between text-white items-center">
                <h2 className="text-lg">Cancelled</h2>
                <h2 className="text-lg">10</h2>
              </div>
              <div className="bg-[#4472c4] px-3 py-4 flex mt-4 justify-between text-white items-center">
                <h2 className="text-lg">Net.</h2>
                <h2 className="text-lg">290</h2>
              </div>
              <div className="bg-[#4472c4] px-3 py-4 flex mt-4 justify-between text-white items-center">
                <h2 className="text-lg">Tag #s</h2>
                <h2 className="text-lg">100-300</h2>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4"></div>
            <div className="col-span-12 md:col-span-4">
              <FinancialCard title="Concierge Revenue." />
              <div className="bg-[#4472c4] px-3 py-4 flex mt-8 justify-between text-white items-center">
                <h2 className="text-lg">Tags Issued.</h2>
                <h2 className="text-lg">300</h2>
              </div>
              <div className="bg-[#4472c4] px-3 py-4 flex mt-4 justify-between text-white items-center">
                <h2 className="text-lg">Cancelled</h2>
                <h2 className="text-lg">10</h2>
              </div>
              <div className="bg-[#4472c4] px-3 py-4 flex mt-4 justify-between text-white items-center">
                <h2 className="text-lg">Net.</h2>
                <h2 className="text-lg">290</h2>
              </div>
              <div className="bg-[#4472c4] px-3 py-4 flex mt-4 justify-between text-white items-center">
                <h2 className="text-lg">Tag #s</h2>
                <h2 className="text-lg">100-300</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-1"></div>
      </div>
    </div>
  );
};

export default FinancialPlatform;
