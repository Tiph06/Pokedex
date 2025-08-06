import { ViewStyle } from 'react-native';
export const shadows: Record<string, ViewStyle> = {
dp2: {
// iOS
shadowOpacity: 0.2,
shadowColor: '#000',
shadowOffset: { width: 0, height: 1 },
shadowRadius: 3,
// Android
elevation: 2,
},
};