import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PokemonCard } from "../components/pokemon/PokemonCard";
import { useThemeColors } from "../hooks/useThemeColors";
import { getPokemonListFr } from "./pokemon/getPokemonListFr";

type PokemonListItem = {
  id: number;
  name: string;
};

export default function Index() {
  const colors = useThemeColors();

  // 📡 Récupération des données via PokéAPI
  const { data, isLoading } = useQuery({
    queryKey: ["pokemons-fr"],
    queryFn: getPokemonListFr
  });

  // 📏 Calcul dynamique de la largeur des cartes
  const [gridWidth, setGridWidth] = React.useState(0);
  const numColumns = 3;
  const gap = 8;
  const contentPadding = 12;
  const cardWidth = gridWidth > 0
    ? (gridWidth - (numColumns - 1) * gap - contentPadding * 2) / numColumns
    : 0;


  // ⏳ Loading
  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
        <ActivityIndicator size="large" color={colors.grayDark} />
      </SafeAreaView>
    );
  }

  // 📋 Liste finale
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      {/* 🔝 Header */}
      <Header />

      {/* 📦 Liste dans une Card */}
      <Card
        style={styles.body}
        onLayout={(e) => setGridWidth(e.nativeEvent.layout.width)}
      >
        {Array.isArray(data) && (
          <FlatList
            data={data as PokemonListItem[]}
            numColumns={numColumns}
            contentContainerStyle={{
              rowGap: gap,
              paddingHorizontal: contentPadding, // ✅ même padding à gauche et à droite
            }}
            columnWrapperStyle={{
              columnGap: gap,
            }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PokemonCard
                id={item.id}
                name={
                  item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                style={{ width: cardWidth }}
              />
            )}
          />
        )}
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 8
  },

  body: {
    flex: 1,
    marginTop: 16
  }
});
