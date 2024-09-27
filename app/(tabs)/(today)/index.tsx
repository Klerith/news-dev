import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LocaleStrings } from '@/helpers/locale-strings';

import ArticleCard from '@/presentation/components/news/ArticleCard';
import { Title } from '@/presentation/components/Title';
import { useNews } from '@/presentation/hooks/news/useNews';

import { FlatList, View } from 'react-native';

const TodayScreen = () => {
  // const { top } = useSafeAreaInsets();
  // const textColor = useThemeColor({}, 'text');
  const todayString = LocaleStrings.today;

  const { topHeadlinesQuery } = useNews();

  const firstArticle = topHeadlinesQuery.data?.[0];
  const articles = topHeadlinesQuery.data?.slice(1);

  return (
    <ThemedView style={{ flex: 1 }}>
      <FlatList
        style={{ marginHorizontal: 10 }}
        data={topHeadlinesQuery.data ?? []}
        numColumns={2}
        renderItem={({ item, index }) => <ArticleCard article={item} />}
        ListHeaderComponent={
          () => (
            <>
              <Title subTitle={todayString} />
              <ThemedText
                type="title"
                primaryColor
                style={{ marginTop: 40, fontSize: 35 }}
              >
                Top Stories
              </ThemedText>
              <ThemedText style={{ color: 'grey', marginBottom: 10 }}>
                Seleccionadas por los editores de Apple News
              </ThemedText>

              {firstArticle && (
                <ArticleCard article={firstArticle} half={false} />
              )}
            </>
          )
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
    </ThemedView>
  );
};
export default TodayScreen;
