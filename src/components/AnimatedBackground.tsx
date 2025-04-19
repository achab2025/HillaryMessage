
import React, { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  opacity: number;
  speed: number;
  delay: number;
  color: string;
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
      const numberOfBubbles = 40; // Increased for more visual interest
      const colors = ['#e5e8de', '#4d5d4e', '#f2f0e6']; // Spa theme colors
      const newBubbles: Bubble[] = [];

      for (let i = 0; i < numberOfBubbles; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * (80 - 15) + 15, // Smaller size range for elegance
          left: Math.random() * 100,
          opacity: Math.random() * (0.4 - 0.1) + 0.1, // More subtle opacity
          speed: Math.random() * (35 - 20) + 20, // Slower, more graceful movement
          delay: Math.random() * 12, // Increased delay variety
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      setBubbles(newBubbles);
    };

    generateBubbles();
    
    // Regenerate bubbles every 20 seconds for continuous effect
    const interval = setInterval(generateBubbles, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spa-cream via-spa-beige to-spa-green/10 animate-gradient" />
      
      {/* Floating bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full blur-md"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-10%',
            opacity: bubble.opacity,
            backgroundColor: bubble.color,
            animation: `float ${bubble.speed}s infinite ease-in-out`,
            animationDelay: `${bubble.delay}s`,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease-in-out',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 min-h-screen w-full backdrop-blur-[2px]">
        {children}
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: var(--bubble-opacity, 0.3);
            }
            50% {
              transform: translateY(-50vh) rotate(180deg) translateX(100px);
            }
            90% {
              opacity: var(--bubble-opacity, 0.1);
            }
            100% {
              transform: translateY(-100vh) rotate(360deg) translateX(0);
              opacity: 0;
            }
          }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;

