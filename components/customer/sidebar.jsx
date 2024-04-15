'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import Image from 'next/image';

const Sidebar = ({ sidebarLinks }) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="bg-white p-3 rounded-lg w-[250px]">
        <div className="flex flex-col">
          {sidebarLinks.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={`block py-2 px-3 rounded-lg hover:bg-green-100 hover:text-green-500  mb-1 ${
                pathname === link.path && 'bg-green-100 text-green-500'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Separator className="mt-[200px]" />
          <Button className="hover:bg-green-100 hover:text-green-500 border-none bg-transparent text-black py-2 px-3 flex justify-start mt-2">
            Logout
          </Button>
        </div>
      </div>
      <div className="w-full text-center mt-4">
        <Image
          src="/gray-logo.png"
          alt="traxpk"
          className="mx-auto mb-2"
          width={80}
          height={80}
        />
        <p className="text-gray-500 text-xs">All rights Reserved © 2023</p>
        <p className="text-gray-500 text-xs">
          Need help?{' '}
          <Link href="/contact-us" className="text-blue-700">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
