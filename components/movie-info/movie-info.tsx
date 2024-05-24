import { Divider, Stack, useMantineTheme } from '@mantine/core';
import { MovieDetailsContext } from 'context/movie-details-context';
import { useContext } from 'react';

import { PaperBasedWrapper } from '../paper-based-wrapper/paper-based-wrapper';
import { Description } from './description';
import { Production } from './production/production';
import { Trailer } from './trailer/trailer';

export const MovieInfo = () => {
  const details = useContext(MovieDetailsContext);
  const theme = useMantineTheme();
  const color = theme.colors.grey[3];

  if (
    !details?.videos?.results.length &&
    !details?.overview &&
    !details?.production_companies?.length
  ) {
    return null;
  }

  return (
    <PaperBasedWrapper>
      <Stack gap={20}>
        <Trailer />
        <Divider color={color} />
        <Description />
        <Divider color={color} />
        <Production />
      </Stack>
    </PaperBasedWrapper>
  );
};
