import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="flex justify-between border-b border-black pb-3">
      <div className="text-xl">MV</div>
      <ul className="flex flex-row w-full justify-end gap-4">
        <li>
          <Link href="#">Work</Link>
        </li>
        <li>
          <Link className="border-black border px-3 py-2 rounded-xl" href="#">
            Resume
          </Link>
        </li>
        <li>
          <Link className="border-l border-r border-black px-4" href="#">
            in
          </Link>
        </li>
        <li>
          <Link href="#">Hire me</Link>
        </li>
      </ul>
    </div>
  );
}
