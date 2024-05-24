import { Group, Title } from '@mantine/core';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { poppins } from '@/fonts/index';

import styles from './logo.module.css';

type LogoProps = {
  className?: string;
};

const cx = classNames.bind(styles);

export const Logo = ({ className }: LogoProps) => (
  <Group className={cx(styles.group, className)} gap="sm">
    <Image src="/logo.svg" width={32} height={32} alt="logo" />
    <Title className={cx(poppins.className, styles.title)} order={1} size="h2">
      ArrowFlicks
    </Title>
  </Group>
);
