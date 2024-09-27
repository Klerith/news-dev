import { ThemedText } from '@/components/ThemedText';
import { LocaleStrings } from '@/helpers/locale-strings';
import { Title } from '@/presentation/components/Title';
import { useThemeColor } from '@/presentation/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
const TodayScreen = () => {
  // const { top } = useSafeAreaInsets();
  // const textColor = useThemeColor({}, 'text');
  const todayString = LocaleStrings.today;

  return (
    <FlatList
      style={{ marginHorizontal: 10 }}
      data={[]}
      renderItem={() => <ThemedText>Hola</ThemedText>}
      ListHeaderComponent={
        () => <Title subTitle={todayString} />
        // <View style={{ marginTop: top + 10 }}>
        //   <View
        //     style={{
        //       flexDirection: 'row',
        //       gap: 4,
        //       alignItems: 'center',
        //     }}
        //   >
        //     <Ionicons
        //       name="newspaper-outline"
        //       size={35}
        //       color={textColor}
        //       style={{ marginBottom: 5 }}
        //     />
        //     <ThemedText type="title">Noticias</ThemedText>
        //   </View>
        // </View>
      }
    />
  );
};
export default TodayScreen;
