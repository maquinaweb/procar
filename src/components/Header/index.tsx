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

const themes = {
  light: 'bg-neutral-50 text-neutral-800',
  dark: 'bg-neutral-800 text-neutral-50'
};

const Header: React.FC<{
  theme?: 'light' | 'dark';
}> = ({ theme = 'dark' }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { height: menuHeight } = useResizeObserver({
    ref: menuRef
  });
  const isBelow = useScrollBelow(210);

  const closeMenu = () => setMenuIsOpen(false);

  return (
    <>
      <div
        className={twMerge(
          'top-0 w-full z-50 lg:relative',
          isBelow &&
            '!fixed animate-in slide-in-from-top duration-700',
          menuIsOpen &&
            'fixed z-50 w-full bg-primary-900 lg:relative lg:bg-transparent'
        )}
        ref={menuRef}
      >
        <div
          className={twMerge(
            'text-xs py-2 border-b border-neutral-400/20',
            themes[theme]
          )}
        >
          <div className="flex justify-between mx-auto container px-3">
            <div className="flex items-center gap-3">
              <FaClock size={15} />
              <p>Seg - Sex 8h às 18h</p>
            </div>
            <ul className="flex gap-3 items-center">
              <li className="flex items-center gap-2 cursor-pointer">
                <FaPhone size={16} />
                <p className="hidden sm:block">0800 444 1144</p>
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
            'transition-colors relative w-full py-2 lg:py-5 z-50 shadow-sm lg:shadow-lg shadow-neutral-800 top-0',
            themes[theme]
          )}
        >
          <div className="w-full h-full absolute top-0 bg-noise opacity-15 -z-10" />
          <div
            className={twMerge(
              'flex flex-col h-fit lg:overflow-visible lg:h-auto lg:flex-row lg:justify-between items-center container px-3 mx-auto',
              menuIsOpen && 'h-dvh gap-16 sm:pb-16 lg:pb-3 lg:h-fit'
            )}
          >
            <div className="w-full flex justify-between lg:w-fit items-center">
              <Link href="/">
                <Image
                  src={logoImage}
                  className="absolute top-0 translate-y-[10%] lg:translate-y-[10%] w-16 h-16 lg:w-24 lg:h-24 z-50"
                  alt="Logo image"
                  priority
                />
              </Link>
              <div className="w-16 lg:w-24 h-0 flex" />

              <button
                className={twMerge(
                  'flex iconMenu lg:hidden',
                  menuIsOpen && 'closed'
                )}
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                <span
                  className={
                    theme === 'light'
                      ? 'bg-neutral-800 before:bg-neutral-800 after:bg-neutral-800'
                      : 'bg-neutral-50 before:bg-neutral-50 after:bg-neutral-50'
                  }
                />
              </button>
            </div>

            <nav
              className={twMerge(
                'lg:flex-1 hidden lg:flex justify-center',
                menuIsOpen && 'flex flex-col gap-4'
              )}
            >
              <ul className="flex flex-col gap-8 lg:flex-row lg:gap-6 items-center *:cursor-pointer">
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
      </div>
      <div
        className={twMerge('hidden', isBelow && '!block')}
        style={{
          height: menuHeight
        }}
      />
    </>
  );
};

export default Header;
