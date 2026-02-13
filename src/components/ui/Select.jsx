// src/components/ui/Select.jsx
import { forwardRef } from 'react';

const Select = forwardRef(
  (
    {
      label,
      icon: Icon,
      error,
      helperText,
      options = [],
      placeholder = 'Selecciona una opción',
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
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
            />
          )}
          <select
            ref={ref}
            className={`w-full ${
              Icon ? 'pl-10' : 'pl-4'
            } pr-10 py-3 rounded-xl border ${
              error ? 'border-red-300' : 'border-gray-200'
            } focus:border-blue-500 focus:outline-none bg-gray-50 appearance-none cursor-pointer ${className}`}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {helperText && !error && (
          <p className="text-xs text-gray-500 mt-2">{helperText}</p>
        )}
        {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;