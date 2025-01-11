import React from 'react';

const AppTitle = () => {
  return (
    <h1 className="flex gap-0.5 items-end text-3xl justify-center ">
      Delta
      <svg width="40" height="40">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00BFFF" />
            <stop offset="100%" stopColor="#0000FF" />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="32"
          fill="url(#gradient)"
          fontSize="32"
          fontWeight="bold"
          className="font-kanit"
        >
          AI
        </text>
      </svg>
    </h1>
  );
};
export default AppTitle;
