'use client';

import { Group, Pagination } from '@mantine/core';
import { usePagination } from '@mantine/hooks';
import { useMemo } from 'react';

type ThreePagesPaginationProps = {
  total: number;
  page: number;
  onChange: (page: number) => void;
};

const pagesCount = 3;
const siblings = 1;
const boundaries = 0;

export const ThreePagesPagination = ({ total, page, onChange }: ThreePagesPaginationProps) => {
  const pagination = usePagination({
    total,
    siblings,
    boundaries,
    onChange,
    page,
  });

  const pages = useMemo(() => {
    const pagesWithoutDots = pagination.range.filter((value) => value !== 'dots') as number[];
    const lastPage = pagesWithoutDots.at(-1);
    const penultimatePage = pagesWithoutDots.at(-2);
    const pagesSize = pagesWithoutDots.length;

    if (pagesSize > pagesCount) {
      if (penultimatePage === pagination.active || lastPage === pagination.active) {
        return pagesWithoutDots.slice(-pagesCount, pagesSize);
      }

      return pagesWithoutDots.slice(0, pagesCount);
    }

    return pagesWithoutDots;
  }, [pagination.active, pagination.range]);

  return total > 1 ? (
    <Pagination.Root
      total={total}
      boundaries={boundaries}
      siblings={siblings}
      value={pagination.active}
    >
      <Group gap="xss">
        <Pagination.Previous onClick={pagination.previous} />

        {pages.map((pageValue) => (
          <Pagination.Control
            key={pageValue}
            onClick={() => onChange(pageValue)}
            active={pageValue === page}
          >
            {pageValue}
          </Pagination.Control>
        ))}

        <Pagination.Next onClick={pagination.next} />
      </Group>
    </Pagination.Root>
  ) : null;
};
