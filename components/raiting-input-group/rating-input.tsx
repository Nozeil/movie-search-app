'use client';

import { NumberInput, type NumberInputHandlers, type NumberInputProps } from '@mantine/core';
import { useRef } from 'react';

import { RATINGS } from '@/constants/index';

import { Controls } from './controls/controls';

const { MIN, MAX } = RATINGS;

export const RatingInput = (props: NumberInputProps) => {
  const handlersRef = useRef<NumberInputHandlers>();

  const handleUpClick = () => handlersRef.current?.increment();
  const handleDownClick = () => handlersRef.current?.decrement();

  return (
    <NumberInput
      handlersRef={handlersRef}
      size="md"
      min={MIN}
      max={MAX}
      rightSection={
        <Controls
          actionIconProps={{ size: 12, variant: 'transparent' }}
          upOnClick={handleUpClick}
          downOnClick={handleDownClick}
        />
      }
      rightSectionWidth={35}
      {...props}
    />
  );
};
