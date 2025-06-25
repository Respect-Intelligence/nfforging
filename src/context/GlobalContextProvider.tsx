"use client";

import React, { Children, createContext, ReactNode, useState } from "react";

interface GlobalContextType {
  isFixedHeader: boolean;
  setIsFixedHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PageProps {
  children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);
function GlobalContextProvider({ children }: PageProps) {
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  return (
    <>
      <GlobalContext.Provider value={{ isFixedHeader, setIsFixedHeader }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default GlobalContextProvider;
