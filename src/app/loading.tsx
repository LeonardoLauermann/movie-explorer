import {MovieRowSkeleton} from '@/components/features/movie-row-skeleton';

export default function Loading() {
  return (
    <div className='space-y-8'>
      <MovieRowSkeleton />
      <MovieRowSkeleton />
    </div>
  );
}
