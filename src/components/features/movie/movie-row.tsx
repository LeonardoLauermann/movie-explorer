'use client';

import useEmblaCarousel from 'embla-carousel-react';
import {Movie, TvShow} from '@/types/tmdb';
import {MovieCard} from './movie-card';

interface MovieRowProps {
  title: string;
  items: (Movie | TvShow)[];
}

export function MovieRow({title, items}: MovieRowProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  return (
    <div className='mb-8'>
      <h2 className='text-xl font-semibold mb-4 px-4 md:px-0 text-white'>{title}</h2>

      <div
        className='overflow-hidden cursor-grab active:cursor-grabbing'
        ref={emblaRef}>
        <div className='flex gap-4 px-4 md:px-0'>
          {items.map(item => (
            <div
              key={item.id}
              className='flex-[0_0_auto]'>
              <MovieCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
