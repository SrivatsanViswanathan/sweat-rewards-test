import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import Landing from './pages/Landing';
import { Winners } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { action as landingAction } from './pages/Landing';
// import { loader as landingLoader } from './pages/Landing';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1 hour
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        action: landingAction,
      },
      {
        path: 'winners',
        element: <Winners></Winners>,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
};

export default App;
