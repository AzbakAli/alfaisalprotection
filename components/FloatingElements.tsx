"use client";

import { useEffect, useState } from "react";

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated background particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-amber-500/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-red-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-amber-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-500/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-amber-500/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Floating light streaks */}
      <div className="absolute top-1/4 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-[lightStreak_3s_infinite]" />
      <div className="absolute top-1/2 right-0 w-48 h-0.5 bg-gradient-to-l from-transparent via-red-500/10 to-transparent animate-[lightStreak_4s_infinite_reverse]" />
      <div className="absolute bottom-1/3 left-1/4 w-40 h-0.5 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-[lightStreak_5s_infinite]" />
    </div>
  );
}
