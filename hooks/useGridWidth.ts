import { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

export function useGridWidth(
  numColumns: number, 
  gap: number,  
  paddingHorizontal: number = 0
){
  const [itemWidth, setItemWidth] = useState(0);

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const totalWidth = e.nativeEvent.layout.width;
      
      // Sécurités
      const safeCols = Math.max(1, Math.floor(numColumns));
      const totalGap = Math.max(0, gap) * (safeCols - 1);
      const innerWidth = Math.max(0, totalWidth - Math.max(0, paddingHorizontal) * 2);

      const raw = (innerWidth - totalGap) / safeCols;
      const calculatedWidth = Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 0;

      setItemWidth(calculatedWidth);
    },
    [numColumns, gap, paddingHorizontal]
  );

  return { itemWidth, onLayout };
}
