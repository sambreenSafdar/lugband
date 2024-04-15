'use client';
import HotelCard from '@/components/hotel-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { checkout } from '@/lib/checkout';
import React, { useState } from 'react';

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Lugband = () => {
  const [activeValue, setActiveValue] = useState(2);
  const handleClick = (val) => {
    setActiveValue(val);
  };
  const hotels = [
    { id: '01000420', name: 'one' },
    { id: '01000421', name: 'two' },
    { id: '01000422', name: 'three' },
    { id: '01000423', name: 'four' },
    { id: '01000424', name: 'five' },
    { id: '01000425', name: 'six' },
    { id: '01000426', name: 'seven' },
    { id: '01000427', name: 'eight' },
    { id: '01000428', name: 'nine' },
    { id: '01000429', name: 'ten' },
  ];

  const handleProductCheckout = () => {
    let item = {
      price: 'price_1Ouz7HHaeicZDaivZg01JSUG',
      quantity: activeValue,
    };

    checkout({
      lineItems: [item],
    });
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="col-span-12 md:col-span-1"></div>
        <div className="col-span-12 md:col-span-10">
          <div className="grid grid-cols-12 gap-8 mt-10">
            <div className="col-span-12 md:col-span-4">
              <Input defaultValue={activeValue} />
              <div className="flex gap-4 flex-wrap justify-center mt-10">
                {options.map((option) => (
                  <Button
                    className="w-12 h-12"
                    size="icon"
                    key={option}
                    onClick={() => handleClick(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <div className="bg-gray-600 py-6 min-h-[300px] flex items-center px-8 text-white mt-10">
                <div className="w-full text-center">
                  <div className="flex justify-between items-center mb-10">
                    <p>{activeValue} LugBands</p>
                    <p>$8.00 each</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Total</p>
                    <p>${activeValue * 8}.00 each</p>
                  </div>
                  <Button
                    className="mt-10 bg-gray-400 text-white"
                    onClick={() => handleProductCheckout()}
                  >
                    Click Here
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              {hotels.slice(0, activeValue).map(({ id }) => (
                <HotelCard id={id} key={id} className="mb-4" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lugband;
