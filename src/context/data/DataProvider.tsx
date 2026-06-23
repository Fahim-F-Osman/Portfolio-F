import { useState } from "react";
import { DataContext } from "./DataContext";
import type { ReactNode } from "react";
import * as constantData from "../../assets/data";

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(constantData.data);

  return (
    <DataContext.Provider
      value={{
        data, 
        setData
      }}
    >
      {children}
    </DataContext.Provider>
  );
}