
import React from "react";

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated background */}
      <div className="wave-animation absolute inset-0 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen w-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
