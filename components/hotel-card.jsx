import Image from 'next/image';
import React from 'react';

const HotelCard = ({ id, className }) => {
  return (
    <div
      className={`p-5 flex justify-between items-center bg-gray-100 ${className}`}
    >
      <Image src="/pat.png" alt="hotel" width={60} height={60} />
      <Image src="/hotel.png" alt="hotel" width={120} height={120} />
      <h2 className="text-2xl">{id}</h2>
      <div></div>
    </div>
  );
};

export default HotelCard;
