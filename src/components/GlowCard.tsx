import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  return (
    <div className={`bg-gradient-card border-glow rounded-xl p-6 glow-card hover:shadow-[0_0_40px_hsl(270_80%_60%/0.25)] transition-all duration-500 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
};

export default GlowCard;
