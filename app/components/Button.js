import React from 'react';

const Button = ({children, ...props}) => {
    return (
        <button
            className="text-xl mr-10 py-0.5 bg-white text-black font-bold px-3 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50" {...props}>
            {children}
        </button>
    );
};

export default Button;
