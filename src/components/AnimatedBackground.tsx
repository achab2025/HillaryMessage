
import React, { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  opacity: number;
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
      const numberOfBubbles = 25; // Increased number of bubbles
      const newBubbles: Bubble[] = [];

      for (let i = 0; i < numberOfBubbles; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * (120 - 20) + 20, // Varied sizes
          left: Math.random() * 100,
          opacity: Math.random() * (0.5 - 0.2) + 0.2, // Varied opacity for subtle effect
          animationDuration: Math.random() * (25 - 10) + 10, // Varied animation speeds
          delay: Math.random() * 8 // Varied delays
        });
      }

      setBubbles(newBubbles);
    };

    generateBubbles();
    
    // Regenerate bubbles periodically for continuous effect
    const interval = setInterval(generateBubbles, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-spa-cream via-spa-beige to-spa-green/10" />
      
      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-spa-green-light blur-sm"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-10%',
            opacity: bubble.opacity,
            animation: `float ${bubble.animationDuration}s infinite ease-in-out`,
            animationDelay: `${bubble.delay}s`,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
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
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: var(--bubble-opacity, 0.3);
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-60vh) rotate(180deg);
            }
            90% {
              opacity: var(--bubble-opacity, 0.2);
              transform: translateY(-110vh) rotate(360deg);
            }
            100% {
              transform: translateY(-120vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;
