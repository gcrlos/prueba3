
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  href 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-bold transition-all duration-200 uppercase tracking-wide text-sm md:text-base";
  
  const variants = {
    primary: "bg-yellow-500 text-black hover:bg-yellow-600 shadow-lg active:transform active:scale-95",
    secondary: "bg-red-600 text-white hover:bg-red-700 shadow-lg active:transform active:scale-95",
    outline: "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black active:transform active:scale-95",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg active:transform active:scale-95",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target={href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
