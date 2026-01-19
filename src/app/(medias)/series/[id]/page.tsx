import { DetailsHeader } from '@/components/features/details/details-header';
import { DetailsOverview } from '@/components/features/details/details-overview';
import { DetailsPerson } from '@/components/features/details/details-person';
import { DetailsPlayer } from '@/components/features/details/details-player';
import { fetchClient } from '@/lib/api';
import { MovieCredits, TvShowDetails } from '@/types/tmdb';
import { notFound } from 'next/navigation';

interface TvShowDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function TvShowDetailsPage({ params }: TvShowDetailsProps) {
  const { id } = await params;

  let data;

  try {
    const [series, credits] = await Promise.all([
      fetchClient<TvShowDetails>(`/tv/${id}`),
      fetchClient<MovieCredits>(`/tv/${id}/credits`)
    ]);

    data = { series, credits };
  } catch (error) {
    console.error('Erro na página de detalhes da série:', error);
    return notFound();
  }

  const { series, credits } = data;

  const cast = credits.cast
    .slice(0, 5)
    .map(c => c.name)
    .join(', ');

  return (
    <main className='min-h-screen text-white p-4 md:p-0 max-w-7xl mx-auto'>
      <DetailsPlayer backdrop_path={series.backdrop_path} alt={series.name} />

      <DetailsHeader
        title={series.name}
        release_date={series.first_air_date}
        runtime={series.number_of_seasons}
        genres={series.genres}
        vote_avarage={series.vote_average}
        serie={true}
      />

      <div className='max-w-4xl mb-6'>
        <DetailsOverview overview={series.overview} />
      </div>

      <hr className='border-white/5 mb-4' />

      <div className='space-y-4'>
        <DetailsPerson title='Elenco' content={cast || 'Informação indisponível'} />
      </div>
    </main>
  );
}