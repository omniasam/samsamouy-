// src/components/admin/UI/CustomTextarea.tsx
"use client";

import { TextareaHTMLAttributes } from "react";

interface CustomTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function CustomTextarea({ label, className = "", ...props }: CustomTextareaProps) {
  return (
    <div className="space-y-1">
      {label && <label className="font-medium text-sm">{label}</label>}
      <textarea
        {...props}
        className={`w-full border rounded p-2 ${className}`}
        rows={3}
      />
    </div>
  );
}
