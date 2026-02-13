// src/components/ui/Checkbox.jsx
import { forwardRef } from 'react';

const Checkbox = forwardRef(
  (
    {
      label,
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
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center">
            <input
              ref={ref}
              type="checkbox"
              className={`w-5 h-5 rounded-md border-2 ${
                error ? 'border-red-300' : 'border-gray-300'
              } text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer transition ${className}`}
              {...props}
            />
          </div>
          {label && (
            <span className="text-sm text-gray-700 select-none group-hover:text-gray-900">
              {label}
            </span>
          )}
        </label>
        {helperText && !error && (
          <p className="text-xs text-gray-500 mt-2 ml-8">{helperText}</p>
        )}
        {error && <p className="text-xs text-red-500 mt-2 ml-8">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;