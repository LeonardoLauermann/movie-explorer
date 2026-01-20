'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { Movie, TvShow } from '@/types/tmdb';
import { BannerCard } from './banner-card';

interface BannerRowProps {
    items: (Movie | TvShow)[];
}

export function BannerRow({ items }: BannerRowProps) {
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        dragFree: true,
        containScroll: 'trimSnaps',
    });

    return (
        <section className='mb-10'>
            <div
                ref={emblaRef}
                className='overflow-hidden cursor-grab active:cursor-grabbing'>
                <div className='flex gap-6 px-4 md:px-0'>
                    {items.map(item => (
                        <BannerCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
