import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColor } from '../hooks/theme/useThemeColor';

interface Props {
  title?: string;
  subTitle?: string;
}

export const Title = ({ title = 'Noticias', subTitle }: Props) => {
  const { top } = useSafeAreaInsets();
  const textColor = useThemeColor({}, 'text');

  return (
    <View style={{ marginTop: top + 10 }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 4,
          alignItems: 'center',
        }}
      >
        <Ionicons
          name="newspaper-outline"
          size={35}
          color={textColor}
          style={{ marginBottom: 5 }}
        />
        <ThemedText type="title">{title}</ThemedText>
      </View>

      {subTitle && <ThemedText type="subtitle">{subTitle}</ThemedText>}
    </View>
  );
};
