"use client";
import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface pageProps {
  children: ReactNode;
}
function AOSWrapper({ children }: pageProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return <>{children}</>;
}

export default AOSWrapper;
