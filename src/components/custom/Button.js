import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'medium',
  icon = null,
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'flex items-center justify-center font-medium rounded transition-colors';
  
  const variantClasses = {
    primary: ' text-white btn_primary_color text-base roboto_regular ',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 ',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'border border-gray-300 hover:bg-gray-100 text-gray-700',
  };
  
  const sizeClasses = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-4 py-2',
    large: 'text-base px-6 py-3',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button; 