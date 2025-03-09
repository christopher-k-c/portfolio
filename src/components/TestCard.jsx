import React from "react";

const TestCard = ({ className, children, ...props }) => {
  return (
    <div 
      className={`rounded-md border border-gray-700 bg-gray-800 text-white shadow-md ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default TestCard; 