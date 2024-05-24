import { Stack, Title } from '@mantine/core';
import Image from 'next/image';

export const EmptyMovies = () => (
  <Stack align="center" w="100%">
    <Image src="/empty-movies.svg" alt="empty-movies" width={311} height={252} />
    <Title order={4} ta="center">
      We don&apos;t have such movies, look for another one
    </Title>
  </Stack>
);
