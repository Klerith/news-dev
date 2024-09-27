import { getTopHeadlines } from '@/core/actions/news/top-headlines';
import { useQuery } from '@tanstack/react-query';

export const useNews = () => {
  const topHeadlinesQuery = useQuery({
    queryKey: ['top-headlines'],
    queryFn: getTopHeadlines,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    topHeadlinesQuery,
  };
};
