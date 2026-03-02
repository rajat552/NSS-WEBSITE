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
        primary: "bg-gray-900 dark:bg-white text-white dark:text-gray-950 hover:bg-black dark:hover:bg-gray-100 shadow-lg hover:shadow-gray-200 dark:hover:shadow-white/10",
        secondary: "bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 border border-transparent dark:border-white/5",
        outline: "bg-transparent border-2 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400",
        ghost: "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white",
        glass: "glass-card text-gray-900 dark:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-all border border-gray-100 dark:border-white/10"
    };

    const sizes = {
        xs: "px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-lg",
        sm: "px-4 py-2 text-sm rounded-xl",
        md: "px-6 py-3 text-base rounded-2xl",
        lg: "px-8 py-4 text-lg rounded-3xl",
        xl: "px-10 py-5 text-xl rounded-[2.5rem]"
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
