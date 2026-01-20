
interface DetailsOverviewProps {
    overview: string;
}

export function DetailsOverview({ overview }: DetailsOverviewProps) {
    return (
        <p className='text-[#E8E8E8] text-lg font-normal'>{overview || 'Nenhuma sinopse disponível em português.'}</p>
    );
}