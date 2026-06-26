import { useState } from "react";
import { DataContext } from "./DataContext";
import type { ReactNode } from "react";
import type { Data, Section } from "./DataContext";
import * as constantData from "../../assets/data";

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Data>(constantData.data);
  const [sections] = useState<Section[]>(constantData.sections);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        sections,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}