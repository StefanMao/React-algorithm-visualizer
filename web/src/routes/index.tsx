import type { RouteObject } from 'react-router-dom';

import { PathConstants } from './pathConstants';
import { Home } from './lazyComponent';

const routes: RouteObject[] = [
  { path: PathConstants.HOME, element: <Home /> },
];

export default routes;
