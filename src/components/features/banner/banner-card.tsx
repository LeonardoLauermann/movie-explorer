import Image from 'next/image';
import { imageUrl } from '@/lib/api';
import { Movie, TvShow } from '@/types/tmdb';
import { ActionButton } from '../button';
import { Info, Play } from 'lucide-react';

interface BannerCardProps {
    item: Movie | TvShow;
}

export function BannerCard({ item }: BannerCardProps) {
    const title = (item as Movie).title || (item as TvShow).name;
    const isMovie = item.media_type === 'movie' || 'title' in item;
    const basePath = isMovie ? 'movies' : 'series';

    return (
        <div className='relative min-w-[85vw] md:min-w-[66vw]'>
            <div className='relative aspect-video max-h-75 min-h-60 w-full overflow-hidden rounded-3xl'>
                <Image
                    src={imageUrl(item.backdrop_path)}
                    alt={title}
                    fill
                    priority
                    className='object-cover'
                />

                <div className='absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent' />

                <div className='absolute bottom-6 right-2 md:right-6'>
                    <div className='flex flex-wrap gap-3'>
                        <ActionButton
                            label='Play'
                            variant='primary'
                            href={`/${basePath}/${item.id}`}
                            icon={<Play size={16} />}
                        />

                        <ActionButton
                            label='Detalhes'
                            variant='primary'
                            href={`/${basePath}/${item.id}`}
                            icon={<Info size={16} />}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}
