import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

import Layout from '@/components/Layout';
import Page404 from '@/pages/Page404';
import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;