// src/components/ui/Button.jsx
import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      loading = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'font-semibold rounded-xl flex items-center justify-center gap-2 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
      danger: 'bg-red-600 text-white hover:bg-red-700',
      ghost: 'text-gray-600 hover:bg-gray-100',
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3',
      lg: 'px-6 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
            <>
            <Loader2 className="w-4 h-4 animate-spin"/>
            Cargando...
          </>
        ) : (
          <>
            {Icon && iconPosition === 'left' && <Icon size={18} />}
            {children}
            {Icon && iconPosition === 'right' && <Icon size={18} />}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;