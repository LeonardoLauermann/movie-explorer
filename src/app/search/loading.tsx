import { MovieCardSkeleton } from '@/components/features/movie/movie-card-skeleton';

export default function Loading() {
  return (
    <div className='p-4 md:p-0'>
      <div className='h-8 w-64 bg-[#2a2a2a] rounded mb-6 animate-pulse' />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {[...Array(10)].map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
