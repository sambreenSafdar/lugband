import Overview from '@/components/overview';
import React from 'react';

const Analytics = () => {
  const data = [
    { name: 'Jan', total: 50 },
    { name: 'Feb', total: 130 },
    { name: 'Mar', total: 40 },
    { name: 'Apr', total: 400 },
    { name: 'May', total: 120 },
    { name: 'Jun', total: 30 },
    { name: 'Jul', total: 700 },
    { name: 'Aug', total: 200 },
    { name: 'Sep', total: 440 },
    { name: 'Oct', total: 1000 },
    { name: 'Nov', total: 100 },
    { name: 'Dec', total: 1200 },
  ];
  return (
    <div>
      <Overview data={data} />
    </div>
  );
};

export default Analytics;
