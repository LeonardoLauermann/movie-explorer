import { BannerRowSkeleton } from '@/components/features/banner/banner-row-skeleton';
import {MovieRowSkeleton} from '@/components/features/movie/movie-row-skeleton';

export default function Loading() {
  return (
    <div className='space-y-8'>
      <BannerRowSkeleton />
      <MovieRowSkeleton />
      <MovieRowSkeleton />
    </div>
  );
}
