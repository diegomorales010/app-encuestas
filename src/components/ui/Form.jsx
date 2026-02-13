// src/components/ui/Form.jsx
import { forwardRef } from 'react';

const Form = forwardRef(
  ({ children, onSubmit, className = '', ...props }, ref) => {
    return (
      <form
        ref={ref}
        onSubmit={onSubmit}
        className={`space-y-5 ${className}`}
        {...props}
      >
        {children}
      </form>
    );
  }
);

Form.displayName = 'Form';

export default Form;