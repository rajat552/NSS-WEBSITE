import React from 'react';

const Card = ({
    children,
    className = '',
    padding = 'md',
    hover = true,
    glass = true,
    shadow = true,
    onClick,
    ...props
}) => {
    const baseStyles = "relative overflow-hidden transition-all duration-300 rounded-xl border-t-4 border-t-transparent";

    const glassStyles = glass
        ? "bg-white dark:bg-gray-800 border-x border-b border-gray-200 dark:border-gray-700"
        : "bg-gray-50 dark:bg-gray-900 border-x border-b border-gray-100 dark:border-gray-800";

    const shadowStyles = shadow ? "shadow-md dark:shadow-none" : "";

    const hoverStyles = hover
        ? onClick
            ? "hover:-translate-y-1 hover:border-t-primary-600 cursor-pointer"
            : "hover:-translate-y-1 hover:border-t-primary-600"
        : "";

    const paddings = {
        none: "p-0",
        sm: "p-4 md:p-6",
        md: "p-8 md:p-10",
        lg: "p-10 md:p-16",
        xl: "p-12 md:p-24"
    };

    return (
        <div
            className={`${baseStyles} ${glassStyles} ${shadowStyles} ${hoverStyles} ${paddings[padding]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
