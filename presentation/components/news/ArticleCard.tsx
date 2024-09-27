import { ThemedText } from '@/components/ThemedText';
import { LocaleStrings } from '@/helpers/locale-strings';
import { Article } from '@/infrastructure/interfaces/top-headlines.response';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  Linking,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  article: Article;
  half?: boolean;
}

const ArticleCard = ({ article, half = true }: Props) => {
  const { width } = useWindowDimensions();

  const cardWidth = half ? width / 2 - 15 : width - 20;

  return (
    <View
      style={{
        flexDirection: 'column',
        width: cardWidth,
        paddingHorizontal: 10,
        marginBottom: 20,
      }}
    >
      {article.urlToImage && (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(article.url);
          }}
        >
          <Image
            source={{ uri: article.urlToImage }}
            style={{
              width: '100%',
              height: 200,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      )}

      <ThemedText type="defaultSemiBold">{article.source.name}</ThemedText>

      <ThemedText>{article.title}</ThemedText>

      {/* Publicada en */}
      <ThemedText style={{ marginTop: 5, color: 'grey' }}>
        hace {LocaleStrings.timeSince(article.publishedAt)}
      </ThemedText>
    </View>
  );
};
export default ArticleCard;
