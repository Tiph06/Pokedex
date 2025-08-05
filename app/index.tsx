import { Card } from "@/components/Card";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "../components/ThemedText";
import { useThemeColors } from "../hooks/useThemeColors";


export default function Index() {
  const colors = useThemeColors();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.tint}]}>
      <Card></Card>
      <ThemedText variant="headline" color="grayWhite">Pokédex</ThemedText>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


      // <Text>Pokedex</Text>
      // <Link href="/about"> A propos</Link>
      // <Link href={{pathname: '/pokemon/[id]', params: { id: '3' }
      // }}> Pokemon 3</Link>