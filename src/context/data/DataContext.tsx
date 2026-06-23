import { createContext } from "react";

export type DataContextType = {
  data: string;
  setData: (value: string) => void
};

export const DataContext = createContext<DataContextType | undefined>(undefined);