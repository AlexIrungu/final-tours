import React from 'react';
import { cva } from 'class-variance-authority';

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
        primary: "bg-amber-600 text-white hover:bg-amber-700",
        secondary: "bg-white/20 text-white hover:bg-white/30",
        outline: "border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-50",
        destructive: "bg-red-500 text-white hover:bg-red-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Badge = ({ variant, className, children, ...props }) => {
  return (
    <div
      className={badgeVariants({ variant, className })}
      {...props}
    >
      {children}
    </div>
  );
};