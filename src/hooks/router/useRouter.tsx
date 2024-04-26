import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Routes from './routes.enum.ts';
import SignInPage from '../../pages/sign-in';
import LogInPage from '../../pages/log-in';

function getPublicRoutes() {
  return [
    {
      path: Routes.Login,
      element: <LogInPage />,
    },
    {
      path: Routes.SignUp,
      element: <SignInPage />,
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
