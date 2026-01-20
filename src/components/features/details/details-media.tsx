import { formatRuntime } from '@/lib/utils';

interface DetailsInfoMediaProps {
    title: string,
    release_date: string,
    runtime: number,
    serie?: boolean
}

export function DetailsInfoMedia({ title, release_date, runtime, serie }: DetailsInfoMediaProps) {
    return (
        <div className='flex flex-wrap items-center gap-2 text-[#E8E8E8] text-md md:text-2xl'>
            <h1>{title}</h1>
            <span className='hidden md:inline'>•</span>
            <span className='flex items-center gap-1'>{new Date(release_date).getFullYear()}</span>
            <span>•</span>
            {serie ? <span className='flex items-center gap-1'>{runtime} temporadas</span> : <span className='flex items-center gap-1'>{formatRuntime(runtime)}</span>}

        </div>
    );
}