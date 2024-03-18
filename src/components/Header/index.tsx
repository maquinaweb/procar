'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaYoutube
} from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';
import { useResizeObserver } from 'usehooks-ts';

import { pages } from '@/data/pages';
import { useScrollBelow } from '@/hooks/useScrollBelow';
import logoImage from '@/public/icon.png';

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { height } = useResizeObserver({
    ref: headerRef
  });
  const isBelow = useScrollBelow(140);

  const closeMenu = () => setMenuIsOpen(false);

  return (
    <div>
      <div className="bg-neutral-900 text-xs text-neutral-50 py-2 border-b border-neutral-400/20">
        <div className="flex justify-between mx-auto container">
          <div className="flex items-center gap-3">
            <FaClock size={15} />
            <p>Seg - Sex 8h às 18h</p>
          </div>
          <ul className="flex gap-3 items-center">
            <li className="flex items-center gap-2 cursor-pointer">
              <FaPhone size={16} />
              <p>0800 444 1144</p>
            </li>
            <li className="cursor-pointer transition-colors hover:text-neutral-400">
              <FaInstagram size={16} />
            </li>
            <li className="cursor-pointer transition-colors hover:text-neutral-400">
              <FaFacebookF size={16} />
            </li>
            <li className="cursor-pointer transition-colors hover:text-neutral-400">
              <FaYoutube size={16} />
            </li>
          </ul>
        </div>
      </div>
      <header
        className={twMerge(
          'transition-colors relative w-full !bg-neutral-900 py-2 lg:py-5 z-50 shadow-lg shadow-neutral-900 top-0 lg:animate-fadeInDown',
          menuIsOpen &&
            'fixed z-50 w-full bg-primary-900 lg:relative lg:bg-transparent',
          isBelow && 'fixed animate-down'
        )}
        ref={headerRef}
      >
        <div className="w-full h-full absolute top-0 bg-noise opacity-15 -z-10" />
        <div
          className={twMerge(
            'flex flex-col h-fit lg:overflow-visible lg:h-auto lg:flex-row lg:justify-between items-center container mx-auto',
            menuIsOpen && 'h-dvh gap-16 sm:pb-16 lg:pb-3 lg:h-fit'
          )}
        >
          <div className="hidden lg:w-fit lg:flex justify-center items-center">
            <Link href="/">
              <Image
                src={logoImage}
                className="absolute bottom-0 translate-y-1/4 w-24 h-24"
                alt="Logo image"
                priority
              />
            </Link>
            <div className="w-24 h-0" />
          </div>

          <nav
            className={twMerge(
              'lg:flex-1 hidden lg:flex justify-center',
              menuIsOpen && 'flex flex-col gap-4'
            )}
          >
            <ul className="flex flex-col gap-8 lg:flex-row lg:gap-6 items-center text-blue-100 *:cursor-pointer">
              {pages.map((page) => (
                <Link
                  key={page.slug}
                  href={page.url}
                  onClick={closeMenu}
                >
                  <li>{page.name}</li>
                </Link>
              ))}
            </ul>
          </nav>

          <div
            className={twMerge(
              'hidden lg:flex lg:flex-row justify-end items-center gap-8',
              menuIsOpen && 'flex flex-col gap-8'
            )}
          >
            <button className="flex h-fit lg:h-full rounded-md gap-3 items-center px-8 py-2 text-neutral-50 bg-red-900 text-sm font-semibold transition-all hover:brightness-90 active:brightness-110">
              Loja
            </button>
          </div>
        </div>
      </header>
      <div
        className={twMerge(
          'lg:hidden',
          menuIsOpen && 'hidden',
          isBelow && '!block'
        )}
        style={{
          height: (height || 0) + 8
        }}
      />
    </div>
  );
};

export default Header;
