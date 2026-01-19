
interface DetailsPersonProps {
    title: string,
    content: string,
}

export function DetailsPerson({ title, content }: DetailsPersonProps) {
    return (
        <section>
            <h3 className='text-white font-bold text-lg mb-1'>{title}</h3>
            <p className='text-gray-400 font-medium leading-relaxed'>{content}</p>
        </section>
    );
}