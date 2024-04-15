import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const ChannelCard = ({ title, src, mobile, className }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex gap-4 items-center">
        <Image src="/1.png" alt="channel card title" width={80} height={80} />
        <div className="flex flex-col gap-3">
          <h2 className="text-lg">{title}</h2>
          <p className="text-xs text-green-500">{mobile}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button className="rounded-full" size="sm" variant="outline">
          Setup
        </Button>
        <Button className="rounded-full" size="sm" variant="outline">
          Launch
        </Button>
      </div>
    </div>
  );
};

export default ChannelCard;
