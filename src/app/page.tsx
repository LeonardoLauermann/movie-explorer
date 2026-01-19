import { MovieRow } from '@/components/features/movie-row';
import {fetchClient} from '@/lib/api';
import {Movie, PaginatedResponse} from '@/types/tmdb';


export default async function Page() {
  const trendingData = await fetchClient<PaginatedResponse<Movie>>('/trending/all/week');
  const upcomingData = await fetchClient<PaginatedResponse<Movie>>('/movie/upcoming');

  return (
    <div className='space-y-8 pb-10'>
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
