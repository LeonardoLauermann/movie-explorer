'use client';

import {useEffect} from 'react';
import {toast} from 'sonner';

export default function Error({error, reset}: {error: Error & {digest?: string}; reset: () => void}) {
  useEffect(() => {
    toast.error('Erro', {
      description: error.message,
    });
  }, [error]);

  return (
    <div className='flex flex-col items-center justify-center min-h-[50vh] text-white'>
      <h2 className='text-xl font-bold mb-4'>Algo deu errado!</h2>
      <button
        onClick={() => reset()}
        className='bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors'>
        Tentar novamente
      </button>
    </div>
  );
}
