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
    const baseStyles = "relative overflow-hidden transition-all duration-500 rounded-[2rem]";

    const glassStyles = glass
        ? "bg-white/40 dark:bg-white/[0.03] backdrop-blur-lg border border-white/20 dark:border-white/[0.05]"
        : "bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800";

    const shadowStyles = shadow ? "shadow-2xl shadow-black/5 dark:shadow-none" : "";

    const hoverStyles = hover
        ? onClick
            ? "hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/60 dark:hover:bg-white/10 cursor-pointer"
            : "hover:-translate-y-2 hover:bg-white/50 dark:hover:bg-white/[0.08]"
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
