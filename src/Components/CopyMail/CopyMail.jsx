import React from 'react';

const CopyMail = () => {
  return (
    <div className="flex shadow-lg">
      <input
        defaultValue="aindarte111@gmail.com"
        readOnly
        className="py-2 indent-3 rounded-s-xl bg-white text-black border border-gray-300 shadow-inner focus:outline-none"
        name="text"
        type="text"
      />
      <button
        className="py-2 rounded-e-xl bg-gradient-to-br from-gray-100 to-gray-300 text-black border border-gray-400 shadow-[4px_4px_0px_rgba(0,0,0,0.7)] active:shadow-inner flex justify-center items-center w-12 h-12 transition duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          className="pointer-events-none"
        >
          <rect x={4} y={8} width={12} height={12} rx={1} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M8 6V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H18"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2 2"
          />
        </svg>
      </button>
    </div>
  );
};

export default CopyMail;
