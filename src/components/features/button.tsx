'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ActionButtonProps {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
    icon?: ReactNode;
}

export function ActionButton({
    label,
    href,
    variant = 'primary',
    icon,
}: ActionButtonProps) {
    const baseClasses =
        `
    inline-flex items-center gap-2
    px-4 py-2 md:px-6 md:py-3
    rounded-full
    backdrop-blur-md
    text-base md:text-[20px]
    font-semibold
    whitespace-nowrap
    transition
    `;

    const variants = {
        primary: 'bg-[#E8E8E81A] text-white hover:bg-white/30',
        secondary: 'bg-white/20 text-white hover:bg-white/30',
    };

    const className = `${baseClasses} ${variants[variant]}`;

    const content = (
        <>
            {icon && <span className='flex items-center shrink-0'>{icon}</span>}
            <span className='leading-none'>{label}</span>
        </>
    );

    return (
        <Link
            href={href}
            className={className}>
            {content}
        </Link>
    );

}
