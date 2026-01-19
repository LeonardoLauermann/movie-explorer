import { Star } from 'lucide-react';

interface DetailsRatingProps {
    rating: number;
}

export function DetailsRating({ rating }: DetailsRatingProps) {
    return (
        <div className='flex items-center gap-2 text-[#fbbf24] px-3 py-1 rounded-lg'>
            <Star className='w-5 h-5 fill-current' />
            <span className='font-bold text-white text-lg'>{rating.toFixed(1)}</span>
        </div>
    );
}