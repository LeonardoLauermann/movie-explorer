import { fetchClient } from '@/lib/api';
import { MovieCredits, MovieDetails } from '@/types/tmdb';
import { notFound } from 'next/navigation';
import { DetailsHeader } from '@/components/features/details/details-header';
import { DetailsOverview } from '@/components/features/details/details-overview';
import { DetailsPerson } from '@/components/features/details/details-person';
import { DetailsPlayer } from '@/components/features/details/details-player';

interface MovieDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function MovieDetailsPage({ params }: MovieDetailsProps) {
  const { id } = await params;

  let data;

  try {
    const [movie, credits] = await Promise.all([fetchClient<MovieDetails & { runtime: number }>(`/movie/${id}`), fetchClient<MovieCredits>(`/movie/${id}/credits`)]);

    const director = credits.crew.find(m => m.job === 'Director')?.name;
    const producers = credits.crew
      .filter(m => m.job === 'Producer')
      .slice(0, 3)
      .map(p => p.name)
      .join(', ');
    const cast = credits.cast
      .slice(0, 5)
      .map(c => c.name)
      .join(', ');


    data = { movie, director, producers, cast }
  } catch (error) {
    console.error('Erro na página de detalhes:', error);
    return notFound();
  }

  const { movie, director, producers, cast } = data;

  return (
    <main className='min-h-screen text-white p-4 md:p-0 max-w-7xl mx-auto'>

      <DetailsPlayer backdrop_path={movie.backdrop_path} alt={movie.title} />

      <DetailsHeader title={movie.title} release_date={movie.release_date} runtime={movie.runtime} genres={movie.genres} vote_avarage={movie.vote_average} />

      <div className='max-w-4xl mb-6'>
        <DetailsOverview overview={movie.overview} />
      </div>

      <hr className='border-white/5 mb-4' />

      <div className='space-y-4'>
        <DetailsPerson title='Diretor' content={director || 'Não informado'} />
        <DetailsPerson title='Produtores' content={producers || 'Não informado'} />
        <DetailsPerson title='Elenco' content={cast || 'Informação indisponível'} />
      </div>
    </main>
  );

}
