import { Genre } from '@/types/tmdb';
import { BadgedGenre } from '../badged-genre';
import { DetailsRating } from './details-rating';
import { DetailsInfoMedia } from './details-media';

interface DetailsHeaderProps {
    title: string,
    release_date: string,
    runtime: number,
    genres: Genre[],
    vote_avarage: number,
    serie?:boolean
}

export function DetailsHeader({ title, release_date, runtime, genres, vote_avarage,serie }: DetailsHeaderProps) {
    return (
        <div className='max-w-4xl'>
            <div className='flex flex-wrap items-center justify-between mb-6'>
                <DetailsInfoMedia title={title} release_date={release_date} runtime={runtime} serie={serie} />
                <div className='flex flex-wrap items-center gap-4'>
                    <div className='flex  flex-wrap gap-2'>
                        {genres.map(genero => (
                            <BadgedGenre key={genero.id} title={genero.name} />
                        ))}
                    </div>
                    <DetailsRating rating={vote_avarage} />
                </div>
            </div>
        </div>
    );
}