'use client';

import CloudMoon from '@/components/CloudMoon';
import CloudSun from '@/components/CloudSun';
import { useEffect, useState } from 'react';

export default function DarkMode({ className }: { className?: string }) {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'light';
        setTheme(saved);
        document.documentElement.classList.toggle('dark', saved === 'dark');
    }, []);
    const toggleTheme = (v: string) => {
        setTheme(v);
        localStorage.setItem('theme', v);
        document.documentElement.classList.toggle('dark', v === 'dark');
    };
    return (
        <div className={className}>
            {theme === 'light'
                ? <CloudMoon onClick={() => toggleTheme('dark')} />
                : <CloudSun onClick={() => toggleTheme('light')} />}
        </div>
    );
}