"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

/**
 * One-shot fade-and-rise on mount, re-keyed by pathname so navigating between
 * routes inside the same layout re-fires the animation. Uses key={pathname}
 * instead of AnimatePresence: the layout persists across navigation, so
 * re-mounting the wrapper is the simplest way to retrigger the entrance on
 * every route change.
 *
 * Respects prefers-reduced-motion by rendering content immediately with no
 * animation. Skips the very first animate cycle until hydration completes to
 * avoid replacing server-rendered HTML before React is ready.
 */
export function PageMountTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
