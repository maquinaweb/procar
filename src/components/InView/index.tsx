'use client';

import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const InView: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) {
      setVisible(false);
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisible(true);
          }
        },
        {
          threshold: 0.4
        }
      );
      observer.observe(ref.current as Element);
      return () => {
        observer.disconnect();
      };
    }
  }, [children]);

  return (
    <div ref={ref} className={twMerge(visible && 'contents')}>
      {visible && children}
    </div>
  );
};

export default InView;
