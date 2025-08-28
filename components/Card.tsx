import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { shadows } from '../constants/Shadows';

interface Props extends ViewProps {}

export function Card({ style, children, ...props }: Props) {

    return (
        <View
            style={[
                styles.card,
                shadows.dp2,
                style]} {...props} >
                {children}
            </View>
    );
}
const styles = StyleSheet.create({
    card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 8,
    },
});