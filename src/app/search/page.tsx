import { MovieCard } from '@/components/features/movie-card';
import { fetchClient } from '@/lib/api';
import { Movie, TvShow, PaginatedResponse } from '@/types/tmdb';

interface SearchPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata = {
  title: "MBCPlay - Pesquisa"
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  const name = params.name as string | undefined;
  const genre = params.genre as string | undefined;

  let results: (Movie | TvShow)[] = [];

  if (name) {
    const data = await fetchClient<PaginatedResponse<Movie | TvShow>>(
      '/search/multi',
      { params: { query: name } }
    );

    results = data.results ?? [];
  } else if (genre) {
    const data = await fetchClient<PaginatedResponse<Movie>>(
      '/discover/movie',
      {
        params: {
          with_genres: genre,
          sort_by: 'popularity.desc',
        },
      }
    );

    results = data.results ?? [];
  }

  return (
    <div className='p-4 md:p-0'>
      <h1 className='text-2xl font-bold mb-6'>Resultados</h1>

      {results.length === 0 ? (
        <p className='text-gray-400 font-medium'>
          Nenhum resultado encontrado.
        </p>
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
