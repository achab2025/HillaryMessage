
import React, { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  animationDuration: number;
  delay: number;
}

interface AnimatedBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const numberOfBubbles = 15;
      const newBubbles: Bubble[] = [];

      for (let i = 0; i < numberOfBubbles; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * (100 - 20) + 20,
          left: Math.random() * 100,
          animationDuration: Math.random() * (20 - 10) + 10,
          delay: Math.random() * 5
        });
      }

      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-spa-cream via-spa-beige to-spa-green/10" />
      
      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full opacity-30 bg-spa-green-light"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-20%',
            animation: `float ${bubble.animationDuration}s infinite ease-in-out`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 min-h-screen w-full">
        {children}
      </div>

      {/* Add keyframe animation styles */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            10% {
              opacity: 0.3;
            }
            90% {
              opacity: 0.2;
            }
            100% {
              transform: translateY(-120vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;
