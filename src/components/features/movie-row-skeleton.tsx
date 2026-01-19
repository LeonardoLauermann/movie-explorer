import {MovieCardSkeleton} from './movie-card-skeleton';

export function MovieRowSkeleton() {
  return (
    <div className='mb-8'>
      <div className='mb-4 px-4 md:px-0'>
        <div className='h-7 w-48 bg-[#2a2a2a] rounded animate-pulse' />
      </div>
      <div className='overflow-hidden px-4 md:px-0'>
        <div className='flex gap-4'>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className='flex-[0_0_auto]'>
              <MovieCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
