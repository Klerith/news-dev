import { newsApi } from '@/core/api/news-api';
import {
  Article,
  TopHeadlinesResponse,
} from '@/infrastructure/interfaces/top-headlines.response';

export const getTopHeadlines = async (): Promise<Article[]> => {
  try {
    const { data } = await newsApi.get<TopHeadlinesResponse>('/top-headlines');
    // console.log(data.articles);
    return data.articles.filter((article) => article.urlToImage !== null);
  } catch (error) {
    throw new Error('Error fetching top headlines');
  }
};
