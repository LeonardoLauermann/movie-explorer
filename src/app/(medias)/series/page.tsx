import {MovieRow} from '@/components/features/movie-row';
import {fetchClient} from '@/lib/api';
import {PaginatedResponse, TvShow} from '@/types/tmdb';

export default async function Page() {
  const popularData = await fetchClient<PaginatedResponse<TvShow>>('/tv/popular');
  const upcomingData = await fetchClient<PaginatedResponse<TvShow>>('/tv/on_the_air');

  return (
    <div className='space-y-8 pb-10'>
      <MovieRow
        title='Em alta'
        items={popularData.results}
      />
      <MovieRow
        title='Mais episódios em breve'
        items={upcomingData.results}
      />
    </div>
  );
}
