
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
      const numberOfBubbles = 50; // Increased for more visual impact
      const colors = ['#e5e8de', '#4d5d4e', '#f2f0e6', '#FFFFFF']; // Added white for better visibility
      const newBubbles: Bubble[] = [];

      for (let i = 0; i < numberOfBubbles; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * (100 - 20) + 20, // Larger size range for more visibility
          left: Math.random() * 100,
          opacity: Math.random() * (0.6 - 0.2) + 0.2, // Increased opacity range for better visibility
          speed: Math.random() * (30 - 15) + 15, // Adjusted for smooth movement
          delay: Math.random() * 10, 
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      setBubbles(newBubbles);
    };

    generateBubbles();
    
    // Regenerate bubbles every 15 seconds for continuous effect
    const interval = setInterval(generateBubbles, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Enhanced animated gradient background with higher contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-spa-cream via-spa-beige to-spa-green/20 animate-gradient" />
      
      {/* Floating bubbles with enhanced visibility */}
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
            boxShadow: `0 0 25px rgba(255, 255, 255, 0.5)`, // Enhanced glow effect
            transition: 'all 0.3s ease-in-out',
          }}
        />
      ))}

      {/* Content with reduced blur for better visibility */}
      <div className="relative z-10 min-h-screen w-full backdrop-blur-[1px]">
        {children}
      </div>

      {/* Enhanced animation keyframes */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg) translateX(0);
              opacity: 0;
            }
            10% {
              opacity: var(--bubble-opacity, 0.5); /* Increased initial opacity */
            }
            50% {
              transform: translateY(-50vh) rotate(180deg) translateX(80px);
            }
            90% {
              opacity: var(--bubble-opacity, 0.3); /* Better visibility throughout animation */
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
