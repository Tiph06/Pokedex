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
};

export function PokemonCard({ id, name, style }: Props) {
    const colors = useThemeColors();

return (
    <Link href={`./pokemon/${id}`} asChild>
        <Pressable>
        <Card style={[styles.card, style]}>
{/* Numéro en haut à droite */}
        <ThemedText variant="caption" color="grayMedium" style={styles.id}>
            #{id.toString().padStart(3, '0')}
        </ThemedText>

{/* Image */}
        <Image
            source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            }}
            style={{ width: 72, height: 72 }}
        />
{/* Bloc gris avec nom centré */}
        <View style={[styles.nameBox, { backgroundColor: colors.grayLight }]}>
            <ThemedText variant="body3">{name}</ThemedText>
        </View>
        </Card>
        </Pressable>
    </Link>
);
}

const styles = StyleSheet.create({
    card: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    overflow: 'hidden',
    aspectRatio: 1,
    },
    id: {
    alignSelf: 'flex-end',
    },
    nameBox: {
    width: '100%',
    height: 44,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
