// src/components/ui/Input.jsx
import { forwardRef } from 'react';

const Input = forwardRef(
  (
    {
      label,
      icon: Icon,
      error,
      helperText,
      className = '',
      containerClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className={containerClassName}>
        {label && (
          <label className="text-sm text-gray-600 font-medium block mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          )}
          <input
            ref={ref}
            className={`w-full ${
              Icon ? 'pl-10' : 'pl-4'
            } pr-4 py-3 rounded-xl border ${
              error ? 'border-red-300' : 'border-gray-200'
            } focus:border-blue-500 focus:outline-none bg-gray-50 ${className}`}
            {...props}
          />
        </div>
        {helperText && !error && (
          <p className="text-xs text-gray-500 mt-2">{helperText}</p>
        )}
        {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;