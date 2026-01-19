import {MovieRow} from '@/components/features/movie-row';
import {fetchClient} from '@/lib/api';
import {Movie, PaginatedResponse} from '@/types/tmdb';

export default async function Page() {
  const popularData = await fetchClient<PaginatedResponse<Movie>>('/movie/popular');
  const upcomingData = await fetchClient<PaginatedResponse<Movie>>('/movie/upcoming');

  return (
    <div className='space-y-8 pb-10'>
      <MovieRow
        title='Em alta'
        items={popularData.results}
      />
      <MovieRow
        title='Em breve'
        items={upcomingData.results}
      />
    </div>
  );
}
