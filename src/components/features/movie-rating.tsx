import {MovieCardProps} from '@/types/tmdb';

export function MovieRating({item}: MovieCardProps) {
  return <div className='absolute  right-0 bg-[#E8E8E826] backdrop-blur-sm px-2 py-1 rounded rounded-bl-2xl text-xs font-bold text-yellow-400'>★ {item.vote_average?.toFixed(1) || '0.0'}</div>;
}
