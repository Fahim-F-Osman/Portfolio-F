import { useState } from "react";
import { DataContext } from "./DataContext";
import type { ReactNode } from "react";
import type { Data, Section, Palettes} from "./DataContext";
import * as constantData from "@/assets/data";

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Data>(constantData.data);
  const [sections] = useState<Section[]>(constantData.sections);
  const [palettes] = useState<Palettes[]>(constantData.PALETTES);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        sections,
        palettes
      }}
    >
      {children}
    </DataContext.Provider>
  );
}