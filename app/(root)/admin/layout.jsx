'use client';
import Sidebar from '@/components/customer/sidebar';
import Navbar from '@/components/navbar';
import {
  adminAccount,
  adminAnalytics,
  adminUsers,
  sidebarLinks,
} from '@/constants';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AdminLayout = ({ children }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const router = useRouter();
  const handleActiveTab = (activeTab) => {
    setActive(activeTab);
    if (activeTab === '/admin/account') {
      router.push('/admin/account');
    }
    if (activeTab === '/admin/analytics') {
      router.push('/admin/analytics');
    }
    if (activeTab === '/admin/users') {
      router.push('/admin/users');
    }
  };

  useEffect(() => {
    if (active === '/admin/users') {
      router.push('/admin/users');
    }
  }, [active]);

  const links =
    active === '/admin/account'
      ? adminAccount
      : active === '/admin/analytics'
      ? adminAnalytics
      : adminUsers;
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto">
        <div className="pt-10">
          {/* <Navbar /> */}
          <div className="flex gap-5">
            <h3
              className={`text-gray-400 text-lg font-semibold mb-10 cursor-pointer ${
                active === '/admin/users' && '!text-black'
              }`}
              onClick={() => handleActiveTab('/admin/users')}
            >
              Users
            </h3>
            <h3
              className={`text-gray-400 text-lg font-semibold mb-10 cursor-pointer ${
                active === '/admin/analytics' && '!text-black'
              }`}
              onClick={() => handleActiveTab('/admin/analytics')}
            >
              Analytics
            </h3>
            <h3
              className={`text-gray-400 text-lg font-semibold mb-10 cursor-pointer ${
                active === '/admin/account' && '!text-black'
              }`}
              onClick={() => handleActiveTab('/admin/account')}
            >
              Account
            </h3>
          </div>

          <div className="flex gap-4 items-start">
            <Sidebar sidebarLinks={links} />
            <div className="rounded-lg bg-white px-10 py-6 w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
