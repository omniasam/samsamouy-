"use client";

import { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function CustomInput({
  label,
  className = "",
  value,
  ...props
}: CustomInputProps) {
  return (
    <div className="space-y-1">
      {label && <label className="font-medium text-sm text-black">{label}</label>}
      <input
        {...props}
        value={value ?? ""}
        className={`w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white text-black
          p-2 text-sm text-black
         
          focus:outline-none focus:ring-2 focus:ring-mainColor focus:border-mainColor
          transition duration-150 ease-in-out ${className}`}
      />
    </div>
  );
}
