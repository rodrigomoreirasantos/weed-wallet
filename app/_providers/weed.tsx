"use client";

import {
  ChangeEvent,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from "react";

interface WeedContextProps {
  weedFromUser: WeedFormProps[];
  setWeedFromUser: Dispatch<SetStateAction<WeedFormProps[]>>;
}

interface WeedFormProps {
  id: string;
  name: string;
  type: string;
  thc: string;
  cbd: string;
  userId: string;
}

export const WeedContext = createContext({} as WeedContextProps);

const WeedProvider = ({ children }: { children: ReactNode }) => {
  const [weedFromUser, setWeedFromUser] = useState<WeedFormProps[]>([]);

  return (
    <WeedContext.Provider
      value={{
        weedFromUser,
        setWeedFromUser,
      }}
    >
      {children}
    </WeedContext.Provider>
  );
};

export default WeedProvider;
