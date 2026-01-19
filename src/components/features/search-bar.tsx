'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search } from 'lucide-react';

export function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get('nome') || '';

  const [term, setTerm] = useState(queryFromUrl);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (pathname !== '/search') {
      setTerm('');
    } else {
      setTerm(queryFromUrl);
    }
  }

  useEffect(() => {
    if (term === queryFromUrl) return;

    if (term.trim()) {
      router.push(`/search?nome=${encodeURIComponent(term)}`);
    } else if (pathname === '/search' && !term && queryFromUrl) {
      router.push('/');
    }
  }, [term, pathname, queryFromUrl, router]);

  return (
    <div className='relative w-full'>
      <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none'>
        <Search className='h-5 w-5 text-gray-400' />
      </div>
      <input
        type='text'
        value={term}
        onChange={e => setTerm(e.target.value)}
        className='w-full bg-[#212121] text-[#FFFFFF] text-sm font-semibold rounded-3xl py-3 pl-12 placeholder-[#666666]'
        placeholder='Pesquisar'
      />
    </div>
  );
}
