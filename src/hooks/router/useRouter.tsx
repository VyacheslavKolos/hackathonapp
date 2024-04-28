import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Routes from './routes.enum.ts';
import SignInPage from '../../pages/sign-up';
import LogInPage from '../../pages/log-in';
import HomePage from '../../pages/home';
import AdsPage from '../../pages/ads';
import AccessTokenGuard from './components/AccessTokenGuard.tsx';

function getPublicRoutes() {
  return [
    {
      path: Routes.Login,
      element: (
        <AccessTokenGuard>
          <LogInPage />
        </AccessTokenGuard>
      ),
    },
    {
      path: Routes.SignUp,
      element: (
        <AccessTokenGuard>
          <SignInPage />
        </AccessTokenGuard>
      ),
    },
    {
      path: Routes.Home,
      element: <HomePage />,
      children: [
        {
          path: Routes.Ads,
          element: <AdsPage />,
          index: true,
        },
        {
          path: Routes.Requests,
          element: <div>Requests</div>,
        },
        {
          path: Routes.ManageProfile,
          element: <div>Manage Profile</div>,
        },
        {
          path: '*',
          element: <Navigate to={Routes.Ads} />,
        },
      ],
    },
  ];
}

const useRouter = () =>
  createBrowserRouter([
    {
      path: Routes.App,
      element: (
        <div>
          <Outlet />
        </div>
      ),

      children: [
        ...getPublicRoutes(),

        {
          path: '*',
          element: <Navigate to={Routes.Login} />,
        },
      ],
    },

    {
      index: true,
      element: <Navigate to={Routes.Login} />,
    },
  ]);

export default useRouter;
