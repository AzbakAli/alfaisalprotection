"use client";

import { useEffect, useState } from "react";

export default function AnimatedLogo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
      {/* Animated circular border */}
      <div className="absolute inset-0 rounded-full">
        <div className="absolute inset-0 rounded-full border-2 border-red-900/30 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-1 rounded-full border border-red-600/20 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
      </div>

      {/* Pulsing glow effect */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-red-600/20 to-transparent blur-xl transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} />

      {/* Logo container with entrance animation */}
      <div
        className={`relative w-full h-full rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center border border-neutral-700 overflow-hidden transition-all duration-700 ${
          isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />

        {/* Logo image */}
        <img
          src="/logo.webp"
          alt="AlFaisal Protection Logo"
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Floating particles */}
      {isLoaded && (
        <>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </>
      )}
    </div>
  );
}
