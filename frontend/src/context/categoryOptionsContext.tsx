import { ReactNode } from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";

interface optionContextInterface {
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionContext = createContext<null | optionContextInterface>(null);

export function OptionContextProvider({ children }: { children: ReactNode }) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <OptionContext.Provider
      value={{
        showOptions,
        setShowOptions,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
}

export function useOptionsContext() {
  return useContext(OptionContext);
}
