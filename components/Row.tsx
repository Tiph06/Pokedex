import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';


interface Props extends ViewProps {
gap?: number;
}


export function Row({ gap = 0, style, ...props }: Props) {
    return (
        <View style={[rowStyle, gap > 0 && { gap }, style]} {...props} />
    );
}

const rowStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
};