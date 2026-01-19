
interface DetailsOverviewProps {
    overview: string;
}

export function DetailsOverview({ overview }: DetailsOverviewProps) {
    return (
        <p className='text-gray-400 text-lg leading-relaxed italic md:not-italic'>{overview || 'Nenhuma sinopse disponível em português.'}</p>
    );
}