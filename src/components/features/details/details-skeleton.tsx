export function DetailsSkeleton() {
    return (
        <main className='min-h-screen p-4 md:p-0 max-w-7xl mx-auto animate-pulse'>

            <div className='relative w-full aspect-video md:aspect-8/2 rounded-3xl bg-zinc-800 mb-8' />

            <div className='max-w-4xl mb-6'>
                <div className='flex flex-wrap items-center justify-between gap-4'>
                    <div className='space-y-3'>
                        <div className='h-8 w-64 bg-zinc-800 rounded-md' />
                        <div className='h-4 w-40 bg-zinc-800 rounded-md' />
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='flex gap-2'>
                            <div className='h-6 w-16 bg-zinc-800 rounded-full' />
                            <div className='h-6 w-16 bg-zinc-800 rounded-full' />
                            <div className='h-6 w-16 bg-zinc-800 rounded-full' />
                        </div>
                        <div className='h-10 w-10 bg-zinc-800 rounded-full' />
                    </div>
                </div>
            </div>

            <div className='max-w-4xl mb-6 space-y-2'>
                <div className='h-4 w-full bg-zinc-800 rounded-md' />
                <div className='h-4 w-full bg-zinc-800 rounded-md' />
                <div className='h-4 w-3/4 bg-zinc-800 rounded-md' />
            </div>

            <hr className='border-white/5 mb-4' />

            <div className='space-y-2'>
                <div className='h-5 w-20 bg-zinc-800 rounded-md' />
                <div className='h-4 w-1/2 bg-zinc-800 rounded-md' />
            </div>

        </main>
    );
}