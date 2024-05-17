import { Group, Title } from '@mantine/core';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { poppins } from '@/fonts/index';

import styles from './logo.module.css';

const cx = classNames.bind(styles);

export const Logo = () => (
  <Group className={styles.group} gap="sm">
    <Image src="/logo.svg" width={32} height={32} alt="logo" />
    <Title className={cx(poppins.className, styles.title)} order={1} size="h2">
      ArrowFlicks
    </Title>
  </Group>
);
