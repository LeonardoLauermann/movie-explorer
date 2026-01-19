'use client';
import Image from 'next/image';

import { Menu } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import { SearchBar } from '../features/search-bar';
import { Suspense } from 'react';

export function Header() {
  const { toggleSidebar } = useNavigation();

  return (
    <div className='w-full flex items-center gap-4 justify-between'>
      <button
        onClick={toggleSidebar}
        className='md:hidden p-2 hover:bg-white/10 rounded-full transition-colors'>
        <Menu className='w-6 h-6 text-white' />
      </button>

      <div className='flex-1 max-w-222.25'>
        <Suspense fallback={null}>
          <SearchBar />
        </Suspense>
      </div>

      <div className='relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-transparent hover:border-green-500 transition-all cursor-pointer'>
        <Image
          src='/kakashi.svg'
          alt='Logo de Usuário'
          width={106}
          height={36}
        />
      </div>
    </div>

  );
}
