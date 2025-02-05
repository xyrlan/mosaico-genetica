"use client";

import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
  RefObject,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface AgendarWidgetContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  containerRef: RefObject<HTMLDivElement>;
}

// Criamos um contexto com tipos iniciais “dummy”
const AgendarWidgetContext = createContext<AgendarWidgetContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  containerRef: { current: null },
});

export function AgendarWidgetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fecha o "drop-up" ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AgendarWidgetContext.Provider value={{ isOpen, setIsOpen, containerRef }}>
      {children}
    </AgendarWidgetContext.Provider>
  );
}

export function useAgendarWidgetContext() {
  return useContext(AgendarWidgetContext);
}
