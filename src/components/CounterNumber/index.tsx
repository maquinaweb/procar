'use client';

import AnimatedNumber from 'animated-number-react';

const CounterNumberCrescent: React.FC<{
  number: number;
  duration?: number;
}> = ({ number, duration = 3 }) => {
  const formatValue = (value: number) =>
    Math.floor(value).toLocaleString();

  return (
    <AnimatedNumber
      value={number}
      formatValue={formatValue}
      duration={duration * 1000}
    />
  );
};

export default CounterNumberCrescent;
