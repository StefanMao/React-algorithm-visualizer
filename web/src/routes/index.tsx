import type { RouteObject } from 'react-router-dom';

import pathConstants  from '@/routes/pathConstants';
import Home from './lazyComponent';

const routes: RouteObject[] = [
  { path: pathConstants.HOME, element: <Home /> },
];

export default routes;
