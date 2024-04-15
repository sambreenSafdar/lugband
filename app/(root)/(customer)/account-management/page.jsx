'use client';
import ChannelCard from '@/components/customer/channel-card';
import { ChannelModal } from '@/components/modals/channel-modal';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { myChannels } from '@/constants';
import { PlusIcon } from 'lucide-react';
import React, { useState } from 'react';

const MyChannels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(false);

  return (
    <>
      <div>
        <h2 className="text-gray-500 text-md mb-2">My Channels</h2>
        <Separator className="mb-4" />
        {myChannels.map((channel) => (
          <div key={channel.id}>
            <ChannelCard
              title={channel.title}
              mobile={channel.mobile}
              className="mb-3"
            />
            <Separator className="mb-3" />
          </div>
        ))}
        <Button
          variant="outline"
          size="sm"
          className="rounded-full flex items-center gap-1"
          onClick={() => setIsOpen(true)}
        >
          <PlusIcon className="text-green-500 w-5 h-5" /> Create Channel
        </Button>
      </div>
      <ChannelModal isOpen={isOpen} onClose={handleOpen} title="New Channel" />
    </>
  );
};

export default MyChannels;
