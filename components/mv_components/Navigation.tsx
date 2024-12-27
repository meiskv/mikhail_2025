import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="flex justify-between border-b border-black p-4 md:px-6">
      <div className="flex w-full">
        <div className="text-xl md:hidden">MV</div>
        <div className="text-xl hidden md:block">
          <span className="font-semibold">MIKHAIL VILLAMOR</span> ©2017 — 2024
        </div>
      </div>
      <ul className="flex flex-row w-full justify-end gap-4 items-center">
        <li>
          <Link href="#">Work</Link>
        </li>
        <li>
          <Link className="bg-black text-white px-3 py-1.5 rounded-lg" href="#">
            Resume
          </Link>
        </li>
        <li>
          <Link className="border-l border-r border-black px-4" href="#">
            in
          </Link>
        </li>
        <li>
          <Link href="#" className="md:flex text-nowrap">
            <span className="hidden md:block">
              Available for freelance work → 
            </span>
            Hire me
          </Link>
        </li>
      </ul>
    </div>
  );
}
