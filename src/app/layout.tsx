import { Metadata } from 'next';

import './globals.css';

import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: `Procar Prime`,
  description: `Nós da PROCAR acreditamos que seu carro nasceu para brilhar. Não perca tempo, venha conferir nossos serviços. Faça um orçamento!`
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
