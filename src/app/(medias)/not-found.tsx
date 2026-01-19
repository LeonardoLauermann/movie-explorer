'use client'

import { useEffect } from 'react';
import { toast } from 'sonner';

export default function NotFound() {
    useEffect(() => {
        toast.error('', {
            description: 'Nenhum resultado encontrado para sua busca.',
        });
    }, []);

    return (
        <p className='text-gray-400 font-medium'>Nenhum resultado encontrado para sua busca.</p>
    )
}