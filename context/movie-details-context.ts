import { createContext } from 'react';

import type { Nullable } from '@/typings/utils';

import type { GetMovieDetailsResponse } from '../models';

export const MovieDetailsContext = createContext<Nullable<GetMovieDetailsResponse>>(null);
