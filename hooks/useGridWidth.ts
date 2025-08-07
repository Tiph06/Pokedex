import { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

export function useGridWidth(numColumns: number, gap: number) {
  const [itemWidth, setItemWidth] = useState(0);

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const totalWidth = e.nativeEvent.layout.width;
      const totalGap = gap * (numColumns - 1);
      const calculatedWidth = (totalWidth - totalGap) / numColumns;
      setItemWidth(calculatedWidth);
    },
    [numColumns, gap]
  );

  return { itemWidth, onLayout };
}
