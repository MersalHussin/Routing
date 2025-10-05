import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg font-semibold transition duration-200 focus:outline-none bg-[#61dafb] text-[#0b0c10] hover:bg-[#4fc4e8] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
