'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { BannerCardSkeleton } from './banner-card-skeleton';

interface BannerRowSkeletonProps {
    count?: number;
}

export function BannerRowSkeleton({ count = 3 }: BannerRowSkeletonProps) {
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        dragFree: true,
        containScroll: 'trimSnaps',
    });

    return (
        <section className='mb-10'>
            <div
                ref={emblaRef}
                className='overflow-hidden cursor-grab'>
                <div className='flex gap-6 px-4 md:px-0'>
                    {Array.from({ length: count }).map((_, index) => (
                        <BannerCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
