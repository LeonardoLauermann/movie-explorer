'use client';

import Link from 'next/link';
import {useNavigation} from '@/context/NavigationContext';
import {X, Compass, Film, TvMinimalPlay} from 'lucide-react';
import Image from 'next/image';


const menuItems = [
  {name: 'Explorar', icon: Compass, href: '/'},
  {name: 'Filmes', icon: Film, href: '/movies'},
  {name: 'Séries', icon: TvMinimalPlay, href: '/series'},
];

const categories = ['Ação', 'Horror', 'Aventura', 'Animação', 'Crime', 'Documentário'];

export function Sidebar() {
  const {isSidebarOpen, closeSidebar} = useNavigation();

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
          <Image
            src='/mbcplay.svg'
            alt='MBCPLAY'
            width={106}
            height={36}
          />
          <button
            className='md:hidden'
            onClick={closeSidebar}>
            <X className='w-6 h-6' />
          </button>
        </div>

        <nav className='flex-1 overflow-y-auto px-4 '>
          <div className='mb-8'>
            <ul className='space-y-1'>
              {menuItems.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeSidebar}
                    className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-[#666666] hover:text-white'>
                    <item.icon className='w-5 h-5' />
                    <span className='text-sm font-medium'>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className='text-lg text-[#666666] font-semibold px-2 mb-3'>Categorias</p>
            <ul>
              {categories.map(cat => (
                <li key={cat}>
                  <button className='w-full text-left px-3 py-1 text-sm text-[#666666] hover:text-white hover:bg-white/5 rounded-lg transition-all'>{cat}</button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
}
