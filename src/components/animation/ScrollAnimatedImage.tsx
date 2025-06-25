"use client";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import React, { Children, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}
function ScrollAnimatedImage({ children }: PageProps) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{
            y: 200,
          }}
          whileInView={{
            y: 0,
          }}
          transition={{
            duration: 2,
            ease: easeOut,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default ScrollAnimatedImage;
