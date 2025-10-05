'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image'
import Link from 'next/link'
import DynamicBar from './DynamicBar'
import { ArrowUpRight } from 'lucide-react'

const Header = () => {
  const [pop, setPop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) setPop(true);
      else setPop(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='w-full flex justify-between py-8 px-8 items-center'>
      <Link href={'/'}>
        <Image src="/favicon.webp" alt='Logo' width={200} height={150} />
      </Link>
      <div>
        <DynamicBar />
      </div>
      <Link
        href="/contact"
        className="relative px-5 py-3 flex items-center gap-3 border border-[var(--accent)] rounded-2xl text-[var(--white-color)] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-md transition-all hover:shadow-xl hover:scale-105 hover:bg-[var(--accent)] hover:text-black"
      >
        Contact Me <ArrowUpRight className="transition-transform group-hover:translate-x-1" />
      </Link>
    </header>
  )
}

export default Header
