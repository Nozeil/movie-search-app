import { Group, Stack, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '@/components/logo/logo';
import { PrimaryButton } from '@/components/primary-button/primary-button';
import { ROUTES } from '@/constants/constants';

import styles from './not-found.module.css';

const NotFound = () => (
  <Group className={styles.group}>
    <Logo className={styles.logo} />
    <Stack className={styles.stack} align="center" justify="center">
      <Image className={styles.img} src="/404.svg" alt="404" width={656} height={196} />
      <Title className={styles.title} order={4} ta="center">
        We can&apos;t find the page you are looking for
      </Title>
      <PrimaryButton component={Link} size="md" radius="md" href={ROUTES.BASE}>
        Go Home
      </PrimaryButton>
    </Stack>
  </Group>
);

export default NotFound;
