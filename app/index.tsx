import { Card } from "@/components/Card";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PokemonCard } from "../components/pokemon/PokemonCard";
import { ThemedText } from "../components/ThemedText";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Index() {
  const colors = useThemeColors()
  const pokemons = Array.from({length: 35 }, (_, k) => ({name: 'Pokémon name',
    id: k + 1
  })) 

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint}]}>
      <View style={styles.header}>
        <Image source={require("@/assets/images/pokeball.png")} width={24} height={24}/>
        <ThemedText variant="headline" color="grayLight">Pokédex</ThemedText>
      </View>
      <Card style={styles.body}>
        <FlatList
          data={pokemons}
          numColumns={3}
          contentContainerStyle={styles.gridGap}
          columnWrapperStyle={styles.gridGap}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PokemonCard
              id={item.id}
              name={item.name}
              style={styles.card}
            />
          )}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 4
  },

  header: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
      padding: 12
  },

  body: {
    flex: 1
  },
gridGap: {
  gap: 8,
  padding: 12,
},
card: {
  flex: 1/3,
},
});


      // <Text>Pokedex</Text>
      // <Link href="/about"> A propos</Link>
      // <Link href={{pathname: '/pokemon/[id]', params: { id: '3' }
      // }}> Pokemon 3</Link>