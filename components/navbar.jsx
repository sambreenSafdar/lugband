'use client';
import { NavLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="border-b flex items-center">
      <div className="container mx-auto">
        <h3>{pathname}</h3>
      </div>
    </div>
  );
};

export default Navbar;
