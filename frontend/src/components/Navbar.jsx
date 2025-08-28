import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-green-300 to-green-600">
      <div className="flex items-center space-x-2">
        {/* EcoSort Logo and Text */}
        <svg className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-xl font-semibold text-green-800">EcoSort</span>
      </div>

      <div className="flex items-center space-x-6 text-green-800 font-medium">
        {/* Navigation Links */}
        <a href="#" className="border-b-2 border-green-800 pb-1">Home</a>
        <a href="#" className="hover:border-b-2 hover:border-green-800 pb-1">How It Works</a>
        <a href="#" className="hover:border-b-2 hover:border-green-800 pb-1">About</a>
        <a href="#" className="hover:border-b-2 hover:border-green-800 pb-1">Calculate</a>
      </div>
    </nav>
  );
};

export default Navbar;