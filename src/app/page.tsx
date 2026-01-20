import { BannerRow } from '@/components/features/banner/banner-row';
import { MovieRow } from '@/components/features/movie/movie-row';
import { fetchClient } from '@/lib/api';
import { Movie, PaginatedResponse } from '@/types/tmdb';

export const metadata = {
  title: "MBCPlay - Explorar"
};

export default async function Page() {
  const trendingData = await fetchClient<PaginatedResponse<Movie>>('/trending/all/week');
  const upcomingData = await fetchClient<PaginatedResponse<Movie>>('/movie/upcoming');
  const bannerItems = trendingData.results
    .filter(item => item.backdrop_path)
    .slice(0, 6);

  return (
    <div className='space-y-8 pb-10'>
      <BannerRow items={bannerItems} />

      <MovieRow
        title='Em alta'
        items={trendingData.results}
      />
      <MovieRow
        title='Em breve'
        items={upcomingData.results}
      />
    </div>
  );
}
