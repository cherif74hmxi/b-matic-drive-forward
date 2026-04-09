import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NeonButtonProps {
  children: ReactNode;
  to?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const NeonButton = ({ children, to, type = "button", onClick, className = "", disabled = false }: NeonButtonProps) => {
  const base = `inline-flex items-center justify-center bg-gradient-btn text-primary-foreground font-heading text-xs uppercase tracking-wider px-7 py-3 rounded-full hover:opacity-90 hover:shadow-[0_0_25px_hsl(270_80%_60%/0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  );
};

export default NeonButton;