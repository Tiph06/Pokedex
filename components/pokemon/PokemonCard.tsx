import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { useThemeColors } from '../../hooks/useThemeColors';
import { Card } from '../Card';
import { ThemedText } from '../ThemedText';

type Props = {
id: number;
name: string;
style?: ViewStyle;
}

export function PokemonCard({ id, name, style }: Props) {

    const colors = useThemeColors();

return (
    <Link href={`./pokemon/${id}`} asChild>
    <Pressable style={style}>
    <Card style={styles.card}>
        {/* Ombre du Pokémon */}
        <View style={[
            styles.shadow,
            { backgroundColor: colors.grayBackground }
        ]} />
{/* Numéro */}
    <ThemedText
variant="caption"
color="grayMedium"
style={styles.id}
    >
#{id.toString().padStart(3, '0')}
</ThemedText>

{/* Image */}
<Image 
    source=
    {{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` }} width={72} height={72} />

{/* Nom */}
<ThemedText variant="body3">
{name}
</ThemedText>
</Card>
</Pressable>
</Link>
);
}
const styles = StyleSheet.create({
    card: {
    alignItems: 'center',
    padding: 4,
    overflow: 'hidden',
    },

    shadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 44,
    borderRadius: 7,
    zIndex: -1,
    },

    id: {
    alignSelf: 'flex-end',
    },
});