import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-gray-300 font-medium">
          {label}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        className={`w-full px-4 py-2 bg-[#1b1e24] border border-gray-700 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-[#61dafb]
        text-gray-100 placeholder-gray-500 resize-none transition ${className}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;
