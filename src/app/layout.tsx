import './globals.css';

import {Toaster} from 'sonner';

import {NavigationProvider} from '@/context/NavigationContext';
import QueryProvider from '@/providers/QueryProvider';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';


export default function RootLayout({children}: {children: React.ReactNode}) {
return (
  <html lang='pt-BR'>
    <body>
      <QueryProvider>
        <NavigationProvider>
          <div className='min-h-screen bg-[#191919]'>
            <Sidebar />

            <div className='flex-1 flex flex-col md:ml-64'>
              <header className='p-4 md:p-8 md:pb-0'>
                <Header />
              </header>

              <main className='flex-1 p-4 md:p-8 pt-0'>{children}</main>
              <Toaster
                richColors
                position='top-right'
              />
            </div>
          </div>
        </NavigationProvider>
      </QueryProvider>
    </body>
  </html>
);
}
