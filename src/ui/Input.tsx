import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-gray-300 font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-[#1b1e24] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61dafb] text-gray-100 placeholder-gray-500 transition"
        {...props}
      />
    </div>
  );
};

export default Input;
