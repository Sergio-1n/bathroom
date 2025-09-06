import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='flex items-center justify-between px-6 py-4 shadow-md font-bold'>
      {' '}
      <div className='flex items-center shadow-md rounded-md'>
        <Link href='/' className='hover:text-blue-600 transition'>
          <Image src='/logo.svg' alt='MK Bygg logo' width={120} height={40} />
        </Link>
      </div>
      <nav className='hidden sm:flex md:flex gap-6 shadow-md rounded-md px-2 py-1'>
        <Link href='/' className='hover:text-blue-600 transition'>
          Hem
        </Link>
        <Link href='#' className='hover:text-blue-600 transition'>
          Tjänster
        </Link>
        <Link href='../konfigurator' className='hover:text-blue-600 transition'>
          Projekt
        </Link>
        <Link href='#' className='hover:text-blue-600 transition'>
          Kontakt
        </Link>
      </nav>
    </div>
  );
};

export default Header;
