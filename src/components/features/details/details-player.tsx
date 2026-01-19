import Image from 'next/image';

import { Play } from 'lucide-react';
import { imageUrl } from '@/lib/api';

interface DetailsPlayerProps {
    alt: string,
    backdrop_path: string,
}

export function DetailsPlayer({ alt, backdrop_path }: DetailsPlayerProps) {
    return (
        <div className='relative w-full aspect-video md:aspect-8/2 rounded-3xl overflow-hidden mb-8 group shadow-2xl hover:cursor-pointer'>
            <Image
                src={imageUrl(backdrop_path)}
                alt={alt}
                fill
                priority
                className='object-cover transition-transform duration-700 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black/30 flex flex-col items-center justify-center transition-colors group-hover:bg-black/20'>
                <button className='w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl hover:cursor-pointer'>
                    <Play className='w-8 h-8 md:w-12 md:h-12 fill-white text-white translate-x-1' />
                </button>
                <span className='mt-4 text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-md'>Assistir trailer</span>
            </div>
        </div>
    );
}