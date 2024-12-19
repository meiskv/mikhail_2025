import React from 'react';

export default function ExperienceHeader() {
  return (
    <>
      <ul className="hidden md:grid md:grid-cols-6 md:gap-x-4 border-b border-black py-3">
        <li className="col-span-1">Company</li>
        <li className="col-span-1">Role</li>
        <li className="col-span-1">Products</li>
        <li className="col-span-1">Market</li>
        <li className="col-span-1">Responsibilities</li>
        <li className="col-span-1 text-right">Year</li>
      </ul>
    </>
  );
}
