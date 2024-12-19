import React from 'react';

export default function PortfolioGridOverlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 gap-x-6 -z-10">
      {/* Columns */}
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="h-full flex flex-col items-center border border-t-0 border-b-0 border-gray-150"
        ></div>
      ))}
    </div>
  );
}
