import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

export function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("@/assets/images/pokeball.png")}
        style={{ width: 24, height: 24 }}
      />
      <ThemedText variant="headline" color="grayLight">
        Pokédex
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
});
