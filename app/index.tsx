import { Colors } from "@/app-example/constants/Colors";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { useGridWidth } from "@/hooks/useGridWidth";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonListFr } from "../components/pokemon/getPokemonListFr";
import { PokemonCard } from "../components/pokemon/PokemonCard";
import { useThemeColors } from "../hooks/useThemeColors";

type PokemonListItem = {
  id: number;
  name: string;
};

export default function Index() {
  const colors = useThemeColors();

  // Récupération des données via PokéAPI
  const { data, isLoading } = useQuery({
    queryKey: ["pokemons-fr"],
    queryFn: getPokemonListFr
  });

  // 👇 paramètres d’affichage
  const numColumns = 3;
  const columnGap = 16;
  const contentPadding = 12;
  const CARD_PADDING = 8; // padding défini dans Card.tsx


  // 👇 remplace gridWidth/cardWidth par le hook
  const { itemWidth, onLayout } = useGridWidth(
    numColumns,
    columnGap,
    contentPadding + CARD_PADDING // on soustrait bien 12 + 8 de chaque côté

  );


  //  Loading
  if (isLoading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
        <ActivityIndicator size="large" color={colors.grayDark} />
      </SafeAreaView>
    );
  }

  //  Liste finale
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint }]}>
      
      {/* Header */}
      <Header />

      {/* Liste dans une Card */}
      <Card
        style={styles.body}
        onLayout={onLayout}
      >

        {Array.isArray(data) && (
          <FlatList
            data={data as PokemonListItem[]}
            numColumns={numColumns}
            contentContainerStyle={{
              rowGap: columnGap,
              paddingHorizontal: contentPadding,
              paddingVertical: 12,
            }}
            columnWrapperStyle={{ columnGap }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PokemonCard
                id={item.id}
                name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                style={{ width: itemWidth }} // 👈 largeur calculée par le hook
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
    backgroundColor: Colors.light.tint, // rouge
  },

  body: {
  flex: 1,
marginHorizontal: 12, // 12px gauche/droite
  marginVertical: 24, // 24px haut/bas
  }
});
