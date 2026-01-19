import {MovieCard} from '@/components/features/movie-card';
import {fetchClient} from '@/lib/api';
import {Movie, TvShow, PaginatedResponse} from '@/types/tmdb';

interface SearchPageProps {
  searchParams: Promise<{[key: string]: string | string[] | undefined}>;
}

export default async function SearchPage({searchParams}: SearchPageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.nome as string;

  let results: (Movie | TvShow)[] = [];

  if (query) {
    const data = await fetchClient<PaginatedResponse<Movie | TvShow>>('/search/multi', {
      params: {query},
    });
    results = data.results || [];
  }

  return (
    <div className='p-4 md:p-0'>
      <h1 className='text-2xl font-bold mb-6'>Resultados</h1>

      {results.length === 0 ? (
        <p className='text-gray-400 font-medium'>Nenhum resultado encontrado para sua busca.</p>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {results.map(item => (
            <MovieCard
              key={`${item.id}-${item.media_type || 'media'}`}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}
