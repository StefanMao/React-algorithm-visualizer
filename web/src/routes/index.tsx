import type { RouteObject } from 'react-router-dom';

import pathConstants from '@/routes/pathConstants';
import { Home, LetterMatchGame } from './lazyComponent';

const routes: RouteObject[] = [
  { path: pathConstants.HOME, element: <Home /> },
  { path: pathConstants.LETTER_MATCH_GAME, element: <LetterMatchGame /> },
];

export default routes;
