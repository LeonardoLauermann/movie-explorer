
interface DetailsPersonProps {
    title: string,
    content: string,
}

export function DetailsPerson({ title, content }: DetailsPersonProps) {
    return (
        <section>
            <h3 className='text-white font-bold text-xl mb-1'>{title}</h3>
            <p className='text-white font-normal text-xl'>{content}</p>
        </section>
    );
}