import {MovieCardProps} from '@/types/tmdb';

export function MovieRating({item}: MovieCardProps) {
  return <div className='absolute top-2 right-2 bg-black/60 px-2 py-1 rounded text-xs font-bold text-yellow-400 flex items-center gap-1'>★ {item.vote_average?.toFixed(1) || '0.0'}</div>;
}
