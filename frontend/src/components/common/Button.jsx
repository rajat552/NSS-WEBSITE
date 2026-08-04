import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    type = 'button',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const variants = {
        primary: "bg-primary-900 text-white hover:bg-primary-800 shadow-sm",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200",
        outline: "bg-transparent border-2 border-primary-900 text-primary-900 hover:bg-primary-50",
        ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900",
        glass: "bg-white border border-gray-200 shadow-sm text-gray-900 hover:bg-gray-50 uppercase tracking-wide"
    };

    const sizes = {
        xs: "px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded",
        sm: "px-4 py-2 text-sm font-bold rounded-md",
        md: "px-6 py-3 text-base font-bold rounded-md",
        lg: "px-8 py-4 text-lg font-bold rounded-md",
        xl: "px-10 py-5 text-xl font-bold rounded-lg"
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
