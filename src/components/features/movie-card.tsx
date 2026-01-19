import Image from 'next/image';
import Link from 'next/link';
import {imageUrl} from '@/lib/api';
import {MovieRating} from './movie-rating';
import {Movie, MovieCardProps, TvShow} from '@/types/tmdb';

export function MovieCard({item}: MovieCardProps) {
  const title = (item as Movie).title || (item as TvShow).name;

  const isMovie = item.media_type === 'movie' || 'title' in item;
  const basePath = isMovie ? 'movies' : 'series';

  return (
    <Link
      href={`/${basePath}/${item.id}`}
      className='block relative group cursor-pointer min-w-40 md:min-w-50 transition-all'>
      <div className='relative aspect-2/3 overflow-hidden rounded-lg'>
        <Image
          src={imageUrl(item.poster_path)}
          alt={title}
          fill
          className='object-cover transition-transform duration-300 group-hover:scale-105'
          sizes='(max-width: 768px) 160px, 200px'
        />

        <MovieRating item={item} />
      </div>
    </Link>
  );
}
