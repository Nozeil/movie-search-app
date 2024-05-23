'use client';

import { AspectRatio, Stack, Title } from '@mantine/core';
import { MovieDetailsContext } from 'context/movie-details-context';
import { useContext } from 'react';

import { VIDEO_HOSTS, VIDEO_URLS } from '@/constants/constants';

import styles from './trailer.module.css';

const { YOUTUBE, VIMEO } = VIDEO_HOSTS;

export const Trailer = () => {
  const details = useContext(MovieDetailsContext);
  const video = details?.videos?.results[0];

  if (!video) {
    return null;
  }

  const key = video?.key;

  let src;

  if (video && video.site === YOUTUBE) {
    src = `${VIDEO_URLS[YOUTUBE]}${key}`;
  }

  if (video && video.site === VIMEO) {
    src = `${VIDEO_URLS[VIMEO]}${key}`;
  }

  return (
    <Stack>
      <Title className={styles.title} order={4}>
        Trailer
      </Title>

      <AspectRatio ratio={16 / 9} w={500}>
        <iframe
          className={styles.iframe}
          src={src}
          title="trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </AspectRatio>
    </Stack>
  );
};
