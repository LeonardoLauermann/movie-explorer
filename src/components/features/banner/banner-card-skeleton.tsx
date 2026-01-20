export function BannerCardSkeleton() {
    return (
        <div className='relative min-w-[85vw] md:min-w-[70vw] lg:min-w-[60vw]'>
            <div className='relative aspect-video max-h-75 min-h-60 w-full overflow-hidden rounded-3xl bg-white/10 animate-pulse'>
                <div className='absolute inset-0 bg-linear-to-r from-black/40 via-black/20 to-transparent' />
                <div className='absolute bottom-6 right-3 md:right-6'>
                    <div className='flex flex-wrap gap-3'>
                        <div className='h-10 w-28 rounded-full bg-white/20' />
                        <div className='h-10 w-32 rounded-full bg-white/20' />
                    </div>
                </div>
            </div>
        </div>
    );
}
