'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { X, Compass, Film, TvMinimalPlay } from 'lucide-react';

import { useNavigation } from '@/context/NavigationContext';
import { Genre } from '@/types/tmdb';

const menuItems = [
  { name: 'Explorar', icon: Compass, href: '/' },
  { name: 'Filmes', icon: Film, href: '/movies' },
  { name: 'Séries', icon: TvMinimalPlay, href: '/series' },
];

interface SidebarProps {
  genres: Genre[];
}

export function Sidebar({ genres }: SidebarProps) {
  const { isSidebarOpen, closeSidebar } = useNavigation();
  const pathname = usePathname();

  return (
    <>
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black/60 z-40 md:hidden'
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`
        fixed top-0 left-0 h-full w-59 bg-[#212121] z-50 transform transition-transform duration-300 ease-in-out
        md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        border-r border-white/10 flex flex-col
      `}>
        <div className='p-6 md:p-0 flex justify-between md:justify-center md:mb-19 md:mt-16'>
          <Link href={"/"}>
            <Image
              src='/mbcplay.svg'
              alt='MBCPLAY'
              width={106}
              height={36}
            />
          </Link>
 
          <button
            className='md:hidden'
            onClick={closeSidebar}>
            <X className='w-6 h-6' />
          </button>
        </div>

        <nav className='flex-1 px-4 flex flex-col min-h-0'>
          <div className='mb-8 shrink-0'>
            <ul className='space-y-1'>
              {menuItems.map((item) => {
                const isActive = item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

                return (
                  <li key={item.name} className="relative px-3">
                    {isActive && (<div className="absolute -right-1  w-1 h-8 bg-white" />)}
                    <Link
                      href={item.href}
                      onClick={closeSidebar}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all
                        ${isActive
                          ? 'text-white font-semibold'
                          : 'text-[#666666] hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#666666]'}`} />
                      <span className='text-sm font-medium'>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='flex-1 px-4 overflow-y-auto min-h-0 pb-4 custom-scrollbar'>
            <p className='text-md text-[#6C6C6C] font-light px-2 mb-3'>
              Categorias
            </p>

            <ul className='space-y-1'>
              {genres.map(genre => (
                <li key={genre.id}>
                  <Link
                    href={{
                      pathname: '/search',
                      query: { genre: genre.id },
                    }}
                    onClick={closeSidebar}
                    className='block px-3 py-1 text-sm text-[#888888]
                               hover:text-white hover:bg-white/5
                               rounded-lg transition-all'
                  >
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
