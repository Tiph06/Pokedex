import React from 'react';
import { View, ViewProps } from 'react-native';
import { shadows } from '../constants/Shadows';
import { useThemeColors } from '../hooks/useThemeColors';

interface Props extends ViewProps {}
export function Card({ style, ...props }: Props) {
const colors = useThemeColors();
return (
    <View
    style={[
    cardStyle,
    { backgroundColor: 'grayLight' },
    shadows.dp2, style]} {...props}/>
);
}
const cardStyle = {
borderRadius: 8,
padding: 4,
};