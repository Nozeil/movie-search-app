import { Group, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { BASE_API_IMAGE_URL } from '@/constants/constants';
import { useLocalStorageRatedStore } from '@/hooks/useLocalStorageRatedStore';
import type { MoviePick } from '@/typings/index';
import { formatCompactNumber } from '@/utils/format-compact-number';

import { PaperBasedWrapper } from '../paper-based-wrapper/paper-based-wrapper';
import { RatingModal } from '../rating-modal/rating-modal';
import { UserRatingButton } from '../user-rating-button/user-rating-button';
import styles from './movie-card.module.css';
import { MovieCardGenres } from './movie-card-genres/movie-card-genres';

const height = 170;

const cx = classNames.bind(styles);

export const MovieCard = ({
  id,
  original_title,
  poster_path,
  release_date,
  vote_average,
  vote_count,
  genre_ids,
}: MoviePick) => {
  const { addMovie, removeMovie, getMovieRating } = useLocalStorageRatedStore(id);
  const [opened, { open, close }] = useDisclosure(false);

  const handleSave = (userRating: number) => {
    addMovie({
      id,
      original_title,
      poster_path,
      release_date,
      vote_average,
      vote_count,
      genre_ids,
      userRating,
    });
    close();
  };

  const handleRemove = () => {
    removeMovie();
    close();
  };

  const releaseYear = release_date.split('-').at(0);
  const movieRating = +vote_average.toFixed(1);
  const votesCountCompact = formatCompactNumber(vote_count);
  const ratedMovieRating = getMovieRating();

  return (
    <PaperBasedWrapper w={{ base: '100%', xl: 482 }}>
      <Group align="flex-start" gap="md" wrap="nowrap">
        <Image
          className={styles.img}
          width={120}
          height={height}
          src={poster_path ? `${BASE_API_IMAGE_URL}${poster_path}` : '/no-poster-sm.svg'}
          alt="poster"
        />

        <Stack w={{ base: '100%', xl: 299 }} h={height} justify="space-between">
          <Group justify="space-between" align="flex-start" wrap="nowrap">
            <Stack gap="xss">
              <Title className={styles.title} order={4}>
                {original_title}
              </Title>
              <Text className={styles.year}>{releaseYear}</Text>
              <Group gap="xss">
                <UserRatingButton ratingProps={{ value: movieRating }}>
                  {movieRating}
                </UserRatingButton>
                <Text className={styles.votesCount}>{`(${votesCountCompact})`}</Text>
              </Group>
            </Stack>

            <RatingModal
              title={original_title}
              ratingDefaultValue={ratedMovieRating}
              opened={opened}
              onClose={close}
              onSave={handleSave}
              onRemove={handleRemove}
            />

            <UserRatingButton
              onClick={open}
              ratingProps={{
                classNames: {
                  label: styles.label,
                  starSymbol: cx({ [styles.starSymbol]: ratedMovieRating }),
                },
                value: ratedMovieRating,
              }}
            >
              {ratedMovieRating}
            </UserRatingButton>
          </Group>

          <MovieCardGenres genre_ids={genre_ids} />
        </Stack>
      </Group>
    </PaperBasedWrapper>
  );
};
