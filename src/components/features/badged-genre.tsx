interface BadgedGenreProps {
    title: string;
}

export function BadgedGenre({ title }: BadgedGenreProps) {
    return (
        <span className='px-5 py-1 border border-[#E8E8E859] rounded-full text-sm md:text-md font-medium text-[#E8E8E8CC]'>
            {title}
        </span>
    );
}