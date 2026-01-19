interface BadgedGenreProps {
    title: string;
}

export function BadgedGenre({ title }: BadgedGenreProps) {
    return (
        <span className='px-4 py-1.5 bg-[#2a2a2a] border border-white/5 rounded-full text-xs font-medium text-gray-300'>
            {title}
        </span>
    );
}