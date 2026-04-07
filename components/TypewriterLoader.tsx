"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "> Initializing portfolio...",
  "> Loading Hrishikesh Netke...",
  "> Done. Welcome.",
];

const CHAR_DELAY = 40; // ms per character
const LINE_PAUSE = 350; // ms between lines
const EXIT_PAUSE = 700; // ms before exit animation

export default function TypewriterLoader() {
  const [mounted, setMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([""]);
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const shown = sessionStorage.getItem("intro_shown");
    if (shown) {
      setShouldShow(false);
      return;
    }
    setShouldShow(true);
  }, []);

  useEffect(() => {
    if (!shouldShow) return;

    let lineIndex = 0;
    let charIndex = 0;
    const lines: string[] = [""];

    function typeNext() {
      const targetLine = LINES[lineIndex];

      if (charIndex < targetLine.length) {
        lines[lineIndex] = targetLine.slice(0, charIndex + 1);
        setDisplayedLines([...lines]);
        charIndex++;
        timeoutRef.current = setTimeout(typeNext, CHAR_DELAY);
      } else if (lineIndex < LINES.length - 1) {
        // Line complete, pause then start next line
        timeoutRef.current = setTimeout(() => {
          lineIndex++;
          charIndex = 0;
          lines.push("");
          setDisplayedLines([...lines]);
          setCurrentLine(lineIndex);
          timeoutRef.current = setTimeout(typeNext, CHAR_DELAY);
        }, LINE_PAUSE);
      } else {
        // All done
        setIsComplete(true);
        timeoutRef.current = setTimeout(() => {
          setIsExiting(true);
        }, EXIT_PAUSE);
      }
    }

    timeoutRef.current = setTimeout(typeNext, 200);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [shouldShow]);

  if (!mounted || !shouldShow) return null;

  return (
    <AnimatePresence
      onExitComplete={() => {
        sessionStorage.setItem("intro_shown", "1");
      }}
    >
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
        >
          {/* Subtle scanline overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
            }}
          />

          <div className="relative z-10 font-mono text-sm px-8 max-w-lg w-full space-y-1.5">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 opacity-40">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-zinc-600 tracking-widest uppercase">
                portfolio.sh
              </span>
            </div>

            {displayedLines.map((line, i) => (
              <div key={i} className="flex items-center gap-1">
                <p
                  className={
                    i === LINES.length - 1 && isComplete
                      ? "text-emerald-400"
                      : "text-zinc-300"
                  }
                >
                  {line}
                  {i === currentLine && !isComplete && (
                    <span className="cursor-blink text-zinc-500 ml-0.5">█</span>
                  )}
                </p>
                {i < currentLine && (
                  <span className="text-emerald-600 text-xs ml-1">✓</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
