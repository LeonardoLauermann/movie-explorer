export function MovieCardSkeleton() {
  return (
    <div className='min-w-40 md:min-w-50 animate-pulse'>
      <div className='aspect-2/3 w-full bg-[#2a2a2a] rounded-lg' />
      <div className='mt-3 h-4 w-3/4 bg-[#2a2a2a] rounded' />
      <div className='mt-2 h-3 w-1/4 bg-[#2a2a2a] rounded' />
    </div>
  );
}
