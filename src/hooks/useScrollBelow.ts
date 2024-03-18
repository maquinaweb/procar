import { useEffect, useState } from 'react';

const isBrowser = typeof window !== `undefined`;

function getScrollYPosition(): number {
  return isBrowser ? window.pageYOffset : 0;
}

export function useScrollBelow(positionY: number) {
  const [position, setScrollPosition] = useState(false);

  useEffect(() => {
    let requestRunning: number | null = null;
    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollYPosition() > positionY);
          requestRunning = null;
        });
      }
    }

    if (isBrowser) {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [positionY]);

  return position;
}
